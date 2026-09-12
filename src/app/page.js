import Hero from "@/components/Hero";
import AboutFirm from "@/components/AboutFirm";
import PracticeAreas from "@/components/PracticeAreas";
import WhyChooseUs from "@/components/WhyChooseUs";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import Attorneys from "@/components/Attorneys";
import ContactCTA from "@/components/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutFirm />
      <PracticeAreas />
      <WhyChooseUs />
      <Stats />
      <Testimonials />
      <Attorneys />
      <ContactCTA />
    </>
  );
}
