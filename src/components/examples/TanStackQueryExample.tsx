import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import * as styles from "./ExampleCard.css";

interface Post {
  id: number;
  title: string;
  body: string;
}

// Mock API functions
const fetchPosts = async (): Promise<Post[]> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return [
    { id: 1, title: "First Post", body: "This is the first post" },
    { id: 2, title: "Second Post", body: "This is the second post" },
    { id: 3, title: "Third Post", body: "This is the third post" },
  ];
};

const createPost = async (newPost: Omit<Post, "id">): Promise<Post> => {
  await new Promise((resolve) => setTimeout(resolve, 800));
  return { id: Date.now(), ...newPost };
};

export default function TanStackQueryExample() {
  const queryClient = useQueryClient();
  const [newTitle, setNewTitle] = useState("");
  const [newBody, setNewBody] = useState("");

  const {
    data: posts,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  const mutation = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: ["posts"] });
      setNewTitle("");
      setNewBody("");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTitle && newBody) {
      mutation.mutate({ title: newTitle, body: newBody });
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3 className={styles.title}>TanStack Query (React Query)</h3>
        <p className={styles.description}>
          Powerful data synchronization for React. Handles caching, background updates, and
          optimistic UI updates automatically.
        </p>
      </div>

      <div className={styles.content}>
        <div>
          <h4 style={{ fontSize: "1.125rem", fontWeight: "600", marginBottom: "1rem" }}>
            Posts from API
          </h4>

          {isLoading && <p style={{ color: "#6b7280" }}>Loading posts...</p>}
          {isError && <p style={{ color: "#ef4444" }}>Error: {error.message}</p>}

          {posts && (
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {posts.map((post) => (
                <div
                  key={post.id}
                  style={{
                    padding: "1rem",
                    background: "#f9fafb",
                    borderRadius: "0.5rem",
                    border: "1px solid #e5e7eb",
                  }}
                >
                  <h5 style={{ fontWeight: "600", marginBottom: "0.25rem" }}>{post.title}</h5>
                  <p style={{ fontSize: "0.875rem", color: "#6b7280" }}>{post.body}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        <div>
          <h4 style={{ fontSize: "1.125rem", fontWeight: "600", marginBottom: "1rem" }}>
            Create New Post
          </h4>
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}
          >
            <input
              type="text"
              placeholder="Post title"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              style={{
                padding: "0.625rem",
                border: "1px solid #d1d5db",
                borderRadius: "0.5rem",
                fontSize: "0.875rem",
              }}
            />
            <textarea
              placeholder="Post body"
              value={newBody}
              onChange={(e) => setNewBody(e.target.value)}
              rows={3}
              style={{
                padding: "0.625rem",
                border: "1px solid #d1d5db",
                borderRadius: "0.5rem",
                fontSize: "0.875rem",
                fontFamily: "inherit",
              }}
            />
            <button
              type="submit"
              disabled={mutation.isPending}
              className={styles.buttonPrimary}
              style={{ alignSelf: "flex-start" }}
            >
              {mutation.isPending ? "Creating..." : "Create Post"}
            </button>
          </form>
        </div>

        <div className={styles.codeBlock}>
          <pre>
            {`// Using TanStack Query
const { data, isLoading, isError } = useQuery({
  queryKey: ['posts'],
  queryFn: fetchPosts,
});

const mutation = useMutation({
  mutationFn: createPost,
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ['posts'] });
  },
});

// Trigger mutation
mutation.mutate({ title: 'New Post', body: 'Content' });`}
          </pre>
        </div>

        <div className={styles.features}>
          <h4 className={styles.featuresTitle}>Key Features:</h4>
          <ul className={styles.featuresList}>
            <li>🔄 Automatic caching and background refetching</li>
            <li>⚡ Optimistic updates</li>
            <li>🎯 TypeScript support</li>
            <li>♻️ Automatic garbage collection</li>
            <li>🔌 DevTools for debugging</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
