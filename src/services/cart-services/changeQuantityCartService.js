import { instanceAxios, getHeaderAuth } from "../services.js";

export const changeQuantityCartService = async (
  productId,
  encodedToken,
  quantity
) => {
  return await instanceAxios.put(
    `/api/cart/${productId}/update`,
    {
      quantity
    },
    {
      headers: getHeaderAuth(encodedToken),
    }
  );
};
