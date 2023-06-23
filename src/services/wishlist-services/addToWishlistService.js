import { instanceAxios, getHeaderAuth } from "../services.js";

export const addToWishlistService = async (productId, encodedToken) => {
  return await instanceAxios.post(
    "/api/wishlist",
    { product_id: productId},
    {
      headers: getHeaderAuth(encodedToken),
    }
  );
};
