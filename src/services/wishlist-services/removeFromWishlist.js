import { instanceAxios, getHeaderAuth } from "../services.js";

export const removeFromWishlistService = async (productId, encodedToken) => {
  return await instanceAxios.delete(`/api/wishlist/${productId}/remove`, {
    headers: getHeaderAuth(encodedToken)
  });
};
