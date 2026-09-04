import { Link } from 'react-router-dom';
import {
  Calendar, MapPin, FileText, ArrowRight,
  ChevronRight, Download, Users, Award, Leaf,
  Cpu, Gem, Shield, Scale, Globe, TrendingUp, Zap,
  ExternalLink, Plus
} from 'lucide-react';
import ismLogo from '../assets/ism-logo.png';
import centenaryLogo from '../assets/centenry_logo.png';
import brochurePdf from '../assets/MVB_2047_Brochure.pdf';
import CountdownTimer from '../components/CountdownTimer';
import SectionHeader from '../components/SectionHeader';
import ScrollReveal from '../components/ScrollReveal';
import CTASection from '../components/CTASection';
import ParticleBackground from '../components/ParticleBackground';
import { themes } from '../data/themes';
import { importantDates } from '../data/dates';
import {
  organizingCommittee,
  committeeContacts,
} from '../data/committee';
import { sponsorshipPackages, officialSponsors, otherSponsors, cilSubsidiaries } from '../data/sponsorship';

const allSponsors = [...officialSponsors, ...(otherSponsors || []), ...cilSubsidiaries];

const iconMap = { Leaf, Cpu, Gem, Shield, Scale };

/* ── Person initials ── */
function getInitials(name) {
  return name.split(' ').filter(w => w.length > 1).slice(-2).map(w => w[0].toUpperCase()).join('');
}
const palette = [
  'bg-slate-900', 'bg-blue-900', 'bg-slate-800', 'bg-indigo-900',
  'bg-slate-850', 'bg-blue-950', 'bg-teal-900', 'bg-amber-800',
];
function avatarColor(name) { return palette[name.charCodeAt(0) % palette.length]; }

/* ── Conference leaders for organizers section ── */
const leaders = [
  { label: 'Chief Patron', ...organizingCommittee.chiefPatron },
  { label: 'Patron', ...organizingCommittee.patron },
  { label: 'Co-Patron', ...organizingCommittee.coPatron },
  { label: 'Chairman', ...organizingCommittee.chairman },
  { label: 'Convener', name: committeeContacts.convener.name, designation: committeeContacts.convener.role, institution: 'Dept. of Mining Engg., IIT (ISM) Dhanbad', image: committeeContacts.convener.image, profileUrl: committeeContacts.convener.profileUrl },
  { label: 'Co-Convener & Treasurer', name: committeeContacts.coConvenerTreasurer.name, designation: committeeContacts.coConvenerTreasurer.role, institution: 'Dept. of Mining Engg., IIT (ISM) Dhanbad', image: committeeContacts.coConvenerTreasurer.image, profileUrl: committeeContacts.coConvenerTreasurer.profileUrl },
  { label: 'Co-Convener', name: committeeContacts.coConvener2.name, designation: committeeContacts.coConvener2.role, institution: 'Dept. of Mining Engg., IIT (ISM) Dhanbad', image: committeeContacts.coConvener2.image, profileUrl: committeeContacts.coConvener2.profileUrl },
  { label: 'Student Coordinator', name: committeeContacts.studentCoordinators.name, designation: committeeContacts.studentCoordinators.role, institution: 'Dept. of Mining Engg., IIT (ISM) Dhanbad', image: committeeContacts.studentCoordinators.image, profileUrl: committeeContacts.studentCoordinators.profileUrl },
];

