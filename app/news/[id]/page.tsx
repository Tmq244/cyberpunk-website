import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScanlineOverlay } from "@/components/scanline-overlay"
import { Calendar, Clock, Eye, ArrowLeft, Share2, Bookmark, MessageSquare, ThumbsUp, User, Link2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

const newsData: Record<
  string,
  {
    id: number
    title: string
    excerpt: string
    category: string
    date: string
    readTime: string
    views: number
    comments: number
    likes: number
    image: string
    author: string
    authorAvatar: string
    authorBio: string
    content: string[]
    tags: string[]
    relatedIds: number[]
  }
> = {
  "1": {
    id: 1,
    title: "NEXUS 神经链路 4.0 发布：意识上传速度提升 300%",
    excerpt:
      "最新一代神经接口已通过安全认证，预计下月向公众开放预约。企业用户可提前申请内测资格。新系统采用量子纠缠技术，大幅降低了延迟和数据丢失率。",
    category: "技术突破",
    date: "2077-12-15",
    readTime: "5 分钟",
    views: 12847,
    comments: 234,
    likes: 1892,
    image: "/cyberpunk-neural-interface-device-with-cyan-glow.jpg",
    author: "Dr. 林雨晴",
    authorAvatar: "/cyberpunk-female-scientist-avatar.jpg",
    authorBio: "NEXUS 神经科学研究院首席研究员，专注于人机接口技术研究超过 15 年。",
    content: [
      "在今日举行的 NEXUS 科技峰会上，公司正式宣布神经链路 4.0 系统已完成全部安全认证程序，标志着人机接口技术迈入了一个全新的时代。",
      "新一代神经链路采用了革命性的量子纠缠传输协议，将意识数据的上传速度提升了整整 300%。这意味着，曾经需要 6 小时才能完成的完整意识备份，现在仅需 90 分钟即可完成。",
      "「这不仅仅是速度的提升，」NEXUS 神经科学研究院首席研究员林雨晴博士在发布会上表示，「量子纠缠技术从根本上解决了传统神经链路的数据丢失问题。我们的测试显示，新系统的数据完整性达到了 99.9997%，这是前所未有的突破。」",
      "神经链路 4.0 的核心创新包括：",
      "• 量子纠缠数据传输：利用纠缠态粒子实现零延迟、零丢失的数据同步\n• 自适应神经映射：系统能够实时调整与用户神经网络的连接强度\n• 增强型防火墙：内置 ICE 防护系统，可抵御 99% 的已知网络攻击\n• 模块化升级架构：用户无需更换硬件即可获得软件层面的性能提升",
      "根据 NEXUS 官方公布的时间表，企业级用户将于本月底开始获得内测资格，而普通消费者的预约通道将在 2078 年 1 月 15 日正式开放。首批产品预计将于 2078 年第一季度末开始发货。",
      "值得注意的是，神经链路 4.0 将与现有的 3.x 系列完全兼容。现有用户可以通过付费升级的方式获得新系统的核心功能，而无需进行侵入性的硬件更换手术。",
      "市场分析师普遍看好这一产品的前景。「神经链路 4.0 的发布将进一步巩固 NEXUS 在人机接口领域的领导地位，」瑞银证券科技分析师张明远表示，「我们预计这将为公司带来超过 200 亿信用点的年收入增长。」",
      "然而，也有声音对新技术的安全性表示担忧。数字人权组织「自由思想」发言人李薇指出：「更快的意识上传速度也意味着更大的安全风险。我们呼吁 NEXUS 在追求技术突破的同时，也要充分考虑用户的隐私和安全。」",
      "对此，NEXUS 官方回应称，神经链路 4.0 已通过全球数字安全委员会的最高级别认证，并承诺将持续投入资源完善安全防护体系。",
    ],
    tags: ["神经链路", "量子计算", "人机接口", "NEXUS", "意识上传"],
    relatedIds: [3, 6, 2],
  },
  "2": {
    id: 2,
    title: "夜之城第七区电网升级完成，全面启用清洁聚变能源",
    excerpt:
      "历时三年的基础设施改造项目竣工，第七区成为首个完全脱离化石燃料的城区。市长办公室表示将在 2078 年推广至全城。",
    category: "城市建设",
    date: "2077-12-12",
    readTime: "3 分钟",
    views: 8562,
    comments: 89,
    likes: 723,
    image: "/futuristic-data-center-with-glowing-servers-and-bl.jpg",
    author: "张明远",
    authorAvatar: "/cyberpunk-male-reporter-avatar.jpg",
    authorBio: "资深城市规划记者，关注基础设施建设与可持续发展议题。",
    content: [
      "第七区能源改造项目今日正式宣告完成，这座拥有 50 万常住人口的城区成为夜之城首个实现 100% 清洁能源供电的区域。",
      "项目总投资超过 800 亿信用点，历时三年零四个月。核心设施包括一座小型聚变反应堆、12 座分布式储能站以及覆盖全区的智能电网系统。",
      "「从今天起，第七区的每一盏灯、每一台设备，都将由清洁的聚变能源驱动，」市长陈志明在竣工典礼上宣布，「这是夜之城迈向碳中和目标的重要里程碑。」",
      "新电网系统采用了先进的 AI 调度技术，能够实时预测用电需求并优化电力分配。官方数据显示，系统上线后，第七区的电力供应稳定性提升了 47%，同时能耗降低了 23%。",
      "对于普通居民而言，最直接的好处是电费的下降。根据市能源局的测算，改用聚变能源后，居民用电成本将平均降低 35%。",
      "市长办公室透露，第七区的成功经验将被复制到其他城区。按照规划，第三区和第九区的改造工程将于 2078 年第二季度启动，预计 2080 年前全城将实现清洁能源全覆盖。",
      "然而，项目的推进并非一帆风顺。施工期间，传统能源企业的强烈反对、地下管线的复杂改造、以及居民的临时安置问题，都曾一度阻碍工程进度。",
      "「这三年里，我们克服了无数困难，」项目总工程师王建国回忆道，「但看到今天的成果，一切都是值得的。」",
    ],
    tags: ["清洁能源", "聚变反应堆", "第七区", "智能电网", "碳中和"],
    relatedIds: [1, 4, 8],
  },
  "3": {
    id: 3,
    title: "警告：新型 ICE 病毒在黑市流传，神经防火墙需立即更新",
    excerpt:
      "NEXUS 安全团队检测到一种可绕过标准防护的恶意程序，建议所有用户在 72 小时内完成系统升级。已有 47 例感染报告。",
    category: "安全警报",
    date: "2077-12-10",
    readTime: "2 分钟",
    views: 45231,
    comments: 567,
    likes: 3421,
    image: "/cyberpunk-virtual-reality-digital-world-with-neon-.jpg",
    author: "NEXUS 安全部",
    authorAvatar: "/cyberpunk-security-logo.jpg",
    authorBio: "NEXUS 官方安全部门，负责发布安全公告与威胁预警。",
    content: [
      "【紧急安全公告】NEXUS 安全响应中心于 2077 年 12 月 9 日 23:47 检测到一种新型 ICE（入侵对抗电子）病毒，编号 ICE-X7，目前已在多个黑市渠道流通。",
      "该病毒具有极强的隐蔽性和破坏性，能够绕过神经链路 3.x 系列的标准防火墙，直接侵入用户的神经接口系统。一旦感染，攻击者可以：",
      "• 窃取用户的记忆数据和个人信息\n• 在用户不知情的情况下操控其神经信号\n• 植入虚假记忆或感知干扰\n• 完全锁定用户的神经链路系统并索要赎金",
      "截至发稿时，全球已有 47 例确认感染案例，其中 12 例发生在夜之城。受害者包括企业高管、技术人员和普通市民。",
      "NEXUS 安全团队已紧急发布补丁程序（版本号 v3.2.2），强烈建议所有神经链路用户在 72 小时内完成更新。更新可通过以下方式进行：",
      "1. 自动更新：确保神经链路设置中的「自动安全更新」选项已开启\n2. 手动更新：访问 NEXUS 官方安全中心下载补丁\n3. 线下更新：前往任一 NEXUS 授权服务点进行免费升级",
      "在完成更新之前，我们建议用户：\n• 避免连接公共神经网络\n• 不要下载或运行来源不明的程序\n• 关闭非必要的神经链路共享功能\n• 定期备份重要记忆数据",
      "如果您怀疑自己已被感染，请立即断开神经链路与外部网络的连接，并拨打 NEXUS 安全热线 400-NEXUS-SOS 寻求帮助。",
      "NEXUS 安全团队正在全力追踪病毒来源，并与执法部门合作打击相关犯罪活动。我们承诺将持续更新威胁情报，保护用户的神经安全。",
    ],
    tags: ["安全警报", "ICE病毒", "神经防火墙", "系统更新", "网络安全"],
    relatedIds: [1, 6, 8],
  },
  "4": {
    id: 4,
    title: "荒坂集团与军科技达成合作，联合开发下一代义体技术",
    excerpt: "两大巨头的联盟将重塑义体市场格局，分析师预计相关产品将在 2078 年第二季度问世。股价应声上涨 15%。",
    category: "企业动态",
    date: "2077-12-08",
    readTime: "4 分钟",
    views: 6789,
    comments: 123,
    likes: 567,
    image: "/cyberpunk-neon-city-skyline-at-night-with-holograp.jpg",
    author: "财经频道",
    authorAvatar: "/cyberpunk-news-channel-logo.jpg",
    authorBio: "专注于企业动态与市场分析的专业财经媒体。",
    content: [
      "荒坂集团与军科技今日联合宣布，双方已签署战略合作协议，将在下一代义体技术领域展开深度合作。这一消息震动了整个行业，两家公司的股价在消息公布后均大幅上涨。",
      "根据协议内容，荒坂集团将提供其领先的生物兼容性技术和神经接口专利，而军科技则贡献其在机械工程和材料科学方面的优势。双方将成立一家合资公司，共同开发、生产和销售新一代义体产品。",
      "「这是义体行业的历史性时刻，」荒坂集团 CEO 荒坂三郎在新闻发布会上表示，「通过结合两家公司的核心技术，我们将为用户带来前所未有的义体体验——更强大、更自然、更安全。」",
      "军科技 CEO 詹姆斯·罗德里格斯补充道：「我们的目标是打造真正与人体无缝融合的义体。新产品将采用纳米级神经连接技术，让使用者几乎感觉不到义体与原生肢体的区别。」",
      "业内分析师普遍看好这一合作。「荒坂和军科技分别是义体行业的东西方巨头，它们的联合将彻底改变市场格局，」高盛科技分析师艾米·陈表示，「我们预计合资公司的市场份额将在三年内超过 40%。」",
      "然而，这一消息也引发了反垄断方面的担忧。消费者权益组织警告称，两大巨头的合并可能导致义体价格上涨，并限制消费者的选择。",
      "对于竞争对手而言，这无疑是一个警讯。康陶生物和生化动力等二线厂商的股价在消息公布后应声下跌，市场担心它们将在竞争中被进一步边缘化。",
      "根据双方披露的时间表，首批合作产品预计将于 2078 年第二季度正式发布，届时将在全球范围内同步上市。",
    ],
    tags: ["荒坂集团", "军科技", "义体技术", "企业合作", "市场分析"],
    relatedIds: [1, 2, 6],
  },
  "5": {
    id: 5,
    title: "赛博空间艺术展「数字涅槃」下周开幕，支持全息远程参观",
    excerpt: "本次展览汇集了来自 23 个国家的数字艺术家作品，探索人机融合时代的美学边界。VIP 票已售罄。",
    category: "文化活动",
    date: "2077-12-05",
    readTime: "3 分钟",
    views: 3421,
    comments: 45,
    likes: 892,
    image: "/cyberpunk-digital-art-exhibition.jpg",
    author: "艺术周刊",
    authorAvatar: "/art-magazine-logo-neon.jpg",
    authorBio: "专注于数字艺术与赛博文化的先锋艺术媒体。",
    content: [
      "备受期待的赛博空间艺术展「数字涅槃」将于下周一在夜之城当代艺术馆正式开幕。这是近年来规模最大的数字艺术展览，汇集了来自 23 个国家的 78 位艺术家的 200 余件作品。",
      "展览主题「数字涅槃」探索的是人机融合时代人类意识的转化与重生。策展人李子墨解释道：「当我们的思维可以上传到云端，当记忆可以被编辑和共享，'自我'的边界在哪里？这正是本次展览试图探讨的核心问题。」",
      "展品涵盖了多种形式：从传统的数字绘画到沉浸式 VR 体验，从 AI 生成艺术到神经接口互动装置。其中最引人注目的是日本艺术家山田悠的作品《永恒回响》——一个允许观众上传一小段记忆并将其转化为抽象视觉艺术的装置。",
      "「每个人的记忆都是独一无二的艺术品，」山田悠在接受采访时说，「我只是提供了一个框架，让这些隐藏的美得以呈现。」",
      "本次展览的另一大亮点是全息远程参观功能。无法亲临现场的观众可以通过神经链路连接，以全息投影的形式「出现」在展厅中，与现场观众和艺术品进行互动。",
      "「这打破了物理空间的限制，」艺术馆馆长王薇表示，「我们预计将有超过 10 万名远程观众通过这种方式参与展览。」",
      "展览将持续至 2078 年 2 月 28 日。普通门票价格为 50 信用点，VIP 通道票（含艺术家见面会）已全部售罄。建议观众提前在线预约，以避免现场排队。",
    ],
    tags: ["数字艺术", "赛博空间", "VR体验", "全息投影", "当代艺术"],
    relatedIds: [6, 7, 2],
  },
  "6": {
    id: 6,
    title: "NEXUS 量子计算中心扩建完成，算力翻倍",
    excerpt: "新增的量子处理单元将支持更复杂的 AI 模型训练，预计每秒可处理 10 亿次并行运算。开放 API 申请中。",
    category: "技术突破",
    date: "2077-12-01",
    readTime: "4 分钟",
    views: 9876,
    comments: 156,
    likes: 1234,
    image: "/quantum-computing-center-cyberpunk.jpg",
    author: "科技前沿",
    authorAvatar: "/tech-news-logo-cyan.jpg",
    authorBio: "专注于前沿科技报道与深度分析的科技媒体。",
    content: [
      "NEXUS 公司今日宣布，其位于夜之城北部的量子计算中心二期工程已正式完工并投入运营。扩建后的计算中心总算力翻倍，成为全球最大的商用量子计算设施。",
      "新增的计算能力主要来自 48 台最新一代量子处理器，每台处理器拥有 1000 个量子比特。这使得整个中心的峰值算力达到了每秒 10 亿次并行量子运算——这一数字在两年前还被认为是不可能实现的。",
      "「量子计算正在从实验室走向现实应用，」NEXUS 量子计算部门负责人陈明博士表示，「我们的目标是让每一个企业、每一个开发者都能享受到量子计算的红利。」",
      "为此，NEXUS 同步推出了量子计算云服务平台 QuantumCloud。企业和个人开发者可以通过 API 接口，按需使用量子计算资源。目前平台正在接受内测申请，首批用户将享受 50% 的算力折扣。",
      "扩建后的计算中心将主要服务于以下领域：\n• 复杂 AI 模型训练\n• 新药研发与分子模拟\n• 金融风险建模\n• 气候变化预测\n• 密码学与网络安全",
      "特别值得一提的是，新系统将大幅加速 AI 模型的训练过程。NEXUS 透露，其正在开发的下一代通用 AI 模型就将利用这些新增算力，预计训练时间将从原计划的 18 个月缩短至 6 个月。",
      "行业观察人士指出，NEXUS 在量子计算领域的持续投入，将进一步拉大其与竞争对手的技术差距。「在可预见的未来，NEXUS 在算力方面的优势将是其他公司难以企及的，」科技分析师林浩评论道。",
    ],
    tags: ["量子计算", "NEXUS", "AI训练", "云计算", "科技突破"],
    relatedIds: [1, 3, 4],
  },
  "7": {
    id: 7,
    title: "地下格斗联盟新赛季开启，义体改装上限再提高",
    excerpt: "联盟委员会宣布放宽义体改装限制，新赛季将允许更激进的战斗增强装置。安全组织对此表示担忧。",
    category: "体育娱乐",
    date: "2077-11-28",
    readTime: "3 分钟",
    views: 18234,
    comments: 432,
    likes: 2156,
    image: "/cyberpunk-fighting-arena-neon.jpg",
    author: "体育热线",
    authorAvatar: "/sports-news-logo.png",
    authorBio: "覆盖传统体育与赛博竞技的综合体育媒体。",
    content: [
      "地下格斗联盟（Underground Combat League, UCL）今日宣布，2078 赛季将正式取消义体改装的重量限制，并允许选手装备更多类型的战斗增强设备。这一决定立即在格斗圈引发热议。",
      "根据新规则，选手将被允许装备：\n• 强化骨骼系统（最高承受 5000 牛顿冲击力）\n• 反应增强神经处理器（反应时间缩短至 0.05 秒）\n• 可伸缩战斗刀刃（长度不超过 30 厘米）\n• 电击放电模块（最高 50000 伏特，非致命级）",
      "「观众想看的是极限对决，」UCL 主席迈克·「铁拳」·约翰逊在新闻发布会上表示，「新规则将把格斗运动推向一个全新的高度。当然，我们也会确保比赛在可控的范围内进行。」",
      "然而，安全组织和人权团体对此表示强烈担忧。「这不是体育，这是合法化的暴力，」数字人权联盟发言人表示，「放宽限制只会导致更多的严重伤亡。上赛季已经有 3 名选手在比赛中丧生，难道这还不够吗？」",
      "尽管存在争议，UCL 的商业价值却在持续攀升。据统计，上赛季 UCL 的全球观众人数突破 5 亿，赞助收入达到创纪录的 120 亿信用点。新规则的发布更是引发了投注热潮，各大博彩公司已经开出了新赛季冠军的赔率。",
      "卫冕冠军「机械死神」维克托·斯通对新规则表示欢迎：「终于可以释放全部实力了。那些只会靠技巧取胜的家伙，准备好被碾压吧。」",
      "新赛季将于 2078 年 1 月 15 日正式开幕，届时将在夜之城体育馆举行盛大的开幕战。门票将于下周开始发售。",
    ],
    tags: ["地下格斗", "UCL", "义体改装", "赛博体育", "极限运动"],
    relatedIds: [4, 5, 8],
  },
  "8": {
    id: 8,
    title: "第五区发生大规模停电事故，官方称系统故障",
    excerpt: "昨夜第五区超过 10 万户居民经历长达 4 小时的断电。有消息称事故与黑客攻击有关，但官方予以否认。",
    category: "突发事件",
    date: "2077-11-25",
    readTime: "2 分钟",
    views: 32156,
    comments: 678,
    likes: 1567,
    image: "/cyberpunk-city-blackout-dark-streets.jpg",
    author: "市民日报",
    authorAvatar: "/newspaper-logo-neon.jpg",
    authorBio: "服务夜之城市民的本地新闻媒体，关注民生与社会议题。",
    content: [
      "昨夜 21:17，第五区突发大规模停电事故。整个城区陷入黑暗长达 4 小时 23 分钟，超过 10 万户居民受到影响。这是夜之城近五年来最严重的电力事故。",
      "事故发生时，第五区的所有电力供应瞬间中断，包括备用电源和应急照明系统。医院、学校、商业中心全部停摆，交通信号灯失灵导致多起交通事故，所幸没有人员伤亡报告。",
      "市能源局在今日凌晨召开的新闻发布会上表示，事故原因是中央配电站的主控系统出现「罕见的级联故障」。「这是一个极其复杂的技术问题，」能源局发言人李明表示，「我们的工程师正在全力排查，预计将在 48 小时内提交完整的事故报告。」",
      "然而，网络上流传的消息却指向另一个方向。多个匿名信息源声称，此次停电是黑客攻击的结果。据传，一个名为「黑暗使者」的黑客组织成功入侵了配电站的控制系统，并在系统中植入了恶意代码。",
      "「官方在掩盖真相，」一位自称是能源局内部人士的匿名信息源表示，「这根本不是什么系统故障，而是一次精心策划的网络攻击。他们不敢承认是因为害怕引发公众恐慌。」",
      "对于这些传言，市政府予以坚决否认。「所谓黑客攻击的说法纯属谣言，」市长办公室在一份声明中表示，「我们呼吁市民不要轻信未经证实的消息，保持冷静和理性。」",
      "不管真相如何，这次事故都暴露了夜之城电力基础设施的脆弱性。市议会已要求能源局提交详细的风险评估报告，并考虑追加预算用于电网安全升级。",
      "受影响的居民将获得一定的补偿。市政府宣布，每户家庭可申领 100 信用点的停电补贴，商业用户的赔偿标准正在制定中。",
    ],
    tags: ["停电事故", "第五区", "电网安全", "黑客攻击", "市政新闻"],
    relatedIds: [2, 3, 7],
  },
}

const commentsData: Record<
  string,
  Array<{
    user: string
    avatar: "cyan" | "magenta" | "yellow" | "green"
    time: string
    content: string
    likes: number
  }>
> = {
  "1": [
    {
      user: "神经工程师_N3X",
      avatar: "cyan",
      time: "1 小时前",
      content: "作为业内人士，我可以证实量子纠缠技术的确是革命性的。我们实验室去年就在测试早期版本了，效果惊人！",
      likes: 156,
    },
    {
      user: "谨慎的用户",
      avatar: "magenta",
      time: "3 小时前",
      content: "99.9997% 的数据完整性听起来很完美，但那 0.0003% 丢失的记忆会是什么？可能是最珍贵的部分...",
      likes: 89,
    },
    {
      user: "早期体验者_K7",
      avatar: "yellow",
      time: "5 小时前",
      content: "已经预约了企业内测资格！等不及要体验 300% 的速度提升了。现在的 3.x 版本备份一次要等半天。",
      likes: 42,
    },
    {
      user: "数字人权倡导者",
      avatar: "green",
      time: "8 小时前",
      content: "希望 NEXUS 能真正重视安全问题。更快的上传速度也意味着更快的数据泄露风险。",
      likes: 67,
    },
  ],
  "2": [
    {
      user: "第七区居民",
      avatar: "green",
      time: "2 小时前",
      content: "终于！这三年施工期间停电无数次，现在总算盼到头了。电费降 35% 是真的吗？",
      likes: 234,
    },
    {
      user: "环保主义者",
      avatar: "cyan",
      time: "4 小时前",
      content: "聚变能源是人类的未来！希望其他城区也能尽快跟进，2080 年全覆盖太慢了。",
      likes: 156,
    },
    {
      user: "传统能源从业者",
      avatar: "magenta",
      time: "6 小时前",
      content: "说得好听，但你们知道有多少人因为这个项目失业吗？进步总是有代价的...",
      likes: 45,
    },
    {
      user: "城市规划爱好者",
      avatar: "yellow",
      time: "10 小时前",
      content: "AI 调度系统才是真正的亮点。实时预测用电需求，这才是智慧城市该有的样子！",
      likes: 78,
    },
  ],
  "3": [
    {
      user: "网络安全专家",
      avatar: "cyan",
      time: "30 分钟前",
      content: "ICE-X7 的技术细节我分析过了，这绝对不是普通黑客能做出来的。背后可能有国家级的技术支持。",
      likes: 567,
    },
    {
      user: "受害者_已脱险",
      avatar: "magenta",
      time: "1 小时前",
      content: "我就是那 47 个感染者之一。突然失去对身体的控制感太可怕了...幸好及时断网求助。大家一定要更新补丁！",
      likes: 1234,
    },
    {
      user: "黑市观察员",
      avatar: "yellow",
      time: "3 小时前",
      content: "这病毒在暗网卖 50000 信用点一份，已经有好几个买家了。NEXUS 这次动作太慢。",
      likes: 89,
    },
    {
      user: "普通市民_担忧中",
      avatar: "green",
      time: "5 小时前",
      content: "还好我用的是上一代的旧型号，没有联网功能。有时候落后也是一种安全...",
      likes: 156,
    },
  ],
  "4": [
    {
      user: "股票分析师",
      avatar: "cyan",
      time: "1 小时前",
      content: "荒坂和军科技的股票今天都涨停了。早知道上周就该抄底，现在追高风险太大。",
      likes: 345,
    },
    {
      user: "义体改装师",
      avatar: "magenta",
      time: "3 小时前",
      content: "作为一线改装师，我很期待新产品。但也担心垄断后价格会涨上天，小作坊还怎么活？",
      likes: 123,
    },
    {
      user: "康陶生物员工",
      avatar: "yellow",
      time: "6 小时前",
      content: "我们公司今天开紧急会议了...说是「应对市场变化」，但大家都知道前景不妙。",
      likes: 67,
    },
    {
      user: "技术乐观派",
      avatar: "green",
      time: "8 小时前",
      content: "竞争对手别慌，大公司合并往往效率下降。说不定这是你们弯道超车的机会！",
      likes: 89,
    },
  ],
  "5": [
    {
      user: "数字艺术收藏家",
      avatar: "magenta",
      time: "2 小时前",
      content: "VIP 票抢到了！山田悠的《永恒回响》我期待了整整一年，终于可以亲眼见到了。",
      likes: 234,
    },
    {
      user: "远程参观体验者",
      avatar: "cyan",
      time: "4 小时前",
      content: "全息远程参观真的能有现场的感觉吗？有体验过的朋友说说效果怎么样？",
      likes: 67,
    },
    {
      user: "传统艺术爱好者",
      avatar: "yellow",
      time: "7 小时前",
      content: "我还是更喜欢传统画作...数字艺术总感觉缺少了「灵魂」，太冰冷了。",
      likes: 45,
    },
    {
      user: "新锐艺术家_M",
      avatar: "green",
      time: "10 小时前",
      content: "作为参展艺术家之一，非常感谢大家的支持！开幕那天展厅见！",
      likes: 456,
    },
  ],
  "6": [
    {
      user: "AI 研究员",
      avatar: "cyan",
      time: "1 小时前",
      content: "10 亿次并行量子运算...这意味着我们一直受算力限制的模型终于可以训练了。AGI 真的不远了！",
      likes: 456,
    },
    {
      user: "创业公司 CEO",
      avatar: "magenta",
      time: "3 小时前",
      content: "QuantumCloud 的 API 申请已经提交了。50% 的折扣期一定要抓住，之后价格肯定会很贵。",
      likes: 123,
    },
    {
      user: "气候科学家",
      avatar: "green",
      time: "5 小时前",
      content: "终于有足够的算力来运行我们的气候模型了！之前的预测精度一直受限于计算资源。",
      likes: 234,
    },
    {
      user: "量子计算怀疑论者",
      avatar: "yellow",
      time: "8 小时前",
      content: "每年都说量子计算要改变世界，结果普通人还是用不上。这次能不一样吗？",
      likes: 78,
    },
  ],
  "7": [
    {
      user: "UCL 铁杆粉丝",
      avatar: "magenta",
      time: "30 分钟前",
      content: "新规则太刺激了！电击模块 + 可伸缩刀刃的组合战斗，想想就热血沸腾！门票必须抢！",
      likes: 678,
    },
    {
      user: "前职业选手",
      avatar: "cyan",
      time: "2 小时前",
      content: "作为因伤退役的选手，我对新规则很担忧。放宽限制只会让更多人受伤。竞技的意义不应该是谁的义体更贵。",
      likes: 234,
    },
    {
      user: "博彩爱好者",
      avatar: "yellow",
      time: "4 小时前",
      content: "「机械死神」卫冕冠军赔率 1.5，新人王「闪电」赔率 3.2。大家觉得押谁稳？",
      likes: 156,
    },
    {
      user: "医疗伦理学者",
      avatar: "green",
      time: "7 小时前",
      content: "这不是体育，这是有组织的暴力表演。上赛季 3 人死亡的教训还不够吗？强烈呼吁立法禁止！",
      likes: 89,
    },
  ],
  "8": [
    {
      user: "第五区居民_停电亲历",
      avatar: "magenta",
      time: "1 小时前",
      content: "昨晚真的太可怕了！家里老人的医疗设备差点断电，紧急启动了备用电池才撑过来。100 信用点补贴根本不够！",
      likes: 567,
    },
    {
      user: "匿名_能源局内部",
      avatar: "cyan",
      time: "3 小时前",
      content: "官方说法别信。我们内部都知道是黑客攻击，只是不敢公开说。「黑暗使者」这个组织真的存在。",
      likes: 890,
    },
    {
      user: "网络安全研究员",
      avatar: "yellow",
      time: "5 小时前",
      content: "从技术角度分析，级联故障和黑客攻击的表现确实很相似。但没有证据就不应该乱下结论。",
      likes: 234,
    },
    {
      user: "阴谋论爱好者",
      avatar: "green",
      time: "8 小时前",
      content: "你们不觉得奇怪吗？第七区刚升级完聚变能源，第五区就出事了。这里面肯定有猫腻...",
      likes: 123,
    },
  ],
}

// Get all news items for related articles
const allNewsItems = Object.values(newsData)

export default async function NewsDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const news = newsData[id]

  if (!news) {
    notFound()
  }

  const relatedNews = news.relatedIds.map((rid) => newsData[String(rid)]).filter(Boolean)

  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="fixed inset-0 z-0">
        <Image
          src="/cyberpunk-city-wide-bg.jpg"
          alt="Cyberpunk City Background"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>

      <div className="relative z-10">
        <ScanlineOverlay />
        <Navbar />

        <article className="pt-24 pb-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            {/* Back Button */}
            <Link
              href="/news"
              className="mb-8 inline-flex items-center gap-2 font-mono text-sm text-muted-foreground transition-colors hover:text-neon-cyan"
            >
              <ArrowLeft className="h-4 w-4" />
              返回新闻列表
            </Link>

            {/* Category & Date */}
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="rounded bg-neon-cyan/20 px-3 py-1 font-mono text-sm text-neon-cyan">
                {news.category}
              </span>
              <span className="flex items-center gap-1 font-mono text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                {news.date}
              </span>
              <span className="flex items-center gap-1 font-mono text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                {news.readTime}阅读
              </span>
            </div>

            {/* Title */}
            <h1 className="mb-6 font-mono text-3xl font-bold leading-tight text-foreground md:text-4xl">
              {news.title}
            </h1>

            {/* Author Info */}
            <div className="mb-8 flex items-center justify-between border-y border-neon-cyan/20 py-4">
              <div className="flex items-center gap-3">
                <Image
                  src={news.authorAvatar || "/placeholder.svg"}
                  alt={news.author}
                  width={48}
                  height={48}
                  className="rounded-full border-2 border-neon-cyan/30"
                />
                <div>
                  <p className="font-mono text-sm font-semibold text-foreground">{news.author}</p>
                  <p className="font-mono text-xs text-muted-foreground">{news.authorBio}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-1 rounded-lg bg-neon-cyan/10 px-3 py-2 font-mono text-sm text-neon-cyan transition-colors hover:bg-neon-cyan/20">
                  <Bookmark className="h-4 w-4" />
                  收藏
                </button>
                <button className="flex items-center gap-1 rounded-lg bg-neon-cyan/10 px-3 py-2 font-mono text-sm text-neon-cyan transition-colors hover:bg-neon-cyan/20">
                  <Share2 className="h-4 w-4" />
                  分享
                </button>
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative mb-8 aspect-video overflow-hidden rounded-lg border border-neon-cyan/30">
              <Image src={news.image || "/placeholder.svg"} alt={news.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-surface/50 to-transparent" />
            </div>

            {/* Stats Bar */}
            <div className="mb-8 flex flex-wrap items-center gap-6 rounded-lg border border-neon-cyan/20 bg-dark-surface/50 p-4 backdrop-blur">
              <div className="flex items-center gap-2">
                <Eye className="h-5 w-5 text-neon-cyan" />
                <span className="font-mono text-sm text-foreground">{news.views.toLocaleString()}</span>
                <span className="font-mono text-xs text-muted-foreground">阅读</span>
              </div>
              <div className="flex items-center gap-2">
                <ThumbsUp className="h-5 w-5 text-neon-magenta" />
                <span className="font-mono text-sm text-foreground">{news.likes.toLocaleString()}</span>
                <span className="font-mono text-xs text-muted-foreground">点赞</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-neon-yellow" />
                <span className="font-mono text-sm text-foreground">{news.comments}</span>
                <span className="font-mono text-xs text-muted-foreground">评论</span>
              </div>
            </div>

            {/* Article Content */}
            <div className="prose prose-invert max-w-none">
              {news.content.map((paragraph, idx) => (
                <p
                  key={idx}
                  className="mb-6 whitespace-pre-line font-mono text-base leading-relaxed text-muted-foreground"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Tags */}
            <div className="mt-10 border-t border-neon-cyan/20 pt-6">
              <h3 className="mb-4 font-mono text-sm font-semibold text-muted-foreground">// 相关标签</h3>
              <div className="flex flex-wrap gap-2">
                {news.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="cursor-pointer rounded-full border border-neon-cyan/30 bg-neon-cyan/10 px-3 py-1 font-mono text-sm text-neon-cyan transition-colors hover:bg-neon-cyan/20"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Like & Share Section */}
            <div className="mt-10 flex items-center justify-center gap-4 rounded-lg border border-neon-cyan/20 bg-dark-surface/50 p-6 backdrop-blur">
              <button className="flex items-center gap-2 rounded-lg bg-neon-magenta/20 px-6 py-3 font-mono text-sm text-neon-magenta transition-all hover:bg-neon-magenta/30 hover:shadow-[0_0_20px_rgba(255,0,255,0.3)]">
                <ThumbsUp className="h-5 w-5" />
                点赞文章
              </button>
              <button className="flex items-center gap-2 rounded-lg bg-neon-cyan/20 px-6 py-3 font-mono text-sm text-neon-cyan transition-all hover:bg-neon-cyan/30 hover:shadow-[0_0_20px_rgba(0,255,255,0.3)]">
                <Link2 className="h-5 w-5" />
                复制链接
              </button>
            </div>

            {/* Related News */}
            {relatedNews.length > 0 && (
              <div className="mt-12">
                <h2 className="mb-6 font-mono text-xl font-bold text-foreground">
                  相关<span className="text-neon-cyan">推荐</span>
                </h2>
                <div className="grid gap-4 md:grid-cols-3">
                  {relatedNews.map((item) => (
                    <Link
                      key={item.id}
                      href={`/news/${item.id}`}
                      className="group overflow-hidden rounded-lg border border-neon-cyan/20 bg-dark-surface/50 backdrop-blur transition-all hover:border-neon-cyan/50 hover:shadow-[0_0_20px_rgba(0,255,255,0.1)]"
                    >
                      <div className="relative h-32 overflow-hidden">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-dark-surface to-transparent" />
                        <span className="absolute top-2 left-2 rounded bg-dark-surface/80 px-2 py-0.5 font-mono text-xs text-neon-cyan">
                          {item.category}
                        </span>
                      </div>
                      <div className="p-3">
                        <h3 className="line-clamp-2 font-mono text-sm font-semibold text-foreground group-hover:text-neon-cyan transition-colors">
                          {item.title}
                        </h3>
                        <p className="mt-2 flex items-center gap-1 font-mono text-xs text-muted-foreground">
                          <Eye className="h-3 w-3" />
                          {item.views.toLocaleString()}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Comment Section Placeholder */}
            <div className="mt-12 rounded-lg border border-neon-cyan/20 bg-dark-surface/50 p-6 backdrop-blur">
              <h2 className="mb-4 flex items-center gap-2 font-mono text-lg font-bold text-foreground">
                <MessageSquare className="h-5 w-5 text-neon-cyan" />
                评论区 <span className="text-muted-foreground">({news.comments})</span>
              </h2>
              <div className="mb-4">
                <textarea
                  placeholder="分享你的看法..."
                  className="w-full rounded-lg border border-neon-cyan/30 bg-dark-surface p-4 font-mono text-sm text-foreground placeholder:text-muted-foreground focus:border-neon-cyan focus:outline-none"
                  rows={3}
                />
              </div>
              <div className="flex justify-end">
                <button className="rounded-lg bg-neon-cyan/20 px-6 py-2 font-mono text-sm text-neon-cyan transition-colors hover:bg-neon-cyan/30">
                  发表评论
                </button>
              </div>

              {/* Use corresponding newsID's comment data */}
              <div className="mt-6 space-y-4 border-t border-neon-cyan/20 pt-6">
                {(commentsData[id] || commentsData["1"]).map((comment, idx) => {
                  const avatarColors = {
                    cyan: "bg-neon-cyan/20 text-neon-cyan",
                    magenta: "bg-neon-magenta/20 text-neon-magenta",
                    yellow: "bg-neon-yellow/20 text-neon-yellow",
                    green: "bg-green-500/20 text-green-400",
                  }
                  return (
                    <div key={idx} className="flex gap-3">
                      <div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${avatarColors[comment.avatar]}`}
                      >
                        <User className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-sm font-semibold text-foreground">{comment.user}</span>
                          <span className="font-mono text-xs text-muted-foreground">{comment.time}</span>
                        </div>
                        <p className="mt-1 font-mono text-sm text-muted-foreground">{comment.content}</p>
                        <div className="mt-2 flex items-center gap-4">
                          <button className="flex items-center gap-1 font-mono text-xs text-muted-foreground hover:text-neon-cyan">
                            <ThumbsUp className="h-3 w-3" /> {comment.likes}
                          </button>
                          <button className="font-mono text-xs text-muted-foreground hover:text-neon-cyan">回复</button>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </article>

        <Footer />
      </div>
    </main>
  )
}
