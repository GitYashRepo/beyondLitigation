export default function AboutFirm() {
   return (
      <section className="relative w-full bg-background pt-24 pb-32">
         <div className="mx-auto flex w-full flex-col md:flex-row px-16">

            {/* Left Content */}
            <div className="w-full md:w-1/2 md:pr-16 pt-12">
               <h2 className="text-4xl md:text-5xl font-serif text-foreground leading-[1.1] mb-6">
                  About The Firm
               </h2>
               <div className="w-12 h-0.5 bg-primary mb-8"></div>

               <p className="text-muted-foreground mb-6 leading-relaxed text-justify">
                  At Beyond Litigation, we believe that every legal matter deserves clarity, commitment, and the right legal approach. We provide comprehensive legal solutions across litigation, arbitration and mediation, legal and liaisoning, corporate and education legal matters. Our practice extends to civil and criminal matters, matrimonial disputes, real estate and commercial disputes, freight forwarding and customs clearance, financial and regulatory matters, succession, wills and probate, and intellectual property rights.
               </p>

               <p className="text-muted-foreground mb-6 leading-relaxed text-justify">
                  Our approach is simple — understand the matter, understand the client’s requirements, and provide focused legal assistance accordingly. Led by Advocate Divyansh Srivastava, Supreme Court of India, Beyond Litigation is committed to assisting individuals, businesses, and institutions with their diverse legal requirements. With our presence at Tis Hazari Courts, Delhi, and Noida, we aim to provide professional legal assistance with a clear and practical approach.
               </p>

               <div className="mt-8">
                  <p className="font-serif italic text-xl text-foreground mb-2">Mr. Divyansh Srivastava</p>
               </div>
            </div>

            {/* Right Image */}
            <div className="w-full md:w-1/2 mt-16 md:mt-0 relative z-10">
               <div className="relative w-full aspect-[3/4] md:aspect-auto md:h-[1000px] shadow-2xl -mt-32 md:-mt-48">
                  <img
                     src="/homepage/about.jpg"
                     alt="About The Firm"
                     className="w-full h-full object-cover object-center"
                  />
               </div>
            </div>

         </div>
      </section>
   );
}
