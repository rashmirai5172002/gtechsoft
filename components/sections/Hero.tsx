import Container from "../ui/Container";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] bg-white">

      {/* IMAGE WRAPPER */}
      <div className="relative h-[100vh] md:h-[105vh] mx-3 md:mx-5 overflow-hidden rounded-2xl">

        {/* BACKGROUND IMAGE */}
        <img
          src="/bg-img.svg"
          alt="hero"
          className="absolute inset-0 w-full h-full object-cover object-right"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-transparent" />

        {/* MAIN CONTENT */}
        <div className="relative z-10 h-full grid md:grid-cols-2">

          {/* LEFT CONTAINER */}
          <div className="flex items-end">
            <Container>
              <div className="text-white max-w-3xl px-4 md:px-0 md:ml-12 pb-10 md:pb-16">
                <h1 className="text-[28px] md:text-[42px] font-medium leading-tight tracking-wider">
                  Future-ready <br />
                  technology designed to <br />
                  elevate your business.
                </h1>
              </div>
            </Container>
          </div>

          {/* RIGHT CONTAINER */}
          <div className="flex items-end">
            <Container>
              <div className="text-white max-w-md px-4 md:px-0 md:ml-30 pb-10 md:pb-16 tracking-wider">

                <div className="flex flex-wrap gap-2 md:gap-3 mb-2">
                  {["Inspire", "Innovate", "Empower"].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 border border-white/40 rounded-full text-xs md:text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h2 className="text-[20px] md:text-[27px] font-medium leading-snug">
                  Transform Challenges into <br />
                  Opportunities with Intelligent IT <br />
                  Solutions.
                </h2>

                <button className="flex items-center gap-3 mt-3 text-xs md:text-sm text-white/80 hover:text-white transition">
                  Grow Business with us
                  <ArrowRight size={20} />
                </button>

              </div>
            </Container>
          </div>

        </div>
      </div>
    </section>
  );
}