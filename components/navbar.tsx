"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { label: "首页", href: "/" },
  { label: "新闻动态", href: "/news" },
  { label: "城市档案", href: "/archives" },
  { label: "技术", href: "/#features" },
  { label: "数据", href: "/#stats" },
  { label: "联系", href: "/#contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-neon-cyan/20 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative">
              <Zap className="h-8 w-8 text-neon-cyan animate-flicker" />
              <div className="absolute inset-0 blur-sm">
                <Zap className="h-8 w-8 text-neon-cyan" />
              </div>
            </div>
            <span className="font-mono text-xl font-bold tracking-wider text-foreground">
              NEX<span className="text-neon-cyan text-glow-cyan">US</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex md:items-center md:gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="font-mono text-sm tracking-wide text-muted-foreground transition-all hover:text-neon-cyan hover:text-glow-cyan"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/explore">
              <Button
                variant="ghost"
                className="font-mono text-neon-magenta hover:text-neon-magenta hover:bg-neon-magenta/10"
              >
                开始探索
              </Button>
            </Link>
            <Link href="/access">
              <Button className="border border-neon-cyan bg-transparent font-mono text-neon-cyan hover:bg-neon-cyan hover:text-background border-glow-cyan">
                接入系统
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="border-t border-neon-cyan/20 py-4 md:hidden">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="font-mono text-sm tracking-wide text-muted-foreground transition-all hover:text-neon-cyan"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/explore"
                className="font-mono text-sm tracking-wide text-neon-magenta transition-all hover:text-neon-magenta"
                onClick={() => setIsOpen(false)}
              >
                开始探索
              </Link>
              <Link href="/access" onClick={() => setIsOpen(false)}>
                <Button className="w-full border border-neon-cyan bg-transparent font-mono text-neon-cyan hover:bg-neon-cyan hover:text-background">
                  接入系统
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
