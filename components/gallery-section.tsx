"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const galleryItems = [
  {
    title: "城市天际线",
    titleEn: "CITY_SKYLINE",
    description: "霓虹灯下的未来都市",
    image: "/cyberpunk-neon-city-skyline-at-night-with-holograp.jpg",
  },
  {
    title: "数据中心",
    titleEn: "DATA_CENTER",
    description: "量子计算核心设施",
    image: "/futuristic-data-center-with-glowing-servers-and-bl.jpg",
  },
  {
    title: "神经接口",
    titleEn: "NEURAL_INTERFACE",
    description: "人机融合技术展示",
    image: "/cyberpunk-neural-interface-device-with-cyan-glow.jpg",
  },
  {
    title: "虚拟空间",
    titleEn: "VIRTUAL_SPACE",
    description: "沉浸式数字世界",
    image: "/cyberpunk-virtual-reality-digital-world-with-neon-.jpg",
  },
]

export function GallerySection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-2 font-mono text-xs uppercase tracking-[0.3em] text-neon-magenta">// VISUAL_DATABASE</p>
          <h2 className="font-mono text-2xl font-bold text-foreground sm:text-3xl">
            视觉<span className="text-neon-cyan text-glow-cyan">档案</span>
          </h2>
          <p className="mt-4 font-mono text-muted-foreground">探索赛博空间的视觉记录</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group relative aspect-video overflow-hidden rounded-lg border border-neon-cyan/20 transition-all duration-300 hover:border-neon-cyan/60 hover:shadow-[0_0_40px_rgba(0,255,255,0.2)]"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div
                className={cn(
                  "absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent transition-opacity duration-300",
                  hoveredIndex === index ? "opacity-90" : "opacity-60",
                )}
              />

              {/* Scan line effect on hover */}
              <div
                className={cn(
                  "absolute inset-0 overflow-hidden transition-opacity",
                  hoveredIndex === index ? "opacity-100" : "opacity-0",
                )}
              >
                <div className="animate-scan absolute inset-x-0 h-[1px] bg-neon-cyan/50" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="mb-1 font-mono text-xs text-neon-cyan">{item.titleEn}</p>
                <h3 className="font-mono text-xl font-bold text-foreground">{item.title}</h3>
                <p
                  className={cn(
                    "mt-2 font-mono text-sm text-muted-foreground transition-all duration-300",
                    hoveredIndex === index ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0",
                  )}
                >
                  {item.description}
                </p>
              </div>

              {/* Corner decoration */}
              <div className="absolute right-4 top-4 h-8 w-8 border-r border-t border-neon-cyan/50 transition-colors group-hover:border-neon-cyan" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
