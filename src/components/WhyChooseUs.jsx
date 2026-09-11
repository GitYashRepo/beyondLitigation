"use client";

import { useState } from "react";

const faqs = [
   { question: "How to choose the right lawyer?" },
   { question: "What is the right way of fighting for your rights?" },
   { question: "How to deal with property matters?" },
   { question: "How to fight forgery?" },
];

export default function WhyChooseUs() {
   const [openIndex, setOpenIndex] = useState(0);

   return (
      <section className="relative w-full bg-[#050505] py-32 overflow-hidden">
         {/* Background Image */}
         <div className="absolute inset-0 z-0">
            <img
               src="/images/why-choose-us.jpg"
               alt="Gavel"
               className="w-full h-full object-cover object-center opacity-30"
            />
            <div className="absolute inset-0 bg-[#050505]/70"></div>
         </div>

         <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-col md:flex-row px-6 xl:px-0">

            {/* Left: Heading */}
            <div className="w-full md:w-1/3 mb-16 md:mb-0">
               <h2 className="text-5xl md:text-6xl font-serif text-white leading-[1.1]">
                  Why<br />
                  Choose<br />
                  Us
               </h2>
            </div>

            {/* Right: Accordion */}
            <div className="w-full md:w-2/3 md:pl-16">
               <div className="border-t border-white/20">
                  {faqs.map((faq, index) => {
                     const isOpen = openIndex === index;
                     return (
                        <div key={index} className="border-b border-white/20">
                           <button
                              className="w-full py-6 flex justify-between items-center text-left focus:outline-none"
                              onClick={() => setOpenIndex(isOpen ? -1 : index)}
                           >
                              <span className="text-white font-medium text-lg pr-8">{faq.question}</span>
                              <span className="text-primary text-xl font-light">
                                 {isOpen ? "−" : "+"}
                              </span>
                           </button>
                           {isOpen && (
                              <div className="pb-6 text-white/70 text-sm leading-relaxed pr-8">
                                 Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
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
