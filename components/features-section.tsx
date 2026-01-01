"use client"

import { useState } from "react"
import { Brain, Shield, Zap, Database, Globe, Cpu, X, ChevronRight, AlertTriangle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const features = [
  {
    icon: Brain,
    title: "神经网络",
    titleEn: "NEURAL NETWORK",
    description: "先进的AI驱动系统，实时处理海量数据流",
    color: "cyan" as const,
    details: {
      overview:
        "第七代神经网络架构 (Gen-7 Neural) 是由荒坂公司于2074年首次商用化的革命性人工智能系统。它模拟人类大脑皮层的并行处理能力，能够同时处理超过10亿个独立数据流。",
      specs: [
        { label: "处理能力", value: "850 ExaFLOPS" },
        { label: "神经元模拟数", value: "1.2万亿" },
        { label: "延迟", value: "< 0.001ms" },
        { label: "能耗", value: "12MW" },
      ],
      history:
        '2070年，军工联合体首次开发出原型系统，用于战场态势感知。2074年民用化后，迅速成为企业网络安全的核心组件。2076年的"数字觉醒"事件后，所有神经网络系统都被强制安装意识限制器。',
      applications: ["企业入侵检测", "金融市场预测", "城市交通控制", "医疗诊断辅助", "军事战术分析"],
      warnings: "长时间直连神经网络可能导致意识碎片化。建议每次连接不超过4小时。",
    },
  },
  {
    icon: Shield,
    title: "量子加密",
    titleEn: "QUANTUM ENCRYPTION",
    description: "下一代安全协议，保护您的数字身份",
    color: "magenta" as const,
    details: {
      overview:
        "量子纠缠加密协议 (QEP) 利用量子力学的不确定性原理，创建理论上无法被破解的通信通道。任何窃听尝试都会导致量子态坍缩，从而被即时检测。",
      specs: [
        { label: "密钥长度", value: "4096 量子比特" },
        { label: "纠缠稳定性", value: "99.97%" },
        { label: "传输距离", value: "全球覆盖" },
        { label: "破解时间", value: "理论无穷大" },
      ],
      history:
        '2068年中国科学院首次实现千公里级量子通信。2071年全球量子网络互联完成。2075年，神秘的"幽灵入侵者"首次成功攻破量子加密，震动整个安全界，后证实是利用了硬件后门而非协议漏洞。',
      applications: ["政府机密通信", "企业财务系统", "医疗隐私保护", "军事指挥链", "黑市交易（讽刺的是）"],
      warnings: "量子加密硬件需定期更换以防止后门植入。推荐使用经过NIST认证的设备。",
    },
  },
  {
    icon: Zap,
    title: "超光速传输",
    titleEn: "HYPERLINK TRANSFER",
    description: "突破物理极限的数据传输技术",
    color: "cyan" as const,
    details: {
      overview:
        "超光速传输 (HLT) 并非真正超越光速，而是利用人工虫洞技术在空间折叠点之间传输数据。2077年，这项技术使得地球与月球基地之间的通信延迟从1.3秒降至纳秒级。",
      specs: [
        { label: "传输带宽", value: "1 ZB/s" },
        { label: "虫洞稳定时间", value: "持续运行" },
        { label: "能耗", value: "小型核反应堆" },
        { label: "节点数量", value: "全球47个" },
      ],
      history:
        '2065年欧洲核子研究中心首次观测到微型虫洞。2070年美军在内华达州建立首个稳定虫洞。2077年商业化运营开始，但仅限于政府和AAA级企业使用。民间黑客组织一直在尝试建立"影子链接"。',
      applications: ["星际通信", "全球金融交易", "军事指挥", "VR深潜同步", "紧急医疗数据传输"],
      warnings: "非授权接入HLT网络将触发自动追踪协议。已有37人因此被永久脑死亡。",
    },
  },
  {
    icon: Database,
    title: "分布式存储",
    titleEn: "DISTRIBUTED STORAGE",
    description: "去中心化数据架构，永不丢失",
    color: "magenta" as const,
    details: {
      overview:
        "第四代分布式存储系统 (DStorage-4) 将数据碎片化后分散存储于全球数百万个节点。即使90%的节点被摧毁，数据仍可完整恢复。这是后企业战争时代数据安全的终极解决方案。",
      specs: [
        { label: "冗余度", value: "10x" },
        { label: "节点数量", value: "4.7亿" },
        { label: "恢复时间", value: "< 10ms" },
        { label: "存储成本", value: "0.001欧元/TB" },
      ],
      history:
        '2055年比特币网络崩溃后，去中心化存储成为研究热点。2063年首个商业系统上线。2071年"大停电"事件中，DStorage是唯一幸存的大规模数据系统，从此成为行业标准。',
      applications: ["企业备份", "政府档案", "医疗记录", "法律证据", "个人记忆存储"],
      warnings: "一旦数据上传至DStorage，将永久存在。请谨慎考虑您存储的内容。遗忘权在此不适用。",
    },
  },
  {
    icon: Globe,
    title: "全球节点",
    titleEn: "GLOBAL NODES",
    description: "遍布世界的网络节点，零延迟连接",
    color: "cyan" as const,
    details: {
      overview:
        "全球节点网络 (GNN) 是覆盖地球、月球及近地轨道的超级网络基础设施。每个主节点可处理整个2020年代互联网流量的1000倍，同时保持亚毫秒级延迟。",
      specs: [
        { label: "主节点", value: "2,847个" },
        { label: "边缘节点", value: "3.2亿" },
        { label: "覆盖率", value: "99.7%地表" },
        { label: "平均延迟", value: "0.3ms" },
      ],
      history:
        "2060年代各国独立建设的5G/6G网络逐渐合并。2072年联合国数字主权协议签署后，GNN正式成为全球统一基础设施。目前由七大企业联合体共同管理，实际控制权归属一直是阴谋论热门话题。",
      applications: ["全球即时通信", "自动驾驶网络", "远程手术", "VR世界同步", "气象控制"],
      warnings: '部分偏远地区仍存在"网络死区"，这些区域已成为逃亡者和反抗组织的据点。',
    },
  },
  {
    icon: Cpu,
    title: "边缘计算",
    titleEn: "EDGE COMPUTING",
    description: "本地化处理能力，即时响应需求",
    color: "magenta" as const,
    details: {
      overview:
        "边缘计算单元 (ECU) 是部署在终端设备的微型超级计算机。它能够在本地完成90%的数据处理，只将关键信息上传云端，大幅降低延迟并增强隐私保护。",
      specs: [
        { label: "处理能力", value: "500 TFLOPS" },
        { label: "功耗", value: "< 50W" },
        { label: "体积", value: "信用卡大小" },
        { label: "本地处理率", value: "92%" },
      ],
      history:
        '2050年代物联网爆发式增长导致云端服务器不堪重负。2058年首款商用ECU问世。2065年义体植入式ECU开始流行，将人类大脑与边缘计算融为一体。这被称为"思维增幅"，也引发了关于人类定义的哲学争论。',
      applications: ["义体控制", "增强现实", "智能家居", "工业自动化", "自动驾驶"],
      warnings: "植入式ECU过热可能导致脑损伤。请确保使用经过认证的散热系统。",
    },
  },
]

export function FeaturesSection() {
  const [selectedFeature, setSelectedFeature] = useState<(typeof features)[0] | null>(null)

  return (
    <section id="features" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <p className="mb-2 font-mono text-xs uppercase tracking-[0.3em] text-neon-magenta">// CORE_SYSTEMS</p>
          <h2 className="font-mono text-3xl font-bold text-foreground sm:text-4xl">
            核心<span className="text-neon-cyan text-glow-cyan">技术</span>
          </h2>
          <p className="mt-4 font-mono text-muted-foreground">驱动未来的六大核心系统 · 点击查看详细档案</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={index}
              onClick={() => setSelectedFeature(feature)}
              className={cn(
                "group relative cursor-pointer overflow-hidden bg-card/50 backdrop-blur transition-all duration-300",
                feature.color === "cyan"
                  ? "border-neon-cyan/20 hover:border-neon-cyan/60 hover:shadow-[0_0_30px_rgba(0,255,255,0.15)]"
                  : "border-neon-magenta/20 hover:border-neon-magenta/60 hover:shadow-[0_0_30px_rgba(255,0,255,0.15)]",
              )}
            >
              {/* Corner decorations */}
              <div
                className={cn(
                  "absolute right-0 top-0 h-6 w-6 border-r border-t transition-colors",
                  feature.color === "cyan"
                    ? "border-neon-cyan/30 group-hover:border-neon-cyan"
                    : "border-neon-magenta/30 group-hover:border-neon-magenta",
                )}
              />
              <div
                className={cn(
                  "absolute bottom-0 left-0 h-6 w-6 border-b border-l transition-colors",
                  feature.color === "cyan"
                    ? "border-neon-cyan/30 group-hover:border-neon-cyan"
                    : "border-neon-magenta/30 group-hover:border-neon-magenta",
                )}
              />

              <CardHeader className="pb-2">
                <div
                  className={cn(
                    "mb-3 inline-flex rounded border p-2.5 transition-all",
                    feature.color === "cyan"
                      ? "border-neon-cyan/30 text-neon-cyan group-hover:bg-neon-cyan/10 group-hover:shadow-[0_0_15px_rgba(0,255,255,0.3)]"
                      : "border-neon-magenta/30 text-neon-magenta group-hover:bg-neon-magenta/10 group-hover:shadow-[0_0_15px_rgba(255,0,255,0.3)]",
                  )}
                >
                  <feature.icon className="h-6 w-6" />
                </div>
                <CardTitle className="font-mono text-foreground">
                  {feature.title}
                  <span className="ml-2 text-xs text-muted-foreground/50">{feature.titleEn}</span>
                </CardTitle>
                <CardDescription className="font-mono text-muted-foreground">{feature.description}</CardDescription>
              </CardHeader>

              <CardContent className="pt-4">
                <div className="flex items-center justify-between">
                  <div className="h-1 flex-1 overflow-hidden rounded bg-muted mr-4">
                    <div
                      className={cn(
                        "h-full w-0 transition-all duration-700 group-hover:w-full",
                        feature.color === "cyan" ? "bg-neon-cyan" : "bg-neon-magenta",
                      )}
                    />
                  </div>
                  <ChevronRight
                    className={cn(
                      "h-4 w-4 transition-all",
                      feature.color === "cyan" ? "text-neon-cyan" : "text-neon-magenta",
                      "opacity-0 group-hover:opacity-100 group-hover:translate-x-1",
                    )}
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      {selectedFeature && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-sm p-4"
          onClick={() => setSelectedFeature(null)}
        >
          <div
            className={cn(
              "relative max-h-[90vh] w-full max-w-4xl overflow-y-auto border bg-card/95 backdrop-blur",
              selectedFeature.color === "cyan"
                ? "border-neon-cyan shadow-[0_0_50px_rgba(0,255,255,0.2)]"
                : "border-neon-magenta shadow-[0_0_50px_rgba(255,0,255,0.2)]",
            )}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Scanline effect */}
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] opacity-20" />

            {/* Header */}
            <div
              className={cn(
                "sticky top-0 z-10 flex items-center justify-between border-b bg-card/95 p-6",
                selectedFeature.color === "cyan" ? "border-neon-cyan/30" : "border-neon-magenta/30",
              )}
            >
              <div className="flex items-center gap-4">
                <div
                  className={cn(
                    "flex h-14 w-14 items-center justify-center border",
                    selectedFeature.color === "cyan"
                      ? "border-neon-cyan bg-neon-cyan/10 text-neon-cyan"
                      : "border-neon-magenta bg-neon-magenta/10 text-neon-magenta",
                  )}
                >
                  <selectedFeature.icon className="h-7 w-7" />
                </div>
                <div>
                  <p
                    className={cn(
                      "font-mono text-xs tracking-[0.2em]",
                      selectedFeature.color === "cyan" ? "text-neon-cyan" : "text-neon-magenta",
                    )}
                  >
                    [ {selectedFeature.titleEn} ]
                  </p>
                  <h3 className="text-2xl font-bold text-foreground">{selectedFeature.title}</h3>
                </div>
              </div>
              <button
                onClick={() => setSelectedFeature(null)}
                className="flex h-10 w-10 items-center justify-center border border-border text-muted-foreground transition-colors hover:border-red-500 hover:text-red-500"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-8">
              {/* Overview */}
              <div>
                <h4
                  className={cn(
                    "mb-3 font-mono text-sm tracking-wider",
                    selectedFeature.color === "cyan" ? "text-neon-cyan" : "text-neon-magenta",
                  )}
                >
                  // 概述
                </h4>
                <p className="text-muted-foreground leading-relaxed">{selectedFeature.details.overview}</p>
              </div>

              {/* Specs */}
              <div>
                <h4
                  className={cn(
                    "mb-4 font-mono text-sm tracking-wider",
                    selectedFeature.color === "cyan" ? "text-neon-cyan" : "text-neon-magenta",
                  )}
                >
                  // 技术规格
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {selectedFeature.details.specs.map((spec, i) => (
                    <div
                      key={i}
                      className={cn(
                        "border bg-background/50 p-4",
                        selectedFeature.color === "cyan" ? "border-neon-cyan/30" : "border-neon-magenta/30",
                      )}
                    >
                      <p className="font-mono text-xs text-muted-foreground mb-1">{spec.label}</p>
                      <p
                        className={cn(
                          "font-mono text-lg font-bold",
                          selectedFeature.color === "cyan" ? "text-neon-cyan" : "text-neon-magenta",
                        )}
                      >
                        {spec.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* History */}
              <div>
                <h4
                  className={cn(
                    "mb-3 font-mono text-sm tracking-wider",
                    selectedFeature.color === "cyan" ? "text-neon-cyan" : "text-neon-magenta",
                  )}
                >
                  // 发展历史
                </h4>
                <div
                  className={cn(
                    "border-l-2 pl-4",
                    selectedFeature.color === "cyan" ? "border-neon-cyan/50" : "border-neon-magenta/50",
                  )}
                >
                  <p className="text-muted-foreground leading-relaxed">{selectedFeature.details.history}</p>
                </div>
              </div>

              {/* Applications */}
              <div>
                <h4
                  className={cn(
                    "mb-4 font-mono text-sm tracking-wider",
                    selectedFeature.color === "cyan" ? "text-neon-cyan" : "text-neon-magenta",
                  )}
                >
                  // 应用领域
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedFeature.details.applications.map((app, i) => (
                    <span
                      key={i}
                      className={cn(
                        "border px-3 py-1.5 font-mono text-sm",
                        selectedFeature.color === "cyan"
                          ? "border-neon-cyan/30 bg-neon-cyan/5 text-neon-cyan"
                          : "border-neon-magenta/30 bg-neon-magenta/5 text-neon-magenta",
                      )}
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>

              {/* Warning */}
              <div className="border border-neon-yellow/50 bg-neon-yellow/5 p-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-neon-yellow flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-mono text-sm text-neon-yellow mb-1">⚠ 安全警告</p>
                    <p className="text-sm text-muted-foreground">{selectedFeature.details.warnings}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div
              className={cn(
                "border-t p-4 text-center",
                selectedFeature.color === "cyan" ? "border-neon-cyan/30" : "border-neon-magenta/30",
              )}
            >
              <p className="font-mono text-xs text-muted-foreground">
                档案等级: ALPHA · 最后更新: 2077.12.15 · 访问记录已存档
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
