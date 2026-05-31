import { Button } from "@/components/ui/button";
import Link from "next/link";

export function RoomCard({ room }) {
  return (
    <article className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-xl transition-all duration-500">
      <div className="aspect-[4/3] overflow-hidden"><img src={room.image} alt={room.name} loading="lazy" className="size-full object-cover group-hover:scale-105 transition-transform duration-700" /></div>
      <div className="p-6">
        <div className="flex items-baseline justify-between gap-4"><h3 className="font-display text-2xl text-foreground">{room.name}</h3><p className="text-sm text-muted-foreground whitespace-nowrap">{room.size}</p></div>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{room.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">{room.amenities.slice(0, 3).map((a) => <span key={a} className="text-xs px-2.5 py-1 rounded-full bg-accent text-accent-foreground">{a}</span>)}</div>
        <div className="mt-6 flex items-end justify-between">
          <div><p className="text-xs uppercase tracking-wider text-muted-foreground">From</p><p className="font-display text-2xl text-foreground">₹{room.pricePerNight.toLocaleString("en-IN")}<span className="text-sm text-muted-foreground font-sans"> /night</span></p></div>
          <Button asChild variant="outline" className="rounded-full"><Link href="/contact">Reserve</Link></Button>
        </div>
      </div>
    </article>
  );
}