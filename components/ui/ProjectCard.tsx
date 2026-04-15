"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  image: string;
  title: string;
  imageHeight?: string;
};

export default function ProjectCard({
  image,
  title,
  imageHeight = "h-[300px] md:h-[400px]",
}: Props) {

  const imgRef = useRef(null);

  useEffect(() => {
    if (!imgRef.current) return;

    // gsap.fromTo(
    //   imgRef.current,
    //   {
    //     scale: 0.5,        // chhota
    //     rotate: -50,       // thoda rotate
    //     opacity: 0,
    //     transformOrigin: "center center", // ⭐ center se grow hoga
    //   },
    //   {
    //     scale: 1,          // normal size
    //     rotate: 0,         // seedha
    //     opacity: 1,
    //     duration: 2,
    //     ease: "power3.out",
    //     scrollTrigger: {
    //       trigger: imgRef.current,
    //       start: "top 50%",
    //       toggleActions: "play none none reverse",
    //     },
    //   }
    // );

    gsap.fromTo(
  imgRef.current,
  {
    scale: 0.5,
    rotation: 360,   // 🔥 full gol spin
    opacity: 0,
    transformOrigin: "center center",
  },
  {
    scale: 1,
    rotation: 0,     // end me seedha fix
    opacity: 1,
    duration: 2.0,
    ease: "power3.out",
    scrollTrigger: {
      trigger: imgRef.current,
      start: "top 60%",
      toggleActions: "play none none reverse",
    },
  }
);
  }, []);

  return (
    <div className="space-y-5">

      {/* IMAGE */}
      <div className={`rounded-lg overflow-hidden bg-[#1F2025] ${imageHeight}`}>
        <img
          ref={imgRef}   // ⭐ yaha connect hua animation
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* STATS */}
      <div className="flex gap-4">
        <div className="bg-[#2A2A2E] px-4 md:px-6 py-4 rounded-lg flex-1">
          <p className="text-sm md:text-base font-semibold">+50%</p>
          <p className="text-xs text-gray-400">Brand Reach</p>
        </div>

        <div className="bg-[#2A2A2E] px-4 md:px-6 py-4 rounded-lg flex-1">
          <p className="text-sm md:text-base font-semibold">37%</p>
          <p className="text-xs text-gray-400">Revenue reach</p>
        </div>
      </div>

      {/* TITLE */}
      <h3 className="text-base md:text-lg font-medium text-[#DFDFDF]">
        {title}
      </h3>

      {/* TAGS */}
      <div className="flex flex-wrap gap-2">
        {["Brand audit","Competitor analysis","Ideation stage","Strategy"].map((tag) => (
          <span
            key={tag}
            className="text-xs px-3 py-1 rounded-full border border-gray-600 text-gray-300"
          >
            {tag}
          </span>
        ))}
      </div>

    </div>
  );
}