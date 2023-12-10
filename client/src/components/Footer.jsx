import React from "react";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-300 h-14 justify-center p-4 flex gap-1">
      made with
      <div className="my-1">
        <FaHeart color="red" size={15} />
      </div>
      <span>of .Coder</span>
    </div>
  );
};

export default Footer;
