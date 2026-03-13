"use client"

import { useState } from "react"
import Image from "next/image"

export function Footer() {
  const [copied, setCopied] = useState(false)
  const contractAddress = "f7qdeRmwVJ1ViwuihBmSVwdjKRMESCZywnfwz6Dpump"

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <footer className="relative py-12 px-4 bg-[#0A0A0A] border-t border-[#2a2a2a]">
      <div className="max-w-4xl mx-auto text-center">
        {/* Logo */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2599-d6jKyEL3OPZdWRfMDSi52sxj8d8uzR.jpeg"
            alt="Buzzcoin fly mascot"
            width={56}
            height={56}
            className="rounded-full border-2 border-[#FDD835] shadow-[0_0_20px_rgba(253,216,53,0.4)]"
          />
          <span className="text-2xl font-bold text-[#FDD835]">BUZZCOIN</span>
          <span className="text-xl text-white/80">$BZC</span>
        </div>

        {/* Contract Address */}
        <div className="mb-8">
          <p className="text-white/60 text-sm mb-2">Contract Address (CA)</p>
          <button
            onClick={copyToClipboard}
            className="bg-[#141414] border border-[#2a2a2a] hover:border-[#FDD835]/50 rounded-xl px-4 py-3 text-xs md:text-sm text-white/80 font-mono break-all transition-all hover:bg-[#1a1a1a] cursor-pointer"
          >
            {contractAddress}
            <span className="ml-2 text-[#FDD835]">
              {copied ? "✓ Copied!" : "📋"}
            </span>
          </button>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6 mb-8">
          <a
            href="https://t.me/Buzzcoincommunity"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-[#FDD835] transition-colors"
            aria-label="Telegram Community"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
            </svg>
          </a>
          <a
            href="https://x.com/buzzcoinfun"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-[#FDD835] transition-colors"
            aria-label="X (Twitter)"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          <a
            href="https://dexscreener.com/solana/f7qdeRmwVJ1ViwuihBmSVwdjKRMESCZywnfwz6Dpump"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-[#FDD835] transition-colors"
            aria-label="Dexscreener"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/>
            </svg>
          </a>
        </div>

        {/* Disclaimer */}
        <p className="text-white/40 text-xs max-w-xl mx-auto">
          $BZC is a memecoin with no intrinsic value or expectation of financial return. 
          This is not financial advice. Always do your own research.
        </p>
      </div>
    </footer>
  )
}
