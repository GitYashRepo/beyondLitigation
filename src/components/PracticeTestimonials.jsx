export default function PracticeTestimonials() {
   const testimonials = [
      {
         quote:
            "Beyond Litigation assisted us in a complex commercial dispute with a clear and structured legal approach. Their attention to detail and professional guidance gave us confidence throughout the matter.",
         name: "Amit Sharma",
         location: "Delhi, India",
         matter: "Commercial Dispute",
         image: "/images/client-1.jpg",
      },
      {
         quote:
            "I approached Beyond Litigation for a sensitive matrimonial matter and received clear guidance throughout the process. The team understood the complexities of the matter and provided professional legal assistance at every stage.",
         name: "Priya Verma",
         location: "Noida, India",
         matter: "Matrimonial Matter",
         image: "/images/client-2.jpg",
      },
      // {
      //    quote:
      //       "Beyond Litigation provided valuable legal assistance in a regulatory and compliance matter concerning our business. Their approach was professional, practical and focused on addressing the legal requirements effectively.",
      //    name: "Rohit Mehta",
      //    location: "Gurugram, India",
      //    matter: "Regulatory & Compliance",
      //    image: "/images/client-3.jpg",
      // },
   ];

   return (
      <section className="w-full bg-background">
         <div className="mx-auto flex w-full flex-col px-20 md:flex-row">

            {/* Left Column - Testimonials */}
            <div className="mb-16 w-full pr-0 md:mb-0 md:w-1/2 md:pr-16">

               {/* Heading */}
               <div className="mb-12">
                  <span className="mb-4 block text-xs font-semibold tracking-[0.25em] uppercase text-primary">
                     Client Experiences
                  </span>

                  <h2 className="mb-6 text-4xl font-serif text-foreground md:text-5xl">
                     Testimonials
                  </h2>

                  <div className="mb-7 h-0.5 w-12 bg-primary"></div>

                  <p className="max-w-xl text-sm leading-7 text-muted-foreground">
                     Our clients&apos; trust and confidence drive our commitment
                     to providing focused legal assistance and practical
                     solutions across a wide range of legal matters.
                  </p>
               </div>

               {/* Testimonials */}
               <div className="space-y-6">

                  {testimonials.map((testimonial, index) => (
                     <div
                        key={index}
                        className="group border border-border bg-background p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.06)] md:p-8"
                     >
                        {/* Rating */}
                        <div className="mb-5 flex gap-1 text-[11px] text-primary">
                           ★★★★★
                        </div>

                        {/* Quote */}
                        <div className="relative">
                           <span className="absolute -left-1 -top-5 font-serif text-5xl leading-none text-primary/20">
                              “
                           </span>

                           <p className="relative pl-4 text-sm font-medium leading-7 text-foreground md:text-[15px]">
                              {testimonial.quote}
                           </p>
                        </div>

                        {/* Client */}
                        <div className="mt-7 flex items-center">

                           <img
                              src={testimonial.image}
                              alt={testimonial.name}
                              className="mr-4 h-11 w-11 rounded-full bg-muted object-cover grayscale"
                           />

                           <div>
                              <p className="font-serif text-sm font-bold text-foreground">
                                 {testimonial.name}
                              </p>

                              <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-primary">
                                 {testimonial.matter}
                              </p>

                              <p className="mt-1 text-[10px] text-muted-foreground">
                                 {testimonial.location}
                              </p>
                           </div>

                        </div>
                     </div>
                  ))}

               </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative w-full pt-8 md:w-1/2 md:pt-0">

               {/* Decorative background block */}
               <div className="absolute right-0 top-0 hidden h-[58%] w-[78%] bg-white md:block"></div>

               {/* Image */}
               <div className="relative z-10 ml-0 h-[420px] w-full md:ml-[8%] md:mt-16 md:h-[600px] md:w-[92%]">
                  <img
                     src="/images/practice-testimonial.jpg"
                     alt="Legal consultation and documents"
                     className="h-full w-full object-cover object-center shadow-lg"
                  />

                  {/* Image Overlay */}
                  <div className="absolute bottom-0 left-0 bg-background/95 px-7 py-6 md:px-9">
                     <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
                        Beyond Litigation
                     </p>

                     <p className="mt-2 max-w-xs font-serif text-xl text-foreground">
                        Focused legal assistance.
                        <br />
                        Practical solutions.
                     </p>
                  </div>
               </div>

            </div>

         </div>
      </section>
   );
}
