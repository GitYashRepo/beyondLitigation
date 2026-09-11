export default function PracticeTestimonials() {
  return (
    <section className="w-full bg-background pb-32">
      <div className="mx-auto flex w-full max-w-[1000px] flex-col md:flex-row px-6 xl:px-0">
        
        {/* Left Column - Testimonials */}
        <div className="w-full md:w-1/2 pr-0 md:pr-16 mb-16 md:mb-0">
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
            Testimonials
          </h2>
          <div className="w-12 h-0.5 bg-primary mb-12"></div>

          {/* Testimonial 1 */}
          <div className="mb-12">
            <div className="flex text-primary text-[10px] mb-4 gap-1">
              ★★★★★
            </div>
            <p className="text-xs text-foreground font-medium leading-relaxed mb-6">
              Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing<br className="hidden md:block"/>
              elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <div className="flex items-center">
              <img 
                src="/images/client-1.jpg" 
                alt="Diana Guerrero" 
                className="w-10 h-10 rounded-full object-cover mr-4 bg-muted"
              />
              <div>
                <p className="font-serif text-sm font-bold text-foreground">Diana Guerrero</p>
                <p className="text-[10px] text-muted-foreground">United States</p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div>
            <div className="flex text-primary text-[10px] mb-4 gap-1">
              ★★★★★
            </div>
            <p className="text-xs text-foreground font-medium leading-relaxed mb-6">
              Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing<br className="hidden md:block"/>
              elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <div className="flex items-center">
              <img 
                src="/images/client-2.jpg" 
                alt="Doris Guzman" 
                className="w-10 h-10 rounded-full object-cover mr-4 bg-muted"
              />
              <div>
                <p className="font-serif text-sm font-bold text-foreground">Doris Guzman</p>
                <p className="text-[10px] text-muted-foreground">Europe</p>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column - Image */}
        <div className="w-full md:w-1/2 relative pt-8 md:pt-0">
          {/* Decorative white box */}
          <div className="absolute top-0 right-0 w-[80%] h-[60%] bg-white hidden md:block"></div>
          
          <div className="relative z-10 w-full md:w-[90%] md:ml-[10%] md:mt-16 h-[400px] md:h-[500px]">
            <img 
              src="/images/practice-testimonial.jpg" 
              alt="Person writing in notebook" 
              className="w-full h-full object-cover object-center shadow-lg"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
