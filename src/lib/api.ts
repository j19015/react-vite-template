import apiClient from "./axios";
import type { User, Post } from "@/types/user";

// Example API functions
export const userApi = {
  getUsers: async (): Promise<User[]> => {
    const response = await apiClient.get<User[]>("https://jsonplaceholder.typicode.com/users");
    return response.data;
  },

  getUser: async (id: number): Promise<User> => {
    const response = await apiClient.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`);
    return response.data;
  },

  getUserPosts: async (userId: number): Promise<Post[]> => {
    const response = await apiClient.get<Post[]>(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );
    return response.data;
  },
};
