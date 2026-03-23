window.LAB_PAPERS_BUNDLE = {
  "papers": [
    {
      "id": "AAAI2023Purifier",
      "title": "Purifier: Defending Data Inference Attacks via Transforming Confidence Scores",
      "authors": "Ziqi Yang, Lijin Wang, Da Yang, Jie Wan, Ziming Zhao, Ee-Chien Chang, Fan Zhang*, Kui Ren",
      "year": 2023,
      "venue": "AAAI",
      "ccf": "A",
      "core": "A*",
      "thcpl": "A",
      "type": "conference",
      "accepted": true,
      "ncsCategory": "NONE",
      "sciZone": "NONE",
      "fields": [
        "人工智能"
      ],
      "researchDirections": [
        "大模型推理与训练"
      ],
      "link": "https://www.aaai.org/Conferences/AAAI-23/",
      "abstract": "通过转换置信度分数来防御数据推理攻击，提出Purifier机制，在保持模型精度的前提下有效抵御成员推断攻击和属性推断攻击，实验验证了方法的有效性与通用性。"
    },
    {
      "id": "AAAI2026QuFid",
      "title": "Adaptive Fidelity Estimation for Quantum Programs with Graph-Guided Noise Awareness",
      "authors": "Tingting Li, Ziming Zhao*, Jianwei Yin*",
      "year": 2026,
      "venue": "AAAI",
      "ccf": "A",
      "core": "A*",
      "thcpl": "A",
      "type": "conference",
      "accepted": true,
      "ncsCategory": "NONE",
      "sciZone": "NONE",
      "fields": [
        "人工智能"
      ],
      "researchDirections": [
        "量子软工"
      ],
      "link": "https://ojs.aaai.org/index.php/AAAI/article/view/37035",
      "abstract": "QuFid 是一种面向 NISQ 设备的自适应保真度估计框架，用于解决量子程序测试中测量成本高、预算难以预先设定的问题。它将量子程序表示为有向无环图，并通过结合控制流信息的随机游走来分析量子门依赖关系中的噪声传播。与此同时，QuFid 还考虑了转译过程带来的线路结构变化，以刻画不同量子硬件后端对程序执行的影响。在此基础上，方法利用噪声传播算子的谱特征量化线路复杂度，从而在线动态调整测量次数。实验结果表明，QuFid 在保持保真度估计误差可接受的同时，能够显著降低测量开销。"
    },
    {
      "id": "AAAI2026RelOpt",
      "title": "Adaptive Fidelity Estimation for Quantum Programs with Graph-Guided Noise Awareness",
      "authors": "Ziming Zhao, Tingting Li*, Zhaoxuan Li, Jianwei Yin*",
      "year": 2026,
      "venue": "AAAI",
      "ccf": "A",
      "core": "A*",
      "thcpl": "A",
      "type": "conference",
      "accepted": true,
      "ncsCategory": "NONE",
      "sciZone": "NONE",
      "fields": [
        "人工智能"
      ],
      "researchDirections": [
        "量子软工"
      ],
      "link": "https://ojs.aaai.org/index.php/AAAI/article/view/38457",
      "abstract": "RelOpt 是一种面向量子程序的语义保持优化框架，旨在在降低噪声影响和优化执行性能的同时，避免现有启发式或学习式方法可能引入的语义错误。它基于轻量级中间语言 QCore，构建了支持部分迹等价、测量分布保持以及近似正确性的关系操作语义，用于刻画优化前后程序之间的正确性关系。RelOpt 在优化过程中结合门数量、线路深度和纠错开销等多种目标进行综合权衡，并且只应用那些经过形式化验证、满足用户指定契约的重写规则。其核心引擎融合了符号模拟、SMT 推理和代价分析，从而实现安全且高效的量子程序优化。实验结果表明，在 QFT、Grover 和 QAOA 等标准基准上，RelOpt 在多项成本指标上均优于 Qiskit、t|ket> 和学习式优化器，同时保持严格的形式化保证。"
    },
    {
      "id": "ACNS2024DDoSMiner",
      "title": "DDoSMiner: An Automated Framework for DDoS Attack Characterization and Vulnerability Mining",
      "authors": "Xi Ling, Jiongchi Yu, Ziming Zhao, Zhihao Zhou, Haitao Xu, Binbin Chen, Fan Zhang",
      "year": 2024,
      "venue": "ACNS",
      "ccf": "C",
      "core": "B",
      "thcpl": "B",
      "type": "conference",
      "accepted": true,
      "ncsCategory": "NONE",
      "sciZone": "NONE",
      "fields": [
        "网络与信息安全"
      ],
      "researchDirections": [
        "网络安全",
        "符号执行"
      ],
      "link": "https://link.springer.com/chapter/10.1007/978-3-031-54773-7_12",
      "abstract": "本文针对不断演化的分布式拒绝服务攻击提出了一种自动化攻击特征分析与漏洞挖掘框架 DDoSMiner。面对基于规则的流量分析和深度包检测等传统防御手段，攻击者持续寻找新的攻击面和流量放大方式以绕过检测。为此，DDoSMiner 通过分析 TCP 类 DDoS 攻击的系统调用模式，构建攻击调用流图（ACFG），并识别攻击流量与正常流量之间的关键差异特征。进一步地，该框架提取丢弃节点和关键 TCP 状态，并结合符号执行技术探索 DDoS 攻击的变种。实验结果表明，DDoSMiner 能够发现新的 DDoS 攻击轨迹，且生成的攻击流量能够绕过 Snort 及其三种主流规则集的检测。"
    },
    {
      "id": "ARXIV2026ARepositoryLevel",
      "title": "A.S.E: A Repository-Level Benchmark for Evaluating Security in AI-Generated Code",
      "authors": "Keke Lian#, Bing Wang#, Lei Zhang, Libo Chen, Junjie Wang, Ziming Zhao, Yujiu Yang, Miaoqian Lin, Haotong Duan, Haoran Zhao, Shuang Liao, Mingda Guo, Jiazheng Quan, Yilu Zhong, Chenhao He, Zichuan Chen, Jie Wu, Haoling Li, Zhaoxuan Li, Jiongchi Yu, Hui Li*, Dong Zhang*",
      "year": 2026,
      "venue": "arxiv",
      "ccf": "N",
      "core": "N",
      "thcpl": "N",
      "type": "conference",
      "accepted": false,
      "ncsCategory": "NONE",
      "sciZone": "NONE",
      "fields": [
        "人工智能"
      ],
      "researchDirections": [
        "大数据系统优化"
      ],
      "link": "https://arxiv.org/pdf/2508.18106",
      "abstract": "现有针对 LLM 生成代码安全性的评测基准与真实 AI 辅助编程场景脱节，难以反映生产环境中的实际风险。为此，作者提出了更贴近真实仓库级编程任务的安全评测基准 A.S.E，并通过实验发现当前主流 LLM 在安全编码方面仍存在明显不足，尤其在复杂仓库场景下表现下降，而且更大的推理预算也未必能带来更好的代码生成效果。"
    },
    {
      "id": "ARXIV2026CoFT2I",
      "title": "CoF-T2I: Video Models as Pure Visual Reasoners for Text-to-Image Generation",
      "authors": "Chengzhuo Tong, Mingkun Chang, Shenglong Zhang, Yuran Wang, Cheng Liang, Zhizheng Zhao, Ruichuan An, Bohan Zeng, Yang Shi, Yifan Dai, Ziming Zhao, Guanbin Li, Pengfei Wan, Yuanxing Zhang, Wentao Zhang",
      "year": 2026,
      "venue": "arxiv",
      "ccf": "N",
      "core": "N",
      "thcpl": "N",
      "type": "conference",
      "accepted": false,
      "ncsCategory": "NONE",
      "sciZone": "NONE",
      "fields": [
        "人工智能"
      ],
      "researchDirections": [
        "文生图",
        "大模型"
      ],
      "link": "https://arxiv.org/abs/2601.10061",
      "abstract": "本文提出 CoF-T2I，将视频生成模型中的 Chain-of-Frame（CoF）推理能力 引入文本到图像生成任务，通过逐帧渐进式视觉细化，把中间帧作为显式推理过程，最终帧作为生成结果。 为构建这种可解释的生成流程，作者设计了 CoF-Evol-Instruct 数据集，用于刻画从语义到审美的连续生成轨迹。 同时，为了进一步提升生成质量并减少视频模型常见的运动伪影问题，方法中采用了对每一帧进行独立编码的策略。 实验结果表明，CoF-T2I 相比基础视频模型取得了显著提升，并在多个具有挑战性的基准测试中表现出较强竞争力，在 GenEval 上达到 0.86，在 Imagine-Bench 上达到 7.468。"
    },
    {
      "id": "ARXIV2026DataEfficient",
      "title": "Data-Efficient Large Language Model Training: A Survey",
      "authors": "Xinyang Liu, Qiang Hu∗, Yujie Ma, Zhenheng Tang, Jiongchi Yu, Tianlin Li, Yao Zhang, Junjie Wang, Hao Liu, Yongqiang Lyu, Yves Le Traon",
      "year": 2026,
      "venue": "arxiv",
      "ccf": "N",
      "core": "N",
      "thcpl": "N",
      "type": "conference",
      "accepted": false,
      "ncsCategory": "NONE",
      "sciZone": "NONE",
      "fields": [
        "人工智能"
      ],
      "researchDirections": [
        "大模型推理与训练"
      ],
      "link": "https://wellido.github.io/paper/DS4LLM.pdf",
      "abstract": "构建大语言模型通常依赖大规模高质量数据，代价高且计算开销大，因此本文系统综述了“有限数据下构建 LLM”的研究进展。文章梳理了数据高效训练的统一问题与术语，系统分析了如何识别对预训练和微调最关键的数据样本，并总结了该领域的挑战与未来研究方向。",
      "pdf": "https://wellido.github.io/paper/DS4LLM.pdf"
    },
    {
      "id": "ARXIV2026HumanintheLoopforFuzzTesting",
      "title": "Human in the Loop for Fuzz Testing: Literature Review and the Road Ahead",
      "authors": "JIONGCHI YU#, XIAOLIN WEN#, SIZHE CHENG, XIAOFEI XIE,QIANG HU*,  YONG WANG*",
      "year": 2026,
      "venue": "arxiv",
      "ccf": "N",
      "core": "N",
      "thcpl": "N",
      "type": "conference",
      "accepted": false,
      "ncsCategory": "NONE",
      "sciZone": "NONE",
      "fields": [
        "人工智能"
      ],
      "researchDirections": [
        "大模型 for 安全"
      ],
      "link": "https://arxiv.org/pdf/2603.13411",
      "abstract": "传统模糊测试虽然有效，但依赖自动化启发式方法，难以发现深层或复杂漏洞，因此需要将人类专家引入模糊测试流程。文章据此提出了一个 Human-in-the-Loop 模糊测试研究路线图，重点关注人类监控、人类引导，以及人类与大语言模型协作，以构建下一代交互式、智能化的模糊测试体系。"
    },
    {
      "id": "ARXIV2026LEVERAGINGLLM",
      "title": "Chengjia Wang, Lanling Tang, Ming Yuan, Jiongchi Yu*, Xiaofei Xie, Jiajun Bu",
      "authors": "LEVERAGING LLM AGENTS FOR AUTOMATEDVIDEO GAME TESTING",
      "year": 2026,
      "venue": "arxiv",
      "ccf": "N",
      "core": "N",
      "thcpl": "N",
      "type": "conference",
      "accepted": false,
      "ncsCategory": "NONE",
      "sciZone": "NONE",
      "fields": [
        "人工智能"
      ],
      "researchDirections": [
        "大模型推理与训练",
        "大数据系统优化"
      ],
      "link": "https://arxiv.org/pdf/2509.22170",
      "abstract": "提出了一个面向MMORPG测试的LLM驱动智能代理框架TITAN，通过状态抽象、动作优化、长程推理与自反纠错以及基于LLM的测试判定机制，显著提升了任务完成率和缺陷检测能力。实验表明，该方法在真实商业游戏中优于现有自动化测试方案，并已成功应用于多个实际QA流程中。"
    },
    {
      "id": "ARXIV2026PTCBENCH",
      "title": "PTCBENCH: Benchmarking Contextual Stability of Personality Traits in LLM Systems",
      "authors": "Jiongchi Yu#, Yuhan Ma#, Xiaoyu Zhang*, Junjie Wang, Qiang Hu, Chao Shen, and Xiaofei Xie",
      "year": 2026,
      "venue": "arxiv",
      "ccf": "N",
      "core": "N",
      "thcpl": "N",
      "type": "conference",
      "accepted": false,
      "ncsCategory": "NONE",
      "sciZone": "NONE",
      "fields": [
        "人工智能"
      ],
      "researchDirections": [
        "大模型推理与训练"
      ],
      "link": "https://arxiv.org/pdf/2602.00016",
      "abstract": "随着 LLM 被广泛用于情感陪伴和智能体系统，保持其人格的一致性对用户信任很重要，但现有研究忽视了人格会随情境变化这一心理学事实。为此，作者提出了 PTCBench，在不同地点与人生事件等 12 类情境下系统评估 LLM 的人格一致性，并发现某些情境会显著改变模型的人格特征，甚至影响其推理能力。"
    },
    {
      "id": "ARXIV2026TheFoundationCracks",
      "title": "The Foundation Cracks: A Comprehensive Study on Bugs and Testing Practices in LLM Libraries",
      "authors": "Weipeng Jiang, Xiaoyu Zhang, Xiaofei Xie, Jiongchi Yu, Yuhan Zhi, Shiqing Ma, Chao Shen",
      "year": 2026,
      "venue": "arxiv",
      "ccf": "N",
      "core": "N",
      "thcpl": "N",
      "type": "conference",
      "accepted": false,
      "ncsCategory": "NONE",
      "sciZone": "NONE",
      "fields": [
        "人工智能"
      ],
      "researchDirections": [
        "大模型 for 安全"
      ],
      "link": "https://arxiv.org/pdf/2506.12320",
      "abstract": "LLM 库作为大模型生态的基础设施，虽然至关重要，但存在大量影响系统可靠性的缺陷。本文通过对 HuggingFace Transformers 和 vLLM 中 313 个缺陷修复提交及 7,748 个测试函数的实证分析，系统总结了缺陷表现、根因和测试方法，并发现 API 误用已成为最主要的缺陷来源，而现有测试在用例、驱动和预言机方面仍明显不足。"
    },
    {
      "id": "ARXIV2026Understanding",
      "title": "Understanding the Supply Chain and Risks of Large Language Model Applications",
      "authors": "Yujie Ma, Lili Quan, Xiaofei Xie, Qiang Hu, Jiongchi Yu, Yao Zhang, Sen Chen",
      "year": 2026,
      "venue": "arxiv",
      "ccf": "N",
      "core": "N",
      "thcpl": "N",
      "type": "conference",
      "accepted": false,
      "ncsCategory": "NONE",
      "sciZone": "NONE",
      "fields": [
        "人工智能"
      ],
      "researchDirections": [
        "大模型推理与训练",
        "大数据系统优化"
      ],
      "link": "https://arxiv.org/pdf/2507.18105",
      "abstract": "LLM 系统依赖复杂的软件供应链（模型、数据集、库等），但现有风险研究多局限于模型或数据层面，缺乏系统性评估基准。为此，作者提出 LLMSCBench 数据集，刻画 LLM 生态中的依赖关系与安全风险，并通过实证分析揭示其广泛且复杂的供应链漏洞，强调加强安全与隐私防护的必要性。"
    },
    {
      "id": "ASE2025AutoFid",
      "title": "AutoFid: Adaptive and Noise-Aware Fidelity Measurement for Quantum Programs via Circuit Graph Analysis",
      "authors": "Tingting Li, Ziming Zhao*, Jianwei Yin*",
      "year": 2025,
      "venue": "ASE",
      "ccf": "A",
      "core": "A*",
      "thcpl": "A",
      "type": "conference",
      "accepted": true,
      "ncsCategory": "NONE",
      "sciZone": "NONE",
      "fields": [
        "软件工程/系统软件/程序设计语言",
        "交叉/综合/新兴"
      ],
      "researchDirections": [
        "量子智能"
      ],
      "link": "https://conf.researchr.org/home/ase-2025",
      "abstract": "处于噪声高的中尺度量子（NISQ）时代，量子计算机面临着固有噪声和有限量子比特相干性的重大挑战。准确的量子态保真度评估需要多次重复测量以获得统计结果。但由于量子噪声的动态和器件依赖性，确定最佳测量次数仍是一个未解问题。现有方法要么假设对噪声模型有先验知识，要么固有地采用固定的测量策略，这限制了其在实际部署场景中的适用性。本文介绍了AutoFid，一种自适应且能感知噪声的保真度测量框架，能够根据电路结构和硬件反馈自动确定所需测试次数。AutoFid 将量子电路建模为有向无环图，并通过随机游走估计结构复杂度，从而实现测量工作量的估算。它还集成了对转译感知的功能，如门控保真度、深度膨胀和串扰，以优化迭代预算。运行期间，AutoFid 动态采样保真度结果，并基于置信区间采用早期停止策略，减少重复测量，同时保持准确性保证。我们基于18项在真实IBMQ硬件平台上执行的量子基准测试来评估AutoFid。实验结果显示，AutoFid 相比固定射击和基于学习的基线，测量成本降低了超过 50%，同时保真度偏差始终低于 0.01。利用经典软件测试指标和消融研究进行额外分析，展示了其在广泛量子工作负载下的有效性、鲁棒性和适应性。",
      "imageUrl": "figures/TIFS2025TDQDF.png"
    },
    {
      "id": "ASE2025Defects4C",
      "title": "Defects4C: Benchmarking Large Language Model Repair Capability with C/C++ Bugs",
      "authors": "Jian Wang, Xiaofei Xie, Qiang Hu, Shangqing Liu, Jiongchi Yu, Jiaolong Kong, Yi Li",
      "year": 2025,
      "venue": "International Conference on Automated Software Engineering",
      "ccf": "A",
      "core": "A*",
      "thcpl": "A",
      "type": "conference",
      "accepted": true,
      "ncsCategory": "NONE",
      "sciZone": "NONE",
      "fields": [
        "软件工程/系统软件/程序设计语言",
        "人工智能"
      ],
      "researchDirections": [
        "代码修复"
      ],
      "link": "https://arxiv.org/abs/2510.11059",
      "abstract": "Defects4C 是一个面向 C/C++ 程序修复的高质量基准数据集，用于解决当前自动程序修复研究中缺乏真实世界 C/C++ 数据的问题。该方法从开源仓库中构建包含约 900 万条缺陷相关提交、248 个高质量缺陷函数和 102 个漏洞函数的数据集，并配套测试用例以支持可复现评估。在此基础上，基于 Defects4C 对 24 个主流大语言模型在 C/C++ 缺陷修复任务中的能力进行了系统实验分析。结果表明，尽管 LLM 在 Java 等语言上表现良好，但在真实 C/C++ 场景下修复性能显著下降，尤其在多行缺陷和依赖上下文信息的问题上表现不足。总体而言，Defects4C 为评估和改进 LLM 驱动的程序修复方法提供了关键基础，同时揭示了当前方法在复杂系统级语言中的局限性"
    },
    {
      "id": "BIBM2024DCANet",
      "title": "DCA-Net:Data-Driven Collaborative Assistance Network  for Semi-supervised Medical Segmentation",
      "authors": "Yuhan Chen, Chunshi Wang, Bin Zhao*",
      "year": 2024,
      "venue": "BIBM",
      "ccf": "B",
      "core": "N",
      "thcpl": "N",
      "type": "conference",
      "accepted": true,
      "ncsCategory": "NONE",
      "sciZone": "NONE",
      "fields": [
        "人工智能",
        "交叉/综合/新兴",
        "半监督学习",
        "医学图像分割"
      ],
      "researchDirections": [
        "医学智能"
      ],
      "link": "https://ieeexplore.ieee.org/abstract/document/10821880/",
      "abstract": "在本文当中，我们重点关注半监督医学图像分割问题中标记数据与未标记数据之间的经验匹配问题。当标记数据与未标记数据之间的经验匹配度不高时，网络无法更好的利用从标记数据当中学到的知识。为此，我们提出了一种高效优雅的方法，称为\"DCA-Net\"，该方法使用了频域中的数据增强模块-STM与数据双向复制粘贴-BCP, 可以更好的减少标记数据与未标记数据的分布差距。同时，我们将知识蒸馏领域与半监督学习相结合，促进更深入的特征学习和更稳定的模型行为。我们使用\"DCA-Net\"在LA数据集与ACDC数据集进行实验并取得Sota的效果。"
    },
    {
      "id": "CCS2023ThemisPoster",
      "title": "Poster: Detecting Adversarial Examples Hidden under Watermark Perturbation via Usable Information Theory",
      "authors": "Ziming Zhao, Zhaoxuan Li, Tingting Li, Zhuoxue Song, Fan Zhang, Rui Zhang",
      "year": 2023,
      "venue": "ACM SIGSAC Conference on Computer and Communications Security",
      "ccf": "N",
      "core": "N",
      "thcpl": "N",
      "type": "conference",
      "accepted": true,
      "ncsCategory": "NONE",
      "sciZone": "NONE",
      "fields": [
        "网络安全",
        "人工智能"
      ],
      "researchDirections": [
        "AI安全"
      ],
      "link": "https://doi.org/10.1145/3576915.3624396",
      "abstract": "针对图像水印可被攻击者利用以构造对抗样本、从而混淆深度学习分类器，而现有针对噪声扰动的对抗样本检测方法对水印型扰动效果不佳的问题，本文提出基于可用信息论的水印对抗样本检测方法 Themis。该方法无需修改受保护的分类器，也不依赖对抗样本生成过程信息，而是通过辅助模型计算样本的点可用信息（PVI）分数，从而识别隐藏在水印扰动下的对抗样本。实验结果表明，在 InceptionV3 等常用模型及多种攻击设置下，Themis 相较于 5 种现有 SOTA 方法的检测准确率提升超过 15%，同时具有更高的 AUC 和较低的额外开销。"
    },
    {
      "id": "CCS2024SmartContractSymX",
      "title": "Demo: Enhancing Smart Contract Security Comprehensively through Dynamic Symbolic Execution",
      "authors": "Zhaoxuan Li, Ziming Zhao, Wenhao Li, Rui Zhang, Rui Xue, Siqi Lu, Fan Zhang",
      "year": 2024,
      "venue": "ACM SIGSAC Conference on Computer and Communications Security",
      "ccf": "A",
      "core": "A*",
      "thcpl": "A",
      "type": "conference",
      "accepted": true,
      "ncsCategory": "NONE",
      "sciZone": "NONE",
      "fields": [
        "软件工程",
        "网络安全"
      ],
      "researchDirections": [
        "网络安全"
      ],
      "link": "https://doi.org/10.1145/3658644.3691365",
      "abstract": "针对智能合约漏洞仿真、结果验证与行为识别需求，以及传统符号执行难以还原合约真实执行路径的问题，本文提出一种基于动态符号执行的智能合约安全增强方法。该方法通过选择性规避策略尽可能保留相对完整的循环路径，结合真实合约执行以保证调用合约与被调用合约之间的数据一致性，并通过及时记录 EVM 操作过程中的状态变化来支持多交易连续执行。在此基础上，系统能够同时完成漏洞检测、漏洞验证和合约调用行为识别。实验结果表明，该方法实现了 90.22% 的漏洞检测准确率和 98.04% 的合约调用行为识别准确率，并能够有效验证重入、任意发送、合约自毁、整数溢出等典型漏洞。"
    },
    {
      "id": "CommPhys2024SimulatingUnsteadyFlows",
      "title": "Simulating unsteady flows on a superconducting quantum processor",
      "authors": "Zhaoyuan Meng, Jiarun Zhong, Shibo Xu, Ke Wang, Jiachen Chen, Feitong Jin, Xuhao Zhu, Yu Gao, Yaozu Wu, Chuanyu Zhang, Ning Wang, Yiren Zou, Aosai Zhang, Zhengyi Cui, Fanhao Shen, Zehang Bao, Zitian Zhu, Ziqi Tan, Tingting Li, Pengfei Zhang, Shiying Xiong, Hekang Li, Qiujiang Guo, Zhen Wang, Chao Song, H. Wang, Yue Yang",
      "year": 2024,
      "venue": "Communications Physics",
      "ccf": "N",
      "core": "N",
      "thcpl": "N",
      "type": "journal",
      "accepted": true,
      "ncsCategory": "NCS_SUB",
      "sciZone": "SCI1",
      "fields": [
        "交叉/综合/新兴",
        "计算机体系结构/并行与分布计算/存储系统"
      ],
      "researchDirections": [
        "量子智能"
      ],
      "link": "https://www.nature.com/articles/s42005-024-01845-w",
      "doi": "https://doi.org/10.1038/s42005-024-01845-w",
      "abstract": "该工作在超导量子处理器上实现了非定常流体的数字量子模拟，算法基于薛定谔方程流体力学形式下的哈密顿量演化。作者利用 10 个量子比特分别模拟二维可压缩发散流与二维衰减涡流，实验结果较好刻画了平均密度、动量分布及其时序变化。研究表明，量子计算有望在复杂流体动力学乃至湍流模拟中发挥作用。"
    },
    {
      "id": "CompNet2024metaNet",
      "title": "metaNet: Interpretable Unknown Mobile Malware Identification with a Novel Meta-features Mining Algorithm",
      "authors": "Zhaoxuan Li, Ziming Zhao, Rui Zhang, Haoyang Lu, Wenhao Li, Fan Zhang, Siqi Lu, Rui Xue",
      "year": 2024,
      "venue": "Computer Networks",
      "ccf": "B",
      "core": "B",
      "thcpl": "B",
      "type": "journal",
      "accepted": true,
      "ncsCategory": "NONE",
      "sciZone": "SCI1",
      "fields": [
        "计算机网络",
        "网络安全",
        "人工智能"
      ],
      "researchDirections": [
        "未知检测",
        "机器学习"
      ],
      "link": "https://dl.acm.org/doi/10.1016/j.comnet.2024.110563",
      "abstract": "针对已知与未知家族移动恶意软件在开放集场景下面临的准确性、鲁棒性、稳定性与可解释识别挑战，本文提出 metaNet 方法。该方法综合提取类别静态与动态特征，基于 FP-trees 挖掘类别特征频繁项，并结合差集过滤得到类别元特征；在此基础上，构建异构孪生 U-Net 网络模型 HSU-Net 以完成二分类与多分类任务。实验结果表明，metaNet 不仅能够实现已知家族样本的高精度识别，在未知家族识别场景下也具有优异表现：二分类任务中，已知家族识别准确率达到 99.52%，在已知 80% 家族条件下未知家族识别准确率达到 99.31%；多分类任务中，已知与未知家族样本识别准确率分别达到 99.05% 和 93.45%。此外，该方法还支持少样本识别并能有效缓解特征混淆带来的影响。在 16 个类别、112 个去中心化应用程序（DApps）流量数据集上，metaNet 也能够准确识别 94.6% 的全已知 DApp 样本和 81.36% 的已知 80% DApp 样本类别。"
    },
    {
      "id": "CompSecurity2024DDoSFamily",
      "title": "DDoS Family: A Novel Perspective for Massive Types of DDoS Attacks",
      "authors": "Ziming Zhao, Zhaoxuan Li, Zhihao Zhou, Jiongchi Yu, Zhuoxue Song, Xiaofei Xie, Fan Zhang*, Rui Zhang",
      "year": 2024,
      "venue": "Computers & Security",
      "ccf": "B",
      "core": "B",
      "thcpl": "N",
      "type": "journal",
      "accepted": true,
      "ncsCategory": "NONE",
      "sciZone": "SCI1",
      "fields": [
        "网络与信息安全"
      ],
      "researchDirections": [
        "网络安全",
        "网络流量"
      ],
      "link": "https://www.sciencedirect.com/science/article/pii/S0167404823005734",
      "abstract": "本文针对 DDoS 防御中攻击变种不断增多所带来的识别与响应难题，提出了“DDoS 家族”这一新概念。随着攻击策略日益复杂，传统机器学习方法在二分类和细粒度攻击分类两端都面临局限，同时大量攻击类别也会导致过滤规则表臃肿、缓解响应变慢。为此，本文从流量模式刻画、攻击指纹生成以及基于社区发现的交叉执行家族划分三个方面构建技术路线，以实现对相似攻击的统一建模。大量实验表明，该方法能够有效刻画攻击之间的相似性，辅助模型分类与未知攻击检测，并优化防御策略、提升过滤响应速度。特别地，研究发现仅用一条规则即可防御 15 种具有同质行为特征的攻击，同时“统计反向数据包”在应对部分攻击时比以往方案更高效、更鲁棒。"
    },
    {
      "id": "CSCWD2024AlertCrossVerification",
      "title": "An Automated Alert Cross-Verification System with Graph Neural Networks for IDS Events",
      "authors": "Liang Li, Feiyang Huang, Yuanhui He, Ziming Zhao, Zhuoxue Song, Tong Zhou, Zhenyuan Li, Fan Zhang*",
      "year": 2024,
      "venue": "CSCWD",
      "ccf": "C",
      "core": "N",
      "thcpl": "N",
      "type": "conference",
      "accepted": true,
      "ncsCategory": "NONE",
      "sciZone": "NONE",
      "fields": [
        "网络与信息安全",
        "人工智能"
      ],
      "researchDirections": [
        "网络与算网融合"
      ],
      "link": "http://2024.cscwd.org/",
      "abstract": "入侵检测系统（IDS）对于检测网络攻击以及确保网络资源的机密性和完整性至关重要。目前，行业标准的IDS主要依赖基于规则或异常检测技术。然而，现有的检测技术常常产生假阳性和假阴性，也称为警报疲劳问题。大量错误事件通过给安全分析师带来的负担，降低了IDS的效率。本文介绍了ACVS，一种创新的自动警报交叉验证系统，利用图神经网络识别安全事件中的错误分类。最初，ACVS利用IP地址和时间戳等属性生成事件图，并利用警报信息验证错误分类。最后，系统使用图神经网络自动分类和纠正这些安全事件。我们基于包含超过500万次安全事件的大量真实世界数据集进行ACVS评估，这些事件被划分为5个不同组别。结果显示，反腐化检测系统显著提升了入侵检测系统的准确性，并大幅减少了人工分析的需求。"
    },
    {
      "id": "DAC2026Bayesian",
      "title": "Time-Aware Active Calibration and Scheduling for N-Qubit Systems via Bayesian Optimization and Reinforcement Learning",
      "authors": "Ziming Zhao, Tingting Li*, Xiaofei Yue, Zhaoxuan Li, Jianwei Yin*",
      "year": 2026,
      "venue": "DAC",
      "ccf": "A",
      "core": "A*",
      "thcpl": "A",
      "type": "conference",
      "accepted": true,
      "ncsCategory": "NONE",
      "sciZone": "NONE",
      "fields": [
        "计算机体系结构/并行与分布计算/存储系统"
      ],
      "researchDirections": [
        "量子EDA"
      ],
      "link": "",
      "abstract": "该工作提出了一种面向多量子比特系统的时间感知主动校准框架，用于在参数漂移和校准代价较高的情况下提升量子硬件维护效率。方法将校准过程建模为有向无环图，其中节点表示频率、振幅比、DRAG 和相位等硬件参数，边则刻画参数之间的依赖关系，并结合 OU 过程或指数衰减模型描述参数随时间的漂移特性。框架进一步融合贝叶斯优化与强化学习：前者用于自适应选择最有价值的校准实验，后者结合调度策略协调跨量子比特的校准与读出任务，以减少空闲时间和资源冲突。系统还利用在线 RB/XEB 健康指标触发自主重校准，从而在无人干预下实现对漂移的动态恢复。实验结果表明，该方法相比固定或启发式调度策略能够显著提高校准效率、延长重校准间隔，并降低整体校准开销。"
    },
    {
      "id": "DAC2026sMoE",
      "title": "sMoE: Elastic MoE-Based Inference with Serverless Computing via Fine-grained Expert Scaling",
      "authors": "Xiaofei Yue, Ziming Zhao*, Jiongchi Yu, Huidong Ma, Zhaoxuan Li, Tingting Li*, Jianwei Yin*",
      "year": 2026,
      "venue": "DAC",
      "ccf": "A",
      "core": "A*",
      "thcpl": "N",
      "type": "conference",
      "accepted": true,
      "ncsCategory": "NONE",
      "sciZone": "NONE",
      "fields": [
        "计算机体系结构/并行与分布计算/存储系统"
      ],
      "researchDirections": [
        "模型推理"
      ],
      "link": "",
      "abstract": "针对MoE推理中专家负载偏斜与动态变化问题，提出sMoE细粒度专家弹性扩缩系统。将推理建模为专家DAG并结合DAGNN与强化学习实现资源调度优化。在满足P95延迟SLO的同时降低21.4%–39.2%推理成本。"
    },
    {
      "id": "DASFAA2025CyberLLM",
      "title": "CyberLLM: Enable Mapping CVE to Tactics and Techniques of Cyber Threats via LLM",
      "authors": "Ziming Zhao, Zhaoxuan Li, Tingting Li, Fan Zhang*",
      "year": 2025,
      "venue": "DASFAA",
      "ccf": "B",
      "core": "A",
      "thcpl": "B",
      "type": "conference",
      "accepted": true,
      "ncsCategory": "NONE",
      "sciZone": "NONE",
      "fields": [
        "数据库/数据挖掘/内容检索",
        "网络与信息安全"
      ],
      "researchDirections": [
        "大模型 for 安全"
      ],
      "link": "https://link.springer.com/chapter/10.1007/978-981-95-4155-3_33",
      "abstract": "CyberLLM 是一种面向网络安全场景的大语言模型方法，用于将 CVE 自动映射到 ATT&CK 框架中的攻击战术与技术。该方法将这一任务建模为多标签分类问题，以适应一个漏洞可能对应多种攻击技术的实际情况。为提升语义表达能力，CyberLLM 对漏洞文本描述进行向量化处理，并结合多种数据增强策略丰富训练信息，同时利用基于 Jaccard 距离的检索机制引入外部知识以增强上下文。实验结果表明，CyberLLM 相比 7 种代表性现有方法具有更好的映射效果。除此之外，作者还通过消融实验和可解释性分析进一步验证了数据增强与检索信息的有效性。"
    },
    {
      "id": "DATE2025MoE",
      "title": "Empowering Quantum Error Traceability with MoE for Automatic Calibration",
      "authors": "Tingting Li, Ziming Zhao, Liqiang Lu*, Siwei Tan, Jianwei Yin*",
      "year": 2025,
      "venue": "DATE",
      "ccf": "B",
      "core": "A",
      "thcpl": "B",
      "type": "conference",
      "accepted": true,
      "ncsCategory": "NONE",
      "sciZone": "NONE",
      "fields": [
        "交叉/综合/新兴",
        "计算机体系结构/并行与分布计算/存储系统"
      ],
      "researchDirections": [
        "量子智能"
      ],
      "link": "https://ieeexplore.ieee.org/abstract/document/10993074",
      "abstract": "该工作提出了一种基于专家混合（MoE）的量子校准错误回溯方法，用于解决传统自动校准过程中难以定位根因、往往需要反复尝试的问题。该方法借鉴大语言模型中的 MoE 思想，对校准失败进行可追踪分析，从而更快识别导致偏离校准状态的关键误差来源。相比仅依赖经验或固定流程的传统方法，这种机制能够在自动校准过程中实现更高效的错误定位与修正。实验结果表明，该方法在错误追踪能力和校准效率上均明显优于现有技术，并使 77 个量子比特的平均可见度提升了 25.5%。总体来看，这项研究为构建更可靠、可扩展的量子计算系统提供了一条有前景的技术路径。"
    },
    {
      "id": "EMSE2022SmartFast",
      "title": "SmartFast: An Accurate and Robust Formal Analysis Tool for Ethereum Smart Contracts",
      "authors": "Zhaoxuan Li, Siqi Lu, Rui Zhang, Rui Xue, Wenqiu Ma, Rujin Liang, Ziming Zhao, Sheng Gao",
      "year": 2022,
      "venue": "Empirical Software Engineering",
      "ccf": "B",
      "core": "A",
      "thcpl": "B",
      "type": "journal",
      "accepted": true,
      "ncsCategory": "NONE",
      "sciZone": "SCI1",
      "fields": [
        "软件工程",
        "网络安全"
      ],
      "researchDirections": [
        "网络安全"
      ],
      "link": "https://doi.org/10.1007/s10664-022-10218-2",
      "abstract": "针对现有以太坊智能合约漏洞分析方法在漏洞覆盖范围有限、验证效率较低以及检测精度不足等方面的问题，本文提出了形式化分析工具 SmartFast。该方法设计了能够覆盖更丰富合约语义的中间表示 SmartIR，并实现 Solidity 源码到中间表示的转换；同时结合定制化漏洞安全模式与污点分析技术完成漏洞匹配与检测。实验结果表明，SmartFast 可检测 119 种智能合约漏洞，超过当时代表性工具 Slither 的 71 种，并取得 98.43% 的精确率和 85.12% 的召回率；此外，该方法对破坏数据依赖关系和上下文语义关联的代码混淆手段也表现出较强鲁棒性。"
    },
    {
      "id": "FSE2025CAShift",
      "title": "CAShift: Benchmarking Log-Based Cloud Attack Detection under Normality Shift",
      "authors": "Jiongchi Yu, Xiaofei Xie, Qiang Hu*, Bowen Zhang, Ziming Zhao, Yun Lin, Lei Ma, Ruitao Feng, Frank Liauw",
      "year": 2025,
      "venue": "ESEC/SIGSOFT FSE",
      "ccf": "A",
      "core": "A*",
      "thcpl": "A",
      "type": "conference",
      "accepted": true,
      "ncsCategory": "NONE",
      "sciZone": "NONE",
      "fields": [
        "软件工程/系统软件/程序设计语言",
        "网络与信息安全"
      ],
      "researchDirections": [
        "云计算与云服务器"
      ],
      "link": "https://dl.acm.org/doi/abs/10.1145/3729346",
      "abstract": "CAShift 是一个面向云环境日志异常检测的数据集，旨在弥补现有云系统数据集在行为覆盖范围和整体系统视角上的不足。该数据集综合考虑了云系统中不同软件角色，并支持应用变化、版本变化和云架构变化三种真实的正常性偏移场景，同时包含 20 种针对不同云组件的攻击场景。基于 CAShift，作者系统评估了现有日志异常检测方法在分布偏移条件下的表现，发现各类方法都会受到显著影响，性能最高可下降 34%。此外，论文还进一步研究了持续学习方法在偏移适应中的作用，结果表明其能够在一定程度上缓解性能退化，但效果高度依赖重训练数据比例和具体算法选择。总体来看，CAShift 为研究更鲁棒的云日志异常检测与分布偏移适应提供了重要基础。"
    },
    {
      "id": "FSE2026CrypFormBench",
      "title": "CrypFormBench: Benchmarking Formal Analysis Capability of Large Language Models for Cryptographic schemes",
      "authors": "Zhaoxuan Li, Qionglu Zhang, Hengyuan Liu, Xiaoyan Gu, Xianhui Lu, Hongbo Liu, Bingzheng Wang, Haihui Fan, Ziming Zhao, Rui Zhang, Li Zhou",
      "year": 2026,
      "venue": "ACM International Conference on the Foundations of Software Engineering",
      "ccf": "A",
      "core": "A*",
      "thcpl": "A",
      "type": "conference",
      "accepted": true,
      "ncsCategory": "NONE",
      "sciZone": "NONE",
      "fields": [
        "软件工程",
        "网络安全",
        "人工智能"
      ],
      "researchDirections": [
        "大模型 for 安全",
        "AI安全"
      ],
      "link": "",
      "abstract": "针对密码方案形式化分析长期依赖专家手动抽象与编写工具特定规范、耗时高且门槛高，以及现有相关基准主要覆盖符号安全、规模有限、难以系统评估大语言模型在密码方案分析中核心能力的问题，本文提出 CrypFormBench 基准。该基准首次联合覆盖符号安全与计算安全，包含 700 个实例，覆盖 677 个密码方案、7 种主流形式验证语言和 160 个安全属性，并建立了自动化评估流水线与多维评分框架，用于系统衡量大语言模型在解释、生成、补全、转换和修正五项核心任务上的能力。基于对 9 个先进大语言模型的实验评估，结果表明模型在解释与补全任务上表现相对较好，但在生成、转换和修正任务上仍存在明显局限，其中 Claude-3.5 取得最高总分 48.7/100。进一步地，本文提出了少样本提示、Pass@K 采样和轻量级微调等优化建议，为大语言模型辅助密码方案形式化分析提供了系统评估基准与实践指导。"
    },
    {
      "id": "ICAIS2021KeyHierarchicalManagement",
      "title": "Secure and Efficient Key Hierarchical Management and Collaborative Signature Schemes of Blockchain",
      "authors": "Rui Zhang, Zhaoxuan Li, Lijuan Zheng",
      "year": 2021,
      "venue": "International Conference on Artificial Intelligence and Security",
      "ccf": "N",
      "core": "N",
      "thcpl": "N",
      "type": "conference",
      "accepted": true,
      "ncsCategory": "NONE",
      "sciZone": "NONE",
      "fields": [
        "网络安全"
      ],
      "researchDirections": [
        "网络安全"
      ],
      "link": "https://doi.org/10.1007/978-3-030-78612-0_27",
      "abstract": "为了提升区块链密钥管理的安全性与效率，并满足协同签名场景下的应用需求，本文提出了一种结合安全多方计算与特征加密的层次化密钥管理与协同签名方案。该方案能够保障各层级密钥的安全性，抵御数据篡改攻击、密钥窃取攻击、碎片泄漏攻击和明文窃取攻击；同时，在保证安全性的基础上减少用户文件共享时间和存储开销，提高系统资源利用率与整体运行效率。"
    },
    {
      "id": "ICSE2023GameRTS",
      "title": "GameRTS: A Regression Testing Framework for Video Games",
      "authors": "Jiongchi Yu#, Yuechen Wu#, Xiaofei Xie, Wei Le, Lei Ma, Yingfeng Chen, Yujing Hu, Fan Zhang",
      "year": 2023,
      "venue": "International Conference on Software Engineering",
      "ccf": "A",
      "core": "A*",
      "thcpl": "A",
      "type": "conference",
      "accepted": true,
      "ncsCategory": "NONE",
      "sciZone": "NONE",
      "fields": [
        "软件工程/系统软件/程序设计语言"
      ],
      "researchDirections": [
        "软件测试",
        "游戏测试"
      ],
      "link": "https://ieeexplore.ieee.org/document/10172905/",
      "abstract": "GameRTS 是一种面向视频游戏的软件回归测试框架，用于解决游戏开发中频繁更新、测试周期长等特点带来的测试效率问题。该方法首先通过实证研究分析游戏开发流程、缺陷特征及其上下文敏感性，在此基础上提出一种兼顾安全性与实用性的回归测试选择技术。具体而言，GameRTS 将游戏测试建模为状态转移图，并建立游戏状态/动作与多种游戏文件之间的依赖关系，通过变更影响分析识别受影响的测试路径，从而选择最小必要测试集合。实验结果表明，GameRTS 能显著减少测试开销，同时保持对回归缺陷的完整检测能力，并优于传统基于文件级的 RTS 方法，在减少测试规模的同时还能发现新的关键缺陷。"
    },
    {
      "id": "ICSEPOSTER2026AutoEmpirical",
      "title": "Towards Automatic Software Faults Analysis",
      "authors": "Jiongchi Yu#, Weipeng Jiang#, Xiaoyu Zhang*, Qiang Hu*, Xiaofei Xie, Chao Shen",
      "year": 2026,
      "venue": "International Conference on Software Engineering",
      "ccf": "A",
      "core": "A*",
      "thcpl": "A",
      "type": "conference",
      "accepted": true,
      "ncsCategory": "NONE",
      "sciZone": "NONE",
      "fields": [
        "软件工程/系统软件/程序设计语言",
        "人工智能"
      ],
      "researchDirections": [
        "大模型多智能体",
        "实证研究"
      ],
      "link": "https://arxiv.org/abs/2510.04997",
      "abstract": "AutoEmpirical 是一种基于大语言模型的自动化软件故障实证研究框架，旨在解决传统故障分析过程中人工成本高、效率低的问题。该方法将实证研究流程划分为研究定义、数据准备和故障分析三个阶段，并通过多模型协作实现各阶段任务自动化。在具体实现中，大模型用于自动选择研究对象、筛选故障相关问题，并基于预定义分类体系对故障症状与根因进行标注与分析。实验结果表明，该框架可将原本需数周完成的分析任务缩短至约两小时，实现约20倍效率提升；但在细粒度分类任务中准确率仍有限，尤其在根因分析方面存在不足。总体而言，AutoEmpirical 展示了 LLM 在自动化软件工程研究中的潜力，同时也揭示了其在复杂推理与上下文理解方面的挑战。"
    },
    {
      "id": "ICWS2020SmartContractExecution",
      "title": "A Secure and Efficient Smart Contract Execution Scheme",
      "authors": "Zhaoxuan Li, Rui Zhang, Pengchao Li",
      "year": 2020,
      "venue": "IEEE International Conference on Web Services",
      "ccf": "B",
      "core": "A",
      "thcpl": "B",
      "type": "conference",
      "accepted": true,
      "ncsCategory": "NONE",
      "sciZone": "NONE",
      "fields": [
        "软件工程",
        "网络安全"
      ],
      "researchDirections": [
        "网络安全"
      ],
      "link": "https://doi.org/10.1007/978-3-030-59618-7_2",
      "abstract": "针对基于安全多方计算的智能合约执行过程中，攻击者可以执行与重构者相同过程以恢复共享秘密值、从而导致隐私泄露的问题，本文提出一种安全高效的智能合约执行方案。该方法改进了 DGHV 半同态加密算法，以减小公钥大小和密文长度并提升加密效率；在此基础上，进一步设计融合安全多方计算与同态加密的智能合约执行框架 SMPC-HE，在保证合约执行隐私性的同时确保计算结果的正确性，并提升执行公平性。理论分析与实验结果表明，该方案具有良好的安全性、较高的执行效率以及较低的空间开销。"
    },
    {
      "id": "ICWS2024Moirai",
      "title": "Moirai: Optimizing Quantum Serverless Function Orchestration via Device Allocation and Circuit Deployment",
      "authors": "Tingting Li, Ziming Zhao*",
      "year": 2024,
      "venue": "ICWS",
      "ccf": "B",
      "core": "B",
      "thcpl": "B",
      "type": "conference",
      "accepted": true,
      "ncsCategory": "NONE",
      "sciZone": "NONE",
      "fields": [
        "交叉/综合/新兴",
        "计算机体系结构/并行与分布计算/存储系统"
      ],
      "researchDirections": [
        "量子智能"
      ],
      "link": "https://icws.conferences.computer.org/2024/",
      "abstract": "在快速发展的量子计算领域，云量子服务的出现为更广泛的用户群体打开了对这项尖端技术的访问。随着这些服务需求的增长，高效且及时地交付量子计算能力变得愈发关键。然而，当前在特定机器上执行量子任务的排队方法常常导致资源使用效率低下和等待时间延长。本文介绍了Moirai，一种量子无服务器功能编排框架，旨在缩短最大完成时间并提升设备利用率。利用量子电路的独特特性，Moirai引入了定制化的电路表示方案，结合了有向无环图（DAG）转换和图卷积网络（GCN）嵌入向量特征提取。Moirai的核心是强化学习的应用，它驱动一套用于设备分配和电路部署策略的决策流程。我们对95个主流量子算法电路、3∼7量子比特进行了广泛评估，利用10个IBM量子物理器件，采用三种芯片拓扑结构。结果表明，我们提出的框架显著提升了资源分配效率和整体性能，执行时间比基线方法显著缩短了30%以上。这凸显了Moirai作为优化量子云服务和释放量子计算技术潜力的实用解决方案的效果。"
    },
    {
      "id": "IJCAI2025QCDeploy",
      "title": "Empowering Quantum Serverless Circuit Deployment Optimization via Graph Contrastive Learning and Learning-to-Rank Co-designed Approaches",
      "authors": "Tingting Li, Ziming Zhao, Jianwei Yin",
      "year": 2025,
      "venue": "IJCAI",
      "ccf": "B",
      "core": "A*",
      "thcpl": "B",
      "type": "conference",
      "accepted": true,
      "ncsCategory": "NONE",
      "sciZone": "NONE",
      "fields": [
        "人工智能",
        "交叉/综合/新兴"
      ],
      "researchDirections": [
        "量子云平台"
      ],
      "link": "https://ijcai-preprints.s3.us-west-1.amazonaws.com/2025/8845.pdf",
      "abstract": "QCDeploy 是一种面向量子云服务的量子线路部署优化框架，旨在为量子无服务器场景提供更优且更灵活的部署策略。该方法将量子线路表示为有向无环图，并结合图对比学习生成线路表示，再通过面向排序的学习架构输出一组按优先级排列的候选部署方案。与现有方法通常只给出单一启发式结果不同，QCDeploy 能够同时考虑用户需求，并提供多个有效策略供选择。实验结果表明，在多种量子算法线路和不同 IBM 量子设备上，QCDeploy 相比 IBMQ 默认部署方案显著降低了部署开销，并明显提升了线路执行成功率。"
    },
    {
      "id": "INFOCOM2024Demeter",
      "title": "Demeter: Fine-grained Function Orchestration for Geo-distributed Serverless Analytics",
      "authors": "Xiaofei Yue, Song Yang*, Liehuang Zhu, Stojan Trajanovski, Xiaoming Fu",
      "year": 2024,
      "venue": "INFOCOM",
      "ccf": "A",
      "core": "A*",
      "thcpl": "A",
      "type": "conference",
      "accepted": true,
      "ncsCategory": "NONE",
      "sciZone": "NONE",
      "fields": [
        "计算机网络"
      ],
      "researchDirections": [
        "服务器无感知计算",
        "算力网络"
      ],
      "link": "https://ieeexplore.ieee.org/abstract/document/10621303",
      "abstract": "针对跨域服务器无感知数据分析中函数级资源调度复杂、SLO难以保证的问题，提出Demeter细粒度函数编排系统。通过分层GNN与多智能体强化学习实现函数级放置与资源分配协同优化，并设计拥塞控制机制。实验显示可降低23.3%–32.7%成本并减少27.4%以上SLO违约。"
    },
    {
      "id": "INFOCOM2024RIDS",
      "title": "RIDS: Towards Advanced IDS via RNN Model and Programmable Switches Co-Designed Approaches",
      "authors": "Ziming Zhao, Zhaoxuan Li, Zhuoxue Song, Fan Zhang, Binbin Chen",
      "year": 2024,
      "venue": "INFOCOM",
      "ccf": "A",
      "core": "A*",
      "thcpl": "A",
      "type": "conference",
      "accepted": true,
      "ncsCategory": "NONE",
      "sciZone": "NONE",
      "fields": [
        "计算机网络",
        "网络与信息安全"
      ],
      "researchDirections": [
        "网络安全",
        "入侵检测",
        "软硬件部署",
        "可编程交换机"
      ],
      "link": "https://ieeexplore.ieee.org/abstract/document/10621290",
      "abstract": "本文针对现有基于深度学习的入侵检测系统难以在网络内高效部署的问题，提出了一种面向可编程交换机协同设计的轻量级模型 RIDS。由于传统深度学习模型通常具有高度非线性和非凸性，其复杂结构不利于在数据平面中实现高性能推理。为此，RIDS 由两个核心组件构成：rLearner 负责设计具备网络内可部署性的 RNN 学习模型，rEnforcer 则实现模型在可编程交换机中的具体执行流水线。通过原型系统和真实测试床评估，结果表明 RIDS 能够在保持高检测精度的同时，实现对高速网络带宽的良好适配。实验进一步显示，RIDS 在实现约 99% F1 分数的同时，可支持每端口 100 Gbps 的吞吐，并仅引入纳秒级延迟，显著优于现有方案。"
    },
    {
      "id": "INFOCOM2025Fortuna",
      "title": "Fortuna: Towards Efficient Selection of High-Fidelity Link for Quantum Network in the Wild",
      "authors": "Tingting Li, Ziming Zhao, Jianwei Yin*",
      "year": 2025,
      "venue": "INFOCOM",
      "ccf": "A",
      "core": "A*",
      "thcpl": "A",
      "type": "conference",
      "accepted": true,
      "ncsCategory": "NONE",
      "sciZone": "NONE",
      "fields": [
        "计算机网络"
      ],
      "researchDirections": [
        "量子网络"
      ],
      "link": "https://ieeexplore.ieee.org/abstract/document/11044624/",
      "abstract": "Fortuna 是一种面向量子网络的高保真链路选择算法，旨在解决现有方法依赖保真度分布假设、因而难以适应真实环境的问题。该方法在不预设保真度分布形式的前提下，将链路选择建模为多臂老虎机问题，并结合变异系数与 Thompson Sampling 设计了针对性的链路探索与选择策略。通过这种方式，Fortuna 能够更好地平衡探索与利用之间的关系，从而在噪声环境下更高效地找到高质量链路。实验结果表明，在多种生成分布和基于 10 台 IBMQ 设备提取的真实分布上，Fortuna 相比三种代表性方法都表现更优。特别是，该方法能够显著减少低质量链路选择次数，并明显降低链路保真度偏差。"
    },
    {
      "id": "INFOCOM2026Rocket",
      "title": "Rocket: Warming Serverless Inference via Hierarchical ML Artifact Pre-loading and Sharing",
      "authors": "Xiaofei Yue, Song Yang*, Fan Li, Youqi Li, Yu Wang",
      "year": 2026,
      "venue": "INFOCOM",
      "ccf": "A",
      "core": "A*",
      "thcpl": "A",
      "type": "conference",
      "accepted": true,
      "ncsCategory": "NONE",
      "sciZone": "NONE",
      "fields": [
        "计算机网络"
      ],
      "researchDirections": [
        "大模型推理与训练"
      ],
      "link": "",
      "abstract": "针对服务器无感知AI推理冷启动中模型加载延迟与内存浪费问题，提出Rocket分层ML工件预加载与共享机制。基于双时间尺度预测与上下文老虎机实现动态预加载，并通过共享感知调度提升复用效率。实验显示降低约38%延迟并节省43.8%内存。"
    },
    {
      "id": "INS2026Portray",
      "title": "Portray learning: A novel learning paradigm for streaming emerging class detection",
      "authors": "Ziming Zhao, Zhaoxuan Li, Xiaofei Yue*, Tingting Li, Fan Zhang*",
      "year": 2026,
      "venue": "Information Sciences (INS)",
      "ccf": "B",
      "core": "N",
      "thcpl": "N",
      "type": "journal",
      "accepted": true,
      "ncsCategory": "NONE",
      "sciZone": "SCI1",
      "fields": [
        "数据库/数据挖掘/内容检索"
      ],
      "researchDirections": [
        "机器学习"
      ],
      "link": "",
      "abstract": "该工作提出了一种面向流数据中新类别发现与增量更新的学习范式Portray Learning。其核心思想是为每个类别维护一个独立的“画像器”（如自编码器），将新类/已知类识别问题转化为多个彼此独立的异常检测任务。每个画像器只负责判断样本是否属于自身类别，因此不同类别之间相互独立，既支持并行处理，也便于在新类别出现时进行增量扩展。与此同时，方法引入极值理论自动确定各画像器的异常阈值，从而减少人工设定参数的需求。实验结果表明，在多个数据集和真实流场景中，Portray Learning 即使在先验知识有限的情况下也优于现有方法。"
    },
    {
      "id": "ISSTA2024BugsPods",
      "title": "Bugs in Pods: Understanding Bugs in Container Runtime Systems",
      "authors": "Jiongchi Yu, Xiaofei Xie, Cen Zhang, Sen Chen, Yuekang Li, Wenbo Shen",
      "year": 2024,
      "venue": "The ACM SIGSOFT International Symposium on Software Testing and Analysis",
      "ccf": "A",
      "core": "A",
      "thcpl": "A",
      "type": "conference",
      "accepted": true,
      "ncsCategory": "NONE",
      "sciZone": "NONE",
      "fields": [
        "软件工程/系统软件/程序设计语言"
      ],
      "researchDirections": [
        "云计算与云服务器",
        "实证研究"
      ],
      "link": "https://dl.acm.org/doi/10.1145/3650212.3680366",
      "abstract": "该论文针对容器运行时系统（CRS）这一云计算核心基础设施，开展了首个系统性的缺陷实证研究。作者从主流 CRS 项目中收集了 429 个真实缺陷，并通过人工分析构建了涵盖 16 类症状和 13 类根因的分类体系。在此基础上，论文进一步评估了单元测试、集成测试和模糊测试等主流方法对这些缺陷的检测能力。结果表明，大部分缺陷难以被现有测试方法发现，主要原因在于缺乏测试驱动、测试预言和有效测试用例。总体而言，该研究揭示了 CRS 缺陷的特征与检测挑战，为改进容器基础设施的测试与质量保障提供了重要参考。"
    },
    {
      "id": "JSAC2025FCPlane",
      "title": "Verify All Traffic: Towards Zero-Trust In-Network Intrusion Detection against Multipath Routing",
      "authors": "Ziming Zhao, Zhaoxuan Li, Xiaofei Xie, Zhipeng Liu, Tingting Li, Jiongchi Yu, Fan Zhang, Binbin Chen",
      "year": 2025,
      "venue": "IEEE Journal on Selected Areas in Communications (JSAC)",
      "ccf": "A",
      "core": "A*",
      "thcpl": "N",
      "type": "journal",
      "accepted": true,
      "ncsCategory": "NONE",
      "sciZone": "SCI1",
      "fields": [
        "计算机网络",
        "网络与信息安全"
      ],
      "researchDirections": [
        "网络与算网融合"
      ],
      "link": "https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=49",
      "abstract": "FCPlane 是一种面向零信任入侵检测的转发与计算一体化数据平面框架，旨在解决多交换机部署和多路径路由环境下线速流量分析面临的实际挑战。与现有工作大多只在单一交换机节点上验证不同，FCPlane 进一步考虑了真实网络中广泛存在的多路径转发现象，以及由此带来的负载均衡与检测结果一致性问题。其核心思想是在 flowlet 粒度上协同设计数据转发与模型计算，并引入专门的马尔可夫链模型来支持高效调度与可靠推断。基于两个公开流量数据集、七种先进的网内流量分析模型和多种网络拓扑的实验结果表明，FCPlane 能够在复杂网络环境中实现更稳定有效的流量检测。总体来看，该工作为可编程交换机支持下的高性能零信任流量分析提供了一种更贴近真实部署场景的解决方案。"
    },
    {
      "id": "MICCAI2025NovelTwoStageApproach3DDental",
      "title": "A Novel Two-Stage Approach for 3D Dental Tooth  Instance Segmentation",
      "authors": "Yuhan Chen, Chunshi Wang, Bin Zhao*",
      "year": 2025,
      "venue": "MICCAI",
      "ccf": "B",
      "core": "N",
      "thcpl": "N",
      "type": "conference",
      "accepted": true,
      "ncsCategory": "NONE",
      "sciZone": "NONE",
      "fields": [
        "人工智能",
        "交叉/综合/新兴",
        "半监督学习",
        "医学图像分割"
      ],
      "researchDirections": [
        "医学智能"
      ],
      "link": "https://link.springer.com/chapter/10.1007/978-3-031-88977-6_18",
      "abstract": "牙齿CBCT实例分割是推动数字化牙科保健系统的基础步骤，其中牙齿分割的精度在准确的医学诊断中发挥着关键作用。传统神经网络在准确定位和分类3D牙科图像中的牙齿方面面临着重大挑战。这在CBCT扫描中存在复杂解剖结构的情况下尤为棘手。此外，从这些扫描中手动识别和标注每颗牙齿对医疗专业人员来说是一项非常耗时且繁重的任务。为了解决这些问题，在本文，我们提出了两阶段进行牙齿实例分割的半监督方法,并进行了创新性的数据预处理，我们的网络在\"MICCAI STS 2024 Challenge Task 2\"验证集当中取得了排名第四的优异成绩，并且性能超出其他主流的半监督网络。"
    },
    {
      "id": "MM2024Minerva",
      "title": "Minerva: Enhancing Quantum Network Performance for High-Fidelity Multimedia Transmission",
      "authors": "Tingting Li, Ziming Zhao, Jianwei Yin*",
      "year": 2024,
      "venue": "ACM Multimedia (MM)",
      "ccf": "A",
      "core": "A*",
      "thcpl": "A",
      "type": "conference",
      "accepted": true,
      "ncsCategory": "NONE",
      "sciZone": "NONE",
      "fields": [
        "计算机图形学与多媒体",
        "交叉/综合/新兴"
      ],
      "researchDirections": [
        "量子网络"
      ],
      "link": "https://2024.acmmm.org/",
      "abstract": "本文面向量子网络中多任务、多数据包场景下的高保真链路分配问题展开研究。现有工作大多只关注单个数据包的高保真链路选择，忽视了多数据包传输中的链路分配与调度需求，从而限制了量子网络在实际多媒体应用中的可扩展性。为此，本文提出了一个新的框架 Minerva，通过中值淘汰方法估计链路保真度，并结合传输策略为多个任务选择高保真链路。与此同时，针对多媒体分块传输场景，本文进一步引入调度策略，在综合考虑链路保真度与网络整体利用率的基础上，最大化分块传输的累计收益。实验结果表明，相比随机方法和均匀分布方法，Minerva 在减少跳数和执行时间的同时，能够显著提升平均保真度，展现出良好的性能优势与应用潜力。"
    },
    {
      "id": "MM2025StealthyAE",
      "title": "Stealthy-AE: Generating Stealthy Adversarial Examples through Online Social Networks",
      "authors": "Ziming Zhao, Zhaoxuan Li, Tingting Li*, Fan Zhang*",
      "year": 2025,
      "venue": "ACM Multimedia (MM)",
      "ccf": "A",
      "core": "A*",
      "thcpl": "A",
      "type": "conference",
      "accepted": true,
      "ncsCategory": "NONE",
      "sciZone": "NONE",
      "fields": [
        "计算机图形学与多媒体",
        "网络与信息安全"
      ],
      "researchDirections": [
        "AI安全"
      ],
      "link": "https://dl.acm.org/doi/abs/10.1145/3746027.3755240",
      "abstract": "该工作提出了“隐蔽对抗样本”这一新概念，即样本在通过在线社交网络传播前表现为正常图像，但在经过平台的压缩、格式转换等处理后会激活其对抗性。围绕这一现象，作者设计了一套隐蔽对抗样本生成框架，通过质量因子计算、结合差分 JPEG 层的扩散模型来模拟社交平台传输过程，并利用拉格朗日乘子方法对生成过程进行优化。与传统对抗样本不同，这类方法能够更贴近真实网络传播场景中的攻击方式，因此具有更强的隐蔽性和现实威胁。实验结果表明，该方法在多个社交平台和多种目标模型上均优于七种现有先进对抗样本生成技术。进一步的抗检测评估和不同攻击设置下的扩展实验也验证了该方案的可扩展性与有效性。"
    },
    {
      "id": "MobiCom2024QLSel",
      "title": "QLSel: Demonstrating Efficient High-Fidelity Link Selection for Quantum Networks in the Wild",
      "authors": "Tingting Li, Ziming Zhao, Jianwei Yin*",
      "year": 2024,
      "venue": "MobiCom Demo",
      "ccf": "N",
      "core": "N",
      "thcpl": "N",
      "type": "conference",
      "accepted": true,
      "ncsCategory": "NONE",
      "sciZone": "NONE",
      "fields": [
        "计算机网络"
      ],
      "researchDirections": [
        "量子网络"
      ],
      "link": "https://dl.acm.org/doi/abs/10.1145/3636534.3698853",
      "abstract": "本文面向 NISQ 时代量子网络中高保真链路选择这一关键问题展开研究。由于量子噪声的普遍存在，量子链路保真度较低且波动明显，使得安全通信与高质量数据传输面临挑战。为此，本文提出了一种无需预先假设保真度分布的高效链路选择算法 QLSel，并将问题建模为多臂赌博机问题，以应对探索与利用之间的权衡。具体而言，QLSel 结合变异系数与 Thompson Sampling，设计了定制化的链路探索策略和链路选择概率机制。大量实验结果表明，QLSel 在性能上显著优于现有代表性方法。"
    },
    {
      "id": "NatCommun2024CreatingAndControllingGlobalGHZEntanglement",
      "title": "Creating and controlling global Greenberger-Horne-Zeilinger entanglement on quantum processors",
      "authors": "Zehang Bao, Shibo Xu, Zixuan Song, Ke Wang, Liang Xiang, Zitian Zhu, Jiachen Chen, Feitong Jin, Xuhao Zhu, Yu Gao, Yaozu Wu, Chuanyu Zhang, Ning Wang, Yiren Zou, Ziqi Tan, Aosai Zhang, Zhengyi Cui, Fanhao Shen, Jiarun Zhong, Tingting Li, Jinfeng Deng, Xu Zhang, Hang Dong, Pengfei Zhang, Yang-Ren Liu, Liangtian Zhao, Jie Hao, Hekang Li, Zhen Wang, Chao Song, Qiujiang Guo, Biao Huang, H. Wang",
      "year": 2024,
      "venue": "Nature Communications",
      "ccf": "N",
      "core": "N",
      "thcpl": "N",
      "type": "journal",
      "accepted": true,
      "ncsCategory": "NCS_SUB",
      "sciZone": "SCI1",
      "fields": [
        "交叉/综合/新兴",
        "计算机体系结构/并行与分布计算/存储系统"
      ],
      "researchDirections": [
        "量子智能"
      ],
      "link": "https://www.nature.com/articles/s41467-024-53140-5",
      "doi": "https://doi.org/10.1038/s41467-024-53140-5",
      "abstract": "该工作提出了一套面向大规模 GHZ 纠缠态的创建、保护与操控策略，并在高保真数字量子电路支持下完成系列实验。作者在超导量子处理器上成功制备了最多 60 比特的真多体 GHZ 态，并将其嵌入特制的 cat scar 离散时间晶体本征态中，以延长其寿命并实现可控操纵。结果为大规模脆弱纠缠态的稳定操作提供了新路径，也凸显了超导处理器在研究非平衡量子物态方面的潜力。"
    },
    {
      "id": "NatCommun2024EmergenceOfSteadyQuantumTransport",
      "title": "Emergence of steady quantum transport in a superconducting processor",
      "authors": "Pengfei Zhang, Yu Gao, Xiansong Xu, Ning Wang, Hang Dong, Chu Guo, Jinfeng Deng, Xu Zhang, Jiachen Chen, Shibo Xu, Ke Wang, Yaozu Wu, Chuanyu Zhang, Feitong Jin, Xuhao Zhu, Aosai Zhang, Yiren Zou, Ziqi Tan, Zhengyi Cui, Zitian Zhu, Fanhao Shen, Tingting Li, Jiarun Zhong, Zehang Bao, Liangtian Zhao, Jie Hao, Hekang Li, Zhen Wang, Chao Song, Qiujiang Guo, H. Wang, Dario Poletti",
      "year": 2024,
      "venue": "Nature Communications",
      "ccf": "N",
      "core": "N",
      "thcpl": "N",
      "type": "journal",
      "accepted": true,
      "ncsCategory": "NCS_SUB",
      "sciZone": "SCI1",
      "fields": [
        "交叉/综合/新兴",
        "计算机体系结构/并行与分布计算/存储系统"
      ],
      "researchDirections": [
        "量子智能"
      ],
      "link": "https://www.nature.com/articles/s41467-024-54332-9",
      "doi": "https://doi.org/10.1038/s41467-024-54332-9",
      "abstract": "该工作在超导量子处理器上通过量子比特梯形结构模拟热浴，实验演示了非平衡稳态量子输运的形成过程。作者观测到粒子流对热浴初始化细节并不敏感，且其时间涨落会随热浴规模增大而迅速减小，呈现出类似热力学极限下的稳态行为。结合单站点分辨控制与测量，研究进一步展示了通过调节热浴填充与谱性质来调控稳态流的能力。"
    },
    {
      "id": "NatCommun2024LongLivedTopologicalTimeCrystallineOrder",
      "title": "Long-lived topological time-crystalline order on a quantum processor",
      "authors": "Liang Xiang, Wenjie Jiang, Zehang Bao, Zixuan Song, Shibo Xu, Ke Wang, Jiachen Chen, Feitong Jin, Xuhao Zhu, Zitian Zhu, Fanhao Shen, Ning Wang, Chuanyu Zhang, Yaozu Wu, Yiren Zou, Jiarun Zhong, Zhengyi Cui, Aosai Zhang, Ziqi Tan, Tingting Li, Yu Gao, Jinfeng Deng, Xu Zhang, Hang Dong, Pengfei Zhang, Si Jiang, Weikang Li, Zhide Lu, Zheng-Zhi Sun, Hekang Li, Zhen Wang, Chao Song, Qiujiang Guo, Fangli Liu, Zhe-Xuan Gong, Alexey V. Gorshkov, Norman Y. Yao, Thomas Iadecola, Francisco Machado, H. Wang, Dong-Ling Deng",
      "year": 2024,
      "venue": "Nature Communications",
      "ccf": "N",
      "core": "N",
      "thcpl": "N",
      "type": "journal",
      "accepted": true,
      "ncsCategory": "NCS_SUB",
      "sciZone": "SCI1",
      "fields": [
        "交叉/综合/新兴",
        "计算机体系结构/并行与分布计算/存储系统"
      ],
      "researchDirections": [
        "量子智能"
      ],
      "link": "https://www.nature.com/articles/s41467-024-53077-9",
      "doi": "https://doi.org/10.1038/s41467-024-53077-9",
      "abstract": "该工作在方格排布的可编程超导量子处理器上，通过周期驱动表面码哈密顿量，观测到预热拓扑有序时间晶体的关键信号。实验中，离散时间平移对称性破缺并不体现在局域量上，而是反映在非局域逻辑算符的次谐响应之中；同时，作者还结合拓扑纠缠熵测量验证了其背后的拓扑有序。结果展示了利用噪声中等规模量子处理器探索非平衡拓扑物态的可行性。"
    },
    {
      "id": "NatCommun2025DemonstratingQuantumErrorMitigation",
      "title": "Demonstrating quantum error mitigation on logical qubits",
      "authors": "Aosai Zhang, Haipeng Xie, Yu Gao, Jia-Nan Yang, Zehang Bao, Zitian Zhu, Jiachen Chen, Ning Wang, Chuanyu Zhang, Jiarun Zhong, Shibo Xu, Ke Wang, Yaozu Wu, Feitong Jin, Xuhao Zhu, Yiren Zou, Ziqi Tan, Zhengyi Cui, Fanhao Shen, Tingting Li, Yihang Han, Yiyang He, Gongyu Liu, Jiayuan Shen, Han Wang, Yanzhe Wang, Hang Dong, Jinfeng Deng, Hekang Li, Zhen Wang, Chao Song, Qiujiang Guo, Pengfei Zhang, Ying Li, H. Wang",
      "year": 2025,
      "venue": "Nature Communications",
      "ccf": "N",
      "core": "N",
      "thcpl": "N",
      "type": "journal",
      "accepted": true,
      "ncsCategory": "NCS_SUB",
      "sciZone": "SCI1",
      "fields": [
        "交叉/综合/新兴",
        "计算机体系结构/并行与分布计算/存储系统"
      ],
      "researchDirections": [
        "量子智能"
      ],
      "link": "https://www.nature.com/articles/s41467-025-67768-4",
      "doi": "https://doi.org/10.1038/s41467-025-67768-4",
      "abstract": "该工作将零噪声外推这一实用量子误差缓解技术应用到超导处理器上的量子纠错电路中，用于降低逻辑层错误。通过人为放大物理量子比特上的噪声并建立输出结果与噪声强度之间的多项式关系，作者实现了对逻辑误差的有效外推抑制。实验表明，该方法在重复码和表面码等多种容错电路中都能稳定降低逻辑错误，并在多轮纠错场景下依然保持效果。"
    },
    {
      "id": "NatCommun2025ObservationOfMinimalAndMaximalSpeedLimits",
      "title": "Observation of minimal and maximal speed limits for few and many-body states",
      "authors": "Zitian Zhu, Lei Gao, Zehang Bao, Liang Xiang, Zixuan Song, Shibo Xu, Ke Wang, Jiachen Chen, Feitong Jin, Xuhao Zhu, Yu Gao, Yaozu Wu, Chuanyu Zhang, Ning Wang, Yiren Zou, Ziqi Tan, Aosai Zhang, Zhengyi Cui, Fanhao Shen, Jiarun Zhong, Tingting Li, Jinfeng Deng, Xu Zhang, Hang Dong, Pengfei Zhang, Zhen Wang, Chao Song, Chen Cheng, Qiujiang Guo, Hekang Li, H. Wang, Hai-Qing Lin, Rubem Mondaini",
      "year": 2025,
      "venue": "Nature Communications",
      "ccf": "N",
      "core": "N",
      "thcpl": "N",
      "type": "journal",
      "accepted": true,
      "ncsCategory": "NCS_SUB",
      "sciZone": "SCI1",
      "fields": [
        "交叉/综合/新兴",
        "计算机体系结构/并行与分布计算/存储系统"
      ],
      "researchDirections": [
        "量子智能"
      ],
      "link": "https://www.nature.com/articles/s41467-025-56451-3",
      "doi": "https://doi.org/10.1038/s41467-025-56451-3",
      "abstract": "该工作基于可编程超导量子处理器，对单体和多体量子系统的演化过程进行了系统实验研究，用于检验量子态变化速度的基本极限。作者不仅验证了已知的最大量子速度极限，还通过调节哈密顿量参数，观测到不同界之间的交叉行为以及较少被实验验证的最小速度极限。结果为理解量子态演化约束及其在更复杂开放系统中的推广提供了实验基础。"
    },
    {
      "id": "NatPhys2026LowOverheadQuantumErrorCorrectionCodes",
      "title": "Demonstration of low-overhead quantum error correction codes",
      "authors": "Ke Wang, Zhide Lu, Chuanyu Zhang, Gongyu Liu, Jiachen Chen, Yanzhe Wang, Yaozu Wu, Shibo Xu, Xuhao Zhu, Feitong Jin, Yu Gao, Ziqi Tan, Zhengyi Cui, Ning Wang, Yiren Zou, Aosai Zhang, Tingting Li, Fanhao Shen, Jiarun Zhong, Zehang Bao, Zitian Zhu, Yihang Han, Yiyang He, Jiayuan Shen, Han Wang, Jia-Nan Yang, Zixuan Song, Jinfeng Deng, Hang Dong, Zheng-Zhi Sun, Weikang Li, Qi Ye, Si Jiang, Yixuan Ma, Pei-Xin Shen, Pengfei Zhang, Hekang Li, Qiujiang Guo, Zhen Wang, Chao Song, H. Wang, Dong-Ling Deng",
      "year": 2026,
      "venue": "Nature Physics",
      "ccf": "N",
      "core": "N",
      "thcpl": "N",
      "type": "journal",
      "accepted": true,
      "ncsCategory": "NCS_SUB",
      "sciZone": "SCI1",
      "fields": [
        "交叉/综合/新兴",
        "计算机体系结构/并行与分布计算/存储系统"
      ],
      "researchDirections": [
        "量子智能"
      ],
      "link": "https://www.nature.com/articles/s41567-025-03157-4",
      "doi": "https://doi.org/10.1038/s41567-025-03157-4",
      "abstract": "该工作在 32 比特超导量子处理器上实验演示了两类低开销量子低密度奇偶校验纠错码，包括距离为 4 的双变量自行车码和距离为 3 的穿孔双变量自行车码。作者利用带有重叠长程耦合器的二维架构，实现了所有非局域权重 6 稳定子的同步测量，并报告了对应逻辑比特每周期的逻辑错误率。结果表明，长程耦合超导处理器上实施低开销量子纠错是可行的，为可扩展容错量子计算提供了实验依据。"
    },
    {
      "id": "Nature2025TopologicalPrethermalStrongZeroModes",
      "title": "Topological prethermal strong zero modes on superconducting processors",
      "authors": "Feitong Jin, Si Jiang, Xuhao Zhu, Zehang Bao, Fanhao Shen, Ke Wang, Zitian Zhu, Shibo Xu, Zixuan Song, Jiachen Chen, Ziqi Tan, Yaozu Wu, Chuanyu Zhang, Yu Gao, Ning Wang, Yiren Zou, Aosai Zhang, Tingting Li, Jiarun Zhong, Zhengyi Cui, Yihang Han, Yiyang He, Han Wang, Jia-Nan Yang, Yanzhe Wang, Jiayuan Shen, Gongyu Liu, Jinfeng Deng, Hang Dong, Pengfei Zhang, Weikang Li, Dong Yuan, Zhide Lu, Zheng-Zhi Sun, Hekang Li, Junxiang Zhang, Chao Song, Zhen Wang, Qiujiang Guo, Francisco Machado, Jack Kemp, Thomas Iadecola, Norman Y. Yao, H. Wang, Dong-Ling Deng",
      "year": 2025,
      "venue": "Nature",
      "ccf": "N",
      "core": "N",
      "thcpl": "N",
      "type": "journal",
      "accepted": true,
      "ncsCategory": "NCS",
      "sciZone": "SCI1",
      "fields": [
        "交叉/综合/新兴",
        "计算机体系结构/并行与分布计算/存储系统"
      ],
      "researchDirections": [
        "量子智能"
      ],
      "link": "https://www.nature.com/articles/s41586-025-09476-z",
      "doi": "https://doi.org/10.1038/s41586-025-09476-z",
      "abstract": "该工作在 100 比特可编程超导量子处理器上，通过数字量子模拟一维无序自由稳定子哈密顿量，观测到由预热区间涌现对称性保护的拓扑边界模。实验表明，这类拓扑零模能够在有限温度和无无序条件下保持长寿命，并可通过稳定子强度二聚化进一步抑制其与体激发的耦合。作者还利用这些边界模编码逻辑量子比特并制备逻辑 Bell 态，展示了其作为稳健边界量子存储单元的潜力。"
    },
    {
      "id": "NDSS2026Chimera",
      "title": "Chimera: Harnessing Multi-Agent LLMs for Automatic Insider Threat Simulation",
      "authors": "Jiongchi Yu, Xiaofei Xie, Qiang Hu*, Yuhan Ma, Ziming Zhao*",
      "year": 2026,
      "venue": "NDSS",
      "ccf": "A",
      "core": "A*",
      "thcpl": "A",
      "type": "conference",
      "accepted": true,
      "ncsCategory": "NONE",
      "sciZone": "NONE",
      "fields": [
        "网络与信息安全"
      ],
      "researchDirections": [
        "大模型多智能体",
        "网络安全"
      ],
      "link": "https://www.ndss-symposium.org/ndss-paper/chimera-harnessing-multi-agent-llms-for-automatic-insider-threat-simulation/",
      "abstract": "Chimera 是一种基于大语言模型的多智能体框架，旨在解决内部威胁检测中高质量、真实训练数据匮乏的问题。它将不同智能体建模为具有细粒度角色的企业员工，通过会议、双人互动和自主日程安排来模拟真实组织环境中的正常与恶意行为。基于从真实事件中抽象出的 15 类内部攻击，作者在三种典型的高敏感组织场景中构建了新的日志数据集 ChimeraLog。实验与人工评估表明，ChimeraLog 在多样性和真实性方面表现较好，而且相较现有数据集更具挑战性。进一步结果显示，在 ChimeraLog 上训练的内部威胁检测模型具有较强的泛化能力，说明基于大模型的多智能体仿真在推动该领域研究方面具有实际价值。",
      "imageUrl": "figures/NDSS2026Chimera.png"
    },
    {
      "id": "NPJQI2025QuantumEnsembleLearning",
      "title": "Quantum ensemble learning with a programmable superconducting processor",
      "authors": "Jiachen Chen, Yaozu Wu, Zhen Yang, Shibo Xu, Xuan Ye, Daili Li, Ke Wang, Chuanyu Zhang, Feitong Jin, Xuhao Zhu, Yu Gao, Ziqi Tan, Zhengyi Cui, Aosai Zhang, Ning Wang, Yiren Zou, Tingting Li, Fanhao Shen, Jiarun Zhong, Zehang Bao, Zitian Zhu, Zixuan Song, Jinfeng Deng, Hang Dong, Pengfei Zhang, Wei Zhang, Hekang Li, Qiujiang Guo, Zhen Wang, Ying Li, Xiaoting Wang, Chao Song, H. Wang",
      "year": 2025,
      "venue": "npj Quantum Information",
      "ccf": "N",
      "core": "N",
      "thcpl": "N",
      "type": "journal",
      "accepted": true,
      "ncsCategory": "NCS_SUB",
      "sciZone": "SCI1",
      "fields": [
        "交叉/综合/新兴",
        "计算机体系结构/并行与分布计算/存储系统"
      ],
      "researchDirections": [
        "量子智能"
      ],
      "link": "https://www.nature.com/articles/s41534-025-01037-6",
      "doi": "https://doi.org/10.1038/s41534-025-01037-6",
      "abstract": "该工作提出了 AdaBoost.Q，一种面向量子分类器的集成学习方法，通过在自适应训练与组合过程中重新分配注意力来提升量子模型的学习能力。作者在可编程超导量子处理器上验证了该方法对量子神经网络和量子卷积网络等多种模型的增强效果，在多类分类和量子特征识别任务上均取得明显性能提升。研究为推动量子机器学习从噪声设备走向实际应用提供了基础工具。"
    },
    {
      "id": "NPJQI2026QuantumContinualLearning",
      "title": "Experimental demonstration of quantum continual learning with superconducting qubits",
      "authors": "Chuanyu Zhang, Zhide Lu, Liangtian Zhao, Shibo Xu, Weikang Li, Ke Wang, Jiachen Chen, Yaozu Wu, Feitong Jin, Xuhao Zhu, Yu Gao, Ziqi Tan, Zhengyi Cui, Aosai Zhang, Ning Wang, Yiren Zou, Tingting Li, Fanhao Shen, Jiarun Zhong, Zehang Bao, Zitian Zhu, Zixuan Song, Jinfeng Deng, Hang Dong, Pengfei Zhang, Wenjie Jiang, Zheng-Zhi Sun, Pei-Xin Shen, Hekang Li, Qiujiang Guo, Zhen Wang, Jie Hao, H. Wang, Dong-Ling Deng, Chao Song",
      "year": 2026,
      "venue": "npj Quantum Information",
      "ccf": "N",
      "core": "N",
      "thcpl": "N",
      "type": "journal",
      "accepted": true,
      "ncsCategory": "NCS_SUB",
      "sciZone": "SCI1",
      "fields": [
        "交叉/综合/新兴",
        "计算机体系结构/并行与分布计算/存储系统"
      ],
      "researchDirections": [
        "量子智能"
      ],
      "link": "https://www.nature.com/articles/s41534-025-01174-y",
      "doi": "https://doi.org/10.1038/s41534-025-01174-y",
      "abstract": "该工作在超导量子处理器上实验演示了量子持续学习，并系统展示了量子分类器在顺序任务训练中的灾难性遗忘现象。为缓解这一问题，作者引入弹性权重巩固策略，使模型在连续三项任务训练后仍能保留先前知识，并取得超过 92.3% 的平均准确率。研究结果表明，量子学习系统可以通过合适机制获得面向连续任务的适应能力，为量子机器学习的长期部署提供了可行路径。"
    },
    {
      "id": "QCNC2025QuFM",
      "title": "QuFM: Towards Efficient Quantum Link Fidelity Measurements in Quantum Networks",
      "authors": "Ziming Zhao, Tingting Li*, Zhaoxuan Li",
      "year": 2025,
      "venue": "QCNC",
      "ccf": "N",
      "core": "N",
      "thcpl": "N",
      "type": "conference",
      "accepted": true,
      "ncsCategory": "NONE",
      "sciZone": "NONE",
      "fields": [
        "计算机网络"
      ],
      "researchDirections": [
        "量子网络"
      ],
      "link": "https://ieeexplore.ieee.org/abstract/document/11000192/",
      "abstract": "本文聚焦于量子网络中的链路保真度测量问题。量子网络凭借叠加态、纠缠等量子力学特性，具备超越经典通信系统的潜力，但在当前 NISQ 设备条件下，噪声、误差与退相干会显著影响通信质量。针对现有保真度测量方法在测量开销与测量精度之间难以兼顾的问题，本文提出了一种自适应测量方案 QuFM。该方法利用卡尔曼滤波对量子态层析过程进行建模，判断系统是否达到稳定状态，从而提前终止迭代、减少测量次数。实验结果表明，QuFM 在保证测量准确性的同时显著提升了测量效率，并能够适用于不同误差类型和多种网络拓扑。"
    },
    {
      "id": "QCNC2025QuFrame",
      "title": "QuFrame: A Novel Encoding Ensemble Framework for Quantum Neural Networks",
      "authors": "Tingting Li, Ziming Zhao, Liqiang Lu*, Jianwei Yin*",
      "year": 2025,
      "venue": "QCNC",
      "ccf": "N",
      "core": "N",
      "thcpl": "N",
      "type": "conference",
      "accepted": true,
      "ncsCategory": "NONE",
      "sciZone": "NONE",
      "fields": [
        "人工智能"
      ],
      "researchDirections": [
        "量子神经网络"
      ],
      "link": "https://ieeexplore.ieee.org/abstract/document/11000218",
      "abstract": "本文关注量子神经网络在经典任务中的数据编码问题。由于经典数据需要先映射为量子态，其编码方式将直接影响模型的特征表达能力和整体性能，而现有方法在编码空间、容错性等方面仍存在不足。为此，本文提出了一种新的量子编码集成框架 QuFrame，通过融合多种编码方法的优势，设计了包含复数线性层加权编码、L2 归一化以及基于梯度下降的权重优化在内的完整流程。与此同时，论文还引入了一系列量子态分布评估指标，并构建了多种量子核函数，为 QuFrame 提供理论分析和可视化支持。实验结果表明，与四种典型量子态编码方法相比，QuFrame 在平均准确率和 F1 分数上分别提升了 7.2%∼31.85% 和 11%∼37.74%。"
    },
    {
      "id": "RTSS2023RealTimeIDS",
      "title": "Work-in-Progress: Towards Real-Time IDS via RNN and Programmable Switches Co-Designed Approach",
      "authors": "Ziming Zhao, Zhaoxuan Li, Zhuoxue Song, Fan Zhang",
      "year": 2023,
      "venue": "IEEE Real-Time Systems Symposium",
      "ccf": "N",
      "core": "N",
      "thcpl": "N",
      "type": "conference",
      "accepted": true,
      "ncsCategory": "NONE",
      "sciZone": "NONE",
      "fields": [
        "计算机网络",
        "网络安全",
        "人工智能"
      ],
      "researchDirections": [
        "网络安全",
        "机器学习"
      ],
      "link": "https://doi.org/10.1109/RTSS59052.2023.00045",
      "abstract": "针对实时入侵检测系统在高带宽网络环境下面临的时延、吞吐与检测精度难以兼顾的问题，本文提出一种结合循环神经网络与可编程交换机协同设计的实时入侵检测方法。该方法基于可编程交换机数据平面的计算能力与部署约束，对 GRU 模型进行轻量化简化与重构，使检测过程能够在交换机侧高效执行。实验结果表明，RIDS 可在 100Gbps 带宽的数据平面中实现纳秒级处理时延，并取得显著的入侵与恶意软件检测效果，F1 值约为 99%。"
    },
    {
      "id": "RTSS2024DDoSScrub",
      "title": "Work-in-Progress: Analyzing Worst-Case DDoS Traffic Scrub Effect and Recovery Delay via Attack Vector Combination",
      "authors": "Ziming Zhao, Zhaoxuan Li, Tingting Li",
      "year": 2024,
      "venue": "IEEE Real-Time Systems Symposium",
      "ccf": "A",
      "core": "A*",
      "thcpl": "B",
      "type": "conference",
      "accepted": true,
      "ncsCategory": "NONE",
      "sciZone": "NONE",
      "fields": [
        "计算机网络",
        "网络安全"
      ],
      "researchDirections": [
        "网络安全"
      ],
      "link": "https://doi.org/10.1109/RTSS62706.2024.00052",
      "abstract": "针对学术界和工业界广泛关注的 DDoS 缓解问题，本文研究了强攻击者通过组合不同 DDoS 攻击向量，以最大化绕过流量过滤与检测器的数据包数量，并进一步影响清洗效果和恢复时延的现象。为此，本文将攻击向量组合建模为组合优化问题，分析最坏情况下攻击流量清洗效果与恢复延迟，为理解和设计面向极端对抗场景的 DDoS 防御方法提供了新的视角和深刻见解。"
    },
    {
      "id": "SECON2024P2PBotnetDetection",
      "title": "A Large-Scale P2P Botnet Detection Framework via Topology and Traffic Co-Verification",
      "authors": "Ziming Zhao, Zhaoxuan Li, Tingting Li, Fan Zhang*",
      "year": 2024,
      "venue": "SECON",
      "ccf": "B",
      "core": "A",
      "thcpl": "B",
      "type": "conference",
      "accepted": true,
      "ncsCategory": "NONE",
      "sciZone": "NONE",
      "fields": [
        "计算机网络",
        "网络与信息安全"
      ],
      "researchDirections": [
        "网络与算网融合"
      ],
      "link": "https://secon2024.ieee-secon.org/",
      "abstract": "TNT 是一种面向大规模 P2P 僵尸网络的检测框架，结合通信拓扑分析与部分节点流量检测，通过 tScouter、tCommander 和 tPatroller 三个紧耦合组件，在检测精度与分析开销之间取得了有效平衡。实验基于 42 组数据、覆盖 6 类僵尸网络和 7 类合法 P2P 流量，结果表明 TNT 在超过 14 万节点的通信图中仅检查约 2 万个节点即可达到约 99.9% 的检测准确率。"
    },
    {
      "id": "SIGCOMM2024P2PBotnetPoster",
      "title": "Poster: Combine Topology and Traffic to Calibrate P2P Botnet Identification in Large-Scale Network",
      "authors": "Ziming Zhao, Zhaoxuan Li, Fan Zhang, Tingting Li, Jianwei Yin",
      "year": 2024,
      "venue": "ACM SIGCOMM 2024 Conference: Posters and Demos",
      "ccf": "N",
      "core": "N",
      "thcpl": "N",
      "type": "conference",
      "accepted": true,
      "ncsCategory": "NONE",
      "sciZone": "NONE",
      "fields": [
        "计算机网络",
        "网络安全",
        "人工智能"
      ],
      "researchDirections": [
        "僵尸网络",
        "机器学习"
      ],
      "link": "https://doi.org/10.1145/3672202.3673720",
      "abstract": "针对超过 100K 海量僵尸网络节点对互联网基础设施造成严重破坏，以及大规模 P2P 僵尸网络识别结果中存在误识别校准困难的问题，本文提出一种结合网络拓扑与流量特征的校准方法。该方法设计了基于强化学习的智能节点检索过程，能够以尽可能少的检索开销校准更多错误识别结果，从而提升大规模网络环境下 P2P 僵尸网络识别的准确性与效率。基于超过 10 万个通信节点和 7 种常见 P2P 协议构建的测试实验床结果表明，该方法在误识别校准效果上优于现有方法。"
    },
    {
      "id": "SIGKDD2025TrafficScope",
      "title": "Towards Context-Aware Traffic Classification via Time-Wavelet Fusion Network",
      "authors": "Ziming Zhao, Zhuoxue Song, Xiaofei Xie, Zhaoxuan Li, Jiongchi Yu, Fan Zhang, Tingting Li",
      "year": 2025,
      "venue": "KDD",
      "ccf": "A",
      "core": "A*",
      "thcpl": "A",
      "type": "conference",
      "accepted": true,
      "ncsCategory": "NONE",
      "sciZone": "NONE",
      "fields": [
        "数据库/数据挖掘/内容检索",
        "人工智能"
      ],
      "researchDirections": [
        "加密流量",
        "网络安全"
      ],
      "link": "https://dl.acm.org/doi/abs/10.1145/3690624.3709315",
      "abstract": "TrafficScope 是一种面向加密流量分类的时域—小波融合 Transformer 网络，旨在解决仅依赖流内语义特征时难以区分相似攻击与正常行为的问题。该方法不仅提取流内特征，还进一步建模流量的上下文信息，以形成更全面的表示。针对上下文流量具有非平稳、动态变化的特点，TrafficScope 引入小波变换提取更稳定的不变特征，并通过交叉注意力机制融合时域特征与小波域特征。实验结果表明，TrafficScope 在多组真实流量数据集上优于现有多种先进方法。进一步的相似流内特征、数据污染、流操纵和动态上下文实验也验证了该方法的鲁棒性、稳定性以及跨数据集应用潜力。"
    },
    {
      "id": "SIGKDD2026QuMap",
      "title": "QuaMap: A Multi-Backend Benchmark Dataset for Quantum Circuit Mapping and Learning-Based Compiler Evaluation",
      "authors": "Ziming Zhao#, Tingting Li#*, Jianwei Yin*",
      "year": 2026,
      "venue": "SIGKDD",
      "ccf": "A",
      "core": "A*",
      "thcpl": "A",
      "type": "conference",
      "accepted": true,
      "ncsCategory": "NONE",
      "sciZone": "NONE",
      "fields": [
        "数据库/数据挖掘/内容检索"
      ],
      "researchDirections": [
        "量子数据集"
      ],
      "link": "",
      "abstract": "QuaMap 是首个面向量子线路硬件映射的大规模开放基准数据集，旨在系统刻画量子程序在不同硬件后端上的转译与映射效果。该数据集将 75 个代表性量子算法与 10 台 IBM Quantum 设备上的超过 21 万个硬件感知转译线路进行关联，并同时提供原始线路和转译后线路。与已有数据集不同，QuaMap 重点记录了拓扑约束编译带来的影响，包含线路深度、门数量以及 CNOT 数等丰富的结构与性能指标。基于这些数据，作者设计了线路嵌入分类、转译指标预测、映射质量排序和迁移性评估四类基准任务，并提供了可复现的基线方法。实验结果表明，图神经网络在这些任务上明显优于启发式方法和传统模型，为数据驱动的量子编译研究提供了标准化基础。"
    },
    {
      "id": "SIGKDD2026VQFlow",
      "title": "VQFlow: A Benchmark Dataset for Encrypted Video Streaming Traffic across QoS Configurations",
      "authors": "Ziming Zhao, Zhaoxuan Li*, Tingting Li, Fan Zhang*",
      "year": 2026,
      "venue": "SIGKDD",
      "ccf": "A",
      "core": "A*",
      "thcpl": "A",
      "type": "conference",
      "accepted": true,
      "ncsCategory": "NONE",
      "sciZone": "NONE",
      "fields": [
        "数据库/数据挖掘/内容检索"
      ],
      "researchDirections": [
        "加密流量"
      ],
      "link": "",
      "abstract": "VQFlow 是一个大规模、公开可用的视频流量数据集，旨在研究不同 QoS 条件下的视频传输行为。该数据集在受控环境中系统采集了加密视频流量，并覆盖分辨率、帧率和码率控制策略等关键参数变化。与以往数据集不同，VQFlow 将数据包级流量与时间对齐的播放配置和网络状态标注相结合，支持细粒度分析。基于该数据集，作者开展了 QoS 分类、码率估计、流量建模和异常检测等任务的基准实验。结果表明，VQFlow 为多媒体系统、网络管理及加密流量机器学习研究提供了可靠且可复现的基础。"
    },
    {
      "id": "SMC2025ConsMatch",
      "title": "ConsMatch: Semi-Supervised Medical Image Segmentation via Multi-View Contrast and Feature Consistency",
      "authors": "Yuhan Chen, You Li*, Bin Zhao*",
      "year": 2025,
      "venue": "SMC",
      "ccf": "C",
      "core": "N",
      "thcpl": "N",
      "type": "conference",
      "accepted": true,
      "ncsCategory": "NONE",
      "sciZone": "NONE",
      "fields": [
        "人工智能",
        "交叉/综合/新兴",
        "半监督学习",
        "医学图像分割"
      ],
      "researchDirections": [
        "医学智能"
      ],
      "link": "https://ieeexplore.ieee.org/abstract/document/11342848",
      "abstract": "在半监督医学图像分割任务中，重点在于如何充分利用未标记数据。然而， 当前大多数方法难以解决医学图像轮廓难以分割，对于未标记数据的特征探索不足等问题。为克服上述问题，本文提出了一种基于对比学习的半监督医学图像分割框架-ConsMatch。我们设计了两个关键模块：MCR（Multi-View Contrastive Representation）模块，利用对比学习思想最大化同一图像在不同扰动下的特征相似度，同时最小化不同图像之间的冗余结构相似性；FCR（Feature-level Consistency Regularization）模块，通过最小化不同增强视图下的结构相似矩阵分布差异，引导模型学习具有稳定结构表达的特征。该方法引入特征空间的结构约束，通过多视图对比表示学习和结构一致性正则化，从多个维度强化模型对未标记数据的学习能力。我们在ACDC数据集以及LA数据集进行广泛实验,均取得较好结果。我们的代码在https://github.com/magic-fortune/ConsMatch中可以找到。"
    },
    {
      "id": "soft2022Flink",
      "title": "面向Flink迭代作业的动态资源分配策略",
      "authors": "岳晓飞, 史岚, 赵宇海*, 季航旭，王国仁",
      "year": 2022,
      "venue": "软件学报",
      "ccf": "A",
      "core": "N",
      "thcpl": "N",
      "type": "journal",
      "accepted": true,
      "ncsCategory": "NONE",
      "sciZone": "NONE",
      "fields": [
        "其他"
      ],
      "researchDirections": [
        "大数据系统优化"
      ],
      "link": "",
      "abstract": "针对Flink迭代作业静态资源分配低效问题，提出基于运行时间预测的动态资源分配策略RABORP，通过预测超步运行时间并动态调整资源，实现最小资源满足SLO约束。"
    },
    {
      "id": "TCAD2024QuST",
      "title": "QuST: Optimizing Quantum Neural Network against Spatial and Temporal Noise Biases",
      "authors": "Tingting Li, Liqiang Lu*, Ziming Zhao, Ziqi Tan, Siwei Tan, Jianwei Yin*",
      "year": 2024,
      "venue": "IEEE Transactions on Computer-Aided Design of Integrated Circuits and Systems (TCAD)",
      "ccf": "A",
      "core": "N",
      "thcpl": "N",
      "type": "journal",
      "accepted": true,
      "ncsCategory": "NONE",
      "sciZone": "SCI1",
      "fields": [
        "计算机体系结构/并行与分布计算/存储系统",
        "人工智能"
      ],
      "researchDirections": [
        "量子神经网络"
      ],
      "link": "https://ieeexplore.ieee.org/abstract/document/10701050/",
      "abstract": "本文针对量子神经网络在噪声环境下性能下降及频繁重训练成本高的问题，提出了一种一次训练即可适应动态噪声变化的鲁棒训练框架 QuST。该方法旨在同时应对不同量子设备之间的空间噪声差异以及同一设备随时间变化的时间噪声偏移，从而在不断变化的噪声条件下保持模型精度。具体而言，QuST 首先提出电路序列正确性（CSC）指标来刻画噪声环境中的电路可靠性，并将其作为训练权重融入损失函数，同时利用 KL 散度对齐有噪声与无噪声推理结果，以提升模型抗噪能力。进一步地，QuST 通过多尺度噪声感知训练增强模型在不同噪声强度下的鲁棒性。基于 MNIST、FashionMNIST、190 天历史噪声模拟以及 7 台真实 IBMQ 量子计算机的实验结果表明，QuST 在时间维度和空间维度上均显著提升了模型准确率，并能够在无需重训练的情况下持续保持较高性能。"
    },
    {
      "id": "TCAD2024TPEDet",
      "title": "TPE-Det: A Tamper-Proof External Detector via Hardware Traces Analysis against IoT Malware",
      "authors": "Ziming Zhao, Zhaoxuan Li, Tingting Li, Fan Zhang*",
      "year": 2024,
      "venue": "IEEE Transactions on Computer-Aided Design of Integrated Circuits and Systems (TCAD)",
      "ccf": "A",
      "core": "N",
      "thcpl": "N",
      "type": "journal",
      "accepted": true,
      "ncsCategory": "NONE",
      "sciZone": "SCI1",
      "fields": [
        "网络与信息安全",
        "计算机体系结构/并行与分布计算/存储系统"
      ],
      "researchDirections": [
        "网络安全",
        "端网融合"
      ],
      "link": "https://ieeexplore.ieee.org/abstract/document/10745786/",
      "abstract": "本文针对物联网设备中恶意软件检测面临的监控易被篡改和日志数据量过大的问题，提出了一种基于侧信道的外部监测方案 TPE-Det。与依赖系统调用、系统日志或硬件性能计数器的传统方法不同，TPE-Det 通过 SPI 总线提取芯片级运行痕迹，并设计日志恢复流程，以实现对设备行为的外部感知。该方法具有对抗者难以察觉且难以篡改的优势，同时恢复得到的日志主要聚焦于文件操作命令，相比完整系统日志更加轻量。基于这些恢复日志，本文进一步结合统计特征、序列特征和图特征，构建多种机器学习模型用于恶意软件识别。实验结果表明，TPE-Det 在保证较高检测准确率的同时，还具备良好的防篡改能力以及较低的时间和空间开销。"
    },
    {
      "id": "TDSC2023ERNN",
      "title": "ERNN: Error-Resilient RNN for Encrypted Traffic Detection towards Network-Induced Phenomena",
      "authors": "Ziming Zhao, Zhaoxuan Li, Jialun Jiang, Fengyuan Yu, Fan Zhang*, Congyuan Xu*, Xinjie Zhao, Rui Zhang, Shize Guo",
      "year": 2023,
      "venue": "IEEE Transactions on Dependable and Secure Computing (TDSC)",
      "ccf": "A",
      "core": "A",
      "thcpl": "N",
      "type": "journal",
      "accepted": true,
      "ncsCategory": "NONE",
      "sciZone": "SCI1",
      "fields": [
        "网络与信息安全",
        "计算机网络"
      ],
      "researchDirections": [
        "网络与算网融合"
      ],
      "link": "https://www.computer.org/csdl/journal/tq",
      "abstract": "ERNN 是一种面向网络诱发现象的鲁棒端到端 RNN 流量检测模型，通过引入 session gate，在训练中模拟丢包、重传、乱序等常见异常，并结合 Mealy 机动态调整这些现象的概率分布，从而提升真实网络环境下的检测稳健性。实验表明，ERNN 在 10 Gbps 数据平面、约 16% 异常报文序列条件下仍可识别 98.63% 的加密入侵流量，在多用户并发场景下对加密恶意流量的识别率超过 97%，整体准确率比现有最优方法提升约 4%，且具有更好的稳定性与可扩展性。"
    },
    {
      "id": "TDSC2023I2RNN",
      "title": "I2RNN: An Incremental and Interpretable Recurrent Neural Network for Encrypted Traffic Classification",
      "authors": "Zhuoxue Song, Ziming Zhao, Fan Zhang*, Gang Xiong, Guang Cheng, Xinjie Zhao, Shize Guo",
      "year": 2023,
      "venue": "IEEE Transactions on Dependable and Secure Computing (TDSC)",
      "ccf": "A",
      "core": "A",
      "thcpl": "N",
      "type": "journal",
      "accepted": true,
      "ncsCategory": "NONE",
      "sciZone": "SCI1",
      "fields": [
        "网络与信息安全",
        "人工智能"
      ],
      "researchDirections": [
        "网络与算网融合"
      ],
      "link": "https://www.computer.org/csdl/journal/tq",
      "abstract": "I²RNN 是一种面向加密流量分类的增量式可解释循环神经网络，通过新的序列传播过程提取具有局部鲁棒性的会话指纹，同时提供时间序列特征归因与类别间相似性刻画，从而兼顾分类性能与可解释性。相比需要整体重训练的传统方法，I²RNN 仅需为新增流量类别训练一组额外参数即可完成增量学习，实验表明其在流量分类、增量适应和解释稳定性、鲁棒性与有效性方面均表现突出。"
    },
    {
      "id": "TDSC2024MLTrafficShaping",
      "title": "Effective DDoS Mitigation via ML-Driven In-network Traffic Shaping",
      "authors": "Ziming Zhao, Zhuotao Liu, Huan Chen, Fan Zhang*, Zhuoxue Song, Zhaoxuan Li",
      "year": 2024,
      "venue": "IEEE Transactions on Dependable and Secure Computing (TDSC)",
      "ccf": "A",
      "core": "A",
      "thcpl": "N",
      "type": "journal",
      "accepted": true,
      "ncsCategory": "NONE",
      "sciZone": "SCI1",
      "fields": [
        "计算机网络",
        "网络与信息安全"
      ],
      "researchDirections": [
        "网络与算网融合"
      ],
      "link": "https://www.computer.org/csdl/journal/tq",
      "abstract": "DFNet 提出了一种新的 DDoS 防御范式，即“偏好驱动、网络内强制执行的流量整形”，核心目标不是持续追逐攻击特征，而是在未知攻击条件下优先保障受害者真正期望的流量被可靠转发。实验表明，DFNet 将受害者流量偏好编码进数据平面调度机制后，即使面对未见过的攻击，也能在 80 Gbps 上行、40 Gbps 瓶颈链路条件下转发 99.93% 的目标流量，同时额外转发开销低于 0.1%。"
    },
    {
      "id": "TDSC2024NotJustSumming",
      "title": "Not Just Summing: The Identifier Leakage of Private-Join-and-Compute and its Improvement",
      "authors": "Siqi Lu, Hanjie Dong, Zhaoxuan Li, Laurence T. Yang",
      "year": 2024,
      "venue": "IEEE Transactions on Dependable and Secure Computing",
      "ccf": "A",
      "core": "A",
      "thcpl": "A",
      "type": "journal",
      "accepted": true,
      "ncsCategory": "NONE",
      "sciZone": "SCI1",
      "fields": [
        "网络安全"
      ],
      "researchDirections": [
        "网络安全"
      ],
      "link": "https://doi.org/10.1109/TDSC.2024.3371569",
      "abstract": "针对隐私交集求和（Private Intersection-Sum, PIS）协议在诚实且好奇敌手模型下存在用户标识符泄露风险的问题，本文系统分析了 Google 开源 Private-Join-and-Compute 库中的安全缺陷，指出攻击者可通过构造特殊输入数据结构推断交集项，从而实施用户标识符窃取攻击。为解决该问题，本文基于差分隐私技术提出了一种改进的 PIS 协议，并对 Private-Join-and-Compute 开源库进行了优化。通过基于 Game 序列的形式化分析以及基于 Tamarin 工具的安全性证明，结果表明改进后的协议在几乎不引入明显额外开销的情况下，有效抵御了已发现的攻击，并提升了协议在实际应用场景中的安全性。"
    },
    {
      "id": "TIFS2023SAGE",
      "title": "SAGE: Steering the Adversarial Generation of Examples With Accelerations",
      "authors": "Ziming Zhao, Zhaoxuan Li, Fan Zhang, Ziqi Yang, Shuang Luo, Tingting Li, Rui Zhang, Kui Ren",
      "year": 2023,
      "venue": "IEEE Transactions on Information Forensics and Security (TIFS)",
      "ccf": "A",
      "core": "A*",
      "thcpl": "N",
      "type": "journal",
      "accepted": true,
      "ncsCategory": "NONE",
      "sciZone": "SCI1",
      "fields": [
        "网络与信息安全"
      ],
      "researchDirections": [
        "网络与算网融合"
      ],
      "link": "https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=10206",
      "abstract": "SAGE 是一个用于加速黑盒图像对抗样本生成的框架，通过 sLocator 优化初始点、sRudder 优化搜索过程，并结合显著图与边界框信息将扰动更高效地引导到最具攻击性的方向，从而显著降低查询开销。实验表明，SAGE 在 MNIST、CIFAR10、ImageNet 及真实世界 Google Cloud Vision API 上均有效，可将查询次数减少 20% 以上，并将攻击成功率提升至 95%–100%，即使面对经过对抗训练的鲁棒模型仍表现出良好的灵活性、稳定性和低开销。"
    },
    {
      "id": "TIFS2025CGIFuzz",
      "title": "CGIFuzz: Enabling Gray-Box Fuzzing for Web CGI of IoT Devices",
      "authors": "Cheng Shi, Jiongchi Yu, Ziming Zhao*, Jiongyi Chen, Fan Zhang*",
      "year": 2025,
      "venue": "IEEE Transactions on Information Forensics and Security (TIFS)",
      "ccf": "A",
      "core": "A*",
      "thcpl": "N",
      "type": "journal",
      "accepted": true,
      "ncsCategory": "NONE",
      "sciZone": "SCI1",
      "fields": [
        "网络与信息安全",
        "软件工程/系统软件/程序设计语言"
      ],
      "researchDirections": [
        "IoT安全"
      ],
      "link": "https://ieeexplore.ieee.org/abstract/document/11199890/",
      "abstract": "CGIFuzz 是首个面向 Linux 物联网设备中 CGI 程序的灰盒模糊测试框架，旨在弥补现有 IoT 漏洞挖掘方法对 CGI 组件关注不足的问题。该方法首先通过 Relay-Pass Instrumentation 实现 CGI 程序的动态插桩，从而支持更有效的执行反馈收集。随后，CGIFuzz 利用大语言模型辅助生成高质量的测试输入，并结合程序运行过程中的关键特征设计漏洞检测预言机，用于识别命令注入和内存破坏等安全问题。实验结果表明，CGIFuzz 在 10 款主流 IoT 设备上相比现有先进模糊测试工具具有更强的路径覆盖和漏洞发现能力。最终，该框架共发现 69 个漏洞，其中包括 13 个此前未知漏洞，并已有 9 个获得 CVE 编号。",
      "imageUrl": "figures/TIFS2025CGIFuzz.png"
    },
    {
      "id": "TIFS2025TDQDF",
      "title": "Task-Driven Device Fingerprinting for Quantum Cloud Platforms via Modeling QNN Outcomes under Noise",
      "authors": "Tingting Li, Ziming Zhao, Jianwei Yin",
      "year": 2025,
      "venue": "IEEE Transactions on Information Forensics and Security (TIFS)",
      "ccf": "A",
      "core": "N",
      "thcpl": "N",
      "type": "journal",
      "accepted": true,
      "ncsCategory": "NONE",
      "sciZone": "SCI1",
      "fields": [
        "网络与信息安全"
      ],
      "researchDirections": [
        "量子安全"
      ],
      "link": "https://ieeexplore.ieee.org/abstract/document/11202567/",
      "abstract": "该工作提出了一种基于量子任务输出的任务驱动量子设备指纹识别方法 TD-QDF，用于从含噪量子计算结果中提取设备特征。与以往依赖硬件细节或噪声先验信息的方法不同，TD-QDF 仅利用量子任务输出即可完成设备识别，因此具有更强的实用性和可部署性。作者在 10 台 IBM 量子计算机上基于 6 种量子神经网络线路进行了大规模实验，并进一步扩展到 4 类经典量子算法和 3 个 127 比特处理器，以验证方法的通用性与可扩展性。实验结果表明，该方法在 3 分类、7 分类和 10 分类设备识别任务中分别取得了较高的准确率，表现出较强的区分能力。总体来看，TD-QDF 为量子云服务中的设备问责、异常检测与安全分析提供了一种新的技术路径。",
      "imageUrl": "figures/TIFS2025TDQDF.png"
    },
    {
      "id": "TIFS2026RFC",
      "title": "Assessing and Improving DNN Robustness against Adversarial Examples from the Perspective of Fully Connected Layers",
      "authors": "Ziming Zhao#, Zhaoxuan Li#, Tingting Li*, Fan Zhang*",
      "year": 2026,
      "venue": "IEEE Transactions on Information Forensics and Security (TIFS)",
      "ccf": "A",
      "core": "N",
      "thcpl": "N",
      "type": "journal",
      "accepted": true,
      "ncsCategory": "NONE",
      "sciZone": "SCI1",
      "fields": [
        "网络与信息安全"
      ],
      "researchDirections": [
        "AI安全"
      ],
      "link": "",
      "abstract": "该工作提出了一种可插拔的冗余全连接层，用于提升深度神经网络在对抗样本攻击下的鲁棒性。与现有防御方法相比，该方法更强调对多种攻击的适应能力，同时尽量减少对正常样本分类精度和训练开销的影响。为此，作者设计了专门的损失函数，利用余弦相似度增强多个全连接分支之间的差异性和多样性，从而提高模型抵御攻击的能力。基于两个常用数据集和 12 种典型白盒、黑盒攻击的实验结果表明，该方法在几乎不增加训练成本的情况下，能够显著提升防御效果，并基本保持干净样本上的分类性能。"
    },
    {
      "id": "TJSC2024TimeLink",
      "title": "TimeLink: Enabling Dynamic Runtime Prediction for Flink Iterative Jobs",
      "authors": "Xiaofei Yue, Qingyang Ding*, Jianming Zhu, Yanbing Ding",
      "year": 2024,
      "venue": "The Journal of Supercomputing",
      "ccf": "C",
      "core": "N",
      "thcpl": "N",
      "type": "journal",
      "accepted": true,
      "ncsCategory": "NONE",
      "sciZone": "SCI2",
      "fields": [
        "计算机体系结构/并行与分布计算/存储系统"
      ],
      "researchDirections": [
        "大数据系统优化"
      ],
      "link": "https://link.springer.com/article/10.1007/s11227-024-06085-x",
      "abstract": "针对Flink迭代作业运行时间预测问题，提出TimeLink动态预测方法，通过融合离线与在线特征并进行相似作业匹配，实现实时预测。实验表明误差低至5.91%，显著优于现有方法。"
    },
    {
      "id": "TMC2023CMD",
      "title": "CMD: Co-Analyzed IoT Malware Detection and Forensics via Network and Hardware Domains",
      "authors": "Ziming Zhao, Zhaoxuan Li, Jiongchi Yu, Fan Zhang*, Xiaofei Xie, Haitao Xu, Binbin Chen",
      "year": 2023,
      "venue": "IEEE Transactions on Mobile Computing (TMC)",
      "ccf": "A",
      "core": "N",
      "thcpl": "N",
      "type": "journal",
      "accepted": true,
      "ncsCategory": "NONE",
      "sciZone": "SCI1",
      "fields": [
        "网络与信息安全",
        "计算机网络"
      ],
      "researchDirections": [
        "端网融合",
        "网络安全",
        "系统取证"
      ],
      "link": "https://ieeexplore.ieee.org/abstract/document/10237298/",
      "abstract": "CMD 是一种结合硬件域与网络域的物联网恶意软件检测与取证系统，旨在弥补现有单一视角方法难以完整刻画恶意软件多阶段行为的问题。其网络侧通过定制化胶囊神经网络建模跨源流量的上下文语义，提升对复杂恶意通信行为的识别能力；硬件侧则利用芯片上的 SPI 信号，以旁路方式恢复文件操作过程，实现对设备行为的外部取证。相比传统主机侧方法，这种设计更不易被攻击者感知或篡改，同时不会给 IoT 设备带来明显时延和计算负担。实验结果表明，CMD 在检测性能上优于多种现有方法，并且即使面对自适应攻击者，也能较高精度地恢复关键操作日志。总体来看，CMD 为物联网恶意软件的检测、溯源与取证提供了一种高效且实用的联合分析方案。"
    },
    {
      "id": "TON2024FOSS",
      "title": "FOSS: Towards Fine-Grained Unknown Class Detection against the Open-Set Attack Spectrum with Variable Legitimate Traffic",
      "authors": "Ziming Zhao, Zhaoxuan Li, Xiaofei Xie, Jiongchi Yu, Fan Zhang, Rui Zhang, Binbin Chen, Xiangyang Luo, Ming Hu, Wenrui Ma",
      "year": 2024,
      "venue": "IEEE/ACM Transactions on Networking (TON)",
      "ccf": "A",
      "core": "A*",
      "thcpl": "N",
      "type": "journal",
      "accepted": true,
      "ncsCategory": "NONE",
      "sciZone": "SCI1",
      "fields": [
        "计算机网络",
        "网络与信息安全"
      ],
      "researchDirections": [
        "网络与算网融合"
      ],
      "link": "https://ieeexplore.ieee.org/abstract/document/10638516",
      "abstract": "FOSS 是一种面向异常检测的网络入侵检测方法，旨在解决未知攻击细粒度识别和合法流量持续变化带来的适应性问题。该方法以孤立树为核心构建模型，通过划分数据分布空间并结合隔离思想，更有效地区分正常流量与异常行为。与此同时，FOSS 还强调增量式模型更新，使系统能够随着网络环境变化不断调整和演进。基于公开网络入侵数据集和与运营商合作的真实部署实验，结果表明 FOSS 在检测性能上优于现有先进方法。尤其在 DDoS 等此前未见攻击的细粒度识别方面，FOSS 展现出较强的实用价值。",
      "imageUrl": "figures/TON2024FOSS.png"
    },
    {
      "id": "ToN2025Exploiting",
      "title": "Exploiting Wide-Area Resource Elasticity with Fine-Grained Orchestration for Serverless Analytics",
      "authors": "Xiaofei Yue, Song Yang*, Liehuang Zhu, Stojan Trajanovski, Fan Li, Xiaoming Fu",
      "year": 2025,
      "venue": "IEEE/ACM Transactions on Networking (ToN)",
      "ccf": "A",
      "core": "N",
      "thcpl": "N",
      "type": "journal",
      "accepted": true,
      "ncsCategory": "NONE",
      "sciZone": "SCI1",
      "fields": [
        "计算机网络"
      ],
      "researchDirections": [
        "服务器无感知计算",
        "算力网络"
      ],
      "link": "https://ieeexplore.ieee.org/abstract/document/10742121",
      "abstract": "针对广域环境下服务器无感知分析中粗粒度调度低效问题，提出函数粒度资源弹性利用框架Demeter，通过多智能体强化学习联合优化放置与资源分配，并结合拥塞控制机制。实验表明成本降低最高46.6%，SLO违约率降至15%以下。"
    },
    {
      "id": "TON2025SOFA",
      "title": "SOFA: Service-Oriented Fine-Grained Attack Traffic Detection with Meta Learning",
      "authors": "Peng Fang, Feiyang Huang, Ziming Zhao*, Fan Zhang*, Wenrui Ma",
      "year": 2025,
      "venue": "IEEE/ACM Transactions on Networking (TON)",
      "ccf": "A",
      "core": "N",
      "thcpl": "N",
      "type": "journal",
      "accepted": true,
      "ncsCategory": "NONE",
      "sciZone": "SCI1",
      "fields": [
        "计算机网络",
        "网络与信息安全"
      ],
      "researchDirections": [
        "网络与算网融合"
      ],
      "link": "https://ieeexplore.ieee.org/abstract/document/11316161",
      "abstract": "SOFA 是一种面向企业网络的两阶段流量检测框架，旨在提升对已知与未知网络攻击的细粒度识别能力。该方法首先从服务类型出发，对不同业务流量进行区分，并为每类正常流量分别训练独立的一类模型，从而更准确地发现服务相关的异常行为。随后，SOFA 在第二阶段引入基于 ResNet 的孪生网络，利用元学习构建稳健的度量空间，以缓解恶意样本稀缺带来的检测困难。实验结果表明，SOFA 在四个常用网络流量数据集上均取得了优于现有方法的性能，尤其在细粒度攻击检测方面表现突出。总体来看，SOFA 为动态且样本不平衡的企业网络环境提供了一种更具适应性的入侵检测方案。"
    },
    {
      "id": "TON2025TNT",
      "title": "TNT: A Large-Scale P2P Botnet Detection Framework via Communication Topology and Network Traffic",
      "authors": "Ziming Zhao, Zhaoxuan Li, Tingting Li, Zhijian Xu, Yu Li, Qiang Xu*, Fan Zhang*",
      "year": 2025,
      "venue": "IEEE/ACM Transactions on Networking (TON)",
      "ccf": "A",
      "core": "A*",
      "thcpl": "N",
      "type": "journal",
      "accepted": true,
      "ncsCategory": "NONE",
      "sciZone": "SCI1",
      "fields": [
        "计算机网络",
        "网络与信息安全"
      ],
      "researchDirections": [
        "网络安全",
        "僵尸网络"
      ],
      "link": "https://ieeexplore.ieee.org/abstract/document/11168124",
      "abstract": "TNT 是一种面向大规模 P2P 僵尸网络的检测框架，旨在解决传统拓扑识别方法难以区分、流量分析方法又容易受到海量背景流量干扰的问题。该框架结合通信拓扑与网络流量两类信息，由 tScouter、tCommander 和 tPatroller 三个紧密协作的模块分别完成拓扑刻画、节点检查规划和节点流量分析。通过有计划地只检测部分节点流量，TNT 在检测精度与系统开销之间实现了更好的平衡。实验结果表明，在包含 6 类僵尸网络和 7 类正常 P2P 流量的多组场景中，TNT 能够在较少节点检查条件下实现接近 99.9% 的检测准确率。除此之外，论文还从异构节点、精度损失和归因矩阵等角度进行了扩展分析，体现了该方法较强的可解释性与实用价值。"
    },
    {
      "id": "TPDS2026HyFaaS",
      "title": "HyFaaS: Accelerating Serverless Workflows by Unleashing Hybrid Resource Elasticity",
      "authors": "Xiaofei Yue, Song Yang*, Fan Li, Liehuang Zhu, Xu Wang, Zhen Feng, Fernando A. Kuipers",
      "year": 2026,
      "venue": "IEEE TPDS",
      "ccf": "A",
      "core": "N",
      "thcpl": "N",
      "type": "journal",
      "accepted": true,
      "ncsCategory": "NONE",
      "sciZone": "SCI1",
      "fields": [
        "计算机体系结构/并行与分布计算/存储系统"
      ],
      "researchDirections": [
        "服务器无感知计算",
        "算力网络"
      ],
      "link": "https://ieeexplore.ieee.org/abstract/document/11242003",
      "abstract": "针对服务器无感知ETL工作流中计算与通信资源需求异构问题，提出HyFaaS通算分离编排框架，通过HyDAG建模、灰盒性能建模与两级图分区实现优化部署，并结合运行时调优减少资源浪费。实验显示延迟降低32.7%–50.4%，成本提升1.37倍效率。"
    },
    {
      "id": "TSE2023VulHunter",
      "title": "VulHunter: Hunting Vulnerable Smart Contracts at EVM Bytecode-level via Multiple Instance Learning",
      "authors": "Zhaoxuan Li, Siqi Lu, Rui Zhang, Ziming Zhao, Rujin Liang, Rui Xue, Wenhao Li, Fan Zhang, Sheng Gao",
      "year": 2023,
      "venue": "IEEE Transactions on Software Engineering",
      "ccf": "A",
      "core": "A*",
      "thcpl": "A",
      "type": "journal",
      "accepted": true,
      "ncsCategory": "NONE",
      "sciZone": "SCI1",
      "fields": [
        "软件工程",
        "网络安全",
        "人工智能"
      ],
      "researchDirections": [
        "AI安全",
        "机器学习"
      ],
      "link": "https://doi.org/10.1109/TSE.2023.3317209",
      "abstract": "针对智能合约字节码级漏洞分析中存在的分析需求强、人工规则制定困难以及现有人工智能方法检测结果难以直接利用等问题，本文提出了面向 EVM 字节码的智能合约漏洞检测方法 VulHunter。该方法利用多示例学习机制缓解细粒度执行路径标签缺失条件下模型训练困难的问题，并结合符号执行对检测结果进行可达性验证，从而自动消除部分误报。实验结果表明，VulHunter 能够以更高的准确性、更高的效率和更强的鲁棒性完成合约漏洞检测，达到 90.04% 的准确率，在 121KB 合约上的平均分析时间为 4.4 秒，分析失败率为 0%，并实现了从漏洞检测、漏洞代码定位到结果验证的全流程自动化执行。"
    },
    {
      "id": "WISA2021Online",
      "title": "Online Runtime Prediction Method for Distributed Iterative Jobs",
      "authors": "Xiaofei Yue, Lan Shi, Yuhai Zhao*, Hangxu Ji, Guoren Wang",
      "year": 2021,
      "venue": "WISA",
      "ccf": "C",
      "core": "C",
      "thcpl": "N",
      "type": "conference",
      "accepted": true,
      "ncsCategory": "NONE",
      "sciZone": "NONE",
      "fields": [
        "数据库/数据挖掘/内容检索"
      ],
      "researchDirections": [
        "大数据系统优化"
      ],
      "link": "https://link.springer.com/chapter/10.1007/978-3-030-87571-8_14",
      "abstract": "针对分布式迭代作业运行时间预测问题，提出基于在线机器学习的多阶段预测方法，通过迭代建模与序列学习显著提升预测精度，在典型场景中提升超过15%。"
    },
    {
      "id": "WWW2024RFCL",
      "title": "Improving Model Robustness against Adversarial Examples with Redundant Fully Connected Layer",
      "authors": "Ziming Zhao, Zhaoxuan Li, Tingting Li, Jiongchi Yu, Fan Zhang*, Rui Zhang",
      "year": 2024,
      "venue": "WWW Short",
      "ccf": "N",
      "core": "N",
      "thcpl": "N",
      "type": "conference",
      "accepted": true,
      "ncsCategory": "NONE",
      "sciZone": "NONE",
      "fields": [
        "交叉/综合/新兴"
      ],
      "researchDirections": [
        "AI安全",
        "机器学习"
      ],
      "link": "https://doi.org/10.1145/3589335.3651524",
      "abstract": "针对现有对抗样本防御技术在跨攻击场景适应性、干净样本识别准确性、模型鲁棒性与训练效率之间难以兼顾的问题，本文提出一种冗余全连接层方法。该方法通过设计多个相互正交的全连接层，并将其与现有检测模型结合，缓解原始模型在对抗扰动下的性能退化，从而提升模型对对抗样本的鲁棒性。实验结果表明，该方法在 12 种白盒和黑盒攻击设置下均可实现超过 20% 的准确率提升，同时基本不影响模型对干净样本的识别性能。"
    },
    {
      "id": "WWW2024TDQDF",
      "title": "Task-Driven Quantum Device Fingerprint Identification via Modeling QNN Outcome Shift Induced by Quantum Noise",
      "authors": "Tingting Li, Ziming Zhao, Jianwei Yin*",
      "year": 2024,
      "venue": "WWW Short",
      "ccf": "N",
      "core": "N",
      "thcpl": "N",
      "type": "conference",
      "accepted": true,
      "ncsCategory": "NONE",
      "sciZone": "NONE",
      "fields": [
        "交叉/综合/新兴"
      ],
      "researchDirections": [
        "量子安全"
      ],
      "link": "https://dl.acm.org/doi/abs/10.1145/3589335.3651567",
      "abstract": "本文关注云端量子计算服务中的设备指纹识别与安全问题。尽管云量子计算为用户提供了便捷的资源访问方式，但也带来了隐私泄露、恶意程序注入等潜在风险，而量子设备指纹识别可能正是此类攻击的前置步骤。为此，本文提出了一种基于量子神经网络任务结果的任务驱动量子设备指纹识别方法 TD-QDF。与以往依赖硬件细节的方案不同，TD-QDF 无需获取底层硬件信息，因此在实际场景中具有更高的可用性。基于 10 台真实 IBM 量子计算机和 3 类 QNN 电路的大量实验表明，该方法能够有效区分不同量子设备，并为提升量子计算系统的安全性与可追责性提供了新的思路。"
    },
    {
      "id": "WWW2024Trident",
      "title": "Trident: A Universal Framework for Fine-Grained and Class-Incremental Unknown Traffic Detection",
      "authors": "Ziming Zhao, Zhaoxuan Li, Zhuoxue Song, Wenhao Li, Fan Zhang",
      "year": 2024,
      "venue": "WWW",
      "ccf": "A",
      "core": "A*",
      "thcpl": "A",
      "type": "conference",
      "accepted": true,
      "ncsCategory": "NONE",
      "sciZone": "NONE",
      "fields": [
        "计算机网络",
        "人工智能",
        "交叉/新兴"
      ],
      "researchDirections": [
        "网络安全",
        "加密流量",
        "未知检测"
      ],
      "link": "https://dl.acm.org/doi/abs/10.1145/3589334.3645407",
      "abstract": "Trident 是一种面向未知加密攻击流量检测的通用框架，旨在解决现有异常检测方法在细粒度新型攻击识别和增量更新适应性方面的不足。其核心思想是将已知类与新类识别问题解耦，转化为多个彼此独立的一类学习任务，从而提升对未知攻击的检测能力。基于这一思路，Trident 设计了 tSieve、tScissors 和 tMagnifier 三个主要模块，分别用于流量表征、异常阈值确定和聚类分析，并支持灵活配置。实验结果表明，在四个常用网络流量数据集上，Trident 显著优于 16 种现有先进方法。进一步的概念漂移、开销和参数分析也证明了该框架在稳定性、可扩展性和实用性方面的优势。"
    },
    {
      "id": "WWW2026BitFlip",
      "title": "Has the Two-Decade-Old Prophecy Come True? Artificial Bad Intelligence Triggered by Merely a Single-Bit Flip in Large Language Models",
      "authors": "Yu Yan, Siqi Lu, Yang Gao, Zhaoxuan Li, Ziming Zhao, Qingjun Yuan, Yongjuan Wang",
      "year": 2026,
      "venue": "WWW",
      "ccf": "A",
      "core": "A*",
      "thcpl": "A",
      "type": "conference",
      "accepted": true,
      "ncsCategory": "NONE",
      "sciZone": "NONE",
      "fields": [
        "交叉/综合/新兴"
      ],
      "researchDirections": [
        "大模型安全",
        "比特翻转",
        "网络安全"
      ],
      "link": "",
      "abstract": "本论文系统研究了以 .gguf 单文件格式部署的大语言模型在硬件层面面临的 单比特翻转攻击 风险，并首次验证：只需翻转权重文件中的一个关键比特，就可能引发语义层面的严重异常。作者发现，这类攻击可导致三种典型后果：模型输出事实性错误、模型能力灾难性退化，以及生成有害甚至极端恶意内容。为高效定位海量参数中的脆弱比特，论文提出了基于信息论的权重敏感性熵模型和概率启发式扫描框架 BitSifter。此外，作者还设计了一个端到端远程攻击链，表明在仅具备普通网络连接、无需昂贵设备和复杂提示工程的条件下，也能在现实 Web 服务部署场景中较快触发成功攻击。该研究揭示了 LLM 在底层硬件攻击面上的普遍安全隐患，说明单一比特扰动就可能使在线模型产生自然流畅却难以察觉的错误回复，甚至输出极端危险内容。"
    },
    {
      "id": "WWW2026Carbon",
      "title": "Fair and Carbon-Aware LLM Routing for Web Services",
      "authors": "Tingting Li, Ziming Zhao*, Zhaoxuan Li*, Xiaofei Yue, Jiongchi Yu",
      "year": 2026,
      "venue": "WWW",
      "ccf": "A",
      "core": "A*",
      "thcpl": "A",
      "type": "conference",
      "accepted": true,
      "ncsCategory": "NONE",
      "sciZone": "NONE",
      "fields": [
        "交叉/综合/新兴"
      ],
      "researchDirections": [
        "碳感知算网"
      ],
      "link": "",
      "abstract": "该工作提出了一种面向 LLM 网络服务的碳感知与公平性感知路由框架，旨在同时优化能耗、输出质量和群体公平性。方法通过轻量级复杂度与风险预测器，为每个请求估计满足质量与安全约束所需的最小模型规模，并结合实时碳强度信号，将请求分配到合适的模型与硬件组合上。作者将这一过程建模为带约束的优化问题，以平衡潜在质量损失、能源成本以及不同地区和群体之间的公平性要求。与此同时，论文还设计了基于真实 Web 工作负载轨迹的评估方法，从质量、时延和碳排放等多个维度进行分析。实验结果表明，该框架能够在保证服务质量基本可接受的前提下有效降低能耗，并避免弱势群体持续获得较低质量服务的问题。"
    },
    {
      "id": "WWW2026HeteroSim",
      "title": "HeteroSim: Towards High-Fidelity Heterogeneous LLM Training Simulation on GPUs",
      "authors": "Xiaofei Yue#, Fangming Zhao#, Fulun Ye, Jiongchi Yu, Zhaoxuan Li, Ziming Zhao*, Tingting Li*, Jianwei Yin*",
      "year": 2026,
      "venue": "ACM WWW",
      "ccf": "A",
      "core": "A*",
      "thcpl": "A",
      "type": "conference",
      "accepted": true,
      "ncsCategory": "NONE",
      "sciZone": "NONE",
      "fields": [
        "交叉/综合/新兴"
      ],
      "researchDirections": [
        "大模型训练模拟"
      ],
      "link": "",
      "abstract": "针对异构集群下大语言模型训练系统设计空间巨大、难以高效评估的问题，提出HeteroSim高保真异构LLM训练仿真框架。该方法通过可插拔IR编译器显式刻画并行策略，并结合异构感知的计算规划器与类NCCL的集合通信规划器，在多种异构强度下实现接近真实训练行为的高精度模拟。实验表明，HeteroSim可在分钟级开销下将模拟误差保持在5%以下。"
    },
    {
      "id": "WWW2026RegimeGuard",
      "title": "RegimeGuard: Continual Learning Queue Scheduling for Socially Critical Web Services",
      "authors": "Zhipeng Liu, Ziming Zhao*, Fan Zhang*",
      "year": 2026,
      "venue": "WWW",
      "ccf": "A",
      "core": "A*",
      "thcpl": "A",
      "type": "conference",
      "accepted": true,
      "ncsCategory": "NONE",
      "sciZone": "NONE",
      "fields": [
        "交叉/综合/新兴"
      ],
      "researchDirections": [
        "模型调度",
        "服务质量",
        "可编程交换机"
      ],
      "link": "",
      "abstract": "本论文提出了 RegimeGuard，一种面向可编程交换机队列调度的持续学习框架，旨在提升在线心理咨询、危机热线、远程医疗等社会关键型 Web 服务在网络拥塞下的可靠性。其核心思路是在数据平面提供少量可解释的队列优先级和主动队列管理（AQM）阈值，并由交换机外控制器针对正常期与突发期等反复出现的负载环境持续学习调度策略。为避免在环境切换中遗忘已有有效策略，RegimeGuard结合了经验回放、参数正则化和轻量级适配器等方法，以缓解灾难性遗忘问题。作者在 BMv2 软件交换机上实现了该系统，并通过包含后台流量与社会关键会话的多租户追踪驱动工作负载进行评估。结果表明，相比静态配置、多配置基线和朴素在线学习方法，RegimeGuard能够更有效地降低关键业务的尾时延和 SLO 违约率，并在满足关键目标时提升后台流量吞吐。"
    }
  ],
  "ccfFields": [
    "计算机体系结构/并行与分布计算/存储系统",
    "计算机网络",
    "网络与信息安全",
    "软件工程/系统软件/程序设计语言",
    "数据库/数据挖掘/内容检索",
    "计算机图形学与多媒体",
    "人工智能",
    "交叉/综合/新兴",
    "交叉/新兴",
    "其他",
    "医学图像分割",
    "半监督学习",
    "网络安全",
    "软件工程"
  ],
  "researchDirections": [
    "网络与算网融合",
    "大模型推理与训练",
    "量子智能",
    "医学智能",
    "AI安全",
    "IoT安全",
    "云计算与云服务器",
    "代码修复",
    "僵尸网络",
    "入侵检测",
    "加密流量",
    "可编程交换机",
    "大数据系统优化",
    "大模型",
    "大模型 for 安全",
    "大模型多智能体",
    "大模型安全",
    "大模型训练模拟",
    "实证研究",
    "文生图",
    "服务器无感知计算",
    "服务质量",
    "未知检测",
    "机器学习",
    "模型推理",
    "模型调度",
    "比特翻转",
    "游戏测试",
    "碳感知算网",
    "端网融合",
    "符号执行",
    "算力网络",
    "系统取证",
    "网络安全",
    "网络流量",
    "软件测试",
    "软硬件部署",
    "量子EDA",
    "量子云平台",
    "量子安全",
    "量子数据集",
    "量子神经网络",
    "量子网络",
    "量子软工"
  ],
  "ncsCategories": [
    "NCS",
    "NCS_SUB"
  ],
  "sciZones": [
    "SCI1",
    "SCI2",
    "SCI3"
  ],
  "ccfFieldAbbr": {
    "计算机体系结构/并行与分布计算/存储系统": "体系结构",
    "计算机网络": "计算机网络",
    "网络与信息安全": "网络安全",
    "软件工程/系统软件/程序设计语言": "软件工程",
    "数据库/数据挖掘/内容检索": "数据库/挖掘",
    "计算机图形学与多媒体": "图形学/多媒体",
    "人工智能": "人工智能",
    "交叉/综合/新兴": "交叉/新兴",
    "交叉/新兴": "交叉/新兴",
    "其他": "其他",
    "医学图像分割": "医学图像分割",
    "半监督学习": "半监督学习",
    "网络安全": "网络安全",
    "软件工程": "软件工程"
  }
};
