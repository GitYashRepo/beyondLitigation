export default function ClientLogos() {
  return (
    <section className="w-full bg-background py-16 border-t border-border/50">
      <div className="mx-auto w-full max-w-[1200px] px-6 xl:px-0">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-12 md:gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-300">
          <img src="/images/client-logo-1.svg" alt="Client Logo 1" className="h-8 w-auto" />
          <img src="/images/client-logo-2.svg" alt="Client Logo 2" className="h-10 w-auto" />
          <img src="/images/client-logo-3.svg" alt="Client Logo 3" className="h-6 w-auto" />
          <img src="/images/client-logo-4.svg" alt="Client Logo 4" className="h-8 w-auto" />
        </div>
      </div>
    </section>
  );
}
