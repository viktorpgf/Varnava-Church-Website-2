import { useState } from 'react';
import { Menu, X, MapPin, Database } from 'lucide-react';
import type { SiteSettings } from '../types/sanity';

interface NavbarProps {
  settings: SiteSettings;
  isDemoMode: boolean;
  onOpenSanityStatus: () => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export function Navbar({
  settings,
  isDemoMode,
  onOpenSanityStatus,
  activeSection,
  onNavigate,
}: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'hero', label: 'Головна' },
    { id: 'about', label: 'Про церкву' },
    { id: 'location', label: 'Як нас знайти' },
    { id: 'leaders', label: 'Лідери церкви' },
    { id: 'donations', label: 'Пожертва' },
    { id: 'gallery', label: 'Галерея' },
    { id: 'contacts', label: 'Контакти' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FFFCF5]/95 backdrop-blur-md border-b border-[#B79A5B]/30 shadow-xs transition-colors">
      {/* Top golden announcement line */}
      <div className="bg-[#18264F] text-[#F5F0E5] text-[11px] sm:text-xs py-1.5 px-4 tracking-wider text-center border-b border-[#B79A5B]/40 flex items-center justify-center gap-2">
        <span className="text-[#B79A5B] font-serif font-bold">✢</span>
        <span>Зібрання церкви: <strong>щосуботи з 14:00 до 17:00</strong> · Київ, вул. Вадима Гетьмана, 1А</span>
        <span className="text-[#B79A5B] font-serif font-bold">✢</span>
      </div>

      {/* Main Top Bar (3-Zone Contract) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-6">
        {/* Zone 1: Byzantine Emblem & Church Title */}
        <button
          onClick={() => handleLinkClick('hero')}
          className="flex items-center gap-3 text-left whitespace-nowrap shrink-0 group cursor-pointer"
        >
          <div className="w-11 h-11 rounded-lg overflow-hidden border border-[#B79A5B]/60 shadow-xs bg-[#18264F] flex items-center justify-center shrink-0">
            <img
              src={settings.localLogoPath || '/src/assets/images/byzantine_mosaic_cross_emblem_1792663601443.jpg'}
              alt="Хрест апостола Варнави"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-[#18264F] leading-tight group-hover:text-[#243B78] transition-colors">
              {settings.churchName}
            </span>
            <span className="text-[11px] text-[#B79A5B] font-sans font-medium tracking-wide">
              Християнська громада повного Євангелія
            </span>
          </div>
        </button>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden xl:flex items-center gap-6 text-sm font-medium text-[#38343A]">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className={`hover:text-[#243B78] transition-colors cursor-pointer py-1 border-b-2 whitespace-nowrap shrink-0 ${
                activeSection === link.id
                  ? 'border-[#B79A5B] text-[#18264F] font-semibold'
                  : 'border-transparent'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Zone 3: Primary CTA + Sanity Status Indicator */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenSanityStatus}
            className={`text-xs px-2.5 py-1.5 rounded-lg border flex items-center gap-1.5 transition-colors cursor-pointer ${
              isDemoMode
                ? 'bg-[#F5F0E5] text-[#18264F] border-[#B79A5B]/40 hover:bg-[#EBE4D5]'
                : 'bg-emerald-50 text-emerald-900 border-emerald-300'
            }`}
            title="Переглянути стан Sanity CMS"
          >
            <Database className="w-3.5 h-3.5 text-[#B79A5B]" />
            <span className="font-medium">
              {isDemoMode ? 'Sanity: Демо' : 'Sanity: Live'}
            </span>
          </button>

          <button
            onClick={() => handleLinkClick('location')}
            className="px-4 py-2.5 text-xs font-semibold text-[#FFFCF5] bg-[#243B78] hover:bg-[#18264F] rounded-lg border border-[#B79A5B]/50 shadow-xs transition-all whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer"
          >
            <MapPin className="w-3.5 h-3.5 text-[#B79A5B]" />
            <span>Як нас знайти</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2 xl:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-[#18264F] hover:bg-[#F5F0E5] rounded-lg transition-colors cursor-pointer"
            aria-label="Відкрити меню"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="xl:hidden bg-[#FFFCF5] border-t border-[#B79A5B]/30 px-6 py-5 space-y-3 shadow-lg">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`text-left px-3 py-2 text-sm font-medium rounded-lg transition-colors cursor-pointer ${
                  activeSection === link.id
                    ? 'bg-[#F5F0E5] text-[#18264F] font-semibold'
                    : 'text-[#38343A] hover:bg-[#F5F0E5]/60'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>
          <div className="pt-3 border-t border-[#B79A5B]/20 flex flex-col gap-2">
            <button
              onClick={() => handleLinkClick('location')}
              className="w-full py-2.5 text-center text-xs font-semibold text-[#FFFCF5] bg-[#243B78] rounded-lg flex items-center justify-center gap-2 cursor-pointer"
            >
              <MapPin className="w-3.5 h-3.5 text-[#B79A5B]" />
              <span>Як нас знайти</span>
            </button>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenSanityStatus();
              }}
              className="w-full py-2 text-center text-xs text-[#18264F] bg-[#F5F0E5] border border-[#B79A5B]/30 rounded-lg flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Database className="w-3.5 h-3.5 text-[#B79A5B]" />
              <span>Налаштування Sanity CMS ({isDemoMode ? 'Демонстраційний режим' : 'Live'})</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
