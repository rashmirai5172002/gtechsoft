// "use client";

// import { useRef, useEffect } from "react";
// import Container from "../ui/Container";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// /* ================= DATA ================= */
// const processSteps = [
//   {
//     icon: "/icon/icon-img1.svg",
//     title: "Onboarding",
//     description: "Beginning the Journey",
//     buttons: ["Briefing", "Debriefing", "Account access", "Project setup"],
//   },
//   {
//     icon: "/icon/icon-img2.svg",
//     title: "Exploration",
//     description: "Mapping the path",
//     buttons: ["Brand audit", "Competitor analysis", "Ideation stage", "Strategy"],
//   },
//   {
//     icon: "/icon/icon-img1.svg",
//     title: "Setup",
//     description: "Setting the stage",
//     buttons: ["Tracking", "Content create", "Campaign", "UX/UI process"],
//   },
//   {
//     icon: "/icon/icon-img2.svg",
//     title: "Growth & Launch",
//     description: "Bringing to life",
//     buttons: ["Optimization", "Quality check", "Testing", "Project launch"],
//   },
//   {
//     icon: "/icon/icon-img2.svg",
//     title: "Growth & Launch",
//     description: "Bringing to life",
//     buttons: ["Optimization", "Quality check", "Testing", "Project launch"],
//   },
//   {
//     icon: "/icon/icon-img2.svg",
//     title: "Growth & Launch",
//     description: "Bringing to life",
//     buttons: ["Optimization", "Quality check", "Testing", "Project launch"],
//   },
// ];

// /* ================= COMPONENT ================= */
// export default function Process() {
//   const scrollRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     const el = scrollRef.current;

//     if (!el) return; // ✅ FIX (null check)

//     const totalScroll = el.scrollWidth - el.clientWidth;

//     const animation = gsap.to(el, {
//       x: -totalScroll,
//       ease: "none",
//       scrollTrigger: {
//         trigger: el,
//         start: "center center",
//         end: () => "+=" + totalScroll,
//         scrub: 1.5,
//         pin: true,
//         anticipatePin: 1,
//       },
//     });

//     return () => {
//       animation.kill(); // ✅ clean animation
//       ScrollTrigger.killAll(); // optional cleanup
//     };
//   }, []);

//   return (
//     <section className="py-24 bg-white">
//       <Container>

//         {/* ================= HEADING ================= */}
//         <h2 className="text-center text-3xl md:text-4xl mb-30 leading-tight">
//           Our End-to-End Process for Creating Seamless <br />
//           Scalable Digital Experiences
//         </h2>

//         {/* ================= TOP TEXT ================= */}
//         <div className="overflow-hidden whitespace-nowrap mb-14">
//           <div className="flex items-center gap-10 text-sm text-gray-600 animate-marquee">

//             {[
//               "Crafting the right thing",
//               "Simple process, avoid complexity",
//               "Design with purpose",
//               "Build scalable solutions",
//             ].map((text, i) => (
//               <div key={i} className="flex items-center gap-4">
//                 <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
//                 <span className="w-20 h-[1px] bg-gray-300"></span>
//                 <p>{text}</p>
//               </div>
//             ))}

//             {[
//               "Crafting the right thing",
//               "Simple process, avoid complexity",
//               "Design with purpose",
//               "Build scalable solutions",
//             ].map((text, i) => (
//               <div key={"dup-" + i} className="flex items-center gap-4">
//                 <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
//                 <span className="w-20 h-[1px] bg-gray-300"></span>
//                 <p>{text}</p>
//               </div>
//             ))}

//           </div>
//         </div>

//         {/* ================= CARDS ================= */}
//         <div className="relative overflow-hidden">

//           <div
//             ref={scrollRef}
//             className="flex gap-4 px-4"
//           >
//             {processSteps.map((step, i) => (
//               <div
//                 key={i}
//                 className="min-w-[280px] sm:min-w-[300px] md:min-w-[300px] h-[380px] bg-[#FBFAF9] rounded-[18px] p-6 flex flex-col justify-between transition duration-300 hover:-translate-y-2 hover:shadow-lg"
//               >

//                 {/* TOP */}
//                 <div>
//                   <div className="w-12 h-12 flex items-center justify-center mb-4 border border-black/10 rounded-full">
//                     <img src={step.icon} alt={step.title} className="w-5 h-5" />
//                   </div>

//                   <br /><br /><br /><br />

//                   <h3 className="text-base font-semibold text-gray-900 mb-1 mt-10">
//                     {step.title}
//                   </h3>

//                   <p className="text-sm text-gray-500">
//                     {step.description}
//                   </p>
//                 </div>

//                 {/* BUTTONS */}
//                 <div className="flex flex-wrap gap-2 mt-4">
//                   {step.buttons.map((btn, idx) => (
//                     <button
//                       key={idx}
//                       className="text-xs text-gray-700 border border-black/10 rounded-full px-3 py-1 bg-[#FBFAF9] hover:bg-gray-100 transition w-fit"
//                     >
//                       {btn}
//                     </button>
//                   ))}
//                 </div>

//               </div>
//             ))}
//           </div>

//         </div>

//       </Container>
//     </section>
//   );
// }




"use client";

