const practices = [
   {
      id: ".01",
      title: "Litigation",
      description:
         "We provide legal assistance and representation in a broad range of litigation matters, helping clients navigate disputes and legal proceedings with a focused and structured approach.",
      services: [
         "Civil Litigation",
         "Criminal Litigation",
         "Matrimonial Matters",
         "Real Estate & Commercial Disputes",
         "Freight Forwarding & Customs Clearance",
      ],
   },
   {
      id: ".02",
      title: "Arbitration & Mediation",
      description:
         "We assist clients in resolving disputes through arbitration and mediation, providing legal support throughout the dispute-resolution process.",
      services: [
         "Arbitration",
         "Mediation",
         "Alternative Dispute Resolution",
      ],
   },
   {
      id: ".03",
      title: "Legal & Liaisoning",
      description:
         "We provide legal and liaisoning assistance for clients requiring professional coordination and support in connection with their legal and related requirements.",
      services: [
         "Legal Assistance",
         "Liaisoning Services",
         "Legal Coordination",
      ],
   },
   {
      id: ".04",
      title: "Corporate & Education Legal",
      description:
         "We provide legal assistance to businesses and educational institutions in relation to their legal, corporate, regulatory and institutional requirements.",
      services: [
         "Corporate Legal Matters",
         "Education Legal Matters",
         "Financial & Regulatory Matters",
      ],
   },
   {
      id: ".05",
      title: "Succession",
      description:
         "We assist clients with succession-related legal matters and the legal requirements involved in succession and transfer of rights and interests.",
      services: [
         "Succession Matters",
         "Succession-related Legal Assistance",
      ],
   },
   {
      id: ".06",
      title: "Wills & Probate",
      description:
         "We provide legal assistance concerning wills and probate matters, helping clients navigate the legal requirements associated with estates and succession.",
      services: [
         "Wills",
         "Probate Matters",
         "Estate-related Legal Assistance",
      ],
   },
   {
      id: ".07",
      title: "Intellectual Property Rights",
      description:
         "We provide legal assistance in matters concerning Intellectual Property Rights and the legal protection and handling of intellectual property.",
      services: [
         "Intellectual Property Rights",
         "IPR-related Legal Assistance",
      ],
   },
];

export default function PracticeGrid() {
   return (
      <section className="w-full bg-background pt-24 pb-32">
         <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center px-6 xl:px-0">

            {/* Section Heading */}
            <div className="mb-20 flex flex-col items-center text-center">
               <span className="mb-4 text-xs font-semibold tracking-[0.25em] uppercase text-primary">
                  Legal Solutions
               </span>

               <h2 className="text-4xl md:text-5xl font-serif text-foreground">
                  Our Legal Services
               </h2>

               <div className="mt-6 h-0.5 w-12 bg-primary"></div>
            </div>

            {/* Services Grid */}
            <div className="grid w-full grid-cols-1 gap-x-10 gap-y-14 md:grid-cols-2 lg:grid-cols-3">

               {practices.map((item, index) => {
                  const isHighlighted = index == [0] || index == [1] || index == [2] || index == [3] || index == [4] || index == [5] || index == [6] || index == [7];

                  return (
                     <div
                        key={item.id}
                        className={`group flex flex-col p-8 transition-all duration-300 ${isHighlighted
                           ? "rounded-lg bg-white shadow-[0_20px_50px_rgba(0,0,0,0.06)]"
                           : "border-t border-border"
                           }`}
                     >

                        {/* Number */}
                        <div className="mb-7 flex items-start justify-between">
                           <span className="font-serif text-4xl text-muted-foreground/30">
                              {item.id}
                           </span>

                           <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
                              Legal Services
                           </span>
                        </div>

                        {/* Title */}
                        <h3 className="mb-5 font-serif text-2xl font-bold leading-tight text-foreground transition-colors duration-300 group-hover:text-primary">
                           {item.title}
                        </h3>

                        {/* Description */}
                        <p className="mb-7 text-sm font-medium leading-7 text-muted-foreground">
                           {item.description}
                        </p>

                        {/* Service List */}
                        <div className="mt-auto">
                           <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-foreground">
                              Areas Covered
                           </p>

                           <ul className="space-y-2.5">
                              {item.services.map((service) => (
                                 <li
                                    key={service}
                                    className="flex items-start gap-3 text-sm leading-5 text-muted-foreground"
                                 >
                                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />

                                    <span>{service}</span>
                                 </li>
                              ))}
                           </ul>
                        </div>

                     </div>
                  );
               })}

            </div>

            {/* Closing Statement */}
            <div className="mt-20 max-w-3xl text-center">
               <p className="text-sm md:text-base leading-7 text-muted-foreground">
                  From litigation and dispute resolution to corporate,
                  succession, probate and intellectual property matters,
                  Beyond Litigation provides focused legal assistance across
                  a wide range of legal requirements.
               </p>
            </div>

         </div>
      </section>
   );
}
