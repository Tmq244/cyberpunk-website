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
  Search,
  Filter,
  ChevronRight,
  Lock,
  Unlock,
  Clock,
  Eye,
  Download,
  Star,
  AlertCircle,
  HardDrive,
  Activity,
  Layers,
  Globe,
  Fingerprint,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const archiveCategories = [
  {
    id: "districts",
    title: "城区档案",
    description: "夜之城各区域的详细资料与历史记录",
    icon: Building2,
    count: 47,
    color: "neon-cyan",
  },
  {
    id: "corporations",
    title: "企业数据",
    description: "主要企业的公开资料与市场分析",
    icon: Database,
    count: 89,
    color: "neon-magenta",
  },
  {
    id: "technology",
    title: "技术文档",
    description: "义体、神经接口与 AI 系统的技术规格",
    icon: Cpu,
    count: 156,
    color: "neon-cyan",
  },
  {
    id: "personnel",
    title: "人物档案",
    description: "公众人物与重要人士的背景资料",
    icon: Users,
    count: 234,
    color: "neon-yellow",
  },
  {
    id: "security",
    title: "安全协议",
    description: "网络安全指南与威胁情报",
    icon: Shield,
    count: 67,
    color: "neon-magenta",
  },
  {
    id: "history",
    title: "历史记录",
    description: "城市发展史与重大事件回顾",
    icon: FileText,
    count: 128,
    color: "neon-cyan",
  },
]

const featuredArchives = [
  {
    id: 1,
    title: "夜之城发展史 2020-2077",
    category: "历史记录",
    classification: "公开",
    lastUpdated: "2077-12-10",
    accessCount: 45678,
    size: "2.4 GB",
    rating: 4.8,
    image: "/cyberpunk-neon-city-skyline-at-night-with-holograp.jpg",
    description: "从企业战争到赛博时代的完整城市演变记录",
  },
  {
    id: 2,
    title: "NEXUS 神经接口技术白皮书",
    category: "技术文档",
    classification: "公开",
    lastUpdated: "2077-12-08",
    accessCount: 23456,
    size: "856 MB",
    rating: 4.9,
    image: "/cyberpunk-neural-interface-device-with-cyan-glow.jpg",
    description: "第四代神经链路的完整技术规格与安全指南",
  },
  {
    id: 3,
    title: "第七区基础设施规划图",
    category: "城区档案",
    classification: "限制",
    lastUpdated: "2077-12-05",
    accessCount: 12345,
    size: "1.2 GB",
    rating: 4.5,
    image: "/futuristic-data-center-with-glowing-servers-and-bl.jpg",
    description: "包含能源网络、交通系统和安保布局的详细规划",
  },
  {
    id: 4,
    title: "赛博空间安全威胁年度报告",
    category: "安全协议",
    classification: "机密",
    lastUpdated: "2077-12-01",
    accessCount: 8901,
    size: "567 MB",
    rating: 4.7,
    image: "/cyberpunk-virtual-reality-digital-world-with-neon-.jpg",
    description: "2077年度网络威胁态势分析与防护建议",
  },
  {
    id: 5,
    title: "荒坂集团企业架构分析",
    category: "企业数据",
    classification: "限制",
    lastUpdated: "2077-11-28",
    accessCount: 15678,
    size: "1.8 GB",
    rating: 4.6,
    image: "/arasaka-corporation-cyberpunk-building.jpg",
    description: "组织结构、子公司网络与全球业务布局",
  },
  {
    id: 6,
    title: "义体改装安全指南 v4.0",
    category: "技术文档",
    classification: "公开",
    lastUpdated: "2077-11-25",
    accessCount: 34567,
    size: "432 MB",
    rating: 4.9,
    image: "/cyberpunk-cyborg-arm-modification.jpg",
    description: "官方认证的义体安装、维护与升级指南",
  },
]

