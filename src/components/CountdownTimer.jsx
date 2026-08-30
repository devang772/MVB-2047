import { useState, useEffect } from 'react';

function pad(n) {
  return String(n).padStart(2, '0');
}

const START_DATE = new Date('2026-01-01T00:00:00+05:30').getTime();
const CONFERENCE_DATE = new Date('2026-10-03T09:00:00+05:30').getTime();

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(calcTime());
  const [progressPercent, setProgressPercent] = useState(0);

  function calcTime() {
    const now = Date.now();
    const diff = CONFERENCE_DATE - now;

    if (diff <= 0) return { days: 0, hours: 0, mins: 0, secs: 0 };
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      mins: Math.floor((diff / (1000 * 60)) % 60),
      secs: Math.floor((diff / 1000) % 60),
    };
  }

  useEffect(() => {
    const update = () => {
      setTimeLeft(calcTime());
      const now = Date.now();
      const total = CONFERENCE_DATE - START_DATE;
      const elapsed = now - START_DATE;
      const pct = Math.min(100, Math.max(0, (elapsed / total) * 100));
      setProgressPercent(pct);
    };

    update();
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, []);

  const cards = [
    { label: 'DAYS', value: timeLeft.days, color: 'bg-amber-600 text-white shadow-amber-200' },
    { label: 'HOURS', value: timeLeft.hours, color: 'bg-amber-600 text-white shadow-amber-200' },
    { label: 'MINUTES', value: timeLeft.mins, color: 'bg-slate-900 text-white shadow-slate-300' },
    { label: 'SECONDS', value: timeLeft.secs, color: 'bg-slate-900 text-white shadow-slate-300' },
  ];

  return (
    <section
      className="min-h-[85vh] py-20 sm:py-28 bg-white relative flex flex-col items-center justify-center border-y border-slate-200/80 overflow-hidden"
      aria-label="Countdown to conference"
    >
      {/* Background ambient glow circles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-50/70 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-slate-100/80 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 w-full flex flex-col items-center text-center">

        {/* Big Heading */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight mb-3">
          Countdown to <span className="text-amber-600">MVB</span><span className="text-amber-600">@2047</span>
        </h2>

        {/* Date Subtitle */}
        <p className="text-slate-500 text-base sm:text-xl font-medium mb-12">
          Saturday, October 3, 2026
        </p>

        {/* 4 Timer Cards: Days & Hours (bg-amber-600), Minutes & Seconds (bg-slate-900) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 w-full max-w-4xl mb-14" role="timer" aria-live="off">
          {cards.map((c) => (
            <div
              key={c.label}
              className={`${c.color} rounded-2xl py-8 px-4 flex flex-col items-center justify-center shadow-lg hover:scale-105 transition-all duration-300 cursor-default`}
            >
              <span
                className="text-4xl sm:text-6xl font-black tabular-nums tracking-tight leading-none mb-2"
                aria-label={`${c.value} ${c.label}`}
              >
                {pad(c.value)}
              </span>
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-white/90">
                {c.label}
              </span>
            </div>
          ))}
        </div>

        {/* Timeline Progress Bar */}
        <div className="w-full max-w-2xl px-2 mb-8">
          <div className="flex justify-between items-center text-xs font-bold text-slate-400 mb-2">
            <span>Today</span>
            <span>Conference Day</span>
          </div>

          <div className="w-full h-3 rounded-full bg-slate-100 overflow-hidden p-0.5 border border-slate-200/80 shadow-inner">
            <div
              className="h-full rounded-full bg-gradient-to-r from-amber-600 via-amber-500 to-slate-900 transition-all duration-500 shadow-xs"
              style={{ width: `${Math.max(8, progressPercent)}%` }}
            />
          </div>
        </div>

        {/* Status Pill Badge */}
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-slate-100 border border-slate-200 text-slate-900 font-bold text-xs sm:text-sm shadow-xs">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-500 opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-600" />
          </span>
          <span>The conference countdown is now live</span>
        </div>

      </div>
    </section>
  );
}
