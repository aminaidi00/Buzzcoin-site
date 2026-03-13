import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const communities = [
  {
    icon: "👥",
    title: "BUZZCOIN COMMUNITY",
    subtitle: "150+ SWARMERS",
    description: "Join the conversation with fellow BZC holders",
    link: "https://t.me/Buzzcoincommunity",
    cta: "Join Chat",
  },
  {
    icon: "🎁",
    title: "TELEGRAM GIVEAWAY",
    subtitle: "DAILY GIVEAWAYS",
    description: "Participate in daily prizes and community events",
    link: "https://t.me/TelegramGiveaway",
    cta: "Join Now",
  },
  {
    icon: "🐦",
    title: "BUZZCOIN X",
    subtitle: "LIVE UPDATES",
    description: "Follow for the latest news, memes, and alpha",
    link: "https://x.com/buzzcoinfun",
    cta: "Follow Us",
  },
]

export function Community() {
  return (
    <section className="relative py-24 px-4 bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-white">
          Join the <span className="text-[#FDD835]">Swarm</span>
        </h2>
        <p className="text-center text-white/60 mb-12 max-w-2xl mx-auto">
          Connect with our buzzing community on Telegram
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {communities.map((community, index) => (
            <Card
              key={index}
              className="bg-[#141414] border-[#2a2a2a] hover:border-[#FF6200]/50 transition-all duration-300 group"
            >
              <CardContent className="p-8 text-center">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                  {community.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                  {community.title}
                </h3>
                <p className="text-[#FF6200] font-bold mb-4">{community.subtitle}</p>
                <p className="text-white/70 mb-6">{community.description}</p>
                <a
                  href={community.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-[#FDD835] hover:bg-[#FDD835]/90 text-[#0A0A0A] font-bold px-8 py-2 rounded-full transition-all hover:scale-105">
                    {community.cta}
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
