"use client";
import { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { CiBoxList } from "react-icons/ci";
import { MdOutlineFilterList } from "react-icons/md";
import { IoIosClose } from "react-icons/io";

function Filter() {
  const [hovered, setHovered] = useState(false);
  return (
 
    <section>
      {/* Mobile Filter */}
      <div className="mobile-filter flex flex-row justify-between p-3 md:hidden">
        <h1 className="font-bold text-base text-gray-500">Gents Apparel</h1>
        <div className="flex flex-row space-x-2 md:space-x-8">
          <p className="inline-flex rounded-3xl justify-center items-center h-[30px] w-[80px]  text-center p-2 text-gray-700 font-normal bg-[#C4C4C4] hover:text-blue-500 cursor-pointer opacity-20">
            New
            <span className="m-1 w-10">
              <MdArrowDropDown />
            </span>
          </p>
          <CiBoxList className=" w-8 border rounded-3xl h-6 bg-[#C4C4C4] p-1 mt-1 opacity-20 hover:text-blue-500 cursor-pointer" />
          <MdOutlineFilterList className="mb-2 w-[30px] h-8 p-2 rounded-3xl  bg-[#C4C4C4] text-[#DD8560] hover:text-blue-500 cursor-pointer opacity-20" />
        </div>
      </div>

      <div className="flex flex-row space-x-8 m-4 md:hidden">
      <p
        className="flex flex-row rounded-3xl  border border-black outline-1 hover:text-blue-500 cursor-pointer m-4 justify-center items-center h-[30px] w-[75px] text-center p-2 text-black font-normal"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        Men
        <span className="ml-2">
          {hovered ? <MdArrowDropDown /> : <IoIosClose />}
        </span>
      </p>
      <p
        className="flex flex-row rounded-3xl border border-black outline-1  m-4 justify-center items-center hover:text-blue-500 cursor-pointer h-[32px] w-[130px] text-center text-black font-normal"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        All apparel
        <span className="ml-2">
          {hovered ? <MdArrowDropDown /> : <IoIosClose />}
        </span>
      </p>
      </div>

      {/* Tablet and Desktop Filter */}
      <div className="tablet-desktop-filter hidden md:flex flex-row justify-between items-center p-3 text-white bg-[#ED0606]">
        <h1 className="font-semibold text-2xl mx-12 lg:mx-40">
          DEALS OF THE DAY
        </h1>
        <p className="font-normal text-base mx-12 lg:mx-48">Up to 75% off</p>
      </div>
    </section>
  );
}

export default Filter;
