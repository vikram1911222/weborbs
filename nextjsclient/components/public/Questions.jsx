"use client";

import React from "react";
import {
  ChartSpline,
  LifeBuoy,
  Sliders,
  ArrowUpZA,
  Briefcase,
  Layers,
  ArrowRight,
} from "lucide-react";

const questions = [
  {
    icon: <ChartSpline className="w-8 h-8" />,
    title: "How long does a project take?",
    description:
      "Static websites are delivered in 3–7 days. Business management systems take 2–4 weeks. Custom projects are scoped before we start, so you always know the timeline upfront.",
  },
  {
    icon: <LifeBuoy className="w-8 h-8" />,
    title: "Will there be hidden costs?",
    description:
      "Never. We agree on a fixed price before work begins. What we quote is what you pay, no surprise invoices. If you request changes outside the agreed scope, we'll always discuss the cost before doing anything.",
  },
  {
    icon: <Layers className="w-8 h-8" />,
    title: "Do you work with businesses outside India?",
    description:
      "Yes. We work with clients remotely from anywhere in the world. Everything is handled online - calls, updates, delivery. Location has never been a barrier for us.",
  },

  {
    icon: <Sliders className="w-8 h-8" />,
    title: "Do I need to be technical to work with you?",
    description:
      "Not at all. We handle everything and explain things in plain language. You don't need to know what code is, you just need to know what you want your business to do.",
  },
  {
    icon: <ArrowUpZA className="w-8 h-8" />,
    title: "What happens after my website launches?",
    description:
      "We stay on. Free support after launch is included. Updates, fixes, questions, just message us. After the free support period ends, you can hire us for monthly maintenance and support.",
  },
  {
    icon: <Briefcase className="w-8 h-8" />,
    title: "How do we get started?",
    description:
      "Book a free 10-minute call. We listen, ask the right questions, and tell you exactly what we'd build and what it would cost. No commitment required.",
  },

];

export default function Questions({ openModal }) {
  return (
    <section
      id="contact"
      className="relative pt-15 pb-20 bg-bigchill/5 overflow-hidden border-t-1"
      style={{ borderColor: "#7C3AED" }}
    >

      <div className="relative container mx-auto px-6 z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about working with us.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {questions.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group"
            >
              <div className="mb-6 p-4 rounded-2xl bg-gray-50 text-gray-900 ring-1 ring-gray-900/5 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-25 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Still have questions?
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            Reach out directly and we'll answer anything.
          </p>
          <button
            onClick={openModal}
            className="px-8 py-4 bg-bigchill text-white text-lg font-semibold rounded-lg hover:brightness-110 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 inline-flex items-center gap-2 group cursor-pointer"
          >
            Book a Free Call
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
