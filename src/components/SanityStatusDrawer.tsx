import { useState } from 'react';
import {
  Settings,
  CheckCircle2,
  AlertTriangle,
  ExternalLink,
  Copy,
  Check,
  RefreshCw,
  X,
  FileCode,
  Key,
} from 'lucide-react';
import type { ChurchFullData } from '../types/sanity';

interface SanityStatusDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  churchData: ChurchFullData;
  onUpdateConfig: (projectId: string, dataset: string) => void;
  onRefreshData: () => void;
}

export function SanityStatusDrawer({
  isOpen,
  onClose,
  churchData,
  onUpdateConfig,
  onRefreshData,
}: SanityStatusDrawerProps) {
  const [activeTab, setActiveTab] = useState<'status' | 'env' | 'schemas'>('status');
  const [customProjectId, setCustomProjectId] = useState(
    churchData.sanityStatus.projectId || ''
  );
  const [customDataset, setCustomDataset] = useState(
    churchData.sanityStatus.dataset || 'production'
  );
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateConfig(customProjectId.trim(), customDataset.trim());
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs">
      <div
        className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col max-h-[90vh]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="sanity-status-title"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-100 bg-stone-50">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-amber-100 text-amber-900 rounded-lg">
              <Settings className="w-5 h-5" />
            </div>
            <div>
              <h2 id="sanity-status-title" className="text-base font-semibold text-stone-900">
                Інтеграція Sanity Headless CMS
              </h2>
              <p className="text-xs text-stone-500">
                Стан підключення та параметри контенту
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-stone-700 rounded-lg hover:bg-stone-200/60 transition-colors"
            aria-label="Закрити"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Controls */}
        <div className="flex border-b border-stone-200 px-6 pt-2 bg-stone-50/50">
          <button
            onClick={() => setActiveTab('status')}
            className={`pb-3 px-3 text-xs font-medium border-b-2 transition-colors ${
              activeTab === 'status'
                ? 'border-amber-700 text-amber-950 font-semibold'
                : 'border-transparent text-stone-500 hover:text-stone-900'
            }`}
          >
            Стан підключення
          </button>
          <button
            onClick={() => setActiveTab('env')}
            className={`pb-3 px-3 text-xs font-medium border-b-2 transition-colors ${
              activeTab === 'env'
                ? 'border-amber-700 text-amber-950 font-semibold'
                : 'border-transparent text-stone-500 hover:text-stone-900'
            }`}
          >
            Змінні середовища (.env)
          </button>
          <button
            onClick={() => setActiveTab('schemas')}
            className={`pb-3 px-3 text-xs font-medium border-b-2 transition-colors ${
              activeTab === 'schemas'
                ? 'border-amber-700 text-amber-950 font-semibold'
                : 'border-transparent text-stone-500 hover:text-stone-900'
            }`}
          >
            Схеми контенту (GROQ)
          </button>
        </div>

        {/* Content body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-sm text-stone-700">
          {activeTab === 'status' && (
            <div className="space-y-5">
              {/* Status banner */}
              <div
                className={`p-4 rounded-xl border flex items-start gap-3.5 ${
                  churchData.sanityStatus.isConfigured && !churchData.isDemoMode
                    ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                    : 'bg-amber-50/80 border-amber-200 text-stone-800'
                }`}
              >
                {churchData.sanityStatus.isConfigured && !churchData.isDemoMode ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                ) : (
                  <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                )}
                <div className="space-y-1">
                  <div className="font-semibold text-stone-900">
                    {churchData.sanityStatus.isConfigured && !churchData.isDemoMode
                      ? 'Підключено до реального Sanity CMS'
                      : 'Демонстраційний режим (Sanity очікує налаштування)'}
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {churchData.sanityStatus.error ||
                      (churchData.isDemoMode
                        ? 'Сайт використовує локальний макет контенту, оскільки реальний Sanity Project ID ще не вказано або документи в Sanity ще не заповнені.'
                        : 'Всі дані (тексти, розклад, фотографії та реквізити) успішно завантажуються із Sanity CMS у реальному часі через GROQ.')}
                  </p>
                </div>
              </div>

              {/* Live tester input */}
              <form onSubmit={handleApply} className="bg-stone-50 p-4 rounded-xl border border-stone-200 space-y-4">
                <div className="flex items-center gap-2 font-medium text-stone-900 text-xs tracking-wider uppercase">
                  <Key className="w-4 h-4 text-stone-500" />
                  Швидке тестування облікових даних Sanity
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">
                      Sanity Project ID
                    </label>
                    <input
                      type="text"
                      value={customProjectId}
                      onChange={(e) => setCustomProjectId(e.target.value)}
                      placeholder="наприклад, 3do82qim"
                      className="w-full px-3 py-2 text-xs bg-white border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600/30 font-mono"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">
                      Dataset
                    </label>
                    <input
                      type="text"
                      value={customDataset}
                      onChange={(e) => setCustomDataset(e.target.value)}
                      placeholder="production"
                      className="w-full px-3 py-2 text-xs bg-white border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600/30 font-mono"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between pt-1">
                  <span className="text-xs text-stone-500">
                    Зберігається для поточної сесії браузера
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={onRefreshData}
                      className="px-3 py-1.5 text-xs text-stone-600 hover:text-stone-900 bg-white border border-stone-200 rounded-lg flex items-center gap-1.5"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      Оновити
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-1.5 text-xs font-medium text-white bg-stone-900 hover:bg-stone-800 rounded-lg shadow-xs"
                    >
                      Застосувати та протестувати
                    </button>
                  </div>
                </div>
              </form>

              {/* Requirements & steps note */}
              <div className="bg-white p-4 rounded-xl border border-stone-200 text-xs space-y-2 text-stone-600">
                <div className="font-semibold text-stone-900">Як підключити власний Sanity проєкт:</div>
                <ol className="list-decimal pl-4 space-y-1">
                  <li>
                    Створіть безкоштовний проєкт на{' '}
                    <a
                      href="https://www.sanity.io"
                      target="_blank"
                      rel="noreferrer"
                      className="text-amber-800 underline inline-flex items-center gap-0.5"
                    >
                      sanity.io <ExternalLink className="w-3 h-3" />
                    </a>
                  </li>
                  <li>
                    У панелі <code>sanity.io/manage</code> перейдіть у вкладку <strong>API</strong> &rarr; <strong>CORS Origins</strong> та додайте URL вашого сайту з увімкненим <em>Allow credentials</em>.
                  </li>
                  <li>
                    Вкажіть <code>VITE_SANITY_PROJECT_ID</code> у файлі <code>.env</code> або введіть його у форму вище.
                  </li>
                  <li>
                    Заповніть документи <code>siteSettings</code> та <code>homePage</code> у Sanity Studio.
                  </li>
                </ol>
              </div>
            </div>
          )}

          {activeTab === 'env' && (
            <div className="space-y-4">
              <p className="text-xs text-stone-600">
                Для постійного налаштування додайте ці змінні у файл <code>.env</code> у корені проєкту:
              </p>
              <div className="relative bg-stone-900 text-stone-100 p-4 rounded-xl font-mono text-xs">
                <button
                  onClick={() =>
                    handleCopy(
                      `VITE_SANITY_PROJECT_ID="${customProjectId || 'your_project_id_here'}"\nVITE_SANITY_DATASET="${customDataset || 'production'}"\nVITE_SANITY_API_VERSION="2024-03-01"`,
                      'env'
                    )
                  }
                  className="absolute top-3 right-3 px-2 py-1 bg-stone-800 hover:bg-stone-700 text-stone-300 rounded text-xs flex items-center gap-1"
                >
                  {copiedKey === 'env' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  {copiedKey === 'env' ? 'Скопійовано' : 'Копіювати'}
                </button>
                <div className="space-y-1 pr-16 text-stone-300">
                  <div><span className="text-stone-500"># Sanity Project Settings</span></div>
                  <div><span className="text-amber-400">VITE_SANITY_PROJECT_ID</span>="<span className="text-emerald-300">{customProjectId || 'your_project_id_here'}</span>"</div>
                  <div><span className="text-amber-400">VITE_SANITY_DATASET</span>="<span className="text-emerald-300">{customDataset || 'production'}</span>"</div>
                  <div><span className="text-amber-400">VITE_SANITY_API_VERSION</span>="<span className="text-emerald-300">2024-03-01</span>"</div>
                </div>
              </div>
              <div className="text-xs text-stone-500">
                Зверніть увагу: токени запису не потрібні у браузері, оскільки сайт використовує публічні CDN-запити на читання (read-only).
              </div>
            </div>
          )}

          {activeTab === 'schemas' && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs text-stone-600">
                <FileCode className="w-4 h-4 text-stone-500" />
                Готові схеми Sanity знаходяться у папці <code>/sanity-schemas/</code>:
              </div>
              <ul className="space-y-2 text-xs">
                <li className="p-3 bg-stone-50 border border-stone-200 rounded-lg flex items-center justify-between">
                  <div>
                    <span className="font-semibold text-stone-900 font-mono">siteSettings</span>
                    <span className="text-stone-500 ml-2">— назва церкви, логотип, телефони, IBAN, соцмережі</span>
                  </div>
                  <span className="text-stone-400 text-xs">Singleton</span>
                </li>
                <li className="p-3 bg-stone-50 border border-stone-200 rounded-lg flex items-center justify-between">
                  <div>
                    <span className="font-semibold text-stone-900 font-mono">homePage</span>
                    <span className="text-stone-500 ml-2">— заголовок Hero, вірш, цінності, розклад, фотогалерея</span>
                  </div>
                  <span className="text-stone-400 text-xs">Singleton</span>
                </li>
                <li className="p-3 bg-stone-50 border border-stone-200 rounded-lg flex items-center justify-between">
                  <div>
                    <span className="font-semibold text-stone-900 font-mono">sermon</span>
                    <span className="text-stone-500 ml-2">— відео, аудіо, спікер, дата, уривок з Біблії</span>
                  </div>
                  <span className="text-stone-400 text-xs">Collection</span>
                </li>
                <li className="p-3 bg-stone-50 border border-stone-200 rounded-lg flex items-center justify-between">
                  <div>
                    <span className="font-semibold text-stone-900 font-mono">post</span>
                    <span className="text-stone-500 ml-2">— статті, новини служінь, благодійність, заходи</span>
                  </div>
                  <span className="text-stone-400 text-xs">Collection</span>
                </li>
                <li className="p-3 bg-stone-50 border border-stone-200 rounded-lg flex items-center justify-between">
                  <div>
                    <span className="font-semibold text-stone-900 font-mono">teamMember</span>
                    <span className="text-stone-500 ml-2">— пастори, диякони, лідери прославлення</span>
                  </div>
                  <span className="text-stone-400 text-xs">Collection</span>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-stone-200 bg-stone-50 flex items-center justify-between text-xs text-stone-500">
          <div>
            Поточний режим:{' '}
            <span className="font-medium text-stone-800">
              {churchData.isDemoMode ? 'Демонстраційний макет' : 'Sanity Live'}
            </span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-stone-200 hover:bg-stone-300 text-stone-800 rounded-lg font-medium transition-colors"
          >
            Зрозуміло
          </button>
        </div>
      </div>
    </div>
  );
}
