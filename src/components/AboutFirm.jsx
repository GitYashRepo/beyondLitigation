export default function AboutFirm() {
  return (
    <section className="relative w-full bg-background pt-24 pb-32">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col md:flex-row px-6 xl:px-0">
        
        {/* Left Content */}
        <div className="w-full md:w-1/2 md:pr-16 pt-12">
          <h2 className="text-4xl md:text-5xl font-serif text-foreground leading-[1.1] mb-6">
            About The<br />
            Firm
          </h2>
          <div className="w-12 h-0.5 bg-primary mb-8"></div>
          
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.
          </p>
          
          <div className="mt-8">
            <p className="font-serif italic text-xl text-foreground mb-2">Simon Bell</p>
            <img src="/images/signature.png" alt="Simon Bell Signature" className="h-16 w-auto opacity-70" />
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 mt-16 md:mt-0 relative z-10">
          <div className="relative w-full aspect-[3/4] md:aspect-auto md:h-[600px] shadow-2xl -mt-32 md:-mt-48">
            <img 
              src="/images/about.jpg" 
              alt="About The Firm" 
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
