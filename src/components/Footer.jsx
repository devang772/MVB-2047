import { Link } from 'react-router-dom';
import { Mail, MapPin, Download, Phone, Globe, ExternalLink } from 'lucide-react';
import ismLogo from '../assets/ism-logo-white.png';
import centenaryLogo from '../assets/centenry_logo.png';
import brochurePdf from '../assets/MVB_2047_Brochure.pdf';
import { committeeContacts } from '../data/committee';

const makeGmailUrl = (email, subject = 'MVB@2047 Inquiry') => {
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}`;
};

export default function Footer() {
  const { convener, coConvenerTreasurer, coConvener2 } = committeeContacts;

  return (
    <footer
      id="footer"
      className="bg-[#091122] text-white border-t border-slate-800/80 pt-16 pb-8"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-14 border-b border-slate-800/80">

          {/* ── Column 1: Branding & Brochure ── */}
          <div className="space-y-4">
            <h3 className="text-xl font-black tracking-tight text-white">
              MVB <span className="text-orange-500">@2047</span>
            </h3>

            {/* Official Logos Side-by-Side */}
            <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10 w-fit">
              <img
                src={ismLogo}
                alt="IIT (ISM) Dhanbad Logo"
                className="h-16 w-auto object-contain brightness-0 invert"
              />
              <div className="w-px h-12 bg-white/20" />
              <img
                src={centenaryLogo}
                alt="Centenary Celebration Logo"
                className="h-16 w-auto object-contain"
              />
            </div>

            <p className="text-slate-300 text-xs leading-relaxed">
              International Conference on "Mining for Viksit Bharat 2047"
            </p>

            <div className="text-slate-400 text-xs space-y-1">
              <p>3–4 October 2026</p>
              <p>Venue: GJLT, IIT (ISM) Dhanbad</p>
            </div>

            <a
              href={brochurePdf}
              download="MVB_2047_Brochure.pdf"
              className="inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-white text-slate-900 font-bold px-5 py-2.5 rounded-lg shadow-sm w-full text-xs uppercase tracking-wider transition-colors mt-2"
              aria-label="Download Brochure"
            >
              <Download size={15} />
              Download Brochure
            </a>
          </div>

          {/* ── Column 2: Contact Us ── */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-2">
              Contact Us
            </h4>

            <div className="space-y-3 text-xs">
              {/* Conference Email */}
              <div className="flex items-start gap-2.5">
                <Mail size={15} className="text-orange-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-slate-400 text-[11px] uppercase tracking-wider">Conference Email</p>
                  <a
                    href={makeGmailUrl('mvb_2047@iitism.ac.in', 'MVB@2047 Conference Inquiry')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-200 hover:text-orange-400 transition-colors font-medium break-all underline decoration-orange-500/40 underline-offset-2"
                    title="Click to compose in Gmail"
                  >
                    mvb_2047@iitism.ac.in ↗
                  </a>
                </div>
              </div>

              {/* Convener */}
              <div className="flex items-start gap-2.5">
                <Phone size={15} className="text-orange-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-slate-400 text-[11px] uppercase tracking-wider">Convener</p>
                  <p className="text-slate-200 font-medium">{convener.name}: <a href={`tel:${convener.mobile}`} className="hover:text-orange-400 transition-colors">{convener.mobile}</a></p>
                </div>
              </div>

              {/* Co-Convener & Treasurer */}
              <div className="flex items-start gap-2.5">
                <Phone size={15} className="text-orange-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-slate-400 text-[11px] uppercase tracking-wider">Co-Convener & Treasurer</p>
                  <p className="text-slate-200 font-medium">{coConvenerTreasurer.name}: <a href={`tel:${coConvenerTreasurer.mobile}`} className="hover:text-orange-400 transition-colors">{coConvenerTreasurer.mobile}</a></p>
                </div>
              </div>

              {/* Co-Convener */}
              <div className="flex items-start gap-2.5">
                <Phone size={15} className="text-orange-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-slate-400 text-[11px] uppercase tracking-wider">Co-Convener</p>
                  <p className="text-slate-200 font-medium">{coConvener2.name}: <a href={`tel:${coConvener2.mobile}`} className="hover:text-orange-400 transition-colors">{coConvener2.mobile}</a></p>
                </div>
              </div>
            </div>
          </div>

          {/* ── Column 3: Stay Guide ── */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-2">
              Accomadation Near Venue
            </h4>

            <div className="space-y-4 text-xs">
              {/* Hotel 1 */}
              

              {/* Hotel 2 */}
              <div>
                <p className="font-bold text-slate-100 text-xs">Grand Mirage Dhanbad</p>
                <p className="text-slate-400 text-[10px]">A Member of Radisson Individuals</p>
                <p className="text-slate-400 text-[11px] flex items-center gap-1 mt-0.5">
                  <Phone size={12} className="text-slate-500" /> 03263509100
                </p>
                <div className="flex items-center gap-3 mt-1 text-[11px]">
                  <a href="#" className="text-slate-400 hover:underline flex items-center gap-0.5">
                    <Globe size={11} /> Website
                  </a>
                  <a href="https://maps.google.com/?q=Grand+Mirage+Dhanbad" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:underline flex items-center gap-0.5">
                    <MapPin size={11} /> View on Map
                  </a>
                </div>
              </div>

              {/* Hotel 3 */}
              <div className="border-t border-slate-800/60 pt-2.5">
                <p className="font-bold text-slate-100 text-xs">Hotel Sonotel / Cocoon</p>
                <p className="text-slate-400 text-[11px] flex items-center gap-1 mt-0.5">
                  <Mail size={12} className="text-slate-500" />
                  <a
                    href={makeGmailUrl('reservations@hotelsushantinternational.com', 'Hotel Booking Inquiry — MVB@2047')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-orange-400 transition-colors underline decoration-slate-600 underline-offset-2"
                    title="Click to compose in Gmail"
                  >
                    reservations@hotelsushantinternational.com ↗
                  </a>
                </p>
                <p className="text-slate-400 text-[11px] flex items-center gap-1">
                  <Phone size={12} className="text-slate-500" /> +91-98/65-43210
                </p>
                <div className="flex items-center gap-3 mt-1 text-[11px]">
                  <a href="#" className="text-slate-400 hover:underline flex items-center gap-0.5">
                    <Globe size={11} /> Website
                  </a>
                  <a href="https://maps.google.com/?q=Hotel+Sonotel+Dhanbad" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:underline flex items-center gap-0.5">
                    <MapPin size={11} /> View on Map
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ── Column 4: Address ── */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-2">
              Address
            </h4>

            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="text-orange-400 mt-0.5 flex-shrink-0" />
                <div className="text-slate-300 leading-relaxed space-y-1">
                  <p className="font-bold text-white">Department of Mining Engineering</p>
                  <p>Indian Institute of Technology (ISM) Dhanbad</p>
                  <p>Jharkhand, India – 826004</p>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://maps.google.com/?q=Department+of+Mining+Engineering+IIT+ISM+Dhanbad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/5 hover:bg-white/10 text-orange-400 hover:text-orange-300 text-xs font-semibold border border-orange-500/30 transition-colors"
                >
                  <ExternalLink size={12} />
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* ── Bottom Bar ── */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-slate-500">
          <p>© 2026 MVB@2047 Conference. All rights reserved.</p>
          <p>Organized by Department of Mining Engineering, IIT (ISM) Dhanbad</p>
        </div>
      </div>
    </footer>
  );
}