import { useRef, useEffect } from "react";
import Container from "../ui/Container";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ================= DATA ================= */
const processSteps = [
  {
    icon: "/icon/icon-img1.svg",
    title: "Onboarding",
    description: "Beginning the Journey",
    buttons: ["Briefing", "Debriefing", "Account access", "Project setup"],
  },
  {
    icon: "/icon/icon-img2.svg",
    title: "Exploration",
    description: "Mapping the path",
    buttons: ["Brand audit", "Competitor analysis", "Ideation stage", "Strategy"],
  },
  {
    icon: "/icon/icon-img1.svg",
    title: "Setup",
    description: "Setting the stage",
    buttons: ["Tracking", "Content create", "Campaign", "UX/UI process"],
  },
  {
    icon: "/icon/icon-img2.svg",
    title: "Growth & Launch",
    description: "Bringing to life",
    buttons: ["Optimization", "Quality check", "Testing", "Project launch"],
  },
  {
    icon: "/icon/icon-img2.svg",
    title: "Growth & Launch",
    description: "Bringing to life",
    buttons: ["Optimization", "Quality check", "Testing", "Project launch"],
  },
  {
    icon: "/icon/icon-img2.svg",
    title: "Growth & Launch",
    description: "Bringing to life",
    buttons: ["Optimization", "Quality check", "Testing", "Project launch"],
  },
];

/* ================= COMPONENT ================= */
export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
  const el = containerRef.current;
const section = sectionRef.current;

if (!el || !section) return;

const totalScroll = el.scrollWidth - el.clientWidth;

  ScrollTrigger.matchMedia({

    // ✅ MOBILE ONLY
    "(max-width: 767px)": function () {
      gsap.to(el, {
        x: -totalScroll,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => "+=" + totalScroll,
          scrub: 1.5,
          pin: true,
          anticipatePin: 1,
        },
      });
    },

    // ✅ TABLET + LAPTOP + DESKTOP (same behavior)
    "(min-width: 768px)": function () {
      gsap.to(el, {
        x: -totalScroll,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top+=100 top",   // 🔥 delay so full card visible
          end: () => "+=" + totalScroll,
          scrub: 1.5,
          pin: true,
          anticipatePin: 1,
        },
      });
    }

  });

  return () => ScrollTrigger.killAll();
}, []);

  return (
    <section ref={sectionRef} className="py-12 md:py-16 lg:py-24 bg-white">
      <Container>

        {/* ================= HEADING ================= */}
        <h2 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-8 md:mb-14 lg:mb-30 leading-snug dark:text-black">
          Our End-to-End Process for Creating Seamless <br />
          Scalable Digital Experiences
        </h2>

        {/* ================= TOP TEXT ================= */}
        <div className="overflow-hidden mb-6 md:mb-10 lg:mb-14">
          <div className="flex  w-max items-center gap-5 md:gap-8 lg:gap-10 text-xs md:text-sm text-gray-600 animate-marquee">

            {[
              "Crafting the right thing",
              "Simple process, avoid complexity",
              "Design with purpose",
              "Build scalable solutions",
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-3 md:gap-4">
                <span className="w-2 h-2 md:w-3 md:h-3 bg-orange-500 rounded-full"></span>
                <span className="w-12 md:w-20 h-[1px] bg-gray-300"></span>
                <p>{text}</p>
              </div>
            ))}

            {/* duplicate */}
            {[
              "Crafting the right thing",
              "Simple process, avoid complexity",
              "Design with purpose",
              "Build scalable solutions",
            ].map((text, i) => (
              <div key={"dup-" + i} className="flex items-center gap-3 md:gap-4">
                <span className="w-2 h-2 md:w-3 md:h-3 bg-orange-500 rounded-full"></span>
                <span className="w-12 md:w-20 h-[1px] bg-gray-300"></span>
                <p>{text}</p>
              </div>
            ))}

          </div>
        </div>

        {/* ================= CARDS ================= */}
        <div className="relative overflow-hidden">

          <div
            ref={containerRef}
            className="flex gap-3 md:gap-4 px-2 md:px-4"
          >
            {processSteps.map((step, i) => (
              <div
                key={i}
                className="min-w-[220px] sm:min-w-[250px] md:min-w-[300px] h-[300px] md:h-[360px] lg:h-[380px] bg-[#FBFAF9] rounded-[18px] p-4 md:p-5 lg:p-6 flex flex-col justify-between transition duration-300 hover:-translate-y-2 hover:shadow-lg"
              >

                {/* TOP */}
                <div>
                  <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center mb-3 md:mb-4 border border-black/10 rounded-full">
                    <img src={step.icon} alt={step.title} className="w-4 h-4 md:w-5 md:h-5" />
                  </div>

                  <div className="h-4 md:h-8"></div>

                  <h3 className="text-sm md:text-base font-semibold text-gray-900 mb-1 mt-4 md:mt-8">
                    {step.title}
                  </h3>

                  <p className="text-xs md:text-sm text-gray-500">
                    {step.description}
                  </p>
                </div>

                {/* BUTTONS */}
                <div className="flex flex-wrap gap-1.5 md:gap-2 mt-3 md:mt-4">
                  {step.buttons.map((btn, idx) => (
                    <button
                      key={idx}
                      className="text-[10px] md:text-xs text-gray-700 border border-black/10 rounded-full px-2 py-[2px] md:px-3 md:py-1 bg-[#FBFAF9] hover:bg-gray-100 transition w-fit"
                    >
                      {btn}
                    </button>
                  ))}
                </div>

              </div>
            ))}
          </div>

        </div>

      </Container>
    </section>
  );
}