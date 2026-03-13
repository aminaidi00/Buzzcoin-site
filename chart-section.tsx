"use client"

export function ChartSection() {
  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-[#0A0A0A] to-[#0f0f0f]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-white">
          Live <span className="text-[#FDD835]">$BZC</span> Chart
        </h2>
        <p className="text-center text-white/60 mb-12">
          Track the buzz in real-time on Dexscreener
        </p>

        {/* Dexscreener Embed Container */}
        <div className="relative rounded-2xl overflow-hidden border border-[#2a2a2a] bg-[#141414] shadow-[0_0_50px_rgba(253,216,53,0.1)]">
          <div className="aspect-[16/9] md:aspect-[21/9]">
            <iframe
              src="https://dexscreener.com/solana/f7qdeRmwVJ1ViwuihBmSVwdjKRMESCZywnfwz6Dpump?embed=1&theme=dark"
              className="w-full h-full"
              title="Dexscreener $BZC Chart"
              loading="lazy"
            />
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {[
            { label: "Total Supply", value: "1,000,000,000" },
            { label: "Blockchain", value: "Solana" },
            { label: "Launch", value: "Fair" },
            { label: "Tax", value: "0%" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-[#141414] border border-[#2a2a2a] rounded-xl p-4 text-center"
            >
              <p className="text-white/60 text-sm mb-1">{stat.label}</p>
              <p className="text-[#FDD835] font-bold text-lg md:text-xl">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
