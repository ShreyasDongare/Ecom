import React, { useEffect, useState } from "react";

const Products = ({theme}) => {
  const [products, setproducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [isAvailable, setIsAvailable] = useState(false);

  const getProductData = async () => {
    try {
      const responce = await fetch("https://dummyjson.com/products");
      const data = await responce.json();
      setproducts(data?.products);
      setFilteredProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };

  const filterProducts = (search, products) => {
    if (search.length === 0 || search == 0) {
      setFilteredProducts(products);
    } else if (+search > products.length) {
      setIsAvailable(true);
    } else {
      setIsAvailable(false);
      const filter = products.filter((item) => item.id === +search);
      setFilteredProducts(filter);
    }
  };

  // console.log(products);
  useEffect(() => {
    getProductData();
  }, []);

  return (
    <div
      className={`w-full  py-20 ${
        theme ? "bg-slate-500 text-white" : " bg-sky-300"
      } bg-sky-100`}
    >
      <div
        className="max-w-screen-lg m-auto  flex justify-center my-2"
        onSubmit={(e) => e.preventDefault()}
      >
        <form action="">
          <input
            type="number"
            name=""
            id=""
            className="w-80 px-4 py-2 mx-2 rounded shadow-md  outline-none "
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            type="submit"
            onClick={() => filterProducts(search, products)}
            className="bg-sky-500 hover:bg-sky-300 px-4 py-2 mx-2 rounded"
          >
            Search
          </button>
        </form>
      </div>
      <div className="max-w-screen-lg m-auto   flex flex-wrap justify-center">
        {isAvailable ? (
          <div className="max-w-screen-lg h-[62vh] m-auto p-2 flex justify-center  items-center">
            <h1 className="text-2xl ">No product available for your search</h1>
          </div>
        ) : (
          <>
            {filteredProducts.map((product) => {
              const { id, title, price, thumbnail } = product;
              return (
                <div
                  key={id}
                  className={`${
                    theme ? "hover:bg-slate-700 text-white" : " bg-sky-300"
                  }  hover:border  hover:scale-105 duration-300  w-72 h-[400px] m-2 p-2 rounded cursor-pointer`}
                >
                  <img
                    src={thumbnail}
                    alt=""
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
                        className={`w-full ${
                          theme ? " bg-slate-200 text-black" : "bg-sky-700"
                        } py-3 rounded hover:bg-sky-600`}
                      >
                        Add to Wishlist
                      </button>
                      <button
                        className={`w-full ${
                          theme ? " bg-slate-200 text-black" : "bg-sky-700"
                        } py-3 rounded hover:bg-sky-600`}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default Products;
