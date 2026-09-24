import Hero from "@/components/Hero";
import AboutFirm from "@/components/AboutFirm";
import PracticeAreas from "@/components/PracticeAreas";
import WhyChooseUs from "@/components/WhyChooseUs";
import Stats from "@/components/Stats";
import ContactCTA from "@/components/ContactCTA";
import PracticeTestimonials from "@/components/PracticeTestimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutFirm />
      <PracticeAreas />
      <WhyChooseUs />
      <Stats />
      <div className="pt-20"><PracticeTestimonials/></div>
      <ContactCTA />
    </>
  );
}
