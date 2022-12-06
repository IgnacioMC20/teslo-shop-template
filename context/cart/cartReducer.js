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

    case cart.updateItemQuantity:
      return {
        ...state,
        cart: state.cart.map( p => {
          if(p._id !== action.payload._id) return p
          if(p.size !== action.payload.size) return p
          return action.payload
        })
      }
    
    case cart.removeItem:
      return {
        ...state,
        cart: state.cart.filter( p => !(p._id === action.payload._id && p.size === action.payload.size))
      }

    case cart.updateOrderSummary:
      return {
        ...state,
        ...action.payload
      }

    default:
      return state;
  }
}