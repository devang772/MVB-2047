import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

/**
 * CTASection — Call to action banner
 */
export default function CTASection({
  title,
  subtitle,
  primaryLabel,
  primaryTo,
  secondaryLabel,
  secondaryTo,
  dark = true,
}) {
  return (
    <section
      className={`py-16 px-4 ${dark ? 'bg-slate-900 border-t border-slate-800' : 'bg-slate-50 border-t border-slate-200'}`}
      aria-label="Call to action"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className={`text-3xl md:text-4xl font-extrabold mb-4 tracking-tight ${dark ? 'text-white' : 'text-slate-900'}`}>
          {title}
        </h2>
        {subtitle && (
          <p className={`text-base sm:text-lg mb-8 leading-relaxed ${dark ? 'text-slate-300' : 'text-slate-600'}`}>
            {subtitle}
          </p>
        )}
        <div className="flex flex-wrap gap-4 justify-center">
          {primaryLabel && primaryTo && (
            <Link
              to={primaryTo}
              className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-bold px-8 py-3.5 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg text-sm uppercase tracking-wider"
            >
              {primaryLabel}
              <ChevronRight size={16} />
            </Link>
          )}
          {secondaryLabel && secondaryTo && (
            <Link
              to={secondaryTo}
              className={`inline-flex items-center gap-2 border-2 font-semibold px-8 py-3.5 rounded-lg transition-all duration-200 text-sm ${
                dark
                  ? 'border-slate-700 text-white hover:bg-slate-800 hover:border-slate-600'
                  : 'border-slate-300 text-slate-800 hover:bg-slate-100 hover:border-slate-400'
              }`}
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
