// "use client";
// import Link from "next/link";
// import { useEffect } from "react";
// import gsap from "gsap";

// const solutions = [
//     "Managed Services",
//     "IT Consulting & Advisory",
//     "Cloud Services",
//     "Network Connectivity",
//     "ERP Solutions",
//     "Cyber Security",
//     "Web Development"
// ];


// export default function Footer() {

//     useEffect(() => {
//         gsap.to(".marquee", {
//             x: "-50%",
//             duration: 10,
//             ease: "linear",
//             repeat: -1,
//         });
//     }, []);

//     return (
//         <footer className=" pt-10 text-gray-400 bg-black">

//             {/* Top Section */}
//             <div className="max-w-7xl mx-auto px-4 py-9 grid grid-cols-1 md:grid-cols-12 gap-8">

//                 {/* Logo + About */}
//                 <div className="md:col-span-5">
//                     <img
//                         src="/logo1.svg"
//                         alt="logo"
//                         className="h-15 w-auto mb-15"
//                     />


//                     <div className="text-white px-4 py-9 grid gap-4">
//                         <h3 className=" h-243px w-441px mb-5">A delicious solutions for next-gen brands,<br /> who care, build relationships, have industry <br />experience, and win awards.</h3>

//                         <h3 className="text-[25px] underline underline-offset-4">
//                             +971524855744
//                         </h3>
//                         {/* <h3><span className="text-[#F79A01]">info@gtechsoftsolution.com</span></h3> */}

//                         <h3 className="font-[Geist] font-bold text-[18px] sm:text-[22px] md:text-[26px] lg:text-[29px] leading-[100%] tracking-[-0.01em] break-words">
//                             <span className="text-[#F79A01]">
//                                 info@gtechsoftsolution.com
//                             </span>
//                         </h3>
//                         <div className="flex items-center gap-4 mt-0">

//                             {/* LOGO 1 */}
//                             <img
//                                 src="/logo/logo-f1.svg"
//                                 alt="logo1"
//                                 className="w-[163px] h-[48px] object-contain"
//                             />

//                             {/* LOGO 2 */}
//                             <img
//                                 src="/logo/logo-f2.svg"
//                                 alt="logo2"
//                                 className="w-[120px] h-[48px] rounded-[10px] object-contain"
//                             />

//                         </div>


//                     </div>

//                 </div>

//                 <div className="md:col-span-2">
//                     <h3 className="text-lg font-semibold text-white mb-3 ">
//                         Solutions
//                     </h3>

//                     <ul className="space-y-2">
//                         {solutions.map((solution) => (
//                             <li key={solution}><Link href="#" className="hover:text-white">{solution}</Link></li>
//                         ))}
//                     </ul>
//                 </div>

//                 {/* Quick Links */}
//                 <div className="md:col-span-2">
//                     <h3 className="text-lg font-semibold text-white mb-3">
//                         Company
//                     </h3>

//                     <ul className="space-y-2">

//                         <li><Link href="/About" className="hover:text-white">About us</Link></li>

//                         <li><Link href="#" className="hover:text-white">Why us</Link></li>
//                         <li><Link href="#" className="hover:text-white">Team</Link></li>
//                         <li><Link href="#" className="hover:text-white">Careers</Link></li>

//                     </ul>
//                 </div>



//                 {/* Contact Info */}
//                 <div className=" md:col-span-3">

//                     <h3 className="text-lg font-semibold text-white mb-3">
//                         Quick Connect
//                     </h3>

//                     {/* Icons Row */}
//                     <div className="flex gap-4">

//                         <p>1336, AL Saqr Business Tower,<br /> Sheikh Zayed Road, Dubai</p>

//                     </div>

//                 </div>

//             </div>



//             {/* MARQUEE RIBBON */}
//             <div className="bg-black py-10 relative overflow-hidden flex justify-center">

//                 <div className="absolute w-[95%] h-full rotate-[-2deg] pointer-events-none">

//                     {/* TOP BORDER */}
//                     <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-600 to-transparent opacity-60"></div>

//                 </div>


//                 <div className="rotate-[-2deg] w-full pt-7">
//                     <div className="marquee flex whitespace-nowrap text-[#71717A] text-5xl tracking-wide">

//                         <span className="mx-12 flex items-center gap-6">
//                             Crafting Since 2016 <span className="text-[#F79A01] text-7xl ">✦</span>
//                         </span>

//                         <span className="mx-12 flex items-center gap-6">
//                             Crafting Since 2016 <span className="text-[#F79A01] text-7xl">✦</span>
//                         </span>

//                         <span className="mx-12 flex items-center gap-6">
//                             Crafting Since 2016 <span className="text-[#F79A01] text-7xl">✦</span>
//                         </span>

//                         <span className="mx-12 flex items-center gap-6">
//                             Crafting Since 2016 <span className="text-[#F79A01] text-7xl">✦</span>
//                         </span>

//                     </div>
//                 </div>



//             </div>
//             {/* Bottom Bar */}
//             <div className="absolute w-[95%] rotate-[-2deg] pointer-events-none">


//                 <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-600 to-transparent opacity-60"></div>


