"use client";

import React from "react";
import { ArrowRight, Code, Star, TrendingUp } from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";

const HeroGraphicsDesktop = dynamic(() => import("./HeroGraphicsDesktop"), {
  ssr: false,
});

// 1. Isolate the window check into its own component.
// This prevents the main Hero text from re-rendering on mobile devices.
const DesktopGraphicsWrapper = () => {
  const [shouldRender, setShouldRender] = React.useState(false);

  React.useEffect(() => {
    let timeoutId;

    const handleResize = () => {
      // Clear the previous timeout if the user is still resizing
      clearTimeout(timeoutId);
      // Wait 150ms after the resize stops before calculating
      timeoutId = setTimeout(() => {
        setShouldRender(window.innerWidth >= 768);
      }, 150);
    };

    // Run immediately on first load without the delay
    setShouldRender(window.innerWidth >= 768);

    window.addEventListener("resize", handleResize);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!shouldRender) return null;

  return <HeroGraphicsDesktop />;
};

const HeroSection = ({ openModal }) => {
  // 2. The main component is now free of state, 
  // meaning your LCP text paints instantly and stays stable.
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen overflow-hidden bg-bigchill/5 flex flex-col items-center justify-center pt-28 pb-12 px-4 md:px-8"
    >
      <div className="relative z-10 max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl mx-auto text-center space-y-5 px-4">
        <div className="flex items-center justify-center mb-2">
          <span className="px-3 py-1 text-sm font-medium text-bigchill-dark/102 bg-white rounded-full border border-bigchill/30 shadow-sm">
            Web Design & Development Studio
          </span>
        </div>

        <h1
          className="text-balance text-4xl md:text-5xl lg:text-5xl 2xl:text-6xl font-extrabold tracking-tight text-gray-900 leading-[1.1]"
          style={{
            textShadow:
              "0 0 40px rgba(255,255,255,1), 0 0 80px rgba(255,255,255,0.9)",
          }}
        >
          Websites That Win <br />
          <span className="text-bigchill">Before You Say a Word.</span>
        </h1>

        <p className="text-sm md:text-base font-medium text-bigchill-dark/110 tracking-wide">
          Professional website design & development for businesses built to grow.
        </p>

        <p className="text-balance text-lg text-gray-800 max-w-xl mx-auto leading-relaxed bg-white/35 backdrop-blur-sm px-5 py-3 rounded-xl shadow-sm">
          Your website is your first impression and first impressions decide
          everything. We build fast, Google-ready websites and business systems
          that make you look credible, rank on search, and turn visitors into
          paying customers. Built right, from day one.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/pricing"
            prefetch={false} // Prevents background downloading on mobile
            className="w-full sm:w-auto px-7 py-3.5 bg-bigchill text-white text-base font-semibold rounded-lg hover:bg-bigchill-dark hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 group"
          >
            See Our Packages
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/learn-more"
            prefetch={false} // Prevents background downloading on mobile
            className="w-full sm:w-auto px-7 py-3.5 bg-white text-gray-700 font-semibold rounded-lg border border-gray-200 hover:bg-gray-50 hover:border-bigchill/30 transition-all duration-200 flex items-center justify-center gap-2"
          >
            View Our Work
            <Code className="w-4 h-4 text-gray-500" />
          </Link>
        </div>

        <div
          onClick={openModal}
          className="text-sm font-medium text-gray-600 hover:text-bigchill transition-colors cursor-pointer pt-1"
        >
          Not sure yet? Book a free 10-minute call.
        </div>

        <div className="pt-2 pb-6 flex items-center justify-center gap-6 text-bigchill-dark">
          <div className="flex items-center gap-1.5">
            <Star className="w-4 h-4" />
            <span className="text-sm font-medium">20+ Projects Delivered</span>
          </div>
          <div className="border-r border-gray-300 h-4" />
          <div className="flex items-center gap-1.5">
            <TrendingUp className="w-4 h-4" />
            <span className="text-sm font-medium">SEO Built-In</span>
          </div>
        </div>
      </div>

      {/* 3. Drop in the isolated wrapper. Desktop works exactly as before. */}
      <DesktopGraphicsWrapper />
    </section>
  );
};

export default HeroSection;