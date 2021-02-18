import { TYPES } from "../constants/actionTypes";

const initialState = {
  searchString: "",
  cart: [
    {
      title: "Title-1",
      description: "description-1",
    },
    {
      title: "Title-2",
      description: "description-2",
    },
  ],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.SET_SEARCH_STRING:
      return { ...state, searchString: action.payload };
    case TYPES.ADD_CART_ITEMS:
      return { ...state, cart: [...state.cart, action.payload] };
    default:
      return state;
  }
};

export default cartReducer;
