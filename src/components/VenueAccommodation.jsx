import { MapPin, Train, Plane, Hotel, Compass } from 'lucide-react';
import SectionHeader from './SectionHeader';
import ScrollReveal from './ScrollReveal';
import { venueDetails } from '../data/venue';

export default function VenueAccommodation() {
  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200" aria-label="Venue and Accommodation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <ScrollReveal>
          <SectionHeader
            label="Location & Travel"
            title="VENUE & ACCOMMODATION"
            subtitle="Connectivity, travel details, staying options, and major tourist attractions around IIT (ISM) Dhanbad"
            centered
          />
        </ScrollReveal>

        {/* Travel & Connectivity Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Railway Connectivity */}
          <ScrollReveal delay={100}>
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:shadow-md transition-shadow h-full flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600 mb-4">
                  <Train size={24} />
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">Train & Road Connectivity</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-3">
                  {venueDetails.kolkataDistance}. {venueDetails.trainConnectivity}
                </p>
              </div>
              <div className="pt-3 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-amber-600">
                <MapPin size={14} />
                <span>{venueDetails.stationDistance}</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 2: Nearest Airports */}
          <ScrollReveal delay={200}>
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:shadow-md transition-shadow h-full flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-600 mb-4">
                  <Plane size={24} />
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">Nearest Airports</h3>
                <div className="space-y-2.5 mt-3">
                  {venueDetails.airports.map((ap) => (
                    <div key={ap.name} className="flex items-start justify-between gap-2 text-xs">
                      <span className="font-semibold text-slate-800">{ap.name}</span>
                      <span className="text-blue-600 font-bold bg-blue-50 px-2 py-0.5 rounded border border-blue-100 whitespace-nowrap">
                        {ap.detail}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 3: Hotels & Stay */}
          <ScrollReveal delay={300}>
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:shadow-md transition-shadow h-full flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 mb-4">
                  <Hotel size={24} />
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">Hotel Recommendations</h3>
                <p className="text-slate-600 text-xs mb-3">
                  Dhanbad city has good hospitality infrastructure with premium stay options:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {venueDetails.hotels.map((h) => (
                    <span key={h} className="text-xs font-semibold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Tourist Attractions Showcase */}
        <ScrollReveal delay={150}>
          <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-xs">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-amber-600 text-white flex items-center justify-center font-bold">
                <Compass size={22} />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-slate-900">Popular Tourism & Sightseeing</h3>
                <p className="text-slate-500 text-xs mt-0.5">Explore iconic natural, cultural, and industrial heritage spots around Dhanbad</p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {venueDetails.touristSpots.map((spot) => (
                <div
                  key={spot.name}
                  className="bg-slate-50 hover:bg-amber-50/50 rounded-2xl border border-slate-200 p-4 transition-all duration-200 flex flex-col justify-between group hover:border-amber-400"
                >
                  <div>
                    <div className="w-8 h-8 rounded-full bg-slate-900 text-amber-400 font-black text-xs flex items-center justify-center mb-2.5 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                      {spot.name[0]}
                    </div>
                    <h4 className="font-extrabold text-sm text-slate-900 group-hover:text-amber-900 transition-colors">
                      {spot.name}
                    </h4>
                    <p className="text-[11px] text-slate-500 mt-1 leading-snug">
                      {spot.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
