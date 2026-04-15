// import { ArrowUpRight } from "lucide-react";

// export default function StickyCard() {
//   return (
//     <div className="fixed right-8 bottom-6 z-50">
//       <div className="w-[250px] bg-white rounded-2xl shadow-2xl flex items-center p-3 gap-4">

//         {/* IMAGE */}
//         <img
//           src="/img-stk.svg"
//           alt="Clarissa"
//           className="w-[70px] h-[100px] object-cover rounded-xl"
//         />

//         {/* RIGHT CONTENT */}
//         <div className="flex flex-col justify-between flex-1 h-full">

//           {/* TEXT */}
//           <div>
//             <p className="text-sm font-semibold leading-tight">
//               Talk with Clarissa
//             </p>
//             <p className="text-xs text-gray-500 tracking-wide">
//               SALES EXPERT
//             </p>
//           </div>

//           {/* BUTTONS */}
//           <div className="flex items-center gap-2 mt-3">

//             {/* MAIN BUTTON */}
//             <button className="flex-1 bg-[#2b2b2b] text-white text-xs py-2.5 rounded-full hover:bg-black transition">
//               Book 15 min Call
//             </button>

//             {/* ICON BUTTON */}
//             <button className="bg-[#F79A01] h-10 w-10 rounded-full flex items-center justify-center hover:scale-105 transition">
//               <ArrowUpRight size={18} className="text-black" />
//             </button>

//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }



// import { ArrowUpRight } from "lucide-react";

// export default function StickyCard() {
//   return (
//     <div className="fixed right-8 bottom-6 z-50">

//       {/* CARD */}
//       <div className="w-[250px] h-[95px] bg-white rounded-2xl shadow-xl flex overflow-hidden">

//         {/* IMAGE (FULL HEIGHT) */}
//         <img
//           src="/img-stk.svg"
//           alt="Clarissa"
//           className="w-[80px] h-full object-cover"
//         />

//         {/* RIGHT CONTENT */}
//         <div className="flex flex-col justify-between flex-1 p-3">

//           {/* TEXT */}
//           <div>
//             <p className="text-sm font-semibold leading-tight">
//               Talk with Clarissa
//             </p>
//             <p className="text-[11px] text-gray-500 tracking-wide">
//               SALES EXPERT
//             </p>
//           </div>

//           {/* BUTTONS */}
//           <div className="flex items-center gap-2">

//             {/* MAIN BUTTON */}
//             <button className="flex-1 bg-[#2b2b2b] text-white text-[11px] py-2 rounded-full">
//               Book 15 min Call
//             </button>

//             {/* ICON BUTTON */}
//             <button className="bg-[#F79A01] h-9 w-9 rounded-full flex items-center justify-center">
//               <ArrowUpRight size={16} className="text-black" />
//             </button>

//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }



import { ArrowUpRight } from "lucide-react";

export default function StickyCard() {
  return (
    <div className="fixed right-8 bottom-6 z-50">

      {/* CARD */}
      <div className="w-[290px] h-[115px] bg-white rounded-2xl shadow-xl flex p-[1px]">

        <div className="w-[80px] h-full bg-white rounded-2xl p-[2px] pr-0 flex items-start">
          <img
            src="/img-stk.svg"
            alt="Clarissa"
            className="w-full object-contain rounded-xl"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col justify-between flex-1 ">

          {/* TEXT */}
          <div className="py-2 pl-2">
            <p className="text-sm font-semibold leading-tight">
              Talk with Clarissa
            </p>
            <p className="text-[11px] text-gray-500 tracking-wide">
              SALES EXPERT
            </p>
          </div>

          {/* BUTTONS */}
          <div className="flex items-center gap-0 py-3 px-2">

            <button className="flex-1 bg-[#2b2b2b] text-white text-[13px] py-3 rounded-full">
              Book 15 min Call
            </button>

            <button className="bg-[#F79A01] h-11 w-11 rounded-full flex items-center justify-center">
              <ArrowUpRight size={16} className="text-black" />
            </button>

          </div>

        </div>
      </div>
    </div>
  );
}