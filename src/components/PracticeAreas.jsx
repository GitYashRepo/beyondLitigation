import Link from "next/link";

const practices = [
   {
      id: "01",
      title: "Litigation",
      description:
         "Representation and legal assistance in a wide range of litigation matters, including civil, criminal, matrimonial, real estate and commercial disputes, as well as freight forwarding and customs clearance matters.",
      services: [
         "Civil Litigation",
         "Criminal Litigation",
         "Matrimonial Matters",
         "Real Estate & Commercial Disputes",
         "Freight Forwarding & Customs Clearance",
      ],
   },
   {
      id: "02",
      title: "Arbitration & Mediation",
      description:
         "Legal assistance in dispute resolution through arbitration and mediation, with a focus on resolving disputes through structured and legally appropriate proceedings.",
      services: [
         "Arbitration Proceedings",
         "Mediation",
         "Dispute Resolution",
      ],
   },
   {
      id: "03",
      title: "Legal & Liaisoning",
      description:
         "Legal support and liaisoning services designed to assist clients with their legal requirements, coordination and related professional matters.",
      services: [
         "Legal Assistance",
         "Liaisoning Services",
         "Legal Coordination",
      ],
   },
   {
      id: "04",
      title: "Corporate & Education Legal",
      description:
         "Legal services for corporate and educational requirements, including assistance with financial and regulatory matters and other legal issues affecting organisations and institutions.",
      services: [
         "Corporate Legal Matters",
         "Education Legal Matters",
         "Financial & Regulatory Matters",
      ],
   },
   {
      id: "05",
      title: "Succession",
      description:
         "Legal assistance concerning succession-related matters and the legal processes involved in succession and transfer of rights and interests.",
      services: [
         "Succession Matters",
         "Legal Succession Assistance",
      ],
   },
   {
      id: "06",
      title: "Wills & Probate",
      description:
         "Legal assistance relating to wills and probate matters, helping clients address the legal requirements associated with wills, estates and probate proceedings.",
      services: [
         "Wills",
         "Probate Matters",
         "Estate-related Legal Assistance",
      ],
   },
   {
      id: "07",
      title: "Intellectual Property Rights",
      description:
         "Legal assistance concerning Intellectual Property Rights (IPR) and matters relating to the protection and legal handling of intellectual property.",
      services: [
         "Intellectual Property Rights",
         "IPR Legal Assistance",
      ],
   },
];

export default function PracticeAreas() {
   return (
      <section className="relative w-full bg-background py-20 md:py-28">
         <div className="mx-auto w-full px-16">

            {/* Header */}
            <div className="mb-16 max-w-3xl">
               <span className="text-xs font-semibold tracking-[0.25em] uppercase text-primary">
                  Legal Solutions
               </span>

               <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-serif text-foreground">
                  Our Legal Services
               </h2>

               <div className="mt-6 w-12 h-0.5 bg-primary"></div>

               <p className="mt-8 text-muted-foreground leading-relaxed text-base md:text-lg">
                  Beyond Litigation provides legal solutions across litigation,
                  arbitration and mediation, legal and liaisoning, corporate and
                  education law, succession, wills and probate, intellectual
                  property rights, and other related legal matters.
               </p>
            </div>

            {/* Services */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-20 gap-y-14">

               {practices.map((item) => (
                  <article
                     key={item.id}
                     className="group border-t border-border pt-7"
                  >
                     <div className="flex items-start justify-between gap-6">
                        <span className="text-3xl md:text-4xl font-serif text-muted-foreground/50">
                           {item.id}
                        </span>

                        <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground/50 font-semibold">
                           Legal Services
                        </span>
                     </div>

                     <h3 className="mt-7 text-2xl md:text-3xl font-serif text-foreground group-hover:text-primary transition-colors">
                        {item.title}
                     </h3>

                     <p className="mt-5 text-sm md:text-base text-muted-foreground leading-7 text-justify mb-10">
                        {item.description}
                     </p>

                     <div className="mt-7">
                        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-foreground">
                           Areas Covered
                        </p>

                        <ul className="space-y-2">
                           {item.services.map((service) => (
                              <li
                                 key={service}
                                 className="flex items-start gap-3 text-sm text-muted-foreground"
                              >
                                 <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                                 <span>{service}</span>
                              </li>
                           ))}
                        </ul>
                     </div>

                     <Link
                        href="#contact"
                        className="inline-block mt-7 text-xs font-semibold tracking-[0.18em] uppercase text-primary border-b border-primary/30 pb-1 hover:border-primary transition-colors"
                     >
                        Discuss Your Matter
                     </Link>
                  </article>
               ))}

            </div>

            {/* Bottom CTA */}
            <div className="mt-20 bg-muted-foreground/50 px-8 py-12 md:px-14 md:py-14">
               <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
                  <div>
                     <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary-foreground/70">
                        Beyond Litigation
                     </span>

                     <h3 className="mt-3 text-3xl md:text-4xl font-serif text-primary-foreground">
                        Require Legal Assistance?
                     </h3>

                     <p className="mt-4 max-w-2xl text-sm leading-6 text-primary-foreground/80">
                        Discuss your legal requirements with us and understand
                        the appropriate legal course for your matter.
                     </p>
                  </div>

                  <Link
                     href="/contact"
                     className="shrink-0 self-start md:self-auto border border-primary-foreground/40 px-6 py-3 text-xs font-semibold tracking-[0.18em] uppercase text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-colors"
                  >
                     Contact Us
                  </Link>
               </div>
            </div>

         </div>
      </section>
   );
}
