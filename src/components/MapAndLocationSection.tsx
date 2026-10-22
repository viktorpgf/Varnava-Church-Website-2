import { MapPin, Calendar, Clock, Navigation, ExternalLink, HeartHandshake } from 'lucide-react';
import type { SiteSettings } from '../types/sanity';

interface MapAndLocationSectionProps {
  settings: SiteSettings;
}

export function MapAndLocationSection({ settings }: MapAndLocationSectionProps) {
  const { address, googleMaps, scheduleSummary } = settings;

  return (
    <section id="location" className="py-20 bg-[#FFFCF5] border-t border-[#B79A5B]/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-serif font-semibold tracking-widest text-[#B79A5B] uppercase">
            <span>✢</span>
            <span>Адреса та як нас знайти</span>
            <span>✢</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#18264F] tracking-tight">
            Завітайте до нас
          </h2>
          <p className="text-base sm:text-lg text-[#38343A] font-serif italic">
            Ми будемо раді зустріти вас на нашому церковному зібранні!
          </p>
          <div className="w-20 h-0.5 bg-[#B79A5B] mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Schedule & Reassurance */}
          <div className="lg:col-span-5 space-y-6">
            {/* Main Gathering Card */}
            <div className="p-8 rounded-3xl bg-[#F5F0E5] border border-[#B79A5B]/40 shadow-xs space-y-5">
              <div className="flex items-center gap-2 text-xs font-serif font-semibold text-[#B79A5B] uppercase tracking-wider">
                <span>✢</span>
                <span>Розклад та адреса</span>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-white border border-[#B79A5B]/30 text-[#243B78] shrink-0">
                    <MapPin className="w-5 h-5 text-[#B79A5B]" />
                  </div>
                  <div>
                    <span className="text-xs text-[#B79A5B] font-semibold block uppercase">Адреса церкви</span>
                    <div className="text-base font-bold text-[#18264F]">
                      {address.city}, {address.street}
                    </div>
                    {address.directionsNote && (
                      <p className="text-xs text-[#38343A] mt-0.5">{address.directionsNote}</p>
                    )}
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pt-2 border-t border-[#B79A5B]/20">
                  <div className="p-2.5 rounded-xl bg-white border border-[#B79A5B]/30 text-[#243B78] shrink-0">
                    <Calendar className="w-5 h-5 text-[#B79A5B]" />
                  </div>
                  <div>
                    <span className="text-xs text-[#B79A5B] font-semibold block uppercase">День зібрання</span>
                    <div className="text-base font-bold text-[#18264F]">
                      {scheduleSummary?.day ?? 'Щосуботи'}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pt-2 border-t border-[#B79A5B]/20">
                  <div className="p-2.5 rounded-xl bg-white border border-[#B79A5B]/30 text-[#243B78] shrink-0">
                    <Clock className="w-5 h-5 text-[#B79A5B]" />
                  </div>
                  <div>
                    <span className="text-xs text-[#B79A5B] font-semibold block uppercase">Час проведення</span>
                    <div className="text-base font-bold text-[#18264F]">
                      з 14:00 до 17:00
                    </div>
                    <p className="text-xs text-[#38343A]/80 mt-0.5">Тривалість: {scheduleSummary?.duration ?? '3 години'}</p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={googleMaps?.directLink ?? 'https://www.google.com/maps/search/?api=1&query=вул.+Вадима+Гетьмана+1А+Київ'}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs font-semibold text-[#FFFCF5] bg-[#243B78] hover:bg-[#18264F] rounded-xl border border-[#B79A5B]/50 shadow-xs transition-colors"
                >
                  <Navigation className="w-4 h-4 text-[#B79A5B]" />
                  <span>Побудувати маршрут у Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </a>
              </div>
            </div>

            {/* Reassurance Note for New Visitors */}
            <div className="p-6 rounded-2xl bg-white border border-[#B79A5B]/30 shadow-xs space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#18264F]">
                <HeartHandshake className="w-4 h-4 text-[#B79A5B]" />
                <span>Гід для гостей</span>
              </div>
              <p className="text-xs sm:text-sm text-[#38343A] leading-relaxed">
                Не потрібно спеціально готуватися чи мати попередній досвід відвідування церкви. Просто приходьте — ми будемо раді познайомитися з вами!
              </p>
            </div>
          </div>

          {/* Right Column: Google Maps Frame */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden border-2 border-[#B79A5B]/50 shadow-lg bg-[#F5F0E5] aspect-16/10 sm:aspect-16/9">
              {googleMaps?.embedUrl ? (
                <iframe
                  title="Карта проїзду до церкви Святого апостола Варнави"
                  src={googleMaps?.embedUrl}
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center space-y-4">
                  <MapPin className="w-10 h-10 text-[#B79A5B]" />
                  <div className="space-y-1">
                    <div className="font-bold text-[#18264F]">
                      вул. Вадима Гетьмана, 1А, м. Київ
                    </div>
                    <p className="text-xs text-[#38343A]">
                      Ви можете відкрити адресу безпосередньо у додатку Google Maps
                    </p>
                  </div>
                  <a
                    href={googleMaps?.directLink ?? 'https://www.google.com/maps/search/?api=1&query=вул.+Вадима+Гетьмана+1А+Київ'}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2.5 text-xs font-semibold bg-[#243B78] text-[#FFFCF5] rounded-xl inline-flex items-center gap-1.5"
                  >
                    <span>Відкрити в Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#B79A5B]" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
