"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);


export function GsapReveal({ children, y = 28, delay = 0, duration = 0.9, className, as: Tag = "div", stagger }) {
  const ref = useRef(null);
  useGSAP(() => {
    const el = ref.current;
    if (!el) return;
    const targets = stagger ? gsap.utils.toArray(el.children) : [el];
    gsap.fromTo(targets, { opacity: 0, y }, { opacity: 1, y: 0, duration, delay, ease: "power3.out", stagger: stagger ?? 0, scrollTrigger: { trigger: el, start: "top 85%", once: true } });
  }, { scope: ref });
  return <Tag ref={ref} className={className}>{children}</Tag>;
}