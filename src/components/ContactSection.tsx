import { useState } from 'react';
import {
  MapPin,
  Calendar,
  User,
  Send,
  CheckCircle2,
  Youtube,
  Instagram,
  Facebook,
  MessageCircle,
} from 'lucide-react';
import type { SiteSettings } from '../types/sanity';

interface ContactSectionProps {
  settings: SiteSettings;
}

export function ContactSection({ settings }: ContactSectionProps) {
  const { address, officialInfo, socialMedia } = settings;
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.message) return;
    setIsSubmitted(true);
  };

  return (
    <section id="contacts" className="py-20 bg-[#FFFCF5] border-t border-[#B79A5B]/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-serif font-semibold tracking-widest text-[#B79A5B] uppercase">
            <span>✢</span>
            <span>Контакти</span>
            <span>✢</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#18264F] tracking-tight">
            Ми відкриті до спілкування
          </h2>
          <p className="text-base sm:text-lg text-[#38343A] leading-relaxed max-w-2xl mx-auto font-sans">
            Маєте запитання про зібрання, хочете познайомитися з нашою громадою або дізнатися більше про церковне життя? Будемо раді поспілкуватися з вами.
          </p>
          <div className="w-20 h-0.5 bg-[#B79A5B] mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Church Coordinates */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-[#F5F0E5] border border-[#B79A5B]/40 shadow-xs space-y-5">
              <div className="flex items-center gap-2 text-xs font-serif font-semibold text-[#B79A5B] uppercase tracking-wider">
                <span>✢</span>
                <span>Інформація для зв’язку</span>
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-white border border-[#B79A5B]/30 text-[#B79A5B] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#B79A5B] font-semibold block uppercase">Адреса</span>
                    <div className="font-bold text-[#18264F]">
                      {address.city}, {address.street}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pt-3 border-t border-[#B79A5B]/20">
                  <div className="p-2.5 rounded-xl bg-white border border-[#B79A5B]/30 text-[#B79A5B] shrink-0">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#B79A5B] font-semibold block uppercase">Час зібрань</span>
                    <div className="font-bold text-[#18264F]">
                      щосуботи з 14:00 до 17:00
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pt-3 border-t border-[#B79A5B]/20">
                  <div className="p-2.5 rounded-xl bg-white border border-[#B79A5B]/30 text-[#B79A5B] shrink-0">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#B79A5B] font-semibold block uppercase">Пастор церкви</span>
                    <div className="font-bold text-[#18264F]">
                      {officialInfo?.pastorFullName}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Section */}
            <div className="p-8 rounded-3xl bg-[#18264F] text-[#FFFCF5] border-2 border-[#B79A5B]/50 shadow-md space-y-5">
              <div className="space-y-1">
                <h3 className="font-serif font-bold text-xl text-[#FFFCF5]">
                  Ми в соціальних мережах
                </h3>
                <p className="text-xs text-[#F5F0E5]/80 leading-relaxed font-sans">
                  Слідкуйте за життям церкви, переглядайте проповіді та долучайтеся до нашої онлайн-спільноти.
                </p>
              </div>

              <div className="space-y-3 text-xs text-[#F5F0E5]/90">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-[#243B78]/70 border border-[#B79A5B]/30">
                  <Youtube className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-sans">YouTube</strong>
                    <span>{socialMedia?.youtubeNotice}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-[#243B78]/70 border border-[#B79A5B]/30">
                  <Instagram className="w-4 h-4 text-pink-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-sans">Instagram</strong>
                    <span>{socialMedia?.instagramNotice}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-[#243B78]/70 border border-[#B79A5B]/30">
                  <Facebook className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-sans">Facebook</strong>
                    <span>{socialMedia?.facebookNotice}</span>
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#F5F0E5]/10 border border-[#B79A5B]/30 text-center text-xs text-[#B79A5B]">
                Посилання на соціальні мережі будуть додані найближчим часом.
              </div>

              <p className="text-xs font-serif italic text-center text-[#F5F0E5]/90 pt-1">
                Будемо раді бачити вас на наших зібраннях і залишатися на зв’язку!
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Contact / Prayer Request Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#FFFCF5] p-8 sm:p-10 rounded-3xl border border-[#B79A5B]/40 shadow-xs">
              <div className="flex items-center gap-3 pb-4 mb-6 border-b border-[#B79A5B]/20">
                <div className="p-2.5 rounded-xl bg-[#F5F0E5] text-[#243B78] border border-[#B79A5B]/30">
                  <MessageCircle className="w-5 h-5 text-[#B79A5B]" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-xl text-[#18264F]">
                    Надіслати повідомлення або запитання
                  </h3>
                  <p className="text-xs text-[#38343A]/80">
                    Напишіть нам, якщо маєте запитання щодо зібрань чи потребуєте молитви
                  </p>
                </div>
              </div>

              {isSubmitted ? (
                <div className="py-12 px-6 text-center space-y-4">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-serif font-bold text-2xl text-[#18264F]">
                    Дякуємо! Ваше повідомлення надіслано
                  </h4>
                  <p className="text-sm text-[#38343A] max-w-md mx-auto leading-relaxed">
                    Ми з радістю відповімо вам або підтримаємо у молитві. Нехай Господь благословить вас і ваш дім!
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', contact: '', message: '' });
                    }}
                    className="px-5 py-2.5 text-xs font-semibold bg-[#243B78] hover:bg-[#18264F] text-[#FFFCF5] rounded-xl transition-colors cursor-pointer"
                  >
                    Надіслати ще одне повідомлення
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#18264F] mb-1.5">
                        Ваше ім’я *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Олександр або Марія"
                        className="w-full px-4 py-2.5 text-sm bg-[#F5F0E5]/50 border border-[#B79A5B]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#B79A5B]/40 focus:bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[#18264F] mb-1.5">
                        Телефон або Email (для зв’язку)
                      </label>
                      <input
                        type="text"
                        value={formData.contact}
                        onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                        placeholder="+380... або email@domain.com"
                        className="w-full px-4 py-2.5 text-sm bg-[#F5F0E5]/50 border border-[#B79A5B]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#B79A5B]/40 focus:bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#18264F] mb-1.5">
                      Ваше запитання чи повідомлення *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Напишіть ваше запитання про життя громади чи молитовне прохання..."
                      className="w-full px-4 py-2.5 text-sm bg-[#F5F0E5]/50 border border-[#B79A5B]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#B79A5B]/40 focus:bg-white resize-y"
                    />
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-xs text-[#38343A]/70">
                      * Обов’язкові поля
                    </span>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold text-[#FFFCF5] bg-[#243B78] hover:bg-[#18264F] rounded-xl border border-[#B79A5B]/50 shadow-xs transition-colors cursor-pointer active:scale-95"
                    >
                      <Send className="w-3.5 h-3.5 text-[#B79A5B]" />
                      <span>Надіслати повідомлення</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
