export default function Hero() {
   return (
      <section className="relative w-full h-[800px] min-h-[80vh] flex items-center bg-[#050505] overflow-hidden">
         {/* Background Image with Overlay */}
         <div className="absolute inset-0 z-0">
            <img
               src="/homepage/justice-law.jpg"
               alt="Justice Statue"
               className="w-full h-full object-cover object-center opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent"></div>
         </div>

         {/* Content */}
         <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6 xl:px-0 pt-20">
            <div className="max-w-2xl">
               <p className="text-white/80 text-sm tracking-widest uppercase mb-4">
                  Welcome to Law Firm
               </p>
               <h1 className="text-5xl md:text-7xl font-serif text-white leading-[1.1] mb-8">
                  We Are A Global<br />
                  Force In Legal<br />
                  Defense
               </h1>
               <p className="text-white/70 text-lg md:text-xl mb-10 max-w-lg font-light leading-relaxed">
                  Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
               </p>
               <a
                  href="#more"
                  className="inline-block border border-primary text-primary px-8 py-4 text-[11px] font-semibold tracking-[0.2em] uppercase transition-colors hover:bg-primary hover:text-primary-foreground"
               >
                  Read More
               </a>
            </div>
         </div>
      </section>
   );
}
