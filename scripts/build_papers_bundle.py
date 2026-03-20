#!/usr/bin/env python3

from __future__ import annotations

import argparse
import json
from json import JSONDecodeError
from pathlib import Path


KNOWN_CCF_FIELDS = [
    "计算机体系结构/并行与分布计算/存储系统",
    "计算机网络",
    "网络与信息安全",
    "软件工程/系统软件/程序设计语言",
    "数据库/数据挖掘/内容检索",
    "计算机科学理论",
    "计算机图形学与多媒体",
    "人工智能",
    "人机交互与普适计算",
    "交叉/综合/新兴",
]

KNOWN_RESEARCH_DIRECTIONS = [
    "网络与算网融合",
    "隐私计算",
    "大模型推理与训练",
    "量子智能",
    "医学智能",
    "脑机与生成式智能",
    "AI for Science",
]

CCF_FIELD_ABBR = {
    "计算机体系结构/并行与分布计算/存储系统": "体系结构",
    "计算机网络": "计算机网络",
    "网络与信息安全": "网络安全",
    "软件工程/系统软件/程序设计语言": "软件工程",
    "数据库/数据挖掘/内容检索": "数据库/挖掘",
    "计算机科学理论": "CS理论",
    "计算机图形学与多媒体": "图形学/多媒体",
    "人工智能": "人工智能",
    "人机交互与普适计算": "人机交互",
    "交叉/综合/新兴": "交叉/新兴",
}


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Merge datas/*.json into a single bundle for the static page.",
    )
    parser.add_argument(
        "--datas-dir",
        default="datas",
        help="Directory containing per-paper JSON files.",
    )
    parser.add_argument(
        "--js-output",
        default="papers-data.js",
        help="Output path for browser-readable JS bundle.",
    )
    return parser.parse_args()


def build_bundle(datas_dir: Path) -> dict:
    paper_paths = sorted(datas_dir.glob("*.json"))
    papers = []
    ccf_fields = []
    research_directions = []
    seen_fields = set()
    seen_directions = set()

    if not paper_paths:
        raise FileNotFoundError(f"No JSON files found in: {datas_dir}")

    for paper_path in paper_paths:
        try:
            paper = json.loads(paper_path.read_text(encoding="utf-8"))
        except JSONDecodeError as error:
            raise ValueError(f"Invalid JSON in {paper_path.name}: {error}") from error

        papers.append(paper)

        for field in paper.get("fields", []):
            if field not in seen_fields:
                seen_fields.add(field)
                ccf_fields.append(field)

        directions_source = paper.get("researchDirections") if "researchDirections" in paper else paper.get("researchDirection")
        directions = flatten_to_strings(directions_source)

        for direction in directions:
            if direction not in seen_directions:
                seen_directions.add(direction)
                research_directions.append(direction)

    ordered_fields = ordered_values(ccf_fields, KNOWN_CCF_FIELDS)
    ordered_directions = ordered_values(research_directions, KNOWN_RESEARCH_DIRECTIONS)

    return {
        "papers": papers,
        "ccfFields": ordered_fields,
        "researchDirections": ordered_directions,
        "ccfFieldAbbr": {
            field: CCF_FIELD_ABBR.get(field, field)
            for field in ordered_fields
        },
    }


def ordered_values(values: list[str], preferred_order: list[str]) -> list[str]:
    preferred = [value for value in preferred_order if value in values]
    remaining = sorted(value for value in values if value not in preferred_order)
    return preferred + remaining


def flatten_to_strings(value) -> list[str]:
    items = []

    def visit(node) -> None:
        if node is None:
            return
        if isinstance(node, list):
            for child in node:
                visit(child)
            return

        text = str(node).strip()
        if text:
            items.append(text)

    visit(value)

    unique_items = []
    seen = set()
    for item in items:
        if item in seen:
            continue
        seen.add(item)
        unique_items.append(item)

    return unique_items


def write_outputs(bundle: dict, js_output: Path) -> None:
    bundle_body = json.dumps(bundle, ensure_ascii=False, indent=2)
    js_output.write_text(f"window.LAB_PAPERS_BUNDLE = {bundle_body};\n", encoding="utf-8")


def main() -> None:
    args = parse_args()
    datas_dir = Path(args.datas_dir).resolve()
    js_output = Path(args.js_output).resolve()

    bundle = build_bundle(datas_dir)
    write_outputs(bundle, js_output)

    print(f"Merged {len(bundle['papers'])} papers")
    print(f"JS:   {js_output}")


if __name__ == "__main__":
    main()
