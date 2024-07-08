// import Image from "next/image";
import Header from "@/components/Header";
import Filter from "@/components/Filter";
import Product from "@/components/Product";
import Footer from "@/components/Footer";


export default function Home() {
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