//             </div>

//             <div className="text-center pt-20">
//                 <h3 className="text-white">Developed and designed with by<span className="text-[#CDAA6A]"> EZ Soft Tech</span></h3>
//                 <h3>Copyright © {new Date().getFullYear()} All Rights Reserved </h3></div>
//         </footer>
//     );
// }







"use client";
import Link from "next/link";
import { useEffect } from "react";
import gsap from "gsap";

const solutions = [
    "Managed Services",
    "IT Consulting & Advisory",
    "Cloud Services",
    "Network Connectivity",
    "ERP Solutions",
    "Cyber Security",
    "Web Development"
];

export default function Footer() {

    useEffect(() => {
        const marquee = document.querySelector(".marquee");
        if (!marquee) return;

        const totalWidth = marquee.scrollWidth / 2;

        gsap.fromTo(
            marquee,
            { x: 0 },
            {
                x: -totalWidth,
                duration: 25,
                ease: "linear",
                repeat: -1,
            }
        );
    }, []);

    return (
        <footer className="pt-10 text-gray-400 bg-black">

            {/* Top Section */}
            <div className="max-w-7xl mx-auto px-4 py-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">

                {/* Logo + About */}
                <div className="md:col-span-2 lg:col-span-5">
                    <img
                        src="/logo1.svg"
                        alt="logo"
                        className="h-12 w-auto mb-10 md:h-14"
                    />

                    <div className="text-white px-4 py-9 grid gap-4">
                        <h3 className="mb-5 max-w-[441px]">
                            A delicious solutions for next-gen brands,<br />
                            who care, build relationships, have industry <br />
                            experience, and win awards.
                        </h3>

                        <h3 className="text-[25px] underline underline-offset-4">
                            +971524855744
                        </h3>

                        <h3 className="font-[Geist] font-bold text-[18px] sm:text-[22px] md:text-[26px] lg:text-[29px] leading-[100%] tracking-[-0.01em] break-words">
                            <span className="text-[#F79A01]">
                                info@gtechsoftsolution.com
                            </span>
                        </h3>

                        <div className="flex items-center gap-4 mt-0">
                            <img
                                src="/logo/logo-f1.svg"
                                alt="logo1"
                                className="w-[110px] h-[35px] sm:w-[163px] sm:h-[48px] object-contain"
                            />

                            <img
                                src="/logo/logo-f2.svg"
                                alt="logo2"
                                className="w-[90px] h-[35px] sm:w-[120px] sm:h-[48px] rounded-[10px] object-contain"
                            />
                        </div>
                    </div>
                </div>

                {/* Solutions */}
                <div className="md:col-span-1 lg:col-span-2">
                    <h3 className="text-lg font-semibold text-white mb-3">
                        Solutions
                    </h3>

                    <ul className="space-y-2">
                        {solutions.map((solution) => (
                            <li key={solution}>
                                <Link href="#" className="hover:text-white">
                                    {solution}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Company */}
                <div className="md:col-span-1 lg:col-span-2">
                    <h3 className="text-lg font-semibold text-white mb-3">
                        Company
                    </h3>

                    <ul className="space-y-2">
                        <li><Link href="/About" className="hover:text-white">About us</Link></li>
                        <li><Link href="#" className="hover:text-white">Why us</Link></li>
                        <li><Link href="#" className="hover:text-white">Team</Link></li>
                        <li><Link href="#" className="hover:text-white">Careers</Link></li>
                    </ul>
                </div>

                {/* Quick Connect */}
                <div className="md:col-span-2 lg:col-span-3">
                    <h3 className="text-lg font-semibold text-white mb-3">
                        Quick Connect
                    </h3>

                    <div className="flex gap-4">
                        <p>
                            1336, AL Saqr Business Tower,<br />
                            Sheikh Zayed Road, Dubai
                        </p>
                    </div>
                </div>

            </div>

            {/* MARQUEE RIBBON */}
            <div className="bg-black py-10 relative overflow-hidden flex justify-center">

                <div className="absolute w-[95%] h-full rotate-[-2deg] pointer-events-none">
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-600 to-transparent opacity-60"></div>
                </div>

                <div className="rotate-[-2deg] w-full pt-7">
                    <div className="marquee flex whitespace-nowrap text-[#71717A] text-5xl tracking-wide">

                        {[...Array(20)].map((_, i) => (
                            <span key={i} className="mx-6 md:mx-12 flex items-center gap-3 md:gap-6">
                                Crafting Since 2016
                                <span className="text-[#F79A01] text-7xl">✦</span>
                            </span>
                        ))}

                    </div>
                </div>
            </div>

            {/* Bottom Border */}
            <div className="absolute w-[95%] rotate-[-2deg] pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-600 to-transparent opacity-60"></div>
            </div>

            {/* Bottom Text */}
            <div className="text-center pt-20">
                <h3 className="text-white">
                    Developed and designed with by
                    <span className="text-[#CDAA6A]"> EZ Soft Tech</span>
                </h3>
                <h3>
                    Copyright © {new Date().getFullYear()} All Rights Reserved
                </h3>
            </div>

        </footer>
    );
}