import { instanceAxios, getHeaderAuth } from "../services.js";

export const addToCartService = async (productId, encodedToken) => {
  return await instanceAxios.post(
    "/api/cart",
    { 
      product_id: productId,
      quantity: 1
    },
    {
      headers: getHeaderAuth(encodedToken)
    }
  );
};
