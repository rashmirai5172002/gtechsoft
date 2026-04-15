import Container from "../ui/Container";

const testimonials = [
  {
    type: "text",
    bg: "bg-blue-100",
    textColor: "text-black",
    name: "John Carter",
    role: "CEO, Fintech",
    text: "Right from the start, it was clear that Markcon understood our challenges and aspirations. Their fresh approach to our strategy, visual identity, merchandise, and website has created a cohesive brand presence rooted in our core values.",
  },
  {
    type: "image",
    image: "/testimonials/t1.svg",
  },
  {
    type: "text",
    bg: "bg-green-100",
    textColor: "text-black",
    name: "Sarah Williams",
    role: "Marketing Head",
    text: "Right from the start, it was clear that Markcon understood our challenges and aspirations. Their fresh approach to our strategy, visual identity, merchandise, and website has created a cohesive brand presence rooted in our core values.",
  },
  {
    type: "image",
    image: "/testimonials/t2.svg",
  },
  {
    type: "text",
    bg: "bg-purple-100",
    textColor: "text-black",
    name: "Alex Morgan",
    role: "Product Manager",
    text: "Right from the start, it was clear that Markcon understood our challenges and aspirations. Their fresh approach to our strategy, visual identity, merchandise, and website has created a cohesive brand presence rooted in our core values.",
  },
  {
    type: "image",
    image: "/testimonials/t1.svg",
  },
  {
    type: "text",
    bg: "bg-yellow-100",
    textColor: "text-black",
    name: "Emma Stone",
    role: "Founder",
    text: "Right from the start, it was clear that Markcon understood our challenges and aspirations. Their fresh approach to our strategy, visual identity, merchandise, and website has created a cohesive brand presence rooted in our core values.",
  },
  {
    type: "image",
    image: "/testimonials/t2.svg",
  },
];

export default function Testimonials() {
  return (
    <section className="py-34 bg-white overflow-hidden">
      <Container>
        <div className="text-center mb-25">
          <h2
            className="text-[14px] font-medium leading-[100%] text-center text-[#232328] mb-10"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            CLIENT TESTIMONIALS
          </h2>
          <p
            className="text-[52px] font-normal leading-[100%] text-center"
            style={{ fontFamily: "'Helvetica Neue', sans-serif" }}
          >
            We build partnerships based<br /> on trust and responsibility
          </p>
        </div>
      </Container>

      {/* ===== SCROLL AREA ===== */}
      <div className="overflow-hidden relative w-full">
        {/* Auto-scroll row */}
        <div className="flex animate-marquee1 gap-5 w-max">
          {[...testimonials, ...testimonials].map((item, i) => (
            <div
              key={i}
              className="w-[318px] h-[432px] rounded-[8px] flex-shrink-0 overflow-hidden"
            >
              {item.type === "text" ? (
                <div
                  className={`${item.bg} ${item.textColor} h-full p-6 flex flex-col justify-between`}
                >
                  <p className="text-lg leading-relaxed">{item.text}</p>
                  <div>
                    <h4 className="font-semibold">{item.name}</h4>
                    <p className="text-sm opacity-70">{item.role}</p>
                  </div>
                </div>
              ) : (
                <img
                  src={item.image}
                  className="w-full h-full object-cover"
                  alt="testimonial"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


