import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function CTASection() {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-neon-magenta/30 bg-card/50 p-8 backdrop-blur sm:p-12 border-glow-magenta">
          {/* Decorative elements */}
          <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full bg-neon-cyan/20 blur-2xl" />
          <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-neon-magenta/20 blur-2xl" />

          <Sparkles className="mx-auto mb-4 h-12 w-12 text-neon-magenta animate-flicker" />

          <h2 className="font-mono text-3xl font-bold text-foreground sm:text-4xl">
            准备好<span className="text-neon-magenta text-glow-magenta">接入</span>了吗？
          </h2>

          <p className="mx-auto mt-4 max-w-xl font-mono text-muted-foreground">
            加入我们的神经网络，成为数字革命的一部分。 未来不会等待——现在就行动。
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/explore">
              <Button
                size="lg"
                className="group border border-neon-magenta bg-neon-magenta/10 font-mono text-neon-magenta hover:bg-neon-magenta hover:text-background animate-pulse-glow"
                style={{ "--neon-cyan": "var(--neon-magenta)" } as React.CSSProperties}
              >
                开始探索
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/access">
              <Button size="lg" variant="ghost" className="font-mono text-muted-foreground hover:text-neon-cyan">
                接入系统
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
