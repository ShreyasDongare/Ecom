import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../Context/CartContext";

const Header = () => {

  const {theme, toggleTheme} = useCartContext()
  return (
    <>
      <div
        className={`w-full h-[7vh] ${
          theme ? "bg-slate-700 text-white" : " bg-sky-300"
        } flex justify-between px-10 items-center`}
      >
        <div>
          <Link to={"/"}>
            <h2 className="text-3xl">logo</h2>
          </Link>
        </div>
        <div className="">
          <ul className="flex ">
            <Link to={"/"}>
              <li className="px-10">Home</li>
            </Link>
            <Link to={"/wishlist"}>
              <li className="px-10">Wishlist</li>
            </Link>
            <Link to={"/cart"}>
              <li className="px-10">Cart</li>
            </Link>{" "}
            <li className="px-10 duration-500 cursor-pointer " onClick={() => toggleTheme()}>
              {theme ? "Light" : "Dark"}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
