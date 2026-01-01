"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import {
  ArrowLeft,
  ChevronRight,
  Signal,
  Cpu,
  Building2,
  Warehouse,
  Anchor,
  Skull,
  Users,
  Zap,
  X,
  Shield,
  Heart,
  Eye,
  MessageSquare,
  Map,
  Store,
  Home,
  Factory,
  Sparkles,
  CircuitBoard,
  Database,
  Plane,
  Train,
  Newspaper,
  FileText,
  TrendingUp,
  ExternalLink,
  ChevronLeft,
  MapPin,
} from "lucide-react"

const cityDistricts = [
  {
    id: "downtown",
    name: "市中心",
    nameEn: "DOWNTOWN",
    safetyRating: "中等",
    description: "高耸入云的企业大厦和霓虹广告牌的海洋，企业精英与街头浪客共存的矛盾之地。",
    fullDescription:
      "市中心是新东京最繁华的核心区域，被五大企业的摩天大楼所统治。霓虹灯永不熄灭，全息广告铺天盖地。这里是财富与权力的象征，但在光鲜的表面之下，黑市交易、企业间谍战和街头犯罪从未停止。夜晚降临时，这里既是精英们狂欢的天堂，也是边缘人谋生的战场。",
    image: "/cyberpunk-downtown-neon-skyscrapers-night.jpg",
    icon: Building2,
    position: { top: "20%", left: "45%" },
    population: "2,450,000",
    controlledBy: "阿拉萨卡集团",
    founded: "2048",
    avgIncome: "¢85,000/年",
    crimeRate: "中等",
    landmarks: [
      {
        name: "阿拉萨卡大厦",
        type: "企业总部",
        icon: Building2,
        description: "全球最大企业的亚洲总部，高达200层",
        image: "/cyberpunk-downtown-neon-skyscrapers-night.jpg",
        fullDescription:
          "阿拉萨卡大厦是新东京最高的建筑，共200层，高度达到1200米。大厦采用最先进的防御系统，配备私人武装部队和AI安保网络。顶层是阿拉萨卡家族的私人住所，普通员工甚至无法进入100层以上的区域。大厦地下延伸50层，据传藏有公司最核心的机密和服务器群。",
        stats: { height: "1200米", floors: "200层", employees: "15,000+", security: "AAA级" },
      },
      {
        name: "霓虹广场",
        type: "商业中心",
        icon: Store,
        description: "24小时不夜城，新东京最大的购物娱乐综合体",
        image: "/cyberpunk-neon-city-skyline-at-night-with-holograp.jpg",
        fullDescription:
          "霓虹广场是新东京最繁华的商业区，汇集了超过3000家商铺、500家餐厅和200家娱乐场所。巨型全息广告牌日夜不息，五彩霓虹将夜空染成白昼。这里是潮流文化的发源地，也是地下交易的温床。",
        stats: { area: "50万平方米", shops: "3000+", visitors: "日均50万", revenue: "¢2亿/日" },
      },
      {
        name: "中央医疗塔",
        type: "医疗设施",
        icon: Heart,
        description: "全球最先进的义体手术中心",
        image: "/cyberpunk-neural-interface-device-with-cyan-glow.jpg",
        fullDescription:
          "中央医疗塔是全球最顶尖的义体改造和医疗研究中心。这里拥有最先进的手术室和康复设施，能够进行从基础植入到全身义体化的各类手术。当然，服务价格也是天文数字。",
        stats: { beds: "5000张", surgeries: "日均200台", successRate: "99.7%", waitTime: "3-6个月" },
      },
      {
        name: "企业法庭",
        type: "司法机构",
        icon: Shield,
        description: "处理企业纠纷的最高仲裁机构",
        image: "/cyberpunk-city-hero-bg.jpg",
        fullDescription:
          "企业法庭是五大企业共同建立的仲裁机构，处理企业间的商业纠纷和法律案件。这里的判决具有最高效力，甚至凌驾于政府法院之上。法官由各企业轮流提名，案件审理往往涉及天文数字的利益。",
        stats: { cases: "年均2000件", judges: "15名", avgSettlement: "¢5000万", appealRate: "12%" },
      },
      {
        name: "信息交易所",
        type: "金融中心",
        icon: Database,
        description: "亚太地区最大的数据交易市场",
        image: "/futuristic-data-center-with-glowing-servers-and-bl.jpg",
        fullDescription:
          "信息交易所是合法数据交易的中心，每天处理PB级别的数据买卖。从消费者行为数据到企业情报，一切信息都有价格。当然，最有价值的情报往往不会出现在官方交易平台上。",
        stats: { dailyVolume: "500PB", transactions: "日均100万笔", marketCap: "¢万亿级", regulation: "企业联盟监管" },
      },
    ],
    residents: [
      { name: "企业员工", percentage: 45, description: "在各大企业工作的白领阶层" },
      { name: "服务业从业者", percentage: 30, description: "餐饮、零售、娱乐等行业工作者" },
      { name: "自由职业者", percentage: 15, description: "独立技术顾问、设计师等" },
      { name: "其他", percentage: 10, description: "游客、临时居民等" },
    ],
    gallery: [
      { src: "/cyberpunk-downtown-neon-skyscrapers-night.jpg", caption: "市中心夜景" },
      { src: "/cyberpunk-neon-city-skyline-at-night-with-holograp.jpg", caption: "城市天际线" },
      { src: "/cyberpunk-city-hero-bg.jpg", caption: "霓虹街道" },
    ],
  },
  {
    id: "industrial",
    name: "工业区",
    nameEn: "INDUSTRIAL ZONE",
    safetyRating: "较低",
    description: "废弃工厂与地下工坊的集中地，这里是蓝领工人和边缘群体的家园。",
    fullDescription:
      "曾经是新东京制造业的心脏，如今大部分工厂已被自动化取代或彻底废弃。这片钢铁丛林成为了低收入群体和地下经济的中心。空气中弥漫着工业废气和机油的味道，但对于那些无法负担市中心生活成本的人来说，这里是为数不多的选择。",
    image: "/cyberpunk-industrial-factories-smoke-dark.jpg",
    icon: Warehouse,
    position: { top: "50%", left: "20%" },
    population: "380,000",
    controlledBy: "多方势力",
    founded: "2035",
    avgIncome: "¢22,000/年",
    crimeRate: "高",
    landmarks: [
      {
        name: "旧钢铁厂",
        type: "废弃设施",
        icon: Factory,
        description: "曾经的制造业中心，现为临时居所",
        image: "/cyberpunk-industrial-factories-smoke-dark.jpg",
        fullDescription:
          "旧钢铁厂曾是新东京最大的钢铁生产基地，在2055年自动化浪潮中被彻底关闭。如今这片巨大的废墟成为了数千无家可归者的栖身之所，也是各种非法活动的温床。",
        stats: { area: "200万平方米", inhabitants: "约8000人", electricity: "非法接电", water: "污染严重" },
      },
      {
        name: "改装工坊街",
        type: "服务区域",
        icon: CircuitBoard,
        description: "非官方义体维修和改装的聚集地",
        image: "/cyberpunk-neural-interface-device-with-cyan-glow.jpg",
        fullDescription:
          "改装工坊街是黑市义体交易和改装的中心。这里的技师虽然没有官方执照，但技术往往不亚于正规医院，价格却只有十分之一。当然，风险也由顾客自己承担。",
        stats: { shops: "150+家", avgPrice: "官方1/10", successRate: "约85%", warranty: "无" },
      },
      {
        name: "回收市场",
        type: "贸易区",
        icon: Store,
        description: "二手设备和零件的交易市场",
        image: "/cyberpunk-wasteland-desert-ruins-apocalyptic.jpg",
        fullDescription:
          "回收市场是工业区最大的二手交易场所，从废旧机械零件到报废义体，一切都可以在这里找到。精明的买家能用极低的价格淘到宝贝，但也要小心以次充好的骗子。",
        stats: { vendors: "500+", dailyTraffic: "2万人次", topSellers: "机械零件、义体配件", scamRate: "约15%" },
      },
      {
        name: "工人宿舍区",
        type: "居住区",
        icon: Home,
        description: "自动化时代遗留的大型住宅群",
        image: "/cyberpunk-city-wide-bg.jpg",
        fullDescription:
          "工人宿舍区是上世纪为产业工人建造的大型住宅群，如今已严重老化。这里居住着工业区大部分的正式居民，虽然条件简陋，但至少有合法的水电供应。",
        stats: { buildings: "50栋", units: "20000户", avgRent: "¢800/月", condition: "老旧" },
      },
      {
        name: "地下诊所",
        type: "医疗设施",
        icon: Heart,
        description: "为无保险居民提供基本医疗服务",
        image: "/futuristic-data-center-with-glowing-servers-and-bl.jpg",
        fullDescription:
          "地下诊所是工业区居民唯一负担得起的医疗选择。这里的医生大多是被吊销执照的前从业者或自学成才的民间医师，设备简陋但能处理大多数常见疾病和轻伤。",
        stats: { doctors: "12名", dailyPatients: "约200人", avgCost: "¢50-200", equipment: "基础" },
      },
    ],
    residents: [
      { name: "工厂工人", percentage: 35, description: "仍在运作的自动化工厂的维护人员" },
      { name: "技术工匠", percentage: 25, description: "独立的机械师和改装技师" },
      { name: "失业人口", percentage: 25, description: "被自动化取代的前产业工人" },
      { name: "其他", percentage: 15, description: "小商贩、临时工等" },
    ],
    gallery: [
      { src: "/cyberpunk-industrial-factories-smoke-dark.jpg", caption: "工业废墟" },
      { src: "/cyberpunk-wasteland-desert-ruins-apocalyptic.jpg", caption: "废弃厂区" },
      { src: "/futuristic-data-center-with-glowing-servers-and-bl.jpg", caption: "自动化车间" },
    ],
  },
  {
    id: "port",
    name: "港口区",
    nameEn: "PORT DISTRICT",
    safetyRating: "低",
    description: "新东京的贸易门户，合法与非法货物在这里交汇。这是一个充满机遇与风险的地方。",
    fullDescription:
      "新东京港是亚太地区最大的自动化港口，每天处理数万个集装箱。官方贸易与地下经济在这里并存，腐败的官员和走私网络早已形成默契。夜间的港口尤其危险，各方势力在码头上划分着自己的地盘。",
    image: "/cyberpunk-harbor-port-ships-containers-neon.jpg",
    icon: Anchor,
    position: { top: "70%", left: "60%" },
    population: "520,000",
    controlledBy: "港务局/多方势力",
    founded: "2041",
    avgIncome: "¢35,000/年",
    crimeRate: "很高",
    landmarks: [
      {
        name: "自动化码头",
        type: "物流设施",
        icon: Anchor,
        description: "全自动集装箱处理系统",
        image: "/cyberpunk-harbor-port-ships-containers-neon.jpg",
        fullDescription:
          "自动化码头是新东京港的核心，由AI系统控制的机器人完成所有装卸工作。效率极高但也意味着大量码头工人失业。夜间是走私活动的高峰期。",
        stats: { capacity: "日处理5万TEU", automation: "99%", workers: "仅200人", throughput: "亚洲第一" },
      },
      {
        name: "海关大楼",
        type: "政府机构",
        icon: Shield,
        description: "货物检查和关税征收中心",
        image: "/cyberpunk-city-hero-bg.jpg",
        fullDescription:
          "海关大楼负责所有进出口货物的检查和税收。官方宣称检查率达到100%，但实际上大量货物通过贿赂和伪造文件逃过检查。这里是腐败的重灾区。",
        stats: { inspectionRate: "官方100%/实际30%", dailyCargo: "5万TEU", bribeRate: "公开的秘密", staff: "2000人" },
      },
      {
        name: "船员街",
        type: "商业区",
        icon: Store,
        description: "为往来水手服务的娱乐区",
        image: "/cyberpunk-neon-city-skyline-at-night-with-holograp.jpg",
        fullDescription:
          "船员街是港口区最热闹的地方，酒吧、赌场、娱乐场所林立。这里是水手们消磨时间的天堂，也是各种情报交易的场所。",
        stats: { bars: "200+", hotels: "50+", avgSpend: "¢500/晚", crimeRate: "极高" },
      },
      {
        name: "冷藏仓库群",
        type: "仓储设施",
        icon: Database,
        description: "大型冷链物流中心",
        image: "/futuristic-data-center-with-glowing-servers-and-bl.jpg",
        fullDescription:
          "冷藏仓库群是亚洲最大的冷链物流中心，储存着数百万吨的冷冻食品和生物制品。据传某些仓库还存放着更加敏感的货物。",
        stats: { capacity: "500万吨", temperature: "-40°C至4°C", coverage: "亚太地区", secrets: "未知" },
      },
      {
        name: "渔人码头",
        type: "传统区域",
        icon: Users,
        description: "保留传统渔业的小型社区",
        image: "/cyberpunk-city-wide-bg.jpg",
        fullDescription:
          "渔人码头是港口区唯一保留传统渔业的区域。这里的渔民世代以海为生，虽然捕获量已大不如前，但仍坚持着古老的生活方式。这里的海鲜是全城最新鲜的。",
        stats: { fishermen: "约500户", dailyCatch: "10吨", tradition: "超过100年", specialty: "新鲜海产" },
      },
    ],
    residents: [
      { name: "码头工人", percentage: 40, description: "港口运营和物流从业人员" },
      { name: "船员/水手", percentage: 20, description: "往来船只的工作人员" },
      { name: "商人/贸易商", percentage: 20, description: "进出口贸易从业者" },
      { name: "其他", percentage: 20, description: "服务业、渔民等" },
    ],
    gallery: [
      { src: "/cyberpunk-harbor-port-ships-containers-neon.jpg", caption: "港口夜景" },
      { src: "/cyberpunk-city-wide-bg.jpg", caption: "码头区全景" },
      { src: "/cyberpunk-industrial-factories-smoke-dark.jpg", caption: "仓库区" },
    ],
  },
  {
    id: "netrunner",
    name: "数据区",
    nameEn: "DATA DISTRICT",
    safetyRating: "高（物理）/ 危险（数字）",
    description: "新东京的数字心脏，这里是网络基础设施的核心，也是黑客文化的发源地。",
    fullDescription:
      "数据区是新东京网络基础设施的神经中枢，巨大的服务器农场和数据中心占据了整个区域。这里的物理安全等级极高，但在数字空间中却是最危险的战场。世界顶尖的网络安全专家和黑客都聚集于此，进行着无形的攻防战。",
    image: "/cyberpunk-hacker-den-servers-holographic.jpg",
    icon: Cpu,
    position: { top: "35%", left: "75%" },
    population: "85,000",
    controlledBy: "企业联盟/网络安全局",
    founded: "2058",
    avgIncome: "¢120,000/年",
    crimeRate: "低（物理）/ 极高（网络）",
    landmarks: [
      {
        name: "中央数据中心",
        type: "基础设施",
        icon: Database,
        description: "新东京所有网络流量的核心枢纽",
        image: "/futuristic-data-center-with-glowing-servers-and-bl.jpg",
        fullDescription:
          "中央数据中心是新东京的数字心脏，所有网络流量都经过这里。数百万台服务器日夜运转，消耗的电力相当于一个小型城市。这里的安保等级仅次于军事设施。",
        stats: { servers: "500万台", bandwidth: "100Tbps", power: "500MW", security: "军事级" },
      },
      {
        name: "网络安全局",
        type: "政府机构",
        icon: Shield,
        description: "负责监控和防御网络威胁",
        image: "/cyberpunk-hacker-den-servers-holographic.jpg",
        fullDescription:
          "网络安全局是官方的网络执法机构，负责追踪黑客、防御网络攻击、监控可疑通信。但实际上，他们与企业安保部门的界限早已模糊。",
        stats: { agents: "5000+", aiSystems: "50+", coverage: "全城网络", arrests: "年均2000人" },
      },
      {
        name: "量子计算中心",
        type: "研究设施",
        icon: Cpu,
        description: "最先进的量子计算机集群",
        image: "/cyberpunk-neural-interface-device-with-cyan-glow.jpg",
        fullDescription:
          "量子计算中心拥有全球最先进的量子计算机群，主要用于密码学研究和AI开发。这里的计算能力可以在几秒内破解传统加密，因此是各方势力觊觎的目标。",
        stats: { qubits: "10000+", speed: "传统计算机的10亿倍", projects: "机密", access: "最高权限" },
      },
      {
        name: "技术学院",
        type: "教育机构",
        icon: Users,
        description: "培养下一代网络专家",
        image: "/cyberpunk-city-hero-bg.jpg",
        fullDescription:
          "技术学院是新东京最顶尖的IT教育机构，培养网络工程师、安全专家和AI研究员。毕业生几乎都会被五大企业直接录用，但也有少数人选择了另一条道路。",
        stats: { students: "3000", acceptance: "2%", employment: "99%", salary: "¢15万起" },
      },
      {
        name: "黑客咖啡馆",
        type: "社交场所",
        icon: MessageSquare,
        description: "技术人员非正式聚会的地方",
        image: "/cyberpunk-downtown-neon-skyscrapers-night.jpg",
        fullDescription:
          "黑客咖啡馆表面上是一家普通的咖啡馆，实际上是技术圈非正式交流的中心。这里的WiFi是全城最安全的，各种灰色交易也在咖啡香中悄然进行。",
        stats: { capacity: "200人", wifi: "军事级加密", coffee: "合成咖啡因", secrets: "无数" },
      },
    ],
    residents: [
      { name: "网络工程师", percentage: 50, description: "维护城市网络基础设施的专业人员" },
      { name: "安全专家", percentage: 25, description: "企业和政府的网络安全从业者" },
      { name: "独立研究者", percentage: 15, description: "自由职业的技术专家" },
      { name: "其他", percentage: 10, description: "学生、支持人员等" },
    ],
    gallery: [
      { src: "/cyberpunk-hacker-den-servers-holographic.jpg", caption: "服务器机房" },
      { src: "/cyberpunk-neural-interface-device-with-cyan-glow.jpg", caption: "神经接口设备" },
      { src: "/futuristic-data-center-with-glowing-servers-and-bl.jpg", caption: "数据中心" },
    ],
  },
  {
    id: "badlands",
    name: "荒地",
    nameEn: "THE BADLANDS",
    safetyRating: "极低",
    description: "城市边缘的无人管辖区，这里生活着拒绝城市体制的人们和被社会遗弃者。",
    fullDescription:
      "城墙之外是一片被环境灾难和工业污染蹂躏的荒芜之地。这里没有企业控制，没有城市服务，只有自给自足的社区和游牧部落。对于厌倦了城市压迫的人来说，荒地代表着最后的自由——尽管这种自由的代价是极端恶劣的生存条件。",
    image: "/cyberpunk-wasteland-desert-ruins-apocalyptic.jpg",
    icon: Skull,
    position: { top: "60%", left: "85%" },
    population: "约50,000",
    controlledBy: "无政府状态",
    founded: "N/A",
    avgIncome: "以物易物经济",
    crimeRate: "无法统计",
    landmarks: [
      {
        name: "流浪者集市",
        type: "贸易点",
        icon: Store,
        description: "荒野中最大的物资交换场所",
        image: "/cyberpunk-wasteland-desert-ruins-apocalyptic.jpg",
        fullDescription:
          "流浪者集市是荒地中最重要的贸易场所，每周举行一次。游牧民们从四面八方赶来，交换物资、情报和故事。这里没有货币，一切以物易物。",
        stats: { frequency: "每周一次", vendors: "200-500", goods: "生存物资为主", currency: "以物易物" },
      },
      {
        name: "游牧民营地",
        type: "聚落",
        icon: Users,
        description: "自由游牧部落的临时定居点",
        image: "/cyberpunk-city-wide-bg.jpg",
        fullDescription:
          "游牧民营地是荒地中最大的定居点，由数个游牧部落联合建立。这里有基本的医疗、教育和防御设施，是荒地中难得的安全港。",
        stats: { population: "约5000", tribes: "12个", defense: "民兵自卫", governance: "部落议会" },
      },
      {
        name: "风力发电场",
        type: "能源设施",
        icon: Zap,
        description: "为荒地社区提供电力的独立设施",
        image: "/cyberpunk-industrial-factories-smoke-dark.jpg",
        fullDescription:
          "风力发电场是荒地社区最重要的基础设施，由技术难民建造和维护。虽然发电量有限，但足以支持基本的照明、通信和医疗设备。",
        stats: { turbines: "50台", output: "5MW", coverage: "方圆50公里", maintenance: "社区志愿者" },
      },
      {
        name: "废弃军事基地",
        type: "遗迹",
        icon: Shield,
        description: "战前遗留的军事设施",
        image: "/cyberpunk-hacker-den-servers-holographic.jpg",
        fullDescription:
          "废弃军事基地是战前政府遗留的设施，大部分已被洗劫一空，但仍有探险者不断深入寻找遗落的军事科技。据说地下掩体中还藏着不少秘密。",
        stats: { area: "10平方公里", exploration: "危险", loot: "军事装备", radiation: "轻度污染" },
      },
      {
        name: "净水站",
        type: "生存设施",
        icon: Heart,
        description: "处理受污染水源的关键设施",
        image: "/futuristic-data-center-with-glowing-servers-and-bl.jpg",
        fullDescription:
          "净水站是荒地社区生存的命脉，将受污染的地下水处理成可饮用水。设备老旧经常故障，但维护人员总能想办法让它继续运转。",
        stats: { capacity: "日处理100吨", purity: "基本达标", users: "约2万人", age: "30年" },
      },
    ],
    residents: [
      { name: "游牧民", percentage: 40, description: "选择自由生活方式的流浪者" },
      { name: "逃离者", percentage: 30, description: "因各种原因离开城市的人" },
      { name: "原住民", percentage: 20, description: "从未进入城市体系的边缘群体" },
      { name: "其他", percentage: 10, description: "探险者、研究者等" },
    ],
    gallery: [
      { src: "/cyberpunk-wasteland-desert-ruins-apocalyptic.jpg", caption: "荒野景观" },
      { src: "/cyberpunk-industrial-factories-smoke-dark.jpg", caption: "废弃建筑" },
      { src: "/cyberpunk-city-wide-bg.jpg", caption: "远眺城市" },
    ],
  },
  {
    id: "skyway",
    name: "天际走廊",
    nameEn: "SKYWAY",
    safetyRating: "极高",
    description: "悬浮于城市上空的精英区域，这里是新东京最富有的0.1%人口的专属领地。",
    fullDescription:
      "天际走廊是新东京最令人惊叹的工程奇迹——一个悬浮在城市上空500米的人工岛链。这里是亿万富翁和企业高管的专属领地，空气清新，阳光充足，与下方污浊的城市形成鲜明对比。普通人几乎没有机会进入这个云端的乌托邦。",
    image: "/cyberpunk-neon-city-skyline-at-night-with-holograp.jpg",
    icon: Plane,
    position: { top: "15%", left: "70%" },
    population: "25,000",
    controlledBy: "天际理事会",
    founded: "2065",
    avgIncome: "¢2,500,000/年",
    crimeRate: "几乎为零",
    landmarks: [
      {
        name: "空中花园",
        type: "休闲设施",
        icon: Sparkles,
        description: "占地50公顷的悬浮植物园",
        image: "/cyberpunk-neon-city-skyline-at-night-with-holograp.jpg",
        fullDescription:
          "空中花园是天际走廊最美丽的地方，收集了全球各地的珍稀植物。这里的空气是人工净化的，阳光是经过滤镜调节的，一切都是完美的。",
        stats: { area: "50公顷", species: "10000+", airQuality: "完美", access: "居民专属" },
      },
      {
        name: "高速穿梭站",
        type: "交通枢纽",
        icon: Train,
        description: "连接各平台的磁悬浮系统",
        image: "/cyberpunk-downtown-neon-skyscrapers-night.jpg",
        fullDescription:
          "高速穿梭站是天际走廊的交通中心，磁悬浮列车以500公里/小时的速度连接各个浮空平台。下行电梯可直达地面，但需要特殊许可。",
        stats: { speed: "500km/h", lines: "12条", frequency: "3分钟", access: "居民/访客" },
      },
      {
        name: "云端俱乐部",
        type: "社交场所",
        icon: Users,
        description: "只接待会员的顶级社交俱乐部",
        image: "/cyberpunk-city-hero-bg.jpg",
        fullDescription:
          "云端俱乐部是新东京最exclusive的社交场所，会员资格需要推荐和严格审核。这里是精英们交流情报、达成交易的秘密场所。",
        stats: { members: "仅500人", fee: "¢100万/年", events: "每周", secrets: "无数" },
      },
      {
        name: "私人医疗中心",
        type: "医疗设施",
        icon: Heart,
        description: "提供延寿和基因优化服务",
        image: "/cyberpunk-neural-interface-device-with-cyan-glow.jpg",
        fullDescription:
          "私人医疗中心提供地面无法想象的医疗服务——延缓衰老、基因优化、器官克隆。据说最顶级的客户可以获得近乎永生的治疗。",
        stats: { lifeExtension: "额外50-100年", geneMod: "定制服务", organClone: "2周", cost: "¢千万级" },
      },
      {
        name: "艺术博物馆",
        type: "文化设施",
        icon: Eye,
        description: "收藏着世界顶级艺术品",
        image: "/cyberpunk-hacker-den-servers-holographic.jpg",
        fullDescription:
          "艺术博物馆收藏了人类历史上最珍贵的艺术品，从达芬奇到最新的AI艺术。这里的藏品价值无法估量，安保系统是全球最先进的。",
        stats: { collections: "50000+件", value: "无法估量", oldest: "5000年", security: "量子加密" },
      },
    ],
    residents: [
      { name: "企业高管", percentage: 45, description: "五大企业的高层管理人员" },
      { name: "继承人/富豪", percentage: 30, description: "世袭财富的拥有者" },
      { name: "顶级专业人士", percentage: 15, description: "著名医生、律师、艺术家" },
      { name: "服务人员", percentage: 10, description: "为富人提供服务的精选员工" },
    ],
    gallery: [
      { src: "/cyberpunk-neon-city-skyline-at-night-with-holograp.jpg", caption: "天际走廊全景" },
      { src: "/cyberpunk-downtown-neon-skyscrapers-night.jpg", caption: "俯瞰城市" },
      { src: "/cyberpunk-city-hero-bg.jpg", caption: "云端建筑" },
    ],
  },
  {
    id: "underground",
    name: "地下城",
    nameEn: "THE UNDERGROUND",
    safetyRating: "低",
    description: "城市地表之下的黑暗世界，这里生活着被主流社会遗忘的人们。",
    fullDescription:
      "在新东京光鲜亮丽的街道之下，存在着另一个完整的世界。废弃的地铁隧道、战前的防空洞和秘密地下设施构成了一个庞大的地下网络。数十万失去公民身份的人在这里生活，形成了自己独特的社会结构和经济体系。",
    image: "/futuristic-data-center-with-glowing-servers-and-bl.jpg",
    icon: Map,
    position: { top: "55%", left: "45%" },
    population: "约300,000",
    controlledBy: "地下议会",
    founded: "2039",
    avgIncome: "非正式经济",
    crimeRate: "中等（内部自治）",
    landmarks: [
      {
        name: "旧地铁网络",
        type: "交通通道",
        icon: Train,
        description: "连接各地下区域的隧道系统",
        image: "/futuristic-data-center-with-glowing-servers-and-bl.jpg",
        fullDescription:
          "旧地铁网络是战前建造的地铁系统，在新系统建成后被废弃。如今这些隧道成为了地下城的主要通道，连接着各个社区。",
        stats: { length: "500公里", stations: "100+", trains: "改装手推车", danger: "中等" },
      },
      {
        name: "地下市场",
        type: "贸易中心",
        icon: Store,
        description: "不受监管的商品交易场所",
        image: "/cyberpunk-hacker-den-servers-holographic.jpg",
        fullDescription:
          "地下市场是黑市经济的中心，这里可以买到地面上买不到的一切——违禁药品、非法武器、被盗数据、假证件。只要有钱，没有买不到的东西。",
        stats: { vendors: "1000+", goods: "一切", currency: "加密货币", law: "无" },
      },
      {
        name: "避难所",
        type: "居住区",
        icon: Home,
        description: "为无家可归者提供的临时住所",
        image: "/cyberpunk-industrial-factories-smoke-dark.jpg",
        fullDescription:
          "避难所是地下城中最大的收容设施，为失去一切的人提供基本的食宿。这里由志愿者运营，资源紧张但从不拒绝任何人。",
        stats: { beds: "5000张", meals: "日均1万份", volunteers: "200人", funding: "捐赠" },
      },
      {
        name: "黑诊所",
        type: "医疗设施",
        icon: Heart,
        description: "非官方的医疗服务提供者",
        image: "/cyberpunk-neural-interface-device-with-cyan-glow.jpg",
        fullDescription:
          "黑诊所是地下城居民唯一的医疗选择，提供从基本治疗到非法手术的各种服务。医生的技术参差不齐，但至少不会问太多问题。",
        stats: { clinics: "50+", services: "全面", license: "无", discretion: "绝对" },
      },
      {
        name: "议会厅",
        type: "行政中心",
        icon: Users,
        description: "地下社区的自治管理机构",
        image: "/cyberpunk-city-hero-bg.jpg",
        fullDescription:
          "议会厅是地下城的政治中心，由各区域代表组成的议会在这里讨论公共事务、调解纠纷、分配资源。这是一个粗糙但有效的自治体系。",
        stats: { representatives: "50人", meetings: "每周", issues: "资源分配/纠纷调解", authority: "有限但受尊重" },
      },
    ],
    residents: [
      { name: "无证居民", percentage: 50, description: "失去或从未拥有公民身份的人" },
      { name: "逃避者", percentage: 25, description: "因各种原因需要隐藏身份的人" },
      { name: "地下商人", percentage: 15, description: "经营非正式经济的人" },
      { name: "其他", percentage: 10, description: "探险者、研究者等" },
    ],
    gallery: [
      { src: "/futuristic-data-center-with-glowing-servers-and-bl.jpg", caption: "地下通道" },
      { src: "/cyberpunk-hacker-den-servers-holographic.jpg", caption: "地下市场" },
      { src: "/cyberpunk-industrial-factories-smoke-dark.jpg", caption: "废弃隧道" },
    ],
  },
  {
    id: "corpo_plaza",
    name: "企业广场",
    nameEn: "CORPO PLAZA",
    safetyRating: "高",
    description: "五大企业总部所在地，这里是新东京真正的权力中心。",
    fullDescription:
      "企业广场是新东京的政治和经济中心。五大巨型企业的总部大楼在这里拔地而起，形成了一个企业帝国的圣殿。这里的安保等级极高，街道一尘不染，但在光鲜的外表下，企业之间的权力斗争从未停止。",
    image: "/cyberpunk-downtown-neon-skyscrapers-night.jpg",
    icon: Building2,
    position: { top: "30%", left: "30%" },
    population: "180,000",
    controlledBy: "企业联盟",
    founded: "2050",
    avgIncome: "¢150,000/年",
    crimeRate: "低（白领犯罪除外）",
    landmarks: [
      {
        name: "阿拉萨卡塔",
        type: "企业总部",
        icon: Building2,
        description: "阿拉萨卡集团全球总部",
        image: "/cyberpunk-downtown-neon-skyscrapers-night.jpg",
        fullDescription:
          "阿拉萨卡塔是阿拉萨卡集团的全球总部，也是企业广场最高的建筑。这座大楼象征着企业的绝对权力，内部设施堪比一座小型城市。",
        stats: { height: "800米", employees: "20000", security: "私人军队", influence: "全球" },
      },
      {
        name: "军科大厦",
        type: "企业总部",
        icon: Shield,
        description: "军事科技巨头的指挥中心",
        image: "/cyberpunk-city-hero-bg.jpg",
        fullDescription:
          "军科大厦是全球最大军工企业的总部，研发和销售着从单兵武器到轨道武器的一切军事装备。据说大楼本身就是一座堡垒。",
        stats: { products: "军事装备", clients: "政府/企业", revenue: "¢万亿级", secrets: "绝密" },
      },
      {
        name: "企业联盟议事厅",
        type: "行政中心",
        icon: Users,
        description: "五大企业协调决策的场所",
        image: "/cyberpunk-neon-city-skyline-at-night-with-holograp.jpg",
        fullDescription:
          "企业联盟议事厅是五大企业CEO定期会面的场所，新东京最重要的决策都在这里做出。政府官员只能在门外等候结果。",
        stats: { meetings: "月度", attendees: "五大CEO", topics: "城市治理", power: "最高" },
      },
      {
        name: "全球证券交易所",
        type: "金融中心",
        icon: TrendingUp,
        description: "亚太地区最大的金融市场",
        image: "/futuristic-data-center-with-glowing-servers-and-bl.jpg",
        fullDescription:
          "全球证券交易所是亚太地区金融的心脏，每天交易额以万亿计。这里的波动可以影响整个地区的经济命脉。",
        stats: { dailyVolume: "¢5万亿", listings: "10000+", traders: "AI为主", impact: "全球性" },
      },
      {
        name: "媒体中心",
        type: "传播机构",
        icon: Newspaper,
        description: "控制城市信息流的核心设施",
        image: "/cyberpunk-hacker-den-servers-holographic.jpg",
        fullDescription: "媒体中心是新东京所有主流媒体的总部，控制着城市90%的信息传播。真相在这里被筛选、包装和发布。",
        stats: { channels: "500+", reach: "90%人口", owner: "企业联盟", freedom: "有限" },
      },
    ],
    residents: [
      { name: "企业高管", percentage: 35, description: "中高层管理人员" },
      { name: "专业人士", percentage: 35, description: "律师、会计师、分析师等" },
      { name: "安保人员", percentage: 20, description: "企业私人安保力量" },
      { name: "其他", percentage: 10, description: "服务人员、访客等" },
    ],
    gallery: [
      { src: "/cyberpunk-downtown-neon-skyscrapers-night.jpg", caption: "企业大厦" },
      { src: "/cyberpunk-neon-city-skyline-at-night-with-holograp.jpg", caption: "广场夜景" },
      { src: "/cyberpunk-city-hero-bg.jpg", caption: "街道景观" },
    ],
  },
]

