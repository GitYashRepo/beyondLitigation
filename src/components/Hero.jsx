export default function Hero() {
   return (
      <section className="relative w-full min-h-[90vh] flex items-center bg-[#050505] overflow-hidden">
         {/* Background Image with Overlay */}
         <div className="absolute inset-0 z-0 bg-[url('/homepage/justice-law.jpg')] bg-fixed bg-cover bg-center opacity-40"></div>
         <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#050505] via-[#050505]/20 to-transparent pointer-events-none"></div>

         {/* Content */}
         <div className="relative z-10 mx-auto w-full px-16 pt-20">
            <div className="max-w-4xl">
               <p className="text-white/80 text-sm tracking-widest mb-4">
                  Welcome to <span className="uppercase underline decoration-primary decoration-2">Beyond Litigation</span>
               </p>
               <h1 className="text-3xl md:text-5xl font-serif text-white leading-[1.1] mb-4">
                  We Are A Global Force In Legal Defense
               </h1>
               <p className="text-white/70 text-lg md:text-lg mb-4 max-w-3xl font-light leading-relaxed text-justify">
                  At Beyond Litigation, we understand that legal matters are not just about paperwork or proceedings — they are about people, businesses, rights, and decisions that matter. Our role is to understand your situation, identify the legal requirements, and guide you through the appropriate legal process.
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
