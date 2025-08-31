import Image from "next/image";
import Header from "@/component/home/Header";
import Banner from "@/component/home/Banner";
import About from "@/component/about/About";

export default function Home() {
  return (
  <div>
    <Header/>
    <Banner/>
    <About/>
  </div>
  );
}
