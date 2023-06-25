import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export const instanceAxios = axios.create({
  baseURL: process.env.SERVER_URL,
});

export const getHeaderAuth = (token) => {
  const header = {'Authorization': 'Bearer ' + token}
  return header;
}

export const getAllCategories = async () => await instanceAxios.get("/api/categories");

export const getAllProducts = async () => await instanceAxios.get("/api/products");
