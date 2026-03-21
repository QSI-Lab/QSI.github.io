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
      "fields": [
        "网络与信息安全"
      ],
      "researchDirections": [
        "网络与算网融合"
      ],
      "link": "https://wp.nyu.edu/acns2024/",
      "abstract": "面向 DDoS 攻击研究中表征困难、漏洞发现依赖人工的问题，提出 DDoSMiner 自动化框架，对攻击行为进行系统刻画，并结合分析流程自动挖掘潜在脆弱点，从而提升 DDoS 攻击分析、建模与防护研究的效率。"
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
      "authors": "Ziming Zhao, Zhaoxuan Li, Zhihao Zhou, Jiongchi Yu, Zhuoxue Song, Xiaofei Xie, Fan Zhang, Rui Zhang",
      "year": 2024,
      "venue": "Computers & Security",
      "ccf": "B",
      "core": "B",
      "thcpl": "N",
      "type": "journal",
      "accepted": true,
      "fields": [
        "网络与信息安全"
      ],
      "researchDirections": [
        "网络与算网融合"
      ],
      "link": "https://www.sciencedirect.com/journal/computers-and-security",
      "abstract": ""
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
      "fields": [
        "计算机网络",
        "网络与信息安全"
      ],
      "researchDirections": [
        "网络与算网融合"
      ],
      "link": "https://infocom2024.ieee-infocom.org/",
      "abstract": "提出RNN模型与可编程交换机协同设计的入侵检测系统RIDS，将部分检测逻辑卸载至数据平面，实现线速检测与高精度的有机结合，在INFOCOM 2024上展示了其在真实网络环境中的优越性能。"
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
      "fields": [
        "计算机图形学与多媒体",
        "交叉/综合/新兴"
      ],
      "researchDirections": [
        "量子智能"
      ],
      "link": "https://2024.acmmm.org/",
      "abstract": "提出Minerva框架，通过优化量子网络链路调度与保真度管理，提升高保真度多媒体内容在量子网络上的传输性能，为量子互联网在多媒体应用场景中的落地提供关键技术支撑。"
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
      "authors": "Tingting Li, Liqiang Lu, Ziming Zhao, Ziqi Tan, Siwei Tan, Jianwei Yin",
      "year": 2024,
      "venue": "IEEE Transactions on Computer-Aided Design of Integrated Circuits and Systems (TCAD)",
      "ccf": "A",
      "core": "A",
      "thcpl": "N",
      "type": "journal",
      "accepted": true,
      "fields": [
        "交叉/综合/新兴",
        "人工智能"
      ],
      "researchDirections": [
        "量子智能"
      ],
      "link": "https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=43",
      "abstract": "针对量子神经网络面临的空间噪声与时间噪声偏差问题，提出QuST优化框架，通过分析不同量子比特的噪声特性进行差异化训练策略设计，有效提升QNN在噪声量子设备上的推理精度与鲁棒性。"
    },
    {
      "id": "TCAD2024TPEDet",
      "title": "TPE-Det: A Tamper-Proof External Detector via Hardware Traces Analysis against IoT Malware",
      "authors": "Ziming Zhao, Zhaoxuan Li, Tingting Li, Fan Zhang*",
      "year": 2024,
      "venue": "IEEE Transactions on Computer-Aided Design of Integrated Circuits and Systems (TCAD)",
      "ccf": "A",
      "core": "A",
      "thcpl": "N",
      "type": "journal",
      "accepted": true,
      "fields": [
        "网络与信息安全",
        "计算机体系结构/并行与分布计算/存储系统"
      ],
      "researchDirections": [
        "网络与算网融合"
      ],
      "link": "https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=43",
      "abstract": "TPE-Det 是一种基于侧信道的 IoT 恶意软件检测方案，通过外部监控串行外设接口（SPI）总线提取片上轨迹并恢复轻量级操作日志，从而避免传统系统调用、系统日志等内部监控易被篡改且数据量过大的问题。实验结果表明，结合统计、序列和图特征的机器学习模型后，TPE-Det 具备较强的防篡改能力，并在检测准确率及时间、空间开销方面优于现有方法。"
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
      "fields": [
        "计算机网络",
        "人工智能",
        "交叉/综合/新兴"
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
      "fields": [
        "交叉/综合/新兴"
      ],
      "researchDirections": [
        "大模型训练模拟"
      ],
      "link": "",
      "abstract": "针对异构集群下大语言模型训练系统设计空间巨大、难以高效评估的问题，提出HeteroSim高保真异构LLM训练仿真框架。该方法通过可插拔IR编译器显式刻画并行策略，并结合异构感知的计算规划器与类NCCL的集合通信规划器，在多种异构强度下实现接近真实训练行为的高精度模拟。实验表明，HeteroSim可在分钟级开销下将模拟误差保持在5%以下。"
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
    "其他",
    "网络安全",
    "软件工程"
  ],
  "researchDirections": [
    "网络与算网融合",
    "大模型推理与训练",
    "量子智能",
    "AI安全",
    "IoT安全",
    "云计算与云服务器",
    "僵尸网络",
    "加密流量",
    "大数据系统优化",
    "大模型 for 安全",
    "大模型多智能体",
    "大模型训练模拟",
    "服务器无感知计算",
    "未知检测",
    "机器学习",
    "模型推理",
    "碳感知算网",
    "端网融合",
    "算力网络",
    "系统取证",
    "网络安全",
    "量子EDA",
    "量子云平台",
    "量子安全",
    "量子数据集",
    "量子网络",
    "量子软工"
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
    "其他": "其他",
    "网络安全": "网络安全",
    "软件工程": "软件工程"
  }
};
