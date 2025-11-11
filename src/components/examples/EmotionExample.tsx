/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useState } from "react";
import * as styles from "./ExampleCard.css";

// Styled component example
const StyledButton = styled.button<{ primary?: boolean }>`
  padding: 0.625rem 1.25rem;
  font-size: 0.875rem;
  font-weight: 500;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
  background: ${(props) => (props.primary ? "#3b82f6" : "#f3f4f6")};
  color: ${(props) => (props.primary ? "#ffffff" : "#374151")};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(0);
  }
`;

const AnimatedBox = styled.div<{ isActive: boolean }>`
  padding: 2rem;
  background: linear-gradient(135deg, #dbeafe 0%, #eff6ff 100%);
  border-radius: 1rem;
  border: 2px solid ${(props) => (props.isActive ? "#3b82f6" : "#e5e7eb")};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform: scale(${(props) => (props.isActive ? 1.05 : 1)});
  box-shadow: ${(props) =>
    props.isActive ? "0 20px 25px -5px rgba(59, 130, 246, 0.3)" : "0 4px 6px rgba(0, 0, 0, 0.1)"};
`;

export default function EmotionExample() {
  const [isActive, setIsActive] = useState(false);

  // CSS prop example
  const dynamicStyle = css`
    color: #1f2937;
    font-size: 1.125rem;
    font-weight: 600;
    margin-bottom: 1rem;
    text-align: center;
    background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  `;

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3 className={styles.title}>Emotion CSS-in-JS</h3>
        <p className={styles.description}>
          Write CSS styles with JavaScript using styled components or the css prop. Get powerful
          theming and dynamic styling.
        </p>
      </div>

      <div className={styles.content}>
        <div>
          <h4 css={dynamicStyle}>Styled Components Example</h4>
          <AnimatedBox isActive={isActive}>
            <p style={{ textAlign: "center", marginBottom: "1rem", color: "#374151" }}>
              {isActive ? "🎉 Active State!" : "Click the button to activate"}
            </p>
            <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center" }}>
              <StyledButton onClick={() => setIsActive(!isActive)} primary>
                {isActive ? "Deactivate" : "Activate"}
              </StyledButton>
              <StyledButton onClick={() => setIsActive(false)}>Reset</StyledButton>
            </div>
          </AnimatedBox>
        </div>

        <div>
          <h4 style={{ fontSize: "1.125rem", fontWeight: "600", marginBottom: "1rem" }}>
            CSS Prop Example
          </h4>
          <div
            css={css`
              padding: 1.5rem;
              background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
              border-radius: 0.75rem;
              border: 1px solid #fbbf24;
              text-align: center;

              &:hover {
                background: linear-gradient(135deg, #fde68a 0%, #fcd34d 100%);
              }
            `}
          >
            <p
              css={css`
                color: #78350f;
                font-weight: 600;
                margin: 0;
              `}
            >
              Hover over me! CSS prop styling with dynamic hover effects.
            </p>
          </div>
        </div>

        <div className={styles.codeBlock}>
          <pre>
            {`// Styled Components
import styled from '@emotion/styled';

const StyledButton = styled.button\`
  background: \${props => props.primary ? '#3b82f6' : '#f3f4f6'};
  padding: 0.625rem 1.25rem;

  &:hover {
    transform: translateY(-2px);
  }
\`;

// CSS Prop
import { css } from '@emotion/react';

<div css={css\`
  color: blue;
  &:hover { color: red; }
\`}>
  Styled with css prop
</div>

// Object Styles
<div css={{
  color: 'blue',
  '&:hover': { color: 'red' }
}}>
  Object syntax
</div>`}
          </pre>
        </div>

        <div className={styles.features}>
          <h4 className={styles.featuresTitle}>Key Features:</h4>
          <ul className={styles.featuresList}>
            <li>🎨 Styled components with props</li>
            <li>⚡ High performance with caching</li>
            <li>🎯 TypeScript support</li>
            <li>🎭 Theming support</li>
            <li>📦 Small bundle size</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
