import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScanlineOverlay } from "@/components/scanline-overlay"
import {
  Calendar,
  Clock,
  Eye,
  ArrowRight,
  Flame,
  Zap,
  AlertTriangle,
  TrendingUp,
  Radio,
  MessageSquare,
  Share2,
  Bookmark,
  ChevronRight,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const newsItems = [
  {
    id: 1,
    title: "NEXUS 神经链路 4.0 发布：意识上传速度提升 300%",
    excerpt:
      "最新一代神经接口已通过安全认证，预计下月向公众开放预约。企业用户可提前申请内测资格。新系统采用量子纠缠技术，大幅降低了延迟和数据丢失率。",
    category: "技术突破",
    date: "2077-12-15",
    readTime: "5 分钟",
    views: 12847,
    comments: 234,
    image: "/cyberpunk-neural-interface-device-with-cyan-glow.jpg",
    hot: true,
    author: "Dr. 林雨晴",
    authorAvatar: "/cyberpunk-female-scientist-avatar.jpg",
  },
  {
    id: 2,
    title: "夜之城第七区电网升级完成，全面启用清洁聚变能源",
    excerpt:
      "历时三年的基础设施改造项目竣工，第七区成为首个完全脱离化石燃料的城区。市长办公室表示将在 2078 年推广至全城。",
    category: "城市建设",
    date: "2077-12-12",
    readTime: "3 分钟",
    views: 8562,
    comments: 89,
    image: "/futuristic-data-center-with-glowing-servers-and-bl.jpg",
    hot: false,
    author: "张明远",
    authorAvatar: "/cyberpunk-male-reporter-avatar.jpg",
  },
  {
    id: 3,
    title: "警告：新型 ICE 病毒在黑市流传，神经防火墙需立即更新",
    excerpt:
      "NEXUS 安全团队检测到一种可绕过标准防护的恶意程序，建议所有用户在 72 小时内完成系统升级。已有 47 例感染报告。",
    category: "安全警报",
    date: "2077-12-10",
    readTime: "2 分钟",
    views: 45231,
    comments: 567,
    image: "/cyberpunk-virtual-reality-digital-world-with-neon-.jpg",
    hot: true,
    author: "NEXUS 安全部",
    authorAvatar: "/cyberpunk-security-logo.jpg",
  },
  {
    id: 4,
    title: "荒坂集团与军科技达成合作，联合开发下一代义体技术",
    excerpt: "两大巨头的联盟将重塑义体市场格局，分析师预计相关产品将在 2078 年第二季度问世。股价应声上涨 15%。",
    category: "企业动态",
    date: "2077-12-08",
    readTime: "4 分钟",
    views: 6789,
    comments: 123,
    image: "/cyberpunk-neon-city-skyline-at-night-with-holograp.jpg",
    hot: false,
    author: "财经频道",
    authorAvatar: "/cyberpunk-news-channel-logo.jpg",
  },
  {
    id: 5,
    title: "赛博空间艺术展「数字涅槃」下周开幕，支持全息远程参观",
    excerpt: "本次展览汇集了来自 23 个国家的数字艺术家作品，探索人机融合时代的美学边界。VIP 票已售罄。",
    category: "文化活动",
    date: "2077-12-05",
    readTime: "3 分钟",
    views: 3421,
    comments: 45,
    image: "/cyberpunk-digital-art-exhibition.jpg",
    hot: false,
    author: "艺术周刊",
    authorAvatar: "/art-magazine-logo-neon.jpg",
  },
  {
    id: 6,
    title: "NEXUS 量子计算中心扩建完成，算力翻倍",
    excerpt: "新增的量子处理单元将支持更复杂的 AI 模型训练，预计每秒可处理 10 亿次并行运算。开放 API 申请中。",
    category: "技术突破",
    date: "2077-12-01",
    readTime: "4 分钟",
    views: 9876,
    comments: 156,
    image: "/quantum-computing-center-cyberpunk.jpg",
    hot: false,
    author: "科技前沿",
    authorAvatar: "/tech-news-logo-cyan.jpg",
  },
  {
    id: 7,
    title: "地下格斗联盟新赛季开启，义体改装上限再提高",
    excerpt: "联盟委员会宣布放宽义体改装限制，新赛季将允许更激进的战斗增强装置。安全组织对此表示担忧。",
    category: "体育娱乐",
    date: "2077-11-28",
    readTime: "3 分钟",
    views: 18234,
    comments: 432,
    image: "/cyberpunk-fighting-arena-neon.jpg",
    hot: true,
    author: "体育热线",
    authorAvatar: "/sports-news-logo.png",
  },
  {
    id: 8,
    title: "第五区发生大规模停电事故，官方称系统故障",
    excerpt: "昨夜第五区超过 10 万户居民经历长达 4 小时的断电。有消息称事故与黑客攻击有关，但官方予以否认。",
    category: "突发事件",
    date: "2077-11-25",
    readTime: "2 分钟",
    views: 32156,
    comments: 678,
    image: "/cyberpunk-city-blackout-dark-streets.jpg",
    hot: true,
    author: "市民日报",
    authorAvatar: "/newspaper-logo-neon.jpg",
  },
]

const categories = [
  { name: "全部", count: 128, icon: Radio },
  { name: "技术突破", count: 34, icon: Zap },
  { name: "安全警报", count: 18, icon: AlertTriangle },
  { name: "城市建设", count: 25, icon: TrendingUp },
  { name: "企业动态", count: 31, icon: TrendingUp },
  { name: "文化活动", count: 20, icon: MessageSquare },
]

const trendingTopics = [
  { tag: "#神经链路4.0", posts: 12453 },
  { tag: "#义体黑市", posts: 8921 },
  { tag: "#第七区能源", posts: 6543 },
  { tag: "#赛博艺术展", posts: 4532 },
  { tag: "#ICE病毒预警", posts: 3876 },
]

const liveUpdates = [
  { time: "14:32", content: "第三区交通管制已解除", type: "info" },
  { time: "14:15", content: "神经防火墙 v3.2.2 补丁发布", type: "update" },
  { time: "13:58", content: "荒坂大厦周边安保升级", type: "alert" },
  { time: "13:42", content: "量子通信网络维护完成", type: "success" },
  { time: "13:20", content: "第五区电力已完全恢复", type: "success" },
]

export default function NewsPage() {
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

        <section className="pt-24 pb-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="mb-12 text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-neon-cyan/30 bg-neon-cyan/10 px-4 py-1.5">
                <Zap className="h-4 w-4 text-neon-cyan" />
                <span className="font-mono text-xs text-neon-cyan">实时数据流</span>
              </div>
              <h1 className="font-mono text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                新闻<span className="text-neon-cyan text-glow-cyan">动态</span>
              </h1>
              <p className="mt-4 font-mono text-lg text-muted-foreground">
                来自赛博空间的最新资讯 // LIVE_FEED::ACTIVE
              </p>
            </div>

            <div className="mb-8 overflow-hidden rounded-lg border border-neon-cyan/30 bg-dark-surface/50 backdrop-blur">
              <div className="flex items-center gap-3 border-b border-neon-cyan/20 px-4 py-2">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500"></span>
                  </span>
                  <span className="font-mono text-xs font-semibold text-red-400">LIVE</span>
                </div>
                <span className="font-mono text-xs text-muted-foreground">实时更新</span>
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-2 p-4">
                {liveUpdates.map((update, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <span className="font-mono text-xs text-muted-foreground">{update.time}</span>
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        update.type === "alert"
                          ? "bg-neon-yellow"
                          : update.type === "success"
                            ? "bg-green-400"
                            : update.type === "update"
                              ? "bg-neon-cyan"
                              : "bg-muted-foreground"
                      }`}
                    />
                    <span className="font-mono text-sm text-foreground">{update.content}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-8 lg:flex-row">
              {/* Sidebar */}
              <aside className="w-full lg:w-72 shrink-0 space-y-4">
                {/* Categories */}
                <div className="rounded-lg border border-neon-cyan/20 bg-dark-surface/50 p-4 backdrop-blur">
                  <h3 className="mb-4 font-mono text-sm font-semibold text-neon-cyan">// 分类筛选</h3>
                  <div className="flex flex-wrap gap-2 lg:flex-col lg:gap-1">
                    {categories.map((cat, idx) => (
                      <button
                        key={cat.name}
                        className={`flex w-full items-center justify-between rounded px-3 py-2 font-mono text-sm transition-all ${
                          idx === 0
                            ? "bg-neon-cyan/20 text-neon-cyan"
                            : "text-muted-foreground hover:bg-neon-cyan/10 hover:text-neon-cyan"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <cat.icon className="h-4 w-4" />
                          <span>{cat.name}</span>
                        </div>
                        <span className="text-xs opacity-60">[{cat.count}]</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="rounded-lg border border-neon-magenta/20 bg-dark-surface/50 p-4 backdrop-blur">
                  <h3 className="mb-4 font-mono text-sm font-semibold text-neon-magenta">// 热门话题</h3>
                  <div className="space-y-3">
                    {trendingTopics.map((topic, idx) => (
                      <div key={idx} className="flex items-center justify-between">
                        <span className="font-mono text-sm text-neon-cyan hover:underline cursor-pointer">
                          {topic.tag}
                        </span>
                        <span className="font-mono text-xs text-muted-foreground">
                          {topic.posts.toLocaleString()} 讨论
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Alert Box */}
                <div className="rounded-lg border border-neon-yellow/30 bg-neon-yellow/5 p-4">
                  <div className="flex items-center gap-2 text-neon-yellow">
                    <AlertTriangle className="h-4 w-4" />
                    <span className="font-mono text-xs font-semibold">系统通知</span>
                  </div>
                  <p className="mt-2 font-mono text-xs text-muted-foreground">
                    神经防火墙 v3.2.2 更新已发布，请尽快完成升级以确保系统安全。
                  </p>
                  <button className="mt-3 w-full rounded bg-neon-yellow/20 py-1.5 font-mono text-xs text-neon-yellow transition-colors hover:bg-neon-yellow/30">
                    立即更新
                  </button>
                </div>

                <div className="rounded-lg border border-neon-cyan/20 bg-dark-surface/50 p-4 backdrop-blur">
                  <h3 className="mb-3 font-mono text-sm font-semibold text-foreground">订阅新闻推送</h3>
                  <p className="mb-3 font-mono text-xs text-muted-foreground">直接推送到你的神经链路</p>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="神经ID..."
                      className="flex-1 rounded border border-neon-cyan/30 bg-dark-surface px-3 py-1.5 font-mono text-xs text-foreground placeholder:text-muted-foreground focus:border-neon-cyan focus:outline-none"
                    />
                    <button className="rounded bg-neon-cyan/20 px-3 py-1.5 font-mono text-xs text-neon-cyan transition-colors hover:bg-neon-cyan/30">
                      订阅
                    </button>
                  </div>
                </div>
              </aside>

              {/* News Grid */}
              <div className="flex-1">
                <div className="mb-6">
                  <article className="group relative overflow-hidden rounded-lg border border-neon-cyan/30 bg-dark-surface/50 backdrop-blur transition-all hover:border-neon-cyan/50 hover:shadow-[0_0_30px_rgba(0,255,255,0.15)]">
                    <div className="flex flex-col md:flex-row">
                      <div className="relative h-64 md:h-auto md:w-1/2">
                        <Image
                          src={newsItems[0].image || "/placeholder.svg"}
                          alt={newsItems[0].title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-dark-surface md:bg-gradient-to-r" />
                        <div className="absolute top-4 left-4 flex items-center gap-2">
                          <span className="flex items-center gap-1 rounded bg-neon-magenta/80 px-2 py-1">
                            <Flame className="h-3 w-3 text-white" />
                            <span className="font-mono text-xs text-white">头条</span>
                          </span>
                          <span className="rounded bg-dark-surface/80 px-2 py-1 font-mono text-xs text-neon-cyan">
                            {newsItems[0].category}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col justify-between p-6">
                        <div>
                          <h2 className="mb-3 font-mono text-2xl font-bold text-foreground group-hover:text-neon-cyan transition-colors">
                            {newsItems[0].title}
                          </h2>
                          <p className="mb-4 font-mono text-sm text-muted-foreground leading-relaxed">
                            {newsItems[0].excerpt}
                          </p>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <Image
                              src={newsItems[0].authorAvatar || "/placeholder.svg"}
                              alt={newsItems[0].author}
                              width={32}
                              height={32}
                              className="rounded-full border border-neon-cyan/30"
                            />
                            <div>
                              <p className="font-mono text-sm text-foreground">{newsItems[0].author}</p>
                              <p className="font-mono text-xs text-muted-foreground">{newsItems[0].date}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-4 text-muted-foreground">
                            <span className="flex items-center gap-1 text-xs">
                              <Eye className="h-3 w-3" />
                              {newsItems[0].views.toLocaleString()}
                            </span>
                            <span className="flex items-center gap-1 text-xs">
                              <MessageSquare className="h-3 w-3" />
                              {newsItems[0].comments}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Link href={`/news/${newsItems[0].id}`} className="absolute inset-0 z-10" />
                  </article>
                </div>

                {/* Regular News Grid */}
                <div className="grid gap-6 md:grid-cols-2">
                  {newsItems.slice(1).map((item) => (
                    <article
                      key={item.id}
                      className="group relative overflow-hidden rounded-lg border border-neon-cyan/20 bg-dark-surface/50 backdrop-blur transition-all hover:border-neon-cyan/50 hover:shadow-[0_0_30px_rgba(0,255,255,0.1)]"
                    >
                      {/* Image */}
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-dark-surface to-transparent" />
                        {item.hot && (
                          <div className="absolute top-3 left-3 flex items-center gap-1 rounded bg-neon-magenta/80 px-2 py-1">
                            <Flame className="h-3 w-3 text-white" />
                            <span className="font-mono text-xs text-white">热门</span>
                          </div>
                        )}
                        <div className="absolute top-3 right-3 rounded bg-dark-surface/80 px-2 py-1 font-mono text-xs text-neon-cyan">
                          {item.category}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-4">
                        <h2 className="mb-2 font-mono text-lg font-semibold text-foreground line-clamp-2 group-hover:text-neon-cyan transition-colors">
                          {item.title}
                        </h2>
                        <p className="mb-4 font-mono text-sm text-muted-foreground line-clamp-2">{item.excerpt}</p>

                        {/* Author */}
                        <div className="mb-3 flex items-center gap-2">
                          <Image
                            src={item.authorAvatar || "/placeholder.svg"}
                            alt={item.author}
                            width={24}
                            height={24}
                            className="rounded-full"
                          />
                          <span className="font-mono text-xs text-muted-foreground">{item.author}</span>
                        </div>

                        {/* Meta */}
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <div className="flex items-center gap-4">
                            <span className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {item.date}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {item.readTime}
                            </span>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="flex items-center gap-1">
                              <Eye className="h-3 w-3" />
                              {item.views.toLocaleString()}
                            </span>
                            <span className="flex items-center gap-1">
                              <MessageSquare className="h-3 w-3" />
                              {item.comments}
                            </span>
                          </div>
                        </div>

                        <div className="mt-4 flex items-center justify-between border-t border-neon-cyan/10 pt-3">
                          <div className="flex items-center gap-2">
                            <button className="rounded p-1.5 text-muted-foreground transition-colors hover:bg-neon-cyan/10 hover:text-neon-cyan">
                              <Bookmark className="h-4 w-4" />
                            </button>
                            <button className="rounded p-1.5 text-muted-foreground transition-colors hover:bg-neon-cyan/10 hover:text-neon-cyan">
                              <Share2 className="h-4 w-4" />
                            </button>
                          </div>
                          <span className="flex items-center gap-1 font-mono text-xs text-neon-cyan">
                            阅读全文 <ChevronRight className="h-3 w-3" />
                          </span>
                        </div>
                      </div>

                      {/* Read More Link */}
                      <Link
                        href={`/news/${item.id}`}
                        className="absolute inset-0 z-10"
                        aria-label={`阅读更多: ${item.title}`}
                      />
                    </article>
                  ))}
                </div>

                {/* Load More */}
                <div className="mt-8 text-center">
                  <button className="inline-flex items-center gap-2 rounded-lg border border-neon-cyan/30 bg-transparent px-6 py-3 font-mono text-sm text-neon-cyan transition-all hover:bg-neon-cyan/10 hover:border-neon-cyan/50">
                    加载更多资讯
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  )
}
