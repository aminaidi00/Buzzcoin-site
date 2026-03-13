"use client"

import { CheckCircle2, Circle, Rocket, Users, Zap, Globe } from "lucide-react"

const phases = [
  {
    phase: "Phase 1",
    title: "LAUNCH",
    icon: Rocket,
    completed: true,
    items: [
      "Token Launch on Pump.fun",
      "Community Telegram Groups",
      "Initial Marketing Push",
      "1000+ Holders",
    ],
  },
  {
    phase: "Phase 2",
    title: "GROWTH",
    icon: Users,
    completed: false,
    items: [
      "CEX Listings",
      "Influencer Partnerships",
      "NFT Collection Drop",
      "5000+ Holders",
    ],
  },
  {
    phase: "Phase 3",
    title: "EXPANSION",
    icon: Zap,
    completed: false,
    items: [
      "Staking Platform",
      "Mobile App Launch",
      "Major Exchange Listing",
      "25000+ Holders",
    ],
  },
  {
    phase: "Phase 4",
    title: "DOMINATION",
    icon: Globe,
    completed: false,
    items: [
      "Global Marketing Campaign",
      "DAO Governance",
      "Cross-chain Bridge",
      "100000+ Holders",
    ],
  },
]

export function Roadmap() {
  return (
    <section className="relative py-20 px-4 bg-[#0A0A0A] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#FDD835]/5 rounded-full blur-[120px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            THE <span className="text-[#FDD835]">ROADMAP</span>
          </h2>
          <p className="text-white/60">Our journey to the moon</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {phases.map((phase, index) => {
            const Icon = phase.icon
            return (
              <div
                key={phase.phase}
                className={`relative p-6 rounded-xl border transition-all duration-300 ${
                  phase.completed
                    ? "bg-[#FDD835]/10 border-[#FDD835]/50"
                    : "bg-[#141414] border-[#2a2a2a] hover:border-[#FDD835]/30"
                }`}
              >
                {/* Phase number badge */}
                <div
                  className={`absolute -top-3 left-4 px-3 py-1 rounded-full text-xs font-bold ${
                    phase.completed
                      ? "bg-[#FDD835] text-[#0A0A0A]"
                      : "bg-[#2a2a2a] text-white/60"
                  }`}
                >
                  {phase.phase}
                </div>

                {/* Icon */}
                <div className="flex items-center gap-3 mb-4 mt-2">
                  <div
                    className={`p-2 rounded-lg ${
                      phase.completed ? "bg-[#FDD835]/20" : "bg-[#2a2a2a]"
                    }`}
                  >
                    <Icon
                      className={`w-5 h-5 ${
                        phase.completed ? "text-[#FDD835]" : "text-white/60"
                      }`}
                    />
                  </div>
                  <h3
                    className={`text-lg font-bold ${
                      phase.completed ? "text-[#FDD835]" : "text-white"
                    }`}
                  >
                    {phase.title}
                  </h3>
                </div>

                {/* Items */}
                <ul className="space-y-2">
                  {phase.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      {phase.completed ? (
                        <CheckCircle2 className="w-4 h-4 text-[#FDD835] mt-0.5 shrink-0" />
                      ) : (
                        <Circle className="w-4 h-4 text-white/30 mt-0.5 shrink-0" />
                      )}
                      <span
                        className={
                          phase.completed ? "text-white/80" : "text-white/50"
                        }
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Completed badge */}
                {phase.completed && (
                  <div className="mt-4 text-center">
                    <span className="inline-block px-3 py-1 bg-[#FDD835] text-[#0A0A0A] text-xs font-bold rounded-full">
                      COMPLETED
                    </span>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
