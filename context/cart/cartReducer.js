import { cart } from "../../utils";


export const cartReducer = (state, action) => {
  switch (action.type) {
    case cart.add:
      return {
        ...state,
        cart: [...action.payload]
      }

    case cart.loadFromCookies:
      return {
        ...state,
        cart: [...action.payload]
      }

    default:
      return state;
  }
}