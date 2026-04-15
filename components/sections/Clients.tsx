import Container from "../ui/Container";

export default function Clients() {
  return (
    <section className="py-16 bg-white text-center">
      <Container>
        <h3 className="mb-10 text-lg text-gray-600">
          The Smartest Teams Already Made the Move
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-12 bg-gray-200 rounded" />
          ))}
        </div>
      </Container>
    </section>
  );
}