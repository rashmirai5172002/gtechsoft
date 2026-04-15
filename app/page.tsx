import Image from "next/image";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Stats from "@/components/sections/Stats";
// import Clients from "@/components/sections/Clients";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Projects from "@/components/sections/Projects";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Stats />
      {/* <Clients /> */}
      <Services />
      <Process />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