const newsEvents = [
  {
    id: 1,
    title: "阿拉萨卡数据泄露事件",
    titleEn: "ARASAKA DATA BREACH",
    district: "downtown",
    category: "企业丑闻",
    date: "2077.12.25",
    summary: "据内部人士透露，阿拉萨卡集团遭遇重大数据泄露，数百万用户信息可能已被窃取。",
    status: "调查中",
  },
  {
    id: 2,
    title: "工业区工人罢工持续",
    titleEn: "INDUSTRIAL STRIKE CONTINUES",
    district: "industrial",
    category: "社会事件",
    date: "2077.12.24",
    summary: "工业区自动化工厂工人罢工进入第三天，要求提高工资和改善工作条件。",
    status: "进行中",
  },
  {
    id: 3,
    title: "港口走私网络被破获",
    titleEn: "SMUGGLING RING BUSTED",
    district: "port",
    category: "犯罪新闻",
    date: "2077.12.23",
    summary: "新东京警视厅联合企业安保力量破获一起大型走私案，查获大量违禁义体。",
    status: "已结案",
  },
  {
    id: 4,
    title: "天际走廊新区开放申请",
    titleEn: "SKYWAY EXPANSION",
    district: "skyway",
    category: "城市发展",
    date: "2077.12.22",
    summary: "天际理事会宣布新建浮空平台即将完工，开放新一批入住申请。入住资格审核严格。",
    status: "报名中",
  },
  {
    id: 5,
    title: "地下城医疗危机",
    titleEn: "UNDERGROUND HEALTH CRISIS",
    district: "underground",
    category: "公共卫生",
    date: "2077.12.21",
    summary: "地下城报告多例不明疾病，卫生部门呼吁居民注意防护。非官方诊所承受巨大压力。",
    status: "紧急",
  },
  {
    id: 6,
    title: "企业广场峰会召开",
    titleEn: "CORPO SUMMIT",
    district: "corpo_plaza",
    category: "政商要闻",
    date: "2077.12.20",
    summary: "五大企业CEO齐聚企业联盟议事厅，讨论新东京未来十年发展规划。",
    status: "进行中",
  },
]

