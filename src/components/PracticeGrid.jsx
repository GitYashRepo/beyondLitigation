const practices = [
  { id: ".01", title: "Court Marriage &\nRegistration", description: "Get your marriage registered seamlessly with our expert legal assistance.", price: "₹100,000.00" },
  { id: ".02", title: "Documentation", description: "Get your drafts and legal documents professionally prepared.", price: "₹20,000.00" },
  { id: ".03", title: "Family &\nMatrimonial", description: "Get your matrimonial and family disputes resolved with our expert advice.", price: "₹100,000.00" },
  { id: ".04", title: "Property Dispute", description: "Get your property disputes resolved efficiently and effectively.", price: "₹50,000.00" },
  { id: ".05", title: "Bail & Parole", description: "Get bail for criminal matters with our specialized legal representation.", price: "₹50,000.00" },
  { id: ".06", title: "Legal Consultation", description: "Get your legal queries answered by our experienced advocates.", price: "₹5,000.00" },
];

export default function PracticeGrid() {
  return (
    <section className="w-full bg-background pt-24 pb-32">
      <div className="mx-auto flex w-full max-w-[1000px] flex-col items-center px-6 xl:px-0">
        
        {/* Section Heading */}
        <div className="mb-20 text-center flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
            Our Services
          </h2>
          <div className="w-12 h-0.5 bg-primary"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-x-12 md:gap-y-16 w-full">
          {practices.map((item, index) => {
            const isHighlighted = item.id === ".03";
            return (
              <div 
                key={index} 
                className={`flex flex-col p-8 md:p-6 ${isHighlighted ? "bg-white shadow-[0_20px_50px_rgba(0,0,0,0.05)] rounded-lg" : ""}`}
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="text-4xl text-muted-foreground/30 font-serif">{item.id}</span>
                  <span className="text-xs font-semibold text-primary px-3 py-1 bg-primary/10 rounded-full">{item.price}</span>
                </div>
                <h3 className="text-lg font-serif text-foreground font-bold mb-4 whitespace-pre-line leading-tight">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
