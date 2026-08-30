import {
  Leaf, Cpu, Gem, Shield, Scale,
  CheckCircle
} from 'lucide-react';

const iconMap = {
  Leaf, Cpu, Gem, Shield, Scale,
};

const colorMap = {
  green: {
    badge: 'bg-green-100 text-green-700',
    icon: 'text-green-600 bg-green-50',
    border: 'border-green-200 hover:border-green-400',
    number: 'text-green-600',
    dot: 'bg-green-500',
  },
  blue: {
    badge: 'bg-blue-100 text-blue-700',
    icon: 'text-blue-600 bg-blue-50',
    border: 'border-blue-200 hover:border-blue-400',
    number: 'text-blue-600',
    dot: 'bg-blue-500',
  },
  purple: {
    badge: 'bg-purple-100 text-purple-700',
    icon: 'text-purple-600 bg-purple-50',
    border: 'border-purple-200 hover:border-purple-400',
    number: 'text-purple-600',
    dot: 'bg-purple-500',
  },
  orange: {
    badge: 'bg-orange-100 text-orange-700',
    icon: 'text-orange-600 bg-orange-50',
    border: 'border-orange-200 hover:border-orange-400',
    number: 'text-orange-500',
    dot: 'bg-orange-500',
  },
  navy: {
    badge: 'bg-slate-100 text-slate-700',
    icon: 'text-[#0f1e3c] bg-slate-100',
    border: 'border-slate-200 hover:border-slate-400',
    number: 'text-[#0f1e3c]',
    dot: 'bg-[#0f1e3c]',
  },
};

export default function ThemeCard({ theme }) {
  const Icon = iconMap[theme.icon] || Leaf;
  const colors = colorMap[theme.color] || colorMap.blue;

  return (
    <article
      className={`bg-white rounded-xl border ${colors.border} shadow-sm hover:shadow-md transition-all duration-300 p-6 flex flex-col h-full`}
      aria-label={`Theme ${theme.id}: ${theme.title}`}
    >
      {/* Header */}
      <div className="flex items-start gap-4 mb-4">
        <div className={`p-3 rounded-xl ${colors.icon} flex-shrink-0`}>
          <Icon size={26} aria-hidden="true" />
        </div>
        <div>
          <span className={`text-xs font-bold uppercase tracking-wider ${colors.number}`}>
            Theme {theme.id}
          </span>
          <h3 className="text-[15px] font-bold text-[#0f1e3c] leading-snug mt-1">
            {theme.title}
          </h3>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-slate-600 leading-relaxed mb-5">
        {theme.description}
      </p>

      {/* Topics */}
      <div className="mt-auto">
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">Key Topics</p>
        <ul className="space-y-2" role="list">
          {theme.topics.map((topic, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className={`w-1.5 h-1.5 rounded-full ${colors.dot} mt-1.5 flex-shrink-0`} aria-hidden="true" />
              <span className="text-sm text-slate-700 leading-snug">{topic}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
