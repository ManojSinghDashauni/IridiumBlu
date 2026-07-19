export default function PolicyContact() {
    return (
      <section className="border-t border-border bg-card">
        <div className="mx-auto max-w-7xl px-6 py-20">
  
          <div className="overflow-hidden rounded-3xl border border-border bg-background">
  
            {/* Header */}
            <div className="border-b border-border px-8 py-6">
  
              <span className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                Contact Us
              </span>
  
              <h2 className="mt-3 font-display text-4xl">
                Need Help?
              </h2>
  
              <p className="mt-4 max-w-2xl leading-8 text-muted-foreground">
                If you have any questions regarding this policy or require
                assistance with your booking, our team is happy to help.
              </p>
  
            </div>
  
            {/* Contact Grid */}
            <div className="grid gap-8 p-8 md:grid-cols-2 lg:grid-cols-4">
  
              {/* Phone */}
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">
                  Phone
                </p>
  
                <a
                  href="tel:+917778883561"
                  className="mt-3 block font-medium hover:text-primary transition"
                >
                  +91 77788 83561
                </a>
  
                <a
                  href="tel:+917778883563"
                  className="mt-2 block font-medium hover:text-primary transition"
                >
                  +91 77788 83563
                </a>
              </div>
  
              {/* Email */}
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">
                  Email
                </p>
  
                <a
                  href="mailto:resv@iridiumblu.com"
                  className="mt-3 block font-medium hover:text-primary transition break-all"
                >
                  resv@iridiumblu.com
                </a>
              </div>
  
              {/* Address */}
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">
                  Address
                </p>
  
                <p className="mt-3 leading-7 text-muted-foreground">
                  Kainchi Dham
                  <br />
                  District Nainital
                  <br />
                  Uttarakhand, India
                </p>
              </div>
  
              {/* Website */}
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">
                  Website
                </p>
  
                <a
                  href="https://iridiumblu.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 block font-medium hover:text-primary transition"
                >
                  www.iridiumblu.com
                </a>
              </div>
  
            </div>
  
          </div>
  
        </div>
      </section>
    );
  }