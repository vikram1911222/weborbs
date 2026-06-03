"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import HeroSection from "../components/public/HeroSection";
import Process from "../components/public/Process";
import Questions from "../components/public/Questions";
import Why from "../components/public/Why";
import ClientVoice from "../components/public/ClientVoice";
import WhatWeBuild from "@/components/public/WhatWeBuild";

const BookingModal = dynamic(() => import("../components/public/BookingModal"), { ssr: false });

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How long does a project take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Static websites are delivered in 3–7 days. Business management systems take 2–4 weeks. Custom projects are scoped before we start, so you always know the timeline upfront."
      }
    },
    {
      "@type": "Question",
      "name": "Will there be hidden costs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Never. We agree on a fixed price before work begins. What we quote is what you pay — no surprise invoices. If you request changes outside the agreed scope, we'll always discuss the cost before doing anything."
      }
    },
    {
      "@type": "Question",
      "name": "Do you work with businesses outside India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We work with clients remotely from anywhere in the world. Everything is handled online — calls, updates, delivery. Location has never been a barrier for us."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need to be technical to work with you?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Not at all. We handle everything and explain things in plain language. You don't need to know what code is — you just need to know what you want your business to do."
      }
    },
    {
      "@type": "Question",
      "name": "What happens after my website launches?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We stay on. Free support after launch is included. Updates, fixes, questions — just message us. After the free support period ends, you can hire us for monthly maintenance and support."
      }
    },
    {
      "@type": "Question",
      "name": "How do we get started?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Book a free 10-minute call. We listen, ask the right questions, and tell you exactly what we'd build and what it would cost. No commitment required."
      }
    }
  ]
};

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <HeroSection openModal={openModal} />
      <WhatWeBuild />
      <Why />
      <Process />
      <ClientVoice />
      <Questions openModal={openModal} />

      <BookingModal isOpen={isModalOpen} onClose={closeModal} />
    </main>
  );
}
