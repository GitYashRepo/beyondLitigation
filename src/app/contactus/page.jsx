"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
   const containerRef = useRef(null);

   useGSAP(() => {
      gsap.fromTo(".contact-header", { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out" });

      gsap.utils.toArray('.gsap-fade-up').forEach((elem) => {
         gsap.fromTo(elem,
            { y: 60, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: "power2.out", scrollTrigger: { trigger: elem, start: "top 85%", toggleActions: "play none none reverse" } }
         );
      });
   }, { scope: containerRef });

   return (
      <div ref={containerRef} className="flex flex-col w-full bg-background">
         {/* 1. Header */}
         <div className="pt-32">
            <div className="container px-6 max-w-5xl mx-auto text-center contact-header">
               <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 uppercase">
                  Contact <span className="text-primary">US</span>
               </h1>
               <p className="text-xl md:text-2xl text-slate-300 border-t-2 border-primary pt-8 max-w-3xl mx-auto leading-relaxed">

               </p>
            </div>
         </div>

         {/* 2. Main Contact Form & Info */}
         <div className="container px-6 max-w-7xl mx-auto py-24">
            <div className="grid lg:grid-cols-3 gap-16">
               <div className="lg:col-span-1 space-y-8 gsap-fade-up">
                  <div className="bg-secondary/10 p-10 border border-border shadow-sm">
                     <h3 className="text-2xl font-bold mb-8 uppercase tracking-wide border-b-2 border-primary pb-2 inline-block">Headquarters</h3>
                     <ul className="space-y-8">
                        <li className="flex items-start gap-4">
                           <div className="bg-primary p-3 text-primary-foreground"><MapPin className="w-6 h-6" /></div>
                           <div>
                              <p className="font-bold text-foreground uppercase tracking-wider text-sm mb-1">Address</p>
                              <p className="text-muted-foreground leading-relaxed">Connaught Place, New Delhi, Delhi 110001, India</p>
                           </div>
                        </li>
                        <a href="tel:+917499443178" className="flex items-start gap-4">
                           <li className="flex items-start gap-4">
                              <div className="bg-primary p-3 text-primary-foreground"><Phone className="w-6 h-6" /></div>
                              <div>
                                 <p className="font-bold text-foreground uppercase tracking-wider text-sm mb-1">Direct Lines</p>
                                 <p className="text-muted-foreground">+91 74994 43178</p>
                              </div>
                           </li>
                        </a>
                        <a href="mailto:beyondlitigation@gmail.com" className="flex items-start gap-4">
                           <li className="flex items-start gap-4">
                              <div className="bg-primary p-3 text-primary-foreground"><Mail className="w-6 h-6" /></div>
                              <div>
                                 <p className="font-bold text-foreground uppercase tracking-wider text-sm mb-1">Email</p>
                                 <p className="text-muted-foreground">beyondlitigation@gmail.com</p>
                              </div>
                           </li>
                        </a>
                     </ul>
                  </div>

                  <div className="bg-slate-900 text-white p-10 border-l-4 border-primary">
                     <h3 className="font-bold uppercase tracking-wider mb-4">Operating Hours</h3>
                     <div className="flex items-center gap-4 text-slate-300 mb-2">
                        <Clock className="w-5 h-5 text-primary" />
                        <span>Mon - Sat: 9:00 AM - 7:00 PM</span>
                     </div>
                     <p className="text-xs text-slate-400 mt-4">* 24/7 Support available for active maintenance contracts.</p>
                  </div>
               </div>
               <div className="lg:col-span-2 gsap-fade-up">
                  <div className="bg-white border border-border p-12 shadow-sm">
                     <h3 className="text-3xl font-bold mb-8 uppercase tracking-wide">Submit Inquiry</h3>
                     <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid sm:grid-cols-2 gap-8">
                           <div className="space-y-3">
                              <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Full Name / Company Name</label>
                              <Input placeholder="John Doe / ACME Corp" className="h-12 rounded-none border-border focus-visible:ring-primary" />
                           </div>
                           <div className="space-y-3">
                              <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Email Address</label>
                              <Input type="email" placeholder="john@company.com" className="h-12 rounded-none border-border focus-visible:ring-primary" />
                           </div>
                        </div>
                        <div className="space-y-3">
                           <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Subject / Machine Type</label>
                           <Input placeholder="e.g. Injection Moulding Machine Quote" className="h-12 rounded-none border-border focus-visible:ring-primary" />
                        </div>
                        <div className="space-y-3">
                           <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Detailed Message</label>
                           <Textarea placeholder="Provide exact specifications or details about your inquiry..." className="min-h-[200px] rounded-none border-border focus-visible:ring-primary p-4" />
                        </div>
                        <Button size="lg" className="w-full sm:w-auto h-14 px-12 rounded-none uppercase tracking-widest font-bold text-sm">Send Secure Message</Button>
                     </form>
                  </div>
               </div>
            </div>
         </div>

         {/* 4. Google Maps Section */}
         <section className="h-[600px] w-full bg-slate-200 relative gsap-fade-up">
            <iframe
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11545.748832825599!2d77.20498718999545!3d28.62892044508814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd37b741d057%3A0xcdee88e47393c3f1!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi%20110001!5e1!3m2!1sen!2sin!4v1788512039045!5m2!1sen!2sin"
               width="100%"
               height="100%"
               style={{ border: 0 }}
               allowFullScreen=""
               loading="lazy"
               title="Beyond Litigation"
               className="filter grayscale contrast-125"
            ></iframe>
            <div className="absolute inset-0 pointer-events-none border-t-2 mix-blend-multiply"></div>
         </section>
      </div>
   );
}
