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
  marginBottom: "1.5rem",
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

export const statusBox = style({
  padding: "1rem",
  borderRadius: "0.375rem",
  color: "white",
  fontWeight: "500",
  textAlign: "center",
  marginBottom: "1rem",
  minHeight: "60px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const buttonGroup = style({
  display: "flex",
  gap: "0.5rem",
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
  ":disabled": {
    backgroundColor: "#9ca3af",
    cursor: "not-allowed",
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
  ":disabled": {
    backgroundColor: "#f3f4f6",
    color: "#9ca3af",
    cursor: "not-allowed",
  },
});

export const shapeSelector = style({
  display: "flex",
  gap: "0.5rem",
  marginBottom: "1rem",
});

export const result = style({
  padding: "1rem",
  backgroundColor: "#f9fafb",
  borderRadius: "0.375rem",
  border: "1px solid #e5e7eb",
});

export const description = style({
  fontSize: "0.875rem",
  color: "#374151",
  marginBottom: "0.5rem",
});

export const area = style({
  fontSize: "1.125rem",
  fontWeight: "600",
  color: "#1f2937",
});

export const info = style({
  padding: "1rem",
  backgroundColor: "#eff6ff",
  border: "1px solid #bfdbfe",
  borderRadius: "0.375rem",
});

export const infoText = style({
  fontSize: "0.875rem",
  color: "#1e40af",
  margin: 0,
  lineHeight: "1.6",
});
