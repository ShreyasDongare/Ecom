import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Cart from "./components/Cart";
import Products from "./components/Products";
import WishList from "./components/WishList";
import { CartProvider } from "./Context/CartContext";
import "./index.css";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <CartProvider>
        <App />,
      </CartProvider>
    ),

    children: [
      {
        path: "/",
        element: <Products />,
      },
      {
        path: "/wishlist",
        element: <WishList />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
);
