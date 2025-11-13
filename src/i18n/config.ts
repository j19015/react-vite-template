import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resourceLoaders = {
  en: () => import("./locales/en/translation.json"),
  ja: () => import("./locales/ja/translation.json"),
} as const;

type SupportedLanguage = keyof typeof resourceLoaders;

type TranslationModule = Awaited<ReturnType<(typeof resourceLoaders)[SupportedLanguage]>>;

type TranslationResources = TranslationModule extends { default: infer Data }
  ? Data
  : Record<string, unknown>;

const loadedLanguages = new Set<SupportedLanguage>();

const loadLocaleResources = async (language: SupportedLanguage) => {
  if (loadedLanguages.has(language)) {
    return;
  }

  const module = await resourceLoaders[language]();
  const translations = (module as TranslationModule).default as TranslationResources;

  i18n.addResourceBundle(language, "translation", translations, true, true);
  loadedLanguages.add(language);
};

const isSupportedLanguage = (language: string): language is SupportedLanguage =>
  language in resourceLoaders;

const fallbackLanguage: SupportedLanguage = "en";

await loadLocaleResources(fallbackLanguage);

await i18n.use(initReactI18next).init({
  lng: fallbackLanguage,
  fallbackLng: fallbackLanguage,
  defaultNS: "translation",
  interpolation: {
    escapeValue: false,
  },
  resources: {},
});

i18n.on("languageChanged", (language) => {
  if (isSupportedLanguage(language)) {
    void loadLocaleResources(language);
  }
});

export const changeLanguage = async (language: string) => {
  if (isSupportedLanguage(language)) {
    await loadLocaleResources(language);
  }

  return i18n.changeLanguage(language);
};

export const supportedLanguages = Object.keys(resourceLoaders) as SupportedLanguage[];

export default i18n;
