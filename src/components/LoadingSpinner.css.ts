import { style, keyframes } from "@vanilla-extract/css";

const spin = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(360deg)" },
});

export const container = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
});

export const spinner = style({
  animation: `${spin} 1s linear infinite`,
  borderRadius: "50%",
  height: "3rem",
  width: "3rem",
  borderWidth: "2px",
  borderStyle: "solid",
  borderColor: "transparent",
  borderBottomColor: "#2563eb",
});
