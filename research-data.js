/* Publication facts: Final_Resume, with existing public paper links and author order.
   PASA and ANO intentionally expose only "Preprint", not their submission venue. */
window.researchPapers = [
  {
    id: "officetown",
    year: 2026,
    status: "preprint",
    selected: true,
    firstAuthor: true,
    title:
      "OfficeTown: Generative Organizations for Evolving Agent Intelligence",
    authors: ["Hongchen Wei", "et al."],
    venue: "Preprint",
    note: "msra",
    keywords: "组织 环境 智能体 data synthesis professional work",
    links: { project: "https://officeintelligence.github.io/" },
  },
  {
    id: "docatlas",
    year: 2026,
    status: "published",
    selected: true,
    firstAuthor: true,
    title: "DocAtlas: Long-Document Understanding as Mutable-State Interaction",
    authors: [
      "Hongchen Wei",
      "Yuanzhe Wang",
      "Bei Liu",
      "Yifan Yang",
      "Qi Dai",
      "Kai Qiu",
      "Yunsheng Li",
      "Dongdong Chen",
      "Chong Luo",
      "Zhenzhong Chen",
      "Baining Guo",
    ],
    equalContributors: ["Hongchen Wei", "Yuanzhe Wang"],
    venue: "NeurIPS 2026",
    note: "msra",
    keywords: "文档 交互 记忆 强化学习 document memory RL",
    links: {
      paper: "https://arxiv.org/abs/2608.07527",
      project: "https://officeintelligence.github.io/docatlas/",
      code: "https://github.com/microsoft/DocAtlas-Harness",
    },
  },
  {
    id: "xl-docbench",
    year: 2026,
    status: "published",
    selected: true,
    firstAuthor: true,
    title:
      "XL-DocBench: Benchmarking Evidence-Grounded Extra-Long Document Understanding",
    authors: [
      "Hongchen Wei",
      "Yuanzhe Wang",
      "Bei Liu",
      "Yifan Yang",
      "Qi Dai",
      "Ruichun Ma",
      "Kai Qiu",
      "Yunsheng Li",
      "Dongdong Chen",
      "Chong Luo",
      "Zhenzhong Chen",
      "Baining Guo",
    ],
    equalContributors: ["Hongchen Wei", "Yuanzhe Wang"],
    venue: "NeurIPS 2026",
    note: "msra",
    keywords: "文档 证据 评测 benchmark evidence",
    links: {
      paper: "https://arxiv.org/abs/2608.00036v1",
      project: "https://officeintelligence.github.io/xl-docbench/",
      dataset: "https://huggingface.co/datasets/microsoft/XL-DocBench",
    },
  },
  {
    id: "pasa",
    year: 2026,
    status: "preprint",
    selected: true,
    firstAuthor: true,
    title:
      "PASA: Post-Merge Perception–Reasoning Asymmetry as a Self-Alignment Signal for MLLMs",
    authors: ["Hongchen Wei", "Zhenzhong Chen"],
    venue: "Preprint",
    keywords: "模型 合并 感知 推理 对齐 GRPO alignment merging",
    links: {},
  },
  {
    id: "ano",
    year: 2026,
    status: "preprint",
    selected: true,
    firstAuthor: true,
    title:
      "Layer-Specialized Model Merging for Training-Free Cross-Modal Reasoning Transfer (ANO)",
    authors: ["Hongchen Wei", "Zhenzhong Chen"],
    venue: "Preprint",
    keywords: "模型 合并 跨模态 迁移 reasoning transfer",
    links: { paper: "https://arxiv.org/abs/2505.16151" },
  },
  {
    id: "geo-reasoning",
    year: 2026,
    status: "published",
    selected: false,
    firstAuthor: false,
    title:
      "See What We Cannot See: A Geo-guided Reasoning Benchmark for Object Counting under Adverse Earth Observation Conditions",
    authors: null,
    venue: "CVPR 2026",
    keywords: "遥感 计数 推理",
    links: {
      paper:
        "https://openaccess.thecvf.com/content/CVPR2026/papers/Wang_See_What_We_Cannot_See_A_Geo-guided_Reasoning_Benchmark_for_CVPR_2026_paper.pdf",
    },
  },
  {
    id: "tdsagent",
    year: 2026,
    status: "published",
    selected: false,
    firstAuthor: false,
    title:
      "TDSAgent: A Task-Driven Sampling Agent for Long Video Question Answering",
    authors: null,
    venue: "IEEE TMM 2026",
    keywords: "视频 采样 问答",
    links: {},
  },
  {
    id: "etc",
    year: 2026,
    status: "preprint",
    selected: false,
    firstAuthor: false,
    title:
      "ETC: Extreme Token Compression via Task-aware Visual Information Distillation in VLMs",
    authors: null,
    venue: "Preprint",
    keywords: "压缩 蒸馏 token efficiency",
    links: { paper: "https://arxiv.org/abs/2606.00543" },
  },
  {
    id: "gtc",
    year: 2026,
    status: "preprint",
    selected: false,
    firstAuthor: false,
    title:
      "GTC: Game-Theoretic Token Compression for Video Large Language Models",
    authors: null,
    venue: "Preprint",
    keywords: "压缩 视频 博弈 efficiency",
    links: {},
  },
  {
    id: "vcwe",
    year: 2025,
    status: "published",
    selected: true,
    firstAuthor: true,
    title:
      "Visual Context Window Extension: A New Perspective for Long Video Understanding",
    authors: ["Hongchen Wei", "Zhenzhong Chen"],
    venue: "ACM MM 2025",
    keywords: "长视频 上下文 理解",
    links: {
      paper: "https://arxiv.org/abs/2409.20018",
      project: "https://hcwei13.github.io/Visual-Context-Window-Extension/",
    },
  },
  {
    id: "realvg",
    year: 2025,
    status: "published",
    selected: true,
    firstAuthor: true,
    title:
      "RealVG: Unleashing MLLMs for Training-Free Spatio-Temporal Video Grounding in the Wild",
    authors: ["Hongchen Wei", "Zhenzhong Chen"],
    venue: "ACM MM 2025",
    keywords: "视频 时空 定位 grounding",
    links: {},
  },
  {
    id: "longcaption",
    year: 2025,
    status: "preprint",
    selected: false,
    firstAuthor: true,
    title:
      "LongCaption: Unlocking the Power of Long Caption Generation in Large Multimodal Models",
    authors: [
      "Hongchen Wei",
      "Zhihong Tan",
      "Yaosi Hu",
      "Chang Wen Chen",
      "Zhenzhong Chen",
    ],
    venue: "ACM TIST (under review)",
    keywords: "长描述 生成 captioning",
    links: { paper: "https://arxiv.org/abs/2502.15393" },
  },
  {
    id: "rssqa",
    year: 2025,
    status: "published",
    selected: false,
    firstAuthor: false,
    title:
      "Remote Sensing Semantic Segmentation Quality Assessment based on Vision Language Model",
    authors: [
      "Huiying Shi",
      "Zhihong Tan",
      "Zhihan Zhang",
      "Hongchen Wei",
      "Yaosi Hu",
      "Yingxue Zhang",
      "Zhenzhong Chen",
    ],
    venue: "IEEE TGRS 2025",
    keywords: "遥感 分割 质量",
    links: { paper: "https://arxiv.org/abs/2502.13990" },
  },
  {
    id: "lop",
    year: 2025,
    status: "published",
    accepted: true,
    selected: false,
    firstAuthor: false,
    title:
      "LOP: Learning Optimal Pruning for Efficient On-Demand MLLMs Scaling",
    authors: ["Zhihan Zhang", "Xiang Pan", "Hongchen Wei", "Zhenzhong Chen"],
    venue: "IEEE TCSVT",
    keywords: "剪枝 效率 scaling",
    links: { paper: "https://arxiv.org/abs/2506.12826" },
  },
  {
    id: "rsfake",
    year: 2025,
    status: "published",
    accepted: true,
    selected: false,
    firstAuthor: false,
    title:
      "RSFAKE-1M: A Large-Scale Dataset for Detecting Diffusion-Generated Remote Sensing Forgeries",
    authors: [
      "Zhihong Tan",
      "Jiayi Wang",
      "Huiying Shi",
      "Binyuan Huang",
      "Hongchen Wei",
      "Zhenzhong Chen",
    ],
    venue: "ACM TIST",
    keywords: "遥感 伪造 数据集",
    links: { paper: "https://arxiv.org/abs/2505.23283" },
  },
  {
    id: "prompt-learning",
    year: 2024,
    status: "published",
    selected: false,
    firstAuthor: true,
    title:
      "Improving Generalization of Image Captioning with Unsupervised Prompt Learning",
    authors: ["Hongchen Wei", "Zhenzhong Chen"],
    venue: "ACM TOMM 2024",
    keywords: "无监督 提示 描述",
    links: { paper: "https://arxiv.org/abs/2308.02862" },
  },
  {
    id: "cprc",
    year: 2023,
    status: "published",
    selected: false,
    firstAuthor: true,
    studentFirst: true,
    title:
      "Exploiting Cross-Modal Prediction and Relation Consistency for Semi-Supervised Image Captioning",
    authors: [
      "Yang Yang",
      "Hongchen Wei",
      "Hengshu Zhu",
      "Dianhai Yu",
      "Hui Xiong",
      "Jian Yang",
    ],
    venue: "IEEE TCYB 2023",
    keywords: "半监督 描述 一致性",
    links: {
      paper: "https://ieeexplore.ieee.org/document/9843903",
      code: "https://github.com/njustkmg/TCYB22_CPRC",
    },
  },
  {
    id: "s2osc",
    year: 2022,
    status: "published",
    selected: false,
    firstAuthor: true,
    studentFirst: true,
    title:
      "S2OSC: A Holistic Semi-Supervised Approach for Open Set Classification",
    authors: [
      "Yang Yang",
      "Hongchen Wei",
      "Zhenqiang Sun",
      "Guangyu Li",
      "Yuanchun Zhou",
      "Hui Xiong",
      "Jian Yang",
    ],
    venue: "ACM TKDD 2022",
    keywords: "半监督 开集 分类",
    links: { paper: "https://dl.acm.org/doi/10.1145/3468675" },
  },
];

