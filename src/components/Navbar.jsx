import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { Menu, Wrench } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Navbar() {
   const routes = [
      { label: "Home", path: "/" },
      { label: "About Us", path: "/aboutus" },
      { label: "Services", path: "/ourservice" },
      { label: "Contact", path: "/contactus" },
   ];

   return (
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
         <div className="container flex h-16 max-w-7xl mx-auto items-center justify-between px-4">
            <Link href="/" className="flex items-center space-x-2">
               <img src="/" alt="Beyond Litigation" className="h-10 w-auto" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-6 items-center">
               {routes.map((route) => (
                  <Link
                     key={route.path}
                     href={route.path}
                     className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                  >
                     {route.label}
                  </Link>
               ))}
               <Link href="/contact" className={buttonVariants({ className: "ml-4 bg-primary text-primary-foreground hover:bg-primary/90" })}>
                  Get a Quote
               </Link>
            </nav>

            {/* Mobile Navigation */}
            <div className="flex md:hidden items-center gap-4">
               <Sheet>
                  <SheetTrigger render={<Button variant="outline" size="icon" className="h-9 w-9" />}>
                     <Menu className="h-5 w-5" />
                     <span className="sr-only">Toggle menu</span>
                  </SheetTrigger>
                  <SheetContent side="right">
                     <nav className="flex flex-col gap-4 mt-8">
                        {routes.map((route) => (
                           <Link
                              key={route.path}
                              href={route.path}
                              className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                           >
                              {route.label}
                           </Link>
                        ))}
                        <Link href="/contact" className={buttonVariants({ className: "mt-4" })}>
                           Get a Quote
                        </Link>
                     </nav>
                  </SheetContent>
               </Sheet>
            </div>
         </div>
      </header>
   );
}
