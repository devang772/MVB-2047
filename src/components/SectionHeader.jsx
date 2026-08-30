/**
 * SectionHeader — label, title, accent underline, subtitle
 * Standard executive academic styling
 */
export default function SectionHeader({ label, title, subtitle, centered = false, light = false }) {
  const align = centered ? 'text-center' : 'text-left';
  const underline = centered ? 'mx-auto' : '';

  return (
    <div className={`mb-8 ${align}`}>
      {label && (
        <p className={`text-xs font-bold uppercase tracking-widest mb-2 ${light ? 'text-blue-200' : 'text-blue-900'}`}>
          {label}
        </p>
      )}
      <h2 className={`text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight ${light ? 'text-white' : 'text-slate-900'}`}>
        {title}
      </h2>
      <div className={`w-12 h-1 bg-amber-600 rounded-full mt-3 ${subtitle ? 'mb-4' : 'mb-0'} ${underline}`} aria-hidden="true" />
      {subtitle && (
        <p className={`text-sm sm:text-base leading-relaxed max-w-2xl ${centered ? 'mx-auto' : ''} ${light ? 'text-slate-300' : 'text-slate-600'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
