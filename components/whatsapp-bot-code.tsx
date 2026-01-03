"use client"

import { useState } from "react"
import { Check, Copy, Terminal, Circle } from "lucide-react"

export function WhatsAppBotCode() {
  const [type, setType] = useState<'esm' | 'cjs' | 'case'>('esm')
  const [copied, setCopied] = useState(false)

  const codes = {
    esm: `import { addCoupon } from './lib/db.js'\n\nexport default {\n  name: 'addcoupon',\n  category: 'admin',\n  desc: 'Menambahkan kupon diskon baru',\n  async exec({ sock, m, args }) {\n    if (!args[0] || !args[1]) return chazireply('Format: .addcoupon inputkode inputpersen')\n    const code = args[0].toUpperCase()\n    const discount = parseInt(args[1])\n    await addCoupon(code, discount)\n    chazireply(\`Kupon \${code} berhasil ditambahkan dengan diskon \${discount}%\`)\n  }\n}`,
    cjs: `const { addCoupon } = require('./lib/db')\n\nmodule.exports = {\n  name: 'addcoupon',\n  category: 'admin',\n  desc: 'Menambahkan kupon diskon baru',\n  async exec({ sock, m, args }) {\n    if (!args[0] || !args[1]) return chazireply('Format: .addcoupon inputkode inputpersen')\n    const code = args[0].toUpperCase()\n    const discount = parseInt(args[1])\n    await addCoupon(code, discount)\n    chazireply(\`Kupon \${code} berhasil ditambahkan dengan diskon \${discount}%\`)\n  }\n}`,
    case: `case 'addcoupon': {\n  if (!isOwner) return chazireply('Fitur ini khusus Owner!')\n  if (!q.includes('|')) return chazireply('Format: .addcoupon KODE|DISKON')\n  let [code, discount] = q.split('|')\n  await db.collection('coupons').insertOne({\n    code: code.toUpperCase(),\n    discount: parseInt(discount),\n    active: true,\n    expiryDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)\n  })\n  chazireply(\`Kupon \${code} berhasil dibuat!\`)\n}\nbreak`
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(codes[type])
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="w-full max-w-full px-2 py-4">
      <div className="mx-auto max-w-[100%] sm:max-w-2xl bg-black rounded-xl overflow-hidden border border-white/20 shadow-2xl">
        
        <div className="bg-[#111] p-3 border-b border-white/10 flex flex-col sm:flex-row gap-3 justify-between items-center">
          <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-start">
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
                  className={`px-3 py-1 rounded text-[10px] font-bold uppercase transition-all ${
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
            className={`w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-1.5 rounded-lg border transition-all active:scale-95 ${
              copied ? "bg-green-600 border-green-400 text-white" : "bg-white/5 border-white/10 text-white"
            }`}
          >
            {copied ? <Check className="w-4 h-4 animate-bounce" /> : <Copy className="w-4 h-4" />}
            <span className="text-[11px] font-bold uppercase">{copied ? "Copied" : "Copy"}</span>
          </button>
        </div>

        <div className="w-full overflow-x-auto bg-black scrollbar-hide">
          <div className="p-4 sm:p-6 min-w-full">
            <pre className="font-mono text-[12px] leading-relaxed whitespace-pre">
              {type === 'esm' && (
                <code className="text-gray-300 text-xs sm:text-sm">
                  <span className="text-pink-500">import</span> {"{ "} <span className="text-blue-400">addCoupon</span> {"} "} <span className="text-pink-500">from</span> <span className="text-emerald-400">'./lib/db.js'</span>{"\n\n"}
                  <span className="text-pink-500">export default</span> {"{"}{"\n"}
                  {"  "}name: <span className="text-emerald-400">'addcoupon'</span>,{"\n"}
                  {"  "}category: <span className="text-emerald-400">'admin'</span>,{"\n"}
                  {"  "}desc: <span className="text-emerald-400">'Kupon baru'</span>,{"\n"}
                  {"  "}<span className="text-pink-500">async</span> <span className="text-blue-400">exec</span>({"{ sock, m, args }"}) {"{"}{"\n"}
                  {"    "}<span className="text-pink-500">const</span> code = args[<span className="text-orange-400">0</span>].<span className="text-blue-400">toUpperCase</span>(){"\n"}
                  {"    "}<span className="text-pink-500">const</span> discount = <span className="text-blue-400">parseInt</span>(args[<span className="text-orange-400">1</span>]){"\n"}
                  {"    "}<span className="text-pink-500">await</span> <span className="text-blue-400">addCoupon</span>(code, discount){"\n"}
                  {"    "}<span className="text-blue-400">chazireply</span>(<span className="text-emerald-400">`Kupon </span><span className="text-orange-400">{"${code}"}</span><span className="text-emerald-400"> \${discount}%`</span>){"\n"}
                  {"  "}{"}"}{"\n"}
                  {"}"}
                </code>
              )}
              {type === 'cjs' && (
                <code className="text-gray-300 text-xs sm:text-sm">
                  <span className="text-pink-500">const</span> {"{ "} <span className="text-blue-400">addCoupon</span> {"} = "} <span className="text-blue-400">require</span>(<span className="text-emerald-400">'./lib/db'</span>){"\n\n"}
                  <span className="text-blue-400">module.exports</span> = {"{"}{"\n"}
                  {"  "}name: <span className="text-emerald-400">'addcoupon'</span>,{"\n"}
                  {"  "}<span className="text-pink-500">async</span> <span className="text-blue-400">exec</span>({"{ sock, m, args }"}) {"{"}{"\n"}
                  {"    "}<span className="text-pink-500">const</span> code = args[<span className="text-orange-400">0</span>].<span className="text-blue-400">toUpperCase</span>(){"\n"}
                  {"    "}<span className="text-pink-500">await</span> <span className="text-blue-400">addCoupon</span>(code, discount){"\n"}
                  {"    "}<span className="text-blue-400">chazireply</span>(<span className="text-emerald-400">`Sukses!`</span>){"\n"}
                  {"  "}{"}"}{"\n"}
                  {"}"}
                </code>
              )}
              {type === 'case' && (
                <code className="text-gray-300 text-xs sm:text-sm">
                  <span className="text-pink-500">case</span> <span className="text-emerald-400">'addcoupon'</span>: {"{"}{"\n"}
                  {"  "}<span className="text-pink-500">let</span> [code, disc] = q.<span className="text-blue-400">split</span>(<span className="text-emerald-400">'|'</span>){"\n"}
                  {"  "}<span className="text-pink-500">await</span> db.<span className="text-blue-400">collection</span>(<span className="text-emerald-400">'coupons'</span>).<span className="text-blue-400">insertOne</span>({"{"}{"\n"}
                  {"    "}code: code.<span className="text-blue-400">toUpperCase</span>(),{"\n"}
                  {"    "}discount: <span className="text-blue-400">parseInt</span>(disc),{"\n"}
                  {"    "}active: <span className="text-orange-400">true</span>{"\n"}
                  {"  "}{"}"}){"\n"}
                  {"  "}<span className="text-blue-400">chazireply</span>(<span className="text-emerald-400">`Kupon \${code} aktif`</span>){"\n"}
                  {"}"}{"\n"}
                  <span className="text-pink-500">break</span>
                </code>
              )}
            </pre>
          </div>
        </div>

        <div className="bg-[#111] px-4 py-2 border-t border-white/10 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Terminal className="w-3 h-3 text-gray-600" />
            <span className="text-[10px] text-gray-600 font-mono italic">Terminal v2.0</span>
          </div>
        </div>
      </div>
    </div>
  )
}
