import { useState } from "react";
import * as styles from "./ExampleCard.css";
import * as demoStyles from "./VanillaExtractDemo.css";

export default function VanillaExtractExample() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3 className={styles.title}>vanilla-extract CSS-in-TypeScript</h3>
        <p className={styles.description}>
          Zero-runtime CSS-in-TypeScript. Write styles with TypeScript and get full type safety,
          scoped styles, and optimal performance.
        </p>
      </div>

      <div className={styles.content}>
        <div>
          <h4 style={{ fontSize: "1.125rem", fontWeight: "600", marginBottom: "1rem" }}>
            Theme Switching Example
          </h4>
          <div style={{ display: "flex", gap: "0.75rem", marginBottom: "1rem" }}>
            <button
              onClick={() => setTheme("light")}
              className={theme === "light" ? styles.buttonPrimary : styles.button}
            >
              Light Theme
            </button>
            <button
              onClick={() => setTheme("dark")}
              className={theme === "dark" ? styles.buttonPrimary : styles.button}
            >
              Dark Theme
            </button>
          </div>

          <div className={demoStyles.themeContainer[theme]}>
            <h3 className={demoStyles.heading}>Themed Component</h3>
            <p className={demoStyles.text}>
              This component automatically changes its appearance based on the selected theme. All
              styles are type-safe and scoped!
            </p>
            <div className={demoStyles.grid}>
              <div className={demoStyles.card}>
                <span className={demoStyles.icon}>🎨</span>
                <span className={demoStyles.cardTitle}>Type Safe</span>
              </div>
              <div className={demoStyles.card}>
                <span className={demoStyles.icon}>⚡</span>
                <span className={demoStyles.cardTitle}>Zero Runtime</span>
              </div>
              <div className={demoStyles.card}>
                <span className={demoStyles.icon}>🔒</span>
                <span className={demoStyles.cardTitle}>Scoped Styles</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.codeBlock}>
          <pre>
            {`// VanillaExtractDemo.css.ts
import { style, styleVariants } from '@vanilla-extract/css';

// Define base styles
const baseContainer = style({
  padding: '2rem',
  borderRadius: '1rem',
  transition: 'all 0.3s ease',
});

// Create theme variants
export const themeContainer = styleVariants({
  light: [baseContainer, {
    background: '#ffffff',
    color: '#1f2937',
    border: '1px solid #e5e7eb',
  }],
  dark: [baseContainer, {
    background: '#1f2937',
    color: '#f9fafb',
    border: '1px solid #374151',
  }],
});

export const heading = style({
  fontSize: '1.5rem',
  fontWeight: 'bold',
  marginBottom: '0.75rem',
});

// Usage in component
import * as styles from './VanillaExtractDemo.css';

<div className={styles.themeContainer[theme]}>
  <h3 className={styles.heading}>Hello</h3>
</div>`}
          </pre>
        </div>

        <div className={styles.features}>
          <h4 className={styles.featuresTitle}>Key Features:</h4>
          <ul className={styles.featuresList}>
            <li>🎯 Full TypeScript type safety</li>
            <li>⚡ Zero runtime - styles generated at build time</li>
            <li>🔒 Locally scoped class names by default</li>
            <li>🎨 Theme contracts and variants</li>
            <li>📦 Optimal CSS output with deduplication</li>
            <li>🛠️ Great developer experience with autocomplete</li>
          </ul>
        </div>

        <div
          style={{
            padding: "1rem",
            background: "#fef3c7",
            borderRadius: "0.5rem",
            border: "1px solid #fbbf24",
          }}
        >
          <p style={{ fontSize: "0.875rem", color: "#78350f", margin: 0 }}>
            <strong>💡 Tip:</strong> vanilla-extract is already being used throughout this template!
            Check out the theme.css.ts file and other .css.ts files to see it in action.
          </p>
        </div>
      </div>
    </div>
  );
}
