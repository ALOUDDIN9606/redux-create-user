import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist, editWishlistItem } from "../redux/slices/wishlist-slice";

const Product = () => {
  const wishlist = useSelector((state) => state.wishlist.items);
  const dispatch = useDispatch();

  return (
    <div className="pb-12">
  <h2 className="text-[35px] text-center bg-gradient-to-r from-green-300 to-red-400 py-2 text-white">
    Created users
  </h2>
  <div className="grid grid-cols-4 gap-16 px-10 pt-10">
    {wishlist.map((item, index) => (
      <div key={index} className="text-center flex flex-wrap flex-col gap-4 border-2 p-4 shadow-lg rounded-md">
        <h3 className="text-xl font-semibold">{item.firstName} {item.lastName}</h3>
        <p className="text-green-700 text-[18px]">Age: {item.age}</p>
        <p className="text-green-700 text-[18px]">Gender: {item.gender}</p>
        <p className="text-green-700 text-[18px]">Job: {item.job}</p>
        <div className="flex flex-wrap justify-around">
          <button
            onClick={() => dispatch(removeFromWishlist(index))}
            className="bg-red-500 w-[40%] text-white px-2 py-1 rounded-md mr-2 hover:bg-red-600 transition duration-300"
          >
            Remove
          </button>
          <button
            onClick={() => dispatch(editWishlistItem({ ...item, index }))}
            className="bg-green-500 w-[40%] text-white px-2 py-1 rounded-md hover:bg-green-600 transition duration-300"
          >
            Edit
          </button>
        </div>
      </div>
    ))}
  </div>
</div>

  );
};

export default Product;
