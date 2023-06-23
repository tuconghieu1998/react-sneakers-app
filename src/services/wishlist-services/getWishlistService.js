import { instanceAxios, getHeaderAuth } from "../services.js";

export const getWishlistService = async (encodedToken) =>
  await instanceAxios.get("/api/wishlist", {
    headers: getHeaderAuth(encodedToken)
  });
