#!/usr/bin/env python3

from __future__ import annotations

import re
import shutil
import zipfile
from dataclasses import dataclass
from io import BytesIO
from pathlib import Path
import xml.etree.ElementTree as ET

from PIL import Image


DOCX_PATH = Path("量超智LAB 研究方向与代表性成果.docx")
FIGURES_DIR = Path("figures")

NS = {
    "w": "http://schemas.openxmlformats.org/wordprocessingml/2006/main",
    "a": "http://schemas.openxmlformats.org/drawingml/2006/main",
    "r": "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
}

TARGET_FILENAMES = {
    "1. 多路径路由场景下的网内流量分析模型部署": "JSAC2025VerifyAllTraffic",
    "2. QCLink：利用SmartNIC对量子-经典混合算法进行计算卸载": "LAB2026QCLinkSmartNICQuantumClassicalOffloading",
    "3. CUPTI Agent + eBPF Agent 关联监测": "LAB2026CUPTIAgenteBPFAgentMonitoring",
    "1. 密文乘明文常量感知全同态隐私推理加速框架优化": "LAB2026ConstantAwareFHEPrivateInferenceAcceleration",
    "2. 面向TFHE的多常数乘法隐私推理加速": "LAB2026TFHEMultiConstantPrivateInferenceAcceleration",
    "1. 通用大模型推理场景下的语义检索投机解码技术": "LAB2026SemanticRetrievalSpeculativeDecoding",
    "2. 异构算力环境下的高保真大模型训练仿真框架": "LAB2026HighFidelityLLMTrainingSimulation",
    "3. BCI：Adaptive Bandwidth-Compution-Interleaving for LLM Inference": "LAB2026BCIAdaptiveBandwidthComputationInterleaving",
    "1. 基于量子先验分子表征融合神经网络的分子性质预测": "LAB2026QuantumPriorMolecularPropertyPrediction",
    "2. MAQCal：面向多智能体协作的自动化量子读出校准": "LAB2026MAQCalMultiAgentQuantumReadoutCalibration",
    "3. 量子芯片单比特初始化调控设计": "LAB2026SingleQubitInitializationControlDesign",
    "4. Poseidon：量子流体模拟框架": "LAB2026PoseidonQuantumFluidSimulation",
    "1. 协同特征增强与组Mamba神经网络高效器官识别分割方法": "LAB2026GroupMambaOrganSegmentation",
    "2. DCA-Net：基于分布对齐与知识蒸馏的半监督医学图像分割方法": "LAB2026DCANetSemiSupervisedMedicalSegmentation",
    "3. ConsMatch：基于多视角对比学习与特征一致性约束的半监督医学图像分割方法": "LAB2026ConsMatchSemiSupervisedMedicalSegmentation",
    "4. 双阶段牙齿分割": "LAB2026TwoStageToothSegmentation",
    "5. AdaMix：基于自适应特征混合策略的半监督医学图像分割方法": "LAB2026AdaMixSemiSupervisedMedicalSegmentation",
    "1. 不确定性感知多模态BCI软提示连贯图生成方法": "LAB2026UncertaintyAwareMultimodalBCISoftPromptImageGeneration",
    "2. 基于Chain-of-Frame Reasoning的文本到图像生成": "LAB2026ChainOfFrameReasoningTextToImageGeneration",
    "1. AlphaFold3相关方向跟踪与应用": "LAB2026AlphaFold3TrackingAndApplications",
}


@dataclass
class FigureBlock:
    title: str
    media_paths: list[str]


def slugify(value: str) -> str:
    value = re.sub(r"[\\/:*?\"<>|]+", "_", value.strip())
    value = re.sub(r"\s+", "_", value)
    return value[:120] or "untitled"


def extract_blocks(docx_path: Path) -> list[FigureBlock]:
    with zipfile.ZipFile(docx_path) as archive:
        rels_xml = ET.fromstring(archive.read("word/_rels/document.xml.rels"))
        rels = {
            rel.attrib["Id"]: rel.attrib["Target"]
            for rel in rels_xml
            if "Id" in rel.attrib and "Target" in rel.attrib
        }

        root = ET.fromstring(archive.read("word/document.xml"))
        paragraphs = root.findall(".//w:p", NS)

        blocks: list[FigureBlock] = []
        current_title: str | None = None

        for paragraph in paragraphs:
            text = "".join(t.text or "" for t in paragraph.findall(".//w:t", NS)).strip()
            if re.match(r"^[1-5]\.\s", text):
                current_title = text

            media_paths = []
            for blip in paragraph.findall(".//a:blip", NS):
                rid = blip.attrib.get(f"{{{NS['r']}}}embed")
                if rid and rid in rels:
                    media_paths.append("word/" + rels[rid].lstrip("/"))

            if media_paths:
                blocks.append(FigureBlock(title=current_title or "untitled", media_paths=media_paths))

        return merge_adjacent_blocks(blocks)


def merge_adjacent_blocks(blocks: list[FigureBlock]) -> list[FigureBlock]:
    merged: list[FigureBlock] = []

    for block in blocks:
        if merged and merged[-1].title == block.title:
            merged[-1].media_paths.extend(block.media_paths)
            continue
        merged.append(FigureBlock(title=block.title, media_paths=list(block.media_paths)))

    return merged


def render_composite(archive: zipfile.ZipFile, media_paths: list[str]) -> Image.Image:
    images: list[Image.Image] = []

    for media_path in media_paths:
        with archive.open(media_path) as source:
            image = Image.open(BytesIO(source.read())).convert("RGBA")
            images.append(image)

    if len(images) == 1:
        return images[0]

    max_height = max(image.height for image in images)
    normalized = []
    for image in images:
        if image.height == max_height:
            normalized.append(image)
            continue

        ratio = max_height / image.height
        resized = image.resize((int(image.width * ratio), max_height), Image.LANCZOS)
        normalized.append(resized)

    gap = 24
    canvas_width = sum(image.width for image in normalized) + gap * (len(normalized) - 1)
    canvas = Image.new("RGBA", (canvas_width, max_height), (255, 255, 255, 255))

    offset_x = 0
    for image in normalized:
        canvas.paste(image, (offset_x, 0), image)
        offset_x += image.width + gap

    return canvas


def main() -> None:
    if not DOCX_PATH.exists():
        raise FileNotFoundError(DOCX_PATH)

    FIGURES_DIR.mkdir(exist_ok=True)
    shutil.rmtree(Path("figures_review"), ignore_errors=True)
    placed: list[str] = []

    with zipfile.ZipFile(DOCX_PATH) as archive:
        blocks = extract_blocks(DOCX_PATH)

        for index, block in enumerate(blocks, start=1):
            image = render_composite(archive, block.media_paths)
            target_id = TARGET_FILENAMES.get(block.title)

            if not target_id:
                target_id = f"LAB2026Figure{index:02d}"

            target_path = FIGURES_DIR / f"{target_id}.png"
            image.save(target_path, format="PNG")
            placed.append(target_path.name)

    print(f"Placed {len(placed)} figures into {FIGURES_DIR}")
    for target_name in placed:
        print(f"- {target_name}")


if __name__ == "__main__":
    main()