const recentlyAccessed = [
  { title: "义体兼容性指南 v4.2", date: "2 小时前", type: "doc" },
  { title: "荒坂集团企业架构分析", date: "5 小时前", type: "data" },
  { title: "第三区治安报告 Q4", date: "1 天前", type: "report" },
  { title: "神经网络接口协议规范", date: "2 天前", type: "tech" },
  { title: "城市交通系统技术手册", date: "3 天前", type: "manual" },
]

const personnelFiles = [
  {
    name: "Johnny Silverhand",
    role: "传奇摇滚客 / 反抗者",
    status: "已故 (数据残留)",
    threat: "高",
    image: "/cyberpunk-rocker-male-silver-hair.jpg",
  },
  {
    name: "Saburo Arasaka",
    role: "荒坂集团 CEO",
    status: "活跃",
    threat: "极高",
    image: "/cyberpunk-japanese-old-businessman.jpg",
  },
  {
    name: "Rogue Amendiares",
    role: "来世酒吧老板 / 掮客",
    status: "活跃",
    threat: "中",
    image: "/cyberpunk-fixer-woman-bar-owner.jpg",
  },
]

const districtData = [
  { name: "市中心", population: "2.3M", crimeRate: "低", status: "稳定" },
  { name: "沃森区", population: "1.8M", crimeRate: "中", status: "监控中" },
  { name: "威斯布鲁克", population: "890K", crimeRate: "低", status: "稳定" },
  { name: "海伍德", population: "1.2M", crimeRate: "高", status: "警戒" },
  { name: "圣多明戈", population: "2.1M", crimeRate: "中", status: "监控中" },
  { name: "太平州", population: "1.5M", crimeRate: "极高", status: "危险" },
]

