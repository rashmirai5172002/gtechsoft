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
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = scrollRef.current;

    if (!el) return; // ✅ FIX (null check)

    const totalScroll = el.scrollWidth - el.clientWidth;

    const animation = gsap.to(el, {
      x: -totalScroll,
      ease: "none",
      scrollTrigger: {
        trigger: el,
        start: "center center",
        end: () => "+=" + totalScroll,
        scrub: 1.5,
        pin: true,
        anticipatePin: 1,
      },
    });

    return () => {
      animation.kill(); // ✅ clean animation
      ScrollTrigger.killAll(); // optional cleanup
    };
  }, []);

  return (
    <section className="py-24 bg-white">
      <Container>

        {/* ================= HEADING ================= */}
        <h2 className="text-center text-3xl md:text-4xl mb-30 leading-tight">
          Our End-to-End Process for Creating Seamless <br />
          Scalable Digital Experiences
        </h2>

        {/* ================= TOP TEXT ================= */}
        <div className="overflow-hidden whitespace-nowrap mb-14">
          <div className="flex items-center gap-10 text-sm text-gray-600 animate-marquee">

            {[
              "Crafting the right thing",
              "Simple process, avoid complexity",
              "Design with purpose",
              "Build scalable solutions",
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-4">
                <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                <span className="w-20 h-[1px] bg-gray-300"></span>
                <p>{text}</p>
              </div>
            ))}

            {[
              "Crafting the right thing",
              "Simple process, avoid complexity",
              "Design with purpose",
              "Build scalable solutions",
            ].map((text, i) => (
              <div key={"dup-" + i} className="flex items-center gap-4">
                <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                <span className="w-20 h-[1px] bg-gray-300"></span>
                <p>{text}</p>
              </div>
            ))}

          </div>
        </div>

        {/* ================= CARDS ================= */}
        <div className="relative overflow-hidden">

          <div
            ref={scrollRef}
            className="flex gap-4 px-4"
          >
            {processSteps.map((step, i) => (
              <div
                key={i}
                className="min-w-[280px] sm:min-w-[300px] md:min-w-[300px] h-[380px] bg-[#FBFAF9] rounded-[18px] p-6 flex flex-col justify-between transition duration-300 hover:-translate-y-2 hover:shadow-lg"
              >

                {/* TOP */}
                <div>
                  <div className="w-12 h-12 flex items-center justify-center mb-4 border border-black/10 rounded-full">
                    <img src={step.icon} alt={step.title} className="w-5 h-5" />
                  </div>

                  <br /><br /><br /><br />

                  <h3 className="text-base font-semibold text-gray-900 mb-1 mt-10">
                    {step.title}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {step.description}
                  </p>
                </div>

                {/* BUTTONS */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {step.buttons.map((btn, idx) => (
                    <button
                      key={idx}
                      className="text-xs text-gray-700 border border-black/10 rounded-full px-3 py-1 bg-[#FBFAF9] hover:bg-gray-100 transition w-fit"
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