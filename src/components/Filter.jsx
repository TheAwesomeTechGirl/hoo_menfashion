import { MdArrowDropDown } from "react-icons/md";
import { CiBoxList } from "react-icons/ci";
import { MdOutlineFilterList } from "react-icons/md";
import { IoIosClose } from "react-icons/io";

function Filter() {
  return (
    <section>
      {/* Mobile Filter */}
      <div className="mobile-filter flex flex-row justify-between p-3 md:hidden">
        <h1 className="font-bold text-base text-gray-500">Gents Apparel</h1>
        <div className="flex flex-row space-x-2 md:space-x-8">
          <p className="inline-flex rounded-3xl justify-center items-center h-[36px] w-[72px] text-center p-2 text-gray-700 font-normal bg-[#C4C4C4] opacity-20">
            New
            <span className="m-2 w-10">
              <MdArrowDropDown />
            </span>
          </p>
          <CiBoxList className="mt-2 w-10 h-6 bg-[#C4C4C4] p-1 opacity-20" />
          <MdOutlineFilterList className="mb-2 w-[36px] h-8 p-2 rounded-3xl bg-[#C4C4C4] text-[#DD8560] opacity-20" />
        </div>
      </div>

      <div className="flex flex-row space-x-8 m-4 md:hidden">
        <p className="flex flex-row rounded-3xl justify-center items-center h-[30px] w-[72px] text-center p-2 text-gray-700 font-normal bg-[#C4C4C4] opacity-20">
          Men{" "}
          <span>
            <IoIosClose />
          </span>
        </p>
        <p className="flex flex-row rounded-3xl justify-center items-center h-[32px] w-[100px] text-center text-gray-700 font-normal bg-[#C4C4C4] opacity-20">
          All apparel{" "}
          <span>
            <IoIosClose />
          </span>
        </p>
      </div>

      {/* Tablet and Desktop Filter */}
      <div className="tablet-desktop-filter hidden md:flex flex-row justify-between items-center p-3 text-white bg-[#ED0606]">
        <h1 className="font-semibold text-2xl mx-12 lg:mx-36">
          DEALS OF THE DAY
        </h1>
        <p className="font-medium text-lg mx-12 lg:mx-36">Up to 75% off</p>
      </div>
    </section>
  );
}

export default Filter;