export default function ArchivesPage() {
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

      <Suspense fallback={null}>
        <div className="relative z-10">
          <ScanlineOverlay />
          <Navbar />

          <section className="pt-24 pb-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              {/* Header */}
              <div className="mb-12 text-center">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-neon-magenta/30 bg-neon-magenta/10 px-4 py-1.5">
                  <Database className="h-4 w-4 text-neon-magenta" />
                  <span className="font-mono text-xs text-neon-magenta">数据库在线</span>
                </div>
                <h1 className="font-mono text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                  城市<span className="text-neon-magenta text-glow-magenta">档案</span>
                </h1>
                <p className="mt-4 font-mono text-lg text-muted-foreground">
                  NEXUS 信息数据库 // ACCESS_LEVEL::CITIZEN
                </p>
              </div>

              <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-lg border border-neon-cyan/20 bg-dark-surface/50 p-4 backdrop-blur">
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-neon-cyan/10 p-2">
                      <HardDrive className="h-5 w-5 text-neon-cyan" />
                    </div>
                    <div>
                      <p className="font-mono text-2xl font-bold text-foreground">721</p>
                      <p className="font-mono text-xs text-muted-foreground">总档案数</p>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg border border-neon-magenta/20 bg-dark-surface/50 p-4 backdrop-blur">
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-neon-magenta/10 p-2">
                      <Activity className="h-5 w-5 text-neon-magenta" />
                    </div>
                    <div>
                      <p className="font-mono text-2xl font-bold text-foreground">1,234</p>
                      <p className="font-mono text-xs text-muted-foreground">今日访问</p>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg border border-green-500/20 bg-dark-surface/50 p-4 backdrop-blur">
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-green-500/10 p-2">
                      <Layers className="h-5 w-5 text-green-400" />
                    </div>
                    <div>
                      <p className="font-mono text-2xl font-bold text-foreground">99.7%</p>
                      <p className="font-mono text-xs text-muted-foreground">数据完整性</p>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg border border-neon-yellow/20 bg-dark-surface/50 p-4 backdrop-blur">
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-neon-yellow/10 p-2">
                      <Globe className="h-5 w-5 text-neon-yellow" />
                    </div>
                    <div>
                      <p className="font-mono text-2xl font-bold text-foreground">47</p>
                      <p className="font-mono text-xs text-muted-foreground">在线节点</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Search Bar */}
              <div className="mx-auto mb-12 max-w-2xl">
                <div className="flex items-center gap-2 rounded-lg border border-neon-cyan/30 bg-dark-surface/50 p-2 backdrop-blur">
                  <Search className="ml-2 h-5 w-5 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="搜索档案... (支持关键词、标签、分类)"
                    className="flex-1 bg-transparent font-mono text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
                  />
                  <button className="flex items-center gap-1 rounded bg-neon-cyan/20 px-3 py-1.5 font-mono text-xs text-neon-cyan transition-colors hover:bg-neon-cyan/30">
                    <Filter className="h-3 w-3" />
                    高级筛选
                  </button>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="font-mono text-xs text-muted-foreground">热门搜索:</span>
                  {["神经接口", "义体改装", "荒坂", "第七区", "安全协议"].map((tag) => (
                    <button
                      key={tag}
                      className="rounded bg-dark-surface/50 px-2 py-1 font-mono text-xs text-neon-cyan transition-colors hover:bg-neon-cyan/20"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              {/* Categories Grid */}
              <div className="mb-16">
                <h2 className="mb-6 font-mono text-xl font-semibold text-foreground">
                  <span className="text-neon-cyan">//</span> 档案分类
                </h2>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {archiveCategories.map((cat) => (
                    <Link
                      key={cat.id}
                      href={`/archives/${cat.id}`}
                      className={`group relative overflow-hidden rounded-lg border border-${cat.color}/20 bg-dark-surface/50 p-6 backdrop-blur transition-all hover:border-${cat.color}/50 hover:shadow-[0_0_30px_rgba(0,255,255,0.1)]`}
                    >
                      <div className="flex items-start justify-between">
                        <div
                          className={`rounded-lg bg-${cat.color}/10 p-3 text-${cat.color} transition-transform group-hover:scale-110`}
                        >
                          <cat.icon className="h-6 w-6" />
                        </div>
                        <span className="font-mono text-xs text-muted-foreground">[{cat.count}]</span>
                      </div>
                      <h3 className="mt-4 font-mono text-lg font-semibold text-foreground group-hover:text-neon-cyan transition-colors">
                        {cat.title}
                      </h3>
                      <p className="mt-2 font-mono text-sm text-muted-foreground">{cat.description}</p>
                      <ChevronRight className="absolute bottom-4 right-4 h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-neon-cyan" />
                    </Link>
                  ))}
                </div>
              </div>

              <div className="mb-16">
                <h2 className="mb-6 font-mono text-xl font-semibold text-foreground">
                  <span className="text-neon-cyan">//</span> 城区实时数据
                </h2>
                <div className="overflow-hidden rounded-lg border border-neon-cyan/20 bg-dark-surface/50 backdrop-blur">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-neon-cyan/20 bg-neon-cyan/5">
                          <th className="px-4 py-3 text-left font-mono text-xs font-semibold text-neon-cyan">区域</th>
                          <th className="px-4 py-3 text-left font-mono text-xs font-semibold text-neon-cyan">人口</th>
                          <th className="px-4 py-3 text-left font-mono text-xs font-semibold text-neon-cyan">犯罪率</th>
                          <th className="px-4 py-3 text-left font-mono text-xs font-semibold text-neon-cyan">状态</th>
                        </tr>
                      </thead>
                      <tbody>
                        {districtData.map((district, idx) => (
                          <tr
                            key={idx}
                            className="border-b border-neon-cyan/10 last:border-0 hover:bg-neon-cyan/5 transition-colors"
                          >
                            <td className="px-4 py-3 font-mono text-sm text-foreground">{district.name}</td>
                            <td className="px-4 py-3 font-mono text-sm text-muted-foreground">{district.population}</td>
                            <td className="px-4 py-3">
                              <span
                                className={`inline-block rounded px-2 py-0.5 font-mono text-xs ${
                                  district.crimeRate === "低"
                                    ? "bg-green-500/20 text-green-400"
                                    : district.crimeRate === "中"
                                      ? "bg-neon-yellow/20 text-neon-yellow"
                                      : district.crimeRate === "高"
                                        ? "bg-orange-500/20 text-orange-400"
                                        : "bg-red-500/20 text-red-400"
                                }`}
                              >
                                {district.crimeRate}
                              </span>
                            </td>
                            <td className="px-4 py-3">
                              <span
                                className={`inline-flex items-center gap-1 font-mono text-xs ${
                                  district.status === "稳定"
                                    ? "text-green-400"
                                    : district.status === "监控中"
                                      ? "text-neon-yellow"
                                      : district.status === "警戒"
                                        ? "text-orange-400"
                                        : "text-red-400"
                                }`}
                              >
                                <span
                                  className={`h-1.5 w-1.5 rounded-full ${
                                    district.status === "稳定"
                                      ? "bg-green-400"
                                      : district.status === "监控中"
                                        ? "bg-neon-yellow"
                                        : district.status === "警戒"
                                          ? "bg-orange-400"
                                          : "bg-red-400 animate-pulse"
                                  }`}
                                />
                                {district.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-8 lg:flex-row">
                {/* Featured Archives */}
                <div className="flex-1">
                  <h2 className="mb-6 font-mono text-xl font-semibold text-foreground">
                    <span className="text-neon-cyan">//</span> 精选档案
                  </h2>
                  <div className="space-y-4">
                    {featuredArchives.map((archive) => (
                      <article
                        key={archive.id}
                        className="group flex gap-4 overflow-hidden rounded-lg border border-neon-cyan/20 bg-dark-surface/50 p-4 backdrop-blur transition-all hover:border-neon-cyan/50"
                      >
                        <div className="relative h-28 w-40 shrink-0 overflow-hidden rounded">
                          <Image
                            src={archive.image || "/placeholder.svg"}
                            alt={archive.title}
                            fill
                            className="object-cover transition-transform group-hover:scale-110"
                          />
                        </div>
                        <div className="flex flex-1 flex-col justify-between">
                          <div>
                            <div className="mb-1 flex items-center gap-2">
                              <span className="font-mono text-xs text-neon-cyan">{archive.category}</span>
                              <span
                                className={`flex items-center gap-1 rounded px-1.5 py-0.5 font-mono text-xs ${
                                  archive.classification === "公开"
                                    ? "bg-green-500/20 text-green-400"
                                    : archive.classification === "限制"
                                      ? "bg-neon-yellow/20 text-neon-yellow"
                                      : "bg-red-500/20 text-red-400"
                                }`}
                              >
                                {archive.classification === "公开" ? (
                                  <Unlock className="h-3 w-3" />
                                ) : (
                                  <Lock className="h-3 w-3" />
                                )}
                                {archive.classification}
                              </span>
                              <span className="flex items-center gap-1 font-mono text-xs text-neon-yellow">
                                <Star className="h-3 w-3 fill-neon-yellow" />
                                {archive.rating}
                              </span>
                            </div>
                            <h3 className="font-mono text-base font-semibold text-foreground group-hover:text-neon-cyan transition-colors">
                              {archive.title}
                            </h3>
                            <p className="mt-1 font-mono text-xs text-muted-foreground line-clamp-1">
                              {archive.description}
                            </p>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4 font-mono text-xs text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                {archive.lastUpdated}
                              </span>
                              <span className="flex items-center gap-1">
                                <Eye className="h-3 w-3" />
                                {archive.accessCount.toLocaleString()}
                              </span>
                              <span className="flex items-center gap-1">
                                <HardDrive className="h-3 w-3" />
                                {archive.size}
                              </span>
                            </div>
                            <button className="flex items-center gap-1 rounded bg-neon-cyan/20 px-2 py-1 font-mono text-xs text-neon-cyan transition-colors hover:bg-neon-cyan/30">
                              <Download className="h-3 w-3" />
                              下载
                            </button>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>

                {/* Sidebar */}
                <aside className="w-full lg:w-80 shrink-0 space-y-4">
                  <div className="rounded-lg border border-neon-magenta/20 bg-dark-surface/50 p-4 backdrop-blur">
                    <h3 className="mb-4 flex items-center gap-2 font-mono text-sm font-semibold text-neon-magenta">
                      <Fingerprint className="h-4 w-4" />
                      // 重点人物
                    </h3>
                    <div className="space-y-3">
                      {personnelFiles.map((person, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-3 rounded-lg border border-neon-cyan/10 bg-dark-surface/30 p-2 transition-colors hover:border-neon-cyan/30"
                        >
                          <Image
                            src={person.image || "/placeholder.svg"}
                            alt={person.name}
                            width={48}
                            height={48}
                            className="rounded-lg border border-neon-cyan/20"
                          />
                          <div className="flex-1 min-w-0">
                            <p className="font-mono text-sm font-semibold text-foreground truncate">{person.name}</p>
                            <p className="font-mono text-xs text-muted-foreground truncate">{person.role}</p>
                            <div className="mt-1 flex items-center gap-2">
                              <span
                                className={`font-mono text-xs ${
                                  person.status.includes("活跃") ? "text-green-400" : "text-muted-foreground"
                                }`}
                              >
                                {person.status}
                              </span>
                              <span
                                className={`rounded px-1 font-mono text-xs ${
                                  person.threat === "极高"
                                    ? "bg-red-500/20 text-red-400"
                                    : person.threat === "高"
                                      ? "bg-orange-500/20 text-orange-400"
                                      : "bg-neon-yellow/20 text-neon-yellow"
                                }`}
                              >
                                威胁: {person.threat}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <button className="mt-3 w-full rounded border border-neon-magenta/30 py-2 font-mono text-xs text-neon-magenta transition-colors hover:bg-neon-magenta/10">
                      查看全部人物档案
                    </button>
                  </div>

                  {/* Recently Accessed */}
                  <div className="rounded-lg border border-neon-cyan/20 bg-dark-surface/50 p-4 backdrop-blur">
                    <h3 className="mb-4 font-mono text-sm font-semibold text-neon-cyan">// 最近访问</h3>
                    <div className="space-y-3">
                      {recentlyAccessed.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-between border-b border-neon-cyan/10 pb-2 last:border-0 last:pb-0"
                        >
                          <div className="flex items-center gap-2 min-w-0">
                            <FileText className="h-4 w-4 shrink-0 text-neon-cyan" />
                            <span className="font-mono text-xs text-muted-foreground truncate">{item.title}</span>
                          </div>
                          <span className="font-mono text-xs text-muted-foreground/60 shrink-0 ml-2">{item.date}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-lg border border-neon-yellow/20 bg-dark-surface/50 p-4 backdrop-blur">
                    <h3 className="mb-3 flex items-center gap-2 font-mono text-sm font-semibold text-neon-yellow">
                      <AlertCircle className="h-4 w-4" />
                      // 访问权限
                    </h3>
                    <div className="space-y-2 font-mono text-xs">
                      <div className="flex items-center gap-2">
                        <span className="flex h-4 w-4 items-center justify-center rounded bg-green-500/20">
                          <Unlock className="h-3 w-3 text-green-400" />
                        </span>
                        <span className="text-muted-foreground">公开 - 所有市民可访问</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="flex h-4 w-4 items-center justify-center rounded bg-neon-yellow/20">
                          <Lock className="h-3 w-3 text-neon-yellow" />
                        </span>
                        <span className="text-muted-foreground">限制 - 需要二级认证</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="flex h-4 w-4 items-center justify-center rounded bg-red-500/20">
                          <Lock className="h-3 w-3 text-red-400" />
                        </span>
                        <span className="text-muted-foreground">机密 - 需要特殊授权</span>
                      </div>
                    </div>
                    <button className="mt-3 w-full rounded bg-neon-yellow/20 py-1.5 font-mono text-xs text-neon-yellow transition-colors hover:bg-neon-yellow/30">
                      申请权限升级
                    </button>
                  </div>
                </aside>
              </div>
            </div>
          </section>

          <Footer />
        </div>
      </Suspense>
    </main>
  )
}
