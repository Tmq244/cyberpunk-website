import { Suspense } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScanlineOverlay } from "@/components/scanline-overlay"
import {
  Database,
  FileText,
  Users,
  Building2,
  Shield,
  Cpu,
  Lock,
  Unlock,
  Clock,
  Eye,
  Download,
  Star,
  ArrowLeft,
  Calendar,
  Server,
  Heart,
  Activity,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

const categoryData: Record<
  string,
  {
    title: string
    subtitle: string
    description: string
    icon: any
    color: string
    bgImage: string
    items: Array<{
      id: number
      title: string
      description: string
      classification: string
      date: string
      views: number
      size: string
      rating: number
      image: string
      tags: string[]
      content: string
    }>
  }
> = {
  districts: {
    title: "城区档案",
    subtitle: "DISTRICT_DATABASE",
    description: "夜之城各区域的详细资料、历史记录与实时状态监控",
    icon: Building2,
    color: "neon-cyan",
    bgImage: "/cyberpunk-neon-city-skyline-at-night-with-holograp.jpg",
    items: [
      {
        id: 1,
        title: "市中心区域完整报告",
        description: "企业巨头的权力中心，高耸入云的摩天大楼与奢华生活的象征",
        classification: "公开",
        date: "2077-12-15",
        views: 89234,
        size: "3.2 GB",
        rating: 4.9,
        image: "/cyberpunk-neon-city-skyline-at-night-with-holograp.jpg",
        tags: ["企业区", "高档", "安保严密"],
        content:
          "市中心是夜之城的心脏地带，汇集了荒坂、军用科技等超级企业的总部大楼。这里24小时灯火通明，全息广告遍布每个角落。人均收入是全城最高，但普通市民难以在此立足。安保系统由企业私人部队负责，犯罪率极低但代价是无处不在的监控。",
      },
      {
        id: 2,
        title: "沃森区发展历史与现状",
        description: "曾经的工业重镇，如今的移民聚居区与地下经济中心",
        classification: "公开",
        date: "2077-12-12",
        views: 67890,
        size: "2.8 GB",
        rating: 4.7,
        image: "/futuristic-data-center-with-glowing-servers-and-bl.jpg",
        tags: ["工业区", "移民", "地下经济"],
        content:
          "沃森区曾是夜之城的制造业中心，但随着自动化浪潮，大量工厂关闭。现在这里是各国移民的聚居地，街头小贩、黑市交易和帮派活动并存。虽然犯罪率较高，但这里也是创业者和梦想家的起点。",
      },
      {
        id: 3,
        title: "威斯布鲁克区精英生活指南",
        description: "富人区与娱乐天堂，奢华与堕落的完美结合",
        classification: "公开",
        date: "2077-12-10",
        views: 45678,
        size: "2.1 GB",
        rating: 4.8,
        image: "/cyberpunk-virtual-reality-digital-world-with-neon-.jpg",
        tags: ["富人区", "娱乐", "高消费"],
        content:
          "威斯布鲁克是夜之城最奢华的区域，拥有顶级夜总会、赌场和私人会所。日本城是其中最著名的娱乐区，霓虹灯下隐藏着无数秘密。这里的消费水平令人咋舌，但对于有钱人来说，这里是天堂。",
      },
      {
        id: 4,
        title: "海伍德区帮派势力分布图",
        description: "拉丁裔社区的家园，传统与现代的碰撞之地",
        classification: "限制",
        date: "2077-12-08",
        views: 34567,
        size: "1.9 GB",
        rating: 4.5,
        image: "/cyberpunk-fighting-arena-neon.jpg",
        tags: ["帮派", "社区", "传统文化"],
        content:
          "海伍德是瓦伦蒂诺帮派的地盘，这里保留着浓厚的拉丁文化传统。虽然帮派活动频繁，但社区内部有着独特的荣誉准则。家庭观念在这里依然重要，街头壁画记录着这片土地的历史。",
      },
      {
        id: 5,
        title: "圣多明戈工业区技术档案",
        description: "电力设施与重工业的集中地，城市的动力来源",
        classification: "限制",
        date: "2077-12-05",
        views: 23456,
        size: "2.5 GB",
        rating: 4.4,
        image: "/quantum-computing-center-cyberpunk.jpg",
        tags: ["工业", "电力", "基础设施"],
        content:
          "圣多明戈是夜之城的能源心脏，巨大的发电厂和变电站为整个城市供电。这里空气污染严重，工人们在恶劣环境中工作。最近的神经链路项目就在此区建设了主要设施。",
      },
      {
        id: 6,
        title: "太平州危险区域警示",
        description: "法外之地，帮派战争的前线与无政府主义者的乐园",
        classification: "机密",
        date: "2077-12-01",
        views: 12345,
        size: "1.5 GB",
        rating: 4.2,
        image: "/cyberpunk-digital-art-exhibition.jpg",
        tags: ["危险", "帮派战争", "无政府"],
        content:
          "太平州是夜之城最危险的区域，NCPD几乎不会进入这里。多个帮派在此争夺地盘，枪声是日常背景音。然而，对于想要消失的人来说，这里是最好的藏身之处。",
      },
    ],
  },
  corporations: {
    title: "企业数据",
    subtitle: "CORP_INTELLIGENCE",
    description: "主要企业的公开资料、市场分析与权力结构图谱",
    icon: Database,
    color: "neon-magenta",
    bgImage: "/arasaka-corporation-cyberpunk-building.jpg",
    items: [
      {
        id: 1,
        title: "荒坂集团完整企业档案",
        description: "日本超级企业，全球安保与军事科技的霸主",
        classification: "限制",
        date: "2077-12-14",
        views: 156789,
        size: "5.8 GB",
        rating: 4.9,
        image: "/arasaka-corporation-cyberpunk-building.jpg",
        tags: ["日本企业", "军事科技", "全球霸主"],
        content:
          "荒坂集团由荒坂三郎于1915年创立，从一家小型制造公司发展为全球最强大的超级企业。主营业务包括企业安保、军事装备、银行金融和制造业。其私人军队规模可与许多国家正规军匹敌。",
      },
      {
        id: 2,
        title: "军用科技公司市场分析",
        description: "美国军工巨头，武器装备与义体技术的领导者",
        classification: "公开",
        date: "2077-12-12",
        views: 123456,
        size: "4.2 GB",
        rating: 4.8,
        image: "/cyberpunk-cyborg-arm-modification.jpg",
        tags: ["美国企业", "武器", "义体"],
        content:
          "军用科技是美国最大的国防承包商，其武器系统装备了全球大部分军事力量。在义体市场，军用科技的产品以耐用和可靠著称，虽然不如其他品牌时尚，但深受佣兵和军人青睐。",
      },
      {
        id: 3,
        title: "康陶生物科技研发报告",
        description: "生物技术先驱，基因工程与医疗科技的前沿探索者",
        classification: "机密",
        date: "2077-12-10",
        views: 89012,
        size: "3.6 GB",
        rating: 4.7,
        image: "/cyberpunk-neural-interface-device-with-cyan-glow.jpg",
        tags: ["生物科技", "基因工程", "医疗"],
        content:
          "康陶是生物技术领域的领导者，其基因治疗和器官克隆技术挽救了无数生命。然而，关于其非法人体实验的传闻从未停止。公司对外宣称所有研究都符合伦理标准，但内部文件显示情况远比公开的复杂。",
      },
      {
        id: 4,
        title: "网监局技术架构分析",
        description: "网络安全机构，赛博空间的守护者与监视者",
        classification: "机密",
        date: "2077-12-08",
        views: 67890,
        size: "2.9 GB",
        rating: 4.6,
        image: "/cyberpunk-virtual-reality-digital-world-with-neon-.jpg",
        tags: ["网络安全", "政府机构", "监控"],
        content:
          "网监局名义上是保护公民免受网络犯罪侵害的机构，但实际上其监控范围远超公开承认的程度。其黑墙防火墙将旧网与新网隔离，据说墙后存在着失控的AI和数字幽灵。",
      },
      {
        id: 5,
        title: "泽塔科技新兴企业报告",
        description: "新兴科技公司，消费电子与智能家居的创新者",
        classification: "公开",
        date: "2077-12-05",
        views: 45678,
        size: "1.8 GB",
        rating: 4.4,
        image: "/futuristic-data-center-with-glowing-servers-and-bl.jpg",
        tags: ["消费电子", "智能家居", "新兴企业"],
        content:
          "泽塔科技是近年来崛起最快的科技公司，以价格亲民的智能设备闻名。虽然规模无法与超级企业相比，但其创新能力和市场敏锐度令人印象深刻。许多分析师认为它可能成为下一个巨头。",
      },
    ],
  },
  technology: {
    title: "技术文档",
    subtitle: "TECH_SPECS",
    description: "义体、神经接口与 AI 系统的技术规格与操作指南",
    icon: Cpu,
    color: "neon-cyan",
    bgImage: "/cyberpunk-neural-interface-device-with-cyan-glow.jpg",
    items: [
      {
        id: 1,
        title: "NEXUS 神经链路技术白皮书 v4.0",
        description: "第四代神经接口的完整技术规格、安装流程与安全指南",
        classification: "公开",
        date: "2077-12-15",
        views: 234567,
        size: "1.2 GB",
        rating: 4.9,
        image: "/cyberpunk-neural-interface-device-with-cyan-glow.jpg",
        tags: ["神经接口", "官方文档", "安全指南"],
        content:
          "NEXUS 神经链路代表了人机接口技术的巅峰。采用量子纠缠信号传输，实现了前所未有的带宽和响应速度。本文档详细介绍了系统架构、安装要求、兼容性列表和常见故障排除方法。",
      },
      {
        id: 2,
        title: "义体改装完整指南 2077版",
        description: "从基础义肢到军用级强化装备的全面改装手册",
        classification: "公开",
        date: "2077-12-13",
        views: 189012,
        size: "2.4 GB",
        rating: 4.8,
        image: "/cyberpunk-cyborg-arm-modification.jpg",
        tags: ["义体", "改装", "教程"],
        content:
          "本指南涵盖了市面上所有主流义体的安装、调试和维护方法。从简单的光学植入到复杂的全身骨架替换，每种改装都配有详细的步骤说明和风险提示。特别警告：未经认证的地下改装可能导致严重的赛博精神病。",
      },
      {
        id: 3,
        title: "赛博空间入门与进阶",
        description: "从基础浏览到高级黑客技术的完整培训教程",
        classification: "限制",
        date: "2077-12-11",
        views: 145678,
        size: "1.8 GB",
        rating: 4.7,
        image: "/cyberpunk-virtual-reality-digital-world-with-neon-.jpg",
        tags: ["赛博空间", "黑客", "教程"],
        content:
          "赛博空间是数字世界的可视化呈现，熟练的网络行者可以在此自由穿梭。本教程从基础的ICE破解讲起，逐步深入到企业防火墙突破和AI对抗。警告：未经授权的网络入侵是严重犯罪行为。",
      },
      {
        id: 4,
        title: "智能武器系统技术手册",
        description: "自瞄准、弹道计算与生物识别武器的操作指南",
        classification: "限制",
        date: "2077-12-09",
        views: 98765,
        size: "980 MB",
        rating: 4.6,
        image: "/cyberpunk-fighting-arena-neon.jpg",
        tags: ["武器", "智能系统", "军用"],
        content:
          "现代智能武器整合了先进的传感器和AI辅助系统。本手册详细介绍了智能瞄准系统的工作原理、弹道计算算法以及生物识别安全锁的配置方法。仅供持有合法武器许可的用户参考。",
      },
      {
        id: 5,
        title: "家用AI助手配置大全",
        description: "从语音助手到智能家居的完整配置与优化指南",
        classification: "公开",
        date: "2077-12-07",
        views: 76543,
        size: "560 MB",
        rating: 4.5,
        image: "/futuristic-data-center-with-glowing-servers-and-bl.jpg",
        tags: ["AI", "智能家居", "配置"],
        content:
          "家用AI已成为现代生活的标配。本指南帮助您充分发挥AI助手的潜力，包括语音识别优化、个性化训练、隐私设置和与其他智能设备的联动配置。",
      },
      {
        id: 6,
        title: "医疗义体维护手册",
        description: "假肢、器官替代品与生命支持系统的日常维护",
        classification: "公开",
        date: "2077-12-05",
        views: 54321,
        size: "720 MB",
        rating: 4.8,
        image: "/cyberpunk-digital-art-exhibition.jpg",
        tags: ["医疗", "维护", "义体"],
        content:
          "医疗级义体需要定期维护以确保最佳性能和使用寿命。本手册涵盖了清洁、校准、固件更新和常见故障诊断，帮助用户在家中进行基础维护，同时指出何时需要寻求专业帮助。",
      },
    ],
  },
  personnel: {
    title: "人物档案",
    subtitle: "PERSONNEL_FILES",
    description: "公众人物与重要人士的背景资料、活动记录与关系网络",
    icon: Users,
    color: "neon-yellow",
    bgImage: "/cyberpunk-rocker-male-silver-hair.jpg",
    items: [
      {
        id: 1,
        title: "Johnny Silverhand - 传奇档案",
        description: "传奇摇滚客、反企业斗士，2023年荒坂塔事件主谋",
        classification: "机密",
        date: "2077-12-14",
        views: 567890,
        size: "4.5 GB",
        rating: 5.0,
        image: "/cyberpunk-rocker-male-silver-hair.jpg",
        tags: ["传奇", "摇滚客", "反抗者"],
        content:
          "Johnny Silverhand，原名Robert John Linder，是武士乐队的主唱和灵魂人物。2023年带领袭击队伍攻入荒坂塔，引爆核弹，造成数万人死亡。官方记录显示他死于当场，但关于他的数字意识残留的传闻从未停止。",
      },
      {
        id: 2,
        title: "Saburo Arasaka - 企业帝王",
        description: "荒坂集团创始人之孙，当代企业帝国的绝对统治者",
        classification: "限制",
        date: "2077-12-12",
        views: 345678,
        size: "3.8 GB",
        rating: 4.9,
        image: "/cyberpunk-japanese-old-businessman.jpg",
        tags: ["企业", "荒坂", "领袖"],
        content:
          "荒坂三郎，150多岁高龄，通过先进的生命延续技术维持着对荒坂帝国的控制。他是企业时代的活化石，亲身经历了四次企业战争。其对永生的执念和对权力的渴望塑造了当今世界的格局。",
      },
      {
        id: 3,
        title: "Rogue Amendiares - 掮客女王",
        description: "夜之城最成功的掮客，来世酒吧的神秘老板",
        classification: "限制",
        date: "2077-12-10",
        views: 234567,
        size: "2.1 GB",
        rating: 4.8,
        image: "/cyberpunk-fixer-woman-bar-owner.jpg",
        tags: ["掮客", "传奇", "地下世界"],
        content:
          "Rogue曾是Johnny Silverhand的恋人和战友，如今是夜之城最有权势的掮客。她的来世酒吧是佣兵们接取高端任务的首选地点。没有她搞不定的任务，也没有她不知道的秘密。",
      },
      {
        id: 4,
        title: "Viktor Vektor - 地下医生",
        description: "前拳击手转型义体医生，沃森区最可靠的改装专家",
        classification: "公开",
        date: "2077-12-08",
        views: 123456,
        size: "1.5 GB",
        rating: 4.7,
        image: "/cyberpunk-male-reporter-avatar.jpg",
        tags: ["医生", "义体", "沃森区"],
        content:
          "Viktor是沃森区最受信赖的义体医生，在地下诊所为无法负担企业医院费用的人提供服务。他的技术精湛，改装的义体既安全又可靠。很多传奇佣兵都是他的老客户。",
      },
      {
        id: 5,
        title: "Adam Smasher - 企业杀手",
        description: "荒坂首席安保官，几乎完全机械化的战斗怪物",
        classification: "机密",
        date: "2077-12-06",
        views: 289012,
        size: "2.8 GB",
        rating: 4.6,
        image: "/cyberpunk-security-logo.jpg",
        tags: ["企业", "杀手", "全机械"],
        content:
          "Adam Smasher是人类改造的极端案例，全身90%以上已被机械替换。他是荒坂集团最可怕的武器，负责处理最棘手的问题。2023年亲手杀死了Johnny Silverhand，是夜之城最危险的存在之一。",
      },
    ],
  },
  security: {
    title: "安全协议",
    subtitle: "SECURITY_PROTOCOLS",
    description: "网络安全指南、威胁情报与防护最佳实践",
    icon: Shield,
    color: "neon-magenta",
    bgImage: "/cyberpunk-virtual-reality-digital-world-with-neon-.jpg",
    items: [
      {
        id: 1,
        title: "2077年度网络威胁报告",
        description: "年度网络安全态势分析、主要威胁类型与防护建议",
        classification: "公开",
        date: "2077-12-15",
        views: 178901,
        size: "1.8 GB",
        rating: 4.9,
        image: "/cyberpunk-virtual-reality-digital-world-with-neon-.jpg",
        tags: ["年度报告", "威胁分析", "防护"],
        content:
          "2077年网络威胁呈现新特点：AI驱动的攻击工具更加普及，针对神经接口的恶意软件急剧增加，企业间网络战愈发激烈。本报告详细分析了主要威胁类型并提供了切实可行的防护建议。",
      },
      {
        id: 2,
        title: "神经接口安全防护指南",
        description: "保护您的神经植入物免受黑客攻击的完整指南",
        classification: "公开",
        date: "2077-12-13",
        views: 145678,
        size: "890 MB",
        rating: 4.8,
        image: "/cyberpunk-neural-interface-device-with-cyan-glow.jpg",
        tags: ["神经安全", "防护", "指南"],
        content:
          "神经植入物的普及带来了新的安全风险。黑客可能入侵您的视觉植入显示虚假信息，甚至控制您的肢体义体。本指南教您如何设置安全防火墙、识别入侵迹象和紧急断开连接。",
      },
      {
        id: 3,
        title: "企业网络防御最佳实践",
        description: "面向企业的网络安全架构设计与运维指南",
        classification: "限制",
        date: "2077-12-11",
        views: 98765,
        size: "2.3 GB",
        rating: 4.7,
        image: "/futuristic-data-center-with-glowing-servers-and-bl.jpg",
        tags: ["企业安全", "架构", "最佳实践"],
        content:
          "企业网络面临的威胁日益复杂，从竞争对手的商业间谍到有组织的网络犯罪集团。本文档基于多家超级企业的安全架构，提炼出可复制的防御策略和运维流程。",
      },
      {
        id: 4,
        title: "个人数据保护手册",
        description: "在监控无处不在的时代保护您的隐私",
        classification: "公开",
        date: "2077-12-09",
        views: 87654,
        size: "450 MB",
        rating: 4.6,
        image: "/cyberpunk-digital-art-exhibition.jpg",
        tags: ["隐私", "数据保护", "个人安全"],
        content:
          "在这个数据即货币的时代，您的个人信息比以往任何时候都更有价值。本手册教您如何最小化数字足迹、使用加密通讯工具和保护敏感数据不被窃取或滥用。",
      },
      {
        id: 5,
        title: "恶意软件识别与清除",
        description: "常见网络病毒、木马和蠕虫的识别与处理方法",
        classification: "公开",
        date: "2077-12-07",
        views: 65432,
        size: "680 MB",
        rating: 4.5,
        image: "/quantum-computing-center-cyberpunk.jpg",
        tags: ["恶意软件", "病毒", "清除"],
        content:
          "即使有了先进的安全系统，恶意软件仍然是常见威胁。本文档详细介绍了2077年最流行的恶意软件变种，包括它们的传播方式、感染症状和清除方法。",
      },
    ],
  },
  history: {
    title: "历史记录",
    subtitle: "HISTORICAL_ARCHIVES",
    description: "城市发展史、重大事件回顾与时代变迁记录",
    icon: FileText,
    color: "neon-cyan",
    bgImage: "/cyberpunk-neon-city-skyline-at-night-with-holograp.jpg",
    items: [
      {
        id: 1,
        title: "夜之城建城史 1994-2077",
        description: "从理想城市到赛博朋克都市的完整发展历程",
        classification: "公开",
        date: "2077-12-15",
        views: 345678,
        size: "5.2 GB",
        rating: 4.9,
        image: "/cyberpunk-neon-city-skyline-at-night-with-holograp.jpg",
        tags: ["建城史", "发展", "完整档案"],
        content:
          "夜之城由理查德·奈特于1994年创建，最初的愿景是建造一座摆脱犯罪和腐败的理想城市。然而，创始人的遇刺、企业的渗透和多次战争改变了一切。如今的夜之城是企业权力、科技奇迹和人性黑暗的完美结合体。",
      },
      {
        id: 2,
        title: "第四次企业战争全记录",
        description: "荒坂与军用科技的全面冲突，改变世界格局的战争",
        classification: "限制",
        date: "2077-12-13",
        views: 234567,
        size: "4.1 GB",
        rating: 4.8,
        image: "/arasaka-corporation-cyberpunk-building.jpg",
        tags: ["企业战争", "荒坂", "军用科技"],
        content:
          "2021-2023年的第四次企业战争是人类历史上最具破坏性的冲突之一。荒坂与军用科技两大超级企业的对抗波及全球，最终以荒坂塔核爆事件告终。这场战争重塑了全球政治格局，确立了企业凌驾于国家之上的新秩序。",
      },
      {
        id: 3,
        title: "2023年荒坂塔事件调查报告",
        description: "核爆真相、参与者追踪与后续影响分析",
        classification: "机密",
        date: "2077-12-11",
        views: 456789,
        size: "3.5 GB",
        rating: 5.0,
        image: "/cyberpunk-rocker-male-silver-hair.jpg",
        tags: ["荒坂塔", "核爆", "调查"],
        content:
          "2023年的荒坂塔核爆是夜之城历史上最黑暗的一页。官方说法是恐怖分子袭击，但本报告基于解密文件和幸存者证词，揭示了事件背后的复杂真相。Johnny Silverhand领导的袭击队、荒坂内部的权力斗争、军用科技的暗中参与——真相远比表面复杂。",
      },
      {
        id: 4,
        title: "义体技术发展编年史",
        description: "从基础假肢到全身机械化的技术演进",
        classification: "公开",
        date: "2077-12-09",
        views: 123456,
        size: "2.8 GB",
        rating: 4.7,
        image: "/cyberpunk-cyborg-arm-modification.jpg",
        tags: ["义体", "技术史", "演进"],
        content:
          "义体技术的发展彻底改变了人类对身体的认知。从最初的医疗用途到如今的性能增强和美学改造，义体已成为现代生活不可或缺的一部分。本编年史记录了这一革命性技术的每一个里程碑。",
      },
      {
        id: 5,
        title: "赛博空间崩溃与重建",
        description: "旧网的毁灭、黑墙的建立与新网络的诞生",
        classification: "限制",
        date: "2077-12-07",
        views: 98765,
        size: "2.2 GB",
        rating: 4.6,
        image: "/cyberpunk-virtual-reality-digital-world-with-neon-.jpg",
        tags: ["赛博空间", "黑墙", "网络史"],
        content:
          "DataKrash事件摧毁了旧网，释放出无数失控的AI和数字幽灵。网监局建立的黑墙将危险隔离在外，但也永久分割了人类的数字空间。如今的新网是在废墟上重建的，更安全但也更受控制。",
      },
      {
        id: 6,
        title: "帮派势力变迁史",
        description: "夜之城主要帮派的兴衰、合并与地盘演变",
        classification: "公开",
        date: "2077-12-05",
        views: 76543,
        size: "1.9 GB",
        rating: 4.5,
        image: "/cyberpunk-fighting-arena-neon.jpg",
        tags: ["帮派", "势力", "变迁"],
        content:
          "帮派是夜之城街头的主宰者。从老牌的瓦伦蒂诺到新兴的漩涡帮，每个帮派都有其独特的文化和势力范围。本档案追踪了各大帮派数十年来的兴衰演变，以及它们与企业和政府之间复杂的关系。",
      },
    ],
  },
}

export default async function ArchiveCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>
}) {
  const { category } = await params
  const data = categoryData[category]

  if (!data) {
    notFound()
  }

  const IconComponent = data.icon

  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="fixed inset-0 z-0">
        <Image
          src={data.bgImage || "/placeholder.svg"}
          alt="Background"
          fill
          className="object-cover opacity-15"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>

      <Suspense fallback={null}>
        <div className="relative z-10">
          <ScanlineOverlay />
          <Navbar />

          <section className="pt-24 pb-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              {/* Back Link */}
              <Link
                href="/archives"
                className="mb-8 inline-flex items-center gap-2 font-mono text-sm text-muted-foreground transition-colors hover:text-neon-cyan"
              >
                <ArrowLeft className="h-4 w-4" />
                返回档案库
              </Link>

              {/* Header */}
              <div className="mb-12">
                <div
                  className={`mb-4 inline-flex items-center gap-2 rounded-full border border-${data.color}/30 bg-${data.color}/10 px-4 py-1.5`}
                >
                  <IconComponent className={`h-4 w-4 text-${data.color}`} />
                  <span className={`font-mono text-xs text-${data.color}`}>{data.subtitle}</span>
                </div>
                <h1 className="font-mono text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                  {data.title.slice(0, 2)}
                  <span
                    className={`text-${data.color} text-glow-${data.color === "neon-cyan" ? "cyan" : data.color === "neon-magenta" ? "magenta" : "yellow"}`}
                  >
                    {data.title.slice(2)}
                  </span>
                </h1>
                <p className="mt-4 max-w-2xl font-mono text-lg text-muted-foreground">{data.description}</p>
              </div>

              {/* Stats Bar */}
              <div className="mb-8 flex flex-wrap items-center gap-6 rounded-lg border border-neon-cyan/20 bg-dark-surface/50 p-4 backdrop-blur">
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-neon-cyan" />
                  <span className="font-mono text-sm text-muted-foreground">
                    共 <span className="text-foreground">{data.items.length}</span> 份档案
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Eye className="h-4 w-4 text-neon-magenta" />
                  <span className="font-mono text-sm text-muted-foreground">
                    总访问{" "}
                    <span className="text-foreground">
                      {data.items.reduce((a, b) => a + b.views, 0).toLocaleString()}
                    </span>
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-neon-yellow" />
                  <span className="font-mono text-sm text-muted-foreground">
                    最后更新 <span className="text-foreground">{data.items[0]?.date}</span>
                  </span>
                </div>
              </div>

              {/* Archive List */}
              <div className="space-y-6">
                {data.items.map((item) => (
                  <article
                    key={item.id}
                    className="group overflow-hidden rounded-lg border border-neon-cyan/20 bg-dark-surface/50 backdrop-blur transition-all hover:border-neon-cyan/50 hover:shadow-[0_0_30px_rgba(0,255,255,0.1)]"
                  >
                    <div className="flex flex-col md:flex-row">
                      {/* Image */}
                      <div className="relative h-48 w-full shrink-0 md:h-auto md:w-64">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.title}
                          fill
                          className="object-cover transition-transform group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-dark-surface/80 md:bg-gradient-to-r" />
                      </div>

                      {/* Content */}
                      <div className="flex flex-1 flex-col p-6">
                        <div className="mb-3 flex flex-wrap items-center gap-2">
                          <span
                            className={`flex items-center gap-1 rounded px-2 py-0.5 font-mono text-xs ${
                              item.classification === "公开"
                                ? "bg-green-500/20 text-green-400"
                                : item.classification === "限制"
                                  ? "bg-neon-yellow/20 text-neon-yellow"
                                  : "bg-red-500/20 text-red-400"
                            }`}
                          >
                            {item.classification === "公开" ? (
                              <Unlock className="h-3 w-3" />
                            ) : (
                              <Lock className="h-3 w-3" />
                            )}
                            {item.classification}
                          </span>
                          <span className="flex items-center gap-1 font-mono text-xs text-neon-yellow">
                            <Star className="h-3 w-3 fill-neon-yellow" />
                            {item.rating}
                          </span>
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded bg-neon-cyan/10 px-2 py-0.5 font-mono text-xs text-neon-cyan"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <h3 className="mb-2 font-mono text-xl font-semibold text-foreground transition-colors group-hover:text-neon-cyan">
                          {item.title}
                        </h3>
                        <p className="mb-3 font-mono text-sm text-muted-foreground">{item.description}</p>
                        <p className="mb-4 font-mono text-sm text-muted-foreground/80 line-clamp-2">{item.content}</p>

                        <div className="mt-auto flex flex-wrap items-center justify-between gap-4">
                          <div className="flex flex-wrap items-center gap-4 font-mono text-xs text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {item.date}
                            </span>
                            <span className="flex items-center gap-1">
                              <Eye className="h-3 w-3" />
                              {item.views.toLocaleString()} 次访问
                            </span>
                            <span className="flex items-center gap-1">
                              <Server className="h-3 w-3" />
                              {item.size}
                            </span>
                          </div>

                          <div className="flex items-center gap-2">
                            <button className="flex items-center gap-1 rounded bg-dark-surface px-3 py-1.5 font-mono text-xs text-muted-foreground transition-colors hover:bg-neon-cyan/20 hover:text-neon-cyan">
                              <Heart className="h-3 w-3" />
                              收藏
                            </button>
                            <button className="flex items-center gap-1 rounded bg-neon-cyan/20 px-3 py-1.5 font-mono text-xs text-neon-cyan transition-colors hover:bg-neon-cyan/30">
                              <Download className="h-3 w-3" />
                              下载
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Load More */}
              <div className="mt-12 text-center">
                <button className="inline-flex items-center gap-2 rounded-lg border border-neon-cyan/30 bg-dark-surface/50 px-6 py-3 font-mono text-sm text-neon-cyan backdrop-blur transition-all hover:border-neon-cyan/50 hover:shadow-[0_0_20px_rgba(0,255,255,0.2)]">
                  <Activity className="h-4 w-4" />
                  加载更多档案
                </button>
              </div>
            </div>
          </section>

          <Footer />
        </div>
      </Suspense>
    </main>
  )
}
