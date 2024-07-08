"use client";
import { useState } from "react";
import { RiMenu2Fill } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { MdOutlineShoppingBag, MdArrowDropDown } from "react-icons/md";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showCart, setShowCart] = useState(false);

  return (
    <div className="menu">
      {/* Mobile Menu */}
      <div className="mobile-menu flex flex-row items-center justify-between p-4 md:hidden">
        <RiMenu2Fill className="w-10" onClick={() => setShowMenu(!showMenu)} />
        <h1 className="text-[#FF5E00] font-medium text-sm">
          HOO!
          <br />
          Men’s Fashion
        </h1>
        <CiSearch onClick={() => setShowSearch(!showSearch)} />
        <MdOutlineShoppingBag onClick={() => setShowCart(!showCart)} />
      </div>

      {/* Conditional rendering for mobile */}
      {showMenu && (
        <ul className="flex flex-col items-center bg-black text-white">
          <li className="py-2">Shop</li>
          <li className="py-2">Stories</li>
          <li className="py-2">About</li>
          <li className="py-2">Blog</li>
          <li className="py-2">Contact</li>
        </ul>
      )}

      {showSearch && (
        <form className="flex items-center space-x-2 p-2 border w-full h-[36px] border-gray-300 bg-gray-300 rounded-md mx-4">
          <CiSearch className="text-gray-500" />
          <input
            type="text"
            placeholder="Search"
            className="p-1 border-none focus:outline-none bg-gray-300 w-full"
          />
        </form>
      )}

      {showCart && (
        <span className="flex flex-row items-center mx-4 text-black">
          <MdOutlineShoppingBag /> cart(2)
        </span>
      )}

      {/* Desktop/Tablet Menu */}
      <div className="desktop-menu hidden md:flex md:flex-row md:justify-between md:items-center md:bg-black md:space-x-10">
        <h1 className="text-[#FF5E00] font-medium text-xl tracking-tighter mx-4">
          HOO!
          <br />
          Men’s Fashion
        </h1>
        <ul className="flex flex-row text-white font-normal text-base">
          <li className="mx-2">Shop</li>
          <li className="mx-2">Stories</li>
          <li className="mx-2">About</li>
          <li className="mx-2">Blog</li>
          <li className="mx-2">Contact</li>
        </ul>

        <form className="flex items-center space-x-2 p-2 border w-[300px] h-[36px] border-gray-300 bg-gray-300 rounded-md mx-4">
          <CiSearch className="text-gray-500" />
          <input
            type="text"
            placeholder="Search"
            className="p-1 border-none focus:outline-none bg-gray-300"
          />
        </form>
        <span className="flex flex-row items-center mx-4 text-white font-normal text-base">
          <MdOutlineShoppingBag /> cart(2)
        </span>
        <p className="flex flex-row text-white font-normal text-base items-center">
          Olumide
          <span className="m-2 w-10">
            <MdArrowDropDown />
          </span>
        </p>
      </div>
    </div>
  );
};

export default Header;
