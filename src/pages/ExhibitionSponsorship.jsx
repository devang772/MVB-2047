import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Store,
  Award,
  CreditCard,
  Calendar,
  Check,
  Building2,
  AlertTriangle,
  Megaphone,
  QrCode,
  CheckCircle,
  Copy,
  FileText,
} from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import SponsorCard from '../components/SponsorCard';
import ScrollReveal from '../components/ScrollReveal';
import CTASection from '../components/CTASection';
import qrCodeImg from '../assets/QR.png';
import {
  sponsorshipPackages,
  sponsorshipNote,
  expoDetails,
  souvenirAdvertisement,
  souvenirNote,
} from '../data/sponsorship';
import { bankDetails, registrationFees } from '../data/registration';

export default function ExhibitionSponsorship() {
  const [copiedField, setCopiedField] = useState(null);

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <main className="pt-16 bg-white">
      {/* ══════════════════════════════════════════════
          PAGE HEADER
      ══════════════════════════════════════════════ */}
      <div
        className="py-20 px-4"
        style={{ background: 'linear-gradient(135deg, #091122 0%, #0f1e3c 60%, #1a2942 100%)' }}
      >
        <div className="max-w-7xl mx-auto">
          <p className="text-amber-400 text-sm font-bold uppercase tracking-widest mb-3">Partners & EXPO</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
            Exhibition & <span className="text-amber-500">Sponsorship</span>
          </h1>
          <div className="w-16 h-1 bg-amber-500 rounded-full mb-4" />
          <p className="text-slate-300 text-lg max-w-2xl leading-relaxed font-medium">
            Partner with MVB@2047 as a sponsor or EXPO exhibitor to reach India's leading mining professionals.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">

        {/* ══════════════════════════════════════════════
            2. EXHIBITION STALLS / EXPO CARD (Ref Matched)
        ══════════════════════════════════════════════ */}
        <section aria-label="Exhibition Stalls EXPO">
          <ScrollReveal>
            <div className="bg-slate-100/70 border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-xs">

              {/* Section Header with Icon */}
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600">
                  <Store size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-extrabold text-slate-900">Exhibition Stalls (EXPO)</h2>
                  <p className="text-slate-500 text-xs mt-0.5 font-medium">
                    Showcase your products, instruments, models and software to industry leaders and decision makers.
                  </p>
                </div>
              </div>

              {/* Inner Split Card Container */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
                <div className="grid md:grid-cols-2 gap-8 items-stretch">

                  {/* Left Column: Stall Details */}
                  <div className="space-y-4 flex flex-col justify-between border-b md:border-b-0 md:border-r border-slate-100 pb-6 md:pb-0 md:pr-8">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-amber-600 mb-3 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-amber-500 inline-block" />
                        Stall Details & Features
                      </p>

                      <ul className="space-y-3 text-slate-700 text-sm font-medium">
                        <li className="flex items-start gap-2.5">
                          <Check size={16} className="text-amber-600 flex-shrink-0 mt-0.5" />
                          <span><strong>Stall Size:</strong> 10' × 10' × 10' (Display of Poster, Equipment Models, Instruments & Software)</span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <Check size={16} className="text-amber-600 flex-shrink-0 mt-0.5" />
                          <span><strong>Electricity Connections:</strong> Standard power supply provided per stall</span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <Check size={16} className="text-amber-600 flex-shrink-0 mt-0.5" />
                          <span><strong>Delegate Pass:</strong> Includes registration for 1 delegate free of cost</span>
                        </li>
                      </ul>
                    </div>

                    <div className="pt-3">
                      <Link
                        to="/registration"
                        className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-amber-600 text-white font-extrabold px-6 py-3 rounded-xl transition-colors text-xs uppercase tracking-wider shadow-xs"
                      >
                        Book EXPO Stall Now
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Exhibition Dates & Pricing */}
                  <div className="space-y-5 flex flex-col justify-between">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-amber-600 mb-3 flex items-center gap-1.5">
                        <Calendar size={14} />
                        Exhibition Schedule
                      </p>

                      <p className="text-slate-900 font-extrabold text-base mb-1">
                        3rd – 4th October 2026
                      </p>
                      <p className="text-slate-500 text-xs">
                        9:30 AM to 6:00 PM daily | Venue: GJLT, IIT (ISM) Dhanbad
                      </p>
                    </div>

                    {/* Pricing Highlight Box */}
                    <div className="bg-gradient-to-br from-amber-50 to-orange-50/70 border border-amber-200 p-6 rounded-2xl text-center space-y-1">
                      <p className="text-[11px] font-extrabold uppercase tracking-widest text-amber-800">
                        EXPO Stall Rate Per Stall
                      </p>
                      <div className="text-3xl sm:text-4xl font-black text-slate-900">
                        ₹ 1,00,000/-
                      </div>
                      <p className="text-xs font-bold text-amber-700">
                        + 5% GST Applicable
                      </p>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </ScrollReveal>
        </section>

        {/* ══════════════════════════════════════════════
            3. SPONSORSHIP PACKAGES
        ══════════════════════════════════════════════ */}
        <section aria-label="Sponsorship packages">
          <ScrollReveal>
            <div className="bg-slate-100/70 border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600">
                  <Award size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-extrabold text-slate-900">Sponsorship Packages</h2>
                  <p className="text-slate-500 text-xs mt-0.5 font-medium">
                    Gain visibility among mining industry professionals, researchers, and academia. ({sponsorshipNote})
                  </p>
                </div>
              </div>

              {/* Grid of 3 Sponsorship Cards (Centered) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto gap-6 items-stretch">
                {sponsorshipPackages.map((pkg, i) => (
                  <ScrollReveal key={pkg.id} delay={((i % 3) + 1) * 100} className="h-full">
                    <SponsorCard pkg={pkg} />
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* ══════════════════════════════════════════════
            4. 2-COLUMN ROW (Registration Fees + Souvenir Ads)
        ══════════════════════════════════════════════ */}
        <section aria-label="Registration fees and souvenir ads">
          <div className="grid lg:grid-cols-2 gap-8">

            {/* Left Card: Registration Fees */}
            <ScrollReveal>
              <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-lg bg-slate-900 text-amber-400 flex items-center justify-center font-bold">
                      <FileText size={18} />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-slate-900 text-lg">Registration Fees</h3>
                      <p className="text-slate-500 text-xs">Excluding GST@18%</p>
                    </div>
                  </div>

                  <div className="overflow-x-auto rounded-xl border border-slate-200">
                    <table className="w-full text-xs text-left">
                      <thead>
                        <tr className="bg-slate-900 text-white">
                          <th className="px-4 py-3 font-semibold">Category</th>
                          <th className="px-4 py-3 font-semibold text-right">INR</th>
                          <th className="px-4 py-3 font-semibold text-right">USD</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {registrationFees.map((fee) => (
                          <tr key={fee.id} className="hover:bg-slate-50">
                            <td className="px-4 py-3 font-bold text-slate-800">{fee.category}</td>
                            <td className="px-4 py-3 font-extrabold text-slate-900 text-right">₹{fee.indianFee.toLocaleString()}</td>
                            <td className="px-4 py-3 font-bold text-amber-600 text-right">${fee.foreignFee}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <p className="text-[11px] text-slate-400 mt-4">
                  * All delegate registrations include conference kit, proceedings, meals & session entry.
                </p>
              </div>
            </ScrollReveal>

            {/* Right Card: Souvenir Advertisement */}
            <ScrollReveal delay={100}>
              <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-lg bg-amber-500 text-white flex items-center justify-center font-bold">
                      <Megaphone size={18} />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-slate-900 text-lg">Souvenir Advertisement</h3>
                      <p className="text-slate-500 text-xs">{souvenirNote}</p>
                    </div>
                  </div>

                  <div className="overflow-x-auto rounded-xl border border-slate-200">
                    <table className="w-full text-xs text-left">
                      <thead>
                        <tr className="bg-slate-900 text-white">
                          <th className="px-4 py-3 font-semibold">Page Position</th>
                          <th className="px-4 py-3 font-semibold text-right">Amount (INR)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {souvenirAdvertisement.map((ad) => (
                          <tr key={ad.type} className="hover:bg-slate-50">
                            <td className="px-4 py-3 font-bold text-slate-800">{ad.type}</td>
                            <td className="px-4 py-3 font-extrabold text-amber-600 text-right">
                              ₹{ad.amount}/- <span className="text-[10px] text-slate-400 font-semibold">{ad.gst}</span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <p className="text-[11px] text-slate-400 mt-4">
                  * All advertisement artwork must be provided in high-resolution PDF/JPEG format.
                </p>
              </div>
            </ScrollReveal>

          </div>
        </section>

        {/* ══════════════════════════════════════════════
            5. BANK DETAILS FOR PAYMENT CARD (Ref Matched)
        ══════════════════════════════════════════════ */}
        <section aria-label="Bank details for payment">
          <ScrollReveal>
            <div className="bg-slate-100/70 border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-xs">

              {/* Section Header with Icon */}
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-11 h-11 rounded-xl bg-slate-900 text-amber-400 flex items-center justify-center font-bold">
                  <CreditCard size={22} />
                </div>
                <div>
                  <h2 className="text-2xl font-extrabold text-slate-900">Bank Details for Payment</h2>
                  <p className="text-slate-500 text-xs mt-0.5 font-medium">
                    Official account details for registration fees and sponsorship NEFT / RTGS transfers.
                  </p>
                </div>
              </div>

              {/* Main Card Container */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
                <div className="grid md:grid-cols-3 gap-6 items-center">

                  {/* Account Information Box */}
                  <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-3">
                    <p className="text-xs font-bold uppercase tracking-wider text-amber-600 flex items-center justify-between">
                      <span>Account Information</span>
                      <Building2 size={14} />
                    </p>

                    <div>
                      <p className="text-[11px] text-slate-400 font-semibold uppercase">Account Name</p>
                      <p className="font-extrabold text-slate-900 text-sm mt-0.5">{bankDetails.accountName}</p>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[11px] text-slate-400 font-semibold uppercase">A/C No.</p>
                        <p className="font-black text-amber-600 text-base mt-0.5">{bankDetails.accountNumber}</p>
                      </div>
                      <button
                        onClick={() => handleCopy(bankDetails.accountNumber, 'acc')}
                        className="p-1.5 text-slate-400 hover:text-amber-600 transition-colors"
                        title="Copy Account Number"
                      >
                        {copiedField === 'acc' ? <CheckCircle size={15} className="text-green-600" /> : <Copy size={15} />}
                      </button>
                    </div>

                    <div>
                      <p className="text-[11px] text-slate-400 font-semibold uppercase">GSTIN</p>
                      <p className="font-bold text-slate-800 text-xs mt-0.5">{bankDetails.gstin}</p>
                    </div>
                  </div>

                  {/* Bank Information Box */}
                  <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-3">
                    <p className="text-xs font-bold uppercase tracking-wider text-amber-600 flex items-center justify-between">
                      <span>Bank Information</span>
                      <Building2 size={14} />
                    </p>

                    <div>
                      <p className="text-[11px] text-slate-400 font-semibold uppercase">Bank Name</p>
                      <p className="font-extrabold text-slate-900 text-sm mt-0.5">{bankDetails.bankName}</p>
                      <p className="text-xs text-slate-500">{bankDetails.branchName}</p>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[11px] text-slate-400 font-semibold uppercase">IFSC Code</p>
                        <p className="font-extrabold text-slate-900 text-sm mt-0.5">{bankDetails.ifsc}</p>
                      </div>
                      <button
                        onClick={() => handleCopy(bankDetails.ifsc, 'ifsc')}
                        className="p-1.5 text-slate-400 hover:text-amber-600 transition-colors"
                        title="Copy IFSC"
                      >
                        {copiedField === 'ifsc' ? <CheckCircle size={15} className="text-green-600" /> : <Copy size={15} />}
                      </button>
                    </div>

                    <div>
                      <p className="text-[11px] text-slate-400 font-semibold uppercase">MICR Code</p>
                      <p className="font-bold text-slate-800 text-xs mt-0.5">{bankDetails.micr}</p>
                    </div>
                  </div>

                  {/* QR Code Card (Right side) */}
                  <div className="bg-slate-900 text-white rounded-2xl p-6 text-center border border-slate-800 flex flex-col items-center justify-center space-y-3 shadow-md">
                    <div className="w-10 h-10 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
                      <QrCode size={20} />
                    </div>

                    <div>
                      <p className="text-xs font-black uppercase tracking-widest text-amber-400">
                        SCAN & PAY
                      </p>
                      <p className="text-[10px] text-slate-400">IIT ISM CEP ACCOUNT</p>
                    </div>

                    <div className="w-36 h-36 bg-white rounded-xl p-1.5 flex items-center justify-center shadow-inner overflow-hidden border border-white">
                      <img
                        src={qrCodeImg}
                        alt="IIT ISM CEP ACCOUNT Canara Bank QR Code"
                        className="w-full h-full object-contain"
                      />
                    </div>

                    <span className="inline-block text-[10px] font-extrabold text-slate-900 bg-amber-400 px-3 py-1 rounded-full uppercase tracking-wider">
                      BHIM UPI
                    </span>
                  </div>

                </div>
              </div>

            </div>
          </ScrollReveal>
        </section>

      </div>

      {/* <CTASection
        title="Partner with MVB 2047"
        subtitle="Join hands with India's premier mining conference as a sponsor or EXPO exhibitor."
        primaryLabel="Contact Organizers"
        primaryTo="/contact"
        secondaryLabel="Registration Info"
        secondaryTo="/registration"
      /> */}
    </main>
  );
}
