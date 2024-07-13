import Link from 'next/link';
import { CiHeart } from "react-icons/ci";
import CounterBox from "@/components/CounterBox";

function Productitem() {
  return (
    <section>
        
        <div className="detailsContainer">
<h1>21WN  Vintage Angle Shirt
<span><CiHeart /></span>
</h1>


    <span>$120<form className="flex items-center space-x-2 p-2 border w-[250px] h-[36px] border-gray-300 rounded-md mx-4">
          
          <input
            type="text"
            placeholder="12 other sellers for open box items"
            className="p-1 border-none focus:outline-none "
          />
        </form></span>


<p>Made from pure cutton to suit the worst of conditions, 
    you can’t simply go wrong wearing our one of a kind angle shirt. Made for premium men.</p>

<h4>   Sizes</h4>
 
<ul className="flex flex-row  text-center  gap-3 ">
  <li className="border rounded-sm bg-white h-7 w-6   hover:bg-[#FF5E00] hover:text-white p-1">S</li>
  <li className="border bg-white rounded-sm  h-7 w-6   hover:bg-[#FF5E00] hover:text-white p-1">M</li>
  <li className="border bg-white rounded-sm  h-7 w-6   hover:bg-[#FF5E00] hover:text-white p-1">L</li>
  <li className="border bg-white rounded-sm  h-7 w-6   hover:bg-[#FF5E00] hover:text-white p-1">XL</li>
  <li className="border bg-white rounded-sm  h-7 w-6   hover:bg-[#FF5E00] hover:text-white p-1">XXL</li>
</ul>

<div>
    <p>  Can be shipped if ordered within the next 03:45 hours <span>Quantity</span></p>

<div>
<button className="justify-center items-center w-[350px] h-[50px] border bg-[#FF5E00CC] p-2 rounded-lg shadow-md text-white ">
    Add to cart
    </button>

      <CounterBox />
</div>
<div>
    <Link href="">Free standard shipping</Link>
    <Link href="">Free Returns</Link>
</div>

</div>
        </div>
    </section>
  )
}

export default Productitem
