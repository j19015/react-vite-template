import { style } from "@vanilla-extract/css";

export const header = style({
  padding: "1rem",
  borderBottom: "1px solid #e5e7eb",
  backgroundColor: "white",
});

export const nav = style({
  display: "flex",
  gap: "1.5rem",
  maxWidth: "1200px",
  margin: "0 auto",
});

export const link = style({
  color: "#2563eb",
  textDecoration: "none",
  fontWeight: "500",
  transition: "color 0.2s",
  ":hover": {
    color: "#1d4ed8",
    textDecoration: "underline",
  },
  selectors: {
    "&.active": {
      color: "#1e40af",
      fontWeight: "600",
    },
  },
});

export const main = style({
  minHeight: "calc(100vh - 60px)",
});
