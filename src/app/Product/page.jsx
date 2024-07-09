import Header from "@/components/Header";
import Filter from "@/components/Filter";
import Product from "./Product";
import Footer from "@/components/Footer";


export default function Productpage() {
  return (
    <main className="">
      <div className="">
      <Header/>
      <Filter/>
  <Product/>
      <Footer/>
            </div>
    </main>
  );
}