"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
   { value: 20, suffix: "+", label: "Client Consultations" },
   { value: 4, suffix: "%", label: "Successful Cases" },
   { value: 34, suffix: "K", label: "Money Recovered" },
   { value: 22, suffix: "", label: "Cases Won" },
   { value: 3, suffix: "+", label: "Attorneys" },
];

function Counter({ value, suffix, start }) {
   const [count, setCount] = useState(0);

   useEffect(() => {
      if (!start) return;

      let startTime;
      const duration = 1800;

      const animate = (timestamp) => {
         if (!startTime) startTime = timestamp;

         const progress = Math.min(
            (timestamp - startTime) / duration,
            1
         );

         // Smooth ease-out effect
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
      <span className="text-4xl font-serif text-foreground mb-2">
         {count}
         {suffix}
      </span>
   );
}

export default function Stats() {
   const sectionRef = useRef(null);
   const [isVisible, setIsVisible] = useState(false);

   useEffect(() => {
      const observer = new IntersectionObserver(
         ([entry]) => {
            if (entry.isIntersecting) {
               setIsVisible(true);
               observer.disconnect(); // Run animation only once
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
         className="relative w-full px-20"
      >
         <div className="mx-auto w-full  -mt-16 relative z-20">
            <div className="bg-white shadow-xl flex flex-col md:flex-row items-center justify-between py-10 px-8 divide-y md:divide-y-0 md:divide-x divide-border">
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

                     <span className="text-xs uppercase tracking-widest text-muted-foreground text-center">
                        {stat.label}
                     </span>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
}
