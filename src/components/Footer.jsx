import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
   return (
      <footer className="w-full bg-[#050505] pt-16 pb-8 border-t border-white/10">
         <div className="mx-auto max-w-7xl px-4 md:px-16 mb-12 grid grid-cols-1 md:grid-cols-4 gap-10">
            <div className="col-span-1 md:col-span-2">
               <Link href="/" className="flex items-center mb-6">
                  <img src="/logo.png" alt="Beyond Litigation" className="h-10 w-auto rounded-md" />
                  <p className="text-white text-lg font-semibold pl-4">BEYOND LITIGATION</p>
               </Link>
               <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-sm">
                  Dedicated to providing exceptional legal counsel and representation. We go beyond traditional litigation to secure the best possible outcomes for our clients.
               </p>
            </div>

            <div>
               <h3 className="text-white text-sm font-semibold tracking-wider uppercase mb-6">Quick Links</h3>
               <ul className="flex flex-col gap-4">
                  <li>
                     <Link href="/" className="text-white/60 hover:text-primary transition-colors text-sm">
                        Home
                     </Link>
                  </li>
                  <li>
                     <Link href="/about" className="text-white/60 hover:text-primary transition-colors text-sm">
                        About Us
                     </Link>
                  </li>
                  <li>
                     <Link href="/our-services" className="text-white/60 hover:text-primary transition-colors text-sm">
                        Our Services
                     </Link>
                  </li>
                  <li>
                     <Link href="/contact" className="text-white/60 hover:text-primary transition-colors text-sm">
                        Contact
                     </Link>
                  </li>
               </ul>
            </div>

            <div>
               <h3 className="text-white text-sm font-semibold tracking-wider uppercase mb-6">Contact Info</h3>
               <ul className="flex flex-col gap-4">
                  <li className="flex items-start gap-3 text-white/60 text-sm">
                     <MapPin className="w-5 h-5 text-primary shrink-0" />
                     <span>SP-07, Sector 116 Noida <br /> C-222, Civil wings, Tis Hazari Courts Delhi-54</span>
                  </li>
                  <li className="flex items-center gap-3 text-white/60 text-sm">
                     <Phone className="w-5 h-5 text-primary shrink-0" />
                     <span>+91 74994 43178</span>
                  </li>
                  <li className="flex items-center gap-3 text-white/60 text-sm">
                     <Mail className="w-5 h-5 text-primary shrink-0" />
                     <span>beyondlitigation@gmail.com</span>
                  </li>
               </ul>
            </div>
         </div>

         <div className="mx-auto max-w-7xl px-4 md:px-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/50 text-xs tracking-wider uppercase">
               Copyright &copy; {new Date().getFullYear()} Beyond Litigation. All rights reserved.
            </p>
            <a href="https://webtechware.in" target="_blank" rel="noopener noreferrer">
               <p className="text-white/50 text-xs tracking-wider uppercase hover:text-primary transition-colors">
                  Designed and developed by WebTechWare
               </p>
            </a>
         </div>
      </footer>
   );
}
