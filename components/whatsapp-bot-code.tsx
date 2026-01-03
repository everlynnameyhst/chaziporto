"use client"

import { useState } from "react"
import { Check, Copy, Terminal, Circle } from "lucide-react"

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
    <div className="w-full max-w-3xl mx-auto p-2 sm:p-6">
      <div className="bg-black rounded-xl overflow-hidden border border-white/20 shadow-2xl flex flex-col">
        
        {/* Terminal Header - Responsive Stack */}
        <div className="bg-[#111111] px-4 py-3 border-b border-white/10">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-4">
              <div className="flex gap-1.5">
                <Circle className="w-3 h-3 fill-red-500 text-transparent" />
                <Circle className="w-3 h-3 fill-yellow-500 text-transparent" />
                <Circle className="w-3 h-3 fill-green-500 text-transparent" />
              </div>
              <div className="flex bg-white/5 p-1 rounded-md border border-white/10">
                {(['esm', 'cjs', 'case'] as const).map((t) => (
                  <button
                    key={t}
                    onClick={() => setType(t)}
                    className={`px-2 py-0.5 rounded text-[9px] font-bold uppercase transition-all ${
                      type === t ? "bg-white text-black" : "text-gray-500 hover:text-gray-300"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={handleCopy}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all duration-300 active:scale-90 border ${
                copied ? "bg-green-600/20 border-green-500 text-green-400" : "bg-white/5 border-white/10 text-white hover:bg-white/10"
              }`}
            >
              {copied ? <Check className="w-3.5 h-3.5 animate-bounce" /> : <Copy className="w-3.5 h-3.5" />}
              <span className="text-[10px] font-bold uppercase leading-none">{copied ? "Copied" : "Copy"}</span>
            </button>
          </div>
        </div>

        {/* Code Content - Swipeable on Mobile */}
        <div className="relative flex-1 overflow-hidden">
          <div className="overflow-x-auto scrollbar-hide">
            <div className="p-4 sm:p-6 min-w-max">
              <pre className="font-mono text-xs sm:text-sm leading-6 sm:leading-7 tracking-tight">
                {type === 'esm' && (
                  <code className="text-gray-300">
                    <span className="text-pink-500">import</span> {"{ "} <span className="text-blue-400">addCoupon</span> {"} "} <span className="text-pink-500">from</span> <span className="text-emerald-400">'./lib/db.js'</span>{"\n\n"}
                    <span className="text-pink-500">export default</span> {"{"}{"\n"}
                    {"  "}name: <span className="text-emerald-400">'addcoupon'</span>,{"\n"}
                    {"  "}category: <span className="text-emerald-400">'admin'</span>,{"\n"}
                    {"  "}desc: <span className="text-emerald-400">'Menambahkan kupon diskon baru'</span>,{"\n"}
                    {"  "}<span className="text-pink-500">async</span> <span className="text-blue-400">exec</span>({"{ sock, m, args }"}) {"{"}{"\n"}
                    {"    "}<span className="text-pink-500">if</span> (!args[<span className="text-orange-400">0</span>] || !args[<span className="text-orange-400">1</span>]) <span className="text-pink-500">return</span> <span className="text-blue-400">chazireply</span>(<span className="text-emerald-400">'Format: .addcoupon inputkode inputpersen'</span>){"\n"}
                    {"    "}<span className="text-pink-500">const</span> code = args[<span className="text-orange-400">0</span>].<span className="text-blue-400">toUpperCase</span>(){"\n"}
                    {"    "}<span className="text-pink-500">const</span> discount = <span className="text-blue-400">parseInt</span>(args[<span className="text-orange-400">1</span>]){"\n"}
                    {"    "}<span className="text-pink-500">await</span> <span className="text-blue-400">addCoupon</span>(code, discount){"\n"}
                    {"    "}<span className="text-blue-400">chazireply</span>(<span className="text-emerald-400">`Kupon </span><span className="text-orange-400">{"\${code}"}</span><span className="text-emerald-400"> berhasil ditambahkan dengan diskon </span><span className="text-orange-400">{"\${discount}"}</span><span className="text-emerald-400">%`</span>){"\n"}
                    {"  "}{"}"}{"\n"}
                    {"}"}
                  </code>
                )}
                {type === 'cjs' && (
                  <code className="text-gray-300">
                    <span className="text-pink-500">const</span> {"{ "} <span className="text-blue-400">addCoupon</span> {"} = "} <span className="text-blue-400">require</span>(<span className="text-emerald-400">'./lib/db'</span>){"\n\n"}
                    <span className="text-blue-400">module.exports</span> = {"{"}{"\n"}
                    {"  "}name: <span className="text-emerald-400">'addcoupon'</span>,{"\n"}
                    {"  "}category: <span className="text-emerald-400">'admin'</span>,{"\n"}
                    {"  "}desc: <span className="text-emerald-400">'Menambahkan kupon diskon baru'</span>,{"\n"}
                    {"  "}<span className="text-pink-500">async</span> <span className="text-blue-400">exec</span>({"{ sock, m, args }"}) {"{"}{"\n"}
                    {"    "}<span className="text-pink-500">if</span> (!args[<span className="text-orange-400">0</span>] || !args[<span className="text-orange-400">1</span>]) <span className="text-pink-500">return</span> <span className="text-blue-400">chazireply</span>(<span className="text-emerald-400">'Format: .addcoupon inputkode inputpersen'</span>){"\n"}
                    {"    "}<span className="text-pink-500">const</span> code = args[<span className="text-orange-400">0</span>].<span className="text-blue-400">toUpperCase</span>(){"\n"}
                    {"    "}<span className="text-pink-500">const</span> discount = <span className="text-blue-400">parseInt</span>(args[<span className="text-orange-400">1</span>]){"\n"}
                    {"    "}<span className="text-pink-500">await</span> <span className="text-blue-400">addCoupon</span>(code, discount){"\n"}
                    {"    "}<span className="text-blue-400">chazireply</span>(<span className="text-emerald-400">`Kupon </span><span className="text-orange-400">{"\${code}"}</span><span className="text-emerald-400"> berhasil ditambahkan dengan diskon </span><span className="text-orange-400">{"\${discount}"}</span><span className="text-emerald-400">%`</span>){"\n"}
                    {"  "}{"}"}{"\n"}
                    {"}"}
                  </code>
                )}
                {type === 'case' && (
                  <code className="text-gray-300">
                    <span className="text-pink-500">case</span> <span className="text-emerald-400">'addcoupon'</span>: {"{"}{"\n"}
                    {"  "}<span className="text-pink-500">if</span> (!isOwner) <span className="text-pink-500">return</span> <span className="text-blue-400">chazireply</span>(<span className="text-emerald-400">'Fitur ini khusus Owner!'</span>){"\n"}
                    {"  "}<span className="text-pink-500">if</span> (!q.<span className="text-blue-400">includes</span>(<span className="text-emerald-400">'|'</span>)) <span className="text-pink-500">return</span> <span className="text-blue-400">chazireply</span>(<span className="text-emerald-400">'Format: .addcoupon KODE|DISKON'</span>){"\n"}
                    {"  "}<span className="text-pink-500">let</span> [code, discount] = q.<span className="text-blue-400">split</span>(<span className="text-emerald-400">'|'</span>){"\n"}
                    {"  "}<span className="text-pink-500">await</span> db.<span className="text-blue-400">collection</span>(<span className="text-emerald-400">'coupons'</span>).<span className="text-blue-400">insertOne</span>({"{"}{"\n"}
                    {"    "}code: code.<span className="text-blue-400">toUpperCase</span>(),{"\n"}
                    {"    "}discount: <span className="text-blue-400">parseInt</span>(discount),{"\n"}
                    {"    "}active: <span className="text-orange-400">true</span>,{"\n"}
                    {"    "}expiryDate: <span className="text-pink-500">new</span> <span className="text-blue-400">Date</span>(<span className="text-blue-400">Date</span>.<span className="text-blue-400">now</span>() + <span className="text-orange-400">30</span> * <span className="text-orange-400">24</span> * <span className="text-orange-400">60</span> * <span className="text-orange-400">60</span> * <span className="text-orange-400">1000</span>){"\n"}
                    {"  "}{"}"}){"\n"}
                    {"  "}<span className="text-blue-400">chazireply</span>(<span className="text-emerald-400">`Kupon </span><span className="text-orange-400">{"\${code}"}</span><span className="text-emerald-400"> berhasil dibuat!`</span>){"\n"}
                    {"}"}{"\n"}
                    <span className="text-pink-500">break</span>
                  </code>
                )}
              </pre>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#0a0a0a] px-4 py-2 flex items-center justify-between border-t border-white/10">
          <div className="flex items-center gap-2">
            <Terminal className="w-3 h-3 text-gray-500" />
            <span className="text-[10px] text-gray-500 font-mono">chazi-mpx.js</span>
          </div>
          <span className="text-[9px] text-gray-600 font-bold uppercase tracking-widest">
            Ready to deploy
          </span>
        </div>
      </div>
    </div>
  )
}
