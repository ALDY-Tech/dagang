import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import ServiceSection from "@/components/ServiceSection";
import AboutSection from "@/components/AboutSection";
import ProductSection from "@/components/ProductSection";
import TestimonialSection from "@/components/TestimonialSection";

export default function HomePage() {
  return (
    <main>
      <Header />
      <HeroSlider />
      <ServiceSection />
      <AboutSection />
      <ProductSection />
      <TestimonialSection />
      {/* Add more sections as needed */}
    </main>
  );
}
