import apiClient from "@/lib/axios";

export interface User {
  id: number;
  name: string;
  email: string;
}

export const usersApi = {
  getAll: async (): Promise<User[]> => {
    const response = await apiClient.get<User[]>("/users");
    return response.data;
  },

  getById: async (id: number): Promise<User> => {
    const response = await apiClient.get<User>(`/users/${id}`);
    return response.data;
  },

  create: async (user: Omit<User, "id">): Promise<User> => {
    const response = await apiClient.post<User>("/users", user);
    return response.data;
  },

  update: async (id: number, user: Partial<User>): Promise<User> => {
    const response = await apiClient.patch<User>(`/users/${id}`, user);
    return response.data;
  },

  delete: async (id: number): Promise<void> => {
    await apiClient.delete(`/users/${id}`);
  },
};
