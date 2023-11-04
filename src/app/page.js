"use client";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { sarpanch } from "@/utils/fonts/fontlist";
import LandingPage from "@/components/LandingPage";
import Secondpage from "@/components/Secondpage";
import ThirdPage from "@/components/ThirdPage";
import Footer from "@/components/Footer";
import SizeIndicator from "@/utils/SizeIndicator";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
// import bg from "./bg";
export default function Home() {
  // const lenis = new Lenis();

  // lenis.on("scroll", (e) => {
  // });

  // function raf(time) {
  //   lenis.raf(time);
  //   requestAnimationFrame(raf);
  // }

  // requestAnimationFrame(raf);

  // useEffect(() => {
  //   const script = document.createElement("script");
  //   script.src =
  //     "/lenis.min.js";
  //   script.onload = () => {
  //     const lenisInstance = new Lenis();
  //     lenisInstance.onScroll((e) => {
  //     });
  //     function raf(time) {
  //       lenisInstance.raf(time);
  //       requestAnimationFrame(raf);
  //     }

  //     requestAnimationFrame(raf);

  //   };
  //   document.head.appendChild(script);

  // }, []);
 
  return (
    <main className="flex min-h-screen overflow-hidden bg-[#1e1c51] justify-between  main_container relative">
      {/* <canvas></canvas> */}
      <div className="z-[1] flex  w-full flex-col check text-white">
        <Navbar />
        <LandingPage />
        <Secondpage />
        <ThirdPage />
        <Footer />
      
        <div className="fixed">
          <SizeIndicator />
        </div>
      </div>
    </main>
  );
}
