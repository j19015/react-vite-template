import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      welcome: "Welcome to React",
      description: "A modern React + Vite SPA template",
      counter: {
        increment: "Increment",
        decrement: "Decrement",
        reset: "Reset",
        count: "Count: {{count}}",
      },
      navigation: {
        home: "Home",
        about: "About",
        users: "Users",
        examples: "Examples",
      },
    },
  },
  ja: {
    translation: {
      welcome: "Reactへようこそ",
      description: "モダンなReact + Vite SPAテンプレート",
      counter: {
        increment: "増やす",
        decrement: "減らす",
        reset: "リセット",
        count: "カウント: {{count}}",
      },
      navigation: {
        home: "ホーム",
        about: "について",
        users: "ユーザー",
        examples: "例",
      },
    },
  },
};

void i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
