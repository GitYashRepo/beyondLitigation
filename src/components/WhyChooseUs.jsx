"use client";

import { useState } from "react";

const faqs = [
   {
      question: "Comprehensive Legal Assistance",
      answer:
         "From civil and criminal litigation to matrimonial, real estate and commercial disputes, we provide legal assistance across a wide range of matters, helping clients approach their legal requirements through the appropriate legal process.",
   },
   {
      question: "Focused Approach to Every Matter",
      answer:
         "Every legal matter has its own circumstances and requirements. We focus on understanding the nature of the matter and providing legal assistance that is aligned with the client's specific requirements and the applicable legal process.",
   },
   {
      question: "Representation & Dispute Resolution",
      answer:
         "Our practice extends beyond traditional litigation to arbitration and mediation, providing clients with legal assistance across different forms of dispute resolution depending on the nature of the matter.",
   },
   {
      question: "Legal Support for Individuals & Organisations",
      answer:
         "We assist not only with individual legal matters but also with corporate and education legal requirements, financial and regulatory matters, succession, wills and probate, legal liaisoning and intellectual property rights.",
   },
];

export default function WhyChooseUs() {
   const [openIndex, setOpenIndex] = useState(0);

   return (
      <section className="relative w-full overflow-hidden bg-[#050505] py-32">

         {/* Background Image */}
         <div className="absolute inset-0 z-0">
            <img
               src="/images/why-choose-us.jpg"
               alt="Legal consultation"
               className="h-full w-full object-cover object-center opacity-30"
            />

            <div className="absolute inset-0 bg-[#050505]/75"></div>
         </div>

         <div className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-col px-6 md:flex-row md:px-12 lg:px-20">

            {/* Left: Heading */}
            <div className="mb-16 w-full md:mb-0 md:w-1/3">

               <span className="mb-5 block text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                  Beyond Litigation
               </span>

               <h2 className="text-4xl font-serif leading-[1.05] text-white md:text-5xl lg:text-6xl">
                  Why Choose Us?
               </h2>

               <div className="mt-8 h-0.5 w-12 bg-primary"></div>

               <p className="mt-8 max-w-xs text-sm leading-7 text-white/60">
                  Focused legal assistance backed by a broad range of legal
                  services and dispute-resolution capabilities.
               </p>

            </div>

            {/* Right: Accordion */}
            <div className="w-full md:w-2/3 md:pl-16 lg:pl-24">

               <div className="border-t border-white/20">

                  {faqs.map((faq, index) => {
                     const isOpen = openIndex === index;

                     return (
                        <div
                           key={index}
                           className="border-b border-white/20"
                        >
                           <button
                              type="button"
                              className="flex w-full items-center justify-between gap-8 py-7 text-left focus:outline-none"
                              onClick={() =>
                                 setOpenIndex(isOpen ? -1 : index)
                              }
                           >
                              <div className="flex items-center gap-6">

                                 <span className="font-serif text-sm text-primary/60">
                                    0{index + 1}
                                 </span>

                                 <span className="text-lg font-medium text-white md:text-xl">
                                    {faq.question}
                                 </span>

                              </div>

                              <span className="shrink-0 text-2xl font-light text-primary">
                                 {isOpen ? "−" : "+"}
                              </span>
                           </button>

                           {isOpen && (
                              <div className="pb-7 pl-10 pr-8 md:pl-[3.75rem]">
                                 <p className="max-w-2xl text-sm leading-7 text-white/65">
                                    {faq.answer}
                                 </p>
                              </div>
                           )}
                        </div>
                     );
                  })}

               </div>

            </div>

         </div>
      </section>
   );
}
