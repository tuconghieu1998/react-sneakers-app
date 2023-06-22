import { instanceAxios, getHeaderAuth } from "../services.js";

export const removeFromCartService = async (productId, encodedToken) => {
  return await instanceAxios.delete(`/api/cart/${productId}/remove`, {
    headers: getHeaderAuth(encodedToken),
  });
};
