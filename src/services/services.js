import axios from "axios";

export const instanceAxios = axios.create({
  baseURL: "https://sneaker-hieutc.onrender.com/",
});

export const getHeaderAuth = (token) => {
  const header = {'Authorization': 'Bearer ' + token}
  return header;
}

export const getAllCategories = async () => await instanceAxios.get("/api/categories");

export const getAllProducts = async () => await instanceAxios.get("/api/products");
