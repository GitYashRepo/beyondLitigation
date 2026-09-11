import Link from "next/link";

const practices = [
  { id: "01", title: "Antitrust &\nCompetition" },
  { id: "02", title: "Bankruptcy &\nRestructuring" },
  { id: "03", title: "International\nTrade\nLitigation" },
  { id: "04", title: "Class Action\nLitigation" },
  { id: "05", title: "Insurance\nRecovery" },
  { id: "06", title: "Transactional\nLitigation" },
];

export default function PracticeAreas() {
  return (
    <section className="relative w-full bg-background pt-16 pb-32">
      <div className="mx-auto w-full max-w-[1200px] px-6 xl:px-0">
        
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
            Practice Areas
          </h2>
          <div className="w-12 h-0.5 bg-primary mb-8"></div>
          <p className="text-muted-foreground leading-relaxed">
            Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Main 6 cards */}
          {practices.map((item, index) => (
            <div key={index} className="flex flex-col border-t border-border pt-8">
              <span className="text-3xl text-muted/50 font-serif mb-4">{item.id}</span>
              <h3 className="text-xl font-serif text-foreground mb-4 whitespace-pre-line leading-tight">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed flex-grow">
                Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
