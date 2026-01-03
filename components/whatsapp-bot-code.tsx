"use client"

import { useState } from "react"
import { Check, Copy, Terminal, Circle } from "lucide-react"

export function WhatsAppBotCode() {
  const [type, setType] = useState<'esm' | 'cjs' | 'case'>('esm')
  const [copied, setCopied] = useState(false)

  const codes = {
    esm: `import { addCoupon } from './lib/db.js'\n\nexport default {\n  name: 'addcoupon',\n  category: 'admin',\n  desc: 'Tambah kupon',\n  async exec({ sock, m, args }) {\n    if (!args[0] || !args[1]) return chazireply('Format: .addcoupon KODE PERSEN')\n    const code = args[0].toUpperCase()\n    const discount = parseInt(args[1])\n    await addCoupon(code, discount)\n    chazireply(\`Kupon \${code} diskon \${discount}% berhasil!\`)\n  }\n}`,
    cjs: `const { addCoupon } = require('./lib/db')\n\nmodule.exports = {\n  name: 'addcoupon',\n  category: 'admin',\n  desc: 'Tambah kupon',\n  async exec({ sock, m, args }) {\n    if (!args[0] || !args[1]) return chazireply('Format: .addcoupon KODE PERSEN')\n    const code = args[0].toUpperCase()\n    const discount = parseInt(args[1])\n    await addCoupon(code, discount)\n    chazireply(\`Kupon \${code} diskon \${discount}% berhasil!\`)\n  }\n}`,
    case: `case 'addcoupon': {\n  if (!isOwner) return chazireply('Owner Only!')\n  if (!q.includes('|')) return chazireply('Format: KODE|DISKON')\n  let [code, discount] = q.split('|')\n  await db.collection('coupons').insertOne({\n    code: code.toUpperCase(),\n    discount: parseInt(discount),\n    active: true\n  })\n  chazireply(\`Kupon \${code} berhasil dibuat!\`)\n}\nbreak`
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(codes[type])
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="w-full max-w-full px-2 py-4 select-none">
      <div className="mx-auto max-w-full sm:max-w-2xl bg-black rounded-xl overflow-hidden border border-white/20 shadow-[0_0_30px_rgba(0,0,0,0.5)] flex flex-col">
       
        <div className="bg-[#0f0f0f] p-3 border-b border-white/10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center justify-between sm:justify-start gap-4">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
            </div>
            
            <div className="flex bg-white/5 p-1 rounded-md border border-white/10">
              {(['esm', 'cjs', 'case'] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setType(t)}
                  className={`px-3 py-1 rounded text-[10px] font-bold uppercase transition-all ${
                    type === t ? "bg-white text-black shadow-lg" : "text-gray-500 hover:text-gray-300"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handleCopy}
            className={`w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 rounded-lg border transition-all duration-300 active:scale-95 ${
              copied ? "bg-green-600 border-green-400 text-white" : "bg-white/5 border-white/10 text-white hover:bg-white/10"
            }`}
          >
            {copied ? <Check className="w-4 h-4 animate-in zoom-in" /> : <Copy className="w-4 h-4" />}
            <span className="text-[11px] font-bold uppercase">{copied ? "Copied!" : "Copy Code"}</span>
          </button>
        </div>

        <div className="w-full overflow-x-auto bg-black scrollbar-hide">
          <div className="p-4 sm:p-6 min-w-full inline-block">
            <pre className="font-mono text-[11px] sm:text-[13px] leading-relaxed text-gray-300 whitespace-pre">
              {type === 'esm' && (
                <code>
                  <span className="text-[#c678dd]">import</span> {"{ "} <span className="text-[#61afef]">addCoupon</span> {"} "} <span className="text-[#c678dd]">from</span> <span className="text-[#98c379]">'./lib/db.js'</span>{"\n\n"}
                  <span className="text-[#c678dd]">export default</span> {"{"}{"\n"}
                  {"  "}name: <span className="text-[#98c379]">'addcoupon'</span>,{"\n"}
                  {"  "}category: <span className="text-[#98c379]">'admin'</span>,{"\n"}
                  {"  "}<span className="text-[#c678dd]">async</span> <span className="text-[#61afef]">exec</span>({"{ sock, m, args }"}) {"{"}{"\n"}
                  {"    "}<span className="text-[#c678dd]">if</span> (!args[<span className="text-[#d19a66]">0</span>]) <span className="text-[#c678dd]">return</span> <span className="text-[#61afef]">chazireply</span>(<span className="text-[#98c379]">'Error'</span>){"\n"}
                  {"    "}<span className="text-[#c678dd]">const</span> code = args[<span className="text-[#d19a66]">0</span>].<span className="text-[#61afef]">toUpperCase</span>(){"\n"}
                  {"    "}<span className="text-[#c678dd]">const</span> discount = <span className="text-[#61afef]">parseInt</span>(args[<span className="text-[#d19a66]">1</span>]){"\n"}
                  {"    "}<span className="text-[#c678dd]">await</span> <span className="text-[#61afef]">addCoupon</span>(code, discount){"\n"}
                  {"    "}<span className="text-[#61afef]">chazireply</span>(<span className="text-[#98c379]">`Kupon </span><span className="text-[#d19a66]">{"${code}"}</span><span className="text-[#98c379]"> diskon </span><span className="text-[#d19a66]">{"${discount}"}</span><span className="text-[#98c379]">%`</span>){"\n"}
                  {"  "}{"}"}{"\n"}
                  {"}"}
                </code>
              )}
              {type === 'cjs' && (
                <code>
                  <span className="text-[#c678dd]">const</span> {"{ "} <span className="text-[#61afef]">addCoupon</span> {"} = "} <span className="text-[#61afef]">require</span>(<span className="text-[#98c379]">'./lib/db'</span>){"\n\n"}
                  <span className="text-[#61afef]">module.exports</span> = {"{"}{"\n"}
                  {"  "}name: <span className="text-[#98c379]">'addcoupon'</span>,{"\n"}
                  {"  "}<span className="text-[#c678dd]">async</span> <span className="text-[#61afef]">exec</span>({"{ sock, m, args }"}) {"{"}{"\n"}
                  {"    "}<span className="text-[#c678dd]">const</span> code = args[<span className="text-[#d19a66]">0</span>].<span className="text-[#61afef]">toUpperCase</span>(){"\n"}
                  {"    "}<span className="text-[#c678dd]">const</span> discount = <span className="text-[#61afef]">parseInt</span>(args[<span className="text-[#d19a66]">1</span>]){"\n"}
                  {"    "}<span className="text-[#c678dd]">await</span> <span className="text-[#61afef]">addCoupon</span>(code, discount){"\n"}
                  {"    "}<span className="text-[#61afef]">chazireply</span>(<span className="text-[#98c379]">`Berhasil`</span>){"\n"}
                  {"  "}{"}"}{"\n"}
                  {"}"}
                </code>
              )}
              {type === 'case' && (
                <code>
                  <span className="text-[#c678dd]">case</span> <span className="text-[#98c379]">'addcoupon'</span>: {"{"}{"\n"}
                  {"  "}<span className="text-[#c678dd]">let</span> [code, discount] = q.<span className="text-[#61afef]">split</span>(<span className="text-[#98c379]">'|'</span>){"\n"}
                  {"  "}<span className="text-[#c678dd]">await</span> db.<span className="text-[#61afef]">collection</span>(<span className="text-[#98c379]">'coupons'</span>).<span className="text-[#61afef]">insertOne</span>({"{"}{"\n"}
                  {"    "}code: code.<span className="text-[#61afef]">toUpperCase</span>(),{"\n"}
                  {"    "}discount: <span className="text-[#61afef]">parseInt</span>(discount),{"\n"}
                  {"    "}active: <span className="text-[#d19a66]">true</span>{"\n"}
                  {"  "}{"}"}){"\n"}
                  {"  "}<span className="text-[#61afef]">chazireply</span>(<span className="text-[#98c379]">`Kupon </span><span className="text-[#d19a66]">{"${code}"}</span><span className="text-[#98c379]"> sukses`</span>){"\n"}
                  {"}"}{"\n"}
                  <span className="text-[#c678dd]">break</span>
                </code>
              )}
            </pre>
          </div>
        </div>


        <div className="bg-[#0a0a0a] px-4 py-2 border-t border-white/5 flex items-center gap-2">
          <Terminal className="w-3 h-3 text-gray-700" />
          <span className="text-[10px] text-gray-700 font-mono tracking-widest uppercase">
            System.Chazi.Stable
          </span>
        </div>
      </div>
    </div>
  )
}
