import { Shield, BookOpen, Clock, UserCheck, Heart } from 'lucide-react';
import type { AboutPageData } from '../types/sanity';

interface AboutSectionProps {
  about: AboutPageData;
  onNavigate: (sectionId: string) => void;
}

export function AboutSection({ about, onNavigate }: AboutSectionProps) {
  const { history, pastor, official } = about;

  return (
    <section id="about" className="py-20 bg-[#F5F0E5] border-t border-[#B79A5B]/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-serif font-semibold tracking-widest text-[#B79A5B] uppercase">
            <span>✢</span>
            <span>Ідентичність та покликання</span>
            <span>✢</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#18264F] tracking-tight">
            {about.title}
          </h2>
          <div className="w-20 h-0.5 bg-[#B79A5B] mx-auto" />
        </div>

        {/* Part 1: Main narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-16">
          {/* Main story card */}
          <div className="lg:col-span-7 bg-[#FFFCF5] p-8 sm:p-10 rounded-3xl border border-[#B79A5B]/40 shadow-xs space-y-6 flex flex-col justify-between">
            <div className="space-y-5">
              <h3 className="font-serif font-bold text-2xl text-[#18264F]">
                Про нас
              </h3>
              <p className="text-[#38343A] leading-relaxed text-base sm:text-lg font-sans">
                {about.mainDescription}
              </p>
              <div className="p-5 rounded-2xl bg-[#F5F0E5]/60 border border-[#B79A5B]/25">
                <p className="font-serif italic text-base sm:text-lg text-[#18264F] leading-relaxed">
                  {about.christCenteredStatement}
                </p>
              </div>
              <p className="text-[#38343A] leading-relaxed text-base">
                {about.communityInvitation}
              </p>
            </div>

            <div className="pt-4 border-t border-[#B79A5B]/20 flex items-center justify-between">
              <span className="text-xs text-[#B79A5B] font-serif font-semibold">
                Христос — голова церкви
              </span>
              <button
                onClick={() => onNavigate('location')}
                className="text-xs font-semibold text-[#243B78] hover:text-[#18264F] underline underline-offset-4 cursor-pointer"
              >
                Як долучитися до зібрання &rarr;
              </button>
            </div>
          </div>

          {/* History Card with Byzantine arch styling */}
          <div className="lg:col-span-5 bg-[#18264F] text-[#FFFCF5] p-8 sm:p-10 rounded-3xl border-2 border-[#B79A5B]/50 shadow-md flex flex-col justify-between relative overflow-hidden">
            <div className="space-y-6 relative z-10">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#243B78] border border-[#B79A5B]/40 text-[#B79A5B]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-xl text-[#FFFCF5]">
                    {history.title}
                  </h3>
                  <span className="text-xs text-[#B79A5B] font-medium">
                    Заснована: {history.foundedDate}
                  </span>
                </div>
              </div>

              <p className="text-[#F5F0E5]/90 text-sm sm:text-base leading-relaxed font-sans">
                {history.description}
              </p>

              <div className="p-4 rounded-xl bg-[#243B78]/70 border border-[#B79A5B]/30 space-y-2">
                <div className="text-xs text-[#B79A5B] font-serif font-bold uppercase tracking-wider">
                  Понад 30 років вірного служіння
                </div>
                <p className="text-xs text-[#F5F0E5]/80 leading-relaxed">
                  Від 1995 року і до сьогодні наша церква незмінно проповідує чисте Євангеліє Ісуса Христа у столиці України.
                </p>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#B79A5B]/30 flex items-center justify-between text-xs text-[#B79A5B] relative z-10">
              <span>Київ · Україна</span>
              <span>1995 — 2026</span>
            </div>
          </div>
        </div>

        {/* Part 2: Pastor Spotlight & Official Registry Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Pastor Block */}
          <div className="lg:col-span-7 bg-[#FFFCF5] p-8 sm:p-10 rounded-3xl border border-[#B79A5B]/40 shadow-xs flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <div className="w-32 h-44 rounded-t-full rounded-b-xl overflow-hidden border-2 border-[#B79A5B]/60 shadow-sm shrink-0 bg-[#18264F]">
              <img
                src={pastor.localPhotoPath || '/src/assets/images/pastor_ruslan_portrait_1792663603021.jpg'}
                alt={pastor.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-3 flex-1 text-center sm:text-left">
              <div className="text-xs font-serif font-semibold text-[#B79A5B] uppercase tracking-wider">
                {pastor.title}
              </div>
              <h4 className="font-serif font-bold text-2xl text-[#18264F]">
                {pastor.name}
              </h4>
              <p className="text-sm text-[#38343A] leading-relaxed">
                {pastor.description}
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onNavigate('leaders')}
                  className="text-xs font-semibold text-[#243B78] hover:text-[#18264F] underline underline-offset-4 cursor-pointer"
                >
                  Переглянути розділ «Лідери церкви» &rarr;
                </button>
              </div>
            </div>
          </div>

          {/* Official Information Card */}
          <div className="lg:col-span-5 bg-[#FFFCF5] p-8 rounded-3xl border border-[#B79A5B]/40 shadow-xs space-y-4">
            <div className="flex items-center gap-2.5 pb-3 border-b border-[#B79A5B]/20">
              <Shield className="w-5 h-5 text-[#B79A5B]" />
              <h4 className="font-serif font-bold text-lg text-[#18264F]">
                Офіційна інформація
              </h4>
            </div>

            <div className="space-y-3 text-xs text-[#38343A]">
              <div>
                <span className="text-[#B79A5B] font-semibold block">Повна назва:</span>
                <span className="font-medium text-[#18264F] leading-tight block mt-0.5">
                  {official.legalName}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-1">
                <div>
                  <span className="text-[#B79A5B] font-semibold block">Дата заснування:</span>
                  <span className="font-medium text-[#18264F] block">
                    {official.foundationDate}
                  </span>
                </div>
                <div>
                  <span className="text-[#B79A5B] font-semibold block">Місто:</span>
                  <span className="font-medium text-[#18264F] block">
                    {official.city}
                  </span>
                </div>
              </div>

              <div className="pt-1">
                <span className="text-[#B79A5B] font-semibold block">Пастор:</span>
                <span className="font-medium text-[#18264F] block">
                  {official.pastorFullName}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
