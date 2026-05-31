"use client";
import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SectionHeading } from "@/components/SectionHeading";
import { GsapReveal } from "@/components/GsapReveal";
import { toast } from "sonner";
import { PROPERTY } from "@/lib/seo/structured-data";
import { faqs } from "@/lib/data/site";

export function ContactClient() {
  const [sending, setSending] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 700));
    setSending(false);
    (e.target).reset();
    toast.success("Thank you. We'll reply within a day.");
  }

  return (
    <>
      <section className="pt-32 pb-12 mx-auto max-w-4xl px-6 text-center">
        <SectionHeading eyebrow="Get in touch" title="We answer every enquiry, personally." align="center" />
      </section>
      <section className="mx-auto max-w-7xl px-6 pb-24 grid gap-12 lg:grid-cols-5">
        <GsapReveal className="lg:col-span-3">
          <form onSubmit={onSubmit} className="bg-card border border-border rounded-lg p-8 grid gap-5">
            <div className="grid gap-5 md:grid-cols-2">
              <div><Label>Name</Label><Input required name="name" className="mt-1.5" /></div>
              <div><Label>Email</Label><Input required type="email" name="email" className="mt-1.5" /></div>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              <div><Label>Phone</Label><Input name="phone" className="mt-1.5" /></div>
              <div><Label>Travel dates</Label><Input placeholder="e.g. 12–15 March" name="dates" className="mt-1.5" /></div>
            </div>
            <div><Label>Message</Label><Textarea required name="message" rows={5} className="mt-1.5" /></div>
            <Button type="submit" disabled={sending} className="rounded-full px-6 justify-self-start">{sending ? "Sending…" : "Send enquiry"}</Button>
          </form>
        </GsapReveal>
        <GsapReveal className="lg:col-span-2 space-y-6">
          <ContactRow icon={<MapPin className="size-4" />} title="Address">{PROPERTY.address.streetAddress}<br />{PROPERTY.address.addressLocality}, {PROPERTY.address.addressRegion} {PROPERTY.address.postalCode}</ContactRow>
          <ContactRow icon={<Phone className="size-4" />} title="Phone"><a href={`tel:${PROPERTY.telephone}`}>{PROPERTY.telephone}</a></ContactRow>
          <ContactRow icon={<Mail className="size-4" />} title="Email"><a href={`mailto:${PROPERTY.email}`}>{PROPERTY.email}</a></ContactRow>
        </GsapReveal>
      </section>
      <section className="mx-auto max-w-4xl px-6 pb-24">
        <SectionHeading eyebrow="FAQ" title="Good to know." align="center" />
        <div className="mt-10 grid gap-5">
          {faqs.map((f) => (
            <details key={f.question} className="group bg-card border border-border rounded-lg p-5">
              <summary className="cursor-pointer font-display text-lg flex justify-between">{f.question}</summary>
              <p className="mt-3 text-muted-foreground">{f.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}

function ContactRow({ icon, title, children }) {
  return (
    <div>
      <p className="flex items-center gap-2 text-xs uppercase text-primary mb-1">{icon} {title}</p>
      <p className="text-muted-foreground">{children}</p>
    </div>
  );
}