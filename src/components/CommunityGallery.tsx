import { Camera } from 'lucide-react';
import type { GalleryPhoto } from '../types/sanity';

interface CommunityGalleryProps {
  gallery: GalleryPhoto[];
}

export function CommunityGallery({ gallery }: CommunityGalleryProps) {
  return (
    <section id="gallery" className="py-20 bg-[#F5F0E5] border-t border-[#B79A5B]/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-serif font-semibold tracking-widest text-[#B79A5B] uppercase">
            <span>✢</span>
            <span>Галерея</span>
            <span>✢</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#18264F] tracking-tight">
            Життя нашої церкви
          </h2>
          <div className="w-20 h-0.5 bg-[#B79A5B] mx-auto" />
          <p className="text-base sm:text-lg text-[#38343A] leading-relaxed max-w-2xl mx-auto font-sans pt-2">
            Церква — це не лише спільні зібрання, а й люди, молитви, спілкування та моменти, які ми розділяємо разом.
          </p>
          <p className="text-sm text-[#38343A] max-w-2xl mx-auto font-sans">
            У нашій галереї ми ділимося фотографіями з церковного життя, богослужінь, спільних зустрічей та особливих подій громади. Запрошуємо вас ближче познайомитися з нашою церквою через фотографії, які відображають життя, служіння та спілкування нашої громади.
          </p>
        </div>

        {/* Arched Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {gallery.map((photo) => (
            <div
              key={photo.id}
              className="group bg-[#FFFCF5] rounded-t-full rounded-b-2xl overflow-hidden border-2 border-[#B79A5B]/40 hover:border-[#B79A5B] shadow-xs hover:shadow-md transition-all flex flex-col"
            >
              <div className="aspect-3/4 overflow-hidden bg-[#18264F] relative">
                <img
                  src={photo.localPath}
                  alt={photo.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#18264F]/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                <div className="absolute top-3 right-3 bg-[#18264F]/80 backdrop-blur-xs text-[#B79A5B] text-[10px] font-serif font-semibold px-2 py-0.5 rounded-full border border-[#B79A5B]/40">
                  {photo.category}
                </div>
                <div className="absolute bottom-3 left-3 right-3 text-[#FFFCF5] space-y-0.5">
                  <div className="font-serif font-bold text-sm">
                    {photo.title}
                  </div>
                  {photo.description && (
                    <p className="text-[11px] text-[#F5F0E5]/80 line-clamp-2">
                      {photo.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery note */}
        <div className="mt-12 text-center text-xs text-[#38343A]/80 flex items-center justify-center gap-2">
          <Camera className="w-4 h-4 text-[#B79A5B]" />
          <span>Світлини зі щотижневих зібрань та спільних святкувань громади Святого апостола Варнави</span>
        </div>
      </div>
    </section>
  );
}
