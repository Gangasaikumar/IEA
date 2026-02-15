import { createContext, useContext } from "react";

export type Language = "en" | "te" | "ta" | "ml" | "hi";

// Recursive type for nested translations
export interface Translations {
  [key: string]: string | Translations;
}

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  availableLanguages: { code: Language; label: string; nativeLabel: string }[];
}

export const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export const availableLanguages: {
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

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
