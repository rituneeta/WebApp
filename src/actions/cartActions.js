import { TYPES } from "../constants/actionTypes";

export const cartActions = {
  setSearchString: (data) => ({ type: TYPES.SET_SEARCH_STRING, payload: data }),
  addCartItems: (data) => ({ type: TYPES.ADD_CART_ITEMS, payload: data }),
};
