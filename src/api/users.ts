import apiClient from "@/lib/axios";
import type { User } from "@/types/user";

export const usersApi = {
  getAll: async (): Promise<User[]> => {
    const response = await apiClient.get<User[]>("https://jsonplaceholder.typicode.com/users");
    return response.data;
  },

  getById: async (id: number): Promise<User> => {
    const response = await apiClient.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`);
    return response.data;
  },

  create: async (user: Omit<User, "id">): Promise<User> => {
    const response = await apiClient.post<User>("https://jsonplaceholder.typicode.com/users", user);
    return response.data;
  },

  update: async (id: number, user: Partial<User>): Promise<User> => {
    const response = await apiClient.patch<User>(
      `https://jsonplaceholder.typicode.com/users/${id}`,
      user
    );
    return response.data;
  },

  delete: async (id: number): Promise<void> => {
    await apiClient.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
  },
};
