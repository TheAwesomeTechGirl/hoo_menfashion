import { IoIosClose } from "react-icons/io";
import Checkbox from "./Checkbox";
import Data from "./Data";

function Product() {
  return (
    <section className="flex flex-row justify-center">
      {/* This div will only show on desktop screens */}
      <div className="hidden md:block border border-solid rounded-lg border-gray-300 w-[295px] h-[523px] p-6 m-16">
        <h1 className="font-semibold text-base text-black mb-2">FASHION</h1>
        <p className="flex flex-row rounded-3xl mb-2 justify-center items-center h-[30px] w-[72px] text-center p-2 text-black font-normal bg-[#C4C4C4]">
          Men{" "}
          <span>
            <IoIosClose />
          </span>
        </p>
        <h1 className="font-semibold text-base text-black mb-2">CATEGORY</h1>
        <p className="flex flex-row rounded-3xl mb-2 justify-center items-center h-[32px] w-[100px] text-center text-black font-normal bg-[#C4C4C4]">
          All apparel{" "}
          <span>
            <IoIosClose />
          </span>
        </p>
        <p className="flex flex-row rounded-3xl mb-2 justify-center items-center h-[32px] w-[150px] text-center text-black font-normal bg-[#C4C4C4]">
          Gents Apparel{" "}
          <span>
            <IoIosClose />
          </span>
        </p>
        <h1 className="font-semibold text-base text-black mb-2">BRAND</h1>
        <ul className="list-none space-y-3">
          <li className="flex items-center">
            <Checkbox />
            <span className="ml-2">Zara</span>
          </li>
          <li className="flex items-center">
            <Checkbox />
            <span className="ml-2">Yerima</span>
          </li>
          <li className="flex items-center">
            <Checkbox />
            <span className="ml-2">Verisus</span>
          </li>
          <li className="flex items-center">
            <Checkbox />
            <span className="ml-2">OML</span>
          </li>
          <li className="flex items-center">
            <Checkbox />
            <span className="ml-2">Ogoscit</span>
          </li>
        </ul>
        <h1 className="font-semibold text-base text-black mt-2">PRICE</h1>
      </div>

      {/* This div will show on all screens */}
      <div className="md:border md:border-solid rounded-lg border-gray-300  md:w-[900px] md:h-[900px]   space-y-8 p-6 m-4 md:m-16">
        <span className="flex flex-row space-x-4">
          <h1 className="text-black font-semibold text-base hidden md:block">
            FRONTLINE OFFICIAL STORE
          </h1>
          <p className="hidden md:block">(820 matches found)</p>
        </span>

        <Data />
      </div>
    </section>
  );
}

export default Product;
