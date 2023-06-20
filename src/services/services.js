import axios from "axios";

console.log("url", process.env.PORT)

const instance = axios.create({
  baseURL: "http://127.0.0.1:3000/",
});

export const getAllCategories = async () => await instance.get("/api/categories");

export const getAllProducts = async () => await instance.get("/api/products");
