import { QrCode, Heart, Shield, Sparkles, BookOpen } from 'lucide-react';
import type { SiteSettings } from '../types/sanity';

interface DonationsSectionProps {
  settings: SiteSettings;
}

export function DonationsSection({ settings }: DonationsSectionProps) {
  const { bankDetails } = settings;

  return (
    <section id="donations" className="py-20 bg-[#FFFCF5] border-t border-[#B79A5B]/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-serif font-semibold tracking-widest text-[#B79A5B] uppercase">
            <span>✢</span>
            <span>Пожертва</span>
            <span>✢</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#18264F] tracking-tight">
            Підтримайте служіння церкви
          </h2>
          <div className="w-20 h-0.5 bg-[#B79A5B] mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Biblical Perspective & Gratitude */}
          <div className="lg:col-span-6 space-y-6">
            <p className="text-base sm:text-lg text-[#38343A] leading-relaxed font-sans">
              Ми вдячні кожному, хто підтримує служіння нашої громади молитвою, часом, здібностями та матеріальними пожертвами.
            </p>

            <p className="text-sm sm:text-base text-[#38343A] leading-relaxed font-sans">
              Добровільні пожертви допомагають підтримувати діяльність церкви, організовувати зібрання та розвивати служіння відповідно до потреб громади.
            </p>

            {/* Scripture Box in Byzantine Parchment Frame */}
            <div className="p-8 rounded-3xl bg-[#F5F0E5] border-2 border-[#B79A5B]/50 shadow-xs space-y-3 relative overflow-hidden">
              <div className="flex items-start gap-3">
                <BookOpen className="w-5 h-5 text-[#B79A5B] shrink-0 mt-1" />
                <div className="space-y-2">
                  <p className="font-serif italic text-lg sm:text-xl text-[#18264F] leading-relaxed">
                    «Кожен нехай дає за своїм серцем, не в смутку й не з примусу, бо Бог любить того, хто з радістю дає».
                  </p>
                  <p className="text-xs font-serif font-bold text-[#B79A5B] tracking-wider uppercase">
                    — 2 Коринтян 9:7
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#FFFCF5] border border-[#B79A5B]/30 flex items-center gap-3">
              <Heart className="w-5 h-5 text-[#B79A5B] shrink-0 fill-current" />
              <p className="text-xs sm:text-sm font-medium text-[#18264F]">
                Дякуємо за вашу підтримку та участь у житті нашої громади!
              </p>
            </div>
          </div>

          {/* Right Column: Online Giving & Reserved QR Code Area */}
          <div className="lg:col-span-6">
            <div className="bg-[#F5F0E5] p-8 sm:p-10 rounded-3xl border-2 border-[#B79A5B]/50 shadow-sm space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-[#B79A5B]/30">
                <div className="p-2.5 rounded-xl bg-white border border-[#B79A5B]/40 text-[#243B78]">
                  <Sparkles className="w-5 h-5 text-[#B79A5B]" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-xl text-[#18264F]">
                    Онлайн-пожертва
                  </h3>
                  <span className="text-xs text-[#B79A5B] font-medium">
                    Підтримка громади онлайн
                  </span>
                </div>
              </div>

              <p className="text-sm text-[#38343A] leading-relaxed">
                {bankDetails.qrNotice}
              </p>

              {/* Reserved QR Code Area with Byzantine Aesthetic Framing */}
              <div className="p-8 rounded-2xl bg-white border-2 border-dashed border-[#B79A5B]/60 flex flex-col items-center justify-center text-center space-y-4">
                <div className="w-40 h-40 rounded-xl bg-[#F5F0E5] border border-[#B79A5B]/40 flex flex-col items-center justify-center p-4 relative group">
                  <QrCode className="w-16 h-16 text-[#B79A5B] stroke-[1.2]" />
                  <div className="mt-2 text-[10px] font-mono uppercase tracking-wider text-[#18264F] font-semibold">
                    [ QR-КОД ]
                  </div>
                  {/* Subtle Byzantine corner cross motifs */}
                  <span className="absolute top-1 left-1.5 text-[10px] text-[#B79A5B]">✢</span>
                  <span className="absolute top-1 right-1.5 text-[10px] text-[#B79A5B]">✢</span>
                  <span className="absolute bottom-1 left-1.5 text-[10px] text-[#B79A5B]">✢</span>
                  <span className="absolute bottom-1 right-1.5 text-[10px] text-[#B79A5B]">✢</span>
                </div>

                <div className="space-y-1 max-w-sm">
                  <div className="text-xs font-serif font-bold text-[#18264F] uppercase tracking-wider">
                    Місце для швидкого переказу (QR-код)
                  </div>
                  <p className="text-[11px] text-[#38343A]">
                    Тут незабаром з’явиться прямий QR-код банківської системи для миттєвої пожертви зі смартфона.
                  </p>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-center gap-2 text-xs text-[#18264F]">
                <Shield className="w-4 h-4 text-[#B79A5B]" />
                <span className="text-[11px]">
                  Офіційна статутна діяльність релігійної громади
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
