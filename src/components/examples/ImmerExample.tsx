import { useState } from "react";
import { produce } from "immer";
import * as styles from "./ExampleCard.css";

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

interface TodoState {
  tasks: Task[];
  filter: "all" | "active" | "completed";
}

export default function ImmerExample() {
  const [state, setState] = useState<TodoState>({
    tasks: [
      { id: 1, title: "Learn Immer", completed: true },
      { id: 2, title: "Build an app", completed: false },
      { id: 3, title: "Ship it!", completed: false },
    ],
    filter: "all",
  });

  const addTask = (title: string) => {
    // With Immer, you can write mutable code that produces immutable updates
    setState(
      produce((draft) => {
        draft.tasks.push({
          id: Date.now(),
          title,
          completed: false,
        });
      })
    );
  };

  const toggleTask = (id: number) => {
    setState(
      produce((draft) => {
        const task = draft.tasks.find((t) => t.id === id);
        if (task) {
          task.completed = !task.completed;
        }
      })
    );
  };

  const deleteTask = (id: number) => {
    setState(
      produce((draft) => {
        const index = draft.tasks.findIndex((t) => t.id === id);
        if (index !== -1) {
          draft.tasks.splice(index, 1);
        }
      })
    );
  };

  const setFilter = (filter: "all" | "active" | "completed") => {
    setState(
      produce((draft) => {
        draft.filter = filter;
      })
    );
  };

  const filteredTasks = state.tasks.filter((task) => {
    if (state.filter === "active") return !task.completed;
    if (state.filter === "completed") return task.completed;
    return true;
  });

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3 className={styles.title}>Immer - Immutable Updates</h3>
        <p className={styles.description}>
          Write simpler, more readable state updates with Immer. Mutate a draft state and Immer
          produces the next immutable state.
        </p>
      </div>

      <div className={styles.content}>
        <div>
          <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem", flexWrap: "wrap" }}>
            <button
              onClick={() => setFilter("all")}
              className={state.filter === "all" ? styles.buttonPrimary : styles.button}
            >
              All ({state.tasks.length})
            </button>
            <button
              onClick={() => setFilter("active")}
              className={state.filter === "active" ? styles.buttonPrimary : styles.button}
            >
              Active ({state.tasks.filter((t) => !t.completed).length})
            </button>
            <button
              onClick={() => setFilter("completed")}
              className={state.filter === "completed" ? styles.buttonPrimary : styles.button}
            >
              Completed ({state.tasks.filter((t) => t.completed).length})
            </button>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              const input = e.currentTarget.elements.namedItem("task") as HTMLInputElement;
              if (input.value.trim()) {
                addTask(input.value);
                input.value = "";
              }
            }}
            style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}
          >
            <input
              type="text"
              name="task"
              placeholder="Add a new task..."
              style={{
                flex: 1,
                padding: "0.625rem",
                border: "1px solid #d1d5db",
                borderRadius: "0.5rem",
                fontSize: "0.875rem",
              }}
            />
            <button type="submit" className={styles.buttonPrimary}>
              Add
            </button>
          </form>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {filteredTasks.map((task) => (
              <div
                key={task.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  padding: "0.75rem",
                  background: task.completed ? "#f3f4f6" : "#ffffff",
                  border: "1px solid #e5e7eb",
                  borderRadius: "0.5rem",
                }}
              >
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(task.id)}
                  style={{ width: "1.25rem", height: "1.25rem", cursor: "pointer" }}
                />
                <span
                  style={{
                    flex: 1,
                    textDecoration: task.completed ? "line-through" : "none",
                    color: task.completed ? "#9ca3af" : "#1f2937",
                  }}
                >
                  {task.title}
                </span>
                <button
                  onClick={() => deleteTask(task.id)}
                  style={{
                    padding: "0.25rem 0.5rem",
                    background: "#fee2e2",
                    color: "#991b1b",
                    border: "none",
                    borderRadius: "0.25rem",
                    fontSize: "0.75rem",
                    cursor: "pointer",
                  }}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.codeBlock}>
          <pre>
            {`// Without Immer (verbose and error-prone)
setState({
  ...state,
  tasks: state.tasks.map(task =>
    task.id === id
      ? { ...task, completed: !task.completed }
      : task
  )
});

// With Immer (simple and readable)
setState(produce(draft => {
  const task = draft.tasks.find(t => t.id === id);
  if (task) {
    task.completed = !task.completed;
  }
}));`}
          </pre>
        </div>

        <div className={styles.features}>
          <h4 className={styles.featuresTitle}>Key Features:</h4>
          <ul className={styles.featuresList}>
            <li>✏️ Write mutable code, get immutable results</li>
            <li>🎯 TypeScript support with type safety</li>
            <li>⚡ Lightweight (3KB gzipped)</li>
            <li>🔒 Structural sharing for performance</li>
            <li>🛠️ Works with React, Redux, and more</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
