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

export const cardFull = style({
  padding: "1.5rem",
  backgroundColor: "white",
  borderRadius: "0.5rem",
  border: "1px solid #e5e7eb",
  gridColumn: "1 / -1",
});

export const cardTitle = style({
  fontSize: "1rem",
  fontWeight: "600",
  marginBottom: "1rem",
  color: "#374151",
});

export const list = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.75rem",
});

export const listItem = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.25rem",
  paddingBottom: "0.75rem",
  borderBottom: "1px solid #f3f4f6",
  ":last-child": {
    borderBottom: "none",
  },
});

export const label = style({
  fontSize: "0.75rem",
  fontWeight: "500",
  color: "#6b7280",
  textTransform: "uppercase",
  letterSpacing: "0.05em",
});

export const value = style({
  fontSize: "0.875rem",
  color: "#1f2937",
  fontWeight: "500",
});

export const input = style({
  padding: "0.5rem 0.75rem",
  border: "1px solid #d1d5db",
  borderRadius: "0.375rem",
  fontSize: "1rem",
  marginBottom: "1rem",
  ":focus": {
    outline: "none",
    borderColor: "#2563eb",
    boxShadow: "0 0 0 3px rgba(37, 99, 235, 0.1)",
  },
});

export const comparisonBox = style({
  display: "flex",
  flexDirection: "column",
});

export const comparisonResults = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  gap: "1rem",
});

export const comparisonItem = style({
  padding: "1rem",
  backgroundColor: "#f9fafb",
  borderRadius: "0.375rem",
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
});

export const comparisonLabel = style({
  fontSize: "0.875rem",
  color: "#6b7280",
  fontWeight: "500",
});

export const comparisonTrue = style({
  fontSize: "1.125rem",
  fontWeight: "600",
  color: "#10b981",
});

export const comparisonFalse = style({
  fontSize: "1.125rem",
  fontWeight: "600",
  color: "#ef4444",
});

export const comparisonValue = style({
  fontSize: "1.125rem",
  fontWeight: "600",
  color: "#2563eb",
});
