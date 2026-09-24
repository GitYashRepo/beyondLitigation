export default function ContactCTA() {
   return (
      <section className="w-full bg-background pt-16 pb-24 border-b border-border/40">
         <div className="mx-auto flex w-full  flex-col text-center px-20">

            {/* Heading */}
            <div className="mb-16">
               <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6 leading-tight">
                  Do You Need Legal<br />Help?
               </h2>
               <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Whether you are facing a criminal charge, navigating a family dispute, buying or selling property, or seeking assistance with commercial legal matters — we are here to provide clear, strategic, and effective legal support.
               </p>
            </div>

            {/* Contact Info Columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-border">

               <div className="flex flex-col items-center pt-8 md:pt-0">
                  <h4 className="text-lg font-serif text-foreground mb-3">Give Us A Call</h4>
                  <a href="tel:+917499443178"><p className="text-muted-foreground font-medium">+91 74994 43178</p></a>
               </div>

               <div className="flex flex-col items-center pt-8 md:pt-0">
                  <h4 className="text-lg font-serif text-foreground mb-3">Email Us At</h4>
                  <a href="mailto:beyondlitigation@gmail.com"><p className="text-muted-foreground font-medium">beyondlitigation@gmail.com</p></a>
               </div>

               <div className="flex flex-col items-center pt-8 md:pt-0">
                  <h4 className="text-lg font-serif text-foreground mb-3">Visit Us At</h4>
                  <p className="text-muted-foreground font-medium">SP-07, Sector 116 Noida <br /> C-222, Civil wings, Tis Hazari Courts Delhi-54</p>
               </div>

            </div>

         </div>
      </section >
   );
}
