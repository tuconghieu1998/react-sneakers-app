import { instanceAxios, getHeaderAuth } from "../services.js";

export const getCartService = async (encodedToken) => {
  console.log("getCartService", encodedToken);
  return await instanceAxios.get("/api/cart", {
    headers: getHeaderAuth(encodedToken),
  });
}
  
