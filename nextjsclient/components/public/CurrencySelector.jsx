"use client";

/**
 * CurrencySelector
 *
 * Client Component — handles the country/currency switcher UI.
 * Saves the selection via POST /api/set-currency (sets a cookie),
 * then reloads the page so the Server Component re-renders with new pricing.
 *
 * Also renders the "Prices shown for <Country>" notice banner.
 */

import { useState, useTransition } from "react";
import { SUPPORTED_COUNTRIES } from "../../lib/pricing";

export default function CurrencySelector({ currentCountryCode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  const currentCountry = SUPPORTED_COUNTRIES[currentCountryCode] ?? SUPPORTED_COUNTRIES["US"];

  const handleSelect = (code) => {
    setIsOpen(false);
    startTransition(async () => {
      await fetch("/api/set-currency", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ country: code }),
      });

      localStorage.removeItem("vuglo_pricing");
      // Full page reload so the Server Component picks up the new cookie
      window.location.reload();
    });
  };

  return (
    <div className="flex flex-col items-center gap-3 mb-10">
      {/* Country notice banner */}
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-full shadow-sm text-sm text-slate-600">
        <span className="text-base">{currentCountry.flag}</span>
        <span>
          Prices shown for{" "}
          <span className="font-semibold text-slate-800">{currentCountry.name}</span>
          {" "}
          <span className="text-slate-400">({currentCountry.currency})</span>
        </span>
        <span className="mx-1 text-slate-300">·</span>

        {/* Selector trigger */}
        <div className="relative">
          <button
            onClick={() => setIsOpen((v) => !v)}
            disabled={isPending}
            aria-label="Change country"
            className="text-[var(--color-bigchill)] font-medium hover:underline focus:outline-none disabled:opacity-50 flex items-center gap-1"
          >
            {isPending ? (
              <span className="flex items-center gap-1">
                <svg className="animate-spin h-3 w-3" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                </svg>
                Updating…
              </span>
            ) : (
              <>
                Change
                <svg
                  className={`w-3 h-3 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </>
            )}
          </button>

          {isOpen && (
            <>
              {/* Backdrop to close on outside click */}
              <div
                className="fixed inset-0 z-10"
                onClick={() => setIsOpen(false)}
                aria-hidden="true"
              />
              <div className="absolute right-0 top-8 z-20 w-56 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
                <div className="px-3 pt-2.5 pb-1.5 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  Select your region
                </div>
                <ul className="py-1 max-h-64 overflow-y-auto">
                  {Object.values(SUPPORTED_COUNTRIES).map((country) => (
                    <li key={country.code}>
                      <button
                        onClick={() => handleSelect(country.code)}
                        className={`w-full text-left px-3 py-2 flex items-center gap-2.5 text-sm transition-colors hover:bg-slate-50 ${country.code === currentCountryCode
                          ? "text-[var(--color-bigchill)] font-semibold bg-[var(--color-bigchill)]/5"
                          : "text-slate-700"
                          }`}
                      >
                        <span className="text-base leading-none">{country.flag}</span>
                        <span className="flex-1">{country.name}</span>
                        <span className="text-xs text-slate-400 font-mono">{country.currency}</span>
                        {country.code === currentCountryCode && (
                          <svg className="w-3.5 h-3.5 text-[var(--color-bigchill)]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        )}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
