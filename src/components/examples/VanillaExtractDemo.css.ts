import { style, styleVariants } from "@vanilla-extract/css";
import { colors, borderRadius } from "@/styles/theme.css";

const baseContainer = style({
  padding: "2rem",
  borderRadius: borderRadius.xl,
  transition: "all 0.3s ease",
  border: "1px solid",
});

export const themeContainer = styleVariants({
  light: [
    baseContainer,
    {
      background: colors.bgPrimary,
      color: colors.gray900,
      borderColor: colors.gray200,
    },
  ],
  dark: [
    baseContainer,
    {
      background: colors.gray900,
      color: colors.gray50,
      borderColor: colors.gray700,
    },
  ],
});

export const heading = style({
  fontSize: "1.5rem",
  fontWeight: "700",
  marginBottom: "0.75rem",
});

export const text = style({
  marginBottom: "1.5rem",
  lineHeight: "1.6",
});

export const grid = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
  gap: "1rem",
});

export const card = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "0.5rem",
  padding: "1rem",
  background: colors.gray100,
  borderRadius: borderRadius.lg,
  transition: "transform 0.2s",
  selectors: {
    [`${themeContainer.dark} &`]: {
      background: colors.gray800,
    },
  },
  ":hover": {
    transform: "scale(1.05)",
  },
});

export const icon = style({
  fontSize: "2rem",
});

export const cardTitle = style({
  fontSize: "0.875rem",
  fontWeight: "600",
  textAlign: "center",
});
