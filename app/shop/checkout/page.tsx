/**
 * Create By Chazi ` Mpx
 * Contact Me on wa.me/14314403688
 * Follow https://github.com/everlynnameyhst
 */
"use client"

import { Suspense, useState } from "react"
import { Navbar } from "@/components/chazi-navbar"
import { Footer } from "@/components/chazi-footer"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { useSearchParams } from "next/navigation"
import { Check, Wallet, Landmark, QrCode, CreditCard, ChevronDown } from "lucide-react"

function CheckoutContent() {
  const searchParams = useSearchParams()
  const [openCategory, setOpenCategory] = useState<string | null>("ewallet")
  const [selectedMethod, setSelectedMethod] = useState("")

  const payments = [
    {
      id: "ewallet",
      label: "E-Wallet",
      icon: Wallet,
      methods: [
        { id: "qris", name: "QRIS", icon: QrCode },
        { id: "dana", name: "DANA", icon: Wallet },
        { id: "gopay", name: "GoPay", icon: Wallet },
      ],
    },
    {
      id: "bank",
      label: "Transfer Bank",
      icon: Landmark,
      methods: [
        { id: "bca", name: "BCA", icon: Landmark },
        { id: "mandiri", name: "Mandiri", icon: Landmark },
        { id: "bni", name: "BNI", icon: Landmark },
      ],
    },
    {
      id: "card",
      label: "Visa / Credit Card",
      icon: CreditCard,
      methods: [
        { id: "visa", name: "Visa Card", icon: CreditCard },
        { id: "mastercard", name: "MasterCard", icon: CreditCard },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28 pb-16 px-4 max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gradient text-center">Chazi Payment Center</h1>
        <div className="space-y-4">
          {payments.map((cat) => (
            <div key={cat.id} className="bg-card rounded-3xl border border-border/40 overflow-hidden">
              <button
                onClick={() => setOpenCategory(openCategory === cat.id ? null : cat.id)}
                className="w-full p-6 flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <cat.icon className="w-6 h-6 text-primary" />
                  <span className="text-lg font-bold">{cat.label}</span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${openCategory === cat.id ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence>
                {openCategory === cat.id && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 pt-0 grid gap-2">
                      {cat.methods.map((m) => (
                        <button
                          key={m.id}
                          onClick={() => setSelectedMethod(m.id)}
                          className={`flex items-center justify-between p-4 rounded-2xl transition-all ${
                            selectedMethod === m.id ? "bg-primary text-primary-foreground" : "bg-primary/5"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <m.icon className="w-5 h-5" />
                            <span className="font-bold">{m.name}</span>
                          </div>
                          {selectedMethod === m.id && <Check className="w-5 h-5" />}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
        <div className="mt-8 p-6 bg-card rounded-3xl border border-primary/20">
          <div className="flex justify-between mb-4">
            <span className="text-muted-foreground">Order: {searchParams.get("id")}</span>
            <span className="font-bold text-primary">{searchParams.get("ram")}</span>
          </div>
          <Button disabled={!selectedMethod} className="w-full h-12 rounded-2xl font-bold">
            Bayar Sekarang
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={null}>
      <CheckoutContent />
    </Suspense>
  )
}
