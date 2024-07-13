"use client";
import { useState } from "react";
import { IoIosClose } from "react-icons/io";
import { MdArrowDropDown } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import Checkbox from "./Checkbox";
import Data from "./Data";

function Products() {
 
    const [hovered, setHovered] = useState(false);
  

  return (
    <section className="flex flex-row justify-center">
      {/* This div will only show on desktop screens */}
      <div className="hidden md:block border border-solid rounded-lg border-gray-300 shadow-custom bg-white w-[295px] h-[523px] p-6 m-16">
        <h1 className="font-semibold text-base text-black mb-2">FASHION</h1>
        <p
        className="flex flex-row rounded-3xl  border border-black outline-1  m-4 justify-center items-center h-[30px] w-[75px] text-center p-2 text-black font-normal"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        Men
        <span className="ml-2">
          {hovered ? <MdArrowDropDown /> : <IoIosClose />}
        </span>
      </p>
      <h1 className="font-semibold text-base text-black mb-2">CATEGORY</h1>
      <p
        className="flex flex-row rounded-3xl border border-black outline-1  m-4 justify-center items-center h-[32px] w-[130px] text-center text-black font-normal"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        All apparel
        <span className="ml-2">
          {hovered ? <MdArrowDropDown /> : <IoIosClose />}
        </span>
      </p>
      <p
        className="flex flex-row rounded-3xl border border-black outline-1  m-4 justify-center items-center h-[32px] w-[150px] text-center text-black font-normal"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        Gents Apparel
        <span className="ml-2">
          {hovered ? <MdArrowDropDown /> : <IoIosClose />}
        </span>
      </p>
        <h1 className="font-semibold text-base text-black mb-2">BRAND</h1>
        <div className="list-none space-y-3 ">
        <Checkbox/>
        </div>
        <h1 className="font-semibold text-base text-black mt-3">PRICE</h1>
      </div>

      {/* This div will show on all screens */}
      <div className="md:border md:border-solid rounded-lg border-gray-300 shadow-custom bg-white  md:w-[900px] md:h-[1020px]   space-y-8 p-6 m-4 md:m-16">
        <span className="flex flex-row space-x-4">
          <h1 className="text-black font-semibold text-base hidden md:block">
            FRONTLINE OFFICIAL STORE
          </h1>
          <p className="hidden md:block">(820 matches found)</p>
        </span>
        <Data />
<div className="flex flex-row justify-center items-start text-[#FF5E00]  gap-4 ">
<ul className="flex flex-row justify-center items-start text-center  gap-3 ">
  <li className="border rounded-sm bg-white h-7 w-6   hover:bg-[#FF5E00] hover:text-white p-1">1</li>
  <li className="border bg-white rounded-sm  h-7 w-6   hover:bg-[#FF5E00] hover:text-white p-1">2</li>
  <li className="border bg-white rounded-sm  h-7 w-6   hover:bg-[#FF5E00] hover:text-white p-1">3</li>
  <li className="border bg-white rounded-sm  h-7 w-6   hover:bg-[#FF5E00] hover:text-white p-1">4</li>
  <li className="border bg-white rounded-sm  h-7 w-6   hover:bg-[#FF5E00] hover:text-white p-1">5</li>
</ul>

<IoIosArrowForward className="mt-2"/>
</div>
      </div>
    </section>
  );
}

export default Products;
