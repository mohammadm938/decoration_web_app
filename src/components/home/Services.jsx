import ServiceCard from "../ui/ServiceCard";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section className="py-24 bg-[#f8f8f8]">
      <div className="container mx-auto px-6">
        <h2
          className="
          text-center
          text-4xl
          font-bold
          mb-16
          text-[#0a0a0a]
          "
        >
          خدمات ما
        </h2>

        <div
          className="
          grid
          md:grid-cols-2
          lg:grid-cols-6
          gap-10

          "
        >
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
