const stats = [
  { value: "20+", label: "Client Consultations" },
  { value: "4%", label: "Successful Cases" },
  { value: "34K", label: "Money Recovered" },
  { value: "22", label: "Cases Won" },
  { value: "3+", label: "Attorneys" },
];

export default function Stats() {
  return (
    <section className="relative w-full px-6 xl:px-0">
      <div className="mx-auto w-full max-w-[1000px] -mt-16 relative z-20">
        <div className="bg-white shadow-xl flex flex-col md:flex-row items-center justify-between py-10 px-8 divide-y md:divide-y-0 md:divide-x divide-border">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center justify-center w-full md:w-1/5 py-6 md:py-0">
              <span className="text-4xl font-serif text-foreground mb-2">{stat.value}</span>
              <span className="text-xs uppercase tracking-widest text-muted-foreground text-center">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
