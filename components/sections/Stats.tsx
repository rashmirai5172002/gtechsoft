// "use client";

// import { useRef, useEffect } from "react";
// import gsap from "gsap";

// /* ================= TYPES ================= */
// type TiltCardProps = {
//   logo: string;
// };

// /* ================= TILT + FLOAT CARD ================= */
// const TiltCard = ({ logo }: TiltCardProps) => {
//   const cardRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     if (!cardRef.current) return;

//     gsap.to(cardRef.current, {
//       y: -10,
//       duration: 1.5,
//       repeat: -1,
//       yoyo: true,
//       ease: "power1.inOut",
//     });
//   }, []);

//   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
//     const card = cardRef.current;
//     if (!card) return;

//     const rect = card.getBoundingClientRect();

//     const x = e.clientX - rect.left;
//     const y = e.clientY - rect.top;

//     const centerX = rect.width / 2;
//     const centerY = rect.height / 2;

//     const rotateX = -(y - centerY) / 10;
//     const rotateY = (x - centerX) / 10;

//     gsap.to(card, {
//       rotateX,
//       rotateY,
//       transformPerspective: 800,
//       duration: 0.3,
//       ease: "power2.out",
//     });
//   };

//   const handleMouseLeave = () => {
//     if (!cardRef.current) return;

//     gsap.to(cardRef.current, {
//       rotateX: 0,
//       rotateY: 0,
//       duration: 0.5,
//     });
//   };

//   return (
//     <div
//       ref={cardRef}
//       onMouseMove={handleMouseMove}
//       onMouseLeave={handleMouseLeave}
//       className="bg-[#FBFAF9] rounded-[14px] md:rounded-[18px] 
//                  w-[130px] md:w-[160px] 
//                  h-[65px] md:h-[80px] 
//                  flex items-center justify-center 
//                  p-4 md:p-6 shadow-sm"
//       style={{ transformStyle: "preserve-3d" }}
//     >
//       <img
//         src={logo}
//         alt="logo"
//         className="max-h-[25px] md:max-h-[35px] object-contain"
//       />
//     </div>
//   );
// };

// /* ================= MAIN ================= */
// export default function Stats() {
//   const logos = [
//     "/logo-img.svg",
//     "/logo-img1.svg",
//     "/logo-img2.svg",
//     "/logo-img3.svg",
//     "/logo-img4.svg",
//     "/logo-img5.svg",
//   ];

//   const row1Ref = useRef<HTMLDivElement | null>(null);
//   const row2Ref = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     if (!row1Ref.current || !row2Ref.current) return;

//     gsap.to(row1Ref.current, {
//       x: "-50%",
//       duration: 20,
//       ease: "linear",
//       repeat: -1,
//     });

//     gsap.fromTo(
//       row2Ref.current,
//       { x: "-50%" },
//       {
//         x: "0%",
//         duration: 20,
//         ease: "linear",
//         repeat: -1,
//       }
//     );
//   }, []);

//   return (
//     <section className="py-10 md:py-16 bg-white overflow-hidden mb-10 md:mb-20">

//       {/* TEXT */}
//       <div className="max-w-5xl space-y-4 md:space-y-6 text-center mx-auto mb-10 md:mb-18 px-4">

//         <h1 className="text-black text-2xl md:text-5xl leading-tight">
//           The Smartest Teams Already <br />Made the Move
//         </h1>

//         <h3 className="text-xs md:text-lg text-[#71717A]">
//           Hundreds of teams are already scaling with us. Are you next?
//         </h3>

//       </div>

//       {/* ===== ROW 1 ===== */}
//       <div className="overflow-hidden mb-5 md:mb-7 pt-5 md:pt-10">
//         <div
//           ref={row1Ref}
//           className="flex gap-3 md:gap-5 w-max"
//         >
//           {[...logos, ...logos].map((logo, i) => (
//             <TiltCard key={i} logo={logo} />
//           ))}
//         </div>
//       </div>

//       {/* ===== ROW 2 ===== */}
//       <div className="overflow-hidden pt-3 md:pt-5">
//         <div
//           ref={row2Ref}
//           className="flex gap-3 md:gap-5 w-max"
//         >
//           {[...logos, ...logos].map((logo, i) => (
//             <TiltCard key={i} logo={logo} />
//           ))}
//         </div>
//       </div>

//     </section>
//   );
// }



"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";

/* ================= TYPES ================= */
type TiltCardProps = {
  logo: string;
};

/* ================= TILT + FLOAT CARD ================= */
const TiltCard = ({ logo }: TiltCardProps) => {
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!cardRef.current) return;

    gsap.to(cardRef.current, {
      y: -10,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -(y - centerY) / 10;
    const rotateY = (x - centerX) / 10;

    gsap.to(card, {
      rotateX,
      rotateY,
      transformPerspective: 800,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;

    gsap.to(cardRef.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.5,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="bg-[#FBFAF9] rounded-[14px] md:rounded-[18px] 
                 w-[130px] md:w-[160px] 
                 h-[65px] md:h-[80px] 
                 flex items-center justify-center 
                 p-4 md:p-6 shadow-sm"
      style={{ transformStyle: "preserve-3d" }}
    >
      <img
        src={logo}
        alt="logo"
        className="max-h-[25px] md:max-h-[35px] object-contain"
      />
    </div>
  );
};

/* ================= MAIN ================= */
export default function Stats() {
  const logos = [
    "/logo-img.svg",
    "/logo-img1.svg",
    "/logo-img2.svg",
    "/logo-img3.svg",
    "/logo-img4.svg",
    "/logo-img5.svg",
  ];

  const row1Ref = useRef<HTMLDivElement | null>(null);
  const row2Ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!row1Ref.current || !row2Ref.current) return;

    gsap.to(row1Ref.current, {
      x: "-50%",
      duration: 20,
      ease: "linear",
      repeat: -1,
    });

    gsap.fromTo(
      row2Ref.current,
      { x: "-50%" },
      {
        x: "0%",
        duration: 20,
        ease: "linear",
        repeat: -1,
      }
    );
  }, []);

  return (
    <section className="py-10 md:py-16 bg-white overflow-hidden mb-10 md:mb-20">

      {/* TEXT */}
      <div className="max-w-5xl space-y-4 md:space-y-6 text-center mx-auto mb-10 md:mb-18 px-4">

        <h1 className="text-black text-2xl md:text-5xl leading-tight">
          The Smartest Teams Already <br />Made the Move
        </h1>

        <h3 className="text-xs md:text-lg text-[#71717A]">
          Hundreds of teams are already scaling with us. Are you next?
        </h3>

      </div>

      {/* ===== ROW 1 ===== */}
      <div className="overflow-hidden mb-5 md:mb-7 pt-5 md:pt-10">
        <div
          ref={row1Ref}
          className="flex gap-3 md:gap-5 w-max"
        >
          {[...logos, ...logos].map((logo, i) => (
            <TiltCard key={i} logo={logo} />
          ))}
        </div>
      </div>

      {/* ===== ROW 2 ===== */}
      <div className="overflow-hidden pt-3 md:pt-5">
        <div
          ref={row2Ref}
          className="flex gap-3 md:gap-5 w-max"
        >
          {[...logos, ...logos].map((logo, i) => (
            <TiltCard key={i} logo={logo} />
          ))}
        </div>
      </div>

    </section>
  );
}