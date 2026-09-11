const attorneys = [
  { name: "Kevin Lawson", title: "Partner", image: "/images/attorney-1.jpg" },
  { name: "Maria Reynolds", title: "Partner", image: "/images/attorney-2.jpg" },
  { name: "Roger Garrett", title: "Partner", image: "/images/attorney-3.jpg" },
  { name: "Nicole Robinson", title: "Partner", image: "/images/attorney-4.jpg" },
];

export default function Attorneys() {
  return (
    <section className="w-full bg-background pt-24 pb-16">
      <div className="mx-auto w-full max-w-[1200px] px-6 xl:px-0">
        
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
            Attorneys
          </h2>
          <div className="w-12 h-0.5 bg-primary"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {attorneys.map((attorney, index) => (
            <div key={index} className="flex flex-col group cursor-pointer">
              {/* Name & Title */}
              <div className="mb-6">
                <h3 className="text-xl font-serif text-foreground mb-1 group-hover:text-primary transition-colors">
                  {attorney.name}
                </h3>
                <p className="text-muted-foreground text-sm uppercase tracking-widest">{attorney.title}</p>
              </div>
              
              {/* Image */}
              <div className="relative w-full aspect-[3/4] overflow-hidden bg-muted">
                <img 
                  src={attorney.image} 
                  alt={attorney.name}
                  className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
