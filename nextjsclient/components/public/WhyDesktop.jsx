"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
  ShieldCheck,
  SearchCheck,
  Briefcase,
  Clock,
  BadgeCheck,
  BrainCircuit,
} from "lucide-react";

const reasons = [
  {
    id: 1,
    category: "Complete Ownership",
    question: "Will I have to manage multiple vendors?",
    title: "One Partner. Complete Ownership.",
    text: "Most businesses waste months juggling developers, designers, and agencies who blame each other when things go wrong. With Vooklu, there's one team, one point of contact, and one party that takes full responsibility, from the first line of code to long-term maintenance. You never have to chase anyone.",
    icon: ShieldCheck,
  },
  {
    id: 2,
    category: "Built to Be Found",
    question: "Will anyone actually find my website?",
    title: "We Get You Found — Not Just Built.",
    text: "A great website no one finds is a waste of money. Every product we build is SEO-engineered from the ground up, fast load times, clean structure, and optimised for Google from day one. Visibility isn't an add-on for us. It's built into everything we do.",
    icon: SearchCheck,
  },
  {
    id: 3,
    category: "Business-First Thinking",
    question: "Do they actually understand my business goals?",
    title: "We Think Like Business Owners.",
    text: "We don't ask 'how do we build this?', we ask 'will this actually grow your business?' Every decision, every feature, every design choice is made with one goal: results that matter to you. Technology is just the tool. Your growth is the product.",
    icon: Briefcase,
  },
  {
    id: 4,
    category: "We Stay After Launch",
    question: "Will they disappear after I pay them?",
    title: "Most Agencies Disappear. We Don't.",
    text: "Delivery day isn't the end for us, it's the beginning. Updates, security patches, performance monitoring, new features, we stay on it so your product never goes stale, breaks down, or gets left behind. You'll always have someone to call.",
    icon: Clock,
  },
  {
    id: 5,
    category: "No Shortcuts on Quality",
    question: "Will they cut corners to save time?",
    title: "No Compromises. Ever.",
    text: "We don't cut corners to hit a deadline. Every project we ship is pixel-perfect, fast, and built to a standard we're proud to put our name on. If something isn't right, we fix it, no arguments, no extra invoices. That's just how we work.",
    icon: BadgeCheck,
  },
  {
    id: 6,
    category: "Your Peace of Mind",
    question: "How much of my time will this consume?",
    title: "You Run Your Business. We Own the Tech.",
    text: "Technical stress kills focus and slows growth. When you work with Vooklu, the entire tech side is handled, completely. No micromanaging developers, no chasing updates, no wondering what's broken at 2am. Just clarity, so you can do what you do best.",
    icon: BrainCircuit,
  },
];

