import Image from "next/image";
import Header from "@/component/home/Header";
import Banner from "@/component/home/Banner";
import About from "@/component/about/About";
import StatsSection from "@/component/about/StatsSection";
import Skills from "@/component/skills/Skills";

export default function Home() {
  return (
  <div>
    <Header/>
    <Banner/>
    <About/>
    <StatsSection/>
    <Skills/>
  </div>
  );
}
