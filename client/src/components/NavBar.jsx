import React, { useState } from "react";

const NavBar = () => {
  const [search, setSearch] = useState(" ");
  return (
    <div className="flex flex-row justify-between p-3">
      <h1 className="text-3xl font-bold">.Coder</h1>
      <input
        className="border-black border-2 p-2"
        type="name"
        placeholder="Search for Products"
      />
      <li className="flex justify-between gap-2 ">
        <ul>Register </ul>
        <ul>SignIn</ul>
        <ul>Cart</ul>
      </li>
    </div>
  );
};

export default NavBar;