window.paperPresentation = {
  officetown: {
    featured: true,
    zoom: "assets/research/officetown-figure1.webp",
    caption: {
      en: "OfficeTown, Figure 1. The office scene is illustrative; the chart shows accumulated work materials over simulated days, not task success.",
      zh: "OfficeTown 图 1：组织场景为示意；曲线反映模拟时间中的工作材料积累，而非任务成功率。",
    },
    description: {
      en: "Ongoing organizational simulation generates professional tasks, context, and feedback for benchmarking, supervised fine-tuning (SFT), and on-policy distillation (OPD).",
      zh: "通过持续组织模拟生成专业任务、上下文与反馈，为 Benchmark、SFT 和 OPD 提供数据与环境。",
    },
  },
  docatlas: {
    featured: true,
    description: {
      en: "Mutable-state document interaction reaches 71.4% on MMLongBench-Doc; in-environment RL improves Qwen3.5-4B by 9.3 percentage points.",
      zh: "将文档理解建模为可变状态交互，在 MMLongBench-Doc 达到 71.4%；环境内 RL 将 Qwen3.5-4B 提升 9.3 个百分点。",
    },
  },
  "xl-docbench": {
    featured: true,
    description: {
      en: "Evidence-level evaluation with 1,519 questions verified by 194 experts, contexts up to 2,303 pages, and approximately 40K synthetic post-training examples.",
      zh: "194 位专家验证的 1,519 道问题，最长 2,303 页上下文；支持证据级失败诊断，并构建约 40K 合成后训练样本。",
    },
  },
  pasa: {
    description: {
      en: "Post-merge perception–reasoning asymmetry provides a self-alignment signal without ground-truth answer labels.",
      zh: "利用模型合并后的感知–推理不对称性，在无需真值答案标签的条件下实现自对齐。",
    },
  },
  ano: {
    description: {
      en: "Layer-specialized model merging transfers reasoning capabilities while preserving visual perception, without additional training data or gradient updates.",
      zh: "按层定制的模型融合在保留视觉感知能力的同时迁移推理能力，无需额外训练数据或梯度更新。",
    },
  },
  vcwe: {
    description: {
      en: "Extending the visual context window offers a new approach to long-video understanding.",
      zh: "从视觉上下文窗口扩展出发，研究长视频理解。",
    },
  },
  realvg: {
    description: {
      en: "Training-free spatio-temporal video grounding in open-world settings.",
      zh: "面向开放世界场景的免训练时空视频定位。",
    },
  },
  longcaption: {
    description: {
      en: "Long, detailed caption generation in large multimodal models.",
      zh: "研究大模型的长描述生成能力。",
    },
  },
  "geo-reasoning": {
    description: {
      en: "A geo-guided benchmark evaluates object counting under challenging Earth-observation conditions.",
      zh: "构建地理信息引导的推理基准，评测复杂地球观测条件下的目标计数能力。",
    },
  },
  tdsagent: {
    description: {
      en: "Task-driven sampling selects relevant video evidence for long-video question answering.",
      zh: "通过任务驱动的采样选择相关视频证据，支持长视频问答。",
    },
  },
  etc: {
    description: {
      en: "Task-aware visual information distillation enables extreme token compression in vision-language models.",
      zh: "通过任务感知的视觉信息蒸馏，实现视觉语言模型中的极致 Token 压缩。",
    },
  },
  gtc: {
    description: {
      en: "A game-theoretic approach compresses visual tokens for video large language models.",
      zh: "采用博弈论方法压缩视频大语言模型中的视觉 Token。",
    },
  },
  rssqa: {
    description: {
      en: "Vision-language models assess semantic segmentation quality in remote-sensing imagery.",
      zh: "利用视觉语言模型评估遥感影像的语义分割质量。",
    },
  },
  lop: {
    description: {
      en: "Learned pruning supports efficient, on-demand scaling of multimodal large language models.",
      zh: "通过学习最优剪枝，支持多模态大语言模型的高效按需扩展。",
    },
  },
  rsfake: {
    description: {
      en: "A large-scale dataset supports the detection of diffusion-generated remote-sensing forgeries.",
      zh: "构建大规模数据集，支持扩散模型生成的遥感伪造影像检测。",
    },
  },
  "prompt-learning": {
    description: {
      en: "Unsupervised prompt learning improves the generalization of image-captioning models.",
      zh: "通过无监督提示学习提升图像描述模型的泛化能力。",
    },
  },
  cprc: {
    description: {
      en: "Cross-modal prediction and relation consistency support semi-supervised image captioning.",
      zh: "利用跨模态预测与关系一致性，开展半监督图像描述学习。",
    },
  },
  s2osc: {
    description: {
      en: "A holistic semi-supervised framework addresses open-set classification.",
      zh: "采用统一的半监督学习框架处理开放集分类问题。",
    },
  },
};

