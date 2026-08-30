import { Calendar, Award, MapPin, BookOpen, Layers, Trophy, Star } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import ScrollReveal from '../components/ScrollReveal';
import CTASection from '../components/CTASection';
import { aboutIIT, aboutDepartment } from '../data/conference';
import bannerGif from '../assets/iitism_banner_new.gif';

const iconMap = { Calendar, Award, MapPin, BookOpen, Layers, Trophy, Star };

const milestones = [
  {
    year: '1926',
    event: 'Indian School of Mines established',
    detail: 'Inaugurated on December 9, 1926 by Lord Irwin, then Viceroy of India',
  },
  {
    year: '1926',
    event: 'Department of Mining Engineering founded',
    detail: 'Established to address the demand for trained mining professionals in India',
  },
  {
    year: '2016',
    event: 'Granted IIT Status',
    detail: 'On September 06, 2016, renamed as Indian Institute of Technology (Indian School of Mines) Dhanbad',
  },
  {
    year: '2025',
    event: 'QS World Ranking — 20 globally',
    detail: 'Ranked 20th globally for Mineral and Mining Engineering — 1st ranked institution in India',
  },
  {
    year: '2026',
    event: 'QS World Ranking — 21 globally',
    detail: 'Ranked 21st globally for Mineral and Mining Engineering — 1st ranked institution in India',
  },
];

export default function About() {
  return (
    <main className="pt-16">
      {/* Page Header */}
      <div
        className="py-20 px-4"
        style={{ background: 'linear-gradient(135deg, #08112a 0%, #0f1e3c 60%, #162447 100%)' }}
      >
        <div className="max-w-7xl mx-auto">
          <p className="text-orange-400 text-sm font-semibold uppercase tracking-widest mb-3">About</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
            IIT (ISM) Dhanbad
          </h1>
          <div className="w-16 h-1 bg-orange-500 rounded-full mb-4" />
          <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
            One of India's premier technology institutions, ranked 21st globally and 1st in India for Mineral and Mining Engineering.
          </p>
        </div>
      </div>

      {/* About IIT (ISM) */}
      <section className="py-20 bg-white" aria-label="About IIT ISM Dhanbad">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <ScrollReveal>
              <SectionHeader
                label="About the Institution"
                title="Indian Institute of Technology (ISM) Dhanbad"
              />

              <div className="space-y-4 text-slate-600 text-[15px] leading-relaxed text-justify">
                {aboutIIT.content.split('\n\n').map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              {/* Banner Image placed on top */}
              <div className="rounded-2xl overflow-hidden border border-blue-100 shadow-md bg-white p-2 mb-6">
                <img
                  src={bannerGif}
                  alt="IIT (ISM) Dhanbad Banner"
                  className="w-full h-auto rounded-xl object-cover"
                />
              </div>

              {/* Highlight Stats Grid (1926 Established, 2016 IIT Status, 1st in India, 21st Global Rank) */}
              <div className="grid grid-cols-2 gap-4">
                {aboutIIT.highlights.map((h) => {
                  const Icon = iconMap[h.icon] || Star;
                  return (
                    <div
                      key={h.label}
                      className="bg-[#f0f6ff] rounded-xl p-5 border border-blue-100 hover:border-blue-300 transition-colors"
                    >
                      <Icon size={22} className="text-blue-700 mb-2" aria-hidden="true" />
                      <p className="text-2xl font-extrabold text-[#0f1e3c]">{h.value}</p>
                      <p className="text-slate-500 text-sm mt-0.5">{h.label}</p>
                    </div>
                  );
                })}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* About Department */}
      <section className="py-20 bg-[#f0f6ff]" aria-label="About Department of Mining Engineering">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <ScrollReveal delay={100}>
              {/* Department highlights */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {aboutDepartment.highlights.map((h) => {
                  const Icon = iconMap[h.icon] || Star;
                  return (
                    <div
                      key={h.label}
                      className="bg-white rounded-xl p-5 border border-blue-100 shadow-sm hover:border-orange-200 transition-colors"
                    >
                      <Icon size={22} className="text-orange-500 mb-2" aria-hidden="true" />
                      <p className="text-xl font-extrabold text-[#0f1e3c] leading-snug">{h.value}</p>
                      <p className="text-slate-500 text-xs mt-1 leading-snug">{h.label}</p>
                    </div>
                  );
                })}
              </div>

              {/* Research & Activity Areas */}
              <div className="p-6 bg-white rounded-2xl border border-blue-100 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Research & Activity Areas</p>
                <ul className="space-y-2.5">
                  {[
                    'Coal Mining',
                    'Metalliferous Mining',
                    'Construction Sector',
                    'Mining Technology & Automation',
                  ].map((area) => (
                    <li key={area} className="flex items-center gap-2.5 text-sm text-slate-700 font-medium">
                      <div className="w-2 h-2 rounded-full bg-blue-600 flex-shrink-0" aria-hidden="true" />
                      {area}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <SectionHeader
                label="About the Department"
                title="Department of Mining Engineering"
              />

              <div className="space-y-4 text-slate-600 text-[15px] leading-relaxed text-justify">
                {aboutDepartment.content.split('\n\n').map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Milestones Timeline */}
      <section className="py-20 bg-white" aria-label="Institutional milestones">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeader
              label="History"
              title="Institutional Milestones"
              centered
            />
          </ScrollReveal>

          <div className="relative mt-8">
            {/* Center line */}
            <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-orange-400" aria-hidden="true" />

            <div className="space-y-8">
              {milestones.map((m, i) => (
                <ScrollReveal key={i} delay={(i % 3) * 100}>
                  <div className={`flex items-start gap-4 ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    {/* Content */}
                    <div className={`flex-1 ${i % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 inline-block text-left w-full hover:shadow-md transition-shadow">
                        <span className="text-orange-500 font-extrabold text-lg">{m.year}</span>
                        <h3 className="font-bold text-[#0f1e3c] text-sm mt-1">{m.event}</h3>
                        <p className="text-slate-500 text-xs mt-1 leading-relaxed">{m.detail}</p>
                      </div>
                    </div>
                    {/* Dot */}
                    <div className="relative z-10 w-4 h-4 rounded-full bg-orange-500 border-4 border-white shadow-md flex-shrink-0 mt-6" aria-hidden="true" />
                    <div className="flex-1" />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* <CTASection
        title="Join Us at IIT (ISM) Dhanbad"
        subtitle="Be part of India's most prestigious mining conference at one of the world's top-ranked institutions."
        primaryLabel="Register Now"
        primaryTo="/registration"
        secondaryLabel="Contact Us"
        secondaryTo="/contact"
      /> */}
    </main>
  );
}
