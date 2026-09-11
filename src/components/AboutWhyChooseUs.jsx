import { GraduationCap, Scale, Briefcase } from "lucide-react";

export default function AboutWhyChooseUs() {
  return (
    <section className="w-full bg-background pt-24 pb-20">
      <div className="mx-auto flex w-full max-w-[1000px] flex-col md:flex-row px-6 xl:px-0">
        
        {/* Left Column - Heading */}
        <div className="w-full md:w-1/3 mb-16 md:mb-0">
          <div className="w-12 h-0.5 bg-primary mb-6"></div>
          <h2 className="text-4xl md:text-[3.5rem] font-serif text-foreground leading-[1.05] tracking-tight w-min">
            Why<br />
            Choos<br />
            e Us
          </h2>
        </div>

        {/* Right Column - Content */}
        <div className="w-full md:w-2/3 md:pl-16 flex flex-col gap-12">
          
          {/* Paragraph */}
          <p className="text-sm text-foreground leading-relaxed font-light">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea<br className="hidden lg:block"/>
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum<br className="hidden lg:block"/>
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
          </p>

          {/* Three Feature Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            
            {/* Feature 1 */}
            <div className="flex flex-col">
              <GraduationCap className="text-primary w-5 h-5 mb-4" strokeWidth={1.5} />
              <h3 className="font-serif text-xl font-medium text-foreground mb-3 leading-tight">
                Highly<br />
                Experienced
              </h3>
              <p className="text-xs text-foreground font-light leading-relaxed">
                Click edit button to<br className="hidden sm:block"/>
                change this text. Lorem<br className="hidden sm:block"/>
                ipsum dolor sit amet,<br className="hidden sm:block"/>
                consectetur.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col">
              <Scale className="text-primary w-5 h-5 mb-4" strokeWidth={1.5} />
              <h3 className="font-serif text-xl font-medium text-foreground mb-3 leading-tight">
                Transparent Fees
              </h3>
              <p className="text-xs text-foreground font-light leading-relaxed mt-7 sm:mt-0">
                Click edit button to<br className="hidden sm:block"/>
                change this text. Lorem<br className="hidden sm:block"/>
                ipsum dolor sit amet,<br className="hidden sm:block"/>
                consectetur.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col">
              <Briefcase className="text-primary w-5 h-5 mb-4" strokeWidth={1.5} />
              <h3 className="font-serif text-xl font-medium text-foreground mb-3 leading-tight">
                Grate Track<br />
                Record
              </h3>
              <p className="text-xs text-foreground font-light leading-relaxed">
                Click edit button to<br className="hidden sm:block"/>
                change this text. Lorem<br className="hidden sm:block"/>
                ipsum dolor sit amet,<br className="hidden sm:block"/>
                consectetur.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
