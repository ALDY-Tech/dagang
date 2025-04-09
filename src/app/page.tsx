import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import ServiceSection from "@/components/ServiceSection";
import AboutSection from "@/components/AboutSection";

export default function HomePage() {
  return (
    <main>
      <Header />
      <HeroSlider />
      <ServiceSection />
      <AboutSection />
    </main>
  );
}
