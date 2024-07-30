export const ADD_PRODUCT = "ADD_PRODUCT";
export const INCREASE_PRODUCT_QUANTITY = "INCREASE_PRODUCT_QUANTITY";
export const DECREASE_PRODUCT_QUANTITY = "DECREASE_PRODUCT_QUANTITY";

export function addProductToCart(payload) {
  return {
    type: "ADD_PRODUCT",
    payload,
  };
}

export function increaseProductQuantity(payload) {
  return {
    type: "INCREASE_PRODUCT_QUANTITY",
    payload,
  };
}

export function decreaseProductQuantity(payload) {
  return {
    type: "DECREASE_PRODUCT_QUANTITY",
    payload,
  };
}