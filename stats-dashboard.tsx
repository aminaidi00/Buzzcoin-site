"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

const stats = [
  { label: "Market Cap", value: "$2.4M", change: "+12.5%", positive: true },
  { label: "Holders", value: "1,847", change: "+89", positive: true },
  { label: "Volume 24h", value: "$847K", change: "+34.2%", positive: true },
  { label: "Liquidity", value: "$312K", change: "+8.1%", positive: true },
]

export function StatsDashboard() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative py-16 px-4 bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            LIVE <span className="text-[#FDD835]">STATS</span>
          </h2>
          <p className="text-white/60">Real-time $BZC metrics</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <Card
              key={stat.label}
              className="bg-[#141414] border-[#2a2a2a] hover:border-[#FDD835]/50 transition-all duration-300 overflow-hidden group"
            >
              <CardContent className="p-5 text-center relative">
                <div className="absolute inset-0 bg-gradient-to-b from-[#FDD835]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <p className="text-white/50 text-xs uppercase tracking-wider mb-2">
                  {stat.label}
                </p>
                <p
                  className={`text-2xl md:text-3xl font-bold text-white mb-1 ${
                    mounted ? "animate-in fade-in slide-in-from-bottom-2" : ""
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {stat.value}
                </p>
                <p
                  className={`text-sm font-medium ${
                    stat.positive ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {stat.change}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
