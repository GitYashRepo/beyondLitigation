import Link from "next/link";

const practices = [
   { id: "01", title: "Court Marriage &\nRegistration", description: "Get your marriage registered seamlessly with our expert legal assistance.", price: "₹100,000.00" },
   { id: "02", title: "Documentation", description: "Get your drafts and legal documents professionally prepared.", price: "₹20,000.00" },
   { id: "03", title: "Family &\nMatrimonial", description: "Get your matrimonial and family disputes resolved with our expert advice.", price: "₹100,000.00" },
   { id: "04", title: "Property Dispute", description: "Get your property disputes resolved efficiently and effectively.", price: "₹50,000.00" },
   { id: "05", title: "Bail & Parole", description: "Get bail for criminal matters with our specialized legal representation.", price: "₹50,000.00" },
   { id: "06", title: "Legal Consultation", description: "Get your legal queries answered by our experienced advocates.", price: "₹5,000.00" },
];

export default function PracticeAreas() {
   return (
      <section className="relative w-full bg-background pt-16 pb-32">
         <div className="mx-auto w-full max-w-[1200px] px-6 xl:px-0">

            {/* Header */}
            <div className="mb-16 max-w-2xl">
               <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
                  Our Services
               </h2>
               <div className="w-12 h-0.5 bg-primary mb-8"></div>
               <p className="text-muted-foreground leading-relaxed">
                  Beyond Litigation provides expert High Court criminal and civil litigation services, crafting of legal documents, and expert legal consultation tailored to your needs.
               </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

               {/* Main 6 cards */}
               {practices.map((item, index) => (
                  <div key={index} className="flex flex-col border-t border-border pt-8">
                     <div className="flex justify-between items-start mb-4">
                        <span className="text-3xl font-serif">{item.id}</span>
                        <span className="text-sm font-semibold text-primary px-3 py-1 bg-primary/10 rounded-full">{item.price}</span>
                     </div>
                     <h3 className="text-xl font-serif text-foreground mb-4 whitespace-pre-line leading-tight">
                        {item.title}
                     </h3>
                     <p className="text-muted-foreground text-sm mb-6 leading-relaxed flex-grow">
                        {item.description}
                     </p>
                     <Link href="#" className="text-xs font-semibold tracking-widest text-primary uppercase hover:text-foreground transition-colors mt-auto">
                        Read More
                     </Link>
                  </div>
               ))}

               {/* Highlighted Card */}
               <div className="lg:col-span-2 bg-primary p-12 flex flex-col justify-center mt-8 lg:mt-0 lg:ml-8 lg:-mr-8">
                  <h3 className="text-3xl font-serif text-primary-foreground mb-8">
                     More<br />
                     Practice<br />
                     Areas
                  </h3>

                  <ul className="space-y-4 mb-10 text-primary-foreground/90 font-medium text-sm">
                     <li className="flex items-start">
                        <span className="mr-3 text-lg leading-none">•</span>
                        <span>Insurance & Reinsurance<br />Litigation</span>
                     </li>
                     <li className="flex items-start">
                        <span className="mr-3 text-lg leading-none">•</span>
                        <span>Employment<br />Litigation</span>
                     </li>
                     <li className="flex items-start">
                        <span className="mr-3 text-lg leading-none">•</span>
                        <span>Regulatory &<br />Compliance</span>
                     </li>
                     <li className="flex items-start">
                        <span className="mr-3 text-lg leading-none">•</span>
                        <span>Media &<br />Entertainment<br />Litigation</span>
                     </li>
                  </ul>

                  <Link href="#" className="text-xs font-semibold tracking-widest text-primary-foreground uppercase border-b border-primary-foreground/30 pb-1 self-start hover:border-primary-foreground transition-colors">
                     View All Practice Areas
                  </Link>
               </div>

            </div>
         </div>
      </section>
   );
}
