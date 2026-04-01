import React, { useState } from 'react';

export default function SolutionSection() {
  const [expandedIdx, setExpandedIdx] = useState(null);

  const solutions = [
    {
      name: "LATTICE-BASED CRYPTO",
      algorithm: "ML-KEM (Kyber), ML-DSA (Dilithium)",
      pros: [
        "GOATED security assumptions",
        "Fast AF ⚡",
        "Small key sizes (unlike some other methods)",
        "Already standardized by NIST 🎉"
      ],
      why: "Math so hard even quantum computers cry. Based on lattice problems that are NP-hard.",
      emoji: "🔗"
    },
    {
      name: "HASH-BASED CRYPTO",
      algorithm: "SPHINCS+, XMSS",
      pros: [
        "Provably secure (fr fr)",
        "Only relies on hash functions",
        "No weird assumptions needed",
        "Your grandma could understand it"
      ],
      why: "So simple it's stupid. Just hash things until they're secure. Honestly it goes hard.",
      emoji: "#️⃣"
    },
    {
      name: "MULTIVARIATE POLYNOMIAL",
      algorithm: "UOV, Rainbow",
      pros: [
        "Different threat model",
        "Can be fast depending on impl",
        "Another option when diversity matters",
        "Keeps researchers employed"
      ],
      why: "Polynomials are based. Solving random polynomial equations? Not so much for quantum.",
      emoji: "📈"
    },
    {
      name: "CODE-BASED CRYPTO",
      algorithm: "Classic McEliece",
      pros: [
        "Ancient and proven",
        "Huge key sizes (lol)",
        "Ultra paranoid security margin",
        "Quantum computers confused af"
      ],
      why: "Based on error-correcting codes. So hard even quantum flexing can't break it.",
      emoji: "📡"
    }
  ];

  const algo = [
    {
      type: "Key Encapsulation",
      use: "Replacing RSA/ECDH",
      current: "ML-KEM ✅",
      adoption: "NIST Standard",
      meme: "This is THE replacement. Use this. Please."
    },
    {
      type: "Digital Signatures",
      use: "Replacing ECDSA/EdDSA",
      current: "ML-DSA ✅",
      adoption: "NIST Standard",
      meme: "Sign your messages the post-quantum way"
    },
    {
      type: "Hash-based Signatures",
      use: "For paranoid people",
      current: "SLH-DSA ✅",
      adoption: "NIST Standard",
      meme: "Maximum cope for quantum paranoia"
    }
  ];

  return (
    <section className="min-h-screen py-20 px-4 bg-gradient-to-b from-black via-slate-950 to-black">
      <div className="max-w-6xl mx-auto space-y-20">
        {/* Main header */}
        <div className="text-center space-y-4">
          <div className="inline-block border-2 border-green-500 px-4 py-2 bg-green-950/20">
            <h2 className="text-4xl font-bold text-green-400 font-display">
              ✅ THE SOLUTION EXISTS ✅
            </h2>
          </div>
          <p className="text-cyan-400 text-lg">
            we're not totally cooked. post-quantum crypto has your back
          </p>
        </div>

        {/* What is PQC */}
        <div className="cyber-card p-8">
          <h3 className="text-2xl font-bold text-cyan-400 mb-4">WHAT IS POST-QUANTUM CRYPTOGRAPHY?</h3>
          <p className="text-gray-300 mb-4 leading-relaxed">
            It's crypto that even QUANTUM COMPUTERS can't break. NIST spent YEARS testing algorithms 
            and found ones that are mathematically hard for both classical AND quantum computers.
          </p>
          <p className="text-green-400 font-bold">
            The math is so hard that we're pretty sure quantum computers literally can't solve it. (Pretty sure = 99.99%)
          </p>
        </div>

        {/* The Four Approaches */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-cyan-400 text-center mb-8">THE FOUR APPROACHES</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {solutions.map((sol, idx) => (
              <div 
                key={idx}
                onClick={() => setExpandedIdx(expandedIdx === idx ? null : idx)}
                className="cyber-card p-6 cursor-pointer transition-all duration-300"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-4xl mb-2">{sol.emoji}</div>
                    <h4 className="text-xl font-bold text-cyan-400 hover:text-green-400">
                      {sol.name}
                    </h4>
                    <p className="text-purple-400 text-sm mt-2">
                      {sol.algorithm}
                    </p>
                  </div>
                  <div className="text-2xl">
                    {expandedIdx === idx ? '▼' : '▶'}
                  </div>
                </div>

                {expandedIdx === idx && (
                  <div className="mt-6 pt-6 border-t border-cyan-500 space-y-4 animate-in">
                    <div>
                      <p className="text-green-400 font-bold mb-2">WHY IT GOES HARD:</p>
                      <p className="text-gray-300">{sol.why}</p>
                    </div>
                    <div>
                      <p className="text-cyan-400 font-bold mb-2">PROS:</p>
                      <ul className="text-gray-300 space-y-1">
                        {sol.pros.map((pro, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <span className="text-green-400">→</span> {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 text-sm mt-6">
            (click to expand each one, smoothbrain)
          </p>
        </div>

        {/* NIST Standards */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-cyan-400 text-center mb-8">🏆 NIST APPROVED (AKA THE GOATS) 🏆</h3>
          
          <div className="grid md:grid-cols-3 gap-4">
            {algo.map((a, idx) => (
              <div key={idx} className="cyber-card p-6">
                <p className="text-purple-400 text-sm font-bold mb-2">USE CASE</p>
                <p className="text-cyan-400 font-bold mb-4">{a.type}</p>
                <div className="space-y-2 text-sm">
                  <p><span className="text-green-400">→</span> {a.use}</p>
                  <p className="text-yellow-400 font-bold mt-4">{a.current}</p>
                  <p className="text-gray-400">{a.adoption}</p>
                  <p className="text-purple-400 italic mt-4">"{a.meme}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* QUANTUM COMPUTER SIZE COMPARISON */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-cyan-400 text-center mb-8">HOW BIG OF A QUANTUM COMPUTER TO CRACK YOUR CRYPTO? 🌍☀️</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Current Crypto vs Post-Quantum */}
            <div className="cyber-card p-6 space-y-4">
              <div className="text-center">
                <p className="text-red-400 font-bold text-lg mb-2">❌ TO BREAK RSA-2048</p>
                <p className="text-gray-300 mb-4">(classical encryption)</p>
              </div>
              
              <div className="space-y-3">
                <div className="bg-red-950/30 rounded-lg p-4 border border-red-500/50">
                  <p className="text-yellow-400 font-bold mb-2">🌍 QUANTUM COMPUTER SIZE:</p>
                  <p className="text-white text-2xl font-bold">~1 BILLION QUBITS</p>
                  <p className="text-gray-400 text-sm mt-2">That's like... Earth sized, but pure computing</p>
                </div>

                <div className="bg-red-950/30 rounded-lg p-4 border border-red-500/50">
                  <p className="text-orange-400 font-bold mb-2">⏱️ TIME TO CRACK:</p>
                  <p className="text-white text-lg">~8 HOURS</p>
                  <p className="text-gray-400 text-sm">If it all works perfectly (lol it won't)</p>
                </div>

                <div className="bg-red-950/30 rounded-lg p-4 border border-red-500/50">
                  <p className="text-purple-400 font-bold mb-2">💰 ESTIMATED COST:</p>
                  <p className="text-white text-lg">$1+ TRILLION</p>
                  <p className="text-gray-400 text-sm">More than world GDP. For ONE encryption.</p>
                </div>
              </div>
            </div>

            {/* Post-Quantum Crypto */}
            <div className="cyber-card p-6 space-y-4">
              <div className="text-center">
                <p className="text-green-400 font-bold text-lg mb-2">✅ TO BREAK ML-KEM</p>
                <p className="text-gray-300 mb-4">(post-quantum encryption)</p>
              </div>
              
              <div className="space-y-3">
                <div className="bg-green-950/30 rounded-lg p-4 border border-green-500/50">
                  <p className="text-green-400 font-bold mb-2">🚫 QUANTUM COMPUTER SIZE:</p>
                  <p className="text-white text-2xl font-bold">LITERALLY IMPOSSIBLE</p>
                  <p className="text-gray-400 text-sm mt-2">Even a Sun-sized quantum computer can't do it</p>
                </div>

                <div className="bg-green-950/30 rounded-lg p-4 border border-green-500/50">
                  <p className="text-green-400 font-bold mb-2">⏱️ TIME TO CRACK:</p>
                  <p className="text-white text-lg">~2^256 YEARS</p>
                  <p className="text-gray-400 text-sm">Universe is only 13.8 billion years old btw</p>
                </div>

                <div className="bg-green-950/30 rounded-lg p-4 border border-green-500/50">
                  <p className="text-green-400 font-bold mb-2">💰 ESTIMATED COST:</p>
                  <p className="text-white text-lg">🪦 REST IN PEACE</p>
                  <p className="text-gray-400 text-sm">Your secret stays secret forever. Based af.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Size Comparison */}
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-xl p-8 border border-cyan-500/30 space-y-6">
            <p className="text-cyan-400 font-bold text-center text-lg">📊 QUANTUM COMPUTER SIZE SCALE 📊</p>
            
            <div className="space-y-4">
              {/* Current setup */}
              <div className="space-y-2">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12">
                    <p className="text-yellow-400 font-bold text-sm">NOW:</p>
                  </div>
                  <div className="flex-1">
                    <div className="relative h-16 bg-slate-700/50 rounded-lg border border-yellow-500/50 flex items-center px-4">
                      <div className="text-yellow-400 font-bold">Your laptop (basic QC) 💻</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* To break RSA */}
              <div className="space-y-2">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12">
                    <p className="text-red-400 font-bold text-sm">RSA:</p>
                  </div>
                  <div className="flex-1">
                    <div className="relative h-16 bg-slate-700/50 rounded-lg border border-red-500/50 flex items-center px-4" style={{width: '100%'}}>
                      <div className="flex flex-col gap-1">
                        <div className="text-red-400 font-bold">🌍 EARTH × 1000</div>
                        <div className="text-red-300 text-xs">(~1 billion qubits needed)</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* To break PQC */}
              <div className="space-y-2">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12">
                    <p className="text-green-400 font-bold text-sm">PQC:</p>
                  </div>
                  <div className="flex-1">
                    <div className="relative h-16 bg-green-950/30 rounded-lg border border-green-500 flex items-center px-4 justify-center">
                      <div className="flex flex-col gap-1 text-center">
                        <div className="text-green-400 font-bold text-lg">☀️ × ∞</div>
                        <div className="text-green-300 text-xs">You'd need infinite Sun-sized quantum computers lmao</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Meme explanation */}
            <div className="bg-purple-950/20 rounded-lg p-4 border border-purple-500/50">
              <p className="text-purple-400 font-bold mb-2">🤓 THE LOGIC:</p>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>✓ RSA-2048: Requires ~1 billion quantum bits to crack = Earth-sized machine = doable but STUPID expensive</li>
                <li>✓ ML-KEM (PQC): Requires solving lattice problems = even if you had Sun-sized computer, the MATH doesn't work = impossible</li>
                <li>✓ It's not about computer size anymore - it's about the actual math being unbreakable 🧮</li>
              </ul>
            </div>
          </div>
        </div>

        {/* What to do NOW */}
        <div className="border-2 border-green-500 rounded-lg p-8 bg-green-950/5 space-y-4">
          <h3 className="text-2xl font-bold text-green-400 font-display">WHAT YOU SHOULD DO IN 2026-2029</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <p className="text-cyan-400 font-bold">1. IF YOU'RE A DEVELOPER:</p>
              <ul className="text-gray-300 space-y-1 ml-4">
                <li>✓ Start using liboqs-python/liboqs-cpp</li>
                <li>✓ Test ML-KEM and ML-DSA in your stuff</li>
                <li>✓ Plan hybrid implementations (old + new crypto)</li>
                <li>✓ Don't wait until 2029 lmao</li>
              </ul>
            </div>

            <div className="space-y-2">
              <p className="text-cyan-400 font-bold">2. IF YOU CARE ABOUT YOUR DATA:</p>
              <ul className="text-gray-300 space-y-1 ml-4">
                <li>✓ Ask your providers about PQC plans</li>
                <li>✓ Use services switching to post-quantum</li>
                <li>✓ Back up encrypted secrets somewhere safe</li>
                <li>✓ Stop being mid and upgrade your life</li>
              </ul>
            </div>
          </div>

          <div className="pt-4 border-t border-green-500">
            <p className="text-green-400 font-bold">TLDR: Start experimenting NOW. 2029 will be here faster than you think. 🚀</p>
          </div>
        </div>

        {/* Final meme section */}
        <div className="bg-purple-950/20 border border-purple-500 rounded-lg p-6 text-center space-y-4">
          <p className="text-purple-400 text-lg font-bold">REMEMBER:</p>
          <p className="text-gray-300">
            The future is now. Quantum computers are coming. But we have the tools.
            <br />
            <span className="text-cyan-400 font-bold">Post-quantum cryptography is not a meme. It's a movement. 🔐✨</span>
          </p>
          <p className="text-green-400 text-sm pt-4">
            Stay based. Stay secure. Stay post-quantum. 💪
          </p>
        </div>
      </div>
    </section>
  );
}