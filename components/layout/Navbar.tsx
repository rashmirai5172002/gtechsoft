"use client";

import { useState } from "react";
import Container from "../ui/Container";
import { ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);

  return (
    <header className="bg-white py-4 md:py-7 px-4 md:px-5 relative z-50">
      <Container>
        <div className="flex items-center justify-between relative">

          {/* LOGO */}
          <div className="flex items-center gap-2 md:gap-3">
            <img src="/logo.svg" alt="Gtechsoft" className="h-8 md:h-10 w-auto" />

            <span className="hidden sm:block w-[1px] h-6 md:h-8 bg-gray-300"></span>

            <p className="hidden sm:block w-[120px] md:w-[138px] text-[13px] md:text-[15px] text-gray-800 font-medium">
              Built for the World
            </p>
          </div>

          {/* MOBILE MENU ICON */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

          {/* RIGHT SIDE */}
          <div
            className={`
              ${menuOpen ? "flex" : "hidden"}
              md:flex
              flex-col md:flex-row
              md:items-center
              gap-6
              absolute md:static
              top-[70px] left-0
              w-full md:w-auto
              bg-white md:bg-transparent
              p-5 md:p-0
              shadow-md md:shadow-none
            `}
          >

            {/* NAV LINKS */}
            <nav className="flex flex-col md:flex-row gap-5 md:gap-8 text-sm text-[#444444] font-medium">

              {/* SERVICES */}
              <div className="relative">
                <button
                  onClick={() => setServiceOpen(!serviceOpen)}
                  className="flex items-center justify-between w-full md:w-auto"
                >
                  Services ▾
                </button>

                {serviceOpen && (
                  <div className="mt-2 md:absolute md:top-full md:left-0 bg-white shadow-lg rounded-md p-3 w-full md:w-52">
                    <a className="block p-2 hover:bg-gray-100">Web Development</a>
                    <a className="block p-2 hover:bg-gray-100">App Development</a>
                    <a className="block p-2 hover:bg-gray-100">UI/UX Design</a>
                  </div>
                )}
              </div>

              {/* INDUSTRIES */}
              <div className="relative">
                <button
                  onClick={() => setIndustriesOpen(!industriesOpen)}
                  className="flex items-center justify-between w-full md:w-auto"
                >
                  Industries ▾
                </button>

                {industriesOpen && (
                  <div className="mt-2 md:absolute md:top-full md:left-0 bg-white shadow-lg rounded-md p-3 w-full md:w-52">
                    <a className="block p-2 hover:bg-gray-100">Healthcare</a>
                    <a className="block p-2 hover:bg-gray-100">Education</a>
                    <a className="block p-2 hover:bg-gray-100">Finance</a>
                  </div>
                )}
              </div>

              <a className="hover:text-black transition">Resources</a>
              <a className="hover:text-black transition">About</a>
              <a className="hover:text-black transition">Contact Us</a>

            </nav>

            {/* BUTTON */}
            <div className="flex items-center gap-0 mt-4 md:mt-0">

              <button className="bg-[#1f1f1f] text-white px-5 md:px-6 py-2.5 md:py-3 rounded-full text-sm font-medium">
                Get Started
              </button>

              <button className="bg-[#F79A01] h-10 w-10 md:h-12 md:w-12 rounded-full flex items-center justify-center">
                <ArrowUpRight size={16} className="text-black" />
              </button>

            </div>

          </div>
        </div>
      </Container>
    </header>
  );
}