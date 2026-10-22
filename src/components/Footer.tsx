import { Youtube, Instagram, Facebook, Database } from 'lucide-react';
import type { SiteSettings } from '../types/sanity';

interface FooterProps {
  settings: SiteSettings;
  onOpenSanityStatus: () => void;
  onNavigate: (sectionId: string) => void;
}

export function Footer({ settings, onOpenSanityStatus, onNavigate }: FooterProps) {
  const { officialInfo, address } = settings;

  return (
    <footer className="bg-[#18264F] text-[#F5F0E5] pt-16 pb-12 border-t-2 border-[#B79A5B]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#B79A5B]/20">
          {/* Col 1: Wordmark & Full Legal Name */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg overflow-hidden border border-[#B79A5B] bg-[#243B78] shrink-0">
                <img
                  src={settings.localLogoPath || '/src/assets/images/byzantine_mosaic_cross_emblem_1792663601443.jpg'}
                  alt="Хрест апостола Варнави"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="font-serif text-xl font-bold tracking-tight text-white block">
                  {settings.churchName}
                </span>
                <span className="text-xs text-[#B79A5B] block">
                  Заснована {officialInfo.foundationDate}
                </span>
              </div>
            </div>

            <p className="text-xs text-[#F5F0E5]/80 leading-relaxed font-sans max-w-md">
              {officialInfo.legalName}
            </p>

            <div className="pt-2 text-xs text-[#B79A5B] space-y-1">
              <div>Пастор: <strong>{officialInfo.pastorFullName}</strong></div>
              <div>Місто: <strong>{officialInfo.city}</strong></div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-serif font-bold text-[#B79A5B] uppercase tracking-wider">
              Розділи сайту
            </div>
            <ul className="space-y-2 text-xs font-sans text-[#F5F0E5]/90">
              <li>
                <button
                  onClick={() => onNavigate('hero')}
                  className="hover:text-[#B79A5B] transition-colors cursor-pointer"
                >
                  Головна сторінка
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#B79A5B] transition-colors cursor-pointer"
                >
                  Про церкву та історія
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('location')}
                  className="hover:text-[#B79A5B] transition-colors cursor-pointer"
                >
                  Адреса та як нас знайти
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('leaders')}
                  className="hover:text-[#B79A5B] transition-colors cursor-pointer"
                >
                  Лідери церкви
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('donations')}
                  className="hover:text-[#B79A5B] transition-colors cursor-pointer"
                >
                  Пожертва (онлайн)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('gallery')}
                  className="hover:text-[#B79A5B] transition-colors cursor-pointer"
                >
                  Галерея життя церкви
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contacts')}
                  className="hover:text-[#B79A5B] transition-colors cursor-pointer"
                >
                  Контакти та звернення
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Gathering Time & Address */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs font-serif font-bold text-[#B79A5B] uppercase tracking-wider">
              Зібрання та зв’язок
            </div>
            <div className="space-y-2.5 text-xs text-[#F5F0E5]/80">
              <div className="p-3 rounded-xl bg-[#243B78]/50 border border-[#B79A5B]/20">
                <span className="text-[#B79A5B] font-semibold block uppercase text-[10px]">
                  Час церковного зібрання:
                </span>
                <span className="text-white font-bold text-sm block">
                  Щосуботи з 14:00 до 17:00
                </span>
              </div>

              <div>
                <span className="text-[#B79A5B] block font-medium">Адреса:</span>
                <span>{address.street}, {address.city}</span>
              </div>

              <div className="pt-2 flex items-center gap-3">
                <span className="p-2 rounded-lg bg-[#243B78] text-white opacity-60">
                  <Youtube className="w-4 h-4" />
                </span>
                <span className="p-2 rounded-lg bg-[#243B78] text-white opacity-60">
                  <Instagram className="w-4 h-4" />
                </span>
                <span className="p-2 rounded-lg bg-[#243B78] text-white opacity-60">
                  <Facebook className="w-4 h-4" />
                </span>
                <span className="text-[11px] text-[#B79A5B] italic">
                  Соцмережі додаються
                </span>
              </div>

              <div className="pt-3">
                <button
                  onClick={onOpenSanityStatus}
                  className="inline-flex items-center gap-1.5 text-[11px] text-[#B79A5B] hover:text-white underline cursor-pointer"
                >
                  <Database className="w-3.5 h-3.5" />
                  <span>Параметри Sanity CMS</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Scripture */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F5F0E5]/60">
          <div>
            © 1995–{new Date().getFullYear()} {settings.churchName}. Всі права захищено.
          </div>
          <div className="font-serif italic text-[#B79A5B]">
            «Бог любить того, хто з радістю дає» (2 Кор. 9:7)
          </div>
        </div>
      </div>
    </footer>
  );
}
