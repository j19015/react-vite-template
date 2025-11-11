import { useState } from "react";
import { useTranslation, Trans } from "react-i18next";
import * as styles from "./ExampleCard.css";

export default function I18nextExample() {
  const { t, i18n } = useTranslation();
  const [name, setName] = useState("User");

  const changeLanguage = (lng: string) => {
    void i18n.changeLanguage(lng);
  };

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3 className={styles.title}>i18next Internationalization</h3>
        <p className={styles.description}>
          Powerful internationalization framework for React. Easily translate your app into multiple
          languages.
        </p>
      </div>

      <div className={styles.content}>
        <div>
          <h4 style={{ fontSize: "1.125rem", fontWeight: "600", marginBottom: "1rem" }}>
            Language Switcher
          </h4>
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <button
              onClick={() => changeLanguage("en")}
              className={i18n.language === "en" ? styles.buttonPrimary : styles.button}
            >
              English
            </button>
            <button
              onClick={() => changeLanguage("ja")}
              className={i18n.language === "ja" ? styles.buttonPrimary : styles.button}
            >
              日本語
            </button>
            <button
              onClick={() => changeLanguage("es")}
              className={i18n.language === "es" ? styles.buttonPrimary : styles.button}
            >
              Español
            </button>
          </div>
        </div>

        <div
          style={{
            padding: "1.5rem",
            background: "#f3f4f6",
            borderRadius: "0.75rem",
            border: "1px solid #e5e7eb",
          }}
        >
          <h4 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "0.5rem" }}>
            {t("welcome.title", { defaultValue: "Welcome" })}
          </h4>
          <p style={{ color: "#4b5563", marginBottom: "1rem" }}>
            <Trans
              i18nKey="welcome.message"
              values={{ name }}
              defaults="Hello <strong>{{name}}</strong>, welcome to our application!"
              components={{ strong: <strong /> }}
            />
          </p>
          <input
            type="text"
            placeholder={t("welcome.namePlaceholder", { defaultValue: "Enter your name" })}
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              padding: "0.625rem",
              border: "1px solid #d1d5db",
              borderRadius: "0.5rem",
              width: "100%",
              fontSize: "0.875rem",
            }}
          />
        </div>

        <div style={{ padding: "1rem", background: "#dbeafe", borderRadius: "0.75rem" }}>
          <p style={{ fontSize: "0.875rem", color: "#1e40af" }}>
            <strong>Current Language:</strong> {i18n.language}
          </p>
          <p style={{ fontSize: "0.875rem", color: "#1e40af", marginTop: "0.5rem" }}>
            {t("features.count", {
              count: 5,
              defaultValue: "You have {{count}} features",
            })}
          </p>
        </div>

        <div className={styles.codeBlock}>
          <pre>
            {`// Using i18next
import { useTranslation, Trans } from 'react-i18next';

function Component() {
  const { t, i18n } = useTranslation();

  // Simple translation
  const title = t('welcome.title');

  // With variables
  const message = t('welcome.message', { name: 'User' });

  // Change language
  i18n.changeLanguage('ja');

  return (
    <Trans
      i18nKey="welcome.message"
      values={{ name }}
      components={{ strong: <strong /> }}
    />
  );
}`}
          </pre>
        </div>

        <div className={styles.features}>
          <h4 className={styles.featuresTitle}>Key Features:</h4>
          <ul className={styles.featuresList}>
            <li>🌍 Multi-language support</li>
            <li>🔄 Dynamic language switching</li>
            <li>📝 Pluralization support</li>
            <li>🎯 TypeScript support</li>
            <li>⚡ Lazy loading of translations</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