const cityArchives = [
  {
    id: 1,
    title: "新东京的崛起",
    year: "2045",
    content: "第三次企业战争结束后，新东京从废墟中重建。五大巨型企业瓜分了城市的控制权，传统政府沦为傀儡机构。",
    source: "新东京历史档案馆",
  },
  {
    id: 2,
    title: "神经链接革命",
    year: "2052",
    content: "第一代民用神经植入体问世，人类与机器的界限开始模糊。但高昂的价格让增强技术成为富人的特权。",
    source: "科技发展白皮书",
  },
  {
    id: 3,
    title: "大停电事件",
    year: "2061",
    content: "一场至今原因不明的网络攻击导致全城断电72小时，数千人因植入体故障死亡。官方调查报告从未公布。",
    source: "独立调查报告",
  },
  {
    id: 4,
    title: "天际走廊落成",
    year: "2065",
    content: "反重力技术的突破使悬浮城区成为现实。富人们彻底脱离了地面污染，在云端建立了自己的乌托邦。",
    source: "城市建设档案",
  },
  {
    id: 5,
    title: "地下城起义",
    year: "2071",
    content: "被剥夺公民身份的数万人发动武装抗议，最终遭到企业安保力量的血腥镇压。此后地下城成为反抗的象征。",
    source: "民间记录",
  },
  {
    id: 6,
    title: "现状",
    year: "2077",
    content: "新东京进入所谓的黄金时代，但贫富差距持续扩大，社会矛盾日益尖锐。变革的种子正在萌芽。",
    source: "时事分析",
  },
]

