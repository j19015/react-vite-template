import { style, keyframes } from "@vanilla-extract/css";
import { colors, shadows, borderRadius, transitions } from "@/styles/theme.css";

const fadeInUp = keyframes({
  "0%": {
    opacity: 0,
    transform: "translateY(30px)",
  },
  "100%": {
    opacity: 1,
    transform: "translateY(0)",
  },
});

export const container = style({
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "0 2rem",
});

export const hero = style({
  textAlign: "center",
  padding: "8rem 2rem 6rem",
  background: `linear-gradient(180deg, ${colors.bgPrimary} 0%, ${colors.gray50} 100%)`,
  borderRadius: borderRadius["2xl"],
  marginBottom: "4rem",
  position: "relative",
  overflow: "hidden",
  border: `1px solid ${colors.gray200}`,
  animation: `${fadeInUp} 0.8s ease-out`,
  "::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: "-50%",
    width: "200%",
    height: "100%",
    background: `radial-gradient(ellipse at center, ${colors.primary100} 0%, transparent 70%)`,
    opacity: 0.4,
    pointerEvents: "none",
  },
});

export const heroTitle = style({
  fontSize: "3.5rem",
  fontWeight: "800",
  marginBottom: "1rem",
  lineHeight: "1.2",
  background: `linear-gradient(135deg, ${colors.gray900} 0%, ${colors.primary700} 100%)`,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  position: "relative",
  zIndex: 1,
  "@media": {
    "(max-width: 768px)": {
      fontSize: "2.5rem",
    },
  },
});

export const heroSubtitle = style({
  fontSize: "1.5rem",
  fontWeight: "400",
  marginBottom: "2rem",
  color: colors.gray700,
  position: "relative",
  zIndex: 1,
  "@media": {
    "(max-width: 768px)": {
      fontSize: "1.2rem",
    },
  },
});

export const heroButtons = style({
  display: "flex",
  gap: "1rem",
  justifyContent: "center",
  flexWrap: "wrap",
});

export const button = style({
  padding: "0.875rem 2rem",
  fontSize: "1.125rem",
  fontWeight: "600",
  borderRadius: borderRadius.lg,
  textDecoration: "none",
  transition: `all ${transitions.base}`,
  border: "none",
  cursor: "pointer",
  display: "inline-block",
  position: "relative",
  zIndex: 1,
});

export const buttonPrimary = style([
  button,
  {
    background: colors.primary600,
    color: colors.bgPrimary,
    boxShadow: shadows.md,
    ":hover": {
      background: colors.primary700,
      transform: "translateY(-2px)",
      boxShadow: shadows.xl,
    },
    ":active": {
      transform: "translateY(0)",
    },
  },
]);

export const buttonSecondary = style([
  button,
  {
    background: colors.bgPrimary,
    color: colors.primary700,
    border: `2px solid ${colors.primary300}`,
    boxShadow: shadows.sm,
    ":hover": {
      background: colors.primary50,
      borderColor: colors.primary400,
      transform: "translateY(-2px)",
      boxShadow: shadows.md,
    },
    ":active": {
      transform: "translateY(0)",
    },
  },
]);

export const section = style({
  marginBottom: "5rem",
});

export const sectionTitle = style({
  fontSize: "2.5rem",
  fontWeight: "700",
  marginBottom: "3rem",
  textAlign: "center",
  color: colors.gray900,
});

export const featuresGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "2rem",
  marginBottom: "3rem",
});

export const featureCard = style({
  padding: "2rem",
  background: colors.bgPrimary,
  borderRadius: borderRadius.xl,
  boxShadow: shadows.md,
  transition: `all ${transitions.slow}`,
  border: `1px solid ${colors.gray200}`,
  ":hover": {
    transform: "translateY(-4px)",
    boxShadow: shadows["2xl"],
    borderColor: colors.primary300,
  },
});

export const featureIcon = style({
  fontSize: "2.5rem",
  marginBottom: "1rem",
});

export const featureTitle = style({
  fontSize: "1.5rem",
  fontWeight: "600",
  marginBottom: "0.75rem",
  color: colors.gray800,
});

export const featureDescription = style({
  fontSize: "1rem",
  color: colors.gray600,
  lineHeight: "1.6",
});

export const stackGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  gap: "1.5rem",
});

export const stackCard = style({
  padding: "1.5rem",
  background: `linear-gradient(135deg, ${colors.gray50} 0%, ${colors.primary50} 100%)`,
  borderRadius: borderRadius.xl,
  textAlign: "center",
  transition: `all ${transitions.base}`,
  border: `1px solid ${colors.gray200}`,
  ":hover": {
    transform: "scale(1.05)",
    borderColor: colors.primary300,
    boxShadow: shadows.md,
  },
});

export const stackName = style({
  fontSize: "1.25rem",
  fontWeight: "600",
  marginBottom: "0.5rem",
  color: colors.gray800,
});

export const stackDescription = style({
  fontSize: "0.875rem",
  color: colors.gray600,
});

export const stepsContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
  maxWidth: "800px",
  margin: "0 auto",
});

export const stepCard = style({
  display: "flex",
  gap: "1.5rem",
  padding: "2rem",
  background: colors.bgPrimary,
  borderRadius: borderRadius.xl,
  boxShadow: shadows.md,
  border: `1px solid ${colors.gray200}`,
  transition: `all ${transitions.base}`,
  ":hover": {
    borderColor: colors.primary300,
    boxShadow: shadows.lg,
  },
});

export const stepNumber = style({
  minWidth: "3rem",
  height: "3rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: `linear-gradient(135deg, ${colors.primary600} 0%, ${colors.primary700} 100%)`,
  color: colors.bgPrimary,
  borderRadius: borderRadius.full,
  fontSize: "1.5rem",
  fontWeight: "700",
  flexShrink: 0,
  boxShadow: shadows.md,
});

export const stepContent = style({
  flex: 1,
});

export const stepTitle = style({
  fontSize: "1.5rem",
  fontWeight: "600",
  marginBottom: "0.5rem",
  color: colors.gray800,
});

export const stepDescription = style({
  fontSize: "1rem",
  color: colors.gray600,
  lineHeight: "1.6",
  marginBottom: "0.75rem",
});

export const codeBlock = style({
  background: colors.gray900,
  color: colors.gray100,
  padding: "1rem",
  borderRadius: borderRadius.lg,
  fontFamily: "monospace",
  fontSize: "0.875rem",
  overflowX: "auto",
  marginTop: "0.75rem",
  border: `1px solid ${colors.gray700}`,
});

export const footer = style({
  textAlign: "center",
  padding: "3rem 2rem",
  background: colors.gray50,
  borderRadius: borderRadius.xl,
  marginTop: "5rem",
  border: `1px solid ${colors.gray200}`,
});

export const footerText = style({
  fontSize: "1.125rem",
  color: colors.gray600,
  marginBottom: "1rem",
});

export const footerLinks = style({
  display: "flex",
  gap: "2rem",
  justifyContent: "center",
  flexWrap: "wrap",
});

export const footerLink = style({
  color: colors.primary600,
  textDecoration: "none",
  fontWeight: "600",
  transition: `all ${transitions.fast}`,
  ":hover": {
    color: colors.primary700,
    textDecoration: "underline",
  },
});
