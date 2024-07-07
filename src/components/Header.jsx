import { RiMenu2Fill } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { MdOutlineShoppingBag } from "react-icons/md";

function Header() {
  return (
    <div className="header">
    <div className="header-content flex flex-row items-center justify-between p-4">
    <RiMenu2Fill />
    <h1 className="text-[#FF5E00]">HOO!
      <br/>
      Men’s Fashion
    </h1>
    <CiSearch />
    <MdOutlineShoppingBag />
    </div>
    </div>
  )
}

export default Header
