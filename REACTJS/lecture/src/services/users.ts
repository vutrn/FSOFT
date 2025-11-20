import axios from "axios";
import { instance } from "./axios";

export const getUsers = async () => {
  try {
    const res = await instance.get(`/users`);
    return res.data;
  } catch (error) {
    console.error("Error fetching users:", error);
  }
};

export const getUserById = async (userId: number) => {
  try {
    const res = await instance.get(`/users/${userId}`);
    return res.data;
  } catch (error) {
    console.error("Error fetching user by ID:", error);
  }
};
