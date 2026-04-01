import React, { useState } from 'react';

export default function PostQuantumGPT() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const questions = [
    {
      id: 1,
      question: "What is SHA? Can someone break it? 🔒",
      answer: "SHA (Secure Hash Algorithm) is like a digital fingerprint. SHA-256 takes ANY amount of data and turns it into a 256-bit number that's super hard to reverse. Can someone break it? Well... not really bro. You'd need to try 2^256 combinations. That's like, more than atoms in the universe type hard. Even quantum computers struggle. It's basically unbreakable. Respect the math. 💪"
    },
    {
      id: 2,
      question: "Why is Quantum computing a risk? ⚛️",
      answer: "Okay so current encryption (RSA, ECDSA) relies on problems being HARD to solve. Quantum computers use superposition and entanglement to solve certain problems exponentially faster. RSA-2048 that takes a classical computer 2^128 years? Quantum computer does it in HOURS. Your encrypted data sitting on servers right now? Being HARVESTED by bad actors waiting for quantum computers to crack it. That's the real threat bro. They're playing 4D chess. 🎯"
    },
    {
      id: 3,
      question: "What is the solution? 🛡️",
      answer: "Post-Quantum Cryptography (PQC) baby! NIST picked algorithms that are hard even for quantum computers: ML-KEM (lattice-based key exchange), ML-DSA (lattice-based signatures), SLH-DSA (hash-based). These are based on mathematical problems like lattice reduction and hash collisions that quantum computers CAN'T speed up. It's not about computer size anymore - it's about the MATH being unbreakable. Start using them NOW before 2029 hits! 🚀"
    },
    {
      id: 4,
      question: "Why is Post-Quantum crypto IMPOSSIBLE to break? 🤯",
      answer: "Because the underlying math problems are fundamentally hard for BOTH classical AND quantum computers. Lattice problems? Even with infinite qubits, solving them still takes exponential time. Hash-based signatures? You'd need to find collisions in functions with 2^256 possibilities. It's not about throwing more computing power at it - the THEORY says it's impossible. That's the flex right here. Math > Quantum > Everything. 📐✨"
    },
    {
      id: 5,
      question: "Will my crypto be safe in 2029? 💰",
      answer: "Only if you switch to post-quantum crypto NOW! Your current Bitcoin private keys? Vulnerable to quantum in 5 years. Your TLS certificates? Better update them. But if you use ML-KEM for key exchange and ML-DSA for signatures RIGHT NOW, you're basically time-traveling to a secure future. Start the migration today, not in 2028 when everyone's panicking. Be the sigma, not the victim. 📈"
    },
    {
      id: 6,
      question: "Is post-quantum crypto actually practical? 🔧",
      answer: "YES BRO! ML-KEM and ML-DSA are NIST-standardized and already getting integrated into major libraries. They're faster than you'd think, key sizes are reasonable (~3KB), and they work in hybrid mode (use both old + new crypto together). Companies are already moving. Google's started. Your bank will catch up eventually. But real ones start early and get that based PQC energy before it's mainstream. Be ahead of the game. 🎮"
    },
    
  ];

  return (
    <>
      {/* Floating ChatBot Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full shadow-lg shadow-cyan-500/50 hover:shadow-cyan-400/80 transition-all hover:scale-110 flex items-center justify-center text-white text-3xl font-bold border-2 border-cyan-400 animate-bounce"
        title="Ask Post Quantum GPT"
      >
        🤖
      </button>

      {/* Modal Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => {
            setIsOpen(false);
            setSelectedQuestion(null);
          }}
        >
          {/* Glass Blur Background */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-md"></div>

          {/* Modal Content */}
          <div
            className="relative z-50 w-full max-w-2xl bg-slate-900/95 backdrop-blur-xl border-2 border-cyan-400 rounded-2xl p-8 shadow-2xl shadow-cyan-500/50 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-cyan-500/30">
              <div className="flex items-center gap-3">
                <span className="text-3xl">🤖</span>
                <div>
                  <h2 className="text-2xl font-bold text-cyan-400 font-display">POST-QUANTUM GPT</h2>
                  <p className="text-green-400 text-xs">Educating degens about crypto • Powered by Math 🧮</p>
                </div>
              </div>
              <button
                onClick={() => {
                  setIsOpen(false);
                  setSelectedQuestion(null);
                }}
                className="text-red-400 hover:text-red-300 text-2xl font-bold transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Chat Content */}
            {!selectedQuestion ? (
              <div className="space-y-4">
                <p className="text-cyan-400 font-bold mb-6">Choose a question (no dumb questions here 👇)</p>
                <div className="grid gap-3">
                  {questions.map((q) => (
                    <button
                      key={q.id}
                      onClick={() => setSelectedQuestion(q)}
                      className="group text-left p-4 bg-gradient-to-r from-slate-800 to-slate-700 hover:from-cyan-900/30 hover:to-purple-900/30 border border-cyan-500/30 hover:border-cyan-400 rounded-lg transition-all hover:shadow-lg hover:shadow-cyan-500/30 hover:translate-x-2"
                    >
                      <p className="text-white font-semibold group-hover:text-cyan-300 transition-colors">
                        {q.question}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Question Display */}
                <div className="bg-purple-950/40 border border-purple-500/50 rounded-lg p-4">
                  <p className="text-purple-400 text-sm font-bold mb-2">QUESTION:</p>
                  <p className="text-white text-lg font-semibold">{selectedQuestion.question}</p>
                </div>

                {/* Answer Display */}
                <div className="bg-gradient-to-br from-green-950/40 to-cyan-950/40 border border-green-500/50 rounded-lg p-6 space-y-4">
                  <p className="text-green-400 text-sm font-bold">✓ ANSWER:</p>
                  <p className="text-gray-200 leading-relaxed text-base">
                    {selectedQuestion.answer}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4 border-t border-cyan-500/30">
                  <button
                    onClick={() => setSelectedQuestion(null)}
                    className="flex-1 bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-3 px-4 rounded-lg transition-all hover:shadow-lg hover:shadow-cyan-500/50"
                  >
                    ← Back to Questions
                  </button>
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      setSelectedQuestion(null);
                    }}
                    className="flex-1 bg-purple-600 hover:bg-purple-500 text-white font-bold py-3 px-4 rounded-lg transition-all hover:shadow-lg hover:shadow-purple-500/50"
                  >
                    Close Chat
                  </button>
                </div>
              </div>
            )}

            {/* Footer */}
            <div className="mt-6 pt-4 border-t border-cyan-500/20 text-center">
              <p className="text-green-400 text-xs">
                Stay quantum-safe. Stay based. 🔐✨
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
