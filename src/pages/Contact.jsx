import { Mail, MapPin, Phone, Calendar } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import ScrollReveal from '../components/ScrollReveal';
import { committeeContacts } from '../data/committee';

const { convener, coConvenerTreasurer, coConvener2, studentCoordinators } = committeeContacts;

function ContactPersonCard({ role, name, mobile, email, accent }) {
  const accentStyles = {
    orange: { header: 'bg-orange-500', label: 'text-orange-100', icon: 'text-orange-500' },
    blue: { header: 'bg-[#0f1e3c]', label: 'text-blue-200', icon: 'text-blue-500' },
    green: { header: 'bg-green-700', label: 'text-green-100', icon: 'text-green-500' },
    purple: { header: 'bg-purple-700', label: 'text-purple-100', icon: 'text-purple-500' },
  };
  const s = accentStyles[accent] || accentStyles.blue;

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden h-full">
      <div className={`${s.header} px-6 py-4`}>
        <p className={`${s.label} text-xs font-bold uppercase tracking-widest`}>{role}</p>
        <p className="text-white font-bold text-base mt-0.5 leading-snug">{name}</p>
      </div>
      <div className="p-6 space-y-3">
        <p className="text-slate-500 text-sm">Department of Mining Engineering<br />IIT (ISM) Dhanbad – 826004</p>
        <div className="pt-1 space-y-2.5">
          {mobile && (
            <a
              href={`tel:${mobile}`}
              className={`flex items-center gap-2 text-sm text-[#0f1e3c] hover:text-orange-600 transition-colors font-medium`}
              aria-label={`Call ${name}`}
            >
              <Phone size={14} className={s.icon} aria-hidden="true" />
              {mobile}
            </a>
          )}
          {email && (
            <a
              href={`mailto:${email}`}
              className="flex items-center gap-2 text-sm text-[#0f1e3c] hover:text-orange-600 transition-colors font-medium break-all"
              aria-label={`Email ${name}`}
            >
              <Mail size={14} className={s.icon} aria-hidden="true" />
              {email}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Contact() {
  return (
    <main className="pt-16">
      {/* Page Header */}
      <div
        className="py-20 px-4"
        style={{ background: 'linear-gradient(135deg, #08112a 0%, #0f1e3c 60%, #162447 100%)' }}
      >
        <div className="max-w-7xl mx-auto">
          <p className="text-orange-400 text-sm font-semibold uppercase tracking-widest mb-3">Get in Touch</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
            Contact Us
          </h1>
          <div className="w-16 h-1 bg-orange-500 rounded-full mb-4" />
          <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
            Reach out to the MVB@2047 organizing secretariat for all queries, submissions, and collaborations.
          </p>
        </div>
      </div>

      <section className="py-20 bg-white" aria-label="Contact information">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">

            {/* Main Contact Column */}
            <div className="lg:col-span-2 space-y-10">

              {/* Primary email block */}
              <ScrollReveal>
                <SectionHeader label="Correspondence" title="Conference Secretariat" />
                <div className="bg-[#0f1e3c] rounded-2xl p-8 flex flex-col sm:flex-row items-start gap-5">
                  <div className="w-14 h-14 rounded-xl bg-orange-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <Mail size={26} className="text-orange-400" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-orange-400 text-xs font-bold uppercase tracking-widest mb-1">
                      E-mail ID for All Correspondences &amp; Paper Submissions
                    </p>
                    <a
                      href="mailto:mvb_2047@iitism.ac.in"
                      className="text-2xl font-bold text-white hover:text-orange-400 transition-colors break-all"
                    >
                      mvb_2047@iitism.ac.in
                    </a>
                    <p className="text-blue-200 text-sm mt-2 leading-relaxed">
                      Use this email for paper submissions, registration queries, sponsorship inquiries, and all official correspondence.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Key contact persons */}
              <ScrollReveal>
                <h2 className="text-2xl font-bold text-[#0f1e3c] mb-2">Key Contacts</h2>
                <div className="w-12 h-1 bg-orange-500 rounded-full mb-6" />
                <div className="grid sm:grid-cols-2 gap-5">
                  <ContactPersonCard
                    role={convener.role}
                    name={convener.name}
                    mobile={convener.mobile}
                    email={convener.email}
                    accent="orange"
                  />
                  <ContactPersonCard
                    role={coConvenerTreasurer.role}
                    name={coConvenerTreasurer.name}
                    mobile={coConvenerTreasurer.mobile}
                    email={coConvenerTreasurer.email}
                    accent="blue"
                  />
                  <ContactPersonCard
                    role={coConvener2.role}
                    name={coConvener2.name}
                    mobile={coConvener2.mobile}
                    email={coConvener2.email}
                    accent="green"
                  />
                  <ContactPersonCard
                    role={studentCoordinators.role}
                    name={studentCoordinators.names.join(' & ')}
                    mobile={studentCoordinators.mobile}
                    email={studentCoordinators.email}
                    accent="purple"
                  />
                </div>
              </ScrollReveal>

              {/* Address */}
              <ScrollReveal>
                <div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center flex-shrink-0">
                      <MapPin size={22} className="text-green-600" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#0f1e3c] text-base mb-3">Department Address</h3>
                      <address className="text-slate-600 text-sm not-italic leading-relaxed space-y-0.5">
                        <p className="font-semibold text-[#0f1e3c]">Department of Mining Engineering</p>
                        <p>Indian Institute of Technology</p>
                        <p>(Indian School of Mines), Dhanbad</p>
                        <p>Jharkhand, India – 826004</p>
                      </address>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <ScrollReveal>
                <div className="bg-[#0f1e3c] rounded-2xl p-6 text-white">
                  <h3 className="font-bold text-white text-base mb-5 border-b border-white/10 pb-4">
                    Conference Details
                  </h3>
                  <div className="space-y-5">
                    <div>
                      <p className="text-blue-300 text-xs font-semibold uppercase tracking-wide mb-1">Conference</p>
                      <p className="text-white font-semibold text-sm">Mining for Viksit Bharat 2047</p>
                      <p className="text-blue-200 text-xs">(MVB@2047)</p>
                    </div>
                    <div>
                      <p className="text-blue-300 text-xs font-semibold uppercase tracking-wide mb-1">Dates</p>
                      <p className="text-white font-semibold text-sm">3rd – 4th October 2026</p>
                    </div>
                    <div>
                      <p className="text-blue-300 text-xs font-semibold uppercase tracking-wide mb-1">Venue</p>
                      <p className="text-white font-semibold text-sm">GJLT, IIT (ISM) Dhanbad</p>
                      <p className="text-blue-200 text-xs">Jharkhand, India – 826004</p>
                    </div>
                    <div>
                      <p className="text-blue-300 text-xs font-semibold uppercase tracking-wide mb-1">Organized By</p>
                      <p className="text-white font-semibold text-sm">Department of Mining Engineering</p>
                      <p className="text-blue-200 text-xs">IIT (ISM) Dhanbad</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6">
                  <h3 className="font-bold text-orange-800 text-sm mb-4">Quick Links</h3>
                  <ul className="space-y-2.5" role="list">
                    {[
                      { label: 'Call for Papers', href: '/call-for-papers' },
                      { label: 'Registration', href: '/registration' },
                      { label: 'Important Dates', href: '/important-dates' },
                      { label: 'Sponsorship', href: '/exhibition-sponsorship' },
                      { label: 'Committee', href: '/committee' },
                      { label: 'Downloads', href: '/downloads' },
                    ].map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className="text-orange-700 hover:text-orange-900 text-sm font-medium hover:underline underline-offset-2"
                        >
                          → {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
                  <Calendar size={22} className="text-blue-600 mb-3" aria-hidden="true" />
                  <p className="font-bold text-[#0f1e3c] text-sm mb-2">Call for Abstracts</p>
                  <p className="text-2xl font-extrabold text-orange-500">1 June 2026</p>
                  <p className="text-slate-500 text-xs mt-1">Receipt of Full Papers: Upto 20 September 2026</p>
                  <a
                    href="/important-dates"
                    className="mt-3 inline-block text-blue-700 text-xs font-semibold hover:text-orange-600 transition-colors"
                  >
                    View all dates →
                  </a>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
