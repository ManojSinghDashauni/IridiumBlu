import { cn } from "@/lib/utils";

export function SectionHeading({ eyebrow, title, description, align = "left", className }) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && <p className="text-xs uppercase tracking-[0.2em] text-primary mb-3">{eyebrow}</p>}
      <h2 className="font-display text-4xl md:text-5xl text-foreground leading-tight">{title}</h2>
      {description && <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">{description}</p>}
    </div>
  );
}