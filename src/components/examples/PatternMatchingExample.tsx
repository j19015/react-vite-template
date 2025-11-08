import { match, P } from "ts-pattern";
import { useState } from "react";
import * as styles from "./PatternMatchingExample.css";

type Status = "idle" | "loading" | "success" | "error";

interface ApiResponse {
  status: Status;
  data?: string;
  error?: string;
}

type Shape =
  | { type: "circle"; radius: number }
  | { type: "rectangle"; width: number; height: number }
  | { type: "triangle"; base: number; height: number };

export default function PatternMatchingExample() {
  const [apiState, setApiState] = useState<ApiResponse>({ status: "idle" });
  const [selectedShape, setSelectedShape] = useState<Shape>({
    type: "circle",
    radius: 5,
  });

  const apiMessage = match(apiState)
    .with({ status: "idle" }, () => "Ready to fetch data")
    .with({ status: "loading" }, () => "Loading...")
    .with({ status: "success", data: P.string }, ({ data }) => `Success: ${data}`)
    .with({ status: "error", error: P.string }, ({ error }) => `Error: ${error}`)
    .otherwise(() => "Unknown state");

  const apiColor = match(apiState.status)
    .with("idle", () => "#6b7280")
    .with("loading", () => "#3b82f6")
    .with("success", () => "#10b981")
    .with("error", () => "#ef4444")
    .exhaustive();

  const shapeArea = match(selectedShape)
    .with({ type: "circle" }, ({ radius }) => Math.PI * radius * radius)
    .with({ type: "rectangle" }, ({ width, height }) => width * height)
    .with({ type: "triangle" }, ({ base, height }) => (base * height) / 2)
    .exhaustive();

  const shapeDescription = match(selectedShape)
    .with(
      { type: "circle", radius: P.when((r) => r > 10) },
      ({ radius }) => `Large circle with radius ${radius}`
    )
    .with({ type: "circle" }, ({ radius }) => `Circle with radius ${radius}`)
    .with({ type: "rectangle" }, ({ width, height }) => `Rectangle ${width} × ${height}`)
    .with(
      { type: "triangle" },
      ({ base, height }) => `Triangle with base ${base} and height ${height}`
    )
    .exhaustive();

  const simulateApiCall = (result: "success" | "error") => {
    setApiState({ status: "loading" });
    setTimeout(() => {
      if (result === "success") {
        setApiState({ status: "success", data: "Data fetched successfully!" });
      } else {
        setApiState({ status: "error", error: "Failed to fetch data" });
      }
    }, 1500);
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Pattern Matching with ts-pattern</h3>

      <div className={styles.grid}>
        <div className={styles.card}>
          <h4 className={styles.cardTitle}>API State Matching</h4>
          <div className={styles.statusBox} style={{ backgroundColor: apiColor }}>
            {apiMessage}
          </div>
          <div className={styles.buttonGroup}>
            <button
              onClick={() => simulateApiCall("success")}
              className={styles.button}
              disabled={apiState.status === "loading"}
            >
              Simulate Success
            </button>
            <button
              onClick={() => simulateApiCall("error")}
              className={styles.buttonSecondary}
              disabled={apiState.status === "loading"}
            >
              Simulate Error
            </button>
            <button
              onClick={() => setApiState({ status: "idle" })}
              className={styles.buttonSecondary}
            >
              Reset
            </button>
          </div>
        </div>

        <div className={styles.card}>
          <h4 className={styles.cardTitle}>Shape Area Calculator</h4>
          <div className={styles.shapeSelector}>
            <button
              onClick={() => setSelectedShape({ type: "circle", radius: 5 })}
              className={selectedShape.type === "circle" ? styles.button : styles.buttonSecondary}
            >
              Circle
            </button>
            <button
              onClick={() => setSelectedShape({ type: "rectangle", width: 4, height: 6 })}
              className={
                selectedShape.type === "rectangle" ? styles.button : styles.buttonSecondary
              }
            >
              Rectangle
            </button>
            <button
              onClick={() => setSelectedShape({ type: "triangle", base: 8, height: 5 })}
              className={selectedShape.type === "triangle" ? styles.button : styles.buttonSecondary}
            >
              Triangle
            </button>
          </div>
          <div className={styles.result}>
            <p className={styles.description}>{shapeDescription}</p>
            <p className={styles.area}>Area: {shapeArea.toFixed(2)}</p>
          </div>
        </div>
      </div>

      <div className={styles.info}>
        <p className={styles.infoText}>
          ts-pattern provides exhaustive pattern matching with TypeScript type safety. It's great
          for handling discriminated unions, state machines, and complex conditional logic.
        </p>
      </div>
    </div>
  );
}
