import { BookOpen, Users, Heart } from 'lucide-react';
import type { Leader } from '../types/sanity';

interface TeamSectionProps {
  leaders: Leader[];
}

export function TeamSection({ leaders }: TeamSectionProps) {
  const pastor = leaders.find((l) => l.isSeniorPastor) || leaders[0];

  return (
    <section id="leaders" className="py-20 bg-[#F5F0E5] border-t border-[#B79A5B]/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-serif font-semibold tracking-widest text-[#B79A5B] uppercase">
            <span>✢</span>
            <span>Лідери церкви</span>
            <span>✢</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#18264F] tracking-tight">
            Люди, які служать громаді
          </h2>
          <p className="text-base sm:text-lg text-[#38343A] leading-relaxed max-w-2xl mx-auto font-sans">
            Церковне служіння — це спільна праця людей, які присвячують свій час, сили та здібності Богові й іншим. Ми вдячні кожному, хто допомагає розвивати життя нашої громади та підтримувати її членів.
          </p>
          <div className="w-20 h-0.5 bg-[#B79A5B] mx-auto" />
        </div>

        {/* Senior Pastor Feature Card (Arched Byzantine Portrait) */}
        {pastor && (
          <div className="max-w-4xl mx-auto bg-[#FFFCF5] rounded-3xl border-2 border-[#B79A5B]/50 shadow-md p-8 sm:p-12 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              {/* Arched Portrait */}
              <div className="md:col-span-5 flex justify-center">
                <div className="w-48 sm:w-56 h-72 rounded-t-full rounded-b-2xl overflow-hidden border-2 border-[#B79A5B] shadow-lg bg-[#18264F]">
                  <img
                    src={pastor.localPhotoPath || '/src/assets/images/pastor_ruslan_portrait_1792663603021.jpg'}
                    alt={pastor.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Pastor Bio & Ministry Role */}
              <div className="md:col-span-7 space-y-4 text-center md:text-left">
                <div className="inline-flex items-center gap-1.5 text-xs font-serif font-semibold text-[#B79A5B] uppercase tracking-wider">
                  <span>✢</span>
                  <span>Пасторське служіння</span>
                </div>
                <h3 className="font-serif font-bold text-2xl sm:text-3xl text-[#18264F]">
                  {pastor.name}
                </h3>
                <div className="text-sm font-semibold text-[#243B78]">
                  {pastor.role}
                </div>
                <p className="text-[#38343A] text-sm sm:text-base leading-relaxed pt-2">
                  {pastor.description}
                </p>

                <div className="pt-4 border-t border-[#B79A5B]/20 flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs text-[#38343A]">
                  <span className="flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4 text-[#B79A5B]" />
                    <span>Слово Боже</span>
                  </span>
                  <span aria-hidden="true" className="text-[#B79A5B]">·</span>
                  <span className="flex items-center gap-1.5">
                    <Heart className="w-4 h-4 text-[#B79A5B]" />
                    <span>Духовна опіка</span>
                  </span>
                  <span aria-hidden="true" className="text-[#B79A5B]">·</span>
                  <span className="flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-[#B79A5B]" />
                    <span>Молитва за людей</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Note on other leaders joining */}
        <div className="max-w-3xl mx-auto p-6 rounded-2xl bg-[#FFFCF5]/90 border border-[#B79A5B]/30 text-center space-y-2">
          <p className="text-xs sm:text-sm text-[#38343A] leading-relaxed">
            На цій сторінці також будуть представлені інші служителі та лідери церкви, які беруть участь у розвитку громади й різних напрямках служіння.
          </p>
          <span className="text-xs text-[#B79A5B] font-serif font-medium">
            «Служіть один одному, кожен тим даром, якого отримав» (1 Петра 4:10)
          </span>
        </div>
      </div>
    </section>
  );
}
