import React, { createContext, useContext, useEffect, useState } from "react";
import en from "../locales/en.json";
import te from "../locales/te.json";
import ta from "../locales/ta.json";
import ml from "../locales/ml.json";
import hi from "../locales/hi.json";

type Language = "en" | "te" | "ta" | "ml" | "hi";

type Translations = Record<string, any>;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  availableLanguages: { code: Language; label: string; nativeLabel: string }[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

const languages: Record<Language, Translations> = {
  en,
  te,
  ta,
  ml,
  hi,
};

const availableLanguages: {
  code: Language;
  label: string;
  nativeLabel: string;
}[] = [
  { code: "en", label: "English", nativeLabel: "English" },
  { code: "te", label: "Telugu", nativeLabel: "తెలుగు" },
  { code: "ta", label: "Tamil", nativeLabel: "தமிழ்" },
  { code: "ml", label: "Malayalam", nativeLabel: "മലയാളം" },
  { code: "hi", label: "Hindi", nativeLabel: "हिंदी" },
];

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

  const t = (key: string) => {
    const keys = key.split(".");
    let value: any = translations;
    for (const k of keys) {
      if (value === undefined || value === null) return key;
      value = value[k];
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

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
