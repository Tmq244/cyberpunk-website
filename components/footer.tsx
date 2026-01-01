import { Zap, Github, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-neon-cyan/20 bg-dark-surface/50 py-12 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Zap className="h-6 w-6 text-neon-cyan" />
            <span className="font-mono text-lg font-bold tracking-wider text-foreground">
              NEX<span className="text-neon-cyan">US</span>
            </span>
          </div>

          {/* Links */}
          <div className="flex gap-6 font-mono text-sm text-muted-foreground">
            <a href="#" className="transition-colors hover:text-neon-cyan">
              隐私政策
            </a>
            <a href="#" className="transition-colors hover:text-neon-cyan">
              服务条款
            </a>
            <a href="#" className="transition-colors hover:text-neon-cyan">
              技术支持
            </a>
          </div>

          {/* Social */}
          <div className="flex gap-4">
            <a href="#" className="text-muted-foreground transition-colors hover:text-neon-cyan">
              <Github className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground transition-colors hover:text-neon-magenta">
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 text-center font-mono text-xs text-muted-foreground/50">
          © 2077 NEXUS Corporation. 版权所有。
        </div>
      </div>
    </footer>
  )
}
