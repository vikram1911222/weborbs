"use client";

import React from "react";
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
        text: "Most businesses waste months juggling developers, designers, and agencies who blame each other when things go wrong. With Vooklu, there's one team, one point of contact, and one party that takes full responsibility — from the first line of code to long-term maintenance. You never have to chase anyone.",
        icon: ShieldCheck,
    },
    {
        id: 2,
        category: "Built to Be Found",
        question: "Will anyone actually find my website?",
        title: "We Get You Found — Not Just Built.",
        text: "A great website no one finds is a waste of money. Every product we build is SEO-engineered from the ground up — fast load times, clean structure, and optimised for Google from day one. Visibility isn't an add-on for us. It's built into everything we do.",
        icon: SearchCheck,
    },
    {
        id: 3,
        category: "Business-First Thinking",
        question: "Do they actually understand my business goals?",
        title: "We Think Like Business Owners.",
        text: "We don't ask 'how do we build this?' — we ask 'will this actually grow your business?' Every decision, every feature, every design choice is made with one goal: results that matter to you. Technology is just the tool. Your growth is the product.",
        icon: Briefcase,
    },
    {
        id: 4,
        category: "We Stay After Launch",
        question: "Will they disappear after I pay them?",
        title: "Most Agencies Disappear. We Don't.",
        text: "Delivery day isn't the end for us — it's the beginning. Updates, security patches, performance monitoring, new features — we stay on it so your product never goes stale, breaks down, or gets left behind. You'll always have someone to call.",
        icon: Clock,
    },
    {
        id: 5,
        category: "No Shortcuts on Quality",
        question: "Will they cut corners to save time?",
        title: "No Compromises. Ever.",
        text: "We don't cut corners to hit a deadline. Every project we ship is pixel-perfect, fast, and built to a standard we're proud to put our name on. If something isn't right, we fix it — no arguments, no extra invoices. That's just how we work.",
        icon: BadgeCheck,
    },
    {
        id: 6,
        category: "Your Peace of Mind",
        question: "How much of my time will this consume?",
        title: "You Run Your Business. We Own the Tech.",
        text: "Technical stress kills focus and slows growth. When you work with Vooklu, the entire tech side is handled — completely. No micromanaging developers, no chasing updates, no wondering what's broken at 2am. Just clarity, so you can do what you do best.",
        icon: BrainCircuit,
    },
];

// 1st (0), 3rd (2), 6th (5) get slightly lighter grey — rest pure black
const getCardBg = (idx) =>
    idx === 0 || idx === 2 || idx === 5 ? "#141414" : "#0c0c0c";

const WhyMobile = () => {
    return (
        <section className="w-full bg-bigchill/5 py-20 px-4 font-sans lg:hidden">

            {/* Section header */}
            <div className="text-center mb-10">
                <h2 className="text-4xl font-heading font-bold text-gray-900">
                    Why Vooklu?
                </h2>
                <p className="text-gray-600 mt-2 text-lg">
                    We're not just developers. We're your long-term digital partner.
                </p>
            </div>

            {/* Outer black container */}
            <div
                className="rounded-3xl overflow-hidden border border-white/10 flex flex-col gap-0.5"
                style={{ background: "#080808" }}
            >
                {reasons.map((reason, idx) => (
                    <div
                        key={reason.id}
                        className="relative px-6 py-7 overflow-hidden"
                        style={{ background: getCardBg(idx) }}
                    >
                        {/* Ghost number — more visible than before */}
                        <span
                            className="absolute bottom-3 right-4 text-[80px] font-heading font-bold select-none leading-none pointer-events-none"
                            style={{ color: "rgba(255,255,255,0.07)" }}
                        >
                            0{idx + 1}
                        </span>

                        {/* Hook question */}
                        <p
                            className="text-sm italic font-light mb-4 leading-relaxed tracking-wide"
                            style={{ color: "#0ea5a4" }}
                        >
                            "{reason.question}"
                        </p>

                        {/* Teal divider under question */}
                        <div
                            className="mb-5 h-px w-10"
                            style={{
                                background:
                                    "linear-gradient(90deg, #0ea5a4, transparent)",
                            }}
                        />

                        {/* Icon + Title on the same line */}
                        <div className="flex items-center gap-2.5 mb-4 relative z-10">
                            <reason.icon
                                size={22}
                                strokeWidth={1.8}
                                style={{ color: "#0ea5a4", flexShrink: 0 }}
                            />
                            <h3 className="text-xl font-heading font-bold text-white leading-tight">
                                {reason.title}
                            </h3>
                        </div>

                        {/* Body text */}
                        <p className="text-gray-400 text-[15px] leading-relaxed font-light relative z-10">
                            {reason.text}
                        </p>
                    </div>
                ))}

                {/* Teal glow bar at bottom — matches desktop */}
                <div className="h-[2px] w-full" style={{ background: "#111" }}>
                    <div
                        className="h-full w-full"
                        style={{
                            background: "#0ea5a4",
                            boxShadow: "0 0 12px #0EA5A4",
                        }}
                    />
                </div>
            </div>
        </section>
    );
};

export default WhyMobile;