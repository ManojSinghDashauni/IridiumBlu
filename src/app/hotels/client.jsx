"use client";
import { useState, useMemo } from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { RoomCard } from "@/components/RoomCard";
import { GsapReveal } from "@/components/GsapReveal";
import { rooms } from "@/lib/data/site";
import { cn } from "@/lib/utils";

const VIEWS = ["All", "Valley", "Forest", "Mountain", "Garden"];

export function HotelsClient() {
  const [view, setView] = useState("All");
  const filtered = useMemo(() => (view === "All" ? rooms : rooms.filter((r) => r.view === view)), [view]);

  return (
    <>
      <section className="pt-32 pb-12 mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="Stay" title="Six rooms. One philosophy." />
      </section>
      <section className="mx-auto max-w-7xl px-6 mb-8">
        <div className="flex flex-wrap gap-2">
          {VIEWS.map((v) => (
            <button key={v} onClick={() => setView(v)} className={cn("px-4 py-2 rounded-full text-sm border transition-colors", v === view ? "bg-primary text-primary-foreground border-primary" : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/40")}>
              {v}
            </button>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <GsapReveal key={view} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
          {filtered.map((r) => <RoomCard key={r.id} room={r} />)}
        </GsapReveal>
      </section>
    </>
  );
}