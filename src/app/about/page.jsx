import React from "react";
import AboutFirm from "@/components/AboutFirm";
import AboutHero from "@/components/AboutHero";
import OurHistory from "@/components/OurHistory";
import AboutStatistics from "@/components/AboutStatistics";
import AboutWhyChooseUs from "@/components/AboutWhyChooseUs";

export default function AboutUs() {
   return (
      <>
         <AboutHero />
         <AboutFirm />
         <OurHistory />
         <AboutStatistics />
         <AboutWhyChooseUs />
      </>
   )
}
