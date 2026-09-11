export default function OurHistory() {
  return (
    <section className="w-full bg-background pt-24 pb-16">
      <div className="mx-auto w-full max-w-[1000px] px-6 xl:px-0">
        
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
            Our History
          </h2>
          <div className="w-12 h-0.5 bg-primary"></div>
        </div>

        {/* Two Columns */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 mb-24">
          {/* Left Column */}
          <div className="w-full md:w-[45%]">
            <p className="font-serif text-2xl font-bold text-foreground leading-snug">
              Lorem ipsum dolor sit amet, consectetur<br className="hidden md:block"/>
              adipisicing elit, sed do eiusmod tempor<br className="hidden md:block"/>
              incididunt ut labore et dolore magna<br className="hidden md:block"/>
              aliqua.
            </p>
          </div>

          {/* Right Column */}
          <div className="w-full md:w-[55%] flex flex-col gap-6 text-sm text-foreground leading-relaxed font-light">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed<br className="hidden lg:block"/>
              do eiusmod tempor incididunt ut labore et dolore magna<br className="hidden lg:block"/>
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation<br className="hidden lg:block"/>
              ullamco laboris nisi ut aliquip ex ea commodo consequat.<br className="hidden lg:block"/>
              Duis aute irure dolor in reprehenderit in voluptate velit esse<br className="hidden lg:block"/>
              cillum dolore eu fugiat nulla.
            </p>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco<br className="hidden lg:block"/>
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute<br className="hidden lg:block"/>
              irure dolor in reprehenderit in voluptate velit esse cillum<br className="hidden lg:block"/>
              dolore eu fugiat nulla pariatur.
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="w-full">
          <img 
            src="/images/history.jpg" 
            alt="Our History"
            className="w-full aspect-[21/9] object-cover object-center"
          />
        </div>

      </div>
    </section>
  );
}