window.homepageChinese = {
  skip: "跳至正文",
  navPapers: "论文",
  navExperience: "经历",
  bioPhd:
    '我目前是<a href="https://www.whu.edu.cn/" target="_blank" rel="noopener">武汉大学</a>博士研究生，导师为 IIP 实验室的<a href="https://zhenzhong-chen.github.io/" target="_blank" rel="noopener">陈震中教授</a>。',
  bioMSRA:
    '同时，我在<a href="https://www.microsoft.com/en-us/research/lab/microsoft-research-asia/" target="_blank" rel="noopener">微软亚洲研究院</a> Visual Computing Group 担任研究实习生，与 Dr. Bei Liu 合作，研究面向专业工作的智能体环境与学习。',
  email: "邮箱",
  bioResearch:
    '我主要研究<strong>面向专业工作的通用智能体</strong>，关注生成式环境、数据合成、后训练与评测。近期工作包括面向组织模拟的 <a href="#paper-officetown"><strong>OfficeTown</strong></a>、面向文档交互的 <a href="#paper-docatlas">DocAtlas</a>，以及面向证据级评测的 <a href="#paper-xl-docbench">XL-DocBench</a>。',
  careerNote:
    '我预计于 <strong>2027 年 6 月</strong>博士毕业，正在寻找<strong class="career-focus">智能体方向的全职研究岗位</strong>，欢迎<a href="mailto:hc_wei@whu.edu.cn">联系交流</a>相关机会。',
  newsHeading: "动态",
  newsOfficeTown:
    '<span class="news-emoji" aria-hidden="true">🏢</span>完成 <strong>OfficeTown</strong>：通过<strong>持续组织模拟</strong>生成专业工作数据与环境，支持<strong>通用智能体训练与评测</strong><span class="news-note">（论文暂未公开）</span>。',
  newsAccepted:
    '<span class="news-emoji" aria-hidden="true">🎉</span><strong>DocAtlas</strong> 与 <strong>XL-DocBench</strong> 已被 <strong class="news-venue">NeurIPS 2026</strong> 录用。',
  newsIntern:
    '<span class="news-emoji" aria-hidden="true">🔬</span>加入<strong>微软亚洲研究院</strong>，担任研究实习生，与 <strong>Dr. Bei Liu</strong> 合作开展研究。',
  publications: "论文",
  publicationSummary: "论文 18 篇 · 一作 11 篇（含共一与预印本）",
  groupPreprints: "预印本",
  groupFirstAuthor: "第一作者论文",
  groupFirstAuthorNote: "已录用 / 已发表，含共同一作及学生一作",
  groupCoAuthored: "合作论文",
  groupCoAuthoredNote: "已录用 / 已发表，非第一作者",
  searchPlaceholder: "搜索论文",
  noPapers: "没有找到匹配的论文。",
  resetSearch: "清除搜索",
  authorNote: "* 表示共同第一作者；学生第一作者另作标注。",
  experienceHeading: "教育与研究经历",
  toPresent: "– 至今",
  msra: "微软亚洲研究院",
  msraRole: "研究实习生 · Visual Computing Group · Mentor: Dr. Bei Liu",
  whu: "武汉大学",
  whuRole: "博士研究生 · IIP Lab · 导师：陈震中教授",
  njust: "南京理工大学",
  masters: "硕士",
  xsyu: "西安石油大学",
  bachelors: "本科",
  service: "学术服务",
  reviewer:
    "担任 ICLR 2025/26、CVPR 2025/26、NeurIPS 2025/26、ICML 2026 和 TNNLS 审稿人。",
  contactHeading: "联系",
  bilingual: "中英文合并版简历",
  updated: "更新于 2026 年 9 月",
  inspiredBy: "主页参考",
};
