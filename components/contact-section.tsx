"use client"

import type React from "react"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Send, MapPin, Mail, Phone, Terminal } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [terminalLines, setTerminalLines] = useState<string[]>([
    "> SECURE_CHANNEL initialized...",
    "> Encryption: AES-256-GCM",
    "> Status: READY",
  ])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate terminal output
    const newLines = [
      ...terminalLines,
      `> Processing request from: ${formData.email}`,
      "> Encrypting message...",
      "> Routing through secure nodes...",
      "> Message queued for delivery",
      "> STATUS: SUCCESS",
    ]
    setTerminalLines(newLines)

    setTimeout(() => {
      setIsSubmitting(false)
      setFormData({ name: "", email: "", subject: "", message: "" })
    }, 2000)
  }

  return (
    <section className="relative py-24 px-6">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,0,255,0.1),transparent_70%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="mb-2 font-mono text-xs tracking-[0.3em] text-neon-cyan">[ SECURE_COMMUNICATION ]</p>
          <h2 className="text-glow-cyan text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            联系<span className="text-neon-magenta">我们</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">通过加密通道与我们取得联系</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact Form */}
          <div className="border border-border bg-card/30 p-6 backdrop-blur-sm md:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block font-mono text-xs tracking-wider text-neon-cyan">姓名 / NAME</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full border border-border bg-background px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground focus:border-neon-cyan focus:outline-none"
                    placeholder="输入姓名..."
                    required
                  />
                </div>
                <div>
                  <label className="mb-2 block font-mono text-xs tracking-wider text-neon-cyan">邮箱 / EMAIL</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full border border-border bg-background px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground focus:border-neon-cyan focus:outline-none"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block font-mono text-xs tracking-wider text-neon-cyan">主题 / SUBJECT</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full border border-border bg-background px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground focus:border-neon-cyan focus:outline-none"
                  placeholder="咨询主题..."
                  required
                />
              </div>

              <div>
                <label className="mb-2 block font-mono text-xs tracking-wider text-neon-cyan">信息 / MESSAGE</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full resize-none border border-border bg-background px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground focus:border-neon-cyan focus:outline-none"
                  placeholder="输入您的信息..."
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "flex w-full items-center justify-center gap-2 border border-neon-cyan bg-neon-cyan/10 px-6 py-4 font-mono text-sm tracking-wider text-neon-cyan transition-all",
                  isSubmitting ? "cursor-not-allowed opacity-50" : "hover:bg-neon-cyan hover:text-background",
                )}
              >
                <Send className="h-4 w-4" />
                {isSubmitting ? "发送中..." : "发送信息"}
              </button>
            </form>

            {/* Corner accents */}
            <div className="absolute left-0 top-0 h-6 w-6 border-l-2 border-t-2 border-neon-cyan" />
            <div className="absolute bottom-0 right-0 h-6 w-6 border-b-2 border-r-2 border-neon-magenta" />
          </div>

          {/* Terminal & Info */}
          <div className="space-y-6">
            {/* Terminal */}
            <div className="border border-border bg-background">
              <div className="flex items-center gap-2 border-b border-border bg-card/50 px-4 py-2">
                <Terminal className="h-4 w-4 text-neon-cyan" />
                <span className="font-mono text-xs text-muted-foreground">SECURE_TERMINAL</span>
              </div>
              <div className="h-48 overflow-y-auto p-4 font-mono text-xs">
                {terminalLines.map((line, i) => (
                  <p
                    key={i}
                    className={cn(
                      "mb-1",
                      line.includes("SUCCESS")
                        ? "text-green-400"
                        : line.includes("ERROR")
                          ? "text-red-400"
                          : "text-neon-cyan",
                    )}
                  >
                    {line}
                  </p>
                ))}
                <span className="animate-pulse text-neon-cyan">_</span>
              </div>
            </div>

            {/* Contact Info */}
            <div className="grid gap-4">
              {[
                {
                  icon: MapPin,
                  label: "位置",
                  value: "新东京市 / 赛博区 2077",
                },
                {
                  icon: Mail,
                  label: "邮箱",
                  value: "contact@nexus-corp.net",
                },
                {
                  icon: Phone,
                  label: "热线",
                  value: "+86 2077-NEXUS",
                },
              ].map((item) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-4 border border-border bg-card/30 p-4 backdrop-blur-sm transition-colors hover:border-neon-cyan/50"
                  >
                    <div className="flex h-12 w-12 items-center justify-center border border-neon-cyan/50 bg-background">
                      <Icon className="h-5 w-5 text-neon-cyan" />
                    </div>
                    <div>
                      <p className="font-mono text-xs text-muted-foreground">{item.label}</p>
                      <p className="text-foreground">{item.value}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
