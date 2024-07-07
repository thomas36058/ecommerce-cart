export const ADD_PRODUCT = "ADD_PRODUCT";

export function addProductToCart(payload) {
  return {
    type: "ADD_PRODUCT",
    payload,
  };
}