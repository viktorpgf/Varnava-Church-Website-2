import { MapPin, Calendar, ArrowRight, Heart } from 'lucide-react';
import type { HomePageData, SiteSettings } from '../types/sanity';
import { urlFor } from '../sanity/client';

interface HeroSectionProps {
  homePage: HomePageData;
  settings: SiteSettings;
  onNavigate: (sectionId: string) => void;
}

export function HeroSection({ homePage, settings, onNavigate }: HeroSectionProps) {
  const heroImageSrc =
  '/src/assets/images/mainhall.webp';

  return (
    <section id="hero" className="relative overflow-hidden py-12 lg:py-20 bg-[#FFFCF5]">
      {/* Decorative mosaic ornament ribbon */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-[#B79A5B]">
          <span className="h-px w-12 bg-[#B79A5B]/40" />
          <span className="font-serif">✢ Соборність · Слово · Любов Христа ✢</span>
          <span className="h-px w-12 bg-[#B79A5B]/40" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Welcome & Narrative */}
          <div className="lg:col-span-7 space-y-7">
            {/* Top Kicker */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5F0E5] border border-[#B79A5B]/40 text-xs font-serif font-medium text-[#18264F]">
              <span className="text-[#B79A5B]">✢</span>
              <span>Київська християнська громада повного Євангелія</span>
            </div>

            {/* Main Title & Greeting */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-[#18264F] leading-[1.2]">
                {homePage.heroTitle}
              </h1>
              <p className="text-lg sm:text-xl font-serif italic text-[#B79A5B] leading-relaxed">
                {homePage.heroGreeting}
              </p>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#38343A] leading-relaxed font-sans">
              {homePage.heroDescription}
            </p>

            {/* Invitation */}
            <div className="p-5 rounded-2xl bg-[#F5F0E5]/80 border border-[#B79A5B]/30 border-l-4 border-l-[#B79A5B]">
              <p className="text-sm sm:text-base text-[#18264F] font-serif leading-relaxed">
                {homePage.heroInvitation}
              </p>
            </div>

            {/* Meeting Schedule & Address Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className="p-4 rounded-xl bg-white border border-[#B79A5B]/30 shadow-xs space-y-1">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#B79A5B] uppercase tracking-wider">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Наші зібрання</span>
                </div>
                <div className="text-sm font-bold text-[#18264F]">
                  {homePage.meetingTimeBadge}
                </div>
                <p className="text-[11px] text-[#38343A]/70">
                  Щотижневе спільне богослужіння
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#B79A5B]/30 shadow-xs space-y-1">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#B79A5B] uppercase tracking-wider">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Адреса церкви</span>
                </div>
                <div className="text-sm font-bold text-[#18264F]">
                  {homePage.addressBadge}
                </div>
                <p className="text-[11px] text-[#38343A]/70">
                  м. Київ (ст. м. Шулявська)
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onNavigate('location')}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#FFFCF5] bg-[#243B78] hover:bg-[#18264F] rounded-xl border border-[#B79A5B]/60 shadow-sm active:scale-95 transition-all cursor-pointer"
              >
                <MapPin className="w-4 h-4 text-[#B79A5B]" />
                <span>{homePage.heroCtaText}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('about')}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium text-[#18264F] bg-[#F5F0E5] hover:bg-[#EAE2D2] border border-[#B79A5B]/40 rounded-xl transition-colors cursor-pointer"
              >
                <span>{homePage.heroSecondaryCtaText}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Byzantine Arch Sanctuary Frame */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative Byzantine Arch Outer Halo */}
              <div className="absolute -inset-3 rounded-t-full bg-gradient-to-b from-[#B79A5B]/20 via-[#F5F0E5] to-transparent transform rotate-0" />

              {/* Arched Sanctuary Image Frame */}
              <div className="relative rounded-t-full rounded-b-2xl overflow-hidden border-2 border-[#B79A5B]/70 shadow-xl bg-[#18264F] aspect-3/4">
                <img
                  src={heroImageSrc}
                  alt="Зала церкви Святого апостола Варнави"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />

                {/* Subtle gradient scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#18264F]/80 via-transparent to-transparent" />

                {/* Bottom welcome pill */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-[#FFFCF5]/95 backdrop-blur-md border border-[#B79A5B]/40 text-center space-y-1 shadow-md">
                  <div className="flex items-center justify-center gap-1.5 text-xs font-serif font-bold text-[#18264F]">
                    <Heart className="w-3.5 h-3.5 text-[#B79A5B] fill-current" />
                    <span>Будемо раді бачити вас!</span>
                  </div>
                  <p className="text-[11px] text-[#38343A] leading-tight">
                    {homePage.welcomeSnippet.body}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
