"use client"

import { useEffect, useState } from "react"
import { TrendingUp } from "lucide-react"

const socials = [
  {
    platform: "X (Twitter)",
    handle: "@buzzcoinfun",
    followers: "2,847",
    growth: "+124",
    link: "https://x.com/buzzcoinfun",
    color: "#1DA1F2",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    platform: "Telegram Community",
    handle: "@Buzzcoincommunity",
    followers: "1,247",
    growth: "+89",
    link: "https://t.me/Buzzcoincommunity",
    color: "#0088CC",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
      </svg>
    ),
  },
  {
    platform: "Telegram Giveaway",
    handle: "@TelegramGiveaway",
    followers: "847",
    growth: "+56",
    link: "https://t.me/TelegramGiveaway",
    color: "#0088CC",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
      </svg>
    ),
  },
]

export function SocialCounters() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative py-16 px-4 bg-[#0A0A0A]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            JOIN THE <span className="text-[#FDD835]">SWARM</span>
          </h2>
          <p className="text-white/60">Growing stronger every day</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {socials.map((social, index) => (
            <a
              key={social.platform}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-6 rounded-xl bg-[#141414] border border-[#2a2a2a] hover:border-[#FDD835]/50 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div
                  className="p-3 rounded-full transition-colors duration-300"
                  style={{ backgroundColor: `${social.color}20` }}
                >
                  <span style={{ color: social.color }}>{social.icon}</span>
                </div>
                <div>
                  <p className="text-white font-medium">{social.platform}</p>
                  <p className="text-white/50 text-sm">{social.handle}</p>
                </div>
              </div>

              <div className="flex items-end justify-between">
                <div>
                  <p
                    className={`text-3xl font-bold text-white ${
                      mounted
                        ? "animate-in fade-in slide-in-from-bottom-2"
                        : ""
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {social.followers}
                  </p>
                  <p className="text-white/50 text-sm">members</p>
                </div>
                <div className="flex items-center gap-1 text-green-400">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-sm font-medium">
                    {social.growth} today
                  </span>
                </div>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#FDD835]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
