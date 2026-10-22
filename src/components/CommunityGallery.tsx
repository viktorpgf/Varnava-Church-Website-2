import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import type { GalleryPhoto } from '../types/sanity';

interface CommunityGalleryProps {
  gallery: GalleryPhoto[];
}

export function CommunityGallery({ gallery }: CommunityGalleryProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const lightboxRef = useRef<HTMLDialogElement>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const getCurrentIndex = () => {
    const track = trackRef.current;
    if (!track) return 0;

    const slides = Array.from(track.children) as HTMLElement[];
    return slides.reduce((nearestIndex, slide, index) => {
      const nearestSlide = slides[nearestIndex];
      const slideOffset = track.scrollLeft + slide.getBoundingClientRect().left - track.getBoundingClientRect().left;
      const nearestOffset = track.scrollLeft + nearestSlide.getBoundingClientRect().left - track.getBoundingClientRect().left;
      return Math.abs(slideOffset - track.scrollLeft) < Math.abs(nearestOffset - track.scrollLeft)
        ? index
        : nearestIndex;
    }, 0);
  };

  const goToSlide = (index: number) => {
    const track = trackRef.current;
    const slide = track?.children.item(index) as HTMLElement | null;
    if (track && slide) {
      const left = track.scrollLeft + slide.getBoundingClientRect().left - track.getBoundingClientRect().left;
      track.scrollTo({ left, behavior: 'smooth' });
    }
  };

  const move = (direction: number) => {
    if (gallery.length < 2) return;
    goToSlide((getCurrentIndex() + direction + gallery.length) % gallery.length);
  };

  useEffect(() => {
    const dialog = lightboxRef.current;
    if (!dialog) return;

    if (selectedIndex !== null && !dialog.open) dialog.showModal();
    if (selectedIndex === null && dialog.open) dialog.close();
  }, [selectedIndex]);

  useEffect(() => {
    if (gallery.length < 2 || isPaused || selectedIndex !== null) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const interval = window.setInterval(() => {
      const track = trackRef.current;
      if (!track) return;

      const slides = Array.from(track.children) as HTMLElement[];
      const currentIndex = getCurrentIndex();
      const nextSlide = slides[(currentIndex + 1) % slides.length];
      if (nextSlide) {
        const left = track.scrollLeft + nextSlide.getBoundingClientRect().left - track.getBoundingClientRect().left;
        track.scrollTo({ left, behavior: 'smooth' });
      }
    }, 5000);

    return () => window.clearInterval(interval);
  }, [gallery.length, isPaused, selectedIndex]);

  return (
    <section id="gallery" className="border-t border-[#B79A5B]/30 bg-[#F5F0E5] py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-6 text-center text-3xl font-serif font-bold text-[#18264F] tracking-tight sm:text-4xl lg:text-5xl">
          Галерея
        </h2>
        <div
          ref={trackRef}
          aria-label="Фотогалерея"
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-6"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocusCapture={() => setIsPaused(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setIsPaused(false);
          }}
        >
          {gallery.map((photo, index) => (
            <button
              key={photo.id}
              type="button"
              aria-label={`Відкрити фото: ${photo.title}`}
              className="group aspect-[4/3] w-[min(88vw,26rem)] flex-none snap-start overflow-hidden bg-[#18264F] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#243B78] sm:w-[min(60vw,26rem)]"
              onClick={() => setSelectedIndex(index)}
            >
              <img
                src={photo.localPath}
                alt={photo.title}
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </button>
          ))}
        </div>

        {gallery.length > 1 && (
          <div className="mt-5 flex justify-center gap-3">
            <button
              type="button"
              aria-label="Попереднє фото"
              className="grid size-11 place-items-center rounded-full border border-[#B79A5B]/60 bg-[#FFFCF5] text-[#18264F] transition-colors hover:bg-[#18264F] hover:text-[#FFFCF5] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#243B78]"
              onClick={() => move(-1)}
            >
              <ChevronLeft aria-hidden="true" className="size-5" />
            </button>
            <button
              type="button"
              aria-label="Наступне фото"
              className="grid size-11 place-items-center rounded-full border border-[#B79A5B]/60 bg-[#FFFCF5] text-[#18264F] transition-colors hover:bg-[#18264F] hover:text-[#FFFCF5] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#243B78]"
              onClick={() => move(1)}
            >
              <ChevronRight aria-hidden="true" className="size-5" />
            </button>
          </div>
        )}

        <dialog
          ref={lightboxRef}
          aria-label={selectedIndex === null ? 'Перегляд фото' : gallery[selectedIndex]?.title}
          className="m-0 h-full max-h-none w-full max-w-none bg-transparent p-4 backdrop:bg-black/85"
          onClose={() => setSelectedIndex(null)}
          onClick={(event) => {
            if (event.target === event.currentTarget) lightboxRef.current?.close();
          }}
        >
          {selectedIndex !== null && gallery[selectedIndex] && (
            <div className="relative flex h-full items-center justify-center">
              <button
                type="button"
                aria-label="Закрити фото"
                className="absolute right-2 top-2 z-10 grid size-11 place-items-center rounded-full bg-[#FFFCF5] text-[#18264F]"
                onClick={() => lightboxRef.current?.close()}
              >
                <X aria-hidden="true" className="size-5" />
              </button>
              {gallery.length > 1 && (
                <button
                  type="button"
                  aria-label="Попереднє фото"
                  className="absolute left-2 z-10 grid size-11 place-items-center rounded-full bg-[#FFFCF5] text-[#18264F] sm:left-6"
                  onClick={() => setSelectedIndex((selectedIndex - 1 + gallery.length) % gallery.length)}
                >
                  <ChevronLeft aria-hidden="true" className="size-5" />
                </button>
              )}
              <img
                src={gallery[selectedIndex].localPath}
                alt={gallery[selectedIndex].title}
                className="max-h-full max-w-full object-contain"
              />
              {gallery.length > 1 && (
                <button
                  type="button"
                  aria-label="Наступне фото"
                  className="absolute right-2 z-10 grid size-11 place-items-center rounded-full bg-[#FFFCF5] text-[#18264F] sm:right-6"
                  onClick={() => setSelectedIndex((selectedIndex + 1) % gallery.length)}
                >
                  <ChevronRight aria-hidden="true" className="size-5" />
                </button>
              )}
            </div>
          )}
        </dialog>
      </div>
    </section>
  );
}
