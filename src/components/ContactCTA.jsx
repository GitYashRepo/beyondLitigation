export default function ContactCTA() {
  return (
    <section className="w-full bg-background pt-16 pb-24 border-b border-border/40">
      <div className="mx-auto flex w-full max-w-[1000px] flex-col text-center px-6 xl:px-0">
        
        {/* Heading */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6 leading-tight">
            Do You Need Legal<br />Help?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
          </p>
        </div>

        {/* Contact Info Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-border">
          
          <div className="flex flex-col items-center pt-8 md:pt-0">
            <h4 className="text-lg font-serif text-foreground mb-3">Give Us A Call</h4>
            <p className="text-muted-foreground font-medium">123 456 7890</p>
          </div>

          <div className="flex flex-col items-center pt-8 md:pt-0">
            <h4 className="text-lg font-serif text-foreground mb-3">Email Us At</h4>
            <p className="text-muted-foreground font-medium">contact@example.com</p>
          </div>

          <div className="flex flex-col items-center pt-8 md:pt-0">
            <h4 className="text-lg font-serif text-foreground mb-3">Visit Us At</h4>
            <p className="text-muted-foreground font-medium">5th Avenue, New York, NY</p>
          </div>

        </div>

      </div>
    </section>
  );
}
