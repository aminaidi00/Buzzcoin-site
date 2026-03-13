import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: "🐝",
    title: "Fair Launch",
    subtitle: "1B Supply",
    description: "No presale, no team tokens. 100% fair distribution for the community.",
  },
  {
    icon: "👥",
    title: "Community Driven",
    subtitle: "No CEO",
    description: "Powered by the swarm. Every holder has a voice in our hive.",
  },
  {
    icon: "⚡",
    title: "Solana Native",
    subtitle: "Lightning Fast",
    description: "Built on Solana for instant transactions and minimal fees.",
  },
]

export function Features() {
  return (
    <section className="relative py-24 px-4 bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 text-white">
          Why <span className="text-[#FDD835]">$BZC</span>?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-[#141414] border-[#2a2a2a] hover:border-[#FDD835]/50 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(253,216,53,0.2)]"
            >
              <CardContent className="p-8 text-center">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl md:text-2xl font-bold text-[#FDD835] mb-1">
                  {feature.title}
                </h3>
                <p className="text-[#FF6200] font-semibold mb-4">{feature.subtitle}</p>
                <p className="text-white/70">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
