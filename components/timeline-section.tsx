import { cn } from "@/lib/utils"

const timelineEvents = [
  {
    year: "2031",
    title: "第三次企业战争爆发",
    description: "五大跨国企业为争夺资源爆发全面冲突，全球经济体系崩溃",
  },
  {
    year: "2038",
    title: "新东京建城",
    description: "战后重建计划启动，在东京湾填海建造超级都市",
  },
  {
    year: "2045",
    title: "企业托管体制确立",
    description: "政府权力正式移交给企业联盟，开启企业治理时代",
  },
  {
    year: "2052",
    title: "神经植入体普及",
    description: "第一代民用神经接口上市，人机融合技术进入大众生活",
  },
  {
    year: "2061",
    title: "大停电事件",
    description: "神秘网络攻击导致全城断电72小时，数千人因植入体故障死亡",
  },
  {
    year: "2065",
    title: "天际走廊建成",
    description: "反重力技术突破，悬浮城区成为富人的空中乐园",
  },
  {
    year: "2071",
    title: "地下城起义",
    description: "被剥夺公民身份者发动武装抗议，遭到企业武力镇压",
  },
  {
    year: "2077",
    title: "现在",
    description: "新东京进入黄金时代，但贫富差距和社会矛盾持续加剧",
  },
]

export function TimelineSection() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-2 font-mono text-xs uppercase tracking-[0.3em] text-neon-magenta">// HISTORICAL_ARCHIVE</p>
          <h2 className="font-mono text-2xl font-bold text-foreground sm:text-3xl">
            历史<span className="text-neon-cyan text-glow-cyan">大事记</span>
          </h2>
          <p className="mt-4 text-muted-foreground">从企业战争到超级都市的崛起，这是新东京的编年史</p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-neon-cyan via-neon-magenta to-neon-cyan" />

          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className={cn("relative flex items-center", index % 2 === 0 ? "flex-row" : "flex-row-reverse")}
              >
                <div className={cn("w-1/2 pr-8", index % 2 === 0 ? "text-right pr-8" : "text-left pl-8")}>
                  <div
                    className={cn(
                      "inline-block rounded border px-3 py-1 font-mono text-sm",
                      index % 2 === 0
                        ? "border-neon-cyan/50 text-neon-cyan"
                        : "border-neon-magenta/50 text-neon-magenta",
                    )}
                  >
                    {event.year}
                  </div>
                  <h3 className="mt-2 font-mono text-lg font-bold text-foreground">{event.title}</h3>
                  <p className="mt-1 font-mono text-sm text-muted-foreground">{event.description}</p>
                </div>

                <div
                  className={cn(
                    "absolute left-1/2 h-4 w-4 -translate-x-1/2 rounded-full border-2",
                    index % 2 === 0
                      ? "border-neon-cyan bg-neon-cyan/20 shadow-[0_0_10px_rgba(0,255,255,0.5)]"
                      : "border-neon-magenta bg-neon-magenta/20 shadow-[0_0_10px_rgba(255,0,255,0.5)]",
                  )}
                />

                <div className="w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
