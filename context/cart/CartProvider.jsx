import Cookies from 'js-cookie';
import { useEffect, useReducer, useRef } from 'react'
import { cart } from '../../utils';
import { CartContext, cartReducer } from './';

const CART_INITIAL_STATE = {
  cart: []
}

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, CART_INITIAL_STATE);

  useEffect(() => {
    try {
      //todo: cargar productos por id desde la bd
      const cookieProducts = Cookies.get('cart') ? JSON.parse(Cookies.get('cart')) : [];
      dispatch({ type: cart.loadFromCookies, payload: cookieProducts });
    } catch (error) {
      dispatch({ type: cart.loadFromCookies, payload: [] });
    }
  }, [])

  // Solucion encontrada en comments
  // todo: aplicar codigo original en prod
  /**
   * useEffect(() => {
   *  todo: guardar solo los ids
   *  Cookies.set('cart', JSON.stringify(state.cart));
   * }, [state.cart]);    
   */

  const isReloading = useRef(true);
  useEffect(() => {
    //todo: guardar solo los ids
    if (isReloading.current) isReloading.current = false;
    
    else Cookies.set('cart', JSON.stringify(state.cart));
  }, [state.cart])

  const addItem = (product) => {
    const productInCart = state.cart.some(p => p._id === product._id);
    if (!productInCart) return dispatch({ type: cart.add, payload: [...state.cart, product] });

    const productInCartButDifferenceSize = state.cart.some(p => p._id === product._id && p.size === product.size);
    if (!productInCartButDifferenceSize) return dispatch({ type: cart.add, payload: [...state.cart, product] });

    const updatedProducts = state.cart.map(p => {
      //validaciones extra
      if (p._id !== product._id) return p;
      if (p.size !== product.size) return p;

      //actualizar la cantidad
      p.quantity += product.quantity;
      return p;
    });
    dispatch({ type: cart.add, payload: updatedProducts });
  };


  return (
    <CartContext.Provider value={{
      ...state,

      //methods
      addItem,
    }}>
      {children}
    </CartContext.Provider>
  )
}