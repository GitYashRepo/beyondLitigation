export default function ContactHero() {
   return (
      <section className="relative w-full h-[400px] flex items-center bg-[#050505] overflow-hidden">
         {/* Background Image with Overlay */}
         <div className="absolute inset-0 z-0 bg-[url('/homepage/justice-law.jpg')] bg-fixed bg-cover bg-center opacity-40"></div>
         <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#050505] via-[#050505]/20 to-transparent pointer-events-none"></div>

         {/* Content */}
         <div className="relative z-10 mx-auto w-full  px-20 pt-20">
            <h1 className="text-5xl md:text-6xl font-serif text-white leading-[1.1] mb-6">
               Contact
            </h1>
            <div className="w-12 h-0.5 bg-primary"></div>
         </div>
      </section>
   );
}
