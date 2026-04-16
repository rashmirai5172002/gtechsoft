// import Container from "../ui/Container";

// const stats = [
//   {
//     title: "65%",
//     desc: "65% of businesses struggle with outdated systems",
//   },
//   {
//     title: "200+",
//     desc: "200+ projects delivered across web & mobile",
//   },
//   {
//     title: "80%",
//     desc: "80% improvement in user engagement after redesign",
//   },
// ];

// export default function About() {
//   return (
//     <section className="py-10 md:py-15 bg-white">
//       <Container>

//         <div className="bg-[#FBFAF9] rounded-[20px] md:rounded-[30px] px-5 md:px-12 py-12 md:py-20">

//           {/* SMALL TEXT */}
//           <p className="font-mono text-xs md:text-sm leading-none uppercase text-[#232328] mb-10 md:mb-20">
//             SMART BUSINESSES ARE MOVING TO DIGITAL-FIRST SOLUTIONS.
//           </p>

//           {/* HEADING */}
//           <h2 className="text-[28px] md:text-[45px] mb-6 md:mb-12">
//             We Build{" "}
//             <span className="text-[#FF9C00] font-semibold leading-tight">
//               What You Imagine.
//             </span>
//           </h2>

//           {/* DESCRIPTION */}
//           <p className="text-[22px] md:text-[45px] text-black leading-tight mb-10 md:mb-0">
//             We design and build scalable,<br />
//             high-converting digital solutions that<br />
//             drive real business growth.
//           </p>

//           {/* STATS */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8 mt-12 md:mt-30">

//             {stats.map((item, i) => (
//               <div
//                 key={i}
//                 className="bg-white rounded-2xl p-6 md:p-10 flex flex-col justify-between h-full"
//               >

//                 <p className="text-gray-500 text-xs md:text-sm mb-6 md:mb-16">
//                   {item.desc}
//                 </p>

//                 <h3 className="text-4xl md:text-6xl font-medium leading-none tracking-tight text-[#232328]">
//                   {item.title}
//                 </h3>

//               </div>
//             ))}

//           </div>

//         </div>
//       </Container>
//     </section>
//   );
// }




import Container from "../ui/Container";

const stats = [
  {
    title: "65%",
    desc: "65% of businesses struggle with outdated systems",
  },
  {
    title: "200+",
    desc: "200+ projects delivered across web & mobile",
  },
  {
    title: "80%",
    desc: "80% improvement in user engagement after redesign",
  },
];

export default function About() {
  return (
    <section className="py-10 md:py-15 bg-white">
      <Container>

        <div className="bg-[#FBFAF9] rounded-[20px] md:rounded-[30px] px-5 md:px-12 py-12 md:py-20">

          {/* SMALL TEXT */}
          <p className="font-mono text-xs md:text-sm leading-none uppercase text-[#232328] mb-10 md:mb-20">
            SMART BUSINESSES ARE MOVING TO DIGITAL-FIRST SOLUTIONS.
          </p>

          {/* HEADING */}
          <h2 className="text-[28px] md:text-[45px] mb-6 md:mb-12 dark:text-black">
            We Build{" "}
            <span className="text-[#FF9C00] font-semibold leading-tight">
              What You Imagine.
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p className="text-[22px] md:text-[45px] text-black leading-tight mb-10 md:mb-0">
            We design and build scalable,<br />
            high-converting digital solutions that<br />
            drive real business growth.
          </p>

          {/* STATS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8 mt-12 md:mt-30">

            {stats.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 md:p-10 flex flex-col justify-between h-full"
              >

                <p className="text-gray-500 text-xs md:text-sm mb-6 md:mb-16">
                  {item.desc}
                </p>

                <h3 className="text-4xl md:text-6xl font-medium leading-none tracking-tight text-[#232328]">
                  {item.title}
                </h3>

              </div>
            ))}

          </div>

        </div>
      </Container>
    </section>
  );
}