const Why = () => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress: entryProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"],
  });

  const { scrollYProgress: contentProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const handleMenuClick = (idx) => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const top = container.offsetTop;
    const scrollableDistance = container.offsetHeight - window.innerHeight;
    const targetScrollY =
      top + scrollableDistance * ((idx + 0.5) / reasons.length);
    window.scrollTo({ top: targetScrollY, behavior: "smooth" });
  };

  const scale = useTransform(entryProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(entryProgress, [0, 0.5], [0.5, 1]);

  const smoothProgress = useSpring(contentProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const unsubscribe = contentProgress.on("change", (latest) => {
      const index = Math.min(
        Math.floor(latest * reasons.length),
        reasons.length - 1
      );
      setActiveIndex(index);
    });
    return () => unsubscribe();
  }, [contentProgress]);

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-bigchill/5 font-sans"
    >
      {/* Desktop Sticky Scroll */}
      <div className="hidden lg:block h-[400vh]">
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden perspective-1000">

          <motion.div
            style={{ scale, opacity }}
            className="relative z-10 w-[90%] max-w-[1600px] h-[85vh] bg-[#0c0c0c] rounded-[40px] shadow-2xl border border-white/10 flex flex-col overflow-hidden"
          >
            {/* Mac window chrome */}
            <div className="h-14 border-b border-white/5 flex items-center px-6 gap-2 bg-white/[0.02] flex-shrink-0">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
              <div className="ml-4 text-xs font-mono text-gray-500">why us</div>
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col p-8 md:p-12 relative overflow-hidden">

              {/* Header row */}
              <div className="flex justify-between items-end mb-10 relative z-10 flex-shrink-0">
                <div>
                  <h2 className="text-4xl md:text-5xl font-heading font-bold text-white tracking-tight">
                    Why Vooklu?
                  </h2>
                  <p className="text-gray-400 mt-2 text-xl font-light">
                    We're not just developers. We're your long-term digital partner.
                  </p>
                </div>
                <div className="text-right">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-7xl font-heading font-bold text-white/10 select-none"
                  >
                    0{activeIndex + 1}
                  </motion.div>
                </div>
              </div>

              {/* Split layout */}
              <div className="flex-1 flex items-center justify-between gap-20 relative z-10 min-h-0">

                {/* Left — nav menu */}
                <div className="w-1/3 flex flex-col space-y-2 flex-shrink-0">
                  {reasons.map((reason, idx) => (
                    <div
                      key={reason.id}
                      onClick={() => handleMenuClick(idx)}
                      className={`text-lg font-medium transition-all duration-300 cursor-pointer flex items-center gap-4 py-1 ${idx === activeIndex
                        ? "text-white translate-x-2"
                        : "text-gray-600 hover:text-gray-400"
                        }`}
                    >
                      <div
                        className={`w-2 h-2 rounded-full flex-shrink-0 transition-all duration-300 ${idx === activeIndex
                          ? "bg-bigchill shadow-[0_0_8px_#0EA5A4]"
                          : "bg-gray-700"
                          }`}
                      />
                      {reason.category}
                    </div>
                  ))}
                </div>

                {/* Right — dynamic content */}
                <div className="flex-1 relative h-full flex items-center pb-8 min-w-0">
                  {reasons.map((reason, idx) => (
                    <motion.div
                      key={reason.id}
                      className="absolute inset-0 flex flex-col justify-center pl-10 border-l border-white/5"
                      initial={{ opacity: 0, x: 50, filter: "blur(10px)" }}
                      animate={{
                        opacity: idx === activeIndex ? 1 : 0,
                        x: idx === activeIndex ? 0 : 50,
                        filter:
                          idx === activeIndex ? "blur(0px)" : "blur(10px)",
                        pointerEvents: idx === activeIndex ? "auto" : "none",
                      }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                      {/* Hook question — small teal italic, above icon */}
                      <motion.p
                        key={`q-${reason.id}`}
                        initial={{ opacity: 0, y: -8 }}
                        animate={{
                          opacity: idx === activeIndex ? 1 : 0,
                          y: idx === activeIndex ? 0 : -8,
                        }}
                        transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
                        className="text-sm italic font-light mb-5 tracking-wide"
                        style={{ color: "#0ea5a4" }}
                      >
                        "{reason.question}"
                      </motion.p>

                      {/* Icon */}
                      <div className="mb-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-bigchill/20 to-teal-500/20 border border-bigchill/30 flex items-center justify-center text-bigchill flex-shrink-0">
                        <reason.icon size={32} strokeWidth={1.5} />
                      </div>

                      {/* Title — direct answer to the question */}
                      <h3 className="text-4xl md:text-4xl font-heading font-bold text-white mb-5 leading-tight">
                        {reason.title}
                      </h3>

                      {/* Body */}
                      <p className="text-lg md:text-l text-gray-300/90 leading-relaxed font-light max-w-2xl">
                        {reason.text}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Teal progress bar */}
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white/5">
                <motion.div
                  className="h-full bg-bigchill shadow-[0_0_15px_#0EA5A4]"
                  style={{ scaleX: smoothProgress, transformOrigin: "0%" }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mobile version */}

    </section>
  );
};

export default Why;