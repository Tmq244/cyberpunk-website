"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import {
  Zap,
  Eye,
  EyeOff,
  Shield,
  Fingerprint,
  Scan,
  AlertTriangle,
  CheckCircle2,
  Lock,
  User,
  Mail,
  ArrowRight,
  Loader2,
  ChevronLeft,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

type AuthMode = "login" | "register" | "verify" | "success"

export default function AccessPage() {
  const [mode, setMode] = useState<AuthMode>("login")
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [scanProgress, setScanProgress] = useState(0)
  const [terminalLines, setTerminalLines] = useState<string[]>([])
  const [verifyCode, setVerifyCode] = useState(["", "", "", "", "", ""])

  // Terminal animation effect
  useEffect(() => {
    const bootSequence = [
      "> NEXUS SECURITY PROTOCOL v4.7.2",
      "> Initializing quantum firewall...",
      "> Neural authentication ready",
      "> Biometric scanners online",
      "> System status: SECURE",
      "> Awaiting user credentials...",
    ]

    let lineIndex = 0
    const interval = setInterval(() => {
      if (lineIndex < bootSequence.length) {
        setTerminalLines((prev) => [...prev, bootSequence[lineIndex]])
        lineIndex++
      } else {
        clearInterval(interval)
      }
    }, 400)

    return () => clearInterval(interval)
  }, [])

  // Scan animation for verification
  useEffect(() => {
    if (mode === "verify") {
      const interval = setInterval(() => {
        setScanProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval)
            return 100
          }
          return prev + 2
        })
      }, 50)
      return () => clearInterval(interval)
    }
  }, [mode])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate authentication
    await new Promise((resolve) => setTimeout(resolve, 2000))

    if (mode === "login" || mode === "register") {
      setMode("verify")
      setScanProgress(0)
    } else if (mode === "verify") {
      setMode("success")
    }

    setIsLoading(false)
  }

  const handleVerifyCodeChange = (index: number, value: string) => {
    if (value.length <= 1) {
      const newCode = [...verifyCode]
      newCode[index] = value
      setVerifyCode(newCode)

      // Auto focus next input
      if (value && index < 5) {
        const nextInput = document.getElementById(`code-${index + 1}`)
        nextInput?.focus()
      }
    }
  }

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Animated scan line */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-neon-cyan/50 to-transparent animate-scan" />
      </div>

      {/* Circuit pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path
                d="M0 50h40M60 50h40M50 0v40M50 60v40"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-neon-cyan"
                fill="none"
              />
              <circle cx="50" cy="50" r="3" className="fill-neon-cyan" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      {/* Back button */}
      <Link
        href="/"
        className="absolute top-6 left-6 z-20 flex items-center gap-2 font-mono text-sm text-muted-foreground hover:text-neon-cyan transition-colors"
      >
        <ChevronLeft className="h-4 w-4" />
        返回主页
      </Link>

      <div className="relative z-10 flex min-h-screen">
        {/* Left side - Terminal */}
        <div className="hidden lg:flex lg:w-1/2 flex-col justify-center p-12 border-r border-neon-cyan/20">
          <div className="max-w-lg">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-8">
              <div className="relative">
                <Zap className="h-10 w-10 text-neon-cyan animate-flicker" />
                <div className="absolute inset-0 blur-sm">
                  <Zap className="h-10 w-10 text-neon-cyan" />
                </div>
              </div>
              <span className="font-mono text-3xl font-bold tracking-wider">
                NEX<span className="text-neon-cyan text-glow-cyan">US</span>
              </span>
            </div>

            {/* Terminal window */}
            <div className="bg-dark-surface border border-neon-cyan/30 rounded-lg overflow-hidden border-glow-cyan">
              <div className="flex items-center gap-2 px-4 py-2 border-b border-neon-cyan/20 bg-background/50">
                <div className="w-3 h-3 rounded-full bg-neon-magenta" />
                <div className="w-3 h-3 rounded-full bg-neon-yellow" />
                <div className="w-3 h-3 rounded-full bg-neon-cyan" />
                <span className="ml-2 font-mono text-xs text-muted-foreground">nexus_terminal.exe</span>
              </div>
              <div className="p-4 h-64 overflow-hidden font-mono text-sm">
                {terminalLines.map((line, index) => (
                  <div
                    key={index}
                    className={cn(
                      "mb-1",
                      line?.includes("SECURE") ? "text-neon-cyan" : "text-muted-foreground",
                      line?.includes("Awaiting") && "text-neon-yellow animate-pulse",
                    )}
                  >
                    {line}
                  </div>
                ))}
                <span className="inline-block w-2 h-4 bg-neon-cyan animate-pulse ml-1" />
              </div>
            </div>

            {/* Security features */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { icon: Shield, label: "量子加密", desc: "256-bit 安全协议" },
                { icon: Fingerprint, label: "生物识别", desc: "多因素认证" },
                { icon: Scan, label: "实时监控", desc: "AI 威胁检测" },
                { icon: Lock, label: "零信任架构", desc: "端到端保护" },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="p-3 bg-card/50 border border-neon-cyan/10 rounded-lg hover:border-neon-cyan/30 transition-colors"
                >
                  <feature.icon className="h-5 w-5 text-neon-cyan mb-2" />
                  <div className="font-mono text-sm font-medium">{feature.label}</div>
                  <div className="font-mono text-xs text-muted-foreground">{feature.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right side - Auth forms */}
        <div className="flex-1 flex items-center justify-center p-6 lg:p-12">
          <div className="w-full max-w-md">
            {mode === "success" ? (
              /* Success state */
              <div className="text-center">
                <div className="relative inline-block mb-6">
                  <div className="absolute inset-0 bg-neon-cyan/20 blur-xl rounded-full" />
                  <CheckCircle2 className="relative h-20 w-20 text-neon-cyan" />
                </div>
                <h2 className="font-mono text-2xl font-bold mb-2 text-glow-cyan text-neon-cyan">身份验证成功</h2>
                <p className="font-mono text-sm text-muted-foreground mb-6">ACCESS_GRANTED // 欢迎进入 NEXUS 系统</p>
                <div className="p-4 bg-card border border-neon-cyan/30 rounded-lg mb-6">
                  <div className="font-mono text-xs text-muted-foreground mb-2">用户权限等级</div>
                  <div className="flex items-center justify-center gap-2">
                    {["ALPHA", "BETA", "GAMMA", "DELTA"].map((level, i) => (
                      <span
                        key={level}
                        className={cn(
                          "px-2 py-1 text-xs font-mono rounded",
                          i === 0
                            ? "bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/50"
                            : "bg-muted text-muted-foreground",
                        )}
                      >
                        {level}
                      </span>
                    ))}
                  </div>
                </div>
                <Link href="/">
                  <Button className="w-full bg-neon-cyan text-background hover:bg-neon-cyan/80 font-mono">
                    进入控制台
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            ) : mode === "verify" ? (
              /* Verification state */
              <div className="text-center">
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto relative">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle
                        cx="64"
                        cy="64"
                        r="60"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                        className="text-muted"
                      />
                      <circle
                        cx="64"
                        cy="64"
                        r="60"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                        className="text-neon-cyan"
                        strokeDasharray={`${2 * Math.PI * 60}`}
                        strokeDashoffset={`${2 * Math.PI * 60 * (1 - scanProgress / 100)}`}
                        strokeLinecap="round"
                        style={{ filter: "drop-shadow(0 0 10px var(--neon-cyan))" }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Fingerprint className="h-12 w-12 text-neon-cyan animate-pulse" />
                    </div>
                  </div>
                </div>

                <h2 className="font-mono text-xl font-bold mb-2">
                  <span className="text-neon-cyan">[</span> 身份验证中 <span className="text-neon-cyan">]</span>
                </h2>
                <p className="font-mono text-sm text-muted-foreground mb-6">请输入发送至您设备的验证码</p>

                <form onSubmit={handleSubmit}>
                  <div className="flex justify-center gap-2 mb-6">
                    {verifyCode.map((digit, index) => (
                      <input
                        key={index}
                        id={`code-${index}`}
                        type="text"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleVerifyCodeChange(index, e.target.value)}
                        className="w-12 h-14 text-center text-xl font-mono bg-dark-surface border border-neon-cyan/30 rounded-lg text-foreground focus:border-neon-cyan focus:outline-none focus:ring-1 focus:ring-neon-cyan"
                      />
                    ))}
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-neon-cyan text-background hover:bg-neon-cyan/80 font-mono"
                    disabled={isLoading || verifyCode.some((d) => !d)}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        验证中...
                      </>
                    ) : (
                      <>
                        确认验证
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>

                <p className="mt-4 font-mono text-xs text-muted-foreground">
                  未收到验证码？
                  <button className="text-neon-cyan hover:underline ml-1">重新发送</button>
                </p>
              </div>
            ) : (
              /* Login / Register state */
              <>
                {/* Mobile logo */}
                <div className="flex items-center justify-center gap-3 mb-8 lg:hidden">
                  <Zap className="h-8 w-8 text-neon-cyan animate-flicker" />
                  <span className="font-mono text-2xl font-bold tracking-wider">
                    NEX<span className="text-neon-cyan text-glow-cyan">US</span>
                  </span>
                </div>

                {/* Mode toggle */}
                <div className="flex mb-8 bg-dark-surface rounded-lg p-1 border border-neon-cyan/20">
                  <button
                    onClick={() => setMode("login")}
                    className={cn(
                      "flex-1 py-2 px-4 font-mono text-sm rounded-md transition-all",
                      mode === "login" ? "bg-neon-cyan text-background" : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    系统登录
                  </button>
                  <button
                    onClick={() => setMode("register")}
                    className={cn(
                      "flex-1 py-2 px-4 font-mono text-sm rounded-md transition-all",
                      mode === "register"
                        ? "bg-neon-cyan text-background"
                        : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    注册账户
                  </button>
                </div>

                {/* Warning banner */}
                <div className="mb-6 p-3 bg-neon-yellow/10 border border-neon-yellow/30 rounded-lg flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-neon-yellow flex-shrink-0 mt-0.5" />
                  <div className="font-mono text-xs text-neon-yellow">
                    <strong>安全提示:</strong> 您正在访问加密通道，所有数据传输均受量子加密保护。
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {mode === "register" && (
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input
                        type="text"
                        placeholder="用户代号"
                        className="pl-10 bg-dark-surface border-neon-cyan/20 font-mono focus:border-neon-cyan"
                      />
                    </div>
                  )}

                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      type="email"
                      placeholder="电子邮箱"
                      className="pl-10 bg-dark-surface border-neon-cyan/20 font-mono focus:border-neon-cyan"
                    />
                  </div>

                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="安全密钥"
                      className="pl-10 pr-10 bg-dark-surface border-neon-cyan/20 font-mono focus:border-neon-cyan"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>

                  {mode === "register" && (
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="确认密钥"
                        className="pl-10 bg-dark-surface border-neon-cyan/20 font-mono focus:border-neon-cyan"
                      />
                    </div>
                  )}

                  {mode === "login" && (
                    <div className="flex items-center justify-between text-sm">
                      <label className="flex items-center gap-2 font-mono text-muted-foreground">
                        <input
                          type="checkbox"
                          className="rounded border-neon-cyan/30 bg-dark-surface text-neon-cyan focus:ring-neon-cyan"
                        />
                        记住此设备
                      </label>
                      <button type="button" className="font-mono text-neon-cyan hover:underline">
                        忘记密钥?
                      </button>
                    </div>
                  )}

                  <Button
                    type="submit"
                    className="w-full bg-neon-cyan text-background hover:bg-neon-cyan/80 font-mono border-glow-cyan"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        {mode === "login" ? "验证身份中..." : "创建账户中..."}
                      </>
                    ) : (
                      <>
                        {mode === "login" ? "接入系统" : "激活账户"}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>

                {/* Social login */}
                <div className="mt-8">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-neon-cyan/20" />
                    </div>
                    <div className="relative flex justify-center text-xs">
                      <span className="bg-background px-4 font-mono text-muted-foreground">或通过以下方式接入</span>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-3 gap-3">
                    {[
                      { name: "神经链接", icon: "🧠" },
                      { name: "生物芯片", icon: "💉" },
                      { name: "视网膜", icon: "👁" },
                    ].map((method) => (
                      <button
                        key={method.name}
                        type="button"
                        className="flex flex-col items-center gap-1 p-3 bg-dark-surface border border-neon-cyan/20 rounded-lg hover:border-neon-cyan/50 transition-colors"
                      >
                        <span className="text-xl">{method.icon}</span>
                        <span className="font-mono text-xs text-muted-foreground">{method.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Terms */}
                <p className="mt-6 text-center font-mono text-xs text-muted-foreground">
                  继续即表示您同意我们的 <button className="text-neon-cyan hover:underline">服务条款</button> 和{" "}
                  <button className="text-neon-cyan hover:underline">隐私协议</button>
                </p>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-neon-cyan/50 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `pulse ${2 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    </div>
  )
}
