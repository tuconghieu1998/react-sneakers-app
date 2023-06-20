import axios from "axios";

console.log("url", process.env.PORT)

export const instanceAxios = axios.create({
  baseURL: "http://127.0.0.1:3000/",
});

export const getAllCategories = async () => await instanceAxios.get("/api/categories");

export const getAllProducts = async () => await instanceAxios.get("/api/products");
