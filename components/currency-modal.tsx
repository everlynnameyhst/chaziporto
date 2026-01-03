/**
 * Create By Chazi ` Mpx.
 * Contact Me on wa.me/14314403688
 * Follow https://github.com/everlynnameyhst
 */
 
"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

export const currencies = [
  { code: "IDR", symbol: "Rp", rate: 1, label: "Indonesia", flag: "🇮🇩" },
  { code: "USD", symbol: "$", rate: 0.000064, label: "United States", flag: "🇺🇸" },
  { code: "MYR", symbol: "RM", rate: 0.00028, label: "Malaysia", flag: "🇲🇾" },
  { code: "SGD", symbol: "S$", rate: 0.000085, label: "Singapore", flag: "🇸🇬" },
  { code: "EUR", symbol: "€", rate: 0.000059, label: "Europe", flag: "🇪🇺" },
  { code: "GBP", symbol: "£", rate: 0.00005, label: "United Kingdom", flag: "🇬🇧" },
  { code: "JPY", symbol: "¥", rate: 0.0094, label: "Japan", flag: "🇯🇵" },
]

interface CurrencyModalProps {
  isOpen: boolean
  onClose: () => void
  selectedCurrency: (typeof currencies)[0]
  onSelectCurrency: (currency: (typeof currencies)[0]) => void
}

export function CurrencyModal({ isOpen, onClose, selectedCurrency, onSelectCurrency }: CurrencyModalProps) {
  const handleCurrencySelect = (currency: (typeof currencies)[0]) => {
    onSelectCurrency(currency)
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-background/90 backdrop-blur-md"
            onClick={onClose}
          />
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-2xl bg-card border border-primary/20 rounded-[2.5rem] p-8 shadow-2xl"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Pilih Negara & Mata Uang</h2>
              <p className="text-muted-foreground mb-8 text-sm">
                Sesuaikan harga produk berdasarkan mata uang negara Anda.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8 max-h-[40vh] overflow-y-auto pr-2 custom-scrollbar">
                {currencies.map((c) => (
                  <button
                    key={c.code}
                    onClick={() => handleCurrencySelect(c)}
                    className={`flex flex-col items-center gap-2 p-4 rounded-2xl border transition-all ${
                      selectedCurrency.code === c.code
                        ? "bg-primary/10 border-primary text-primary"
                        : "bg-primary/5 border-transparent text-muted-foreground hover:border-primary/20"
                    }`}
                  >
                    <span className="text-3xl">{c.flag}</span>
                    <div className="flex flex-col">
                      <span className="font-bold text-xs">{c.label}</span>
                      <span className="text-[10px] opacity-60">
                        {c.code} ({c.symbol})
                      </span>
                    </div>
                  </button>
                ))}
              </div>

              <Button onClick={onClose} className="w-full rounded-2xl h-12 font-bold">
                Lanjutkan ke Toko
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
