import Link from "next/link";
import { ArrowLeft, CheckCircle2, ChevronRight, FileText, Scale } from "lucide-react";
import ContactCTA from "@/components/ContactCTA";
import ServicePageHero from "@/components/ServicePage";

const practicesData = {
   "litigation": {
      title: "Litigation",
      description: "We provide comprehensive legal assistance and representation in a broad range of litigation matters, helping clients navigate disputes and legal proceedings with a focused and structured approach.",
      overview: "Our litigation practice is built on a foundation of rigorous preparation, strategic thinking, and relentless advocacy. We understand that litigation can be a challenging and complex process, which is why we work closely with our clients to develop tailored strategies that align with their goals and objectives.",
      procedure: [
         "Initial Consultation & Case Evaluation",
         "Filing Pleadings & Pre-Trial Motions",
         "Discovery & Evidence Gathering",
         "Trial Preparation & Strategy",
         "Court Representation & Advocacy",
         "Post-Trial & Appeals (if necessary)"
      ],
      services: [
         "Civil Litigation",
         "Criminal Litigation",
         "Matrimonial Matters",
         "Real Estate & Commercial Disputes",
         "Freight Forwarding & Customs Clearance",
      ],
      methods: "We employ a combination of aggressive courtroom representation and strategic negotiation to achieve the best possible outcomes for our clients. Our approach is always client-centered, ensuring that you are informed and involved at every step of the process."
   },
   "arbitration-mediation": {
      title: "Arbitration & Mediation",
      description: "We assist clients in resolving disputes through arbitration and mediation, providing legal support throughout the dispute-resolution process.",
      overview: "Alternative Dispute Resolution (ADR) offers a more efficient, cost-effective, and private way to resolve conflicts outside of traditional court proceedings. Our team is highly experienced in guiding clients through both arbitration and mediation to reach amicable and binding resolutions.",
      procedure: [
         "Assessment of ADR Suitability",
         "Selection of Arbitrator or Mediator",
         "Preparation of Statement of Claims/Defenses",
         "Conducting Hearings & Negotiations",
         "Drafting Settlement Agreements",
         "Enforcement of Arbitral Awards"
      ],
      services: [
         "Arbitration",
         "Mediation",
         "Alternative Dispute Resolution",
      ],
      methods: "Our approach to ADR focuses on preserving relationships and minimizing business disruptions while fiercely protecting our clients' interests. We combine persuasive advocacy with skilled negotiation techniques."
   },
   "legal-liaisoning": {
      title: "Legal & Liaisoning",
      description: "We provide legal and liaisoning assistance for clients requiring professional coordination and support in connection with their legal and related requirements.",
      overview: "Navigating regulatory frameworks and administrative procedures requires expertise and strong relationships. We act as a bridge between our clients and various governmental or regulatory bodies, ensuring smooth processing and compliance.",
      procedure: [
         "Requirement Analysis & Strategy Formulation",
         "Preparation of Documentation & Applications",
         "Submission to Relevant Authorities",
         "Follow-ups and Coordination",
         "Addressing Queries/Objections",
         "Obtaining Final Approvals/Clearances"
      ],
      services: [
         "Legal Assistance",
         "Liaisoning Services",
         "Legal Coordination",
      ],
      methods: "We utilize our extensive network and deep understanding of administrative processes to expedite matters. Our proactive approach ensures that potential hurdles are identified and addressed before they become significant issues."
   },
   "corporate-education-legal": {
      title: "Corporate & Education Legal",
      description: "We provide legal assistance to businesses and educational institutions in relation to their legal, corporate, regulatory and institutional requirements.",
      overview: "We offer comprehensive legal support to corporate entities and educational institutions, helping them navigate complex regulatory landscapes, ensure compliance, and manage institutional risks effectively.",
      procedure: [
         "Legal Audit & Compliance Check",
         "Drafting & Reviewing Policies/Contracts",
         "Regulatory Filings & Registrations",
         "Advising on Governance & Structuring",
         "Handling Institutional Disputes",
         "Ongoing Legal Advisory"
      ],
      services: [
         "Corporate Legal Matters",
         "Education Legal Matters",
         "Financial & Regulatory Matters",
      ],
      methods: "Our advisory services are practical and business-oriented. We partner with management teams and educational boards to implement proactive legal strategies that foster growth and minimize liability."
   },
   "succession": {
      title: "Succession",
      description: "We assist clients with succession-related legal matters and the legal requirements involved in succession and transfer of rights and interests.",
      overview: "Proper succession planning is crucial for the seamless transfer of assets and leadership. We provide sensitive, confidential, and comprehensive legal advice to families and businesses navigating succession matters.",
      procedure: [
         "Understanding Family/Business Dynamics",
         "Identifying Assets and Liabilities",
         "Structuring the Succession Plan",
         "Drafting Necessary Legal Instruments",
         "Execution and Registration of Documents",
         "Facilitating the Transfer of Rights"
      ],
      services: [
         "Succession Matters",
         "Succession-related Legal Assistance",
      ],
      methods: "We combine our knowledge of property law, family law, and corporate law to create robust succession plans. Our goal is to prevent future disputes and ensure our clients' wishes are honored."
   },
   "wills-probate": {
      title: "Wills & Probate",
      description: "We provide legal assistance concerning wills and probate matters, helping clients navigate the legal requirements associated with estates and succession.",
      overview: "Dealing with the estate of a loved one can be emotionally and legally taxing. We guide executors, administrators, and beneficiaries through the entire process of drafting wills and obtaining probate or letters of administration.",
      procedure: [
         "Drafting and Registration of Wills",
         "Filing Petition for Probate/Letters of Administration",
         "Publication of Citations",
         "Handling Objections (if any)",
         "Obtaining the Court Grant",
         "Distribution of Estate Assets"
      ],
      services: [
         "Wills",
         "Probate Matters",
         "Estate-related Legal Assistance",
      ],
      methods: "Our approach is compassionate yet meticulous. We ensure all legal formalities are strictly adhered to, minimizing delays and mitigating the risk of challenges to the estate."
   },
   "intellectual-property-rights": {
      title: "Intellectual Property Rights",
      description: "We provide legal assistance in matters concerning Intellectual Property Rights and the legal protection and handling of intellectual property.",
      overview: "In today's knowledge economy, protecting your intellectual property is paramount. We assist creators, innovators, and businesses in safeguarding their trademarks, copyrights, patents, and designs.",
      procedure: [
         "IP Search & Feasibility Analysis",
         "Filing Applications (Trademarks, Copyrights, etc.)",
         "Responding to Examination Reports",
         "Handling Oppositions and Hearings",
         "IP Registration & Maintenance",
         "Enforcement & Infringement Litigation"
      ],
      services: [
         "Intellectual Property Rights",
         "IPR-related Legal Assistance",
      ],
      methods: "We offer end-to-end IP services, from proactive registration strategies to aggressive enforcement against infringement. We help clients maximize the value of their intangible assets."
   }
};

