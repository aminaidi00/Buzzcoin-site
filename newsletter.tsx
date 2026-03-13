"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, CheckCircle2, Loader2 } from "lucide-react"
import Image from "next/image"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setStatus("loading")
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    
    setStatus("success")
    setEmail("")
    
    // Reset after 3 seconds
    setTimeout(() => setStatus("idle"), 3000)
  }

  return (
    <section className="relative py-20 px-4 bg-gradient-to-t from-[#141414] to-[#0A0A0A] overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-[#FDD835]/5 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] bg-[#FF6200]/5 rounded-full blur-[100px]" />

      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center p-8 md:p-12 rounded-2xl border border-[#2a2a2a] bg-[#0A0A0A]/90">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2599-d6jKyEL3OPZdWRfMDSi52sxj8d8uzR.jpeg"
              alt="Buzzcoin fly mascot"
              width={80}
              height={80}
              className="rounded-full border-2 border-[#FDD835] shadow-[0_0_30px_rgba(253,216,53,0.4)]"
            />
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FDD835]/10 rounded-full mb-6">
            <Mail className="w-4 h-4 text-[#FDD835]" />
            <span className="text-[#FDD835] text-sm font-medium">NEWSLETTER</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Get <span className="text-[#FDD835]">$BZC Alpha</span>
          </h2>
          <p className="text-white/60 mb-8 max-w-md mx-auto">
            Be the first to know about airdrops, giveaways, and exclusive updates.
            Join 500+ buzzing subscribers.
          </p>

          {status === "success" ? (
            <div className="flex items-center justify-center gap-3 p-4 bg-green-500/10 border border-green-500/30 rounded-xl">
              <CheckCircle2 className="w-6 h-6 text-green-400" />
              <span className="text-green-400 font-medium">
                Welcome to the swarm! Check your inbox.
              </span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 h-12 bg-[#141414] border-[#2a2a2a] text-white placeholder:text-white/40 focus:border-[#FDD835] focus:ring-[#FDD835]/20"
              />
              <Button
                type="submit"
                disabled={status === "loading"}
                className="h-12 px-8 bg-[#FDD835] hover:bg-[#FFE033] text-[#0A0A0A] font-bold rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(253,216,53,0.4)]"
              >
                {status === "loading" ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  "Subscribe"
                )}
              </Button>
            </form>
          )}

          <p className="text-white/30 text-xs mt-4">
            No spam, ever. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  )
}
