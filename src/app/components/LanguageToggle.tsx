import { useLanguage } from '../context/LanguageContext';
import { trackLanguageChange } from '../utils/analytics';

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  const handleLanguageToggle = () => {
    toggleLanguage();
    trackLanguageChange(language === 'en' ? 'id' : 'en');
  };

  return (
    <button
      onClick={handleLanguageToggle}
      className="fixed top-6 right-6 md:top-12 md:right-12 z-50 flex items-center gap-2 px-4 py-2 border border-black bg-white transition-colors hover:bg-black hover:text-white group"
      aria-label="Toggle Language"
    >
      <span className="text-sm font-normal tracking-wide">
        {language === 'en' ? 'EN' : 'ID'}
      </span>
      <div className="w-px h-4 bg-black group-hover:bg-white" />
      <span className="text-sm font-light text-neutral-600 group-hover:text-white">
        {language === 'en' ? 'ID' : 'EN'}
      </span>
    </button>
  );
}