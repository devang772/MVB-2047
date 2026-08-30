import { Calendar, Star } from 'lucide-react';

export default function Timeline({ dates }) {
  return (
    <div className="relative" role="list" aria-label="Important dates timeline">
      {/* Vertical line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-400 via-blue-400 to-green-400" aria-hidden="true" />

      <div className="space-y-6">
        {dates.map((item, index) => (
          <div
            key={item.id}
            className="relative flex items-start gap-6"
            role="listitem"
          >
            {/* Timeline dot */}
            <div className="relative flex-shrink-0 z-10">
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center border-4 border-white shadow-md ${
                  item.isMain
                    ? 'bg-orange-500'
                    : item.highlight
                    ? 'bg-[#0f1e3c]'
                    : 'bg-blue-600'
                }`}
                aria-hidden="true"
              >
                {item.isMain ? (
                  <Star size={22} className="text-white" />
                ) : (
                  <Calendar size={20} className="text-white" />
                )}
              </div>
            </div>

            {/* Content */}
            <div
              className={`flex-1 bg-white rounded-xl border p-5 shadow-sm hover:shadow-md transition-shadow ${
                item.isMain
                  ? 'border-orange-200 bg-orange-50/50'
                  : item.highlight
                  ? 'border-slate-200 bg-slate-50/50'
                  : 'border-gray-100'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div>
                  <p
                    className={`text-sm font-bold tracking-wide mb-0.5 ${
                      item.isMain ? 'text-orange-600' : 'text-blue-600'
                    }`}
                  >
                    {item.date}
                  </p>
                  <h3
                    className={`text-base font-bold ${
                      item.isMain ? 'text-orange-900' : 'text-[#0f1e3c]'
                    }`}
                  >
                    {item.event}
                  </h3>
                </div>
                {item.isMain && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold border border-orange-200 self-start sm:self-auto whitespace-nowrap">
                    Conference Day
                  </span>
                )}
                {item.highlight && !item.isMain && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold border border-slate-200 self-start sm:self-auto whitespace-nowrap">
                    Exhibition
                  </span>
                )}
              </div>
              {item.description && (
                <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                  {item.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
