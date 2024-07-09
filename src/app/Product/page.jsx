import Header from "@/components/Header";
import Filter from "@/components/Filter";
import Productitem from "./Productitem";
import Footer from "@/components/Footer";


export default function Productpage() {
  return (
    <main className="">
      <div className="">
      <Header/>
      <Filter/>
<Productitem/>
      <Footer/>
            </div>
    </main>
  );
}