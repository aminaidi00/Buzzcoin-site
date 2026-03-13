"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center overflow-hidden bg-[#0A0A0A]">
      {/* Subtle background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#FDD835]/3 rounded-full blur-[120px]" />
      </div>

      {/* Small logo at top center - 120x120px */}
      <div className="relative z-10 mt-20 md:mt-24">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2600-wjLuDvuuKqQbFXTFzxb4iYS7H0nVs3.png"
          alt="Buzzcoin fly mascot with golden BUZZ crown"
          width={120}
          height={120}
          className="drop-shadow-[0_0_25px_rgba(253,216,53,0.4)]"
          priority
        />
      </div>

      {/* Centered content with 70% breathing room */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 px-4 py-16">
        {/* Main title - refined */}
        <h1 className="text-2xl md:text-3xl font-semibold text-center mb-2 tracking-wide">
          <span className="text-[#FDD835]">BUZZCOIN</span>
          <span className="text-white/90 ml-2">$BZC</span>
        </h1>

        {/* Subtitle - subtle */}
        <p className="text-xs md:text-sm text-white/40 text-center mb-10 font-normal tracking-[0.2em] uppercase">
          The Hive Is Buzzing
        </p>

        {/* Live counters with blink animation */}
        <div className="flex items-center justify-center gap-6 md:gap-10 mb-12">
          <div className="text-center">
            <p className="text-lg md:text-xl font-bold text-[#FDD835] animate-blink">1,847</p>
            <p className="text-[10px] md:text-xs text-white/40 uppercase tracking-wider">Holders</p>
          </div>
          <div className="w-px h-8 bg-white/10" />
          <div className="text-center">
            <p className="text-lg md:text-xl font-bold text-[#22C55E] animate-blink">+24.7%</p>
            <p className="text-[10px] md:text-xs text-white/40 uppercase tracking-wider">24h</p>
          </div>
          <div className="w-px h-8 bg-white/10" />
          <div className="text-center">
            <p className="text-lg md:text-xl font-bold text-[#FDD835] animate-blink">$2.4M</p>
            <p className="text-[10px] md:text-xs text-white/40 uppercase tracking-wider">MC</p>
          </div>
        </div>

        {/* CTA Button with pulse and hover glow */}
        <a
          href="https://pump.fun/f7qdeRmwVJ1ViwuihBmSVwdjKRMESCZywnfwz6Dpump"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            size="lg"
            className="bg-[#FF6200] hover:bg-[#FF6200]/90 text-white text-sm font-semibold px-10 py-6 rounded-full transition-all hover:scale-105 animate-pulse-orange"
          >
            BUY $BZC
          </Button>
        </a>
      </div>

      {/* Bottom spacer for breathing room */}
      <div className="h-24 md:h-32" />

      {/* Subtle scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce opacity-20">
        <svg
          className="w-4 h-4 text-white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
