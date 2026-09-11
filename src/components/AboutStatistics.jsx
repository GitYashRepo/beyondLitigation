const stats = [
  { value: "450+", label: "Client Consultations" },
  { value: "99%", label: "Successful Cases" },
  { value: "750K", label: "Money Recovered" },
  { value: "445", label: "Cases Won" },
  { value: "65+", label: "Attorneys" },
];

export default function AboutStatistics() {
  return (
    <section className="w-full bg-background pb-32">
      <div className="mx-auto w-full max-w-[1000px] px-6 xl:px-0">
        <div className="bg-[#000000] py-12 px-6 flex flex-col md:flex-row items-center justify-between divide-y md:divide-y-0 md:divide-x divide-[#ffffff]/10">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center justify-center w-full md:w-1/5 py-6 md:py-0">
              <span className="text-4xl font-serif text-[#E8C45F] mb-3">{stat.value}</span>
              <span className="text-[10px] uppercase tracking-widest text-white text-center">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
