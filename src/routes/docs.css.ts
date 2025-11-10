import { style } from "@vanilla-extract/css";

export const container = style({
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "0 2rem",
});

export const hero = style({
  textAlign: "center",
  padding: "6rem 2rem",
  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  color: "white",
  borderRadius: "1rem",
  marginBottom: "4rem",
  boxShadow: "0 20px 60px rgba(102, 126, 234, 0.3)",
});

export const heroTitle = style({
  fontSize: "3.5rem",
  fontWeight: "800",
  marginBottom: "1rem",
  lineHeight: "1.2",
  "@media": {
    "(max-width: 768px)": {
      fontSize: "2.5rem",
    },
  },
});

export const heroSubtitle = style({
  fontSize: "1.5rem",
  fontWeight: "300",
  marginBottom: "2rem",
  opacity: 0.95,
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
  borderRadius: "0.5rem",
  textDecoration: "none",
  transition: "all 0.3s ease",
  border: "none",
  cursor: "pointer",
  display: "inline-block",
});

export const buttonPrimary = style([
  button,
  {
    background: "white",
    color: "#667eea",
    ":hover": {
      transform: "translateY(-2px)",
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
    },
  },
]);

export const buttonSecondary = style([
  button,
  {
    background: "rgba(255, 255, 255, 0.2)",
    color: "white",
    border: "2px solid white",
    ":hover": {
      background: "rgba(255, 255, 255, 0.3)",
      transform: "translateY(-2px)",
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
  color: "#1a202c",
});

export const featuresGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "2rem",
  marginBottom: "3rem",
});

export const featureCard = style({
  padding: "2rem",
  background: "white",
  borderRadius: "1rem",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.07)",
  transition: "all 0.3s ease",
  border: "1px solid #e2e8f0",
  ":hover": {
    transform: "translateY(-4px)",
    boxShadow: "0 12px 24px rgba(0, 0, 0, 0.15)",
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
  color: "#2d3748",
});

export const featureDescription = style({
  fontSize: "1rem",
  color: "#4a5568",
  lineHeight: "1.6",
});

export const stackGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  gap: "1.5rem",
});

export const stackCard = style({
  padding: "1.5rem",
  background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
  borderRadius: "0.75rem",
  textAlign: "center",
  transition: "all 0.3s ease",
  ":hover": {
    transform: "scale(1.05)",
  },
});

export const stackName = style({
  fontSize: "1.25rem",
  fontWeight: "600",
  marginBottom: "0.5rem",
  color: "#2d3748",
});

export const stackDescription = style({
  fontSize: "0.875rem",
  color: "#4a5568",
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
  background: "white",
  borderRadius: "1rem",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.07)",
  border: "1px solid #e2e8f0",
});

export const stepNumber = style({
  minWidth: "3rem",
  height: "3rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  color: "white",
  borderRadius: "50%",
  fontSize: "1.5rem",
  fontWeight: "700",
  flexShrink: 0,
});

export const stepContent = style({
  flex: 1,
});

export const stepTitle = style({
  fontSize: "1.5rem",
  fontWeight: "600",
  marginBottom: "0.5rem",
  color: "#2d3748",
});

export const stepDescription = style({
  fontSize: "1rem",
  color: "#4a5568",
  lineHeight: "1.6",
  marginBottom: "0.75rem",
});

export const codeBlock = style({
  background: "#1a202c",
  color: "#e2e8f0",
  padding: "1rem",
  borderRadius: "0.5rem",
  fontFamily: "monospace",
  fontSize: "0.875rem",
  overflowX: "auto",
  marginTop: "0.75rem",
});

export const footer = style({
  textAlign: "center",
  padding: "3rem 2rem",
  background: "#f7fafc",
  borderRadius: "1rem",
  marginTop: "5rem",
});

export const footerText = style({
  fontSize: "1.125rem",
  color: "#4a5568",
  marginBottom: "1rem",
});

export const footerLinks = style({
  display: "flex",
  gap: "2rem",
  justifyContent: "center",
  flexWrap: "wrap",
});

export const footerLink = style({
  color: "#667eea",
  textDecoration: "none",
  fontWeight: "600",
  ":hover": {
    textDecoration: "underline",
  },
});
