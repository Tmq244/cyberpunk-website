"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { ChevronDown, HelpCircle } from "lucide-react"

const faqs = [
  {
    question: "你们的服务是否合法？",
    answer: "我们所有的服务都严格遵守国际网络安全法规。我们专注于防御性安全服务，帮助企业保护其数字资产免受恶意攻击。",
  },
  {
    question: "如何确保我的数据安全？",
    answer:
      "我们采用军用级别的AES-256加密技术，所有通信都通过安全通道进行。我们的服务器分布在全球多个安全数据中心，确保数据的完整性和可用性。",
  },
  {
    question: "服务响应时间是多少？",
    answer:
      "对于紧急安全事件，我们承诺15分钟内响应。常规咨询和服务请求通常在24小时内处理完毕。VIP客户享有专属快速通道。",
  },
  {
    question: "你们支持哪些支付方式？",
    answer: "我们支持多种支付方式，包括银行转账、加密货币（BTC、ETH）以及主流信用卡。所有交易都经过加密保护。",
  },
  {
    question: "是否提供长期合作折扣？",
    answer: "是的，我们为长期合作伙伴提供优惠套餐。年度合约客户可享受高达30%的折扣，并获得优先技术支持。",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="relative py-24 px-6">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative mx-auto max-w-3xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="mb-2 font-mono text-xs tracking-[0.3em] text-neon-magenta">[ KNOWLEDGE_BASE ]</p>
          <h2 className="text-glow-cyan text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            常见<span className="text-neon-magenta">问题</span>
          </h2>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index

            return (
              <div
                key={index}
                className={cn(
                  "border border-border bg-card/30 backdrop-blur-sm transition-all duration-300",
                  isOpen ? "border-neon-cyan" : "hover:border-neon-cyan/50",
                )}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between p-6 text-left"
                >
                  <div className="flex items-center gap-4">
                    <HelpCircle
                      className={cn("h-5 w-5 transition-colors", isOpen ? "text-neon-cyan" : "text-muted-foreground")}
                    />
                    <span className="font-medium text-foreground">{faq.question}</span>
                  </div>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 text-muted-foreground transition-transform duration-300",
                      isOpen && "rotate-180 text-neon-cyan",
                    )}
                  />
                </button>

                <div className={cn("grid transition-all duration-300", isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
                  <div className="overflow-hidden">
                    <div className="border-t border-border px-6 pb-6 pt-4">
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
