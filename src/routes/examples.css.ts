import { style } from "@vanilla-extract/css";

export const container = style({
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "2rem",
});

export const title = style({
  fontSize: "2.5rem",
  fontWeight: "bold",
  marginBottom: "0.5rem",
  color: "#1f2937",
});

export const subtitle = style({
  fontSize: "1.125rem",
  color: "#6b7280",
  marginBottom: "3rem",
});

export const section = style({
  marginBottom: "3rem",
  padding: "2rem",
  backgroundColor: "#f9fafb",
  borderRadius: "0.5rem",
  border: "1px solid #e5e7eb",
});

export const sectionTitle = style({
  fontSize: "1.5rem",
  fontWeight: "600",
  marginBottom: "1.5rem",
  color: "#374151",
});
