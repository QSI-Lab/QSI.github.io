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
      "abstract": "处于噪声高的中尺度量子（NISQ）时代，量子计算机面临着固有噪声和有限量子比特相干性的重大挑战。准确的量子态保真度评估需要多次重复测量以获得统计结果。但由于量子噪声的动态和器件依赖性，确定最佳测量次数仍是一个未解问题。现有方法要么假设对噪声模型有先验知识，要么固有地采用固定的测量策略，这限制了其在实际部署场景中的适用性。本文介绍了AutoFid，一种自适应且能感知噪声的保真度测量框架，能够根据电路结构和硬件反馈自动确定所需测试次数。AutoFid 将量子电路建模为有向无环图，并通过随机游走估计结构复杂度，从而实现测量工作量的估算。它还集成了对转译感知的功能，如门控保真度、深度膨胀和串扰，以优化迭代预算。运行期间，AutoFid 动态采样保真度结果，并基于置信区间采用早期停止策略，减少重复测量，同时保持准确性保证。我们基于18项在真实IBMQ硬件平台上执行的量子基准测试来评估AutoFid。实验结果显示，AutoFid 相比固定射击和基于学习的基线，测量成本降低了超过 50%，同时保真度偏差始终低于 0.01。利用经典软件测试指标和消融研究进行额外分析，展示了其在广泛量子工作负载下的有效性、鲁棒性和适应性。"
    },
    {
      "id": "CompNet2024metaNet",
      "title": "metaNet: Interpretable Unknown Mobile Malware Identification with a Novel Meta-features Mining Algorithm",
      "authors": "Zhaoxuan Li, Ziming Zhao, Rui Zhang, Haoyang Lu, Wenhao Li, Fan Zhang, Siqi Lu, Rui Xue",
      "year": 2024,
      "venue": "Computer Networks",
      "ccf": "B",
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
      "link": "https://www.sciencedirect.com/journal/computer-networks",
      "abstract": ""
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
      "authors": "Liang Li, Feiyang Huang, Yuanhui He, Ziming Zhao, Zhuoxue Song, Tong Zhou, Zhenyuan Li, Fan Zhang",
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
      "abstract": ""
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
      "authors": "Ziming Zhao, Zhaoxuan Li, Tingting Li, Fan Zhang",
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
        "大模型推理与训练"
      ],
      "link": "https://dasfaa2025.github.io",
      "abstract": ""
    },
    {
      "id": "DATE2025MoECalibration",
      "title": "Empowering Quantum Error Traceability with MoE for Automatic Calibration",
      "authors": "Tingting Li, Ziming Zhao, Liqiang Lu, Siwei Tan, Jianwei Yin",
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
      "link": "https://www.date-conference.com/date-2025-call-papers",
      "abstract": ""
    },
    {
      "id": "ESE2022SmartFast",
      "title": "SmartFast: an accurate and robust formal analysis tool for Ethereum smart contracts",
      "authors": "Zhaoxuan Li, Siqi Lu, Rui Zhang, Rui Xue, Wenqiu Ma, Rujin Liang, Ziming Zhao, Sheng Gao",
      "year": 2022,
      "venue": "Empirical Software Engineering",
      "ccf": "B",
      "core": "A",
      "thcpl": "N",
      "type": "journal",
      "accepted": true,
      "fields": [
        "软件工程/系统软件/程序设计语言"
      ],
      "researchDirections": [
        "网络与算网融合"
      ],
      "link": "https://link.springer.com/journal/10664",
      "abstract": ""
    },
    {
      "id": "FSE2025CAShift",
      "title": "CAShift: Benchmarking Log-Based Cloud Attack Detection under Normality Shift",
      "authors": "Jiongchi Yu, Xiaofei Xie, Qiang Hu, Bowen Zhang, Ziming Zhao, Yun Lin, Lei Ma, Ruitao Feng, Frank Liauw",
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
        "网络与算网融合"
      ],
      "link": "https://conf.researchr.org/home/fse-2025",
      "abstract": ""
    },
    {
      "id": "ICWS2024Moirai",
      "title": "Moirai: Optimizing Quantum Serverless Function Orchestration via Device Allocation and Circuit Deployment",
      "authors": "Tingting Li, Ziming Zhao",
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
      "abstract": ""
    },
    {
      "id": "IJCAI2025QuantumServerlessDeployment",
      "title": "Empowering Quantum Serverless Circuit Deployment Optimization via Graph Contrastive Learning and Learning-to-Rank Co-designed Approaches",
      "authors": "Tingting Li, Ziming Zhao, Jianwei Yin",
      "year": 2025,
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
        "量子智能"
      ],
      "link": "https://2025.ijcai.org/",
      "abstract": "面向量子无服务器计算中的电路部署优化问题，提出图对比学习与Learning-to-Rank协同设计框架，实现量子电路到多后端设备的高效映射，降低量子资源消耗并提升部署效率。"
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
      "authors": "Tingting Li, Ziming Zhao, Jianwei Yin",
      "year": 2025,
      "venue": "INFOCOM",
      "ccf": "A",
      "core": "A*",
      "thcpl": "A",
      "type": "conference",
      "accepted": true,
      "fields": [
        "计算机网络",
        "交叉/综合/新兴"
      ],
      "researchDirections": [
        "量子智能"
      ],
      "link": "https://infocom2025.ieee-infocom.org/",
      "abstract": "面向真实量子网络中高保真度链路高效选择问题，提出Fortuna方法，基于在线学习与保真度预测模型实现链路选择决策的快速自适应，在INFOCOM 2025上验证了其在真实量子网络拓扑上的有效性。"
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
      "id": "JSAC2025VerifyAllTraffic",
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
      "abstract": ""
    },
    {
      "id": "MM2024Minerva",
      "title": "Minerva: Enhancing Quantum Network Performance for High-Fidelity Multimedia Transmission",
      "authors": "Tingting Li, Ziming Zhao, Jianwei Yin",
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
      "authors": "Ziming Zhao, Zhaoxuan Li, Tingting Li, Fan Zhang",
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
        "网络与算网融合"
      ],
      "link": "https://acmmm2025.org/",
      "abstract": ""
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
      "link": "",
      "abstract": "Chimera 是一种基于大语言模型的多智能体框架，旨在解决内部威胁检测中高质量、真实训练数据匮乏的问题。它将不同智能体建模为具有细粒度角色的企业员工，通过会议、双人互动和自主日程安排来模拟真实组织环境中的正常与恶意行为。基于从真实事件中抽象出的 15 类内部攻击，作者在三种典型的高敏感组织场景中构建了新的日志数据集 ChimeraLog。实验与人工评估表明，ChimeraLog 在多样性和真实性方面表现较好，而且相较现有数据集更具挑战性。进一步结果显示，在 ChimeraLog 上训练的内部威胁检测模型具有较强的泛化能力，说明基于大模型的多智能体仿真在推动该领域研究方面具有实际价值。"
    },
    {
      "id": "SECON2024P2PBotnetDetection",
      "title": "A Large-Scale P2P Botnet Detection Framework via Topology and Traffic Co-Verification",
      "authors": "Ziming Zhao, Zhaoxuan Li, Tingting Li, Fan Zhang",
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
      "abstract": ""
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
        "网络与算网融合"
      ],
      "link": "https://kdd2025.kdd.org/",
      "abstract": ""
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
      "authors": "Ziming Zhao, Zhaoxuan Li, Tingting Li, Fan Zhang",
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
      "abstract": ""
    },
    {
      "id": "TDSC2023ERNN",
      "title": "ERNN: Error-Resilient RNN for Encrypted Traffic Detection towards Network-Induced Phenomena",
      "authors": "Ziming Zhao, Zhaoxuan Li, Jialun Jiang, Fengyuan Yu, Fan Zhang, Congyuan Xu, Xinjie Zhao, Rui Zhang, Shize Guo",
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
      "abstract": "针对网络诱导现象（丢包、乱序、延迟抖动）导致加密流量检测性能下降的问题，提出ERNN框架，引入误差弹性机制增强RNN对不完整序列的适应性，在真实网络环境下保持高检测精度。"
    },
    {
      "id": "TDSC2023I2RNN",
      "title": "I2RNN: An Incremental and Interpretable Recurrent Neural Network for Encrypted Traffic Classification",
      "authors": "Zhuoxue Song, Ziming Zhao, Fan Zhang, Gang Xiong, Guang Cheng, Xinjie Zhao, Shize Guo",
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
      "abstract": ""
    },
    {
      "id": "TDSC2024MLTrafficShaping",
      "title": "Effective DDoS Mitigation via ML-Driven In-network Traffic Shaping",
      "authors": "Ziming Zhao, Zhuotao Liu, Huan Chen, Fan Zhang, Zhuoxue Song, Zhaoxuan Li",
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
      "abstract": ""
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
      "abstract": "针对对抗样本生成效率低的问题，提出SAGE框架，通过加速策略引导对抗样本生成方向，在多个基准数据集上显著提升生成速度与攻击成功率，同时保持对抗样本的不可感知性。"
    },
    {
      "id": "TIFS2025CGIFuzz",
      "title": "CGIFuzz: Enabling Gray-Box Fuzzing for Web CGI of IoT Devices",
      "authors": "Cheng Shi, Jiongchi Yu, Ziming Zhao, Jiongyi Chen, Fan Zhang",
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
        "网络与算网融合"
      ],
      "link": "https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=10206",
      "abstract": ""
    },
    {
      "id": "TIFS2025QuantumCloudFingerprinting",
      "title": "Task-Driven Device Fingerprinting for Quantum Cloud Platforms via Modeling QNN Outcomes under Noise",
      "authors": "Tingting Li, Ziming Zhao, Jianwei Yin",
      "year": 2025,
      "venue": "IEEE Transactions on Information Forensics and Security (TIFS)",
      "ccf": "A",
      "core": "A*",
      "thcpl": "N",
      "type": "journal",
      "accepted": true,
      "fields": [
        "交叉/综合/新兴",
        "网络与信息安全"
      ],
      "researchDirections": [
        "量子智能"
      ],
      "link": "https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=10206",
      "abstract": ""
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
      "authors": "Ziming Zhao, Zhaoxuan Li, Jiongchi Yu, Fan Zhang, Xiaofei Xie, Haitao Xu, Binbin Chen",
      "year": 2023,
      "venue": "IEEE Transactions on Mobile Computing (TMC)",
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
      "link": "https://www.computer.org/csdl/journal/tm",
      "abstract": ""
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
      "link": "https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=90",
      "abstract": ""
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
      "authors": "Peng Fang, Feiyang Huang, Ziming Zhao, Fan Zhang, Wenrui Ma",
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
        "网络与算网融合"
      ],
      "link": "https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=90",
      "abstract": ""
    },
    {
      "id": "TON2025TNT",
      "title": "TNT: A Large-Scale P2P Botnet Detection Framework via Communication Topology and Network Traffic",
      "authors": "Ziming Zhao, Zhaoxuan Li, Tingting Li, Zhijian Xu, Yu Li, Qiang Xu, Fan Zhang",
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
        "网络与算网融合"
      ],
      "link": "https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=90",
      "abstract": "提出TNT框架，联合建模P2P僵尸网络的通信拓扑与网络流量特征，基于图神经网络与流量特征融合实现大规模P2P僵尸网络的高精度检测，在真实骨干网数据集上显著优于现有方法。"
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
      "title": "VulHunter: Hunting Vulnerable Smart Contracts at EVM bytecode-level via Multiple Instance Learning",
      "authors": "Zhaoxuan Li, Siqi Lu, Rui Zhang, Ziming Zhao, Rujin Liang, Rui Xue, Wenhao Li, Fan Zhang, Sheng Gao",
      "year": 2023,
      "venue": "IEEE Transactions on Software Engineering (TSE)",
      "ccf": "A",
      "core": "A*",
      "thcpl": "N",
      "type": "journal",
      "accepted": true,
      "fields": [
        "软件工程/系统软件/程序设计语言"
      ],
      "researchDirections": [
        "网络与算网融合"
      ],
      "link": "https://www.computer.org/csdl/journal/ts",
      "abstract": ""
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
        "人工智能"
      ],
      "researchDirections": [
        "网络与算网融合"
      ],
      "link": "https://www2024.thewebconf.org/",
      "abstract": "提出Trident框架，面向开放网络环境中的未知流量检测难题，支持细粒度分类与类增量学习，通过三叉戟式特征解耦有效区分已知与未知流量类别，在WWW 2024上展示了跨场景泛化能力。"
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
    "其他"
  ],
  "researchDirections": [
    "网络与算网融合",
    "大模型推理与训练",
    "量子智能",
    "AI安全",
    "加密流量",
    "大数据系统优化",
    "大模型多智能体",
    "大模型训练模拟",
    "服务器无感知计算",
    "机器学习",
    "模型推理",
    "碳感知算网",
    "算力网络",
    "网络安全",
    "量子EDA",
    "量子数据集",
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
    "其他": "其他"
  }
};
