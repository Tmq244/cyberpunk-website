"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "林志强",
    role: "新东京银行 CTO",
    avatar: "/avatar-asian-businessman.jpg",
    content: "NEXUS的安全团队帮助我们阻止了一次大规模的数据泄露事件，他们的响应速度和专业能力令人印象深刻。",
    rating: 5,
  },
  {
    id: 2,
    name: "艾米丽·张",
    role: "赛博医疗 CEO",
    avatar: "/avatar-asian-businesswoman.jpg",
    content: "我们的患者数据现在有了前所未有的保护。NEXUS的量子加密技术是市场上最先进的。",
    rating: 5,
  },
  {
    id: 3,
    name: "大卫·穆勒",
    role: "独立开发者",
    avatar: "/avatar-developer-male.jpg",
    content: "作为一个独立开发者，我需要可靠的安全解决方案。NEXUS提供的服务超出了我的预期。",
    rating: 4,
  },
]

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const goTo = (index: number) => {
    if (isAnimating) return
    setIsAnimating(true)
    setActiveIndex(index)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const goNext = () => {
    goTo((activeIndex + 1) % testimonials.length)
  }

  const goPrev = () => {
    goTo((activeIndex - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const timer = setInterval(goNext, 6000)
    return () => clearInterval(timer)
  }, [activeIndex])

  const activeTestimonial = testimonials[activeIndex]

  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,255,255,0.05),transparent_70%)]" />
      </div>

      <div className="relative mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="mb-2 font-mono text-xs tracking-[0.3em] text-neon-cyan">[ CLIENT_FEEDBACK ]</p>
          <h2 className="text-glow-cyan text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            客户<span className="text-neon-magenta">评价</span>
          </h2>
        </div>

        {/* Main Testimonial */}
        <div className="relative">
          {/* Large Quote Icon */}
          <Quote className="absolute -left-4 -top-4 h-24 w-24 text-neon-cyan/10" />

          <div className="relative border border-border bg-card/50 p-8 backdrop-blur-sm md:p-12">
            {/* Content */}
            <div
              className={cn(
                "transition-all duration-500",
                isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0",
              )}
            >
              {/* Rating */}
              <div className="mb-6 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      "h-5 w-5",
                      i < activeTestimonial.rating ? "fill-neon-yellow text-neon-yellow" : "text-muted",
                    )}
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="mb-8 text-xl leading-relaxed text-foreground md:text-2xl">
                "{activeTestimonial.content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="relative h-16 w-16 overflow-hidden border-2 border-neon-cyan">
                  <Image
                    src={activeTestimonial.avatar || "/placeholder.svg"}
                    alt={activeTestimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-foreground">{activeTestimonial.name}</p>
                  <p className="font-mono text-sm text-neon-magenta">{activeTestimonial.role}</p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="mt-8 flex items-center justify-between border-t border-border pt-6">
              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className={cn(
                      "h-2 transition-all duration-300",
                      i === activeIndex ? "w-8 bg-neon-cyan" : "w-2 bg-muted hover:bg-neon-cyan/50",
                    )}
                  />
                ))}
              </div>

              {/* Arrows */}
              <div className="flex gap-2">
                <button
                  onClick={goPrev}
                  className="flex h-10 w-10 items-center justify-center border border-border bg-background transition-colors hover:border-neon-cyan hover:text-neon-cyan"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={goNext}
                  className="flex h-10 w-10 items-center justify-center border border-border bg-background transition-colors hover:border-neon-cyan hover:text-neon-cyan"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Corner accents */}
            <div className="absolute left-0 top-0 h-6 w-6 border-l-2 border-t-2 border-neon-cyan" />
            <div className="absolute bottom-0 right-0 h-6 w-6 border-b-2 border-r-2 border-neon-magenta" />
          </div>
        </div>
      </div>
    </section>
  )
}
