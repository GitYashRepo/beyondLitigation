import { GraduationCap, Scale, Briefcase } from "lucide-react";

export default function AboutWhyChooseUs() {
   return (
      <section className="w-full bg-background pt-24 pb-20">
         <div className="mx-auto flex w-full  flex-col md:flex-row px-20">

            {/* Left Column - Heading */}
            <div className="w-full md:w-1/3 mb-16 md:mb-0">
               <div className="w-12 h-0.5 bg-primary mb-6"></div>

               <h2 className="text-4xl md:text-[3.5rem] font-serif text-foreground leading-[1.05] tracking-tight">
                  Why Choose Us
               </h2>
            </div>

            {/* Right Column - Content */}
            <div className="w-full md:w-2/3 md:pl-16 flex flex-col gap-12">

               {/* Intro Paragraph */}
               <p className="text-sm text-foreground leading-relaxed font-light">
                  At Beyond Litigation, we believe effective legal representation
                  begins with understanding our clients and their unique
                  circumstances. We combine legal knowledge, strategic thinking,
                  and personal attention to provide clear and dependable guidance
                  at every stage of the legal process.
               </p>

               {/* Three Feature Columns */}
               <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">

                  {/* Feature 1 */}
                  <div className="flex flex-col">
                     <GraduationCap
                        className="text-primary w-5 h-5 mb-4"
                        strokeWidth={1.5}
                     />

                     <h3 className="font-serif text-xl font-medium text-foreground mb-3 leading-tight">
                        Experienced
                        <br />
                        Legal Team
                     </h3>

                     <p className="text-xs text-foreground font-light leading-relaxed">
                        Our team brings strong legal knowledge and practical
                        experience to every matter, helping clients navigate
                        complex legal situations with confidence.
                     </p>
                  </div>

                  {/* Feature 2 */}
                  <div className="flex flex-col">
                     <Scale
                        className="text-primary w-5 h-5 mb-4"
                        strokeWidth={1.5}
                     />

                     <h3 className="font-serif text-xl font-medium text-foreground mb-3 leading-tight">
                        Transparent
                        <br />
                        Approach
                     </h3>

                     <p className="text-xs text-foreground font-light leading-relaxed">
                        We believe in clear communication and transparent legal
                        processes, keeping our clients informed about their options,
                        costs, and progress.
                     </p>
                  </div>

                  {/* Feature 3 */}
                  <div className="flex flex-col">
                     <Briefcase
                        className="text-primary w-5 h-5 mb-4"
                        strokeWidth={1.5}
                     />

                     <h3 className="font-serif text-xl font-medium text-foreground mb-3 leading-tight">
                        Proven
                        <br />
                        Track Record
                     </h3>

                     <p className="text-xs text-foreground font-light leading-relaxed">
                        We approach every case with preparation, attention to detail,
                        and a clear strategy focused on protecting our clients'
                        interests.
                     </p>
                  </div>

               </div>
            </div>
         </div>
      </section>
   );
}
