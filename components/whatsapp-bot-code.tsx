/**
 * Create By Chazi ` Mpx.
 * Contact Me on wa.me/14314403688
 * Follow https://github.com/everlynnameyhst
 */
 
"use client"

import { useState } from "react"
import { Check, Copy, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function WhatsAppBotCode() {
  const [copied, setCopied] = useState(false)

  const codes = {
    esm: `
import { addCoupon } from './lib/db.js'

export default {
  name: 'addcoupon',
  category: 'admin',
  desc: 'Menambahkan kupon diskon baru',
  async exec({ sock, m, args }) {
    if (!args[0] || !args[1]) return chazireply('Format: .addcoupon inputkode inputpersen')
    const code = args[0].toUpperCase()
    const discount = parseInt(args[1])
    await addCoupon(code, discount)
    chazireply(\`Kupon \${code} berhasil ditambahkan dengan diskon \${discount}%\`)
  }
}`,
    cjs: `
const { addCoupon } = require('./lib/db')

module.exports = {
  name: 'addcoupon',
  category: 'admin',
  desc: 'Menambahkan kupon diskon baru',
  async exec({ sock, m, args }) {
    if (!args[0] || !args[1]) return chazireply('Format: .addcoupon inputkode inputpersen')
    const code = args[0].toUpperCase()
    const discount = parseInt(args[1])
    await addCoupon(code, discount)
    chazireply(\`Kupon \${code} berhasil ditambahkan dengan diskon \${discount}%\`)
  }
}`,
    case: `
case 'addcoupon': {
  if (!isOwner) return chazireply('Fitur ini khusus Owner!')
  if (!q.includes('|')) return chazireply('Format: .addcoupon KODE|DISKON')
  let [code, discount] = q.split('|')
  await db.collection('coupons').insertOne({
    code: code.toUpperCase(),
    discount: parseInt(discount),
    active: true,
    expiryDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
  })
  chazireply(\`Kupon \${code} berhasil dibuat!\`)
}
break`,
  }

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="w-full max-w-4xl mx-auto mt-16 p-8 bg-card border border-primary/10 rounded-[2.5rem] overflow-hidden">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-primary/10 rounded-2xl">
          <MessageSquare className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h2 className="text-2xl font-bold">WhatsApp Bot Integration</h2>
          <p className="text-sm text-muted-foreground">Copy kode plugin untuk menambahkan fitur kupon ke bot Anda.</p>
        </div>
      </div>

      <Tabs defaultValue="esm" className="w-full">
        <TabsList className="grid grid-cols-3 mb-6 bg-primary/5 rounded-xl p-1">
          <TabsTrigger value="esm" className="rounded-lg">
            Plugin ESM
          </TabsTrigger>
          <TabsTrigger value="cjs" className="rounded-lg">
            Plugin CJS
          </TabsTrigger>
          <TabsTrigger value="case" className="rounded-lg">
            Case/Break
          </TabsTrigger>
        </TabsList>

        {Object.entries(codes).map(([key, code]) => (
          <TabsContent key={key} value={key} className="relative mt-0">
            <div className="absolute right-4 top-4 z-10">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleCopy(code)}
                className="h-8 gap-2 bg-background/50 backdrop-blur-md border-primary/20"
              >
                {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                {copied ? "Copied" : "Copy Code"}
              </Button>
            </div>
            <pre className="p-6 rounded-2xl bg-black/90 text-primary-foreground font-mono text-xs overflow-x-auto border border-white/10">
              <code>{code}</code>
            </pre>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
