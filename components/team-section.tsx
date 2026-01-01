"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Shield, Cpu, Eye, Zap, X, ChevronRight, Calendar, MapPin, Award, Briefcase } from "lucide-react"

const notableFigures = [
  {
    id: "CIT-2077-001",
    name: "艾丽克斯·陈",
    role: "神经工程师",
    title: "阿拉萨卡集团 高级研究员",
    image: "/team-hacker-female-with-neon-cyan-highlights.jpg",
    stats: { 影响力: 95, 财富: 70, 技术: 98, 人脉: 85 },
    icon: Cpu,
    age: 28,
    origin: "新上海 | 第七区",
    currentLocation: "NEXUS | 企业广场",
    status: "活跃",
    biography: `艾丽克斯·陈是当代最杰出的神经工程师之一，专注于人机接口技术的研究。她出生于新上海的中产家庭，15岁时因在全球编程大赛中获得冠军而被阿拉萨卡集团发掘。

目前她主导着阿拉萨卡的"意识迷宫"项目，这是一项旨在强化人类大脑与数字系统连接的前沿研究。然而，有传言称她私下对企业的某些实验项目持保留态度。

据公开资料显示，她持有超过47项神经技术专利，是《神经科学前沿》杂志最年轻的封面人物。`,
    knownFor: ["意识迷宫项目首席架构师", "47项神经技术专利持有者", "全球神经工程协会理事"],
    quote: "技术应该服务于人类，而不是控制人类。这是我坚持的信念。",
  },
  {
    id: "CIT-2077-002",
    name: "马库斯·雷诺",
    role: "安保顾问",
    title: "前军科集团 特种作战指挥官",
    image: "/team-cyberpunk-soldier-male-with-tactical-gear.jpg",
    stats: { 影响力: 80, 财富: 65, 技术: 75, 人脉: 90 },
    icon: Shield,
    age: 35,
    origin: "新洛杉矶 | 战争区",
    currentLocation: "NEXUS | 工业区",
    status: "退役",
    biography: `马库斯·雷诺是一位传奇的军事人物，曾在2073年的"黑色黎明"行动中率领小队深入敌后执行任务。那次行动的细节至今仍是机密，但他是唯一的幸存者这一事实已被多方证实。

退役后，他选择远离企业纷争，在工业区经营一家小型安保咨询公司。他的身体有约60%接受了军用义体改造，使他成为活着的战争机器。

许多企业试图高薪聘请他，但都被拒绝。据知情人士透露，他正在调查当年行动中小队覆灭的真相。`,
    knownFor: ["黑色黎明行动唯一幸存者", "军科集团前特种部队指挥官", "军用义体适配率99.7%"],
    quote: "战争从未真正结束，它只是换了一种形式继续。",
  },
  {
    id: "CIT-2077-003",
    name: "艾娃·松本",
    role: "信息分析师",
    title: "独立情报经纪人",
    image: "/team-cyberpunk-asian-female-with-holographic-display.jpg",
    stats: { 影响力: 88, 财富: 82, 技术: 88, 人脉: 95 },
    icon: Eye,
    age: 24,
    origin: "NEXUS | 企业核心区",
    currentLocation: "NEXUS | 市中心",
    status: "活跃",
    biography: `艾娃·松本的身世一直是个谜。公开资料显示她毕业于荒坂精英学院，精通12种语言，是城中最知名的信息经纪人之一。

她的客户遍布各大企业、政府机构甚至地下组织。她以绝对的中立和信息的准确性著称，从不出卖客户，也从不提供虚假情报。

有未经证实的传言称她与荒坂家族有某种关联，但她本人从未对此发表评论。她的办公室位于市中心最高的摩天大楼顶层，普通人根本无法预约到她的时间。`,
    knownFor: ["NEXUS首席情报经纪人", "荒坂学院首席毕业生", "12种语言精通认证"],
    quote: "在这个城市，信息比子弹更致命。而我掌握着所有人想要的信息。",
  },
  {
    id: "CIT-2077-004",
    name: "杰克·沃尔夫",
    role: "义体技师",
    title: "地下改装界传奇人物",
    image: "/team-cyberpunk-mechanic-male-with-cybernetic-arm.jpg",
    stats: { 影响力: 75, 财富: 60, 技术: 99, 人脉: 70 },
    icon: Zap,
    age: 42,
    origin: "欧洲联邦 | 柏林废墟",
    currentLocation: "NEXUS | 工业区",
    status: "活跃",
    biography: `杰克·沃尔夫是义体改造界的传奇人物，被称为"义体之父"。他曾是米利泰克公司的首席义体工程师，负责开发下一代军用增强系统。

2071年，他突然从公司消失，同时带走了大量研究资料。米利泰克至今仍悬赏500万欧元追捕他。他选择在NEXUS工业区的地下开设工作室，为那些买不起企业义体的人提供改造服务。

他坚持使用自己的定制部件，拒绝安装任何带有企业后门的标准义体。在街头，他的名字就是品质和信任的代名词。`,
    knownFor: ["米利泰克前首席工程师", "定制义体数量超过500+", "地下改装界最高声誉"],
    quote: "企业想用义体控制人类，而我要让每个人都能自由地选择自己的身体。",
  },
]

