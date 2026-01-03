/**
 * Create By Chazi ` Mpx
 * Contact Me on wa.me/14314403688
 * Follow https://github.com/everlynnameyhst
 */
"use client"

import { Suspense, useState, useEffect } from "react"
import { Navbar } from "@/components/chazi-navbar"
import { Footer } from "@/components/chazi-footer"
import { CircularLogo } from "@/components/chazi-logo"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Server, Code, Smartphone, Tag, Globe, Ticket, Check } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useRouter } from "next/navigation"
import { CurrencyModal, currencies } from "@/components/currency-modal"
import { FAQ } from "@/components/chazi-faq"
import { WhatsAppBotCode } from "@/components/whatsapp-bot-code"

const products = [
  { id: "1", name: "Product 1", category: "minecraft", description: "Description of Product 1" },
  { id: "2", name: "Product 2", category: "samp", description: "Description of Product 2" },
  { id: "3", name: "Product 3", category: "bots", description: "Description of Product 3" },
  { id: "4", name: "Product 4", category: "scripts", description: "Description of Product 4" },
]

function ShopContent() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedPlan, setSelectedPlan] = useState<any>(null)
  const [showPromo, setShowPromo] = useState(true)
  const [showCurrencySelector, setShowCurrencySelector] = useState(false)
  const [coupon, setCoupon] = useState("")
  const [isCouponApplied, setIsCouponApplied] = useState(false)
  const [currency, setCurrency] = useState(currencies[0]) // Declare currency and setCurrency
  const [isValidating, setIsValidating] = useState(false)
  const [discount, setDiscount] = useState(0)

  const categories = [
    { id: "all", label: "All Items", icon: Tag },
    { id: "minecraft", label: "Minecraft", icon: Server },
    { id: "samp", label: "SAMP", icon: Server },
    { id: "bots", label: "Bots WA/TG/Discord", icon: Smartphone },
    { id: "scripts", label: "Source Code", icon: Code },
  ]

  const ramOptions = [
    { label: "1 GB", basePrice: 5000 },
    { label: "2 GB", basePrice: 10000 },
    { label: "3 GB", basePrice: 15000 },
    { label: "5 GB", basePrice: 22000 },
    { label: "6 GB", basePrice: 26000 },
    { label: "7 GB", basePrice: 30000 },
    { label: "8 GB", basePrice: 35000 },
    { label: "9 GB", basePrice: 40000 },
    { label: "10 GB", basePrice: 45000 },
  ]

  const handleOrder = (id: string, ram: string) => {
    router.push(
      `/shop/checkout?id=${id}&ram=${ram}&currency=${currency.code}${isCouponApplied ? `&coupon=${coupon}` : ""}`,
    )
  }

  const handleCurrencySelect = (c: (typeof currencies)[0]) => {
    setCurrency(c)
    localStorage.setItem("preferred-currency", c.code)
  }

  const handleApplyCoupon = async () => {
    if (!coupon) return
    setIsValidating(true)
    try {
      const res = await fetch("/api/coupons/validate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: coupon }),
      })
      const data = await res.json()
      if (data.valid) {
        setIsCouponApplied(true)
        setDiscount(data.discount)
      } else {
        alert(data.message)
      }
    } catch (error) {
      alert("Terjadi kesalahan saat validasi kupon")
    } finally {
      setIsValidating(false)
    }
  }

  const formatPrice = (basePrice: number) => {
    const rate = currencies.find((c) => c.code === currency.code)?.rate || 1
    let finalPrice = basePrice * rate
    if (isCouponApplied) {
      finalPrice = finalPrice * (1 - discount / 100)
    }
    return `${currency.symbol}${finalPrice.toLocaleString(currency.code === "IDR" ? "id-ID" : "en-US", {
      minimumFractionDigits: currency.code === "IDR" ? 0 : 2,
      maximumFractionDigits: currency.code === "IDR" ? 0 : 2,
    })}`
  }

  useEffect(() => {
    const savedCurrency = localStorage.getItem("preferred-currency")
    if (savedCurrency) {
      const found = currencies.find((c) => c.code === savedCurrency)
      if (found) setCurrency(found)
    } else {
      setShowCurrencySelector(true)
    }
  }, [])

  return (
    <div className="relative min-h-screen bg-background">
      <Navbar />

      {/* Using shared CurrencyModal */}
      <CurrencyModal
        isOpen={showCurrencySelector}
        onClose={() => setShowCurrencySelector(false)}
        onSelectCurrency={handleCurrencySelect}
        selectedCurrency={currency}
      />

      <AnimatePresence>
        {showPromo && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowPromo(false)}
              className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-md bg-card border border-primary/20 rounded-[2.5rem] p-8 shadow-2xl"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full overflow-hidden mb-6">
                  <img src="https://files.catbox.moe/sm40kh.png" alt="Chazi" className="w-full h-full object-cover" />
                </div>
                <h2 className="text-2xl font-bold mb-2 text-gradient">Chazi ` Mpx Shop</h2>
                <p className="text-muted-foreground mb-6">Dapatkan harga termurah untuk semua layanan hari ini!</p>
                <Button onClick={() => setShowPromo(false)} className="w-full rounded-2xl h-12">
                  Ambil Promo
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <main className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <CircularLogo size={120} className="mb-6" />
          <h1 className="text-4xl font-bold mb-4 text-gradient">Chazi ` Mpx Shop</h1>

          <div className="flex items-center gap-2 mb-8 px-4 py-2 bg-primary/5 rounded-full border border-primary/10">
            <Globe className="w-4 h-4 text-primary" />
            <span className="text-xs font-medium text-muted-foreground">Mata Uang: </span>
            <span className="text-xs font-bold text-primary">{currency.label}</span>
            <button
              onClick={() => setShowCurrencySelector(true)}
              className="text-[10px] underline ml-2 hover:text-primary transition-colors"
            >
              Ubah
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                variant={selectedCategory === cat.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(cat.id)}
                className="rounded-xl gap-2"
              >
                {cat.icon && <cat.icon className="w-4 h-4" />}
                {cat.label}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {products
              .filter((p) => selectedCategory === "all" || p.category === selectedCategory)
              .map((p) => (
                <motion.div
                  key={p.id}
                  layout
                  className="bg-card flex flex-col rounded-3xl border border-border/40 overflow-hidden hover:border-primary/40 transition-all"
                >
                  <div className="p-6 border-b border-border/40 bg-primary/5">
                    <h3 className="text-xl font-bold mb-1">{p.name}</h3>
                    <p className="text-xs text-muted-foreground">{p.description}</p>
                  </div>

                  <div className="p-4 flex-1">
                    <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-3 px-2">
                      Pilih Paket RAM
                    </div>
                    <div className="grid gap-2 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                      {ramOptions.map((opt, i) => (
                        <button
                          key={i}
                          onClick={() => handleOrder(p.id, opt.label)}
                          className="flex items-center justify-between p-3 rounded-xl bg-primary/5 hover:bg-primary/20 border border-transparent hover:border-primary/20 transition-all text-left group"
                        >
                          <span className="font-bold text-sm">{opt.label}</span>
                          <span className="text-primary font-bold text-sm group-hover:scale-105 transition-transform">
                            {formatPrice(opt.basePrice)}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 bg-muted/30 border-t border-border/40">
                    <div className="relative flex items-center">
                      <Ticket className="absolute left-3 w-4 h-4 text-muted-foreground" />
                      <Input
                        placeholder="Masukan Kupon"
                        className="pl-10 pr-20 h-10 rounded-xl bg-background text-xs border-primary/10 focus:border-primary/40"
                        value={coupon}
                        onChange={(e) => setCoupon(e.target.value)}
                      />
                      <button
                        onClick={handleApplyCoupon}
                        className="absolute right-2 px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded-lg hover:bg-primary hover:text-white transition-all"
                      >
                        {isValidating ? "Validasi..." : isCouponApplied ? <Check className="w-3 h-3" /> : "Terapkan"}
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>

          <div className="mt-20">
            <WhatsAppBotCode />
          </div>
        </div>
      </main>

      <FAQ />

      <Footer />
    </div>
  )
}

export default function ShopPage() {
  return (
    <Suspense fallback={null}>
      <ShopContent />
    </Suspense>
  )
}
