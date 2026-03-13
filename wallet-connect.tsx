"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Wallet } from "lucide-react"

export function WalletConnect() {
  const [isConnecting, setIsConnecting] = useState(false)

  const connectPhantom = async () => {
    setIsConnecting(true)
    try {
      // @ts-expect-error - Phantom wallet injection
      const { solana } = window
      if (solana?.isPhantom) {
        await solana.connect()
      } else {
        window.open("https://phantom.app/", "_blank")
      }
    } catch (error) {
      console.error("Failed to connect Phantom:", error)
    }
    setIsConnecting(false)
  }

  const connectSolflare = async () => {
    setIsConnecting(true)
    try {
      // @ts-expect-error - Solflare wallet injection
      const { solflare } = window
      if (solflare?.isSolflare) {
        await solflare.connect()
      } else {
        window.open("https://solflare.com/", "_blank")
      }
    } catch (error) {
      console.error("Failed to connect Solflare:", error)
    }
    setIsConnecting(false)
  }

  return (
    <section className="relative py-16 px-4 bg-gradient-to-b from-[#0A0A0A] to-[#141414]">
      <div className="max-w-4xl mx-auto">
        <div className="relative p-8 md:p-12 rounded-2xl border border-[#2a2a2a] bg-[#0A0A0A]/80 overflow-hidden">
          {/* Background glow */}
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#FDD835]/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-[#FF6200]/10 rounded-full blur-[80px]" />

          <div className="relative z-10 text-center">
            <div className="inline-flex items-center justify-center p-3 bg-[#FDD835]/10 rounded-full mb-6">
              <Wallet className="w-8 h-8 text-[#FDD835]" />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              CONNECT <span className="text-[#FDD835]">WALLET</span>
            </h2>
            <p className="text-white/60 mb-8 max-w-md mx-auto">
              Connect your Solana wallet to track your $BZC holdings and access
              exclusive features
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                onClick={connectPhantom}
                disabled={isConnecting}
                className="w-full sm:w-auto px-8 py-6 bg-[#AB9FF2] hover:bg-[#9580FF] text-white font-bold text-lg rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(171,159,242,0.4)]"
              >
                <svg
                  className="w-6 h-6 mr-2"
                  viewBox="0 0 128 128"
                  fill="currentColor"
                >
                  <circle cx="64" cy="64" r="64" fill="currentColor" />
                  <path
                    d="M110.5 64c0-4.3-3.5-7.8-7.8-7.8h-9.4c-.7-15.8-13.7-28.5-29.6-28.5-16.4 0-29.7 13.3-29.7 29.7 0 16.4 13.3 29.7 29.7 29.7h39c4.3 0 7.8-3.5 7.8-7.8V64z"
                    fill="#0A0A0A"
                  />
                  <circle cx="50" cy="57" r="5" fill="#AB9FF2" />
                </svg>
                Phantom
              </Button>

              <Button
                onClick={connectSolflare}
                disabled={isConnecting}
                className="w-full sm:w-auto px-8 py-6 bg-[#FC7227] hover:bg-[#FF8C4D] text-white font-bold text-lg rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(252,114,39,0.4)]"
              >
                <svg
                  className="w-6 h-6 mr-2"
                  viewBox="0 0 128 128"
                  fill="currentColor"
                >
                  <circle cx="64" cy="64" r="64" fill="currentColor" />
                  <path
                    d="M64 28L40 64l24 36 24-36L64 28z"
                    fill="#0A0A0A"
                  />
                </svg>
                Solflare
              </Button>
            </div>

            <p className="text-white/40 text-sm mt-6">
              New to Solana?{" "}
              <a
                href="https://phantom.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FDD835] hover:underline"
              >
                Get Phantom Wallet
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
