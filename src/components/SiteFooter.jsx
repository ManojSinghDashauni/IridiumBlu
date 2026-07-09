import Link from "next/link";
import { PROPERTY } from "@/lib/seo/structured-data";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="font-display text-2xl">Iridium<span className="text-primary"> Blu</span></div>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">A boutique Himalayan stay.</p>
        </div>
        <FooterCol title="Stay"><FooterLink href="/hotels">Rooms & Suites</FooterLink><FooterLink href="/itineraries">Itineraries</FooterLink><FooterLink href="/dining">Dining</FooterLink><FooterLink href="/events">Events</FooterLink></FooterCol>
        <FooterCol title="Explore"><FooterLink href="/things-to-do">Things to Do</FooterLink><FooterLink href="/about">About</FooterLink><FooterLink href="/contact">Contact</FooterLink></FooterCol>
        <FooterCol title="Reach us">
          <p className="text-sm text-muted-foreground">{PROPERTY.address.streetAddress}<br />{PROPERTY.address.addressLocality}, {PROPERTY.address.addressRegion} {PROPERTY.address.postalCode}</p>
          <p className="mt-3 text-sm text-muted-foreground"><a href={`tel:${PROPERTY.telephone}`}>{PROPERTY.telephone}</a><br /><a href={`tel:${PROPERTY.telephone2}`}>{PROPERTY.telephone2}</a><br /><a href={`mailto:${PROPERTY.email}`}>{PROPERTY.email}</a></p>
        </FooterCol>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }) { return <div><h4 className="font-display text-base text-foreground mb-3">{title}</h4><ul className="flex flex-col gap-2">{children}</ul></div>; }
function FooterLink({ href, children }) { return <li><Link href={href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{children}</Link></li>; }