export function TeamSection() {
  const [activeId, setActiveId] = useState<string | null>(null)
  const [selectedFigure, setSelectedFigure] = useState<(typeof notableFigures)[0] | null>(null)

  return (
    <section className="relative py-24 px-6">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="mb-2 font-mono text-xs tracking-[0.3em] text-neon-cyan">[ CITIZEN_DATABASE ]</p>
          <h2 className="text-glow-cyan mb-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            知名<span className="text-neon-magenta">人物</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            这些是塑造NEXUS命运的关键人物，他们的选择影响着整个城市的未来
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {notableFigures.map((figure) => {
            const Icon = figure.icon
            const isActive = activeId === figure.id

            return (
              <div
                key={figure.id}
                className={cn(
                  "group relative cursor-pointer overflow-hidden border border-border bg-card/50 backdrop-blur-sm transition-all duration-500",
                  isActive ? "border-neon-cyan border-glow-cyan" : "hover:border-neon-cyan/50",
                )}
                onMouseEnter={() => setActiveId(figure.id)}
                onMouseLeave={() => setActiveId(null)}
                onClick={() => setSelectedFigure(figure)}
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={figure.image || "/placeholder.svg"}
                    alt={figure.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

                  <div
                    className={cn(
                      "absolute inset-0 bg-gradient-to-b from-neon-cyan/20 via-transparent to-transparent transition-transform duration-1000",
                      isActive ? "translate-y-full" : "-translate-y-full",
                    )}
                  />

                  <div className="absolute left-3 top-3 border border-neon-cyan/50 bg-background/80 px-2 py-1 font-mono text-xs text-neon-cyan">
                    {figure.id}
                  </div>

                  <div className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center border border-neon-magenta/50 bg-background/80">
                    <Icon className="h-5 w-5 text-neon-magenta" />
                  </div>

                  <div className="absolute bottom-20 left-0 right-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                    <span className="flex items-center gap-1 border border-neon-cyan/50 bg-background/90 px-3 py-1.5 font-mono text-xs text-neon-cyan">
                      查看详细资料 <ChevronRight className="h-3 w-3" />
                    </span>
                  </div>
                </div>

                <div className="relative p-4">
                  <p className="mb-1 font-mono text-xs tracking-wider text-neon-magenta">{figure.role}</p>
                  <h3 className="mb-1 text-lg font-bold text-foreground">{figure.name}</h3>
                  <p className="mb-4 text-sm text-muted-foreground">{figure.title}</p>

                  <div className="space-y-2">
                    {Object.entries(figure.stats).map(([key, value]) => (
                      <div key={key} className="flex items-center gap-2">
                        <span className="w-16 font-mono text-xs text-muted-foreground">{key}</span>
                        <div className="h-1.5 flex-1 overflow-hidden bg-muted">
                          <div
                            className={cn(
                              "h-full transition-all duration-700",
                              key === "影响力" && "bg-neon-cyan",
                              key === "财富" && "bg-neon-yellow",
                              key === "技术" && "bg-neon-magenta",
                              key === "人脉" && "bg-green-400",
                            )}
                            style={{ width: isActive ? `${value}%` : "0%" }}
                          />
                        </div>
                        <span className="w-8 font-mono text-xs text-foreground">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="absolute left-0 top-0 h-4 w-4 border-l-2 border-t-2 border-neon-cyan" />
                <div className="absolute bottom-0 right-0 h-4 w-4 border-b-2 border-r-2 border-neon-magenta" />
              </div>
            )
          })}
        </div>
      </div>

      {selectedFigure && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-md p-4"
          onClick={() => setSelectedFigure(null)}
        >
          <div
            className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto border border-neon-cyan bg-background/95 backdrop-blur-sm"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,255,255,0.02)_50%)] bg-[length:100%_4px] animate-pulse" />

            <button
              onClick={() => setSelectedFigure(null)}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center border border-neon-cyan/50 bg-background/80 text-neon-cyan transition-colors hover:bg-neon-cyan hover:text-background"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="h-1 w-full bg-gradient-to-r from-neon-cyan via-neon-magenta to-neon-cyan" />

            <div className="grid md:grid-cols-[350px_1fr]">
              <div className="relative border-r border-border">
                <div className="relative aspect-[3/4]">
                  <Image
                    src={selectedFigure.image || "/placeholder.svg"}
                    alt={selectedFigure.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

                  <div className="absolute left-4 top-4 border border-neon-cyan bg-background/90 px-3 py-1.5 font-mono text-sm text-neon-cyan">
                    {selectedFigure.id}
                  </div>

                  <div className="absolute right-4 top-4 border border-green-400 bg-background/90 px-3 py-1.5 font-mono text-sm text-green-400">
                    状态: {selectedFigure.status}
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <p className="font-mono text-sm tracking-[0.2em] text-neon-magenta">{selectedFigure.role}</p>
                    <h3 className="text-2xl font-bold text-foreground">{selectedFigure.name}</h3>
                    <p className="text-muted-foreground">{selectedFigure.title}</p>
                  </div>

                  <div className="space-y-2 border-t border-border pt-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4 text-neon-cyan" />
                      <span className="text-muted-foreground">年龄:</span>
                      <span className="text-foreground">{selectedFigure.age} 岁</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4 text-neon-cyan" />
                      <span className="text-muted-foreground">出生地:</span>
                      <span className="text-foreground">{selectedFigure.origin}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Briefcase className="h-4 w-4 text-neon-cyan" />
                      <span className="text-muted-foreground">现居地:</span>
                      <span className="text-foreground">{selectedFigure.currentLocation}</span>
                    </div>
                  </div>

                  <div className="space-y-2 border-t border-border pt-4">
                    <p className="font-mono text-xs text-muted-foreground">[ 社会影响力评估 ]</p>
                    {Object.entries(selectedFigure.stats).map(([key, value]) => (
                      <div key={key} className="flex items-center gap-2">
                        <span className="w-16 font-mono text-xs text-muted-foreground">{key}</span>
                        <div className="h-2 flex-1 overflow-hidden bg-muted">
                          <div
                            className={cn(
                              "h-full transition-all duration-1000",
                              key === "影响力" && "bg-neon-cyan",
                              key === "财富" && "bg-neon-yellow",
                              key === "技术" && "bg-neon-magenta",
                              key === "人脉" && "bg-green-400",
                            )}
                            style={{ width: `${value}%` }}
                          />
                        </div>
                        <span className="w-8 font-mono text-xs text-foreground">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-6">
                <div className="border-b border-border pb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="h-2 w-2 animate-pulse rounded-full bg-neon-cyan" />
                    <p className="font-mono text-xs tracking-[0.3em] text-neon-cyan">[ PUBLIC_RECORD ]</p>
                  </div>
                  <h4 className="text-xl font-bold text-foreground">人物简介</h4>
                </div>

                <div className="space-y-4">
                  <h5 className="flex items-center gap-2 font-mono text-sm text-neon-magenta">
                    <span className="h-px flex-1 bg-neon-magenta/30" />
                    背景资料
                    <span className="h-px flex-1 bg-neon-magenta/30" />
                  </h5>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    {selectedFigure.biography.split("\n\n").map((paragraph, i) => (
                      <p key={i} className="relative pl-4 border-l-2 border-neon-cyan/30">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h5 className="flex items-center gap-2 font-mono text-sm text-neon-magenta">
                    <span className="h-px flex-1 bg-neon-magenta/30" />
                    公开成就
                    <span className="h-px flex-1 bg-neon-magenta/30" />
                  </h5>
                  <div className="grid gap-2">
                    {selectedFigure.knownFor.map((achievement, i) => (
                      <div key={i} className="flex items-center gap-3 border border-border bg-card/50 px-4 py-3">
                        <Award className="h-5 w-5 text-neon-yellow" />
                        <span className="text-foreground">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative border border-neon-cyan/30 bg-neon-cyan/5 p-6">
                  <div className="absolute -top-3 left-4 bg-background px-2 font-mono text-xs text-neon-cyan">
                    公开言论
                  </div>
                  <blockquote className="text-lg italic text-foreground">"{selectedFigure.quote}"</blockquote>
                  <p className="mt-2 text-right font-mono text-sm text-neon-magenta">— {selectedFigure.name}</p>

                  <div className="absolute left-0 top-0 h-4 w-4 border-l-2 border-t-2 border-neon-cyan" />
                  <div className="absolute bottom-0 right-0 h-4 w-4 border-b-2 border-r-2 border-neon-cyan" />
                </div>

                <div className="flex items-center gap-2 border border-neon-yellow/30 bg-neon-yellow/5 px-4 py-3 text-sm text-neon-yellow">
                  <div className="h-2 w-2 animate-pulse rounded-full bg-neon-yellow" />
                  <span className="font-mono">声明: 以上信息来源于公开数据库，部分细节可能已过时</span>
                </div>
              </div>
            </div>

            <div className="h-1 w-full bg-gradient-to-r from-neon-magenta via-neon-cyan to-neon-magenta" />
          </div>
        </div>
      )}
    </section>
  )
}
