import Cookies from 'js-cookie';
import { useEffect, useReducer, useRef } from 'react'
import { cart } from '../../utils';
import { CartContext, cartReducer } from './';

const CART_INITIAL_STATE = {
  cart: [],
  numberOfItems: 0,
  subTotal: 0,
  tax: 0,
  total: 0,
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

  useEffect(() => {
    const subTotal = state.cart.reduce((prev, current) => (current.price * current.quantity) + prev, 0)
    const orderSummary = {
      numberOfItems: state.cart.reduce((prev, current) => current.quantity + prev, 0),
      subTotal,
      tax: subTotal * Number(process.env.NEXT_PUBLIC_TAX_RATE || 0),
      total: subTotal * (Number(process.env.NEXT_PUBLIC_TAX_RATE || 0) + 1)
    }

    dispatch({type: cart.updateOrderSummary, payload: orderSummary})
    console.log({ orderSummary })
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

  const updateCartQuantity = (product) => (dispatch({ type: cart.updateItemQuantity, payload: product }))
  const removeCartProduct = (product) => (dispatch({ type: cart.removeItem, payload: product }))

  return (
    <CartContext.Provider value={{
      ...state,

      //methods
      addItem,
      updateCartQuantity,
      removeCartProduct,
    }}>
      {children}
    </CartContext.Provider>
  )
}