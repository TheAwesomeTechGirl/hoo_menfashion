// import Image from "next/image";
import Header from "@/components/Header";
import Filter from "@/components/Filter";
import Products from "@/components/Products";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <main className="">
      <div className="">
      <Header/>
      <Filter/>
      <Products/>
      <Footer/>
            </div>
    </main>
  );
}
