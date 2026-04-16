// "use client";
// import { ArrowUpRight } from "lucide-react";
// import Container from "../ui/Container";

// export default function Contact() {
//   return (
//     <section className="bg-white py-12 md:py-16 lg:py-20 px-4 mx-3 md:mx-13 ">
//       <Container>

//         <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

//           {/* ================= LEFT SIDE ================= */}
//           <div className="text-black space-y-5 text-center lg:text-left">

//             <p className="text-xs md:text-sm tracking-widest font-bold">
//               LET’S TALK!
//             </p>

//             <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
//               How can we help you?
//             </h2>

//             <p className="text-gray-400 max-w-md mx-auto lg:mx-0 text-sm md:text-base">
//               Whether you're planning a project or starting fresh, we're here to help you align strategy, design, and performance.
//               Get in touch for a free intro call.
//             </p>

//             <p className="font-bold text-sm md:text-base">
//               No pressure, just a focused conversation.
//             </p>

//             {/* BUTTON */}
//             <div className="flex justify-center lg:justify-start">
//               <button className="mt-4 w-full sm:w-[320px] md:w-[380px] lg:w-[441px] h-[60px] md:h-[80px] lg:h-[100px] bg-[#FF9C00] text-black rounded-full flex items-center justify-center text-sm md:text-lg font-medium hover:bg-orange-400 transition">
//                 Let’s Schedule a Call
//               </button>
//             </div>

//           </div>

//           {/* ================= RIGHT FORM ================= */}
//           <div className="bg-[#F7F7F7] rounded-[20px] p-5 sm:p-6 md:p-8 lg:p-10">

//             <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-black mb-2">
//               We’re here to help
//             </h3>

//             <p className="text-gray-500 text-sm md:text-base mb-6">
//               Reach out to us with any questions or support needs.
//             </p>

//             <hr className="mb-6 border-gray-200" />

//             {/* FORM */}
//             <form className="space-y-4">

//               {/* ROW 1 */}
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 <input
//                   type="text"
//                   placeholder="Your Name"
//                   className="bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none w-full"
//                 />
//                 <input
//                   type="text"
//                   placeholder="Your Phone No."
//                   className="bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none w-full"
//                 />
//               </div>

//               {/* ROW 2 */}
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 <input
//                   type="text"
//                   placeholder="Company Name"
//                   className="bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none w-full"
//                 />
//                 <input
//                   type="email"
//                   placeholder="Your Email"
//                   className="bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none w-full"
//                 />
//               </div>

//               {/* TEXTAREA */}
//               <textarea
//                 placeholder="Tell us your project"
//                 rows={4}
//                 className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none"
//               ></textarea>

//               {/* BUTTONS */}
//               <div className="flex items-center gap-0 pt-2">

//                 {/* MAIN BUTTON */}
//                 <button
//                   type="submit"
//                   className="bg-black text-white px-5 md:px-6 py-2.5 md:py-3 rounded-full text-sm whitespace-nowrap"
//                 >
//                   Send Message
//                 </button>

//                 {/* ARROW BUTTON */}
//                 <button
//                   type="button"
//                   className="bg-[#F79A01] h-10 w-10 md:h-11 md:w-11 rounded-full flex items-center justify-center"
//                 >
//                   <ArrowUpRight size={16} className="text-black" />
//                 </button>

//               </div>

//             </form>

//           </div>

//         </div>

//       </Container>
//     </section>
//   );
// }





"use client";
import { ArrowUpRight } from "lucide-react";
import Container from "../ui/Container";

export default function Contact() {
  return (
    // <section className="bg-white py-12 md:py-16 lg:py-20 px-4 mx-3 md:mx-13">
    <section className="bg-white py-12 md:py-16 lg:py-20 px-4">
      <Container>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center -mx-2 sm:mx-0">
        {/* <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center px-2 sm:px- lg:px-0"> */}

          {/* ================= LEFT SIDE ================= */}
          <div className="text-black space-y-5 text-center lg:text-left ">

            <p className="text-xs md:text-sm tracking-widest font-bold">
              LET’S TALK!
            </p>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
              How can we help you?
            </h2>

            <p className="text-gray-400 max-w-md mx-auto lg:mx-0 text-sm md:text-base">
              Whether you're planning a project or starting fresh, we're here to help you align strategy, design, and performance.
              Get in touch for a free intro call.
            </p>

            <p className="font-bold text-sm md:text-base">
              No pressure, just a focused conversation.
            </p>

            {/* BUTTON */}
            <div className="flex justify-center lg:justify-start">
              <button className="mt-4 w-full sm:w-[320px] md:w-[380px] lg:w-[441px] h-[60px] md:h-[80px] lg:h-[100px] bg-[#FF9C00] text-black rounded-full flex items-center justify-center text-sm md:text-lg font-medium hover:bg-orange-400 transition">
                Let’s Schedule a Call
              </button>
            </div>

          </div>

          {/* ================= RIGHT FORM ================= */}
          <div className="bg-[#F7F7F7] rounded-[20px] p-5 sm:p-6 md:p-8 lg:p-10">

            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-black mb-2">
              We’re here to help
            </h3>

            <p className="text-gray-500 text-sm md:text-base mb-6">
              Reach out to us with any questions or support needs.
            </p>

            <hr className="mb-6 border-gray-200" />

            {/* FORM */}
            <form className="space-y-4 dark:text-black">

              {/* ROW 1 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none w-full"
                />
                <input
                  type="text"
                  placeholder="Your Phone No."
                  className="bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none w-full"
                />
              </div>

              {/* ROW 2 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Company Name"
                  className="bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none w-full"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none w-full"
                />
              </div>

              {/* TEXTAREA */}
              <textarea
                placeholder="Tell us your project"
                rows={4}
                className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none"
              ></textarea>

              {/* BUTTONS */}
              <div className="flex items-center gap-0 pt-2">

                {/* MAIN BUTTON */}
                <button
                  type="submit"
                  className="bg-black text-white px-5 md:px-6 py-2.5 md:py-3 rounded-full text-sm whitespace-nowrap"
                >
                  Send Message
                </button>

                {/* ARROW BUTTON */}
                <button
                  type="button"
                  className="bg-[#F79A01] h-10 w-10 md:h-11 md:w-11 rounded-full flex items-center justify-center"
                >
                  <ArrowUpRight size={16} className="text-black" />
                </button>

              </div>

            </form>

          </div>

        </div>

      </Container>
    </section>
  );
}