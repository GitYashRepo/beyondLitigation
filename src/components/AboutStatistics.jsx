"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
   { value: 450, suffix: "+", label: "Client Consultations" },
   { value: 99, suffix: "%", label: "Successful Cases" },
   { value: 750, suffix: "K", label: "Money Recovered" },
   { value: 445, suffix: "", label: "Cases Won" },
   { value: 65, suffix: "+", label: "Attorneys" },
];

function Counter({ value, suffix, start }) {
   const [count, setCount] = useState(0);

   useEffect(() => {
      if (!start) return;

      let startTime = null;
      const duration = 1800;

      const animate = (timestamp) => {
         if (!startTime) startTime = timestamp;

         const progress = Math.min(
            (timestamp - startTime) / duration,
            1
         );

         // Smooth ease-out
         const easeOut = 1 - Math.pow(1 - progress, 3);

         setCount(Math.floor(easeOut * value));

         if (progress < 1) {
            requestAnimationFrame(animate);
         } else {
            setCount(value);
         }
      };

      requestAnimationFrame(animate);
   }, [start, value]);

   return (
      <span className="text-4xl font-serif text-[#E8C45F] mb-3">
         {count}
         {suffix}
      </span>
   );
}

export default function AboutStatistics() {
   const sectionRef = useRef(null);
   const [isVisible, setIsVisible] = useState(false);

   useEffect(() => {
      const observer = new IntersectionObserver(
         ([entry]) => {
            if (entry.isIntersecting) {
               setIsVisible(true);

               // Prevent the counter from restarting
               observer.disconnect();
            }
         },
         {
            threshold: 0.3,
         }
      );

      if (sectionRef.current) {
         observer.observe(sectionRef.current);
      }

      return () => observer.disconnect();
   }, []);

   return (
      <section
         ref={sectionRef}
         className="w-full bg-background pb-32"
      >
         <div className="mx-auto w-full  px-20">
            <div className="bg-[#000000] py-12 px-6 flex flex-col md:flex-row items-center justify-between divide-y md:divide-y-0 md:divide-x divide-[#ffffff]/10">
               {stats.map((stat, index) => (
                  <div
                     key={index}
                     className="flex flex-col items-center justify-center w-full md:w-1/5 py-6 md:py-0"
                  >
                     <Counter
                        value={stat.value}
                        suffix={stat.suffix}
                        start={isVisible}
                     />

                     <span className="text-[10px] uppercase tracking-widest text-white text-center">
                        {stat.label}
                     </span>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
}
