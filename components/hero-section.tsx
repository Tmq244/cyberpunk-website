"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronRight, Terminal, CircuitBoard } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const glitchPairs = [
  { welcome: "欢迎来到", future: "未来" },
  { welcome: "WELCOME TO ", future: "FUTURE" },
  { welcome: "ようこそ", future: "みらいへ" },
]

export function HeroSection() {
  const [glitchIndex, setGlitchIndex] = useState(0)
  const [typedText, setTypedText] = useState("")
  const fullText = "正在连接至 NEXUS 城市网络..."

  const [networkLoad, setNetworkLoad] = useState(0)
  const [dataPackets, setDataPackets] = useState(0)
  const [systemLogs, setSystemLogs] = useState<string[]>([])
  const [currentTime, setCurrentTime] = useState("")
  const [cpuUsage, setCpuUsage] = useState(0)
  const [memoryUsage, setMemoryUsage] = useState(0)

  const logMessages = [
    "扫描神经网络接口...",
    "检测到 47 个活跃连接",
    "防火墙状态: 正常",
    "加密通道已建立",
    "正在同步区块链数据...",
    "AI 核心响应时间: 0.003ms",
    "检测到新的数据流入",
    "安全协议已更新",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitchIndex((prev) => (prev + 1) % glitchPairs.length)
    }, 3500)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    let i = 0
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(typingInterval)
      }
    }, 80)
    return () => clearInterval(typingInterval)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setNetworkLoad(Math.floor(Math.random() * 40) + 60)
      setDataPackets((prev) => prev + Math.floor(Math.random() * 100))
      setCpuUsage(Math.floor(Math.random() * 30) + 45)
      setMemoryUsage(Math.floor(Math.random() * 20) + 65)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const timeStr = `2077.12.28 ${now.getHours().toString().padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")}:${now.getSeconds().toString().padStart(2, "0")} JST`
      setCurrentTime(timeStr)
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setSystemLogs((prev) => {
        const newLog = logMessages[Math.floor(Math.random() * logMessages.length)]
        const updated = [...prev, newLog]
        return updated.slice(-3)
      })
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 z-0">
        <Image src="/cyberpunk-city-hero-bg.jpg" alt="Cyberpunk City" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
        <div className="absolute inset-0 bg-neon-cyan/5 mix-blend-overlay" />
        <div className="absolute inset-0 bg-neon-magenta/5 mix-blend-color-dodge" />
      </div>

      <div className="absolute inset-0 z-[1]">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-neon-cyan/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-neon-magenta/10 blur-3xl" />
        <div className="absolute inset-0 opacity-5">
          <div className="absolute left-10 top-20">
            <CircuitBoard className="h-32 w-32 text-neon-cyan" />
          </div>
          <div className="absolute right-20 top-40">
            <CircuitBoard className="h-24 w-24 text-neon-magenta" />
          </div>
          <div className="absolute bottom-32 left-1/3">
            <CircuitBoard className="h-20 w-20 text-neon-cyan" />
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <div className="relative mb-6 inline-block">
          <h1 className="font-mono text-5xl font-bold tracking-tight text-foreground sm:text-7xl lg:text-8xl">
            <span className="relative inline-block text-neon-cyan text-glow-cyan">
              {glitchPairs[glitchIndex].welcome}
              {glitchPairs[glitchIndex].future}
              <span className="absolute inset-0 animate-glitch text-neon-magenta opacity-70">
                {glitchPairs[glitchIndex].welcome}
                {glitchPairs[glitchIndex].future}
              </span>
            </span>
          </h1>
        </div>

        <p className="mx-auto mb-4 max-w-2xl font-mono text-lg text-muted-foreground sm:text-xl">
          欢迎来到 <span className="text-neon-cyan">NEXUS</span> — 2077年的超级都市
        </p>
        <p className="mx-auto mb-10 max-w-xl font-mono text-sm text-muted-foreground/70">
          这里是企业巨头与街头浪客共存的世界，霓虹灯照亮着人类与科技融合的未来
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/explore">
            <Button
              size="lg"
              className="group animate-pulse-glow border border-neon-cyan bg-neon-cyan/10 font-mono text-neon-cyan hover:bg-neon-cyan hover:text-background"
            >
              探索城市
              <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
          <Link href="/#features">
            <Button
              size="lg"
              variant="outline"
              className="border-neon-magenta/50 bg-transparent font-mono text-neon-magenta hover:bg-neon-magenta/10 hover:text-neon-magenta"
            >
              <Terminal className="mr-2 h-4 w-4" />
              了解更多
            </Button>
          </Link>
        </div>

        <div className="mx-auto mt-16 max-w-2xl">
          <div className="mx-auto w-[600px] max-w-full overflow-hidden rounded-lg border border-neon-cyan/30 bg-dark-surface/80 shadow-[0_0_30px_rgba(0,255,255,0.1)] backdrop-blur">
            <div className="flex items-center gap-2 border-b border-neon-cyan/20 px-4 py-2">
              <div className="h-3 w-3 rounded-full bg-red-500/70" />
              <div className="h-3 w-3 rounded-full bg-neon-yellow/70" />
              <div className="h-3 w-3 rounded-full bg-green-500/70" />
              <span className="ml-2 font-mono text-xs text-muted-foreground">NEXUS 城市信息终端 v3.2.1</span>
              <div className="ml-auto flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />
                  <span className="font-mono text-[10px] text-green-500">在线</span>
                </span>
                <span className="min-w-[80px] font-mono text-[10px] text-muted-foreground">
                  PKT: <span className="text-neon-cyan">{dataPackets.toLocaleString()}</span>
                </span>
              </div>
            </div>
            <div className="p-4 font-mono text-sm text-left">
              <p className="text-muted-foreground">
                <span className="text-neon-cyan">$</span> citynet --status
              </p>
              <p className="mt-2 text-neon-cyan">
                {">"} {typedText}
                <span className="animate-pulse">|</span>
              </p>

              <div className="mt-3 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-20 shrink-0 text-muted-foreground">网络负载:</span>
                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-dark-surface">
                    <div
                      className="h-full bg-gradient-to-r from-neon-cyan to-neon-cyan/50 transition-all duration-500"
                      style={{ width: `${networkLoad}%` }}
                    />
                  </div>
                  <span className="w-12 shrink-0 text-right tabular-nums text-neon-cyan">{networkLoad}%</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-20 shrink-0 text-muted-foreground">CPU:</span>
                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-dark-surface">
                    <div
                      className="h-full bg-gradient-to-r from-neon-magenta to-neon-magenta/50 transition-all duration-500"
                      style={{ width: `${cpuUsage}%` }}
                    />
                  </div>
                  <span className="w-12 shrink-0 text-right tabular-nums text-neon-magenta">{cpuUsage}%</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-20 shrink-0 text-muted-foreground">内存:</span>
                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-dark-surface">
                    <div
                      className="h-full bg-gradient-to-r from-neon-yellow to-neon-yellow/50 transition-all duration-500"
                      style={{ width: `${memoryUsage}%` }}
                    />
                  </div>
                  <span className="w-12 shrink-0 text-right tabular-nums text-neon-yellow">{memoryUsage}%</span>
                </div>
              </div>

              <div className="mt-3 border-t border-neon-cyan/10 pt-3">
                <p className="text-muted-foreground">
                  {">"} 城市人口: <span className="text-neon-cyan">42,800,000</span>
                </p>
                <p className="mt-1 text-muted-foreground">
                  {">"} 企业控制区: <span className="text-neon-magenta">8 个区域</span>
                </p>
                <p className="mt-1 text-muted-foreground">
                  {">"} 当前时间: <span className="tabular-nums text-neon-yellow">{currentTime}</span>
                </p>
              </div>

              <div className="mt-3 border-t border-neon-cyan/10 pt-3">
                <p className="mb-2 text-xs text-muted-foreground/70">[系统日志]</p>
                <div className="space-y-1">
                  {systemLogs.map((log, index) => (
                    <p
                      key={index}
                      className="text-xs text-muted-foreground/80 animate-in fade-in slide-in-from-bottom-1 duration-300"
                    >
                      <span className="text-neon-cyan/70">{">"}</span> {log}
                    </p>
                  ))}
                  {systemLogs.length === 0 && <p className="text-xs text-muted-foreground/50">等待日志输入...</p>}
                </div>
              </div>

              <p className="mt-3 text-neon-cyan">✓ 数据同步完成 - 欢迎访问 NEXUS</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
