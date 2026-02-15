import React, { useEffect, useState } from "react";
import { en, te, ta, ml, hi } from "../locales";
import {
  LanguageContext,
  availableLanguages,
  type Language,
  type Translations,
} from "./useLanguage";

const languages: Record<Language, Translations> = {
  en,
  te,
  ta,
  ml,
  hi,
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>(() => {
    return (localStorage.getItem("language") as Language) || "en";
  });

  const [translations, setTranslations] = useState<Translations>(
    languages[language],
  );

  useEffect(() => {
    localStorage.setItem("language", language);
    setTranslations(languages[language]);
  }, [language]);

  const t = (key: string): string => {
    const keys = key.split(".");
    let value: string | Translations | undefined = translations;

    for (const k of keys) {
      if (value === undefined || value === null || typeof value === "string") {
        return key;
      }
      value = (value as Translations)[k];
    }

    return typeof value === "string" ? value : key;
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, t, availableLanguages }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
