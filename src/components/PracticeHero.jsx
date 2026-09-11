export default function PracticeHero() {
  return (
    <section className="relative w-full h-[500px] flex items-center bg-[#050505] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/practice-hero.jpg"
          alt="Lawyers in suits"
          className="w-full h-full object-cover object-center opacity-40 grayscale-[20%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1000px] px-6 xl:px-0 pt-20">
        <h1 className="text-5xl md:text-6xl font-serif text-white leading-[1.1] mb-6">
          Practice Areas
        </h1>
        <div className="w-12 h-0.5 bg-primary"></div>
      </div>
    </section>
  );
}
