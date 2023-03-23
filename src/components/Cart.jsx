import React, { useState } from "react";
import { useCartContext } from "../Context/CartContext";

const Cart = () => {
  const { cart, theme } = useCartContext();
  const [filterCart, setFilterCart] = useState(cart);

  const handleRemove = (id) => {
    const flag = confirm("are you sure?");
    if (flag) {
      const data = filterCart.filter((item) => item.product.id !== id);
      setFilterCart(data);
    }
  };

  return (
    <div
      className={`w-full  py-20 ${
        theme ? "bg-slate-500 text-white" : " bg-sky-50"
      } `}
    >
      <div className="max-w-screen-lg m-auto   flex flex-wrap justify-center">
        {filterCart.length <= 0 ? (
          <div>Cart is Empty</div>
        ) : (
          filterCart?.map((product, index) => {
            const { id, title, price, thumbnail } = product.product;

            return (
              <div
                key={index}
                className={`${
                  theme
                    ? "hover:bg-slate-700 text-white"
                    : " bg-sky-200 hover:bg-sky-300"
                }  hover:border  hover:scale-105 duration-300  w-72 h-[400px] m-2 p-2 rounded cursor-pointer`}
              >
                <img
                  src={thumbnail}
                  alt="img"
                  className="w-72 rounded h-40 object-center"
                />
                <div className="my-3 flex flex-col h-44 justify-between ">
                  <div className="flex justify-between items-center h-20 my-2">
                    <h2 className="text-xl font-semibold ">{title}</h2>
                    <div className="text-xs flex justify-between my-4">
                      <p className="text-2xl">Rs.{price}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <button
                      onClick={() => handleRemove(id)}
                      className={`w-full ${
                        theme
                          ? " bg-slate-200 text-black"
                          : "bg-black text-white"
                      } py-3 rounded hover:bg-sky-600`}
                    >
                      Remove from Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Cart;
