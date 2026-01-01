"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { ExternalLink, Github, Lock, X, Users, Calendar, Target, FileText, AlertTriangle } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "幽灵协议",
    subtitle: "GHOST_PROTOCOL",
    description: "为跨国企业开发的零日漏洞检测系统",
    image: "/project-ghost-protocol-interface.jpg",
    tags: ["神经网络", "安全审计", "AI"],
    status: "已完成",
    classified: false,
    details: {
      client: "阿拉萨卡安全部门",
      duration: "2076.03 - 2077.01",
      team: "12名高级工程师",
      budget: "¥15,000,000",
      overview:
        "幽灵协议是一套革命性的零日漏洞检测系统，采用第七代神经网络架构，能够在漏洞被公开前72小时预测并识别潜在的安全威胁。该系统已成功预测并阻止了超过200次针对客户的高级持续性威胁（APT）攻击。",
      objectives: [
        "实现亚毫秒级威胁检测响应",
        "建立全球威胁情报共享网络",
        "开发自适应防御机制",
        "创建零日漏洞预测模型",
      ],
      achievements: [
        "威胁检测准确率达99.7%",
        "平均响应时间0.3毫秒",
        "成功预防经济损失超过¥500亿",
        "获得2077年度最佳安全产品奖",
      ],
      techStack: ["Gen-7 Neural", "量子加密", "分布式存储", "边缘计算"],
      challenges:
        "最大的挑战是在保持高检测率的同时降低误报。我们通过引入对抗性训练和人类专家反馈循环，将误报率从初期的12%降至0.3%。",
    },
  },
  {
    id: 2,
    title: "黑冰防线",
    subtitle: "BLACK_ICE",
    description: "下一代企业级入侵检测与响应平台",
    image: "/project-black-ice-defense.jpg",
    tags: ["防火墙", "实时监控", "机器学习"],
    status: "进行中",
    classified: false,
    details: {
      client: "夜之城政府机构",
      duration: "2077.06 - 进行中",
      team: "28名工程师 + 5名安全顾问",
      budget: "¥45,000,000",
      overview:
        "黑冰防线得名于传说中能够反杀入侵者的致命ICE程序。这是一个主动防御平台，不仅能检测入侵，还能追踪攻击者并在法律允许范围内实施反制。该项目旨在为夜之城的关键基础设施提供军事级别的保护。",
      objectives: ["建立城市级网络防御体系", "实现攻击者实时追踪定位", "部署蜜罐网络收集威胁情报", "开发合法反制能力"],
      achievements: [
        "已部署覆盖87%城市网络",
        "成功追踪并逮捕47名网络罪犯",
        "收集威胁情报超过5TB",
        "基础设施攻击下降73%",
      ],
      techStack: ["神经网络 ICE", "量子追踪", "分布式蜜罐", "法律合规引擎"],
      challenges:
        "在实施反制措施时必须确保不触犯法律红线。我们与法律团队紧密合作，开发了一套实时合规检查系统，确保所有反制行动都在法律框架内进行。",
    },
  },
  {
    id: 3,
    title: "量子锁",
    subtitle: "QUANTUM_LOCK",
    description: "[机密项目 - 需要 ALPHA 级别权限]",
    image: "/project-quantum-lock-classified.jpg",
    tags: ["量子加密", "机密"],
    status: "机密",
    classified: true,
    details: {
      client: "[已编辑]",
      duration: "[已编辑]",
      team: "[已编辑]",
      budget: "[已编辑]",
      overview:
        "您没有足够的权限访问此项目详情。此项目涉及国家安全级别的机密信息。任何未经授权的访问尝试都将被记录并上报相关部门。",
      objectives: ["[数据已加密]", "[数据已加密]", "[数据已加密]"],
      achievements: ["[数据已加密]", "[数据已加密]"],
      techStack: ["[已编辑]"],
      challenges: "[访问被拒绝]",
    },
  },
  {
    id: 4,
    title: "神经猎手",
    subtitle: "NEURO_HUNTER",
    description: "自动化恶意软件追踪与清除系统",
    image: "/project-neuro-hunter-tracking.jpg",
    tags: ["恶意软件", "自动化", "深度学习"],
    status: "已完成",
    classified: false,
    details: {
      client: "多家企业联合委托",
      duration: "2075.09 - 2076.08",
      team: "8名AI专家 + 6名安全研究员",
      budget: "¥8,500,000",
      overview:
        "神经猎手是一套自主运行的恶意软件追踪与清除系统。它像一个数字猎人，能够在网络中主动搜索、识别并消灭恶意程序。该系统采用深度强化学习，能够适应不断演变的恶意软件变种。",
      objectives: ["实现全自动恶意软件检测", "建立恶意软件基因图谱", "开发自我进化的清除算法", "降低人工干预需求"],
      achievements: ["日均清除恶意软件超过10万个", "新变种识别率达94%", "人工干预需求降低89%", "客户系统感染率下降96%"],
      techStack: ["深度强化学习", "恶意软件沙箱", "行为分析引擎", "自动化响应"],
      challenges:
        '最困难的部分是让系统区分恶意行为和正常的边界行为。我们收集了超过100万个恶意样本和合法程序，训练模型理解真正的"恶意意图"。',
    },
  },
]

