import React from "react";
import { useDispatch } from "react-redux";
import { addToWishlist } from "../redux/slices/wishlist-slice";

const DATA = [
  {
    id: 1,
    name: "Galaxy S24 Ultra",
    price: 1000,
  },
  {
    id: 2,
    name: "Iphone 15 Pro Max",
    price: 1200,
  },
  {
    id: 3,
    name: "Redmi Note 12 Pro",
    price: 300,
  },
];

const Product = () => {
  const dispatch = useDispatch();
  return (
    <div>
      {/* <h2 className="text-2xl font-bold">Product</h2>
      {DATA.map((item) => (
        <div key={item.id} className="border border-gray-300 p-4">
          <h3>{item.name}</h3>
          <p>{item.price}</p>
          <button
            onClick={() => dispatch(addToWishlist(item))}
            className="bg-blue-500 text-white px-2 py-1 rounded-md"
          >
            Like
          </button>
        </div>
      ))} */}
    </div>
  );
};

export default Product;
