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
  backgroundColor: "#6b7280",
  ":hover": {
    backgroundColor: "#4b5563",
  },
});

// Dialog styles
export const dialogOverlay = style({
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  position: "fixed",
  inset: 0,
  animation: "fadeIn 150ms ease-out",
});

export const dialogContent = style({
  backgroundColor: "white",
  borderRadius: "0.5rem",
  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw",
  maxWidth: "450px",
  maxHeight: "85vh",
  padding: "1.5rem",
});

export const dialogTitle = style({
  fontSize: "1.25rem",
  fontWeight: "600",
  marginBottom: "0.5rem",
  color: "#111827",
});

export const dialogDescription = style({
  fontSize: "0.875rem",
  color: "#6b7280",
  marginBottom: "1.5rem",
  lineHeight: "1.5",
});

export const dialogButtons = style({
  display: "flex",
  justifyContent: "flex-end",
  gap: "0.75rem",
});

// Dropdown styles
export const dropdownContent = style({
  minWidth: "200px",
  backgroundColor: "white",
  borderRadius: "0.375rem",
  padding: "0.5rem",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
  border: "1px solid #e5e7eb",
});

export const dropdownItem = style({
  padding: "0.5rem 0.75rem",
  fontSize: "0.875rem",
  borderRadius: "0.25rem",
  cursor: "pointer",
  outline: "none",
  ":hover": {
    backgroundColor: "#f3f4f6",
  },
  ":focus": {
    backgroundColor: "#f3f4f6",
  },
});

export const dropdownSeparator = style({
  height: "1px",
  backgroundColor: "#e5e7eb",
  margin: "0.5rem 0",
});

// Tooltip styles
export const tooltipContent = style({
  backgroundColor: "#1f2937",
  color: "white",
  padding: "0.5rem 0.75rem",
  borderRadius: "0.25rem",
  fontSize: "0.875rem",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
});

export const tooltipArrow = style({
  fill: "#1f2937",
});

// Tabs styles
export const tabsRoot = style({
  display: "flex",
  flexDirection: "column",
});

export const tabsList = style({
  display: "flex",
  borderBottom: "1px solid #e5e7eb",
  gap: "1rem",
});

export const tabsTrigger = style({
  padding: "0.75rem 1rem",
  backgroundColor: "transparent",
  border: "none",
  borderBottom: "2px solid transparent",
  fontSize: "0.875rem",
  fontWeight: "500",
  color: "#6b7280",
  cursor: "pointer",
  transition: "all 0.2s",
  ":hover": {
    color: "#374151",
  },
  selectors: {
    '&[data-state="active"]': {
      color: "#2563eb",
      borderBottomColor: "#2563eb",
    },
  },
});

export const tabsContent = style({
  padding: "1.5rem 0",
  fontSize: "0.875rem",
  color: "#374151",
});
