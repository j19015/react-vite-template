import { style } from "@vanilla-extract/css";

export const container = style({});

export const title = style({
  fontSize: "1.25rem",
  fontWeight: "600",
  marginBottom: "1.5rem",
  color: "#111827",
});

export const grid = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "1.5rem",
});

export const card = style({
  padding: "1.5rem",
  backgroundColor: "white",
  borderRadius: "0.5rem",
  border: "1px solid #e5e7eb",
});

export const cardTitle = style({
  fontSize: "1rem",
  fontWeight: "600",
  marginBottom: "1rem",
  color: "#374151",
});

export const value = style({
  fontSize: "1.125rem",
  fontWeight: "500",
  color: "#1f2937",
  marginBottom: "0.5rem",
});

export const buttonGroup = style({
  display: "flex",
  gap: "0.5rem",
  marginTop: "1rem",
  flexWrap: "wrap",
});

export const button = style({
  padding: "0.5rem 1rem",
  backgroundColor: "#2563eb",
  color: "white",
  border: "none",
  borderRadius: "0.375rem",
  fontSize: "0.875rem",
  fontWeight: "500",
  cursor: "pointer",
  transition: "background-color 0.2s",
  ":hover": {
    backgroundColor: "#1d4ed8",
  },
});

export const buttonSecondary = style({
  padding: "0.5rem 1rem",
  backgroundColor: "#e5e7eb",
  color: "#374151",
  border: "none",
  borderRadius: "0.375rem",
  fontSize: "0.875rem",
  fontWeight: "500",
  cursor: "pointer",
  transition: "background-color 0.2s",
  ":hover": {
    backgroundColor: "#d1d5db",
  },
});

export const hint = style({
  fontSize: "0.75rem",
  color: "#6b7280",
  marginTop: "1rem",
  fontStyle: "italic",
});