export default function Home() {
  const handleSponsorsClick = (e) => {
    e.preventDefault();
    const el = document.getElementById('official-sponsors');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="bg-white text-slate-800">

      {/* ══════════════════════════════════════════════
          HERO — Particle Motion White Background + Split Layout
      ══════════════════════════════════════════════ */}
      <section
        className="pt-20 pb-16 bg-white relative overflow-hidden border-b border-slate-200/80"
        aria-label="Conference hero"
      >
        {/* Interactive Particle Motion Background */}
        <ParticleBackground />

        {/* Ambient glowing float elements overlay */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <div className="absolute top-12 left-[10%] w-72 h-72 rounded-full bg-slate-100/50 blur-3xl animate-float-1" />
          <div className="absolute bottom-10 right-[15%] w-96 h-96 rounded-full bg-blue-50/40 blur-3xl animate-float-2" />
          <div className="absolute top-1/3 left-1/2 w-64 h-64 rounded-full bg-amber-50/30 blur-2xl animate-float-3" />

          {/* Light SVG grid background */}
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%230f172a' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-6">
          <div className="grid lg:grid-cols-5 gap-10 items-start">

            {/* Left — conference identity */}
            <div className="lg:col-span-3">
              {/* Official Logos Side-by-Side (Aligned at top) */}
              <div className="flex items-center gap-5 sm:gap-6 mb-6">
                <img
                  src={ismLogo}
                  alt="IIT (ISM) Dhanbad Logo"
                  className="h-16 sm:h-20 md:h-24 w-auto object-contain hover:scale-105 transition-transform drop-shadow-xs"
                />
                <img
                  src={centenaryLogo}
                  alt="Centenary Celebration Logo"
                  className="h-16 sm:h-20 md:h-24 w-auto object-contain hover:scale-105 transition-transform drop-shadow-xs"
                />
              </div>

              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100/90 backdrop-blur-xs border border-slate-200 text-slate-800 text-xs font-bold uppercase tracking-widest mb-6 shadow-xs">
                International Conference · 2026
              </div>

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-3 tracking-tight">
                Mining for{' '}
                <br/>
                <span className="text-amber-600">Viksit Bharat</span>
                <span className="text-slate-900"> 2047</span>
              </h1>
              
              <p className="text-slate-600 text-base leading-relaxed max-w-xl mb-8 text-justify">
                Transforming India's mining sector into a sustainable, technologically advanced, and globally competitive cornerstone of national development for Viksit Bharat 2047.
              </p>

              {/* Info chips */}
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="flex items-center gap-2 bg-slate-50/90 backdrop-blur-xs border border-slate-200 rounded-full px-4 py-2 text-xs font-bold text-slate-800 shadow-xs">
                  <Calendar size={14} className="text-blue-900" aria-hidden="true" />
                  3rd – 4th October 2026
                </span>
                <span className="flex items-center gap-2 bg-slate-50/90 backdrop-blur-xs border border-slate-200 rounded-full px-4 py-2 text-xs font-bold text-slate-800 shadow-xs">
                  <MapPin size={14} className="text-blue-900" aria-hidden="true" />
                  GJLT, IIT (ISM) Dhanbad
                </span>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/registration"
                  id="hero-register-btn"
                  className="inline-flex items-center gap-2 bg-slate-900 hover:bg-blue-900 text-white font-bold px-7 py-3.5 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md text-xs uppercase tracking-wider"
                >
                  Register Now
                  <ChevronRight size={16} />
                </Link>
                <Link
                  to="/call-for-papers"
                  id="hero-cfp-btn"
                  className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-bold px-7 py-3.5 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md text-xs uppercase tracking-wider"
                >
                  <FileText size={16} />
                  Call for Papers
                </Link>
                {/* <a
                  href={brochurePdf}
                  download="MVB_2047_Brochure.pdf"
                  id="hero-brochure-btn"
                  className="inline-flex items-center gap-2 border border-slate-300 hover:border-slate-400 text-slate-800 font-semibold px-6 py-3.5 rounded-lg transition-all duration-200 bg-white/90 backdrop-blur-xs hover:bg-slate-50 text-xs uppercase tracking-wider"
                  aria-label="Download Brochure"
                >
                  <Download size={16} />
                  Brochure
                </a> */}
              </div>

              {/* Organized by note */}
              <p className="text-slate-500 text-xs mt-6">
                Organized by the{' '}
                <span className="text-slate-900 font-bold">Department of Mining Engineering, IIT (ISM) Dhanbad</span>
              </p>
            </div>

            {/* Right — Larger Sponsors Grid Container (Fixed 6-box Grid) */}
            <div className="lg:col-span-2">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl border border-slate-200 shadow-lg overflow-hidden">
                {/* Header */}
                <div className="bg-slate-900 px-6 py-4.5 flex items-center justify-between border-b border-slate-800">
                  <div>
                    <p className="text-white font-extrabold text-lg sm:text-xl">Our Sponsors</p>
                  </div>
                </div>

                {/* Grid of Official Sponsor Logos (Exactly 6 Boxes Grid) */}
                <div className="p-4 sm:p-5">
                  <div className="grid grid-cols-2 gap-3">
                    {officialSponsors.map((sp) => (
                      <a
                        key={sp.id}
                        href={sp.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white hover:bg-slate-50 rounded-xl border border-slate-200 hover:border-slate-400 p-3.5 transition-all duration-200 flex flex-col items-center justify-center text-center min-h-[125px] group relative shadow-2xs hover:shadow-xs"
                        title={sp.name}
                      >
                        {/* Sponsor Tier Badge */}
                        {sp.isKeySponsor && (
                          <span className="absolute top-1.5 right-1.5 text-[8px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded bg-amber-500 text-slate-900 shadow-2xs">
                            {sp.id === 'cil' ? 'Principal' : 'Key Sponsor'}
                          </span>
                        )}

                        {/* Official Sponsor Logo Image */}
                        <div className="h-12 w-full flex items-center justify-center p-1 mb-1.5">
                          <img
                            src={sp.logo}
                            alt={`${sp.name} logo`}
                            className="max-h-full max-w-[125px] object-contain group-hover:scale-105 transition-transform"
                          />
                        </div>

                        {/* Sponsor Name */}
                        <p className="font-extrabold text-[11px] text-slate-900 group-hover:text-blue-900 transition-colors leading-tight">
                          {sp.name}
                        </p>
                      </a>
                    ))}
                  </div>
                </div>

                <div className="border-t border-slate-100 px-5 py-3 bg-slate-50 flex items-center justify-between text-xs text-slate-500 font-medium">
                  <span>MVB@2047 Official Partners</span>
                  <a
                    href="#official-sponsors"
                    onClick={handleSponsorsClick}
                    className="text-blue-900 font-bold hover:underline cursor-pointer flex items-center gap-1"
                  >
                    View Details →
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          COUNTDOWN TIMER (Full Screen Section)
      ══════════════════════════════════════════════ */}
      <CountdownTimer />

      {/* ══════════════════════════════════════════════
          STATS BAR
      ══════════════════════════════════════════════ */}
      {/* <section className="bg-slate-900 py-8 border-y border-slate-800" aria-label="Conference statistics">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              { value: '5', label: 'Conference Themes' },
              { value: '2', label: 'Conference Days' },
              { value: '10', label: 'Exhibition Stalls' },
              { value: '21st', label: 'QS Global Rank (Mining)' },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-extrabold text-white">{s.value}</p>
                <p className="text-slate-300 text-xs uppercase tracking-wider font-semibold mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ══════════════════════════════════════════════
          ABOUT / CONCEPT SECTION
      ══════════════════════════════════════════════ */}
      <section className="py-20 bg-white" aria-label="Conference concept">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* Left: Text */}
            <ScrollReveal>
              <SectionHeader
                label="About the Conference"
                title="Mining for Viksit Bharat 2047"
                subtitle="A strategic roadmap for India's mining sector transformation"
              />
              <div className="space-y-4 text-slate-600 text-[15px] leading-relaxed text-justify">
                <p>
                  The International Conference on Mining for Viksit Bharat 2047 (MVB@2047) aims to develop a strategic roadmap for making India's mining sector a cornerstone of sustainable national development, aligned with the vision of Viksit Bharat by 2047.
                </p>
                <p>
                  India has the world's 4th largest coal reserves, significant deposits of iron ore, bauxite, and other critical minerals. Yet the sector's contribution to GDP remains modest relative to its vast potential. MVB@2047 brings together policymakers, industry leaders, researchers and academia to chart a path forward.
                </p>
                <p>
                  The conference covers five key themes spanning sustainable mining, next-generation technologies, critical minerals, safety & health, and policy governance ecosystems.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 bg-slate-900 hover:bg-blue-900 text-white font-bold px-6 py-3 rounded-lg transition-colors text-xs uppercase tracking-wider"
                >
                  About IIT (ISM)
                  <ArrowRight size={15} />
                </Link>
                <Link
                  to="/themes"
                  className="inline-flex items-center gap-2 border border-slate-300 hover:border-slate-400 text-slate-800 font-semibold px-6 py-3 rounded-lg transition-colors bg-slate-50 hover:bg-slate-100 text-xs uppercase tracking-wider"
                >
                  View Themes
                  <ArrowRight size={15} />
                </Link>
              </div>
            </ScrollReveal>

            {/* Right: Key focus cards */}
            <ScrollReveal delay={200}>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: 'Sustainable Mining', desc: 'Net-zero goals, decarbonization, ESG compliance', icon: Leaf, color: 'border-slate-200 text-slate-900' },
                  { label: 'Digital Mining', desc: 'AI, digital twins, IoT, automation', icon: Cpu, color: 'border-slate-200 text-slate-900' },
                  { label: 'Critical Minerals', desc: 'Lithium, cobalt, REEs supply chain', icon: Gem, color: 'border-slate-200 text-slate-900' },
                  { label: 'Safety & Health', desc: 'Zero-harm vision, predictive analytics', icon: Shield, color: 'border-slate-200 text-slate-900' },
                  { label: 'Policy & Governance', desc: 'Mining reforms, PPP models', icon: Scale, color: 'border-slate-200 text-slate-900' },
                  { label: 'Global Partnerships', desc: 'International competitiveness', icon: Globe, color: 'border-slate-200 text-slate-900' },
                  { label: 'Green Financing', desc: 'ESG financing & green extraction', icon: TrendingUp, color: 'border-slate-200 text-slate-900' },
                  { label: 'Future-Ready', desc: 'Blockchain, e-auction, reforms', icon: Zap, color: 'border-slate-200 text-slate-900' },
                ].map((f) => {
                  const Icon = f.icon;
                  return (
                    <div key={f.label} className={`rounded-xl border p-4 hover:shadow-xs transition-shadow ${f.color}`}>
                      <Icon size={18} className="mb-2 text-slate-800" aria-hidden="true" />
                      <p className="font-bold text-xs mb-0.5">{f.label}</p>
                      <p className="text-[11px] text-slate-500 leading-snug">{f.desc}</p>
                    </div>
                  );
                })}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          IMPORTANT DATES (mini)
      ══════════════════════════════════════════════ */}
      {/* <section className="py-16 bg-slate-50 border-y border-slate-200/80" aria-label="Key deadlines">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-10">
              <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-2">Deadlines</p>
              <h2 className="text-3xl font-extrabold text-slate-900">Key Dates</h2>
              <div className="w-12 h-1 bg-amber-600 rounded-full mx-auto mt-3" />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {importantDates.slice(0, 4).map((d, i) => (
              <ScrollReveal key={d.id} delay={(i + 1) * 80}>
                <div className={`rounded-xl border p-5 text-center ${d.isMain ? 'bg-slate-900 border-slate-900 text-white shadow-sm' : 'bg-white border-slate-200 shadow-xs'}`}>
                  <Calendar size={18} className={`mx-auto mb-2 ${d.isMain ? 'text-amber-400' : 'text-slate-700'}`} aria-hidden="true" />
                  <p className={`font-extrabold text-xs uppercase tracking-wider mb-1 ${d.isMain ? 'text-amber-400' : 'text-amber-600'}`}>{d.date}</p>
                  <p className={`font-bold text-sm leading-snug ${d.isMain ? 'text-white' : 'text-slate-900'}`}>{d.event}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="text-center">
              <Link
                to="/important-dates"
                className="inline-flex items-center gap-2 text-slate-900 font-bold hover:text-amber-600 transition-colors text-xs uppercase tracking-wider"
              >
                View all important dates
                <ArrowRight size={14} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section> */}

      {/* ══════════════════════════════════════════════
          OFFICIAL CONFERENCE SPONSORS GRID
      ══════════════════════════════════════════════ */}
      

      {/* ══════════════════════════════════════════════
          CONFERENCE ORGANIZERS
      ══════════════════════════════════════════════ */}
      <section className="py-20 bg-slate-50/60 border-t border-slate-200/80" aria-label="Conference organizers">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-2">Conference Organizers</h2>
              <div className="w-14 h-1 bg-amber-600 rounded-full mx-auto mb-3" />
              <p className="text-slate-500 text-sm font-medium">
                Meet the experts leading MVB@2047
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {leaders.map((person, i) => (
              <ScrollReveal key={person.name} delay={((i % 3) + 1) * 100}>
                <a
                  href={person.profileUrl || 'https://www.iitism.ac.in'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-amber-500 transition-all duration-300 overflow-hidden flex flex-col h-full group block"
                  title={`View ${person.name}'s official profile`}
                >
                  {/* Top: Image Section with Padding Around */}
                  <div className="p-3 bg-slate-50/80 border-b border-slate-100 flex items-center justify-center">
                    <div className="w-full h-44 sm:h-48 rounded-xl overflow-hidden bg-slate-100 flex items-center justify-center relative shadow-inner p-1.5">
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
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                    <div>
                      <span className="inline-block px-3 py-1 rounded-full bg-amber-500 text-white text-xs font-bold uppercase tracking-wider mb-2">
                        {person.label || person.role}
                      </span>

                      <div className="flex items-center justify-between gap-1.5">
                        <h3 className="font-extrabold text-slate-900 text-base sm:text-lg leading-tight group-hover:text-amber-600 transition-colors">
                          {person.name}
                        </h3>
                        <ExternalLink size={15} className="text-slate-400 group-hover:text-amber-600 transition-colors flex-shrink-0" />
                      </div>

                      <p className="text-slate-500 text-xs sm:text-sm mt-1 leading-snug font-medium">
                        {person.subtitle || 'Department of Mining Engineering, IIT (ISM) Dhanbad'}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-100">
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-amber-700 group-hover:text-amber-600 transition-colors">
                        View Official Profile →
                      </span>
                    </div>
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="text-center mt-10">
              <Link
                to="/committee"
                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-blue-900 text-white font-bold px-6 py-3 rounded-lg transition-colors text-xs uppercase tracking-wider shadow-xs"
              >
                View Full Committee
                <ArrowRight size={14} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          OFFICIAL CONFERENCE SPONSORS SECTION (ALL 13 SPONSORS)
      ══════════════════════════════════════════════ */}
      <section id="official-sponsors" className="py-20 bg-slate-50 border-t border-slate-200 scroll-mt-20" aria-label="Official conference sponsors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeader
              label="Our Partners"
              title="Official Conference Sponsors"
              subtitle="Mining Industry Partners for MVB@2047"
              centered
            />
          </ScrollReveal>

          {/* Highlighting Banner for Key Sponsors (Indukuri, Adani, AIMIL, NORMET, CIL) */}
          {/* <ScrollReveal delay={50}>
            <div className="bg-gradient-to-r from-slate-900 via-amber-950 to-slate-900 text-white rounded-2xl p-6 sm:p-8 mt-8 border border-amber-500/40 text-center shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
              <span className="inline-block bg-amber-500/20 text-amber-400 text-xs font-black uppercase tracking-widest px-3.5 py-1 rounded-full border border-amber-500/30 mb-3">
                Key Conference Sponsors
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                Prominently Supported By Industry Leaders
              </h3>
              <p className="text-slate-300 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
                We express our sincere gratitude to <strong className="text-amber-400 font-bold">Indukuri Mining Pvt Ltd</strong>, <strong className="text-amber-400 font-bold">Adani Natural Resources</strong>, <strong className="text-amber-400 font-bold">AIMIL Ltd.</strong>, <strong className="text-amber-400 font-bold">NORMET</strong>, and <strong className="text-amber-400 font-bold">Coal India Limited</strong> for their visionary support towards Mining for Viksit Bharat 2047.
              </p>
            </div>
          </ScrollReveal> */}

          {/* Grid of Sponsor Cards */}
          <ScrollReveal delay={100}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10">
              {allSponsors.map((sp) => (
                <a
                  key={sp.id}
                  href={sp.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-slate-50 rounded-2xl border border-slate-200 hover:border-slate-400 hover:shadow-lg transition-all duration-300 p-6 flex flex-col items-center text-center min-h-[190px] group shadow-xs relative overflow-hidden"
                  title={sp.name}
                >
                  {/* Sponsor Tier Badge */}
                  {sp.isKeySponsor && (
                    <div className="absolute top-0 right-0">
                      <span className="bg-amber-500 text-slate-900 text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-bl-lg shadow-xs">
                        {sp.id === 'cil' ? 'Principal' : 'Key Sponsor'}
                      </span>
                    </div>
                  )}

                  {/* Logo Container */}
                  <div className="h-24 w-full flex items-center justify-center p-3 mb-4 bg-slate-50/80 rounded-xl group-hover:bg-white transition-colors border border-slate-100">
                    <img
                      src={sp.logo}
                      alt={`${sp.name} logo`}
                      className="max-h-full max-w-[170px] object-contain group-hover:scale-105 transition-transform"
                    />
                  </div>

                  {/* Sponsor Name */}
                  <h3 className="font-extrabold text-base text-slate-900 group-hover:text-amber-600 transition-colors leading-tight">
                    {sp.name}
                  </h3>
                  <p className="text-xs text-slate-400 font-semibold mt-1">
                    {sp.shortName}
                  </p>
                </a>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          CTA BANNER
      ══════════════════════════════════════════════ */}
      <CTASection
        title="Don't Miss MVB@2047"
        subtitle="Join policymakers, researchers, industry leaders and academics at IIT (ISM) Dhanbad this October 2026."
        primaryLabel="Register Now"
        primaryTo="/registration"
        secondaryLabel="View Themes"
        secondaryTo="/themes"
      />
    </main>
  );
}
