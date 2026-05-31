"use client";
import { useState } from "react";
import { Calendar as CalendarIcon, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { checkAvailability } from "@/lib/api/booking";
import { toast } from "sonner";

const today = () => new Date().toISOString().split("T")[0];
const tomorrow = () => { const d = new Date(); d.setDate(d.getDate() + 1); return d.toISOString().split("T")[0]; };

export function BookingWidget({ compact = false }) {
  const [checkIn, setCheckIn] = useState(today());
  const [checkOut, setCheckOut] = useState(tomorrow());
  const [guests, setGuests] = useState(2);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await checkAvailability({ checkIn, checkOut, guests });
      toast.success(`${res.availableRooms.length} rooms available.`);
    } catch { toast.error("Something went wrong."); } 
    finally { setLoading(false); }
  }

  return (
    <form onSubmit={onSubmit} className={`bg-card/95 backdrop-blur-md border border-border rounded-2xl p-6 shadow-2xl ${compact ? "" : "grid gap-4 md:grid-cols-4 md:items-end"}`}>
      <Field label="Check in" icon={<CalendarIcon className="size-4" />}><Input type="date" value={checkIn} min={today()} onChange={(e) => setCheckIn(e.target.value)} /></Field>
      <Field label="Check out" icon={<CalendarIcon className="size-4" />}><Input type="date" value={checkOut} min={checkIn} onChange={(e) => setCheckOut(e.target.value)} /></Field>
      <Field label="Guests" icon={<Users className="size-4" />}><Input type="number" min={1} max={10} value={guests} onChange={(e) => setGuests(Number(e.target.value))} /></Field>
      <Button type="submit" disabled={loading} className="h-10 rounded-full">{loading ? "Checking…" : "Check availability"}</Button>
    </form>
  );
}

function Field({ label, icon, children }) {
  return <div><Label className="text-xs uppercase tracking-wider text-muted-foreground flex items-center gap-1.5 mb-1.5">{icon}{label}</Label>{children}</div>;
}