import { useState } from 'react';
import { Mail, Phone, Globe, Users, Award, Star, ExternalLink } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import ScrollReveal from '../components/ScrollReveal';
import CTASection from '../components/CTASection';
import {
  committeeContacts,
  organizingCommittee,
  internationalAdvisoryCommittee,
  members,
} from '../data/committee';

/* ── helpers ── */
function getInitials(name) {
  return name
    .split(' ')
    .filter((w) => w.length > 1)
    .slice(-2)
    .map((w) => w[0].toUpperCase())
    .join('');
}

const avatarPalette = [
  'bg-blue-700', 'bg-indigo-700', 'bg-teal-700', 'bg-green-700',
  'bg-purple-700', 'bg-rose-700', 'bg-amber-700', 'bg-cyan-700',
  'bg-sky-700', 'bg-emerald-700',
];

function avatar(name) {
  const idx = name.charCodeAt(0) % avatarPalette.length;
  return avatarPalette[idx];
}

/* ── sub-components ── */
function ContactCard({ contact, accent = 'orange' }) {
  const badgeStyles = {
    orange: 'bg-orange-500 text-white',
    blue: 'bg-[#0f1e3c] text-white',
    green: 'bg-green-700 text-white',
    purple: 'bg-purple-700 text-white',
  };
  const borderStyles = {
    orange: 'border-orange-200/80 hover:border-orange-500',
    blue: 'border-blue-200/80 hover:border-blue-600',
    green: 'border-green-200/80 hover:border-green-600',
    purple: 'border-purple-200/80 hover:border-purple-600',
  };

  return (
    <div className={`bg-white rounded-2xl border ${borderStyles[accent] || borderStyles.blue} shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full group`}>
      {/* Top: Image Section with Padding Around */}
      <div className="p-3 bg-slate-50/80 border-b border-slate-100 flex items-center justify-center">
        <div className="w-full h-44 sm:h-48 rounded-xl overflow-hidden bg-slate-100 flex items-center justify-center relative shadow-inner p-1.5">
          {contact.image ? (
            <img
              src={contact.image}
              alt={contact.name}
              className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-16 h-16 rounded-xl bg-purple-100 flex items-center justify-center text-purple-700 font-black text-2xl shadow-sm">
              {getInitials(contact.name)}
            </div>
          )}
        </div>
      </div>

      {/* Bottom: About & Info Section */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3 text-left">
        <div className="space-y-3">
          <div className="flex items-center justify-between gap-2">
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${badgeStyles[accent] || badgeStyles.blue}`}>
              {contact.role}
            </span>
          </div>

          <div>
            {contact.profileUrl ? (
              <a
                href={contact.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-extrabold text-slate-900 text-lg hover:text-amber-600 transition-colors group-hover:text-amber-600"
                title={`View ${contact.name}'s official profile`}
              >
                {contact.name}
                <ExternalLink size={15} className="text-slate-400 group-hover:text-amber-600 flex-shrink-0" />
              </a>
            ) : (
              <h3 className="font-extrabold text-slate-900 text-lg leading-tight">
                {contact.name}
              </h3>
            )}
          </div>

          <div className="text-slate-600 text-xs sm:text-sm leading-snug space-y-0.5">
            <p className="font-medium text-slate-700">{contact.department}</p>
            <p className="text-slate-500">{contact.institute}</p>
          </div>
        </div>

        <div className="pt-3 border-t border-slate-100 space-y-2 text-xs sm:text-sm">
          {contact.mobile && (
            <a
              href={`tel:${contact.mobile}`}
              className="flex items-center gap-2 text-slate-800 hover:text-orange-600 transition-colors font-semibold"
            >
              <Phone size={14} className="text-orange-500 flex-shrink-0" aria-hidden="true" />
              {contact.mobile}
            </a>
          )}
          {contact.email && (
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center gap-2 text-slate-800 hover:text-orange-600 transition-colors font-semibold break-all"
            >
              <Mail size={14} className="text-orange-500 flex-shrink-0" aria-hidden="true" />
              {contact.email}
            </a>
          )}

          {contact.profileUrl && (
            <div className="pt-2">
              <a
                href={contact.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-bold text-amber-700 hover:text-amber-600 transition-colors"
              >
                View Official Profile →
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function OrgCard({ role, name, designation, institution, image, profileUrl, accent = 'orange' }) {
  const colors = {
    orange: 'border-orange-200 bg-orange-50 hover:border-orange-400 hover:shadow-md',
    blue: 'border-blue-200 bg-blue-50 hover:border-blue-400 hover:shadow-md',
    navy: 'border-slate-200 bg-slate-50 hover:border-slate-400 hover:shadow-md',
    green: 'border-green-200 bg-green-50 hover:border-green-400 hover:shadow-md',
  };
  const labelColors = {
    orange: 'text-orange-600',
    blue: 'text-blue-600',
    navy: 'text-slate-600',
    green: 'text-green-600',
  };
  return (
    <a
      href={profileUrl || 'https://www.iitism.ac.in'}
      target="_blank"
      rel="noopener noreferrer"
      className={`rounded-xl border p-5 flex items-center gap-4 transition-all duration-200 group block ${colors[accent] || colors.blue}`}
      title={`View ${name}'s official profile`}
    >
      {image && (
        <img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-xs flex-shrink-0 group-hover:scale-105 transition-transform"
        />
      )}
      <div className="min-w-0 flex-1">
        <p className={`text-xs font-bold uppercase tracking-widest mb-1 ${labelColors[accent] || labelColors.blue}`}>{role}</p>
        <p className="font-bold text-[#0f1e3c] text-sm leading-snug group-hover:text-amber-600 transition-colors flex items-center gap-1">
          {name}
          <Globe size={12} className="text-slate-400 group-hover:text-amber-600 flex-shrink-0" />
        </p>
        {designation && <p className="text-slate-600 text-xs mt-0.5 leading-snug">{designation}</p>}
        {institution && <p className="text-slate-500 text-xs mt-0.5 leading-snug">{institution}</p>}
      </div>
    </a>
  );
}

function MemberCard({ member }) {
  return (
    <div className="flex items-center gap-3 p-3 rounded-lg border border-gray-100 bg-white hover:border-blue-200 hover:shadow-sm transition-all">
      <div
        className={`w-10 h-10 rounded-full ${avatar(member.name)} text-white font-bold text-xs flex items-center justify-center flex-shrink-0`}
        aria-hidden="true"
      >
        {getInitials(member.name)}
      </div>
      <div className="min-w-0">
        <p className="font-semibold text-[#0f1e3c] text-xs leading-snug truncate">{member.name}</p>
        <p className="text-slate-500 text-[11px]">{member.dept} · {member.institution}</p>
      </div>
    </div>
  );
}

function AdvisoryCard({ person }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 hover:border-amber-500 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full group">
      {/* Top: Image Container with Padding (Matching Key Contacts Reference Card) */}
      <div className="p-3 bg-slate-50/80 border-b border-slate-100 flex items-center justify-center">
        <div className="w-full h-44 sm:h-48 rounded-xl overflow-hidden bg-slate-100 flex items-center justify-center relative shadow-inner p-1.5">
          {person.image ? (
            <img
              src={person.image}
              alt={person.name}
              className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-16 h-16 rounded-xl bg-[#0f1e3c] text-white font-extrabold text-2xl flex items-center justify-center shadow-sm">
              {getInitials(person.name)}
            </div>
          )}
        </div>
      </div>

      {/* Bottom: Info & Details Section */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4 text-left">
        <div className="space-y-3">
          {person.country && (
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full bg-blue-50 text-blue-800 border border-blue-100">
                <Globe size={12} className="text-blue-600 flex-shrink-0" />
                {person.country}
              </span>
            </div>
          )}

          <div className="space-y-1">
            <h4 className="font-extrabold text-slate-900 text-base sm:text-lg leading-tight group-hover:text-amber-600 transition-colors">
              {person.name}
            </h4>
            {person.designation && (
              <p className="text-amber-700 text-xs font-semibold leading-snug">
                {person.designation}
              </p>
            )}
            {person.institution && (
              <p className="text-slate-500 text-xs sm:text-sm font-medium leading-snug">
                {person.institution}
              </p>
            )}
          </div>

          {person.about && (
            <div className="pt-2 border-t border-slate-100">
              <p className={`text-slate-600 text-xs leading-relaxed text-justify transition-all ${expanded ? '' : 'line-clamp-3'}`}>
                {person.about}
              </p>
            </div>
          )}
        </div>

        {person.about && (
          <div className="pt-2">
            <button
              onClick={() => setExpanded(!expanded)}
              className="inline-flex items-center gap-1 text-xs font-bold text-amber-700 hover:text-amber-600 transition-colors focus:outline-none cursor-pointer"
            >
              {expanded ? 'Show Less ↑' : 'Read More →'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Committee() {
  const { convener, coConvenerTreasurer, coConvener2, studentCoordinators } = committeeContacts;

  return (
    <main className="pt-16">
      {/* Page Header */}
      <div
        className="py-20 px-4"
        style={{ background: 'linear-gradient(135deg, #08112a 0%, #0f1e3c 60%, #162447 100%)' }}
      >
        <div className="max-w-7xl mx-auto">
          <p className="text-orange-400 text-sm font-semibold uppercase tracking-widest mb-3">People</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
            Committee
          </h1>
          <div className="w-16 h-1 bg-orange-500 rounded-full mb-4" />
          <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
            The organizing and advisory committee of MVB@2047.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-20">

        {/* ── CORRESPONDENCE ── */}
        <section aria-label="Correspondence contacts">
          <ScrollReveal>
            <SectionHeader label="Correspondence" title="Key Contacts" />
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Convener */}
            <ScrollReveal>
              <ContactCard contact={convener} accent="orange" />
            </ScrollReveal>

            {/* Co-Convener & Treasurer */}
            <ScrollReveal delay={100}>
              <ContactCard contact={coConvenerTreasurer} accent="blue" />
            </ScrollReveal>

            {/* Co-Convener 2 */}
            <ScrollReveal delay={100}>
              <ContactCard contact={coConvener2} accent="green" />
            </ScrollReveal>

            {/* Student Coordinator */}
            <ScrollReveal delay={200}>
              <ContactCard contact={studentCoordinators} accent="purple" />
            </ScrollReveal>
          </div>

          {/* Conference Email */}
          <ScrollReveal>
            <div className="mt-6 bg-[#0f1e3c] rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-5">
              <div className="w-14 h-14 rounded-xl bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                <Mail size={26} className="text-orange-400" aria-hidden="true" />
              </div>
              <div>
                <p className="text-orange-400 text-xs font-bold uppercase tracking-widest mb-1">Conference Email — All Correspondence</p>
                <a
                  href="mailto:mvb_2047@iitism.ac.in"
                  className="text-xl sm:text-2xl font-bold text-white hover:text-orange-400 transition-colors"
                >
                  mvb_2047@iitism.ac.in
                </a>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* ── ORGANIZING COMMITTEE ── */}
        <section aria-label="Organizing committee">
          <ScrollReveal>
            <SectionHeader label="Organizing" title="Organizing Committee" />
          </ScrollReveal>

          <div className="space-y-8">
            {/* Patron hierarchy */}
            <ScrollReveal>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <OrgCard
                  role={organizingCommittee.chiefPatron.role}
                  name={organizingCommittee.chiefPatron.name}
                  designation={organizingCommittee.chiefPatron.designation}
                  institution={organizingCommittee.chiefPatron.institution}
                  image={organizingCommittee.chiefPatron.image}
                  profileUrl={organizingCommittee.chiefPatron.profileUrl}
                  accent="orange"
                />
                <OrgCard
                  role={organizingCommittee.patron.role}
                  name={organizingCommittee.patron.name}
                  designation={organizingCommittee.patron.designation}
                  institution={organizingCommittee.patron.institution}
                  image={organizingCommittee.patron.image}
                  profileUrl={organizingCommittee.patron.profileUrl}
                  accent="blue"
                />
                <OrgCard
                  role={organizingCommittee.coPatron.role}
                  name={organizingCommittee.coPatron.name}
                  designation={organizingCommittee.coPatron.designation}
                  institution={organizingCommittee.coPatron.institution}
                  image={organizingCommittee.coPatron.image}
                  profileUrl={organizingCommittee.coPatron.profileUrl}
                  accent="navy"
                />
                <OrgCard
                  role={organizingCommittee.chairman.role}
                  name={organizingCommittee.chairman.name}
                  designation={organizingCommittee.chairman.designation}
                  institution={organizingCommittee.chairman.institution}
                  image={organizingCommittee.chairman.image}
                  profileUrl={organizingCommittee.chairman.profileUrl}
                  accent="green"
                />
              </div>
            </ScrollReveal>

            {/* Core committee */}
            <ScrollReveal delay={100}>
              <div className="bg-[#f0f6ff] rounded-2xl border border-blue-100 p-6">
                <p className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-5">Core Committee</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <p className="text-xs font-bold text-orange-600 uppercase tracking-wide mb-2">Convener</p>
                    <p className="font-semibold text-[#0f1e3c] text-sm">{organizingCommittee.convener.name}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-blue-600 uppercase tracking-wide mb-2">Co-Conveners</p>
                    {organizingCommittee.coConveners.map((c) => (
                      <p key={c.name} className="font-semibold text-[#0f1e3c] text-sm">{c.name}</p>
                    ))}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-green-600 uppercase tracking-wide mb-2">Treasurer</p>
                    <p className="font-semibold text-[#0f1e3c] text-sm">{organizingCommittee.treasurer.name}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── INTERNATIONAL ADVISORY COMMITTEE ── */}
        <section aria-label="International advisory committee">
          <ScrollReveal>
            <SectionHeader
              label="Advisory"
              title="International Advisory Committee"
              subtitle={`${internationalAdvisoryCommittee.length} distinguished international experts`}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
              {internationalAdvisoryCommittee.map((person) => (
                <AdvisoryCard key={person.name} person={person} />
              ))}
            </div>
          </ScrollReveal>
        </section>

      </div>

      {/* <CTASection
        title="Get in Touch"
        subtitle="Contact the organizing secretariat at mvb_2047@iitism.ac.in for all queries."
        primaryLabel="Contact Us"
        primaryTo="/contact"
        secondaryLabel="Register Now"
        secondaryTo="/registration"
      /> */}
    </main>
  );
}
