import { http, HttpResponse } from "msw";
import type { User } from "@/types/user";

export const handlers = [
  // Mock GET /users endpoint
  http.get("https://jsonplaceholder.typicode.com/users", () => {
    const users: User[] = [
      { id: 1, name: "John Doe", username: "johndoe", email: "john@example.com" },
      { id: 2, name: "Jane Smith", username: "janesmith", email: "jane@example.com" },
    ];
    return HttpResponse.json(users);
  }),

  // Mock GET /users/:id endpoint
  http.get("https://jsonplaceholder.typicode.com/users/:id", ({ params }) => {
    const { id } = params;
    const user: User = {
      id: Number(id),
      name: "John Doe",
      username: "johndoe",
      email: "john@example.com",
    };
    return HttpResponse.json(user);
  }),

  // Mock POST /users endpoint
  http.post("https://jsonplaceholder.typicode.com/users", async ({ request }) => {
    const newUser = (await request.json()) as Omit<User, "id">;
    const user: User = {
      id: Date.now(),
      ...newUser,
    };
    return HttpResponse.json(user, { status: 201 });
  }),

  // Mock PATCH /users/:id endpoint
  http.patch("https://jsonplaceholder.typicode.com/users/:id", async ({ params, request }) => {
    const { id } = params;
    const updates = (await request.json()) as Partial<User>;
    const user: User = {
      id: Number(id),
      name: "Updated User",
      username: "updateduser",
      email: "updated@example.com",
      ...updates,
    };
    return HttpResponse.json(user);
  }),

  // Mock DELETE /users/:id endpoint
  http.delete("https://jsonplaceholder.typicode.com/users/:id", () => {
    return new HttpResponse(null, { status: 204 });
  }),
];
