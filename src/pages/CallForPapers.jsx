import { Mail, FileText, Download, AlertCircle, CheckCircle, Calendar } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import ScrollReveal from '../components/ScrollReveal';
import CTASection from '../components/CTASection';

const formatGuidelines = [
  { element: 'Title', spec: 'Times New Roman, 12pt, Bold' },
  { element: 'Author', spec: 'Times New Roman, 10.5pt' },
  { element: 'Affiliation', spec: 'Times New Roman, 10pt, Italic' },
  { element: 'Headings', spec: 'Times New Roman, 12pt, Bold' },
  { element: 'Sub-Headings', spec: 'Times New Roman, 12pt, Bold' },
  { element: 'Paragraph text', spec: 'Times New Roman, 10pt' },
  { element: 'Figures', spec: 'Figure 1, Figure 2, etc.' },
  { element: 'Tables', spec: 'Table 1, Table 2, etc.' },
  { element: 'References', spec: 'Chicago style, arranged alphabetically, with heading references' },
];

const instructions = [
  'Submit your original technical documents in MS Word format via email attachment.',
  'Figures and tables should be placed at their references within the text.',
  'References should be cited in Chicago style only in the main text.',
  'Papers must be on the conference themes and submitted by 15 August 2026.',
  'All received papers will be peer-reviewed.',
  'It is intended to publish the proceedings of the conference.',
];

