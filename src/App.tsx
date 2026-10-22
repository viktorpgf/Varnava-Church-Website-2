import { useState, useEffect, useCallback } from 'react';
import { RefreshCw, Database, AlertCircle } from 'lucide-react';
import type { ChurchFullData } from './types/sanity';
import { fetchCompleteChurchData } from './sanity/queries';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { MapAndLocationSection } from './components/MapAndLocationSection';
import { TeamSection } from './components/TeamSection';
import { DonationsSection } from './components/DonationsSection';
import { CommunityGallery } from './components/CommunityGallery';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { SanityStatusDrawer } from './components/SanityStatusDrawer';

export default function App() {
  const [data, setData] = useState<ChurchFullData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('hero');

  const loadData = useCallback(async () => {
    setIsLoading(true);
    try {
      const fullData = await fetchCompleteChurchData();
      setData(fullData);
    } catch (err) {
      console.error('Error fetching church data:', err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleUpdateConfig = (projectId: string, dataset: string) => {
    if (typeof window !== 'undefined') {
      if (projectId) {
        sessionStorage.setItem('SANITY_PROJECT_ID', projectId);
      } else {
        sessionStorage.removeItem('SANITY_PROJECT_ID');
      }

      if (dataset) {
        sessionStorage.setItem('SANITY_DATASET', dataset);
      } else {
        sessionStorage.removeItem('SANITY_DATASET');
      }
    }
    loadData();
  };

  // Loading state
  if (isLoading && !data) {
    return (
      <div className="min-h-screen bg-[#FFFCF5] flex flex-col items-center justify-center p-6 text-[#38343A]">
        <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-[#B79A5B] bg-[#18264F] flex items-center justify-center mb-4 shadow-md animate-pulse">
          <img
            src="/src/assets/images/byzantine_mosaic_cross_emblem_1792663601443.jpg"
            alt="Хрест апостола Варнави"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="font-serif text-2xl font-bold text-[#18264F] mb-1">
          Церква Святого апостола Варнави
        </div>
        <div className="text-xs text-[#B79A5B] font-serif uppercase tracking-widest flex items-center gap-2 mt-2">
          <RefreshCw className="w-3.5 h-3.5 animate-spin text-[#B79A5B]" />
          <span>Завантаження даних громади із Sanity CMS...</span>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen bg-[#FFFCF5] flex flex-col items-center justify-center p-6 text-[#38343A]">
        <div className="p-6 bg-[#F5F0E5] rounded-3xl border border-[#B79A5B]/40 max-w-md text-center space-y-4 shadow-sm">
          <AlertCircle className="w-10 h-10 text-[#B79A5B] mx-auto" />
          <h2 className="font-serif text-xl font-bold text-[#18264F]">
            Не вдалося завантажити дані
          </h2>
          <p className="text-xs text-[#38343A] leading-relaxed">
            Виникла тимчасова помилка при ініціалізації контенту. Спробуйте оновити сторінку.
          </p>
          <button
            onClick={loadData}
            className="px-5 py-2.5 text-xs font-semibold bg-[#243B78] text-[#FFFCF5] rounded-xl hover:bg-[#18264F] transition-colors"
          >
            Спробувати знову
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFCF5] text-[#38343A] font-sans antialiased">
      {/* Sanity Demo mode notice bar */}
      {data.isDemoMode && (
        <div className="bg-[#F5F0E5] border-b border-[#B79A5B]/40 py-2 px-4 text-xs text-[#18264F] flex flex-col sm:flex-row items-center justify-center gap-2 text-center">
          <div className="flex items-center gap-1.5 font-medium">
            <Database className="w-3.5 h-3.5 text-[#B79A5B] shrink-0" />
            <span>
              <strong>Демонстраційний режим:</strong> контент церкви Святого апостола Варнави завантажено з локального макета.
            </span>
          </div>
          <button
            onClick={() => setIsDrawerOpen(true)}
            className="underline underline-offset-2 font-semibold hover:text-[#243B78] shrink-0 cursor-pointer text-[#B79A5B]"
          >
            Налаштувати Sanity CMS &rarr;
          </button>
        </div>
      )}

      {/* Main Navigation */}
      <Navbar
        settings={data.siteSettings}
        isDemoMode={data.isDemoMode}
        onOpenSanityStatus={() => setIsDrawerOpen(true)}
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Головна сторінка */}
        <HeroSection
          homePage={data.homePage}
          settings={data.siteSettings}
          onNavigate={scrollToSection}
        />

        {/* 2. Про церкву */}
        <AboutSection
          about={data.about}
          onNavigate={scrollToSection}
        />

        {/* 3. Адреса та як нас знайти */}
        <MapAndLocationSection settings={data.siteSettings} />

        {/* 4. Лідери церкви */}
        <TeamSection leaders={data.leaders} />

        {/* 5. Пожертва */}
        <DonationsSection settings={data.siteSettings} />

        {/* 6. Галерея */}
        <CommunityGallery gallery={data.gallery} />

        {/* 7. Контакти */}
        <ContactSection settings={data.siteSettings} />
      </main>

      {/* Footer */}
      <Footer
        settings={data.siteSettings}
        onOpenSanityStatus={() => setIsDrawerOpen(true)}
        onNavigate={scrollToSection}
      />

      {/* Sanity CMS Drawer & Tester */}
      <SanityStatusDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        churchData={data}
        onUpdateConfig={handleUpdateConfig}
        onRefreshData={loadData}
      />
    </div>
  );
}
