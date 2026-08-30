import { Link } from 'react-router-dom';
import { Calendar, MapPin, ChevronRight, FileText, Download } from 'lucide-react';

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Conference Hero"
      style={{
        background: 'linear-gradient(135deg, #08112a 0%, #0f1e3c 35%, #162447 65%, #0d3268 100%)',
      }}
    >
      {/* Background pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      />

      {/* Subtle geometric accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none" aria-hidden="true">
        <div className="absolute top-20 right-20 w-64 h-64 border-2 border-orange-400 rounded-full" />
        <div className="absolute top-40 right-40 w-32 h-32 border border-blue-400 rounded-full" />
        <div className="absolute bottom-40 right-10 w-48 h-48 border border-green-400 rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 lg:py-36">
        <div className="max-w-4xl">
          {/* Conference label badge */}
          <div className="flex items-center gap-2 mb-6 animate-fade-in">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-300 text-xs font-semibold tracking-widest uppercase">
              International Conference
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30 text-green-300 text-xs font-semibold">
              IIT (ISM) Dhanbad
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-3 animate-fade-up">
            Mining for{' '}
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(90deg, #f97316, #fb923c)' }}>
              Viksit Bharat
            </span>{' '}
            <span className="text-orange-400">@2047</span>
          </h1>

          {/* Acronym */}
          <p className="text-2xl sm:text-3xl font-bold text-blue-200 mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            (MVB@2047)
          </p>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-blue-100/80 max-w-2xl leading-relaxed mb-8 animate-fade-up" style={{ animationDelay: '0.15s' }}>
            Transforming India's mining sector into a sustainable, technologically advanced, and globally competitive cornerstone of national development for Viksit Bharat @2047.
          </p>

          {/* Info badges */}
          <div className="flex flex-wrap gap-4 mb-10 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
              <Calendar size={16} className="text-orange-400" aria-hidden="true" />
              <span className="text-white text-sm font-semibold">3rd – 4th October 2026</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
              <MapPin size={16} className="text-green-400" aria-hidden="true" />
              <span className="text-white text-sm font-semibold">GJLT, IIT (ISM) Dhanbad</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
              <MapPin size={16} className="text-blue-400" aria-hidden="true" />
              <span className="text-white text-sm font-semibold">Jharkhand, India</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3 animate-fade-up" style={{ animationDelay: '0.25s' }}>
            <Link
              to="/registration"
              id="hero-register-btn"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-7 py-3.5 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5 text-base"
            >
              Register Now
              <ChevronRight size={18} />
            </Link>
            <Link
              to="/call-for-papers"
              id="hero-cfp-btn"
              className="inline-flex items-center gap-2 border-2 border-white/50 hover:border-white text-white hover:bg-white/10 font-semibold px-7 py-3.5 rounded-lg transition-all duration-200 hover:-translate-y-0.5 text-base"
            >
              <FileText size={18} />
              Call for Papers
            </Link>
            <a
              href="#"
              id="hero-brochure-btn"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-6 py-3.5 rounded-lg transition-all duration-200 hover:-translate-y-0.5 text-base"
              aria-label="Download Conference Brochure"
            >
              <Download size={18} />
              Brochure
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-50" aria-hidden="true">
          <div className="w-[1px] h-12 bg-white/40 animate-pulse" />
          <span className="text-white/50 text-xs tracking-widest uppercase">Scroll</span>
        </div>
      </div>
    </section>
  );
}
