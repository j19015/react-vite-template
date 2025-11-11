import { useState } from "react";
import axios from "axios";
import clsx from "clsx";
import { nanoid } from "nanoid";
import * as styles from "./ExampleCard.css";

interface User {
  id: string;
  name: string;
  email: string;
}

export default function UtilityLibrariesExample() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      // Using Axios for HTTP requests
      const response = await axios.get<User[]>("https://jsonplaceholder.typicode.com/users");
      setUsers(response.data.slice(0, 5).map((user) => ({ ...user, id: nanoid() })));
    } catch (error) {
      console.error("Error fetching users:", error);
      alert("Failed to fetch users");
    } finally {
      setLoading(false);
    }
  };

  const addUser = () => {
    // Using nanoid to generate unique IDs
    const newUser: User = {
      id: nanoid(),
      name: `User ${users.length + 1}`,
      email: `user${users.length + 1}@example.com`,
    };
    setUsers([...users, newUser]);
  };

  // Using clsx for conditional classes
  const getCardClass = (id: string) =>
    clsx("user-card", selectedId === id && "selected", users.length > 3 && "compact");

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3 className={styles.title}>Utility Libraries</h3>
        <p className={styles.description}>
          Essential utility libraries: Axios for HTTP requests, clsx for conditional class names,
          and nanoid for unique ID generation.
        </p>
      </div>

      <div className={styles.content}>
        <div>
          <h4 style={{ fontSize: "1.125rem", fontWeight: "600", marginBottom: "1rem" }}>
            Axios HTTP Client
          </h4>
          <div style={{ display: "flex", gap: "0.75rem", marginBottom: "1rem" }}>
            <button
              onClick={() => {
                void fetchUsers();
              }}
              disabled={loading}
              className={styles.buttonPrimary}
            >
              {loading ? "Loading..." : "Fetch Users from API"}
            </button>
            <button onClick={addUser} className={styles.buttonSecondary}>
              Add Local User
            </button>
          </div>
        </div>

        <div>
          <h4 style={{ fontSize: "1.125rem", fontWeight: "600", marginBottom: "1rem" }}>
            Users (with clsx & nanoid)
          </h4>
          {users.length === 0 ? (
            <p style={{ color: "#6b7280", textAlign: "center", padding: "2rem" }}>
              No users yet. Fetch from API or add a local user.
            </p>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {users.map((user) => (
                <div
                  key={user.id}
                  onClick={() => setSelectedId(user.id)}
                  className={getCardClass(user.id)}
                  style={{
                    padding: "1rem",
                    background: selectedId === user.id ? "#dbeafe" : "#f9fafb",
                    border: `2px solid ${selectedId === user.id ? "#3b82f6" : "#e5e7eb"}`,
                    borderRadius: "0.5rem",
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "start",
                    }}
                  >
                    <div>
                      <p style={{ fontWeight: "600", marginBottom: "0.25rem" }}>{user.name}</p>
                      <p style={{ fontSize: "0.875rem", color: "#6b7280" }}>{user.email}</p>
                    </div>
                    <code
                      style={{
                        fontSize: "0.75rem",
                        background: "#1f2937",
                        color: "#e5e7eb",
                        padding: "0.25rem 0.5rem",
                        borderRadius: "0.25rem",
                      }}
                    >
                      {user.id}
                    </code>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className={styles.codeBlock}>
          <pre>
            {`// Axios - HTTP Client
import axios from 'axios';

const response = await axios.get('/api/users');
const data = await axios.post('/api/users', { name: 'John' });

// With TypeScript
const response = await axios.get<User[]>('/api/users');

// clsx - Conditional Classes
import clsx from 'clsx';

const buttonClass = clsx(
  'btn',
  isActive && 'active',
  isPrimary && 'primary',
  size === 'large' && 'btn-lg'
);

// nanoid - Unique ID Generator
import { nanoid } from 'nanoid';

const id = nanoid(); // => "V1StGXR8_Z5jdHi6B-myT"
const customId = nanoid(10); // => "IRFa-VaY2b"`}
          </pre>
        </div>

        <div className={styles.features}>
          <h4 className={styles.featuresTitle}>Key Features:</h4>
          <ul className={styles.featuresList}>
            <li>
              🌐 <strong>Axios:</strong> Promise-based HTTP client with interceptors
            </li>
            <li>
              🎨 <strong>clsx:</strong> Tiny utility for constructing className strings
            </li>
            <li>
              🆔 <strong>nanoid:</strong> Small, secure, URL-friendly unique ID generator
            </li>
            <li>⚡ All three are lightweight and performant</li>
            <li>🎯 Full TypeScript support</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
