import React, { createContext, useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  changeLanguage: (lang: Language) => void;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    return savedLanguage || 'fr';
  });
  
  const isRTL = false; // French is not RTL

  useEffect(() => {
    // Update the document dir attribute and HTML lang when language changes
    const html = document.documentElement;
    html.setAttribute('dir', 'ltr');
    html.setAttribute('lang', language);
    
    // Change the i18next language
    i18n.changeLanguage(language);
    
    // Save to localStorage
    localStorage.setItem('language', language);
  }, [language, i18n]);

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