export default function ExplorePage() {
  const [selectedDistrict, setSelectedDistrict] = useState<(typeof cityDistricts)[0] | null>(null)
  const [scanProgress, setScanProgress] = useState(0)
  const [showDistrictDetail, setShowDistrictDetail] = useState(false)
  const [detailTab, setDetailTab] = useState<"overview" | "landmarks" | "demographics" | "gallery">("overview")
  const [selectedLandmark, setSelectedLandmark] = useState<(typeof cityDistricts)[0]["landmarks"][0] | null>(null)

  // 扫描动画
  useEffect(() => {
    const interval = setInterval(() => {
      setScanProgress((prev) => (prev >= 100 ? 0 : prev + 1))
    }, 50)
    return () => clearInterval(interval)
  }, [])

  const getSafetyColor = (rating: string) => {
    if (rating.includes("极高") || rating.includes("高")) return "text-green-400"
    if (rating.includes("中等")) return "text-yellow-400"
    if (rating.includes("低")) return "text-orange-500"
    if (rating.includes("极低")) return "text-red-500"
    return "text-muted-foreground"
  }

  const handleViewDistrict = (district: (typeof cityDistricts)[0]) => {
    setSelectedDistrict(district)
    setShowDistrictDetail(true)
    setDetailTab("overview")
    setSelectedLandmark(null)
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="pointer-events-none fixed inset-0 z-50 bg-scanlines opacity-20" />

      {/* 区域详情弹窗 */}
      {showDistrictDetail && selectedDistrict && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-background/90 backdrop-blur-sm">
          <div className="relative w-full max-w-6xl max-h-[90vh] overflow-hidden rounded-lg border border-neon-cyan/50 bg-card shadow-[0_0_50px_rgba(0,255,255,0.2)]">
            <div className="absolute inset-0 bg-scanlines opacity-10 pointer-events-none" />

            <button
              onClick={() => {
                if (selectedLandmark) {
                  setSelectedLandmark(null)
                } else {
                  setShowDistrictDetail(false)
                }
              }}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-neon-cyan bg-background/80 text-neon-cyan hover:bg-neon-cyan hover:text-background transition-all"
            >
              <X className="h-5 w-5" />
            </button>

            {selectedLandmark ? (
              <>
                {/* 地标头部 */}
                <div className="relative h-48 md:h-72">
                  <Image
                    src={selectedLandmark.image || selectedDistrict.image || "/placeholder.svg"}
                    alt={selectedLandmark.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
                  <div className="absolute inset-0 bg-scanlines opacity-20 pointer-events-none" />

                  {/* 返回按钮 */}
                  <button
                    onClick={() => setSelectedLandmark(null)}
                    className="absolute left-4 top-4 flex items-center gap-2 px-3 py-2 rounded-lg border border-neon-cyan/50 bg-background/80 text-neon-cyan hover:bg-neon-cyan/20 transition-all"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    <span className="font-mono text-sm">返回 {selectedDistrict.name}</span>
                  </button>

                  <div className="absolute bottom-4 left-6 right-6">
                    <div className="flex items-center gap-3">
                      <div className="flex h-16 w-16 items-center justify-center rounded-lg border border-neon-cyan bg-neon-cyan/20 shadow-[0_0_20px_rgba(0,255,255,0.3)]">
                        {selectedLandmark.icon && <selectedLandmark.icon className="h-8 w-8 text-neon-cyan" />}
                      </div>
                      <div>
                        <p className="font-mono text-xs text-neon-magenta mb-1">{selectedLandmark.type}</p>
                        <h2 className="font-mono text-2xl md:text-3xl font-bold text-foreground text-glow-cyan">
                          {selectedLandmark.name}
                        </h2>
                        <div className="flex items-center gap-2 mt-1">
                          <MapPin className="h-3 w-3 text-muted-foreground" />
                          <span className="font-mono text-xs text-muted-foreground">
                            {selectedDistrict.name} · {selectedDistrict.nameEn}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 地标内容 */}
                <div className="p-6 max-h-[50vh] overflow-y-auto">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* 左侧：描述 */}
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-mono text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                          <FileText className="h-4 w-4 text-neon-cyan" />
                          详细介绍
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {selectedLandmark.fullDescription || selectedLandmark.description}
                        </p>
                      </div>

                      {/* 图片画廊 */}
                      <div>
                        <h3 className="font-mono text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                          <Eye className="h-4 w-4 text-neon-cyan" />
                          影像资料
                        </h3>
                        <div className="relative aspect-video rounded-lg overflow-hidden border border-neon-cyan/30 group">
                          <Image
                            src={selectedLandmark.image || "/placeholder.svg"}
                            alt={selectedLandmark.name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-scanlines opacity-20 pointer-events-none" />
                          <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-background/80 to-transparent">
                            <p className="text-sm font-mono text-neon-cyan">{selectedLandmark.name} 实景</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 右侧：数据 */}
                    <div className="space-y-4">
                      <h3 className="font-mono text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                        <Database className="h-4 w-4 text-neon-cyan" />
                        设施数据
                      </h3>

                      {selectedLandmark.stats ? (
                        <div className="grid grid-cols-2 gap-3">
                          {Object.entries(selectedLandmark.stats).map(([key, value]) => (
                            <div
                              key={key}
                              className="border border-border bg-card/50 p-3 rounded-lg hover:border-neon-cyan/30 transition-colors"
                            >
                              <p className="text-xs text-muted-foreground font-mono uppercase mb-1">
                                {key === "height" && "高度"}
                                {key === "floors" && "楼层"}
                                {key === "employees" && "员工数"}
                                {key === "security" && "安保等级"}
                                {key === "area" && "面积"}
                                {key === "shops" && "商铺数"}
                                {key === "visitors" && "日均客流"}
                                {key === "revenue" && "日营收"}
                                {key === "beds" && "床位"}
                                {key === "surgeries" && "日手术量"}
                                {key === "successRate" && "成功率"}
                                {key === "waitTime" && "等待时间"}
                                {key === "cases" && "年案件量"}
                                {key === "judges" && "法官数"}
                                {key === "avgSettlement" && "平均赔付"}
                                {key === "appealRate" && "上诉率"}
                                {key === "dailyVolume" && "日交易量"}
                                {key === "transactions" && "日交易笔数"}
                                {key === "marketCap" && "市值"}
                                {key === "regulation" && "监管方"}
                                {key === "inhabitants" && "居住人口"}
                                {key === "electricity" && "供电"}
                                {key === "water" && "供水"}
                                {key === "avgPrice" && "价格水平"}
                                {key === "warranty" && "保修"}
                                {key === "vendors" && "商户数"}
                                {key === "dailyTraffic" && "日客流"}
                                {key === "topSellers" && "热销品类"}
                                {key === "scamRate" && "欺诈率"}
                                {key === "buildings" && "楼栋数"}
                                {key === "units" && "住户数"}
                                {key === "avgRent" && "平均租金"}
                                {key === "condition" && "状况"}
                                {key === "doctors" && "医生数"}
                                {key === "dailyPatients" && "日接诊量"}
                                {key === "avgCost" && "平均费用"}
                                {key === "equipment" && "设备水平"}
                                {key === "capacity" && "容量"}
                                {key === "automation" && "自动化率"}
                                {key === "workers" && "工人数"}
                                {key === "throughput" && "吞吐量"}
                                {key === "inspectionRate" && "检查率"}
                                {key === "dailyCargo" && "日货量"}
                                {key === "bribeRate" && "贿赂情况"}
                                {key === "staff" && "员工"}
                                {key === "bars" && "酒吧数"}
                                {key === "hotels" && "酒店数"}
                                {key === "avgSpend" && "人均消费"}
                                {key === "crimeRate" && "犯罪率"}
                                {key === "temperature" && "温度范围"}
                                {key === "coverage" && "覆盖范围"}
                                {key === "secrets" && "秘密"}
                                {key === "fishermen" && "渔民数"}
                                {key === "dailyCatch" && "日捕获量"}
                                {key === "tradition" && "传统历史"}
                                {key === "specialty" && "特产"}
                                {key === "servers" && "服务器数"}
                                {key === "bandwidth" && "带宽"}
                                {key === "power" && "功耗"}
                                {key === "agents" && "探员数"}
                                {key === "aiSystems" && "AI系统"}
                                {key === "arrests" && "年逮捕数"}
                                {key === "qubits" && "量子位"}
                                {key === "speed" && "运算速度"}
                                {key === "projects" && "项目"}
                                {key === "access" && "访问权限"}
                                {key === "students" && "学生数"}
                                {key === "acceptance" && "录取率"}
                                {key === "employment" && "就业率"}
                                {key === "salary" && "起薪"}
                                {key === "wifi" && "WiFi"}
                                {key === "coffee" && "咖啡"}
                                {key === "frequency" && "频率"}
                                {key === "goods" && "商品"}
                                {key === "currency" && "货币"}
                                {key === "population" && "人口"}
                                {key === "tribes" && "部落数"}
                                {key === "defense" && "防御"}
                                {key === "governance" && "治理"}
                                {key === "turbines" && "风机数"}
                                {key === "output" && "输出功率"}
                                {key === "maintenance" && "维护"}
                                {key === "exploration" && "探索"}
                                {key === "loot" && "战利品"}
                                {key === "radiation" && "辐射"}
                                {key === "purity" && "纯度"}
                                {key === "users" && "用户数"}
                                {key === "age" && "使用年限"}
                                {key === "species" && "物种数"}
                                {key === "airQuality" && "空气质量"}
                                {key === "lines" && "线路数"}
                                {key === "members" && "会员数"}
                                {key === "fee" && "年费"}
                                {key === "events" && "活动"}
                                {key === "lifeExtension" && "延寿"}
                                {key === "geneMod" && "基因改造"}
                                {key === "organClone" && "器官克隆"}
                                {key === "cost" && "费用"}
                                {key === "collections" && "藏品数"}
                                {key === "value" && "价值"}
                                {key === "oldest" && "最古老藏品"}
                                {key === "influence" && "影响力"}
                                {key === "products" && "产品"}
                                {key === "clients" && "客户"}
                                {key === "meetings" && "会议"}
                                {key === "attendees" && "参会者"}
                                {key === "topics" && "议题"}
                                {key === "listings" && "上市公司"}
                                {key === "traders" && "交易员"}
                                {key === "impact" && "影响"}
                                {key === "channels" && "频道数"}
                                {key === "reach" && "覆盖率"}
                                {key === "owner" && "所有者"}
                                {key === "freedom" && "自由度"}
                                {key === "length" && "长度"}
                                {key === "stations" && "站点数"}
                                {key === "trains" && "列车"}
                                {key === "danger" && "危险程度"}
                                {key === "law" && "法律"}
                                {key === "meals" && "日供餐"}
                                {key === "volunteers" && "志愿者"}
                                {key === "funding" && "资金来源"}
                                {key === "clinics" && "诊所数"}
                                {key === "services" && "服务"}
                                {key === "license" && "执照"}
                                {key === "discretion" && "保密性"}
                                {key === "representatives" && "代表数"}
                                {key === "issues" && "议题"}
                                {key === "authority" && "权威性"}
                                {![
                                  "height",
                                  "floors",
                                  "employees",
                                  "security",
                                  "area",
                                  "shops",
                                  "visitors",
                                  "revenue",
                                  "beds",
                                  "surgeries",
                                  "successRate",
                                  "waitTime",
                                  "cases",
                                  "judges",
                                  "avgSettlement",
                                  "appealRate",
                                  "dailyVolume",
                                  "transactions",
                                  "marketCap",
                                  "regulation",
                                  "inhabitants",
                                  "electricity",
                                  "water",
                                  "avgPrice",
                                  "warranty",
                                  "vendors",
                                  "dailyTraffic",
                                  "topSellers",
                                  "scamRate",
                                  "buildings",
                                  "units",
                                  "avgRent",
                                  "condition",
                                  "doctors",
                                  "dailyPatients",
                                  "avgCost",
                                  "equipment",
                                  "capacity",
                                  "automation",
                                  "workers",
                                  "throughput",
                                  "inspectionRate",
                                  "dailyCargo",
                                  "bribeRate",
                                  "staff",
                                  "bars",
                                  "hotels",
                                  "avgSpend",
                                  "crimeRate",
                                  "temperature",
                                  "coverage",
                                  "secrets",
                                  "fishermen",
                                  "dailyCatch",
                                  "tradition",
                                  "specialty",
                                  "servers",
                                  "bandwidth",
                                  "power",
                                  "agents",
                                  "aiSystems",
                                  "arrests",
                                  "qubits",
                                  "speed",
                                  "projects",
                                  "access",
                                  "students",
                                  "acceptance",
                                  "employment",
                                  "salary",
                                  "wifi",
                                  "coffee",
                                  "frequency",
                                  "goods",
                                  "currency",
                                  "population",
                                  "tribes",
                                  "defense",
                                  "governance",
                                  "turbines",
                                  "output",
                                  "maintenance",
                                  "exploration",
                                  "loot",
                                  "radiation",
                                  "purity",
                                  "users",
                                  "age",
                                  "species",
                                  "airQuality",
                                  "lines",
                                  "members",
                                  "fee",
                                  "events",
                                  "lifeExtension",
                                  "geneMod",
                                  "organClone",
                                  "cost",
                                  "collections",
                                  "value",
                                  "oldest",
                                  "influence",
                                  "products",
                                  "clients",
                                  "meetings",
                                  "attendees",
                                  "topics",
                                  "listings",
                                  "traders",
                                  "impact",
                                  "channels",
                                  "reach",
                                  "owner",
                                  "freedom",
                                  "length",
                                  "stations",
                                  "trains",
                                  "danger",
                                  "law",
                                  "meals",
                                  "volunteers",
                                  "funding",
                                  "clinics",
                                  "services",
                                  "license",
                                  "discretion",
                                  "representatives",
                                  "issues",
                                  "authority",
                                ].includes(key) && key}
                              </p>
                              <p className="text-lg font-bold text-neon-cyan font-mono">{value}</p>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="border border-border bg-card/50 p-4 rounded-lg">
                          <p className="text-muted-foreground text-sm">暂无详细数据</p>
                        </div>
                      )}

                      {/* 位置信息 */}
                      <div className="border border-neon-cyan/30 bg-neon-cyan/5 p-4 rounded-lg">
                        <h4 className="font-mono text-sm font-bold text-neon-cyan mb-2">位置信息</h4>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          <span>
                            {selectedDistrict.name} ({selectedDistrict.nameEn})
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                          <Shield className="h-4 w-4" />
                          <span>
                            安全评级:{" "}
                            <span className={getSafetyColor(selectedDistrict.safetyRating)}>
                              {selectedDistrict.safetyRating}
                            </span>
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                          <Users className="h-4 w-4" />
                          <span>管辖方: {selectedDistrict.controlledBy}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* 原有的区域详情视图 */}
                {/* 头部区域图片 */}
                <div className="relative h-48 md:h-64">
                  <Image
                    src={selectedDistrict.image || "/placeholder.svg"}
                    alt={selectedDistrict.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />

                  <div className="absolute bottom-4 left-6">
                    <div className="flex items-center gap-3">
                      <div className="flex h-14 w-14 items-center justify-center rounded-lg border border-neon-cyan bg-neon-cyan/20">
                        {selectedDistrict.icon && <selectedDistrict.icon className="h-7 w-7 text-neon-cyan" />}
                      </div>
                      <div>
                        <h2 className="font-mono text-3xl font-bold text-foreground text-glow-cyan">
                          {selectedDistrict.name}
                        </h2>
                        <p className="font-mono text-sm text-neon-cyan">{selectedDistrict.nameEn}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 标签页导航 */}
                <div className="flex border-b border-border">
                  {[
                    { id: "overview", label: "概览", icon: FileText },
                    { id: "landmarks", label: "地标建筑", icon: Building2 },
                    { id: "demographics", label: "人口构成", icon: Users },
                    { id: "gallery", label: "影像资料", icon: Eye },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setDetailTab(tab.id as typeof detailTab)}
                      className={cn(
                        "flex items-center gap-2 px-6 py-3 font-mono text-sm transition-colors",
                        detailTab === tab.id
                          ? "border-b-2 border-neon-cyan text-neon-cyan"
                          : "text-muted-foreground hover:text-foreground",
                      )}
                    >
                      {tab.icon && <tab.icon className="h-4 w-4" />}
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* 标签页内容 */}
                <div className="p-6 max-h-[50vh] overflow-y-auto">
                  {detailTab === "overview" && (
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h3 className="font-mono text-lg font-bold text-foreground">区域简介</h3>
                        <p className="text-muted-foreground leading-relaxed">{selectedDistrict.fullDescription}</p>
                      </div>
                      <div className="space-y-4">
                        <h3 className="font-mono text-lg font-bold text-foreground">基本数据</h3>
                        <div className="grid grid-cols-2 gap-3">
                          <div className="border border-border bg-card/50 p-3 rounded">
                            <p className="text-xs text-muted-foreground font-mono">人口</p>
                            <p className="text-lg font-bold text-neon-cyan">{selectedDistrict.population}</p>
                          </div>
                          <div className="border border-border bg-card/50 p-3 rounded">
                            <p className="text-xs text-muted-foreground font-mono">管辖方</p>
                            <p className="text-lg font-bold text-foreground">{selectedDistrict.controlledBy}</p>
                          </div>
                          <div className="border border-border bg-card/50 p-3 rounded">
                            <p className="text-xs text-muted-foreground font-mono">建立年份</p>
                            <p className="text-lg font-bold text-foreground">{selectedDistrict.founded}</p>
                          </div>
                          <div className="border border-border bg-card/50 p-3 rounded">
                            <p className="text-xs text-muted-foreground font-mono">平均收入</p>
                            <p className="text-lg font-bold text-neon-magenta">{selectedDistrict.avgIncome}</p>
                          </div>
                          <div className="border border-border bg-card/50 p-3 rounded">
                            <p className="text-xs text-muted-foreground font-mono">安全评级</p>
                            <p className={cn("text-lg font-bold", getSafetyColor(selectedDistrict.safetyRating))}>
                              {selectedDistrict.safetyRating}
                            </p>
                          </div>
                          <div className="border border-border bg-card/50 p-3 rounded">
                            <p className="text-xs text-muted-foreground font-mono">犯罪率</p>
                            <p className="text-lg font-bold text-orange-500">{selectedDistrict.crimeRate}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {detailTab === "landmarks" && (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {selectedDistrict.landmarks.map((landmark, index) => (
                        <button
                          key={index}
                          onClick={() => setSelectedLandmark(landmark)}
                          className="border border-border bg-card/50 p-4 rounded-lg hover:border-neon-cyan/50 hover:bg-neon-cyan/5 transition-all text-left group"
                        >
                          {/* 地标图片预览 */}
                          <div className="relative aspect-video rounded-md overflow-hidden mb-3 border border-border/50">
                            <Image
                              src={landmark.image || selectedDistrict.image || "/placeholder.svg"}
                              alt={landmark.name}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                            <div className="absolute inset-0 bg-scanlines opacity-20 pointer-events-none" />
                            <div className="absolute bottom-2 right-2 flex items-center gap-1 px-2 py-1 rounded bg-background/80 text-neon-cyan">
                              <Eye className="h-3 w-3" />
                              <span className="font-mono text-xs">查看详情</span>
                            </div>
                          </div>

                          <div className="flex items-center gap-3 mb-3">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded border border-neon-cyan/50 bg-neon-cyan/10 group-hover:bg-neon-cyan/20 transition-colors">
                              {landmark.icon && <landmark.icon className="h-5 w-5 text-neon-cyan" />}
                            </div>
                            <div className="min-w-0">
                              <h4 className="font-mono font-bold text-foreground truncate">{landmark.name}</h4>
                              <p className="text-xs text-neon-magenta">{landmark.type}</p>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground line-clamp-2">{landmark.description}</p>

                          <div className="mt-3 flex items-center gap-1 text-xs text-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity">
                            <span className="font-mono">点击查看更多</span>
                            <ChevronRight className="h-3 w-3" />
                          </div>
                        </button>
                      ))}
                    </div>
                  )}

                  {detailTab === "demographics" && (
                    <div className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        {selectedDistrict.residents.map((group, index) => (
                          <div key={index} className="border border-border bg-card/50 p-4 rounded-lg">
                            <div className="flex justify-between items-center mb-2">
                              <h4 className="font-mono font-bold text-foreground">{group.name}</h4>
                              <span className="text-neon-cyan font-mono font-bold">{group.percentage}%</span>
                            </div>
                            <div className="w-full h-2 bg-background rounded-full overflow-hidden mb-2">
                              <div
                                className="h-full bg-gradient-to-r from-neon-cyan to-neon-magenta"
                                style={{ width: `${group.percentage}%` }}
                              />
                            </div>
                            <p className="text-sm text-muted-foreground">{group.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {detailTab === "gallery" && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {selectedDistrict.gallery.map((item, index) => (
                        <div
                          key={index}
                          className="relative aspect-video rounded-lg overflow-hidden border border-border group"
                        >
                          <Image
                            src={item.src || "/placeholder.svg"}
                            alt={item.caption || `${selectedDistrict.name} 影像 ${index + 1}`}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                          <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                            <p className="text-sm font-mono text-neon-cyan">{item.caption}</p>
                          </div>
                          <div className="absolute inset-0 bg-scanlines opacity-20 pointer-events-none" />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* 头部导航 */}
      <header className="fixed top-0 left-0 right-0 z-40 border-b border-neon-cyan/30 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-2 text-neon-cyan hover:text-neon-cyan/80 transition-colors">
              <ArrowLeft className="h-5 w-5" />
              <span className="font-mono text-sm">返回首页</span>
            </Link>
            <h1 className="font-mono text-xl font-bold text-foreground">
              <span className="text-neon-cyan">城市</span>指南
            </h1>
            <div className="flex items-center gap-2">
              <Signal className="h-4 w-4 text-neon-cyan animate-pulse" />
              <span className="font-mono text-xs text-muted-foreground">实时更新</span>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 pt-24 pb-16">
        {/* 标签页切换 */}
        <div className="mb-8 flex items-center justify-center gap-4">
          <div className="flex items-center gap-2 rounded-lg border border-neon-cyan/30 bg-card/50 p-1">
            <div className="flex items-center gap-2 px-4 py-2 rounded-md bg-neon-cyan/20 text-neon-cyan">
              <Map className="h-4 w-4" />
              <span className="font-mono text-sm">区域地图</span>
            </div>
            <Link
              href="/news"
              className="flex items-center gap-2 px-4 py-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-foreground/5 transition-colors"
            >
              <Newspaper className="h-4 w-4" />
              <span className="font-mono text-sm">新闻动态</span>
              <ExternalLink className="h-3 w-3 opacity-50" />
            </Link>
            <Link
              href="/archives"
              className="flex items-center gap-2 px-4 py-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-foreground/5 transition-colors"
            >
              <FileText className="h-4 w-4" />
              <span className="font-mono text-sm">城市档案</span>
              <ExternalLink className="h-3 w-3 opacity-50" />
            </Link>
          </div>
        </div>

        {/* 区域地图 */}
        <div className="mb-8">
          <div className="relative mx-auto max-w-5xl">
            {/* 地图容器 */}
            <div className="relative aspect-[16/10] rounded-lg border border-neon-cyan/30 bg-dark-surface/50 overflow-hidden">
              {/* 背景图 */}
              <Image src="/cyberpunk-city-wide-bg.jpg" alt="新东京地图" fill className="object-cover opacity-30" />

              {/* 扫描线动画 */}
              <div
                className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-neon-cyan to-transparent opacity-50"
                style={{ top: `${scanProgress}%` }}
              />

              {/* 网格线 */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

              {/* 区域标记 */}
              {cityDistricts.map((district) => (
                <button
                  key={district.id}
                  onClick={() => handleViewDistrict(district)}
                  className="absolute group"
                  style={{
                    top: district.position.top,
                    left: district.position.left,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <div className="relative">
                    {/* 脉冲动画 */}
                    <div className="absolute inset-0 animate-ping rounded-full bg-neon-cyan/30" />

                    {/* 图标 */}
                    <div
                      className={cn(
                        "relative flex h-12 w-12 items-center justify-center rounded-full border-2 transition-all duration-300",
                        "border-neon-cyan/50 bg-dark-surface/80 group-hover:border-neon-cyan group-hover:bg-neon-cyan/20",
                        "shadow-[0_0_15px_rgba(0,255,255,0.3)] group-hover:shadow-[0_0_25px_rgba(0,255,255,0.5)]",
                      )}
                    >
                      {district.icon && <district.icon className="h-6 w-6 text-neon-cyan" />}
                    </div>

                    {/* 标签 */}
                    <div className="absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="rounded border border-neon-cyan/50 bg-dark-surface/90 px-3 py-1 backdrop-blur">
                        <p className="font-mono text-xs font-bold text-neon-cyan">{district.name}</p>
                        <p className="font-mono text-[10px] text-muted-foreground">{district.nameEn}</p>
                      </div>
                    </div>
                  </div>
                </button>
              ))}

              {/* 地图信息 */}
              <div className="absolute bottom-4 left-4 rounded border border-neon-cyan/30 bg-dark-surface/80 px-3 py-2 backdrop-blur">
                <p className="font-mono text-xs text-neon-cyan">新东京 · 城市地图</p>
                <p className="font-mono text-[10px] text-muted-foreground">点击区域查看详情</p>
              </div>

              {/* 图例 */}
              <div className="absolute bottom-4 right-4 rounded border border-neon-cyan/30 bg-dark-surface/80 px-3 py-2 backdrop-blur">
                <p className="font-mono text-xs text-muted-foreground mb-1">安全评级</p>
                <div className="flex gap-2 text-[10px] font-mono">
                  <span className="text-green-400">● 高</span>
                  <span className="text-yellow-400">● 中</span>
                  <span className="text-orange-500">● 低</span>
                  <span className="text-red-500">● 极低</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 区域列表 */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {cityDistricts.map((district) => (
            <button
              key={district.id}
              onClick={() => handleViewDistrict(district)}
              className="group relative overflow-hidden rounded-lg border border-border bg-card/50 p-4 text-left transition-all hover:border-neon-cyan/50 hover:bg-card"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative">
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-neon-cyan/30 bg-neon-cyan/10">
                    {district.icon && <district.icon className="h-5 w-5 text-neon-cyan" />}
                  </div>
                  <span className={cn("text-xs font-mono", getSafetyColor(district.safetyRating))}>
                    {district.safetyRating}
                  </span>
                </div>

                <h3 className="font-mono text-lg font-bold text-foreground group-hover:text-neon-cyan transition-colors">
                  {district.name}
                </h3>
                <p className="font-mono text-xs text-muted-foreground mb-2">{district.nameEn}</p>
                <p className="text-sm text-muted-foreground line-clamp-2">{district.description}</p>

                <div className="mt-3 flex items-center gap-1 text-xs text-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="font-mono">查看详情</span>
                  <ChevronRight className="h-3 w-3" />
                </div>
              </div>
            </button>
          ))}
        </div>
      </main>
    </div>
  )
}
