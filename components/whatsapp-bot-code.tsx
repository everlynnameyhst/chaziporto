/**
 * Create By Chazi ` Mpx.
 * Contact Me on wa.me/14314403688
 * Follow https://github.com/everlynnameyhst
 */
"use client"

import { useState } from "react"
import { Check, Copy, Terminal, Circle, ChevronRight } from "lucide-react"

export function WhatsAppBotCode() {
  const [type, setType] = useState<'esm' | 'cjs' | 'case'>('esm')
  const [copied, setCopied] = useState(false)

  const codes = {
    esm: `import { addCoupon } from './lib/db.js'

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
    cjs: `const { addCoupon } = require('./lib/db')

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
    case: `case 'addcoupon': {
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
break`
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(codes[type])
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-4 md:p-8">
      <div className="bg-[#0d0d0d] rounded-2xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        
        <div className="bg-[#1a1a1a] px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-white/5">
          <div className="flex items-center gap-6">
            <div className="hidden sm:flex gap-1.5">
              <Circle className="w-3 h-3 fill-[#ff5f56] text-transparent" />
              <Circle className="w-3 h-3 fill-[#ffbd2e] text-transparent" />
              <Circle className="w-3 h-3 fill-[#27c93f] text-transparent" />
            </div>
            <div className="flex bg-black/40 p-1 rounded-lg border border-white/5">
              {(['esm', 'cjs', 'case'] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setType(t)}
                  className={`px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider transition-all ${
                    type === t ? "bg-blue-600 text-white shadow-lg" : "text-gray-500 hover:text-gray-300"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handleCopy}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 active:scale-90 ${
              copied ? "bg-green-500 text-white" : "bg-white/10 hover:bg-white/20 text-white"
            }`}
          >
            {copied ? (
              <Check className="w-4 h-4 animate-bounce" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
            <span className="text-xs font-bold uppercase">{copied ? "Copied!" : "Copy Code"}</span>
          </button>
        </div>

        <div className="relative group">
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-black/20 border-r border-white/5 flex flex-col items-center pt-6 text-[10px] text-gray-600 font-mono select-none">
            {Array.from({ length: 15 }).map((_, i) => (
              <span key={i} className="leading-[22.4px]">{i + 1}</span>
            ))}
          </div>
          
          <div className="pl-16 p-6 overflow-x-auto">
            <pre className="font-mono text-[13px] leading-relaxed whitespace-pre">
              {type === 'esm' && (
                <code className="text-gray-300">
                  <span className="text-pink-500">import</span> {"{ "} <span className="text-blue-400">addCoupon</span> {"} "} <span className="text-pink-500">from</span> <span className="text-yellow-200">'./lib/db.js'</span>{"\n\n"}
                  <span className="text-pink-500">export default</span> {"{"}{"\n"}
                  {"  "}name: <span className="text-yellow-200">'addcoupon'</span>,{"\n"}
                  {"  "}category: <span className="text-yellow-200">'admin'</span>,{"\n"}
                  {"  "}desc: <span className="text-yellow-200">'Menambahkan kupon diskon baru'</span>,{"\n"}
                  {"  "}<span className="text-pink-500">async</span> <span className="text-blue-400">exec</span>({"{ sock, m, args }"}) {"{"}{"\n"}
                  {"    "}<span className="text-pink-500">if</span> (!args[<span className="text-orange-400">0</span>] || !args[<span className="text-orange-400">1</span>]) <span className="text-pink-500">return</span> <span className="text-blue-400">chazireply</span>(<span className="text-yellow-200">'Format: .addcoupon inputkode inputpersen'</span>){"\n"}
                  {"    "}<span className="text-pink-500">const</span> code = args[<span className="text-orange-400">0</span>].<span className="text-blue-400">toUpperCase</span>(){"\n"}
                  {"    "}<span className="text-pink-500">const</span> discount = <span className="text-blue-400">parseInt</span>(args[<span className="text-orange-400">1</span>]){"\n"}
                  {"    "}<span className="text-pink-500">await</span> <span className="text-blue-400">addCoupon</span>(code, discount){"\n"}
                  {"    "}<span className="text-blue-400">chazireply</span>(<span className="text-yellow-200">`Kupon </span><span className="text-orange-400">{"\${code}"}</span><span className="text-yellow-200"> berhasil ditambahkan dengan diskon </span><span className="text-orange-400">{"\${discount}"}</span><span className="text-yellow-200">%`</span>){"\n"}
                  {"  "}{"}"}{"\n"}
                  {"}"}
                </code>
              )}
              {type === 'cjs' && (
                <code className="text-gray-300">
                  <span className="text-pink-500">const</span> {"{ "} <span className="text-blue-400">addCoupon</span> {"} = "} <span className="text-blue-400">require</span>(<span className="text-yellow-200">'./lib/db'</span>){"\n\n"}
                  <span className="text-blue-400">module.exports</span> = {"{"}{"\n"}
                  {"  "}name: <span className="text-yellow-200">'addcoupon'</span>,{"\n"}
                  {"  "}category: <span className="text-yellow-200">'admin'</span>,{"\n"}
                  {"  "}desc: <span className="text-yellow-200">'Menambahkan kupon diskon baru'</span>,{"\n"}
                  {"  "}<span className="text-pink-500">async</span> <span className="text-blue-400">exec</span>({"{ sock, m, args }"}) {"{"}{"\n"}
                  {"    "}<span className="text-pink-500">if</span> (!args[<span className="text-orange-400">0</span>] || !args[<span className="text-orange-400">1</span>]) <span className="text-pink-500">return</span> <span className="text-blue-400">chazireply</span>(<span className="text-yellow-200">'Format: .addcoupon inputkode inputpersen'</span>){"\n"}
                  {"    "}<span className="text-pink-500">const</span> code = args[<span className="text-orange-400">0</span>].<span className="text-blue-400">toUpperCase</span>(){"\n"}
                  {"    "}<span className="text-pink-500">const</span> discount = <span className="text-blue-400">parseInt</span>(args[<span className="text-orange-400">1</span>]){"\n"}
                  {"    "}<span className="text-pink-500">await</span> <span className="text-blue-400">addCoupon</span>(code, discount){"\n"}
                  {"    "}<span className="text-blue-400">chazireply</span>(<span className="text-yellow-200">`Kupon </span><span className="text-orange-400">{"\${code}"}</span><span className="text-yellow-200"> berhasil ditambahkan dengan diskon </span><span className="text-orange-400">{"\${discount}"}</span><span className="text-yellow-200">%`</span>){"\n"}
                  {"  "}{"}"}{"\n"}
                  {"}"}
                </code>
              )}
              {type === 'case' && (
                <code className="text-gray-300">
                  <span className="text-pink-500">case</span> <span className="text-yellow-200">'addcoupon'</span>: {"{"}{"\n"}
                  {"  "}<span className="text-pink-500">if</span> (!isOwner) <span className="text-pink-500">return</span> <span className="text-blue-400">chazireply</span>(<span className="text-yellow-200">'Fitur ini khusus Owner!'</span>){"\n"}
                  {"  "}<span className="text-pink-500">if</span> (!q.<span className="text-blue-400">includes</span>(<span className="text-yellow-200">'|'</span>)) <span className="text-pink-500">return</span> <span className="text-blue-400">chazireply</span>(<span className="text-yellow-200">'Format: .addcoupon KODE|DISKON'</span>){"\n"}
                  {"  "}<span className="text-pink-500">let</span> [code, discount] = q.<span className="text-blue-400">split</span>(<span className="text-yellow-200">'|'</span>){"\n"}
                  {"  "}<span className="text-pink-500">await</span> db.<span className="text-blue-400">collection</span>(<span className="text-yellow-200">'coupons'</span>).<span className="text-blue-400">insertOne</span>({"{"}{"\n"}
                  {"    "}code: code.<span className="text-blue-400">toUpperCase</span>(),{"\n"}
                  {"    "}discount: <span className="text-blue-400">parseInt</span>(discount),{"\n"}
                  {"    "}active: <span className="text-orange-400">true</span>,{"\n"}
                  {"    "}expiryDate: <span className="text-pink-500">new</span> <span className="text-blue-400">Date</span>(<span className="text-blue-400">Date</span>.<span className="text-blue-400">now</span>() + <span className="text-orange-400">30</span> * <span className="text-orange-400">24</span> * <span className="text-orange-400">60</span> * <span className="text-orange-400">60</span> * <span className="text-orange-400">1000</span>){"\n"}
                  {"  "}{"}"}){"\n"}
                  {"  "}<span className="text-blue-400">chazireply</span>(<span className="text-yellow-200">`Kupon </span><span className="text-orange-400">{"\${code}"}</span><span className="text-yellow-200"> berhasil dibuat!`</span>){"\n"}
                  {"}"}{"\n"}
                  <span className="text-pink-500">break</span>
                </code>
              )}
            </pre>
          </div>
        </div>

        <div className="bg-[#1a1a1a] px-6 py-3 flex items-center justify-between border-t border-white/5">
          <div className="flex items-center gap-4 text-[11px] font-mono text-gray-500">
            <span className="flex items-center gap-1"><ChevronRight className="w-3 h-3"/> UTF-8</span>
            <span className="flex items-center gap-1"><ChevronRight className="w-3 h-3"/> JavaScript</span>
          </div>
          <div className="text-[10px] text-gray-600 font-bold tracking-widest uppercase">
            Chazi Mpx Terminal v1.0
          </div>
        </div>

      </div>
    </div>
  )
}
