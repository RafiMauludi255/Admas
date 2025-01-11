// Belum dipakai, buat tes doang 

import axios from "axios";

const API_URL = "http://localhost:8001/api";

// Mendapatkan semua user
export const getUsers = async () => {
  try {
    const response = await axios.get(`${API_URL}/users`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// Menambahkan user baru
export const createUser = async (user) => {
  try {
    const response = await axios.post(`${API_URL}/users`, user);
    return response.data;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};
