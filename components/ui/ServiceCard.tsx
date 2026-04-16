// "use client";

// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// type Props = {
//   number: string;
//   title: string;
//   image: string;
// };

// export default function ServiceCard({
//   number,
//   title,
//   image,
// }: Props) {

//   const imgRef = useRef(null);

//   useEffect(() => {
//     if (!imgRef.current) return;

//     gsap.fromTo(
//       imgRef.current,
//       {
//         clipPath: "inset(0 100% 0 0 round 100px)", 
//       },
//       {
//         clipPath: "inset(0 0% 0 0 round 16px)",   
//         duration: 1.5,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: imgRef.current,  
//           start: "top 50%",         
//           toggleActions: "play none none reverse",
//         },
//       }
//     );
//   }, []);

//   return (
//     <div className="bg-white rounded-[24px] p-10 grid md:grid-cols-2 gap-10 items-center max-w-3xl mx-auto mb-5">

//       {/* LEFT CONTENT */}
//       <div>
//         <p className="text-sm text-gray-500 mb-4">/ {number}</p>

//         <h3 className="text-2xl font-semibold mb-3">
//           {title}
//         </h3>

//         <p className="text-gray-500 mb-15 max-w-md">
//           Build a powerful, memorable brand that connects globally.
//         </p>

//         <div className="space-y-3 font-mono font-normal text-sm leading-none tracking-normal uppercase text-[#71717A]">
//           <p>BRAND STRATEGY & POSITIONING</p>
//           <hr />
//           <p>VISUAL IDENTITY DESIGN</p>
//           <hr />
//           <p>BRAND EXPERIENCE DESIGN</p>
//         </div>
//       </div>

//       {/* IMAGE */}
//       <div className="rounded-xl overflow-hidden">
//         <img
//           ref={imgRef}
//           src={image}
//           alt={title}
//           className="w-full h-[280px] object-cover rounded-xl"
//         />
//       </div>

//     </div>
//   );
// }




// type Props = {
//   number: string;
//   title: string;
//   image: string;
// };

// export default function ServiceCard({
//   number,
//   title,
//   image,
// }: Props) {
//   return (
//     // <div className="bg-white rounded-[24px] p-10 grid md:grid-cols-2 gap-10 items-center">
//     <div className="bg-white rounded-[24px] p-10 grid md:grid-cols-2 gap-10 items-center max-w-3xl mx-auto mb-5">
//       {/* <div className="bg-white rounded-[24px] p-10 grid md:grid-cols-2 gap-10 items-center max-w-3xl">  */}

//       {/* LEFT CONTENT */}
//       <div>
//         <p className="text-sm text-gray-500 mb-4">/ {number}</p>

//         <h3 className="text-2xl font-semibold mb-3">
//           {title}
//         </h3>

//         <p className="text-gray-500 mb-15 max-w-md">
//           Build a powerful, memorable brand that connects globally.
//         </p>

//         <div className="space-y-3 font-mono font-normal text-sm leading-none tracking-normal uppercase text-[#71717A]">
//           <p>BRAND STRATEGY & POSITIONING</p>
//           <hr />
//           <p>VISUAL IDENTITY DESIGN</p>
//           <hr />
//           <p>BRAND EXPERIENCE DESIGN</p>
//         </div>
//       </div>

//       {/* IMAGE */}
//       <div className="rounded-xl overflow-hidden">
//         <img
//           src={image}
//           alt={title}
//           className="w-full h-[280px] object-cover rounded-xl"
//         />
//       </div>
//     </div>
//   );
// } 




type Props = {
  number: string;
  title: string;
  image: string;
};

export default function ServiceCard({
  number,
  title,
  image,
}: Props) {
  return (
    // <div className="bg-white rounded-[24px] p-10 grid md:grid-cols-2 gap-10 items-center">
    <div className="bg-white rounded-[24px]  grid md:grid-cols-2 gap-10 items-center max-w-3xl mx-auto mb-5">
      {/* <div className="bg-white rounded-[24px] p-10 grid md:grid-cols-2 gap-10 items-center max-w-3xl">  */}

      {/* LEFT CONTENT */}
      <div className="md:p-7 px-4 pt-4 pb-1">
        <p className="text-sm text-gray-500 mb-4">/ {number}</p>

        <h3 className="text-2xl font-semibold mb-3 dark:text-black">
          {title}
        </h3>

        <p className="text-gray-500 mb-8 md:mb-17 max-w-md">
          Build a powerful, memorable brand that connects globally.
        </p>

        <div className="space-y-3 font-mono font-normal text-sm leading-none tracking-normal uppercase text-[#71717A] ">
          <p>BRAND STRATEGY & POSITIONING</p>
          <hr />
          <p>VISUAL IDENTITY DESIGN</p>
          <hr />
          <p>BRAND EXPERIENCE DESIGN</p>
        </div>
      </div>

      {/* IMAGE */}
      <div className="rounded-xl overflow-hidden p-3">
        <img
          src={image}
          alt={title}
          className="w-full h-[280px] object-cover rounded-xl"
        />
      </div>
    </div>
  );
} 


