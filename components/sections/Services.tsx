// import Container from "../ui/Container";
// import ServiceCard from "../ui/ServiceCard";

// const services = [
//   {
//     number: "01",
//     title: "Branding Identity",
//     image: "/services/branding.svg",
//   },
//   {
//     number: "02",
//     title: "UI/UX Design",
//     image: "/services/uiux.svg",
//   },
//   {
//     number: "03",
//     title: "Marketing",
//     image: "/services/marketing.svg",
//   },
//   {
//     number: "04",
//     title: "Website Development",
//     image: "/services/web.svg",
//   },
//   {
//     number: "05",
//     title: "Build Product MVP",
//     image: "/services/mvp.svg",
//   },
// ];

// export default function Services() {
//   return (
//     <section className="pt-12 md:pt-28 bg-[#FBFAF9] pb-10">

//       <Container>
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-16 px-4 md:px-0 lg:ml-15 lg:mr-6">

//           {/* LEFT SIDE TEXT */}
//           <div className="lg:sticky lg:top-32 h-fit">

//             <p className="font-mono font-semibold text-xs md:text-sm leading-none text-black mb-6 md:mb-10">
//               OUR SERVICES
//             </p>

//             <h2 className="text-2xl md:text-4xl font-medium leading-tight mb-4 md:mb-6">
//               Streamlining Operations with <br className="hidden md:block" />
//               Smart Technology
//             </h2>

//             <p className="text-gray-500 text-sm md:text-base leading-relaxed">
//               We help businesses improve efficiency, strengthen
//               <br className="hidden md:block" />
//               processes, and build connected digital
//               <br className="hidden md:block" />
//               ecosystems.
//             </p>

//           </div>

//           {/* RIGHT CARDS */}
//           <div className="lg:col-span-2 space-y-6 md:space-y-12">

//             {services.map((service) => (
//               <ServiceCard key={service.number} {...service} />
//             ))}

//           </div>

//         </div>
//       </Container>
//     </section>
//   );
// }




import Container from "../ui/Container";
import ServiceCard from "../ui/ServiceCard";

const services = [
  {
    number: "01",
    title: "Branding Identity",
    image: "/services/branding.svg",
  },
  {
    number: "02",
    title: "UI/UX Design",
    image: "/services/uiux.svg",
  },
  {
    number: "03",
    title: "Marketing",
    image: "/services/marketing.svg",
  },
  {
    number: "04",
    title: "Website Development",
    image: "/services/web.svg",
  },
  {
    number: "05",
    title: "Build Product MVP",
    image: "/services/mvp.svg",
  },
];

export default function Services() {
  return (
    <section className="pt-12 md:pt-28 bg-[#FBFAF9] pb-10">

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-16 px-0 md:px-0 lg:ml-15 lg:mr-6">

          {/* LEFT SIDE TEXT */}
          <div className="lg:sticky lg:top-32 h-fit">

            <p className="font-mono font-semibold text-xs md:text-sm leading-none text-black mb-6 md:mb-10">
              OUR SERVICES
            </p>

            <h2 className="text-2xl md:text-4xl font-medium leading-tight mb-4 md:mb-6 dark:text-black">
              Streamlining Operations with <br className="hidden md:block" />
              Smart Technology
            </h2>

            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
              We help businesses improve efficiency, strengthen
              <br className="hidden md:block" />
              processes, and build connected digital
              <br className="hidden md:block" />
              ecosystems.
            </p>

          </div>

          {/* RIGHT CARDS */}
          <div className="lg:col-span-2 space-y-6 md:space-y-12">

            {services.map((service) => (
              <ServiceCard key={service.number} {...service} />
            ))}

          </div>

        </div>
      </Container>
    </section>
  );
}