import { style } from "@vanilla-extract/css";

export const container = style({
  maxWidth: "600px",
});

export const title = style({
  fontSize: "1.25rem",
  fontWeight: "600",
  marginBottom: "1.5rem",
  color: "#111827",
});

export const form = style({
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
});

export const field = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
});

export const label = style({
  fontSize: "0.875rem",
  fontWeight: "500",
  color: "#374151",
});

export const input = style({
  padding: "0.5rem 0.75rem",
  border: "1px solid #d1d5db",
  borderRadius: "0.375rem",
  fontSize: "1rem",
  ":focus": {
    outline: "none",
    borderColor: "#2563eb",
    boxShadow: "0 0 0 3px rgba(37, 99, 235, 0.1)",
  },
});

export const textarea = style({
  padding: "0.5rem 0.75rem",
  border: "1px solid #d1d5db",
  borderRadius: "0.375rem",
  fontSize: "1rem",
  fontFamily: "inherit",
  resize: "vertical",
  ":focus": {
    outline: "none",
    borderColor: "#2563eb",
    boxShadow: "0 0 0 3px rgba(37, 99, 235, 0.1)",
  },
});

export const error = style({
  color: "#dc2626",
  fontSize: "0.875rem",
  marginTop: "0.25rem",
});

export const button = style({
  padding: "0.625rem 1.25rem",
  backgroundColor: "#2563eb",
  color: "white",
  border: "none",
  borderRadius: "0.375rem",
  fontSize: "1rem",
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
