import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { translations, type Language, type Translation } from './translations';

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: Translation;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = window.localStorage.getItem('xyz-language');
    return saved === 'en' || saved === 'ru' || saved === 'tr' ? saved : 'tr';
  });

  useEffect(() => {
    document.documentElement.lang = language;
    window.localStorage.setItem('xyz-language', language);
  }, [language]);

  const value = useMemo(
    () => ({ language, setLanguage, t: translations[language] as Translation }),
    [language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used inside LanguageProvider');
  return context;
}
