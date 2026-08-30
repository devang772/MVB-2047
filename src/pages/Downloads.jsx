import { Download, FileText, BookOpen, ClipboardList } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import ScrollReveal from '../components/ScrollReveal';
import brochurePdf from '../assets/MVB_2047_Brochure.pdf';

const downloads = [
  {
    id: 1,
    title: 'Conference Brochure',
    description: 'Official MVB 2047 conference brochure with complete information about themes, fees, and schedule.',
    icon: BookOpen,
    format: 'PDF',
    size: '628 KB',
    href: brochurePdf,
    download: 'MVB_2047_Brochure.pdf',
  },
  {
    id: 2,
    title: 'Abstract Template',
    description: 'MS Word template for preparing and submitting your conference abstract in the required format.',
    icon: FileText,
    format: 'DOCX',
    size: 'To be uploaded',
    href: '#',
  },
  {
    id: 3,
    title: 'Registration Form',
    description: 'Printable registration form for offline registration. Submit completed form via email.',
    icon: ClipboardList,
    format: 'PDF',
    size: 'To be uploaded',
    href: '#',
  },
];

export default function Downloads() {
  return (
    <main className="pt-16">
      {/* Page Header */}
      <div
        className="py-20 px-4"
        style={{ background: 'linear-gradient(135deg, #08112a 0%, #0f1e3c 60%, #162447 100%)' }}
      >
        <div className="max-w-7xl mx-auto">
          <p className="text-orange-400 text-sm font-semibold uppercase tracking-widest mb-3">Resources</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
            Downloads
          </h1>
          <div className="w-16 h-1 bg-orange-500 rounded-full mb-4" />
          <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
            Download official conference documents, templates, and forms.
          </p>
        </div>
      </div>

      <section className="py-20 bg-white" aria-label="Downloads">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeader
              label="Resources"
              title="Official Documents"
              subtitle="Download official conference materials for your use."
            />
          </ScrollReveal>

          <div className="space-y-5">
            {downloads.map((doc, i) => {
              const Icon = doc.icon;
              return (
                <ScrollReveal key={doc.id} delay={(i + 1) * 100}>
                  <div className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-6 flex items-start gap-5">
                    <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                      <Icon size={26} className="text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="font-bold text-[#0f1e3c] text-base">{doc.title}</h3>
                          <p className="text-slate-500 text-sm mt-1 leading-relaxed">{doc.description}</p>
                          <div className="flex items-center gap-3 mt-2">
                            <span className="text-xs px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 font-semibold border border-blue-100">
                              {doc.format}
                            </span>
                            <span className="text-slate-400 text-xs">{doc.size}</span>
                          </div>
                        </div>
                        <a
                          href={doc.href}
                          download={doc.download || undefined}
                          className="flex-shrink-0 flex items-center gap-2 bg-[#0f1e3c] hover:bg-blue-900 text-white font-semibold px-4 py-2.5 rounded-lg transition-colors text-sm whitespace-nowrap"
                          aria-label={`Download ${doc.title}`}
                        >
                          <Download size={15} />
                          Download
                        </a>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Contact note */}
          <ScrollReveal>
            <div className="mt-10 p-6 bg-blue-50 border border-blue-100 rounded-xl">
              <p className="text-blue-800 text-sm">
                <span className="font-bold">Note:</span> Files will be made available for download once uploaded by the organizers. For immediate queries, contact{' '}
                <a href="mailto:mvb_2047@iitism.ac.in" className="font-semibold underline hover:text-orange-700">
                  mvb_2047@iitism.ac.in
                </a>
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
