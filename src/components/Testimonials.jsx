"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Quote, Star } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";

import { testimonials } from "../lib/data/site";

export default function Testimonials() {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="mx-auto max-w-5xl px-6 text-center">

        <p className="uppercase tracking-[0.35em] text-sm text-primary">
          Hear from our guests
        </p>

        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          className="mt-14 w-full"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.author}>
              <div className="flex flex-col items-center">

                <Quote className="mb-8 h-12 w-12 text-primary" />

                <div className="mb-8 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-primary text-primary"
                    />
                  ))}
                </div>

                <blockquote className="max-w-4xl text-2xl md:text-4xl italic leading-relaxed">
                  "{item.quote}"
                </blockquote>

                <h3 className="mt-10 text-xl font-semibold">
                  {item.author}
                </h3>

                <p className="mt-2 text-muted-foreground">
                  {item.location}
                </p>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}