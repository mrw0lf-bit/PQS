import React from 'react';

export default function ThreatSection() {
  const threats = [
    {
      title: "HARVEST NOW, DECRYPT LATER",
      description: "Bad actors are LITERALLY RECORDING YOUR ENCRYPTED DATA RIGHT NOW. They'll just wait for quantum computers to break it. Your secrets? Already stolen. You just don't know it yet. 💀",
      icon: "📦"
    },
    {
      title: "QUANTUM COMPUTERS GO BRRRR",
      description: "RSA-2048? More like RSA-TOAST. Quantum computers will crack current encryption in SECONDS what takes classical computers millennia. Google said 2029. That's not a suggestion. 🖥️⚡",
      icon: "⚛️"
    },
    {
      title: "YOUR PASSWORDS ARE NEXT",
      description: "Every password, every private key, every secret... all backed up on Google's drives. When quantum computers arrive, hackers won't need to guess anymore. They'll just know. RIP.",
      icon: "🔑"
    },
    {
      title: "BANKS, GOVERNMENTS, CRYPTO",
      description: "Everyone's crypto is on the blockchain FOREVER. Unbreakable? More like 'unbroken... yet'. Post-quantum crypto is literally a matter of national security. No cap. 🏦",
      icon: "💰"
    }
  ];

  return (
    <section className="min-h-screen py-20 px-4 bg-gradient-to-b from-black via-slate-950 to-black">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <div className="inline-block border-2 border-red-500 px-4 py-2 bg-red-950/20">
            <h2 className="text-4xl font-bold text-red-400 font-display">
              🚨 THE THREAT IS REAL 🚨
            </h2>
          </div>
          <p className="text-cyan-400 text-lg">
            lemme hit you with some knowledge, bro
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {threats.map((threat, idx) => (
            <div
              key={idx}
              className="cyber-card p-6 group relative overflow-hidden"
            >
              {/* Animated border effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-10"></div>
              </div>

              <div className="relative z-10 space-y-4">
                <div className="text-5xl mb-4">{threat.icon}</div>
                <h3 className="text-xl font-bold text-cyan-400 group-hover:text-green-400 transition-colors">
                  {threat.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {threat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Major threat callout */}
        <div className="border-l-4 border-red-500 pl-6 py-4 bg-red-950/10 rounded-r-lg">
          <p className="text-red-400 text-lg font-bold mb-2">⚠️ GOOGLE'S 2029 DEADLINE</p>
          <p className="text-gray-300">
            Google announced that quantum computers will break current encryption by 2029. 
            This isn't FUD. This is from the company that literally invented modern cryptography. 
            <span className="text-red-300 font-bold"> Your country's defense agencies already know this.</span>
          </p>
        </div>

        {/* Timeline visual */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-cyan-400 text-center">TIMELINE TO DOOM</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-4">
              <div className="w-4 h-4 bg-green-400 rounded-full"></div>
              <p className="text-green-400"><span className="font-bold">2024 (NOW):</span> Data being harvested</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
              <p className="text-yellow-400"><span className="font-bold">2025-2028:</span> Quantum computers getting scary fast</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
              <p className="text-red-400"><span className="font-bold">2029:</span> All your crypto is belong to us (Google)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
