import Image from "next/image";

type ServiceItem = {
  title: string;
  description: string;
  image: string;
};

const services: ServiceItem[] = [
  {
    title: "Fast Delivery",
    description: "Variations of passages of Lorem Ipsum available.",
    image: "/images/feature-1.png",
  },
  {
    title: "Free Shipping",
    description: "Variations of passages of Lorem Ipsum available.",
    image: "/images/feature-2.png",
  },
  {
    title: "Best Quality",
    description: "Variations of passages of Lorem Ipsum available.",
    image: "/images/feature-3.png",
  },
  {
    title: "24x7 Customer Support",
    description: "Variations of passages of Lorem Ipsum available.",
    image: "/images/feature-4.png",
  },
];

const ServiceSection: React.FC = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all text-center"
            >
              <div className="mb-4 flex justify-center">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <h5 className="text-xl font-semibold mb-2">{service.title}</h5>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
