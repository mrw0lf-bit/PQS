import React, { useState, useEffect } from 'react';

export default function Countdown() {
  const [time, setTime] = useState({
    years: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTime = () => {
      // Target: January 1, 2029
      const target = new Date('2029-01-01').getTime();
      const now = new Date().getTime();
      const diff = target - now;

      if (diff > 0) {
        const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
        const remaining = diff % (1000 * 60 * 60 * 24 * 365);
        const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((remaining % (1000 * 60)) / 1000);

        setTime({ years, days, hours, minutes, seconds });
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const TimeUnit = ({ value, label }) => (
    <div className="flex flex-col items-center">
      <div className="bg-gradient-to-b from-cyan-500 to-purple-500 rounded-lg px-6 py-4 min-w-[100px] border-2 border-cyan-400 shadow-lg shadow-cyan-500/50">
        <p className="text-4xl font-bold text-white font-display tabular-nums">
          {String(value).padStart(2, '0')}
        </p>
      </div>
      <p className="text-cyan-400 text-sm mt-3 font-bold uppercase tracking-widest">{label}</p>
    </div>
  );

  return (
    <div className="space-y-6">
      <p className="text-red-500 text-xl font-bold animate-pulse">
        TICK TOCK... YOUR TIME IS RUNNING OUT 🕐
      </p>
      
      <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
        <TimeUnit value={time.years} label="Years" />
        <TimeUnit value={time.days} label="Days" />
        <TimeUnit value={time.hours} label="Hours" />
        <TimeUnit value={time.minutes} label="Minutes" />
        <TimeUnit value={time.seconds} label="Seconds" />
      </div>

      <p className="text-purple-400 text-xs max-w-2xl mx-auto pt-4">
        WHEN THIS HITS ZERO, YOUR ENCRYPTED SECRETS BECOME PUBLIC KNOWLEDGE 🔓
      </p>
    </div>
  );
}
