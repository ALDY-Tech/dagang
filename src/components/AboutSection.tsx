import Image from "next/image";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
        {/* Image Section */}
        <div className="flex-1 grid grid-cols-2 gap-4">
          <div className="relative w-full h-64 rounded-lg overflow-hidden">
            <Image
              src="/images/a-1.jpg"
              alt="About Image 1"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-full h-64 rounded-lg overflow-hidden">
            <Image
              src="/images/a-2.jpg"
              alt="About Image 2"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-3xl font-bold mb-4">About Our Shop</h2>
          <p className="text-gray-600 mb-6">
            There are many variations of passages of Lorem Ipsum. There are many
            variations of passages of Lorem Ipsum.
          </p>
          <a
            href="#"
            className="inline-block bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
          >
            Read More
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
