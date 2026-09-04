import Link from "next/link";
import { Wrench, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
   return (
      <footer className="bg-secondary/20 border-t mt-auto">
         <div className="mx-auto px-8 py-12 md:py-16">
            <div className="grid grid-cols-1 md:grid-cols-3">

               <div className="space-y-4 md:col-span-1 mr-8">
                  <Link href="/" className="flex items-center space-x-2">
                     <img src="/images/logonavssew.png" alt="SSEW Logo" className="h-12 w-auto" />
                  </Link>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                     We provide expert High Court Criminal & civil litigation services, drafting of legal documents & transaction management. Committed to social support with a focus on justice & client-centered solutions. Trusted legal guidance beyond the courtroom.
                  </p>
               </div>

               <div className="space-y-4 ml-20">
                  <h3 className="font-semibold text-foreground">Quick Links</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                     <li><Link href="/aboutus" className="hover:text-primary transition-colors">About Us</Link></li>
                     <li><Link href="/ourservice" className="hover:text-primary transition-colors">Our Services</Link></li>
                     <li><Link href="/contactus" className="hover:text-primary transition-colors">Contact</Link></li>
                  </ul>
               </div>

               <div className="w-full space-y-4">
                  <h3 className="font-semibold text-foreground">Contact Us</h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                     <li className="flex items-start gap-2">
                        <MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                        <span>Connaught Place, New Delhi, Delhi 110001, India</span>
                     </li>
                     <a href="tel:+917499443178" className="flex items-center gap-2">
                        <li className="flex items-center gap-2">
                           <Phone className="h-4 w-4 text-primary shrink-0" />
                           <span>+91 74994 43178</span>
                        </li>
                     </a>
                     <a href="mailto:beyondlitigation@gmail.com" className="flex items-center gap-2">
                        <li className="flex items-center gap-2">
                           <Mail className="h-4 w-4 text-primary shrink-0" />
                           <span>beyondlitigation@gmail.com</span>
                        </li>
                     </a>
                  </ul>
               </div>
            </div>

            <div className="border-t mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
               <p className="text-xs text-muted-foreground">
                  &copy; {new Date().getFullYear()} Beyond Litigation. All rights reserved.
               </p>
               <div className="flex gap-4 text-xs text-muted-foreground">
                  <Link href="#" className="hover:text-primary">Privacy Policy</Link>
                  <Link href="#" className="hover:text-primary">Terms of Service</Link>
               </div>
            </div>
         </div>
      </footer>
   );
}
