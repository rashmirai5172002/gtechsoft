import Container from "../ui/Container";
import ProjectCard from "../ui/ProjectCard";
import Button from "../ui/Button";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    image: "/projects/p1.svg",
    title: "UN Youth fashion shop branding",
  },
  {
    image: "/projects/p2.svg",
    title: "UN Youth fashion shop branding",
  },
  {
    image: "/projects/p3.svg",
    title: "UN Youth fashion shop branding",
  },
  {
    image: "/projects/p4.svg",
    title: "UN Youth fashion shop branding",
  },
  {
    image: "/projects/p5.svg",
    title: "UN Youth fashion shop branding",
  },
];

export default function Projects() {
  return (
    <section className="py-20 md:py-28 bg-[#17181C] text-white">
      <Container>

        {/* HEADING */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-28 px-4">
          <h2 className="text-3xl md:text-5xl font-semibold leading-tight mb-6 text-[#DFDFDF]">
            Projects we’ve shaped,
            <br />
            through insight, and impact
          </h2>

          <p className="text-[#71717A] text-sm md:text-base">
            Our clients include forward-thinking startups and global leaders — all redefining how modern finance teams work.
          </p>
        </div>

        {/* ================= DESKTOP (UNCHANGED) ================= */}
        <div className="hidden lg:block">

          {/* ROW 1 */}
          <div className="flex justify-between items-start gap-12 mb-24 mx-14">
            <div className="w-[504px]">
              <ProjectCard {...projects[0]} imageHeight="h-[504px]" />
            </div>

            <div className="w-[664px] mt-40">
              <ProjectCard {...projects[1]} imageHeight="h-[399px]" />
            </div>
          </div>

          {/* ROW 2 */}
          <div className="flex justify-center mb-24">
            <div className="w-[939px]">
              <ProjectCard {...projects[2]} imageHeight="h-[513px]" />
            </div>
          </div>

          {/* ROW 3 */}
          <div className="flex justify-between items-start gap-12 mx-14">
            <div className="w-[504px]">
              <ProjectCard {...projects[3]} imageHeight="h-[504px]" />
            </div>

            <div className="w-[664px] mt-40">
              <ProjectCard {...projects[4]} imageHeight="h-[399px]" />
            </div>
          </div>

        </div>

        {/* ================= TABLET ================= */}
        <div className="hidden md:grid lg:hidden grid-cols-2 gap-8 px-6">

          <ProjectCard {...projects[0]} imageHeight="h-[400px]" />
          <ProjectCard {...projects[1]} imageHeight="h-[300px]" />

          <div className="col-span-2">
            <ProjectCard {...projects[2]} imageHeight="h-[450px]" />
          </div>

          <ProjectCard {...projects[3]} imageHeight="h-[400px]" />
          <ProjectCard {...projects[4]} imageHeight="h-[300px]" />

        </div>

        {/* ================= MOBILE ================= */}
        <div className="grid md:hidden grid-cols-1 gap-6 px-4">

          <ProjectCard {...projects[0]} imageHeight="h-[300px]" />
          <ProjectCard {...projects[1]} imageHeight="h-[250px]" />
          <ProjectCard {...projects[2]} imageHeight="h-[300px]" />
          <ProjectCard {...projects[3]} imageHeight="h-[300px]" />
          <ProjectCard {...projects[4]} imageHeight="h-[250px]" />

        </div>

        {/* BUTTON */}
        {/* <div className="flex justify-center mt-16 md:mt-20">
          <button className="flex items-center gap-3 bg-[#23242A] px-6 py-3 rounded-full text-sm">
            See all Projects
            <span className="bg-yellow-400 text-black w-6 h-6 flex items-center justify-center rounded-full">
              →
            </span>
          </button>
        </div> */}
        {/* import { ArrowUpRight } from "lucide-react"; */}

<div className="flex justify-center mt-16 md:mt-20">
  
  <div className="flex items-center gap-2 bg-[#23242A] p-1 rounded-full">

    {/* TEXT BUTTON */}
    <button className="px-5 py-2 text-white text-sm rounded-full">
      See all Projects
    </button>

    {/* ARROW BUTTON */}
    

  </div>
  <button className="bg-[#F79A01] h-11 w-11 rounded-full flex items-center justify-center">
      <ArrowUpRight size={16} className="text-black" />
    </button>

</div>

      </Container>
    </section>
  );
}