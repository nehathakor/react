import { useState } from "react"

function App() {
  const [color,setColor] = useState("#ffffff");
  return (
    <>
    <div className="w-full h-screen overflow-hidden transition-colors duration-300" style={{backgroundColor: color}}>
      <div className="text-2xl text-black text-center text-medium py-2">Choose your favourite Background color</div>
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
    <div className="flex flex-wrap justify-center gap-3 py-2">
    <button type="button" onClick={() => setColor("#6ee7b7")} className="text-black bg-emerald-700 hover:bg-emerald-800 focus:outline-none focus:ring-4 focus:ring-emerald-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800">Emerald</button>
    <button type="button" onClick={() => setColor("#e11d48")} className="text-white bg-rose-700 hover:bg-rose-800 focus:outline-none focus:ring-4 focus:ring-rose-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-rose-700 dark:hover:bg-rose-700 dark:focus:ring-rose-900">Rose</button>
    <button type="button" onClick={() => setColor("#67e8f9")} className="text-black bg-cyan-400 hover:bg-cyan-500 focus:outline-none focus:ring-4 focus:ring-cyan-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-cyan-900">Cyan</button>
    <button type="button" onClick={() => setColor("#f0abfc")} className="text-white bg-fuchsia-700 hover:bg-fuchsia-800 focus:outline-none focus:ring-4 focus:ring-fuchsia-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-fuchsia-600 dark:hover:bg-fuchsia-700 dark:focus:ring-fuchsia-900">Fuchsia</button>
    <button type="button" onClick={() => setColor("#94a3b8")} className="text-white bg-slate-700 hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-900">Slate</button>
    <button type="button" onClick={() => setColor("#fde047")} className="text-black bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900">Yellow</button>
    </div>
    </div>
    </div>
    </>
  )
}

export default App
