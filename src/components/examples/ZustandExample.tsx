import { motion } from "framer-motion";
import { useCounterStore } from "@/stores/useCounterStore";
import * as styles from "./ExampleCard.css";

export default function ZustandExample() {
  const { count, increment, decrement, reset } = useCounterStore();

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3 className={styles.title}>Zustand State Management</h3>
        <p className={styles.description}>
          Zustand is a small, fast, and scalable state management solution. This example
          demonstrates a persistent counter with devtools support.
        </p>
      </div>

      <div className={styles.content}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1.5rem",
          }}
        >
          <motion.div
            key={count}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            style={{
              fontSize: "4rem",
              fontWeight: "bold",
              color: "#3b82f6",
              padding: "2rem",
              background: "linear-gradient(135deg, #dbeafe 0%, #eff6ff 100%)",
              borderRadius: "1rem",
              minWidth: "150px",
              textAlign: "center",
            }}
          >
            {count}
          </motion.div>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
            <button onClick={decrement} className={styles.button}>
              -1 Decrement
            </button>
            <button onClick={increment} className={styles.buttonPrimary}>
              +1 Increment
            </button>
            <button onClick={reset} className={styles.buttonSecondary}>
              Reset
            </button>
          </div>
        </div>

        <div className={styles.codeBlock}>
          <pre>
            {`// Store definition (src/stores/useCounterStore.ts)
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface CounterState {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

export const useCounterStore = create<CounterState>()(
  devtools(
    persist(
      (set) => ({
        count: 0,
        increment: () => set((state) => ({
          count: state.count + 1
        })),
        decrement: () => set((state) => ({
          count: state.count - 1
        })),
        reset: () => set({ count: 0 }),
      }),
      { name: 'counter-storage' }
    )
  )
);

// Usage in component
const { count, increment, decrement, reset } = useCounterStore();`}
          </pre>
        </div>

        <div className={styles.features}>
          <h4 className={styles.featuresTitle}>Key Features:</h4>
          <ul className={styles.featuresList}>
            <li>✨ Minimal boilerplate - no providers needed</li>
            <li>🔄 Persistent state (localStorage)</li>
            <li>🛠️ Redux DevTools integration</li>
            <li>⚡ Small bundle size (~1KB)</li>
            <li>🎯 TypeScript support</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
