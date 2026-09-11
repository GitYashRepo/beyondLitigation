import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";


export default function ContactFormSection() {
   return (
      <section className="relative w-full flex flex-col">
         {/* Top half with white background */}
         <div className="w-full bg-white pt-24 pb-32 lg:pb-48">
            <div className="mx-auto flex w-full max-w-[1000px] flex-col lg:flex-row px-6 xl:px-0 relative">

               {/* Left Column - Contact Details */}
               <div className="w-full lg:w-1/2 pr-0 lg:pr-16 mb-16 lg:mb-0">
                  <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
                     Get In Touch
                  </h2>
                  <p className="text-sm text-foreground mb-10 leading-relaxed font-light max-w-sm">
                     Duis aute irure dolor in reprehenderit in<br />
                     voluptate velit esse cillum dolore eu fugiat.
                  </p>

                  <div className="flex flex-col gap-8">
                     <div>
                        <h4 className="font-serif text-sm font-bold text-foreground mb-1">Phone</h4>
                        <p className="font-serif text-2xl text-foreground font-bold">929-242-6868</p>
                     </div>

                     <div>
                        <h4 className="font-serif text-sm font-bold text-foreground mb-1">Email</h4>
                        <p className="font-serif text-2xl text-foreground font-bold">contact@example.com</p>
                     </div>

                     <div>
                        <h4 className="font-serif text-sm font-bold text-foreground mb-1">Address</h4>
                        <p className="font-serif text-2xl text-foreground font-bold leading-tight max-w-xs">
                           123 Fifth Avenue, NY City, NY 10160
                        </p>
                     </div>

                     <div className="mt-4">
                        <h4 className="font-serif text-sm font-bold text-foreground mb-4">Keep In Touch</h4>
                        <div className="flex items-center gap-4 text-foreground">
                           <a href="#" className="hover:text-primary transition-colors"><FaFacebook className="w-4 h-4" /></a>
                           <a href="#" className="hover:text-primary transition-colors"><FaLinkedin className="w-4 h-4" /></a>
                           <a href="#" className="hover:text-primary transition-colors"><FaTwitter className="w-4 h-4" /></a>
                           <a href="#" className="hover:text-primary transition-colors"><FaInstagram className="w-4 h-4" /></a>
                        </div>
                        <div className="w-8 h-px bg-primary mt-4"></div>
                     </div>
                  </div>
               </div>

               {/* Right Column - Form Container */}
               <div className="w-full lg:w-1/2 lg:absolute lg:top-[-4rem] lg:right-0 z-20">
                  <div className="bg-white p-10 md:p-14 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-border/30 w-full h-full min-h-[600px]">
                     <h2 className="text-4xl font-serif text-foreground mb-6">
                        Message Us
                     </h2>
                     <div className="w-12 h-px bg-foreground/20 mb-8"></div>

                     <form className="flex flex-col gap-6">
                        <div className="flex flex-col gap-2">
                           <label htmlFor="name" className="text-[10px] text-muted-foreground uppercase tracking-wider">Name *</label>
                           <input type="text" id="name" className="w-full bg-[#F5F5F5] border border-transparent focus:border-primary focus:bg-white transition-colors px-4 py-3 outline-none text-sm" />
                        </div>

                        <div className="flex flex-col gap-2">
                           <label htmlFor="email" className="text-[10px] text-muted-foreground uppercase tracking-wider">Email *</label>
                           <input type="email" id="email" className="w-full bg-[#F5F5F5] border border-transparent focus:border-primary focus:bg-white transition-colors px-4 py-3 outline-none text-sm" />
                        </div>

                        <div className="flex flex-col gap-2">
                           <label htmlFor="phone" className="text-[10px] text-muted-foreground uppercase tracking-wider">Phone Number *</label>
                           <input type="tel" id="phone" className="w-full bg-[#F5F5F5] border border-transparent focus:border-primary focus:bg-white transition-colors px-4 py-3 outline-none text-sm" />
                        </div>

                        <div className="flex flex-col gap-2">
                           <label htmlFor="message" className="text-[10px] text-muted-foreground uppercase tracking-wider">Message</label>
                           <textarea id="message" rows="5" className="w-full bg-[#F5F5F5] border border-transparent focus:border-primary focus:bg-white transition-colors px-4 py-3 outline-none text-sm resize-none"></textarea>
                        </div>

                        <button type="submit" className="bg-[#E8C45F] text-white px-8 py-3 text-[11px] font-semibold tracking-widest uppercase transition-colors hover:bg-[#d4b050] self-start mt-2">
                           Submit
                        </button>
                     </form>
                  </div>
               </div>

            </div>
         </div>

         {/* Bottom half with grey background */}
         <section className="h-[400px] w-full bg-slate-100 relative gsap-fade-up">
            <iframe
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11545.748832825599!2d77.20498718999545!3d28.62892044508814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd37b741d057%3A0xcdee88e47393c3f1!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi%20110001!5e1!3m2!1sen!2sin!4v1788512039045!5m2!1sen!2sin"
               width="100%"
               height="100%"
               style={{ border: 0 }}
               allowFullScreen=""
               loading="lazy"
               title="Beyond Litigation"
            ></iframe>
            <div className="absolute inset-0 pointer-events-none border-t-2 mix-blend-multiply"></div>
         </section>
      </section>
   );
}
