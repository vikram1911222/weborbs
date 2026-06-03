"use client";

import { React, useEffect, useState } from "react";
// import { Star } from "lucide-react";  // not needed for new section
// import Image from "next/image";       // not needed for new section
import dynamic from 'next/dynamic';

const SplashCursor = dynamic(() => import('./SplashCursor'), {
  ssr: false,
  loading: () => null
});

// ── Testimonials commented out — restore when real reviews are ready ──────────
// const testimonials = [
//   {
//     quote: "They delivered exactly what we needed on time and under budget. The code quality is exceptional.",
//     name: "Alisha Singh",
//     role: "CEO, TechVenture Inc",
//     image: "/images/women.avif",
//     company: "Vooklu",
//   },
//   {
//     quote: "The team understood our vision immediately and brought it to life with precision and creativity.",
//     name: "Rohit Rawat",
//     role: "Founder, Digital Innovations",
//     image: "/images/men1.avif",
//     company: "Vooklu",
//   },
//   {
//     quote: "Professional, responsive, and genuinely invested in our success. Highly recommended.",
//     name: "Manish Pawar",
//     role: "Product Manager, Growth Labs",
//     image: "/images/men2.avif",
//     company: "Vooklu",
//   },
// ];
// ─────────────────────────────────────────────────────────────────────────────

const stats = [
  {
    value: "2x",
    label: "In-House. No Outsourcing.",
    sub: "Every line of code is written by us, not a third party you've never met.",
  },
  {
    value: "100%",
    label: "Projects Delivered On Time",
    sub: "We don't miss deadlines. It's not negotiable.",
  },
  {
    value: "₹0",
    label: "Hidden Charges. Ever.",
    sub: "What we quote is what you pay. Full stop.",
  },
  {
    value: "∞",
    label: "Support After Launch",
    sub: "We stay on. Questions, fixes, updates, we're here.",
  },
];

export default function ClientVoice() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 1024);
  }, []);

  return (
    <div
      id="testimonials"
      className="relative bg-[#111] text-white py-24 px-4 md:px-8 lg:px-16 overflow-hidden"
    >
      {/* Mouse cursor effect — kept as-is */}
      {isDesktop && <SplashCursor />}

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Section label */}
        <p className="text-xs font-bold tracking-[0.2em] uppercase text-bigchill mb-6">
          Our Promise
        </p>

        {/* Main statement */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.15] max-w-3xl mb-6">
          Every project we take gets our{" "}
          <span className="text-bigchill">complete focus.</span>
        </h2>

        <p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed mb-20">
          No junior handoffs, no outsourcing, no cutting corners. You work
          directly with the people building your product, start to finish.
        </p>

        {/* Divider */}
        <div
          className="w-full h-px mb-16"
          style={{
            background:
              "linear-gradient(90deg, rgba(14,165,164,0.5), rgba(255,255,255,0.05), transparent)",
          }}
        />

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col gap-3">
              {/* Value */}
              <p
                className="text-5xl font-extrabold tracking-tight text-white"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {stat.value}
              </p>

              {/* Teal divider */}
              <div
                className="w-8 h-0.5 rounded-full"
                style={{ background: "#0ea5a4" }}
              />

              {/* Label */}
              <p className="text-base font-semibold text-white leading-snug">
                {stat.label}
              </p>

              {/* Sub */}
              <p className="text-sm text-gray-500 leading-relaxed">
                {stat.sub}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Original testimonials grid — commented out, restore when ready ─────
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="flex flex-col h-full justify-between">
            <div>
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-white text-white" />
                ))}
              </div>
              <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8">
                "{testimonial.quote}"
              </blockquote>
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover bg-gray-700"
                  style={{ width: '48px', height: '48px' }}
                  loading="lazy"
                />
                <div>
                  <h3 className="font-semibold text-white">{testimonial.name}</h3>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-white font-bold text-lg">
                <svg width="24" height="15" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white fill-current">
                  <path d="M7.5 15L4.5 5.5L1.5 15H0L4 2.5L7.5 12.5L11 2.5L14.5 12.5L18 2.5L22 15H20.5L17.5 5.5L14.5 15L11 5.5L7.5 15Z" />
                </svg>
                <span>{testimonial.company}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      ───────────────────────────────────────────────────────────────────────── */}
    </div>
  );
}