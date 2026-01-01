"use client"

import { useEffect, useState, useRef } from "react"
import { Activity, Users, Server, Clock } from "lucide-react"

const stats = [
  { label: "活跃节点", value: 12847, suffix: "+", icon: Server },
  { label: "数据处理", value: 99.9, suffix: "%", icon: Activity },
  { label: "全球用户", value: 2.4, suffix: "M", icon: Users },
  { label: "响应时间", value: 12, suffix: "ms", icon: Clock },
]

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [current, setCurrent] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000
    const steps = 60
    const increment = value / steps
    let step = 0

    const timer = setInterval(() => {
      step++
      setCurrent(Math.min(increment * step, value))
      if (step >= steps) clearInterval(timer)
    }, duration / steps)

    return () => clearInterval(timer)
  }, [value, isVisible])

  return (
    <span ref={ref}>
      {value % 1 === 0 ? Math.floor(current).toLocaleString() : current.toFixed(1)}
      {suffix}
    </span>
  )
}

export function StatsSection() {
  return (
    <section id="stats" className="relative py-24">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-cyan/5 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-2 font-mono text-xs uppercase tracking-[0.3em] text-neon-magenta">// REAL_TIME_METRICS</p>
          <h2 className="font-mono text-2xl font-bold text-foreground sm:text-3xl">
            实时<span className="text-neon-cyan text-glow-cyan">数据</span>监控
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg border border-neon-cyan/20 bg-card/30 p-6 text-center backdrop-blur transition-all duration-300 hover:border-neon-cyan/50 hover:shadow-[0_0_30px_rgba(0,255,255,0.15)]"
            >
              {/* Decorative corner */}
              <div className="absolute right-0 top-0 h-8 w-8 border-r-2 border-t-2 border-neon-cyan/30 transition-colors group-hover:border-neon-cyan" />
              <div className="absolute bottom-0 left-0 h-8 w-8 border-b-2 border-l-2 border-neon-cyan/30 transition-colors group-hover:border-neon-cyan" />

              <stat.icon className="mx-auto mb-3 h-8 w-8 text-neon-cyan/50 transition-colors group-hover:text-neon-cyan" />

              <div className="font-mono text-4xl font-bold text-neon-cyan text-glow-cyan">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="mt-2 font-mono text-sm uppercase tracking-wider text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
