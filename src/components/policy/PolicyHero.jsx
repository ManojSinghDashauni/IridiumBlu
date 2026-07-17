export default function PolicyHero({ policy }) {
    return (
      <section className="relative overflow-hidden border-b border-border bg-card">
  
        {/* Background Decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 via-transparent to-transparent" />
  
        <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 py-24 text-center">
  
          {/* Small Badge */}
          <span className="rounded-full border border-border bg-background px-4 py-1 text-xs font-medium uppercase tracking-[0.2em] text-primary">
            Legal Information
          </span>
  
          {/* Title */}
          <h1 className="mt-8 font-display text-5xl leading-tight text-foreground md:text-6xl lg:text-7xl">
            {policy.title}
          </h1>
  
          {/* Description */}
          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
            {policy.description}
          </p>
  
          {/* Dates */}
          <div className="mt-12 flex flex-wrap justify-center gap-8">
  
            <div className="rounded-xl border border-border bg-background px-6 py-4">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                Effective Date
              </p>
  
              <p className="mt-2 font-semibold">
                {policy.effectiveDate}
              </p>
            </div>
  
            <div className="rounded-xl border border-border bg-background px-6 py-4">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                Last Updated
              </p>
  
              <p className="mt-2 font-semibold">
                {policy.updated}
              </p>
            </div>
  
          </div>
  
        </div>
  
      </section>
    );
  }