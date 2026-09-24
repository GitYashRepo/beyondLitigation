"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
   const [isOpen, setIsOpen] = useState(false);

   const routes = [
      { label: "Home", path: "/" },
      { label: "About", path: "/about" },
      { label: "Our Services", path: "/our-services" },
      { label: "Contact", path: "/contact" },
   ];

   return (
      <header className="absolute top-0 left-0 right-0 z-50 w-full pt-6">
         <div className="mx-auto flex w-full items-center justify-between px-16">
            <Link href="/" className="flex items-center">
               <img src="/logo.png" alt="Law Firm" className="h-10 w-auto rounded-md" />
               <p className="text-white text-lg font-semibold pl-4">BEYOND LITIGATION</p>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
               {routes.map((route) => (
                  <Link
                     key={route.path}
                     href={route.path}
                     className="text-[13px] font-medium tracking-wide text-white uppercase hover:text-primary transition-colors"
                  >
                     {route.label}
                  </Link>
               ))}
               <Link
                  href="/contact"
                  className="ml-4 bg-primary text-primary-foreground px-6 py-3 text-[12px] font-semibold tracking-wider uppercase transition-colors hover:bg-primary/90"
               >
                  Free Evaluation
               </Link>
            </nav>

            {/* Mobile Menu Toggle */}
            <button
               className="md:hidden text-white"
               onClick={() => setIsOpen(!isOpen)}
            >
               {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
         </div>

         {/* Mobile Navigation */}
         {isOpen && (
            <div className="absolute top-full left-0 w-full bg-[#050505] p-6 shadow-xl md:hidden">
               <nav className="flex flex-col gap-6">
                  {routes.map((route) => (
                     <Link
                        key={route.path}
                        href={route.path}
                        onClick={() => setIsOpen(false)}
                        className="text-sm font-medium tracking-wide text-white uppercase hover:text-primary transition-colors"
                     >
                        {route.label}
                     </Link>
                  ))}
                  <Link
                     href="/contact"
                     onClick={() => setIsOpen(false)}
                     className="inline-block bg-primary text-primary-foreground px-6 py-3 text-center text-[12px] font-semibold tracking-wider uppercase"
                  >
                     Free Evaluation
                  </Link>
               </nav>
            </div>
         )}
      </header>
   );
}
