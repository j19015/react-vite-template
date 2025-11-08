import { style } from "@vanilla-extract/css";

export const container = style({
  padding: "2rem",
  maxWidth: "1200px",
  margin: "0 auto",
});

export const title = style({
  fontSize: "2rem",
  fontWeight: "bold",
  marginBottom: "2rem",
  color: "#1f2937",
});

export const grid = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
  gap: "1.5rem",
});

export const card = style({
  backgroundColor: "white",
  padding: "1.5rem",
  borderRadius: "0.5rem",
  boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
  transition: "box-shadow 0.2s",
  ":hover": {
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
});

export const cardTitle = style({
  fontSize: "1.25rem",
  fontWeight: "600",
  marginBottom: "0.5rem",
  color: "#111827",
});

export const cardText = style({
  color: "#6b7280",
  marginBottom: "0.25rem",
});

export const cardEmail = style({
  color: "#2563eb",
  fontSize: "0.875rem",
});

export const error = style({
  padding: "2rem",
  textAlign: "center",
  color: "#dc2626",
});
