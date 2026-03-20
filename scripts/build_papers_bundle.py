#!/usr/bin/env python3

from __future__ import annotations

import argparse
import json
from pathlib import Path


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Merge datas/*.json into a single bundle for the static page.",
    )
    parser.add_argument(
        "--manifest",
        default="data.js",
        help="Path to data.js manifest file.",
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


def load_manifest(path: Path) -> dict:
    text = path.read_text(encoding="utf-8").strip()
    prefix = "window.LAB_PAPERS_DATA = "

    if not text.startswith(prefix):
        raise ValueError(f"Unexpected manifest format: {path}")

    payload = text[len(prefix):]

    if payload.endswith(";"):
        payload = payload[:-1]

    return json.loads(payload)


def build_bundle(manifest: dict, datas_dir: Path) -> dict:
    paper_ids = manifest.get("paperFiles", [])
    papers = []
    missing = []

    for paper_id in paper_ids:
        paper_path = datas_dir / f"{paper_id}.json"
        print(paper_id)
        if not paper_path.exists():
            missing.append(paper_id)
            continue

        papers.append(json.loads(paper_path.read_text(encoding="utf-8")))

    if missing:
        missing_text = ", ".join(missing[:5])
        raise FileNotFoundError(f"Missing paper JSON files: {missing_text}")

    return {
        "papers": papers,
    }


def write_outputs(bundle: dict, js_output: Path) -> None:
    bundle_body = json.dumps(bundle, ensure_ascii=False, indent=2)
    js_output.write_text(f"window.LAB_PAPERS_BUNDLE = {bundle_body};\n", encoding="utf-8")


def main() -> None:
    args = parse_args()
    manifest_path = Path(args.manifest).resolve()
    datas_dir = Path(args.datas_dir).resolve()
    js_output = Path(args.js_output).resolve()

    manifest = load_manifest(manifest_path)
    bundle = build_bundle(manifest, datas_dir)
    write_outputs(bundle, js_output)

    print(f"Merged {len(bundle['papers'])} papers")
    print(f"JS:   {js_output}")


if __name__ == "__main__":
    main()
