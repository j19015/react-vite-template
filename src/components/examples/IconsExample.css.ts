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
  gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
  gap: "1rem",
  marginBottom: "2rem",
});

export const iconCard = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "0.5rem",
  padding: "1rem",
  backgroundColor: "white",
  borderRadius: "0.5rem",
  border: "1px solid #e5e7eb",
  transition: "all 0.2s",
  ":hover": {
    borderColor: "#2563eb",
    boxShadow: "0 2px 8px rgba(37, 99, 235, 0.15)",
  },
});

export const icon = style({
  color: "#2563eb",
});

export const iconName = style({
  fontSize: "0.75rem",
  color: "#6b7280",
  fontWeight: "500",
});

export const examples = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "1.5rem",
});

export const exampleCard = style({
  padding: "1.5rem",
  backgroundColor: "white",
  borderRadius: "0.5rem",
  border: "1px solid #e5e7eb",
});

export const exampleTitle = style({
  fontSize: "1rem",
  fontWeight: "600",
  marginBottom: "1rem",
  color: "#374151",
});

export const sizeExamples = style({
  display: "flex",
  alignItems: "center",
  gap: "1rem",
  color: "#2563eb",
});

export const colorExamples = style({
  display: "flex",
  alignItems: "center",
  gap: "1rem",
});
