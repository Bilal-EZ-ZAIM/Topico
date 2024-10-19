import React, { useState } from "react";
import StarRating from "../slider-products/StarRating";
import { useDispatch, useSelector } from "react-redux";
import { addOrder } from "../../redux/features/productsSlice";

const Products = () => {
  const { products } = useSelector((state) => state.product);

  const dispatch = useDispatch();

  const addCart = (data) => {
    console.log(data);

    dispatch(addOrder({ id: data }));
  };

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(products.length / productsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className=" flex-1 ">
      {/* Products Grid */}
      <div className="gap-y-5  rounded-md gap-4 sm:grid flex flex-col items-center justify-center w-full xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 h-max">
        {currentProducts.map((item, index) => (
          <div
            key={index}
            className="flex min-w-44 max-w-80 w-full   items-center   flex-col justify-between p-2 relative group py-3 bg-white shadow-xl "
          >
            <div className="w-28 h-32 flex items-center justify-center mx-auto">
              <img
                src={`./img/product/${item.mainImage}`}
                alt={item.title}
                className="w-full h-full object-cover"
                onMouseMove={(e) =>
                  (e.currentTarget.src = `./img/product/${item.secondaryImage}`)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.src = `./img/product/${item.mainImage}`)
                }
              />
            </div>
            <span className="bg-red-600 text-white text-[9px] rounded-sm p-1 absolute top-2 right-3">
              %{item.discount}
            </span>
            <div className="flex flex-col items-center justify-between h-24">
              <h6 className="text-blue-700 text-xs text-center">
                {item.title}
              </h6>
              <div className="flex gap-1 items-center">
                <StarRating rating={item.rating} />
              </div>
              <div className="flex gap-1 justify-center items-center">
                <span className="text-sm line-through">
                  ${item.originalPrice}
                </span>
                <span className="text-sm text-yellow-500">
                  ${item.discountedPrice}
                </span>
              </div>
            </div>

            {/* Action Icons */}
            <div className="flex justify-center flex-col gap-2 items-center absolute right-0 opacity-0 group-hover:right-3 group-hover:opacity-100 h-full transition-all duration-300">
              <div className="cursor-pointer">
                <i className="bi bi-suit-heart-fill text-xs transition-shadow duration-300 hover:shadow-lg hover:text-yellow-500"></i>
              </div>
              <div className="cursor-pointer">
                <i
                  onClick={() => addCart(item.id)}
                  className="bi bi-cart-plus-fill text-xs transition-shadow duration-300 hover:shadow-lg hover:text-yellow-500"
                ></i>
              </div>
              <div className="cursor-pointer">
                <i className="bi bi-cursor-fill text-xs transition-shadow duration-300 hover:shadow-lg hover:text-yellow-500"></i>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-4">
        <div className="flex items-center ">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className={`p-2 border   text-gray-600 bg-white hover:bg-gray-100 ${
              currentPage === 1
                ? "border-gray-300 cursor-not-allowed"
                : "text-blue-500 border-gray-300 hover:bg-blue-50 hover:text-blue-700"
            }`}
          >
            <svg
              width="12"
              fill="currentColor"
              height="12"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z"></path>
            </svg>
          </button>

          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={`p-1 px-2 border text-sm text-gray-600 bg-white hover:bg-gray-100 transition ${
                currentPage === index + 1
                  ? "border-yellow-400 text-black"
                  : "border-gray-300 hover:text-yellow-400"
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`p-2 border  text-base text-gray-600 bg-white hover:bg-gray-100 ${
              currentPage === totalPages
                ? "border-gray-300 cursor-not-allowed"
                : "text-blue-500 border-gray-300 hover:bg-blue-50 hover:text-blue-700"
            }`}
          >
            <svg
              width="12"
              fill="currentColor"
              height="12"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