export function ProjectsSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)

  const handleProjectClick = (project: (typeof projects)[0]) => {
    if (!project.classified) {
      setSelectedProject(project)
    }
  }

  return (
    <section className="relative py-24 px-6">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,0,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="mb-2 font-mono text-xs tracking-[0.3em] text-neon-magenta">[ PROJECT_ARCHIVE ]</p>
          <h2 className="text-glow-cyan text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            项目<span className="text-neon-magenta">档案</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">我们完成的部分公开项目展示 · 点击查看详细报告</p>
        </div>

        {/* Projects Grid - Bento style */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* Large featured project */}
          <div
            className={cn(
              "group relative cursor-pointer overflow-hidden border border-border bg-card/30 backdrop-blur-sm transition-all duration-500 md:col-span-2 md:row-span-2",
              hoveredId === projects[0].id ? "border-neon-cyan border-glow-cyan" : "hover:border-neon-cyan/50",
            )}
            onMouseEnter={() => setHoveredId(projects[0].id)}
            onMouseLeave={() => setHoveredId(null)}
            onClick={() => handleProjectClick(projects[0])}
          >
            <div className="relative aspect-[16/9] md:aspect-auto md:h-full">
              <Image
                src={projects[0].image || "/placeholder.svg"}
                alt={projects[0].title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <div className="mb-2 flex items-center gap-2">
                  <span className="font-mono text-xs tracking-wider text-neon-magenta">{projects[0].subtitle}</span>
                  <span className="bg-neon-cyan/20 px-2 py-0.5 font-mono text-xs text-neon-cyan">
                    {projects[0].status}
                  </span>
                </div>
                <h3 className="mb-2 text-2xl font-bold text-foreground md:text-3xl">{projects[0].title}</h3>
                <p className="mb-4 max-w-lg text-muted-foreground">{projects[0].description}</p>
                <div className="flex flex-wrap gap-2">
                  {projects[0].tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-border bg-background/50 px-2 py-1 font-mono text-xs text-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action buttons */}
              <div className="absolute right-4 top-4 flex gap-2">
                <button className="flex h-10 w-10 items-center justify-center border border-border bg-background/80 transition-colors hover:border-neon-cyan hover:text-neon-cyan">
                  <Github className="h-5 w-5" />
                </button>
                <button className="flex h-10 w-10 items-center justify-center border border-border bg-background/80 transition-colors hover:border-neon-cyan hover:text-neon-cyan">
                  <ExternalLink className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Smaller projects */}
          {projects.slice(1).map((project) => (
            <div
              key={project.id}
              className={cn(
                "group relative overflow-hidden border border-border bg-card/30 backdrop-blur-sm transition-all duration-500",
                project.classified ? "cursor-not-allowed" : "cursor-pointer",
                hoveredId === project.id
                  ? project.classified
                    ? "border-red-500/50"
                    : "border-neon-cyan border-glow-cyan"
                  : "hover:border-neon-cyan/50",
              )}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => handleProjectClick(project)}
            >
              <div className="relative aspect-video">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className={cn(
                    "object-cover transition-transform duration-700",
                    project.classified ? "blur-sm grayscale" : "group-hover:scale-105",
                  )}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

                {/* Classified overlay */}
                {project.classified && (
                  <div className="absolute inset-0 flex items-center justify-center bg-background/80">
                    <div className="text-center">
                      <Lock className="mx-auto mb-2 h-8 w-8 text-red-500" />
                      <p className="font-mono text-sm text-red-500">权限不足</p>
                    </div>
                  </div>
                )}
              </div>

              <div className="p-4">
                <div className="mb-2 flex items-center gap-2">
                  <span className="font-mono text-xs tracking-wider text-neon-magenta">{project.subtitle}</span>
                  <span
                    className={cn(
                      "px-2 py-0.5 font-mono text-xs",
                      project.classified
                        ? "bg-red-500/20 text-red-500"
                        : project.status === "进行中"
                          ? "bg-neon-yellow/20 text-neon-yellow"
                          : "bg-neon-cyan/20 text-neon-cyan",
                    )}
                  >
                    {project.status}
                  </span>
                </div>
                <h3 className="mb-1 text-lg font-bold text-foreground">{project.title}</h3>
                <p className="text-sm text-muted-foreground">{project.description}</p>
              </div>

              {/* Corner accents */}
              <div
                className={cn(
                  "absolute left-0 top-0 h-4 w-4 border-l border-t",
                  project.classified ? "border-red-500/50" : "border-neon-cyan/50",
                )}
              />
              <div
                className={cn(
                  "absolute bottom-0 right-0 h-4 w-4 border-b border-r",
                  project.classified ? "border-red-500/50" : "border-neon-magenta/50",
                )}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-sm p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto border border-neon-cyan bg-card/95 backdrop-blur shadow-[0_0_50px_rgba(0,255,255,0.2)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Scanline effect */}
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] opacity-20" />

            {/* Header with image */}
            <div className="relative h-48 md:h-64">
              <Image
                src={selectedProject.image || "/placeholder.svg"}
                alt={selectedProject.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/80 to-transparent" />

              {/* Close button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center border border-border bg-background/80 text-muted-foreground transition-colors hover:border-red-500 hover:text-red-500"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Title overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="font-mono text-xs tracking-[0.2em] text-neon-magenta mb-2">
                  [ {selectedProject.subtitle} ]
                </p>
                <h3 className="text-3xl font-bold text-foreground">{selectedProject.title}</h3>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-8">
              {/* Quick stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="border border-neon-cyan/30 bg-background/50 p-4">
                  <div className="flex items-center gap-2 text-neon-cyan mb-2">
                    <Users className="h-4 w-4" />
                    <span className="font-mono text-xs">客户</span>
                  </div>
                  <p className="text-sm text-foreground">{selectedProject.details.client}</p>
                </div>
                <div className="border border-neon-cyan/30 bg-background/50 p-4">
                  <div className="flex items-center gap-2 text-neon-cyan mb-2">
                    <Calendar className="h-4 w-4" />
                    <span className="font-mono text-xs">周期</span>
                  </div>
                  <p className="text-sm text-foreground">{selectedProject.details.duration}</p>
                </div>
                <div className="border border-neon-cyan/30 bg-background/50 p-4">
                  <div className="flex items-center gap-2 text-neon-cyan mb-2">
                    <Target className="h-4 w-4" />
                    <span className="font-mono text-xs">团队</span>
                  </div>
                  <p className="text-sm text-foreground">{selectedProject.details.team}</p>
                </div>
                <div className="border border-neon-cyan/30 bg-background/50 p-4">
                  <div className="flex items-center gap-2 text-neon-cyan mb-2">
                    <FileText className="h-4 w-4" />
                    <span className="font-mono text-xs">预算</span>
                  </div>
                  <p className="text-sm text-foreground">{selectedProject.details.budget}</p>
                </div>
              </div>

              {/* Overview */}
              <div>
                <h4 className="mb-3 font-mono text-sm tracking-wider text-neon-cyan">// 项目概述</h4>
                <p className="text-muted-foreground leading-relaxed">{selectedProject.details.overview}</p>
              </div>

              {/* Two columns: Objectives and Achievements */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="mb-4 font-mono text-sm tracking-wider text-neon-cyan">// 项目目标</h4>
                  <ul className="space-y-2">
                    {selectedProject.details.objectives.map((obj, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-neon-magenta mt-1">▸</span>
                        <span className="text-muted-foreground text-sm">{obj}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="mb-4 font-mono text-sm tracking-wider text-neon-magenta">// 达成成就</h4>
                  <ul className="space-y-2">
                    {selectedProject.details.achievements.map((ach, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-neon-cyan mt-1">✓</span>
                        <span className="text-muted-foreground text-sm">{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="mb-4 font-mono text-sm tracking-wider text-neon-cyan">// 技术栈</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.details.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="border border-neon-cyan/30 bg-neon-cyan/5 px-3 py-1.5 font-mono text-sm text-neon-cyan"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Challenges */}
              <div className="border border-neon-yellow/30 bg-neon-yellow/5 p-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-neon-yellow flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-mono text-sm text-neon-yellow mb-2">技术挑战</p>
                    <p className="text-sm text-muted-foreground">{selectedProject.details.challenges}</p>
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-border bg-background/50 px-2 py-1 font-mono text-xs text-foreground"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-neon-cyan/30 p-4 text-center">
              <p className="font-mono text-xs text-muted-foreground">
                项目报告 · 分类等级: {selectedProject.classified ? "ALPHA" : "PUBLIC"} · 文档编号: PRJ-
                {selectedProject.id.toString().padStart(4, "0")}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
