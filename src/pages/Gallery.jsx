import { Image, Camera } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import ScrollReveal from '../components/ScrollReveal';

export default function Gallery() {
  return (
    <main className="pt-16">
      {/* Page Header */}
      <div
        className="py-20 px-4"
        style={{ background: 'linear-gradient(135deg, #08112a 0%, #0f1e3c 60%, #162447 100%)' }}
      >
        <div className="max-w-7xl mx-auto">
          <p className="text-orange-400 text-sm font-semibold uppercase tracking-widest mb-3">Gallery</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
            Conference Gallery
          </h1>
          <div className="w-16 h-1 bg-orange-500 rounded-full mb-4" />
          <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
            Photos and highlights from MVB 2047 will be available here during and after the conference.
          </p>
        </div>
      </div>

      <section className="py-20 bg-white" aria-label="Gallery">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <SectionHeader
              label="Gallery"
              title="Photos Coming Soon"
              centered
            />
          </ScrollReveal>

          <ScrollReveal>
            <div className="py-20">
              <div className="w-24 h-24 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-6" aria-hidden="true">
                <Camera size={40} className="text-blue-400" />
              </div>
              <h2 className="text-xl font-bold text-[#0f1e3c] mb-3">Gallery will be updated after the conference</h2>
              <p className="text-slate-500 text-base max-w-md mx-auto leading-relaxed">
                Conference photos, highlights, and session recordings will be shared here following MVB 2047 on October 3–4, 2026.
              </p>
              <p className="text-slate-400 text-sm mt-4">
                For media inquiries, contact:{' '}
                <a href="mailto:mvb_2047@iitism.ac.in" className="text-orange-600 font-semibold hover:underline">
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
