/**
 * Vuglo Pricing Data
 * Central source of truth for all country-specific pricing.
 * Prices are manually defined per market — NOT real-time conversions.
 *
 * Priority order for resolving pricing:
 *  1. User-selected country (from cookie)
 *  2. Vercel-detected country (x-vercel-ip-country header)
 *  3. US fallback
 *
 * Countries: 21 total
 *  Original  → IN, US, CA, AU, NZ, GB, DE, FR, SG, AE
 *  New HP    → IE, NL, SE, DK, PH, BD
 *  New MP    → JP, KR, BR, MY, ZA
 */

export const SUPPORTED_COUNTRIES = {

  // ─────────────────────────────────────────
  // ASIA
  // ─────────────────────────────────────────

  IN: {
    code: "IN",
    name: "India",
    flag: "🇮🇳",
    currency: "INR",
    symbol: "₹",
    basic: {
      price: "₹7,899",
      extrasValue: "₹7,999",
      intermediateExtrasValue: "₹16,499",
      enterpriseExtrasValue: "₹27,000",
    },
    intermediate: { price: "₹24,899" },
    enterprise: { price: "₹40,000 +" },
    perPage: { price: "₹500 – ₹700" },
    hourly: { price: "₹999" },
  },

  BD: {
    code: "BD",
    name: "Bangladesh",
    flag: "🇧🇩",
    currency: "BDT",
    symbol: "৳",
    basic: {
      price: "৳9,999",
      extrasValue: "৳9,999",
      intermediateExtrasValue: "৳19,999",
      enterpriseExtrasValue: "৳34,999",
    },
    intermediate: { price: "৳29,999" },
    enterprise: { price: "৳49,999 +" },
    perPage: { price: "৳600 – ৳900" },
    hourly: { price: "৳1,199" },
  },

  PH: {
    code: "PH",
    name: "Philippines",
    flag: "🇵🇭",
    currency: "PHP",
    symbol: "₱",
    basic: {
      price: "₱8,499",
      extrasValue: "₱9,999",
      intermediateExtrasValue: "₱21,999",
      enterpriseExtrasValue: "₱37,999",
    },
    intermediate: { price: "₱26,999" },
    enterprise: { price: "₱52,999 +" },
    perPage: { price: "₱799 – ₱1,199" },
    hourly: { price: "₱1,299" },
  },

  SG: {
    code: "SG",
    name: "Singapore",
    flag: "🇸🇬",
    currency: "SGD",
    symbol: "S$",
    basic: {
      price: "S$349",
      extrasValue: "S$429",
      intermediateExtrasValue: "S$949",
      enterpriseExtrasValue: "S$1,649",
    },
    intermediate: { price: "S$899" },
    enterprise: { price: "S$2,499 +" },
    perPage: { price: "S$35 – S$55" },
    hourly: { price: "S$75" },
  },

  MY: {
    code: "MY",
    name: "Malaysia",
    flag: "🇲🇾",
    currency: "MYR",
    symbol: "RM",
    basic: {
      price: "RM649",
      extrasValue: "RM799",
      intermediateExtrasValue: "RM1,799",
      enterpriseExtrasValue: "RM3,099",
    },
    intermediate: { price: "RM1,699" },
    enterprise: { price: "RM3,999 +" },
    perPage: { price: "RM65 – RM99" },
    hourly: { price: "RM129" },
  },

  JP: {
    code: "JP",
    name: "Japan",
    flag: "🇯🇵",
    currency: "JPY",
    symbol: "¥",
    basic: {
      price: "¥44,999",
      extrasValue: "¥54,999",
      intermediateExtrasValue: "¥119,999",
      enterpriseExtrasValue: "¥209,999",
    },
    intermediate: { price: "¥119,999" },
    enterprise: { price: "¥299,999 +" },
    perPage: { price: "¥4,499 – ¥6,999" },
    hourly: { price: "¥9,999" },
  },

  KR: {
    code: "KR",
    name: "South Korea",
    flag: "🇰🇷",
    currency: "KRW",
    symbol: "₩",
    basic: {
      price: "₩399,999",
      extrasValue: "₩489,999",
      intermediateExtrasValue: "₩1,099,999",
      enterpriseExtrasValue: "₩1,899,999",
    },
    intermediate: { price: "₩1,099,999" },
    enterprise: { price: "₩2,699,999 +" },
    perPage: { price: "₩39,999 – ₩62,999" },
    hourly: { price: "₩89,999" },
  },

  AE: {
    code: "AE",
    name: "United Arab Emirates",
    flag: "🇦🇪",
    currency: "AED",
    symbol: "AED",
    basic: {
      price: "AED 1,099",
      extrasValue: "AED 1,349",
      intermediateExtrasValue: "AED 2,949",
      enterpriseExtrasValue: "AED 5,099",
    },
    intermediate: { price: "AED 2,899" },
    enterprise: { price: "AED 7,499 +" },
    perPage: { price: "AED 109 – AED 169" },
    hourly: { price: "AED 239" },
  },

  // ─────────────────────────────────────────
  // OCEANIA
  // ─────────────────────────────────────────

  AU: {
    code: "AU",
    name: "Australia",
    flag: "🇦🇺",
    currency: "AUD",
    symbol: "A$",
    basic: {
      price: "A$449",
      extrasValue: "A$549",
      intermediateExtrasValue: "A$1,249",
      enterpriseExtrasValue: "A$2,149",
    },
    intermediate: { price: "A$1,199" },
    enterprise: { price: "A$3,499 +" },
    perPage: { price: "A$45 – A$69" },
    hourly: { price: "A$90" },
  },

  NZ: {
    code: "NZ",
    name: "New Zealand",
    flag: "🇳🇿",
    currency: "NZD",
    symbol: "NZ$",
    basic: {
      price: "NZ$499",
      extrasValue: "NZ$599",
      intermediateExtrasValue: "NZ$1,349",
      enterpriseExtrasValue: "NZ$2,349",
    },
    intermediate: { price: "NZ$1,299" },
    enterprise: { price: "NZ$3,999 +" },
    perPage: { price: "NZ$49 – NZ$75" },
    hourly: { price: "NZ$95" },
  },

  // ─────────────────────────────────────────
  // NORTH AMERICA
  // ─────────────────────────────────────────

  US: {
    code: "US",
    name: "United States",
    flag: "🇺🇸",
    currency: "USD",
    symbol: "$",
    basic: {
      price: "$299",
      extrasValue: "$369",
      intermediateExtrasValue: "$829",
      enterpriseExtrasValue: "$1,429",
    },
    intermediate: { price: "$799" },
    enterprise: { price: "$2,499 +" },
    perPage: { price: "$29 – $45" },
    hourly: { price: "$65" },
  },

  CA: {
    code: "CA",
    name: "Canada",
    flag: "🇨🇦",
    currency: "CAD",
    symbol: "C$",
    basic: {
      price: "C$399",
      extrasValue: "C$489",
      intermediateExtrasValue: "C$1,099",
      enterpriseExtrasValue: "C$1,899",
    },
    intermediate: { price: "C$999" },
    enterprise: { price: "C$2,999 +" },
    perPage: { price: "C$39 – C$59" },
    hourly: { price: "C$75" },
  },

  // ─────────────────────────────────────────
  // LATIN AMERICA
  // ─────────────────────────────────────────

  BR: {
    code: "BR",
    name: "Brazil",
    flag: "🇧🇷",
    currency: "BRL",
    symbol: "R$",
    basic: {
      price: "R$749",
      extrasValue: "R$899",
      intermediateExtrasValue: "R$1,999",
      enterpriseExtrasValue: "R$3,499",
    },
    intermediate: { price: "R$1,999" },
    enterprise: { price: "R$4,999 +" },
    perPage: { price: "R$74 – R$114" },
    hourly: { price: "R$159" },
  },

  // ─────────────────────────────────────────
  // EUROPE
  // ─────────────────────────────────────────

  GB: {
    code: "GB",
    name: "United Kingdom",
    flag: "🇬🇧",
    currency: "GBP",
    symbol: "£",
    basic: {
      price: "£249",
      extrasValue: "£299",
      intermediateExtrasValue: "£679",
      enterpriseExtrasValue: "£1,179",
    },
    intermediate: { price: "£699" },
    enterprise: { price: "£1,999 +" },
    perPage: { price: "£24 – £37" },
    hourly: { price: "£60" },
  },

  IE: {
    code: "IE",
    name: "Ireland",
    flag: "🇮🇪",
    currency: "EUR",
    symbol: "€",
    basic: {
      price: "€279",
      extrasValue: "€339",
      intermediateExtrasValue: "€759",
      enterpriseExtrasValue: "€1,319",
    },
    intermediate: { price: "€749" },
    enterprise: { price: "€2,199 +" },
    perPage: { price: "€27 – €42" },
    hourly: { price: "€65" },
  },

  DE: {
    code: "DE",
    name: "Germany",
    flag: "🇩🇪",
    currency: "EUR",
    symbol: "€",
    basic: {
      price: "€279",
      extrasValue: "€339",
      intermediateExtrasValue: "€759",
      enterpriseExtrasValue: "€1,319",
    },
    intermediate: { price: "€749" },
    enterprise: { price: "€2,199 +" },
    perPage: { price: "€27 – €42" },
    hourly: { price: "€65" },
  },

  FR: {
    code: "FR",
    name: "France",
    flag: "🇫🇷",
    currency: "EUR",
    symbol: "€",
    basic: {
      price: "€279",
      extrasValue: "€339",
      intermediateExtrasValue: "€759",
      enterpriseExtrasValue: "€1,319",
    },
    intermediate: { price: "€749" },
    enterprise: { price: "€2,199 +" },
    perPage: { price: "€27 – €42" },
    hourly: { price: "€65" },
  },

  NL: {
    code: "NL",
    name: "Netherlands",
    flag: "🇳🇱",
    currency: "EUR",
    symbol: "€",
    basic: {
      price: "€279",
      extrasValue: "€339",
      intermediateExtrasValue: "€759",
      enterpriseExtrasValue: "€1,319",
    },
    intermediate: { price: "€749" },
    enterprise: { price: "€2,199 +" },
    perPage: { price: "€27 – €42" },
    hourly: { price: "€65" },
  },

  SE: {
    code: "SE",
    name: "Sweden",
    flag: "🇸🇪",
    currency: "SEK",
    symbol: "kr",
    basic: {
      price: "kr 3,199",
      extrasValue: "kr 3,899",
      intermediateExtrasValue: "kr 8,699",
      enterpriseExtrasValue: "kr 15,099",
    },
    intermediate: { price: "kr 8,499" },
    enterprise: { price: "kr 24,999 +" },
    perPage: { price: "kr 309 – kr 479" },
    hourly: { price: "kr 749" },
  },

  DK: {
    code: "DK",
    name: "Denmark",
    flag: "🇩🇰",
    currency: "DKK",
    symbol: "kr.",
    basic: {
      price: "kr. 2,099",
      extrasValue: "kr. 2,549",
      intermediateExtrasValue: "kr. 5,699",
      enterpriseExtrasValue: "kr. 9,899",
    },
    intermediate: { price: "kr. 5,599" },
    enterprise: { price: "kr. 16,499 +" },
    perPage: { price: "kr. 199 – kr. 309" },
    hourly: { price: "kr. 499" },
  },

  // ─────────────────────────────────────────
  // AFRICA
  // ─────────────────────────────────────────

  ZA: {
    code: "ZA",
    name: "South Africa",
    flag: "🇿🇦",
    currency: "ZAR",
    symbol: "R",
    basic: {
      price: "R5,499",
      extrasValue: "R6,699",
      intermediateExtrasValue: "R14,999",
      enterpriseExtrasValue: "R25,999",
    },
    intermediate: { price: "R14,499" },
    enterprise: { price: "R34,999 +" },
    perPage: { price: "R539 – R829" },
    hourly: { price: "R1,199" },
  },

};

