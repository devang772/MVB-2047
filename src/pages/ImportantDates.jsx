import SectionHeader from '../components/SectionHeader';
import Timeline from '../components/Timeline';
import ScrollReveal from '../components/ScrollReveal';
import CTASection from '../components/CTASection';
import { importantDates } from '../data/dates';

export default function ImportantDates() {
  return (
    <main className="pt-16">
      {/* Page Header */}
      <div
        className="py-20 px-4"
        style={{ background: 'linear-gradient(135deg, #08112a 0%, #0f1e3c 60%, #162447 100%)' }}
      >
        <div className="max-w-7xl mx-auto">
          <p className="text-orange-400 text-sm font-semibold uppercase tracking-widest mb-3">Deadlines</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
            Important Dates
          </h1>
          <div className="w-16 h-1 bg-orange-500 rounded-full mb-4" />
          <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
            All key deadlines for abstract submission, full paper submission, and conference registration.
          </p>
        </div>
      </div>

      <section className="py-20 bg-white" aria-label="Important dates timeline">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeader
              label="Key Dates"
              title="Conference Timeline"
              subtitle="Source: Official MVB@2047 Conference Brochure — all dates are as published."
            />
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <Timeline dates={importantDates} />
          </ScrollReveal>

          {/* Note box */}
          <ScrollReveal>
            <div className="mt-12 p-6 bg-amber-50 border border-amber-200 rounded-xl">
              <p className="text-amber-800 text-sm">
                <span className="font-bold">Important:</span> All dates are as per the official conference brochure. Contributors must submit their papers on or before the stated deadlines. For queries, contact{' '}
                <a href="mailto:mvb_2047@iitism.ac.in" className="font-semibold underline underline-offset-2 hover:text-orange-700">
                  mvb_2047@iitism.ac.in
                </a>
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTASection
        title="Ready to Submit?"
        subtitle="Ensure you meet all deadlines. Start preparing your abstract and full paper today."
        primaryLabel="Call for Papers"
        primaryTo="/call-for-papers"
        secondaryLabel="Register Now"
        secondaryTo="/registration"
      />
    </main>
  );
}
