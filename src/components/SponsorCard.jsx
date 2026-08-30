import { Check, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const tierStyles = {
  diamond: {
    bg: 'bg-gradient-to-br from-slate-800 to-slate-900',
    badge: 'bg-cyan-400/20 text-cyan-300 border-cyan-400/30',
    price: 'text-cyan-300',
    divider: 'border-cyan-400/20',
    check: 'text-cyan-400',
    border: 'border-cyan-400/40',
    label: 'bg-cyan-400 text-slate-900',
  },
  gold: {
    bg: 'bg-gradient-to-br from-amber-800 to-amber-900',
    badge: 'bg-amber-400/20 text-amber-300 border-amber-400/30',
    price: 'text-amber-300',
    divider: 'border-amber-400/20',
    check: 'text-amber-400',
    border: 'border-amber-400/40',
    label: 'bg-amber-400 text-amber-900',
  },
  silver: {
    bg: 'bg-gradient-to-br from-slate-600 to-slate-700',
    badge: 'bg-slate-300/20 text-slate-200 border-slate-300/30',
    price: 'text-slate-200',
    divider: 'border-slate-400/20',
    check: 'text-slate-300',
    border: 'border-slate-400/40',
    label: 'bg-slate-300 text-slate-800',
  },
  bronze: {
    bg: 'bg-gradient-to-br from-amber-700 to-amber-800',
    badge: 'bg-orange-400/20 text-orange-200 border-orange-400/30',
    price: 'text-orange-200',
    divider: 'border-orange-400/20',
    check: 'text-orange-300',
    border: 'border-orange-400/30',
    label: 'bg-amber-700 text-amber-100',
  },
};

export default function SponsorCard({ pkg }) {
  const style = tierStyles[pkg.color] || tierStyles.bronze;

  return (
    <article
      className={`relative rounded-2xl border ${style.border} ${style.bg} text-white overflow-hidden flex flex-col h-full shadow-sm hover:shadow-md transition-shadow`}
      aria-label={`${pkg.tier} Sponsorship Package`}
    >
      {/* Popular badge */}
      {pkg.popular && (
        <div className="absolute top-4 right-4 z-10">
          <span className="flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full bg-orange-500 text-white shadow-xs">
            <Star size={10} fill="currentColor" />
            Popular
          </span>
        </div>
      )}

      <div className="p-7 flex-1 flex flex-col">
        {/* Tier badge */}
        <div className={`inline-flex items-center px-3 py-1 rounded-full border text-sm font-bold tracking-wide mb-5 w-fit ${style.badge}`}>
          {pkg.tier} Sponsor
        </div>

        {/* Amount */}
        <div className="mb-1">
          <span className="text-white/60 text-sm">INR</span>
          <div className={`text-3xl font-extrabold ${style.price} mt-0.5`}>
            {pkg.amount}/<span className="text-lg font-semibold text-white/70">-</span>
          </div>
        </div>
        <p className="text-white/50 text-xs mb-5">Excluding GST@18%</p>

        {/* Delegate count highlight */}
        <div className={`border-t ${style.divider} pt-5 mb-5`}>
          <div className="text-center">
            <p className={`text-4xl font-extrabold ${style.price}`}>{pkg.delegates}</p>
            <p className="text-white/70 text-sm mt-0.5">Delegates Free of Cost</p>
          </div>
        </div>

        {/* Benefits */}
        <ul className="space-y-2.5 flex-1" role="list">
          {pkg.benefits.map((benefit, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-white/80">
              <Check size={15} className={`${style.check} flex-shrink-0 mt-0.5`} aria-hidden="true" />
              {benefit}
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div className={`mt-auto border-t ${style.divider} p-5`}>
        <Link
          to="/registration"
          className="block w-full text-center font-semibold py-2.5 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-sm border border-white/20 hover:border-white/40"
        >
          Become a Sponsor
        </Link>
      </div>
    </article>
  );
}
