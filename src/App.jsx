import React, { useState, useEffect } from 'react';
import './index.css';
import Countdown from './components/Countdown';
import ThreatSection from './components/ThreatSection';
import SolutionSection from './components/SolutionSection';
import GlitchText from './components/GlitchText';
import PostQuantumGPT from './components/PostQuantumGPT';

export default function App() {
  const [scrollPos, setScrollPos] = useState(0);
  const [copied, setCopied] = useState(false);

  // Change this address to your wallet/address
  const ADDRESS = "livesoooooonnnnnnnnnnpm";

  const handleCopy = () => {
    navigator.clipboard.writeText(ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    const handleScroll = () => setScrollPos(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-cyan-500/30">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="text-cyan-400 font-bold text-lg font-display">
            🔐 PQC
          </div>

          {/* Address Section */}
          <div className="flex items-center gap-3 bg-slate-900/50 rounded-lg px-4 py-2 border border-cyan-500/50 hover:border-cyan-400 transition-all">
            <span className="text-green-400 text-xs sm:text-sm font-mono truncate max-w-[200px] sm:max-w-none">
              {ADDRESS}
            </span>
            <button
              onClick={handleCopy}
              className={`px-3 py-1 rounded text-xs font-bold transition-all ${
                copied
                  ? 'bg-green-500 text-black'
                  : 'bg-cyan-500 hover:bg-cyan-400 text-black hover:shadow-lg hover:shadow-cyan-500/50'
              }`}
            >
              {copied ? '✓ COPIED' : 'COPY'}
            </button>
          </div>
        </div>
      </nav>

      {/* Animated background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/20 via-black to-purple-900/20"></div>
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 255, 0, 0.03) 2px, rgba(0, 255, 0, 0.03) 4px)',
          animation: 'scan 8s linear infinite'
        }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 pt-16">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 py-20">
          <div className="text-center space-y-8 max-w-4xl">
            {/* Flashing warning */}
            <div className="inline-block">
              <div className="border-2 border-red-500 px-6 py-3 animate-pulse">
                <p className="text-red-500 font-bold text-xl">⚠️ QUANTUM THREAT DETECTED ⚠️</p>
              </div>
            </div>

            {/* Main Title with Glitch */}
            <GlitchText text="POST-QUANTUM CRISIS" />
            
            <p className="text-2xl text-cyan-400 font-bold tracking-wider">
              GOOGLE'S 2029 DEADLINE IS COMING
            </p>

            {/* Countdown Timer */}
            <Countdown />

            {/* Call to Action */}
            <div className="pt-8 space-y-4">
              <p className="text-green-400 text-lg">
                your crypto ain't safe bro... not anymore 💀
              </p>
              <button 
                onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
                className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-3 px-8 text-lg transition-all hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/50 animate-pulse"
              >
                EDUCATE ME (IF YOU DARE)
              </button>
            </div>
          </div>
        </section>

        {/* Threat Section */}
        <ThreatSection />

        {/* Solution Section */}
        <SolutionSection />

        {/* Footer */}
        <section className="bg-black/80 border-t-2 border-cyan-500 py-8 px-4">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <p className="text-green-400">
              [ STAY QUANTUM-SAFE, STAY BASED ] 🚀
            </p>
            <p className="text-gray-500 text-sm">
              This site brought to you by people who panic-read about cryptography at 3 AM
            </p>
            <div className="text-cyan-500 text-xs pt-4 border-t border-gray-700">
              <p>Post-quantum cryptography is no meme. Neither are quantum computers. 🖥️✨</p>
            </div>
          </div>
        </section>
      </div>

      {/* Post Quantum GPT Chatbot */}
      <PostQuantumGPT />
    </div>
  );
}