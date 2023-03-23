const CartReducer = (state, action) => {
  if (action.type === "ADDTOCART") {
    // console.log("hi", action.payload)

    return {
      ...state,
      cart: [...state.cart, action.payload],
    };
  }

  if (action.type === "WISHLIST") {
    return {
      ...state,
      wishlist: [...state.wishlist, action.payload],
    };
  }
  
};



export default CartReducer;
