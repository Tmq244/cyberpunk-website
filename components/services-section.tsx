"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import {
  ArrowRight,
  Lock,
  Globe,
  Database,
  Cpu,
  Wifi,
  Shield,
  X,
  Clock,
  CheckCircle,
  AlertTriangle,
} from "lucide-react"

const services = [
  {
    id: 1,
    title: "神经网络入侵",
    subtitle: "NEURAL_BREACH",
    description: "深度渗透企业防火墙，获取目标系统的完全控制权限",
    image: "/service-hacking-holographic-interface.jpg",
    icon: Globe,
    price: "¥50,000",
    details: {
      overview:
        "神经网络入侵服务利用我们专有的第七代神经网络AI，对目标企业的数字基础设施进行深度渗透测试。我们的AI能够模拟世界顶级黑客的思维模式，发现并利用99.7%的人类测试者无法发现的漏洞。",
      duration: "7-14天",
      deliverables: [
        "完整的渗透测试报告",
        "发现漏洞的详细描述和PoC",
        "风险等级评估",
        "修复建议和优先级排序",
        "为期30天的后续支持",
      ],
      process: [
        { phase: "信息收集", duration: "1-2天", desc: "使用OSINT和主动扫描收集目标信息" },
        { phase: "漏洞扫描", duration: "2-3天", desc: "神经网络AI进行深度漏洞分析" },
        { phase: "渗透尝试", duration: "2-4天", desc: "利用发现的漏洞进行受控入侵" },
        { phase: "权限提升", duration: "1-2天", desc: "尝试获取更高系统权限" },
        { phase: "报告生成", duration: "1-2天", desc: "整理发现并生成详细报告" },
      ],
      prerequisites: ["书面授权文件", "目标范围定义", "紧急联系人信息", "测试时间窗口确认"],
      legalNotice:
        "本服务仅面向已获得合法授权的客户。未经授权对任何系统进行渗透测试是违法行为，我们不参与任何非法活动。",
    },
  },
  {
    id: 2,
    title: "数据加密服务",
    subtitle: "CRYPTO_SHIELD",
    description: "军用级别的量子加密技术，保护您最敏感的数据资产",
    image: "/service-encrypted-data-vault.jpg",
    icon: Lock,
    price: "¥35,000",
    details: {
      overview:
        "CRYPTO_SHIELD采用最先进的量子纠缠加密技术，为您的敏感数据提供理论上不可破解的保护。即使面对拥有量子计算机的攻击者，您的数据也将保持绝对安全。",
      duration: "3-5天部署",
      deliverables: [
        "量子密钥分发系统部署",
        "端到端加密通道建立",
        "密钥管理系统配置",
        "员工安全培训",
        "24/7监控服务（首年）",
      ],
      process: [
        { phase: "安全评估", duration: "1天", desc: "评估现有数据安全状况" },
        { phase: "架构设计", duration: "1天", desc: "定制量子加密解决方案" },
        { phase: "系统部署", duration: "1-2天", desc: "安装和配置加密系统" },
        { phase: "测试验证", duration: "0.5天", desc: "全面测试加密效果" },
        { phase: "培训交付", duration: "0.5天", desc: "培训您的团队使用系统" },
      ],
      prerequisites: ["网络基础设施评估", "数据分类清单", "访问控制策略", "备份恢复计划"],
      legalNotice: "量子加密技术受出口管制，部分地区可能需要额外许可。我们将协助您处理所有必要的合规事宜。",
    },
  },
  {
    id: 3,
    title: "AI 训练优化",
    subtitle: "MIND_FORGE",
    description: "使用神经改造技术提升人工智能模型的学习效率",
    image: "/service-ai-neural-training.jpg",
    icon: Cpu,
    price: "¥80,000",
    details: {
      overview:
        "MIND_FORGE服务利用我们独特的神经可塑性算法，能够将AI模型的训练效率提升300-500%。我们的技术源自人脑研究，模拟突触连接的动态调整过程，让您的AI更快、更准确地学习。",
      duration: "14-30天",
      deliverables: ["优化后的AI模型", "训练效率提升报告", "模型性能基准测试", "优化参数文档", "技术转移培训"],
      process: [
        { phase: "模型分析", duration: "2-3天", desc: "深入分析现有模型架构" },
        { phase: "瓶颈识别", duration: "2-4天", desc: "识别训练效率瓶颈" },
        { phase: "算法优化", duration: "5-10天", desc: "应用神经可塑性优化" },
        { phase: "性能调优", duration: "3-7天", desc: "精细调整模型参数" },
        { phase: "验证交付", duration: "2-6天", desc: "验证效果并交付成果" },
      ],
      prerequisites: ["现有模型源代码", "训练数据集", "性能基准数据", "计算资源评估"],
      legalNotice: "AI训练优化可能涉及敏感数据处理。我们严格遵守数据保护法规，所有数据将在项目结束后安全销毁。",
    },
  },
  {
    id: 4,
    title: "云端监控系统",
    subtitle: "SKY_EYE",
    description: "全天候监控网络流量，实时检测异常入侵行为",
    image: "/service-surveillance-control-room.jpg",
    icon: Wifi,
    price: "¥25,000/月",
    details: {
      overview:
        "SKY_EYE是一套全天候网络安全监控系统，利用分布式传感器网络和AI分析引擎，实时监控您的所有网络流量。系统能够在攻击发生的前0.3秒发出警报，为您争取宝贵的响应时间。",
      duration: "持续服务",
      deliverables: ["24/7实时监控", "每日安全简报", "每周威胁分析报告", "即时警报通知", "紧急响应支持"],
      process: [
        { phase: "传感器部署", duration: "2-3天", desc: "在关键节点部署监控传感器" },
        { phase: "基线建立", duration: "5-7天", desc: "学习正常流量模式" },
        { phase: "监控启动", duration: "持续", desc: "开始全天候监控" },
        { phase: "定期优化", duration: "每月", desc: "根据新威胁优化检测规则" },
        { phase: "季度评审", duration: "每季", desc: "全面安全状况评审" },
      ],
      prerequisites: ["网络拓扑图", "关键资产清单", "现有安全工具列表", "响应流程定义"],
      legalNotice: "监控数据将严格保密，仅用于安全分析目的。我们遵守所有适用的隐私法规。",
    },
  },
  {
    id: 5,
    title: "数据库恢复",
    subtitle: "DATA_PHOENIX",
    description: "从损坏或被加密的数据库中恢复关键业务数据",
    image: "/service-data-recovery-lab.jpg",
    icon: Database,
    price: "¥45,000",
    details: {
      overview:
        'DATA_PHOENIX专门处理最棘手的数据恢复案例，包括勒索软件加密、物理损坏和人为删除。我们的专家团队拥有超过15年经验，成功率高达94%，即使是被认为"无法恢复"的数据。',
      duration: "5-15天",
      deliverables: ["恢复的数据", "数据完整性验证报告", "损坏原因分析", "预防措施建议", "数据迁移支持（可选）"],
      process: [
        { phase: "初步评估", duration: "1天", desc: "评估损坏程度和恢复可能性" },
        { phase: "安全提取", duration: "1-2天", desc: "安全提取损坏存储介质数据" },
        { phase: "深度分析", duration: "2-5天", desc: "分析数据结构和损坏模式" },
        { phase: "恢复操作", duration: "2-5天", desc: "执行数据恢复程序" },
        { phase: "验证交付", duration: "1-2天", desc: "验证数据完整性并交付" },
      ],
      prerequisites: ["损坏介质或备份", "数据库类型信息", "损坏时间和原因（如已知）", "优先恢复数据清单"],
      legalNotice: "数据恢复服务不包括任何形式的勒索软件赎金支付。我们不与网络犯罪分子进行任何交易。",
    },
  },
  {
    id: 6,
    title: "安全审计",
    subtitle: "FORTRESS_CHECK",
    description: "全方位检测系统漏洞，提供专业的安全加固方案",
    image: "/service-security-audit-interface.jpg",
    icon: Shield,
    price: "¥60,000",
    details: {
      overview:
        "FORTRESS_CHECK是一套全面的安全审计服务，涵盖网络、应用、物理和人员安全。我们的审计团队由前军方网络战专家和顶级白帽黑客组成，将从攻击者视角审视您的整体安全态势。",
      duration: "21-30天",
      deliverables: ["全面安全审计报告", "漏洞清单和风险评级", "合规差距分析", "安全改进路线图", "高管简报演示"],
      process: [
        { phase: "范围定义", duration: "2-3天", desc: "确定审计范围和目标" },
        { phase: "文档审查", duration: "3-5天", desc: "审查安全策略和流程" },
        { phase: "技术测试", duration: "7-10天", desc: "进行技术安全测试" },
        { phase: "物理评估", duration: "2-3天", desc: "评估物理安全控制" },
        { phase: "报告撰写", duration: "5-7天", desc: "整理发现并撰写报告" },
        { phase: "汇报交付", duration: "2天", desc: "向管理层汇报结果" },
      ],
      prerequisites: ["组织架构图", "现有安全文档", "系统架构图", "访问权限（审计期间）"],
      legalNotice: "安全审计发现将严格保密。我们签署保密协议，并遵循负责任披露原则。",
    },
  },
]

export function ServicesSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [selectedService, setSelectedService] = useState<(typeof services)[0] | null>(null)

  return (
    <section className="relative py-24 px-6">
      {/* Animated background lines */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px w-full bg-gradient-to-r from-transparent via-neon-cyan/30 to-transparent"
            style={{
              top: `${20 + i * 20}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-2 font-mono text-xs tracking-[0.3em] text-neon-magenta">[ SERVICE_CATALOG ]</p>
            <h2 className="text-glow-cyan text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              服务<span className="text-neon-magenta">项目</span>
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            我们提供从网络渗透到数据保护的全方位赛博安全服务 · 点击了解详情
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon
            const isHovered = hoveredId === service.id

            return (
              <div
                key={service.id}
                className={cn(
                  "group relative cursor-pointer overflow-hidden border border-border bg-card/30 backdrop-blur-sm transition-all duration-500",
                  isHovered ? "border-neon-cyan border-glow-cyan" : "hover:border-neon-cyan/50",
                )}
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => setSelectedService(service)}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className={cn(
                      "object-cover transition-all duration-700",
                      isHovered ? "scale-110 opacity-30" : "scale-100 opacity-10",
                    )}
                  />
                </div>

                <div className="relative p-6">
                  {/* Icon and Subtitle */}
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center border border-neon-cyan/50 bg-background/50">
                      <Icon className="h-6 w-6 text-neon-cyan" />
                    </div>
                    <span className="font-mono text-xs tracking-wider text-neon-magenta">{service.subtitle}</span>
                  </div>

                  {/* Title */}
                  <h3 className="mb-2 text-xl font-bold text-foreground">{service.title}</h3>

                  {/* Description */}
                  <p className="mb-6 text-sm text-muted-foreground">{service.description}</p>

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-lg text-neon-cyan">{service.price}</span>
                    <button
                      className={cn(
                        "flex items-center gap-2 font-mono text-xs tracking-wider transition-all duration-300",
                        isHovered ? "text-neon-cyan" : "text-muted-foreground",
                      )}
                    >
                      详情
                      <ArrowRight
                        className={cn("h-4 w-4 transition-transform duration-300", isHovered && "translate-x-1")}
                      />
                    </button>
                  </div>
                </div>

                {/* Decorative corners */}
                <div className="absolute left-0 top-0 h-6 w-6 border-l border-t border-neon-cyan/50" />
                <div className="absolute bottom-0 right-0 h-6 w-6 border-b border-r border-neon-magenta/50" />
              </div>
            )
          })}
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-sm p-4"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto border border-neon-cyan bg-card/95 backdrop-blur shadow-[0_0_50px_rgba(0,255,255,0.2)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Scanline effect */}
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] opacity-20" />

            {/* Header */}
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-neon-cyan/30 bg-card/95 p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center border border-neon-cyan bg-neon-cyan/10 text-neon-cyan">
                  <selectedService.icon className="h-7 w-7" />
                </div>
                <div>
                  <p className="font-mono text-xs tracking-[0.2em] text-neon-magenta">[ {selectedService.subtitle} ]</p>
                  <h3 className="text-2xl font-bold text-foreground">{selectedService.title}</h3>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="font-mono text-xs text-muted-foreground">服务费用</p>
                  <p className="font-mono text-2xl text-neon-cyan">{selectedService.price}</p>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="flex h-10 w-10 items-center justify-center border border-border text-muted-foreground transition-colors hover:border-red-500 hover:text-red-500"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-8">
              {/* Overview */}
              <div>
                <h4 className="mb-3 font-mono text-sm tracking-wider text-neon-cyan">// 服务概述</h4>
                <p className="text-muted-foreground leading-relaxed">{selectedService.details.overview}</p>
              </div>

              {/* Duration and Deliverables */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="mb-4 font-mono text-sm tracking-wider text-neon-cyan flex items-center gap-2">
                    <Clock className="h-4 w-4" /> 服务周期
                  </h4>
                  <div className="border border-neon-cyan/30 bg-neon-cyan/5 p-4">
                    <p className="font-mono text-2xl text-neon-cyan">{selectedService.details.duration}</p>
                  </div>
                </div>
                <div>
                  <h4 className="mb-4 font-mono text-sm tracking-wider text-neon-magenta flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" /> 交付内容
                  </h4>
                  <ul className="space-y-2">
                    {selectedService.details.deliverables.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-neon-cyan mt-1">✓</span>
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Process */}
              <div>
                <h4 className="mb-4 font-mono text-sm tracking-wider text-neon-cyan">// 服务流程</h4>
                <div className="space-y-3">
                  {selectedService.details.process.map((step, i) => (
                    <div key={i} className="flex items-stretch border border-border bg-background/30">
                      <div className="flex items-center justify-center w-12 bg-neon-cyan/10 border-r border-neon-cyan/30">
                        <span className="font-mono text-lg text-neon-cyan">{(i + 1).toString().padStart(2, "0")}</span>
                      </div>
                      <div className="flex-1 p-4">
                        <div className="flex items-center justify-between mb-1">
                          <h5 className="font-bold text-foreground">{step.phase}</h5>
                          <span className="font-mono text-xs text-neon-magenta">{step.duration}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Prerequisites */}
              <div>
                <h4 className="mb-4 font-mono text-sm tracking-wider text-neon-cyan">// 服务前提</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedService.details.prerequisites.map((prereq, i) => (
                    <span
                      key={i}
                      className="border border-neon-magenta/30 bg-neon-magenta/5 px-3 py-1.5 font-mono text-sm text-neon-magenta"
                    >
                      {prereq}
                    </span>
                  ))}
                </div>
              </div>

              {/* Legal Notice */}
              <div className="border border-neon-yellow/50 bg-neon-yellow/5 p-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-neon-yellow flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-mono text-sm text-neon-yellow mb-1">⚠ 法律声明</p>
                    <p className="text-sm text-muted-foreground">{selectedService.details.legalNotice}</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="flex gap-4 pt-4 border-t border-border">
                <button className="flex-1 border border-neon-cyan bg-neon-cyan/10 py-3 font-mono text-neon-cyan transition-all hover:bg-neon-cyan hover:text-background">
                  立即咨询
                </button>
                <button className="flex-1 border border-border py-3 font-mono text-muted-foreground transition-all hover:border-neon-magenta hover:text-neon-magenta">
                  下载服务手册
                </button>
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-neon-cyan/30 p-4 text-center">
              <p className="font-mono text-xs text-muted-foreground">
                服务编号: SVC-{selectedService.id.toString().padStart(4, "0")} · 所有价格均不含税 · 最终报价以签约为准
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
