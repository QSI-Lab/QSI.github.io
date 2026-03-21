# 新增论文说明

本项目中，每篇论文使用一个独立 JSON 文件，放在 `datas/` 目录中。

## 1. 新增论文操作

推荐先使用网页生成器：

- 打开https://qsi-lab.github.io/QSI.github.io/ 页面底部“打开论文 JSON 生成器”按钮跳转到生成器页面
- 在网页中填写论文信息
- “会议 / 期刊预设”现在是文本框，可直接输入如 `IJCAI`、`TIFS`、`DAC`
- 生成器会自动给出：
  - 推荐 `id`
  - 推荐 JSON 文件名：`datas/<id>.json`
  - 推荐图片文件名：`figures/<id>.png`
  - 可直接复制的 JSON 内容

然后按下面步骤落地：

1. 把生成的 JSON代码保存为json文件，json文件保存到 `datas/` 目录
2. 手动把对应 PNG 图片放到 `figures/` 目录
3. 自行或联系管理员重新生成合并文件：

```bash
#在项目根目录执行
python scripts/build_papers_bundle.py
```

生成后会更新：

- `papers-data.js`

页面默认读取 `papers-data.js`。

## 2. 文件命名规则

JSON 文件名格式：

```text
会议名 + 年份 + 论文名
```

例如：

```text
IJCAI2026QAgent.json
```

对应图片文件放在 `figures/` 目录中，命名保持一致：

```text
IJCAI2026QAgent.png
```

## 3. JSON 格式

示例：

```json
{
  "id": "IJCAI2026QAgent",
  "title": "QAgent: Quantum Task Planning with Multi-Agent Coordination",
  "authors": "Alice Zhang#, Bob Li#, Carol Wang*",
  "year": 2026,
  "venue": "IJCAI",
  "ccf": "A",
  "core": "A*",
  "thcpl": "B",
  "type": "conference",
  "accepted": true,
  "fields": [
    "人工智能",
    "交叉/综合/新兴"
  ],
  "researchDirections": [
    "量子智能",
    "大模型推理与训练"
  ],
  "link": "https://ijcai.org/",
  "abstract": "这里填写论文摘要。"
}
```

## 4. 字段说明

- `id`: 必须和文件名一致，不带 `.json`
- `title`: 论文标题
- `authors`: 作者列表，字符串
  约定：`#` 表示共一，`*` 表示通讯
- `year`: 年份，数字
- `venue`: 会议或期刊名称
- `ccf`: `A` / `B` / `C` / `N`
- `core`: `A*` / `A` / `B` / `C` / `N`
- `thcpl`: `A` / `B` / `N`
- `type`: `conference` 或 `journal`
- `accepted`: `true` 或 `false`
- `fields`: 研究领域，数组，可多个
- `researchDirections`: 研究方向，数组，可多个
- `link`: 原文链接、会议主页、期刊主页等
- `abstract`: 摘要

兼容旧格式：

```json
{
  "researchDirection": "量子智能"
}
```

但现在推荐统一使用：

```json
{
  "researchDirections": ["量子智能", "AI for Science"]
}
```



## 5. 可选参考

现有示例文件：

- [datas/AAAI2023Purifier.json](/mnt/c/Users/11607/Desktop/lab-papers-static/datas/AAAI2023Purifier.json)
- [datas/IJCAI2025QuantumServerlessDeployment.json](/mnt/c/Users/11607/Desktop/lab-papers-static/datas/IJCAI2025QuantumServerlessDeployment.json)
