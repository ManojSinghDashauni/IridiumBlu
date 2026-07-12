import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

import {GsapReveal} from "@/components/GsapReveal";
import {SectionHeading} from "@/components/SectionHeading";

export default function ContentSection({
  eyebrow,
  title,
  description,

  image,
  imageAlt,

  imagePosition = "left",

  background = "",
  sectionClassName = "",
  imageClassName = "w-full aspect-[4/5] object-cover rounded-lg",

  priority = false,

  listItems = [],

  children,

  buttonText,
  buttonLink,
}) {
  const imageSection = (
    <GsapReveal
      className={imagePosition === "right" ? "order-1 md:order-2" : ""}
    >
      <Image
        src={image}
        alt={imageAlt}
        width={800}
        height={1000}
        priority={priority}
        className={imageClassName}
      />
    </GsapReveal>
  );

  const contentSection = (
    <GsapReveal
      className={imagePosition === "right" ? "order-2 md:order-1" : ""}
    >
      <SectionHeading
        eyebrow={eyebrow}
        title={title}
        description={description}
      />

      {listItems.length > 0 && (
        <ul className="mt-6 grid gap-2 sm:grid-cols-2">
          {listItems.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 text-foreground/85"
            >
              <Check className="size-5 text-primary mt-0.5 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}

      {children}

      {buttonText && buttonLink && (
        <Button asChild className="mt-7 rounded-full px-6">
          <Link href={buttonLink}>{buttonText}</Link>
        </Button>
      )}
    </GsapReveal>
  );

  return (
    <section className={`${background} ${sectionClassName}`}>
      <div className="mx-auto max-w-7xl px-6 py-24 grid gap-12 md:grid-cols-2 items-center">
        {imagePosition === "left" ? (
          <>
            {imageSection}
            {contentSection}
          </>
        ) : (
          <>
            {contentSection}
            {imageSection}
          </>
        )}
      </div>
    </section>
  );
}