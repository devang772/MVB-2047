import { Mic2 } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import ScrollReveal from '../components/ScrollReveal';
import { confirmedSpeakers } from '../data/speakers';

/* ── Person initials helper ── */
function getInitials(name) {
  return name.split(' ').filter(w => w.length > 1).slice(-2).map(w => w[0].toUpperCase()).join('');
}

export default function Speakers() {
  return (
    <main className="pt-16">
      {/* Page Header */}
      <div
        className="py-20 px-4"
        style={{ background: 'linear-gradient(135deg, #08112a 0%, #0f1e3c 60%, #162447 100%)' }}
      >
        <div className="max-w-7xl mx-auto">
          <p className="text-orange-400 text-sm font-semibold uppercase tracking-widest mb-3">Speakers</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
            Keynote Speakers
          </h1>
          <div className="w-16 h-1 bg-orange-500 rounded-full mb-4" />
          <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
            Distinguished keynote speakers and invited experts from India and around the world.
          </p>
        </div>
      </div>

      {/* Confirmed Speakers Section */}
      <section className="py-20 bg-slate-50/60" aria-label="Conference speakers">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-2">Keynote & Invited Speakers</h2>
              <div className="w-14 h-1 bg-amber-600 rounded-full mx-auto mb-3" />
              <p className="text-slate-500 text-sm font-medium">
                Renowned mining luminaries sharing insights for Viksit Bharat 2047
              </p>
            </div>
          </ScrollReveal>

          {/* Speakers Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {confirmedSpeakers.map((person, i) => (
              <ScrollReveal key={person.id} delay={((i % 3) + 1) * 100}>
                <div
                  className="bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col h-full group"
                >
                  {/* Top: Image Section */}
                  <div className="p-3 bg-slate-50/80 border-b border-slate-100 flex items-center justify-center">
                    <div className="w-full h-48 sm:h-52 rounded-xl overflow-hidden bg-slate-100 flex items-center justify-center relative shadow-inner p-1.5">
                      {person.image ? (
                        <img
                          src={person.image}
                          alt={person.name}
                          className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-16 h-16 rounded-xl bg-amber-100 flex items-center justify-center text-amber-800 font-black text-2xl shadow-sm">
                          {getInitials(person.name)}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Bottom: Info Section */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-2">
                    <div>
                      <span className="inline-block px-3 py-1 rounded-full bg-amber-500 text-white text-xs font-bold uppercase tracking-wider mb-2">
                        {person.role || 'Keynote Speaker'}
                      </span>

                      <h3 className="font-extrabold text-slate-900 text-base sm:text-lg leading-tight">
                        {person.name}
                      </h3>

                      <p className="text-slate-700 text-xs sm:text-sm mt-1 leading-snug font-semibold">
                        {person.designation}
                      </p>
                      <p className="text-slate-500 text-xs mt-0.5 leading-snug font-medium">
                        {person.institution}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Announcement Callout for future additions */}
          <ScrollReveal delay={300}>
            <div className="mt-14 max-w-2xl mx-auto p-6 bg-white rounded-2xl border border-slate-200 text-center shadow-xs">
              <Mic2 size={28} className="text-amber-600 mx-auto mb-2" />
              <h3 className="font-bold text-slate-900 text-base mb-1">More Speakers Coming Soon</h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                Additional keynote speakers and invited experts for MVB@2047 will be updated as confirmations are received.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
