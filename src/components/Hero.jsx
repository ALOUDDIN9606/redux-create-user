import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist, saveEditedWishlistItem } from "../redux/slices/wishlist-slice";

const Hero = () => {
  const dispatch = useDispatch();
  const selectedUser = useSelector((state) => state.wishlist.selectedUser);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    job: "",
  });

  useEffect(() => {
    if (selectedUser) {
      setFormData(selectedUser);
    }
  }, [selectedUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedUser) {
      dispatch(
        saveEditedWishlistItem({ index: selectedUser.index, updatedUser: formData })
      );
    } else {
      dispatch(addToWishlist(formData));
    }
    setFormData({ firstName: "", lastName: "", age: "", gender: "", job: "" });
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-green-100 rounded-lg shadow-md my-20">
      <h2 className="text-2xl font-bold text-green-800 text-center mb-4">
        {selectedUser ? "Edit User" : "Add User"}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          className="border border-green-400 p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          className="border border-green-400 p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
          className="border border-green-400 p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className="border border-green-400 p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <input
          type="text"
          name="job"
          placeholder="Job"
          value={formData.job}
          onChange={handleChange}
          className="border border-green-400 p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button
          type="submit"
          className="w-full bg-green-600 text-white px-4 py-3 rounded-md hover:bg-green-700 transition-all duration-200"
        >
          {selectedUser ? "Update User" : "Add User"}
        </button>
      </form>
    </div>
  );
};

export default Hero;
