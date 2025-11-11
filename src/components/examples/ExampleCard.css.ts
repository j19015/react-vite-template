import { style } from "@vanilla-extract/css";
import { colors, shadows, borderRadius, transitions } from "@/styles/theme.css";

export const card = style({
  background: colors.bgPrimary,
  borderRadius: borderRadius.xl,
  boxShadow: shadows.md,
  border: `1px solid ${colors.gray200}`,
  overflow: "hidden",
});

export const header = style({
  padding: "1.5rem",
  borderBottom: `1px solid ${colors.gray200}`,
  background: colors.gray50,
});

export const title = style({
  fontSize: "1.5rem",
  fontWeight: "600",
  color: colors.gray900,
  marginBottom: "0.5rem",
});

export const description = style({
  fontSize: "0.875rem",
  color: colors.gray600,
  lineHeight: "1.6",
});

export const content = style({
  padding: "1.5rem",
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
});

export const codeBlock = style({
  background: colors.gray900,
  color: colors.gray100,
  padding: "1rem",
  borderRadius: borderRadius.lg,
  overflowX: "auto",
  fontSize: "0.875rem",
  lineHeight: "1.6",
  border: `1px solid ${colors.gray700}`,
  fontFamily: "monospace",
});

export const features = style({
  padding: "1rem",
  background: colors.primary50,
  borderRadius: borderRadius.lg,
  border: `1px solid ${colors.primary200}`,
});

export const featuresTitle = style({
  fontSize: "1rem",
  fontWeight: "600",
  color: colors.gray800,
  marginBottom: "0.75rem",
});

export const featuresList = style({
  margin: 0,
  paddingLeft: "1.25rem",
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
  color: colors.gray700,
  lineHeight: "1.6",
});

export const button = style({
  padding: "0.625rem 1.25rem",
  fontSize: "0.875rem",
  fontWeight: "500",
  borderRadius: borderRadius.lg,
  border: `1px solid ${colors.gray300}`,
  background: colors.bgPrimary,
  color: colors.gray700,
  cursor: "pointer",
  transition: `all ${transitions.base}`,
  ":hover": {
    background: colors.gray50,
    borderColor: colors.gray400,
  },
  ":active": {
    transform: "scale(0.98)",
  },
});

export const buttonPrimary = style({
  padding: "0.625rem 1.25rem",
  fontSize: "0.875rem",
  fontWeight: "500",
  borderRadius: borderRadius.lg,
  border: "none",
  background: colors.primary600,
  color: colors.bgPrimary,
  cursor: "pointer",
  transition: `all ${transitions.base}`,
  boxShadow: shadows.sm,
  ":hover": {
    background: colors.primary700,
    boxShadow: shadows.md,
  },
  ":active": {
    transform: "scale(0.98)",
  },
});

export const buttonSecondary = style({
  padding: "0.625rem 1.25rem",
  fontSize: "0.875rem",
  fontWeight: "500",
  borderRadius: borderRadius.lg,
  border: `1px solid ${colors.primary300}`,
  background: colors.primary50,
  color: colors.primary700,
  cursor: "pointer",
  transition: `all ${transitions.base}`,
  ":hover": {
    background: colors.primary100,
    borderColor: colors.primary400,
  },
  ":active": {
    transform: "scale(0.98)",
  },
});
