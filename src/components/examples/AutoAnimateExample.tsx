import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useState } from "react";
import { nanoid } from "nanoid";
import * as styles from "./AutoAnimateExample.css";

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

export default function AutoAnimateExample() {
  const [parent] = useAutoAnimate();
  const [todos, setTodos] = useState<Todo[]>([
    { id: nanoid(), text: "Learn React", completed: true },
    { id: nanoid(), text: "Learn Vite", completed: false },
    { id: nanoid(), text: "Build something awesome", completed: false },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [showCompleted, setShowCompleted] = useState(true);

  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, { id: nanoid(), text: inputValue, completed: false }]);
      setInputValue("");
    }
  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const filteredTodos = showCompleted ? todos : todos.filter((todo) => !todo.completed);

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Auto-Animate + nanoid (Unique IDs)</h3>
      <div className={styles.todoApp}>
        <div className={styles.inputGroup}>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addTodo()}
            placeholder="Add a new todo..."
            className={styles.input}
          />
          <button onClick={addTodo} className={styles.button}>
            Add
          </button>
        </div>

        <div className={styles.controls}>
          <label className={styles.checkbox}>
            <input
              type="checkbox"
              checked={showCompleted}
              onChange={(e) => setShowCompleted(e.target.checked)}
            />
            <span>Show completed</span>
          </label>
          <span className={styles.count}>{todos.filter((t) => !t.completed).length} active</span>
        </div>

        <ul ref={parent} className={styles.todoList}>
          {filteredTodos.map((todo) => (
            <li
              key={todo.id}
              className={todo.completed ? styles.todoItemCompleted : styles.todoItem}
            >
              <label className={styles.todoLabel}>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                />
                <span>{todo.text}</span>
              </label>
              <button onClick={() => deleteTodo(todo.id)} className={styles.deleteButton}>
                ×
              </button>
            </li>
          ))}
        </ul>

        <p className={styles.hint}>
          Items automatically animate when added, removed, or filtered thanks to
          @formkit/auto-animate. IDs generated with nanoid.
        </p>
      </div>
    </div>
  );
}
