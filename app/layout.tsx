import type React from "react"
import type { Metadata, Viewport } from "next"
import { Orbitron, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" })
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" })

export const metadata: Metadata = {
  title: {
    default: "NEXUS // 2077 - 欢迎来到未来",
    template: "%s | NEXUS 2077",
  },
  description: "欢迎来到未来 - 霓虹灯照耀下的数字世界。NEXUS是通往赛博空间的入口，连接夜之城的每一个角落。",
  keywords: ["赛博朋克", "cyberpunk", "未来科技", "NEXUS", "神经网络", "夜之城", "2077"],
  generator: "v0.app",
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "NEXUS // 2077 - 欢迎来到未来",
    description: "霓虹灯照耀下的数字世界，连接夜之城的每一个角落",
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: "#00ffff",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN" className="dark">
      <body className={`${orbitron.variable} ${jetbrains.variable} font-mono antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