const getGmailUrl = (email, subject = 'Paper / Abstract Submission — MVB@2047') => {
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}`;
};

export default function CallForPapers() {
  return (
    <main className="pt-16">
      {/* Page Header */}
      <div
        className="py-20 px-4"
        style={{ background: 'linear-gradient(135deg, #08112a 0%, #0f1e3c 60%, #162447 100%)' }}
      >
        <div className="max-w-7xl mx-auto">
          <p className="text-orange-400 text-sm font-semibold uppercase tracking-widest mb-3">Submissions</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
            Call for Papers
          </h1>
          <div className="w-16 h-1 bg-orange-500 rounded-full mb-4" />
          <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
            Technical papers on conference themes are invited for oral presentation and publication in the conference proceedings.
          </p>
        </div>
      </div>

      <section className="py-20 bg-white" aria-label="Call for papers details">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-10">
              {/* Official Description */}
              <ScrollReveal>
                <div>
                  <SectionHeader
                    label="Call for Papers"
                    title="Invitation for Paper Submission"
                  />
                  <div className="prose text-slate-600 text-[15px] leading-relaxed space-y-4">
                    <p>
                      The technical papers on the Conference theme are invited for oral presentation. The received papers will be peer-reviewed. It is intended to publish the proceedings of the Conference.
                    </p>
                    <p>
                      Contributors must submit their original technical documents in the desired format in MS Word through email attachment <strong>on or before 15 August 2026</strong>.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Submission Email */}
              <ScrollReveal>
                <div className="bg-[#0f1e3c] rounded-2xl p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                      <Mail size={24} className="text-orange-400" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-orange-400 text-xs font-bold uppercase tracking-widest mb-1">
                        E-mail ID for all correspondences and sending papers (Click to Compose in Gmail)
                      </p>
                      <div className="flex flex-wrap items-center gap-2 text-xl sm:text-2xl font-bold text-white">
                        <a
                          href={getGmailUrl('mvb_2047@iitism.ac.in')}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-orange-400 transition-colors break-all underline decoration-orange-500/50 underline-offset-4"
                          title="Click to compose in Gmail"
                        >
                          mvb_2047@iitism.ac.in ↗
                        </a>
                        <span className="text-orange-400 font-normal">/</span>
                        <a
                          href={getGmailUrl('rksinha@iitism.ac.in')}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-orange-400 transition-colors break-all underline decoration-orange-500/50 underline-offset-4"
                          title="Click to compose in Gmail"
                        >
                          rksinha@iitism.ac.in ↗
                        </a>
                      </div>
                      <p className="text-blue-200 text-sm mt-2">
                        Click any email above to directly open Gmail compose window pre-filled for paper & abstract submissions.
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Format Guidelines */}
              <ScrollReveal>
                <div>
                  <h2 className="text-2xl font-bold text-[#0f1e3c] mb-2">Format for Preparing Papers</h2>
                  <div className="w-12 h-1 bg-orange-500 rounded-full mb-6" />

                  <div className="overflow-x-auto rounded-xl border border-gray-200">
                    <table className="w-full text-sm" role="table" aria-label="Paper format guidelines">
                      <thead>
                        <tr className="bg-[#0f1e3c] text-white">
                          <th className="text-left px-5 py-3 font-semibold" scope="col">Element</th>
                          <th className="text-left px-5 py-3 font-semibold" scope="col">Specification</th>
                        </tr>
                      </thead>
                      <tbody>
                        {formatGuidelines.map((row, i) => (
                          <tr key={row.element} className={`border-t border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                            <td className="px-5 py-3 font-semibold text-[#0f1e3c]">{row.element}</td>
                            <td className="px-5 py-3 text-slate-600">{row.spec}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </ScrollReveal>

            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Deadline card */}
              <ScrollReveal>
                <div className="bg-orange-50 border-2 border-orange-200 rounded-2xl p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <AlertCircle size={20} className="text-orange-600" aria-hidden="true" />
                    <h3 className="font-bold text-orange-800 text-sm uppercase tracking-wide">Key Deadline</h3>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <p className="text-slate-600 text-xs mb-1">Receipt of Abstracts</p>
                      <p className="font-bold text-[#0f1e3c] text-lg">Upto 10 September 2026</p>
                    </div>
                    <div className="border-t border-orange-200 pt-4">
                      <p className="text-slate-600 text-xs mb-1">Receipt of Full Papers</p>
                      <p className="font-bold text-[#0f1e3c] text-lg">Upto 20 September 2026</p>
                    </div>
                    <div className="border-t border-orange-200 pt-4">
                      <p className="text-slate-600 text-xs mb-1">Submission Emails (Click for Gmail)</p>
                      <div className="space-y-1">
                        <a
                          href={getGmailUrl('mvb_2047@iitism.ac.in')}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-orange-700 font-semibold text-sm break-all hover:underline"
                        >
                          mvb_2047@iitism.ac.in ↗
                        </a>
                        <a
                          href={getGmailUrl('rksinha@iitism.ac.in')}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-orange-700 font-semibold text-sm break-all hover:underline"
                        >
                          rksinha@iitism.ac.in ↗
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Download CTA */}
              {/* <ScrollReveal>
                <div className="bg-[#0f1e3c] rounded-2xl p-6">
                  <FileText size={28} className="text-orange-400 mb-3" aria-hidden="true" />
                  <h3 className="text-white font-bold text-base mb-2">Abstract Template</h3>
                  <p className="text-blue-200 text-sm mb-4">Download the official abstract template in MS Word format.</p>
                  <a
                    href="#"
                    className="flex items-center gap-2 w-full justify-center bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-3 rounded-lg transition-colors text-sm"
                    aria-label="Download Abstract Template"
                  >
                    <Download size={16} />
                    Download Template
                  </a>
                </div>
              </ScrollReveal> */}

              {/* Submit via Email */}
              <ScrollReveal>
                <div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-6 space-y-3">
                  <Mail size={28} className="text-blue-600" aria-hidden="true" />
                  <div>
                    <h3 className="text-[#0f1e3c] font-bold text-base">Submit Your Paper</h3>
                    <p className="text-slate-500 text-sm mt-1">Send your paper as an MS Word attachment via email.</p>
                  </div>
                  <a
                    href={getGmailUrl('mvb_2047@iitism.ac.in', 'Paper Submission — MVB@2047')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 w-full justify-center bg-orange-600 hover:bg-orange-700 text-white font-bold px-4 py-3 rounded-xl transition-all shadow-md text-sm"
                    aria-label="Submit paper via Gmail"
                  >
                    <Mail size={16} />
                    Submit via Gmail ↗
                  </a>
                  <a
                    href="mailto:mvb_2047@iitism.ac.in?subject=Paper Submission — MVB@2047"
                    className="flex items-center gap-1 w-full justify-center text-slate-500 hover:text-slate-700 font-medium text-xs pt-1 transition-colors"
                  >
                    Or use default Mail App
                  </a>
                </div>
              </ScrollReveal>

              {/* Conference themes note */}
              <ScrollReveal>
                <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
                  <h3 className="text-[#0f1e3c] font-bold text-sm mb-3">Papers Invited on Themes</h3>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {[
                      'Sustainable & Responsible Mining',
                      'Next-Gen Technologies & Automation',
                      'Critical & Strategic Resources',
                      'Safety, Health & Human-Centric Mining',
                      'Policy, Governance & Future-Ready Ecosystems',
                    ].map((t) => (
                      <li key={t} className="flex items-start gap-2">
                        <div className="w-1 h-1 rounded-full bg-orange-500 mt-1.5 flex-shrink-0" aria-hidden="true" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Instructions — Full Width Centered Below Grid */}
          <ScrollReveal delay={100}>
            <div className="mt-16 max-w-4xl mx-auto">
              <div className="text-center">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f1e3c] mb-2">Important Instructions</h2>
                <div className="w-14 h-1 bg-orange-500 rounded-full mb-8 mx-auto" />
              </div>

              <ul className="space-y-3.5" role="list">
                {instructions.map((instr, i) => (
                  <li key={i} className="flex items-center  gap-3 p-4 sm:p-5 rounded-2xl bg-green-50/80 border border-green-100/90 shadow-xs hover:shadow-sm transition-shadow">
                    <CheckCircle size={20} className="text-green-600 flex-shrink-0" aria-hidden="true" />
                    <span className="text-slate-700 text-sm sm:text-base leading-relaxed font-medium">{instr}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTASection
        title="Ready to Submit?"
        subtitle="Send your paper to mvb_2047@iitism.ac.in / rksinha@iitism.ac.in before the deadline."
        primaryLabel="View Important Dates"
        primaryTo="/important-dates"
        secondaryLabel="Explore Themes"
        secondaryTo="/themes"
      />
    </main>
  );
}