export default async function ServiceDetailsPage({ params }) {
   const { slug } = await params;
   const service = practicesData[slug];

   if (!service) {
      return (
         <div className="min-h-screen flex items-center justify-center bg-background">
            <div className="text-center">
               <h1 className="text-4xl font-serif mb-4">Service Not Found</h1>
               <Link href="/our-services" className="text-primary hover:underline">
                  Return to Our Services
               </Link>
            </div>
         </div>
      );
   }

   return (
      <main className="w-full bg-background">
         <ServicePageHero title={service.title} />
         <div className="mx-auto max-w-7xl px-4 md:px-16 pt-10">

            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
               <Link href="/" className="hover:text-primary transition-colors">Home</Link>
               <ChevronRight className="w-4 h-4" />
               <Link href="/our-services" className="hover:text-primary transition-colors">Our Services</Link>
               <ChevronRight className="w-4 h-4" />
               <span className="text-foreground">{service.title}</span>
            </div>
            {/* Header */}
            <div className="mb-16">
               <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground mb-6">
                  {service.title}
               </h1>
               <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
                  {service.description}
               </p>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">

               {/* Main Content */}
               <div className="lg:col-span-2 space-y-12">

                  {/* Overview */}
                  <section>
                     <div className="flex items-center gap-3 mb-6">
                        <Scale className="w-6 h-6 text-primary" />
                        <h2 className="text-2xl font-serif">Overview</h2>
                     </div>
                     <p className="text-muted-foreground leading-relaxed">
                        {service.overview}
                     </p>
                  </section>

                  {/* Methods */}
                  <section>
                     <div className="flex items-center gap-3 mb-6">
                        <FileText className="w-6 h-6 text-primary" />
                        <h2 className="text-2xl font-serif">Our Approach & Methods</h2>
                     </div>
                     <p className="text-muted-foreground leading-relaxed">
                        {service.methods}
                     </p>
                  </section>

                  {/* Procedure */}
                  <section>
                     <h2 className="text-2xl font-serif mb-6">Standard Procedure</h2>
                     <div className="bg-white/5 border border-border rounded-xl p-8">
                        <ul className="space-y-6">
                           {service.procedure.map((step, index) => (
                              <li key={index} className="flex items-start gap-4">
                                 <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                                    {index + 1}
                                 </div>
                                 <div className="pt-1 text-foreground">
                                    {step}
                                 </div>
                              </li>
                           ))}
                        </ul>
                     </div>
                  </section>
               </div>

               {/* Sidebar */}
               <div className="lg:col-span-1">
                  <div className="sticky top-32 bg-white/5 border border-border rounded-xl p-8">
                     <h3 className="text-xl font-serif mb-6 border-b border-border pb-4">
                        Areas Covered
                     </h3>
                     <ul className="space-y-4">
                        {service.services.map((item, index) => (
                           <li key={index} className="flex items-start gap-3">
                              <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                              <span className="text-muted-foreground text-sm leading-relaxed">{item}</span>
                           </li>
                        ))}
                     </ul>

                     <div className="mt-10 pt-8 border-t border-border">
                        <h4 className="text-lg font-serif mb-4">Need Legal Assistance?</h4>
                        <p className="text-sm text-muted-foreground mb-6">
                           Contact our experienced team to discuss your specific requirements.
                        </p>
                        <Link
                           href="/contact"
                           className="flex items-center justify-center w-full bg-primary text-primary-foreground py-3 px-4 rounded font-semibold text-sm hover:bg-primary/90 transition-colors uppercase tracking-wider"
                        >
                           Schedule Consultation
                        </Link>
                     </div>
                  </div>
               </div>

            </div>
         </div>
         <ContactCTA />
      </main>
   );
}
