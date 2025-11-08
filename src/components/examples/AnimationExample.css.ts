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
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "1.5rem",
});

export const demo = style({
  padding: "1.5rem",
  backgroundColor: "white",
  borderRadius: "0.5rem",
  border: "1px solid #e5e7eb",
  minHeight: "200px",
});

export const demoFull = style({
  padding: "1.5rem",
  backgroundColor: "white",
  borderRadius: "0.5rem",
  border: "1px solid #e5e7eb",
  gridColumn: "1 / -1",
});

export const demoTitle = style({
  fontSize: "1rem",
  fontWeight: "600",
  marginBottom: "1rem",
  color: "#374151",
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
  marginBottom: "1rem",
  ":hover": {
    backgroundColor: "#1d4ed8",
  },
});

export const buttonGroup = style({
  display: "flex",
  gap: "0.5rem",
  marginBottom: "1rem",
});

export const box = style({
  width: "120px",
  height: "120px",
  backgroundColor: "#3b82f6",
  color: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "0.5rem",
  fontWeight: "600",
  cursor: "pointer",
  marginTop: "1rem",
});

export const list = style({
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
});

export const listItem = style({
  padding: "1rem",
  backgroundColor: "#eff6ff",
  border: "1px solid #bfdbfe",
  borderRadius: "0.375rem",
  cursor: "pointer",
  ":hover": {
    backgroundColor: "#dbeafe",
  },
});
