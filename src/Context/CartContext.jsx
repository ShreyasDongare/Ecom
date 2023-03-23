import { createContext, useContext, useReducer, useState } from "react";
import reducer from "../Reducer/CartReducer";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const initialState = {
    cart: [],
    wishlist: [],
    products: [],
    filteredProducts: [],
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const [theme, setTheme] = useState(false);
  const toggleTheme = () => {
    setTheme(!theme);
  };
  const addToCart = (product) => {
    dispatch({
      type: "ADDTOCART",
      payload: { product },
    });
  };

  const addToWishlist = (product) => {
    dispatch({
      type: "WISHLIST",
      payload: { product },
    });
  };
  console.log(state.wishlist);

  

  return (
    <CartContext.Provider
      value={{ ...state, theme, toggleTheme, addToCart, addToWishlist }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };
