export default function Testimonials() {
  return (
    <section className="relative w-full bg-background pt-32 pb-16">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col px-6 xl:px-0">
        
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
            What Our Clients<br />
            Say About Us
          </h2>
          <div className="w-12 h-0.5 bg-primary"></div>
        </div>

        {/* Testimonial */}
        <div className="flex flex-col md:flex-row relative">
          <div className="text-9xl text-muted-foreground/10 font-serif absolute -top-8 -left-4 md:-left-8 leading-none select-none">
            &ldquo;
          </div>
          
          <div className="pl-6 md:pl-16 max-w-3xl z-10">
            <p className="text-xl md:text-2xl text-foreground font-light leading-relaxed mb-8">
              Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            
            <div className="flex items-center mb-10">
              <img 
                src="/images/client-avatar.jpg" 
                alt="Jason Spencer" 
                className="w-16 h-16 rounded-full object-cover mr-4 bg-muted"
              />
              <div>
                <p className="font-serif text-lg text-foreground font-medium">Jason Spencer</p>
                <p className="text-sm text-muted-foreground">Client</p>
                <div className="flex text-primary text-xs mt-1">
                  ★★★★★
                </div>
              </div>
            </div>
            
            <a
              href="#testimonials"
              className="inline-block border border-primary text-primary px-8 py-3 text-[11px] font-semibold tracking-[0.2em] uppercase transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              View All Testimonials
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
