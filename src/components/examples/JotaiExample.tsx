import { atom, useAtom, useAtomValue, useSetAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import * as styles from "./JotaiExample.css";

// Simple atom
const countAtom = atom(0);

// Derived atom
const doubleCountAtom = atom((get) => get(countAtom) * 2);

// Atom with localStorage persistence
const themeAtom = atomWithStorage<"light" | "dark">("theme", "light");

// Write-only atom
const incrementAtom = atom(null, (get, set) => {
  set(countAtom, get(countAtom) + 1);
});

function Counter() {
  const [count, setCount] = useAtom(countAtom);
  const doubleCount = useAtomValue(doubleCountAtom);

  return (
    <div className={styles.card}>
      <h4 className={styles.cardTitle}>Counter (Simple Atom)</h4>
      <p className={styles.value}>Count: {count}</p>
      <p className={styles.value}>Double: {doubleCount}</p>
      <div className={styles.buttonGroup}>
        <button onClick={() => setCount(count + 1)} className={styles.button}>
          Increment
        </button>
        <button onClick={() => setCount(count - 1)} className={styles.button}>
          Decrement
        </button>
        <button onClick={() => setCount(0)} className={styles.buttonSecondary}>
          Reset
        </button>
      </div>
    </div>
  );
}

function WriteOnlyExample() {
  const count = useAtomValue(countAtom);
  const increment = useSetAtom(incrementAtom);

  return (
    <div className={styles.card}>
      <h4 className={styles.cardTitle}>Write-Only Atom</h4>
      <p className={styles.value}>Count: {count}</p>
      <button onClick={() => increment()} className={styles.button}>
        Increment via Write-Only Atom
      </button>
    </div>
  );
}

function ThemeSwitcher() {
  const [theme, setTheme] = useAtom(themeAtom);

  return (
    <div className={styles.card}>
      <h4 className={styles.cardTitle}>Persisted Atom (localStorage)</h4>
      <p className={styles.value}>Current theme: {theme}</p>
      <div className={styles.buttonGroup}>
        <button
          onClick={() => setTheme("light")}
          className={theme === "light" ? styles.button : styles.buttonSecondary}
        >
          Light
        </button>
        <button
          onClick={() => setTheme("dark")}
          className={theme === "dark" ? styles.button : styles.buttonSecondary}
        >
          Dark
        </button>
      </div>
      <p className={styles.hint}>Check localStorage - theme persists across reloads</p>
    </div>
  );
}

export default function JotaiExample() {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Jotai State Management</h3>
      <div className={styles.grid}>
        <Counter />
        <WriteOnlyExample />
        <ThemeSwitcher />
      </div>
    </div>
  );
}
