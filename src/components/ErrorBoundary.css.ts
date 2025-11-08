import { style } from "@vanilla-extract/css";

export const container = style({
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#f3f4f6",
  padding: "1rem",
});

export const card = style({
  backgroundColor: "white",
  padding: "2rem",
  borderRadius: "0.5rem",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  maxWidth: "28rem",
  width: "100%",
});

export const title = style({
  fontSize: "1.5rem",
  fontWeight: "bold",
  color: "#dc2626",
  marginBottom: "1rem",
});

export const message = style({
  color: "#374151",
  marginBottom: "1rem",
});

export const details = style({
  marginBottom: "1rem",
});

export const summary = style({
  cursor: "pointer",
  fontSize: "0.875rem",
  color: "#6b7280",
  ":hover": {
    color: "#1f2937",
  },
});

export const errorText = style({
  marginTop: "0.5rem",
  fontSize: "0.75rem",
  backgroundColor: "#f3f4f6",
  padding: "1rem",
  borderRadius: "0.25rem",
  overflow: "auto",
  whiteSpace: "pre-wrap",
  fontFamily: "monospace",
});

export const button = style({
  width: "100%",
  backgroundColor: "#2563eb",
  color: "white",
  padding: "0.5rem 1rem",
  borderRadius: "0.25rem",
  border: "none",
  cursor: "pointer",
  fontSize: "1rem",
  transition: "background-color 0.2s",
  ":hover": {
    backgroundColor: "#1d4ed8",
  },
});
