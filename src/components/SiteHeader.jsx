"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/hotels", label: "Rooms" },
  { href: "/dining", label: "Dining" },
  { href: "/events", label: "Events" },
  { href: "/things-to-do", label: "Things to Do" },
  { href: "/itineraries", label: "Itineraries" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 transition-all duration-300", scrolled ? "bg-background/85 backdrop-blur-md border-b border-border/60" : "bg-transparent")}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2 group" onClick={() => setOpen(false)}>
          <span className="font-display text-2xl tracking-tight text-foreground">Iridium<span className="text-primary"> Blu</span></span>
        </Link>
        <nav className="hidden lg:flex items-center gap-7">
          {NAV.slice(1, -1).map((item) => (
            <Link key={item.href} href={item.href} className={cn("text-sm transition-colors", pathname === item.href ? "text-foreground font-medium" : "text-foreground/75 hover:text-foreground")}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Button asChild className="hidden sm:inline-flex rounded-full px-6">
            <Link href="/contact">Reserve</Link>
          </Button>
          <button onClick={() => setOpen((v) => !v)} className="lg:hidden rounded-full p-2 text-foreground hover:bg-accent">
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border/60 bg-background/95 backdrop-blur-md">
          <nav className="mx-auto max-w-7xl px-6 py-4 flex flex-col gap-1">
            {NAV.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className={cn("px-3 py-2.5 rounded-md transition-colors", pathname === item.href ? "bg-accent text-foreground font-medium" : "text-foreground/80 hover:bg-accent hover:text-foreground")}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}