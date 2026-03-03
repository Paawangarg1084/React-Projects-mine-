import React, { useState } from 'react'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  // ✅ MOCK currency data (replaces missing useCurrencyInfo)
  const currencyInfo = {
  usd: 0.012,    // 1 INR = 0.012 USD
  eur: 0.011,    // 1 INR = 0.011 EUR
  gbp: 0.0095,   // 1 INR = 0.0095 GBP
  inr: 1,        // 1 INR = 1 INR
  jpy: 1.79,     // 1 INR = 1.79 JPY
  aud: 0.018     // 1 INR = 0.018 AUD
}

  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            overflow:"hidden",
            backgroundImage: `url('https://media.istockphoto.com/id/121043840/photo/money-pile.jpg?s=170667a&w=0&k=20&c=1JgUioKrY7z6r4ysxOsuSSC_88FO3eR1_z4C7uFRzbs=')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                    }}
                >
                    <div className="w-full mb-1">
                        {/* ✅ INLINE From InputBox */}
                        <div className="mb-4">
                            <label className="block text-white text-sm font-semibold mb-2">From</label>
                            <div className="flex gap-2">
                                <select 
                                    value={from} 
                                    onChange={(e) => setFrom(e.target.value)}
                                    className="flex-1 p-3 rounded-lg bg-white/20 text-black border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    {options.map(option => (
                                        <option key={option} value={option}>{option.toUpperCase()}</option>
                                    ))}
                                </select>
                                <input
                                    type="number"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                    className="flex-1 p-3 rounded-lg bg-white/20 text-black border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="0"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5 hover:bg-blue-700"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        {/* ✅ INLINE To InputBox */}
                        <div className="mb-4">
                            <label className="block text-black text-sm font-semibold mb-2">To</label>
                            <div className="flex gap-2">
                                <select 
                                    value={to} 
                                    onChange={(e) => setTo(e.target.value)}
                                    className="flex-1 p-3 rounded-lg bg-white/20 text-black border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    {options.map(option => (
                                        <option key={option} value={option}>{option.toUpperCase()}</option>
                                    ))}
                                </select>
                                <input
                                    type="number"
                                    value={convertedAmount}
                                    readOnly
                                    className="flex-1 p-3 rounded-lg bg-white/30 text-black border border-white/30 font-bold text-right"
                                    placeholder="0"
                                />
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-balck px-4 py-3 rounded-lg font-semibold transition-colors">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
  );
}

export default App
