const practices = [
  { id: ".01", title: "Antitrust & Competition" },
  { id: ".02", title: "Bankruptcy &\nRestructuring" },
  { id: ".03", title: "International Trade\nLitigation" },
  { id: ".04", title: "Class Action Litigation" },
  { id: ".05", title: "Investment Fund Litigation" },
  { id: ".06", title: "Transnational Litigation" },
  { id: ".07", title: "Insurance & Reinsurance\nLitigation" },
  { id: ".08", title: "Employment Litigation &\nCounseling" },
  { id: ".09", title: "Media & Entertainment\nLitigation" },
];

export default function PracticeGrid() {
  return (
    <section className="w-full bg-background pt-24 pb-32">
      <div className="mx-auto flex w-full max-w-[1000px] flex-col items-center px-6 xl:px-0">
        
        {/* Section Heading */}
        <div className="mb-20 text-center flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
            We Are Experts In:
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
                className={`flex flex-col p-8 md:p-6 ${isHighlighted ? "bg-white shadow-[0_20px_50px_rgba(0,0,0,0.05)]" : ""}`}
              >
                <span className="text-4xl text-muted-foreground/30 font-serif mb-4">{item.id}</span>
                <h3 className="text-lg font-serif text-foreground font-bold mb-4 whitespace-pre-line leading-tight">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed font-medium">
                  Lorem ipsum dolor sit amet,<br className="hidden lg:block"/>
                  consectetur adipisicing elit, sed do<br className="hidden lg:block"/>
                  eiusmod tempor incididunt ut labore et<br className="hidden lg:block"/>
                  dolore.
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
