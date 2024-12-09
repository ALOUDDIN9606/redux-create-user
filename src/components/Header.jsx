import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const counter = useSelector((state) => state.counter.value);

  return (
    <div className="bg-green-500">
      <h2 className="text-[35px] text-center bg-gradient-to-r from-green-300 to-red-400 py-2 text-white">Create Users</h2>
    </div>
  );
};

export default Header;
