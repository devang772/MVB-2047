import { User } from 'lucide-react';

/**
 * PersonCard — for committee members
 * Shows initials avatar (no fake photos)
 */
export default function PersonCard({ person }) {
  // Generate initials from name
  const initials = person.name
    ? person.name
        .split(' ')
        .filter((w) => w.length > 2)
        .slice(0, 2)
        .map((w) => w[0].toUpperCase())
        .join('')
    : '?';

  const avatarColors = [
    'bg-blue-700', 'bg-green-700', 'bg-purple-700', 'bg-teal-700',
    'bg-indigo-700', 'bg-rose-700', 'bg-amber-700', 'bg-cyan-700',
  ];
  // Deterministic color based on name
  const colorIdx = person.name
    ? person.name.charCodeAt(0) % avatarColors.length
    : 0;

  return (
    <article className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-5 flex items-start gap-4">
      {/* Avatar */}
      <div className={`w-14 h-14 rounded-full ${avatarColors[colorIdx]} flex items-center justify-center text-white font-bold text-lg flex-shrink-0`} aria-hidden="true">
        {initials || <User size={22} />}
      </div>

      {/* Details */}
      <div className="min-w-0">
        <h3 className="font-bold text-[#0f1e3c] text-sm leading-snug">{person.name}</h3>
        {person.role && (
          <p className="text-orange-600 text-xs font-semibold mt-0.5">{person.role}</p>
        )}
        {person.designation && (
          <p className="text-slate-600 text-xs mt-1">{person.designation}</p>
        )}
        {person.institution && (
          <p className="text-slate-500 text-xs mt-0.5 leading-snug">{person.institution}</p>
        )}
        {person.country && (
          <span className="inline-block mt-1.5 text-xs px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100">
            {person.country}
          </span>
        )}
      </div>
    </article>
  );
}