/** Fallback country when visitor is from an unsupported region */
export const FALLBACK_COUNTRY_CODE = "US";

/** Cookie name used to persist user's manual country selection */
export const CURRENCY_COOKIE_NAME = "vuglo_country";

/**
 * Resolve pricing for a given country code.
 * Falls back to US if the country is not in SUPPORTED_COUNTRIES.
 *
 * @param {string | null | undefined} countryCode - ISO 3166-1 alpha-2 code
 * @returns {object} country pricing object
 */
export function resolvePricing(countryCode) {
  const code = countryCode?.toUpperCase();
  const country = SUPPORTED_COUNTRIES[code] ?? SUPPORTED_COUNTRIES[FALLBACK_COUNTRY_CODE];
  return country;
}

/**
 * Build the full projectTiers array with prices injected from the resolved country.
 * Keeps all non-price fields (features, extras text, etc.) unchanged.
 *
 * @param {object} country - resolved country object from resolvePricing()
 * @returns {Array}
 */
export function buildProjectTiers(country) {
  return [
    {
      id: "basic",
      name: "Basic",
      description: "Perfect for static websites, landing pages, and portfolios.",
      price: country.basic.price,
      deliveryTime: "1-3 days",
      features: [
        "Up to 5 Pages",
        "Responsive Design",
        "Basic SEO Setup",
        "Contact Form Integration",
        "1 Month Support",
      ],
      notIncluded: ["CMS Integration", "E-commerce Functionality", "Custom Animations"],
      extras: [
        "1-Year Domain Included",
        "Hosting Setup Included",
        "SSL Security Setup",
        "Google Maps Integration",
        "WhatsApp Chat Integration",
      ],
      includedValue: `🎁 FREE EXTRAS WORTH ${country.basic.extrasValue} — Yours at No Extra Cost!`,
      color: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/30 hover:border-blue-500",
      badge: "Perfect For Beginners",
    },
    {
      id: "intermediate",
      name: "Intermediate",
      description: "Ideal for businesses needing dynamic content and CRUD operations.",
      price: country.intermediate.price,
      priceNote: "",
      deliveryTime: "1-2 weeks",
      features: [
        "Up to 15 Pages",
        "Custom Database (CRUD)",
        "Admin Dashboard",
        "User Authentication",
        "Advanced SEO Setup",
        "3 Months Support",
      ],
      notIncluded: ["Payment Gateway Setup", "Complex E-commerce"],
      extras: [
        "1-Year Domain Included",
        "Hosting Configuration Included",
        "Analytics Integration",
        "Speed Optimization",
        "Admin Dashboard Walkthrough",
        "Basic Logo Assistance",
      ],
      includedValue: `🎁 FREE EXTRAS WORTH ${country.basic.intermediateExtrasValue} — Yours at No Extra Cost!`,
      color: "from-[var(--color-bigchill)]/20 to-teal-500/20",
      borderColor: "border-[var(--color-bigchill)]/50 hover:border-[var(--color-bigchill)]",
      badge: "Most Popular",
    },
    {
      id: "advanced",
      name: "Enterprise",
      description: "Full-scale e-commerce solutions and complex web applications.",
      price: country.enterprise.price,
      deliveryTime: "4-6 weeks",
      features: [
        "Unlimited Pages (Dynamic)",
        "Full E-commerce Functionality",
        "Payment Gateway Integration",
        "Advanced Admin Controls",
        "Third-party API Integrations",
        "Custom GSAP Animations",
        "6 Months Support",
      ],
      notIncluded: [],
      extras: [
        "Premium Hosting Configuration",
        "Custom Logo Assistance",
        "Performance Optimization",
        "Social Media Setup",
        "Google Business Profile Setup",
        "Post-launch Testing",
      ],
      includedValue: `🎁 FREE EXTRAS WORTH ${country.basic.enterpriseExtrasValue} — Yours at No Extra Cost!`,
      color: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/30 hover:border-purple-500",
    },
  ];
}