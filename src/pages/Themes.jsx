import SectionHeader from '../components/SectionHeader';
import ThemeCard from '../components/ThemeCard';
import ScrollReveal from '../components/ScrollReveal';
import CTASection from '../components/CTASection';
import { themes } from '../data/themes';

export default function Themes() {
  return (
    <main className="pt-16">
      {/* Page Header */}
      <div
        className="py-20 px-4"
        style={{ background: 'linear-gradient(135deg, #08112a 0%, #0f1e3c 60%, #162447 100%)' }}
      >
        <div className="max-w-7xl mx-auto">
          <p className="text-orange-400 text-sm font-semibold uppercase tracking-widest mb-3">Conference Themes</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
            Themes of the Conference
          </h1>
          <div className="w-16 h-1 bg-orange-500 rounded-full mb-4" />
          <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
            Five thematic pillars covering the full spectrum of India's mining transformation towards Viksit Bharat 2047.
          </p>
        </div>
      </div>

      {/* Themes List */}
      <section className="py-20 bg-white" aria-label="All conference themes">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeader
              label="Themes"
              title="All Conference Themes"
              subtitle="Each theme represents a critical pillar in building India's future-ready, sustainable, and technologically advanced mining sector."
              centered
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
            {themes.map((theme, i) => (
              <ScrollReveal key={theme.id} delay={((i % 2) + 1) * 100}>
                <ThemeCard theme={theme} />
              </ScrollReveal>
            ))}
          </div>

          {/* Note */}
          <ScrollReveal>
            <div className="mt-10 p-5 rounded-xl bg-blue-50 border border-blue-100">
              <p className="text-blue-800 text-sm">
                <span className="font-bold">Note:</span> Technical papers on all conference themes are invited for oral presentation. Please refer to the{' '}
                <a href="/call-for-papers" className="text-blue-700 font-semibold hover:text-orange-500 underline underline-offset-2">
                  Call for Papers
                </a>{' '}
                page for submission guidelines and deadlines.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTASection
        title="Submit Your Paper"
        subtitle="Share your research on any of these themes. Submission deadline: 15 August 2026."
        primaryLabel="Call for Papers"
        primaryTo="/call-for-papers"
        secondaryLabel="Important Dates"
        secondaryTo="/important-dates"
      />
    </main>
  );
}
