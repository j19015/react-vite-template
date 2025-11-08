import { style } from "@vanilla-extract/css";

export const container = style({});

export const title = style({
  fontSize: "1.25rem",
  fontWeight: "600",
  marginBottom: "1.5rem",
  color: "#111827",
});

export const todoApp = style({
  maxWidth: "600px",
  backgroundColor: "white",
  padding: "1.5rem",
  borderRadius: "0.5rem",
  border: "1px solid #e5e7eb",
});

export const inputGroup = style({
  display: "flex",
  gap: "0.5rem",
  marginBottom: "1rem",
});

export const input = style({
  flex: 1,
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

export const controls = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "1rem",
  paddingBottom: "0.75rem",
  borderBottom: "1px solid #e5e7eb",
});

export const checkbox = style({
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  cursor: "pointer",
  fontSize: "0.875rem",
  color: "#374151",
});

export const count = style({
  fontSize: "0.875rem",
  color: "#6b7280",
  fontWeight: "500",
});

export const todoList = style({
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
});

export const todoItem = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0.75rem",
  backgroundColor: "#f9fafb",
  border: "1px solid #e5e7eb",
  borderRadius: "0.375rem",
  transition: "background-color 0.2s",
  ":hover": {
    backgroundColor: "#f3f4f6",
  },
});

export const todoItemCompleted = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0.75rem",
  backgroundColor: "#f0fdf4",
  border: "1px solid #bbf7d0",
  borderRadius: "0.375rem",
  opacity: 0.7,
});

export const todoLabel = style({
  display: "flex",
  alignItems: "center",
  gap: "0.75rem",
  cursor: "pointer",
  flex: 1,
  selectors: {
    [`${todoItemCompleted} &`]: {
      textDecoration: "line-through",
      color: "#6b7280",
    },
  },
});

export const deleteButton = style({
  width: "24px",
  height: "24px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "transparent",
  border: "none",
  color: "#dc2626",
  fontSize: "1.5rem",
  cursor: "pointer",
  borderRadius: "0.25rem",
  transition: "background-color 0.2s",
  ":hover": {
    backgroundColor: "#fee2e2",
  },
});

export const hint = style({
  fontSize: "0.75rem",
  color: "#6b7280",
  marginTop: "1rem",
  fontStyle: "italic",
  lineHeight: "1.5",
});
