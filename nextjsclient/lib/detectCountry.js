/**
 * Vuglo — Country Detection Utility
 *
 * Reads the visitor's country from Vercel's injected request headers.
 * Vercel sets `x-vercel-ip-country` on every incoming request automatically —
 * no user permission is needed.
 *
 * This module is ONLY used in Server Components / Route Handlers (Node.js runtime).
 * Never import this in a Client Component.
 */

import { cookies, headers } from "next/headers";
import { CURRENCY_COOKIE_NAME, SUPPORTED_COUNTRIES, FALLBACK_COUNTRY_CODE } from "./pricing";

/**
 * Detect the visitor's country following the priority chain:
 *
 *  1. User-selected country saved in cookie  (manual override)
 *  2. Vercel's `x-vercel-ip-country` header  (geo-IP, no permission required)
 *  3. US fallback
 *
 * @returns {Promise<string>} ISO 3166-1 alpha-2 country code (e.g. "IN", "US")
 */
export async function detectCountry() {
  // 1. Cookie — highest priority (user explicitly chose this)
  const cookieStore = await cookies();
  const savedCountry = cookieStore.get(CURRENCY_COOKIE_NAME)?.value;
  if (savedCountry && SUPPORTED_COUNTRIES[savedCountry.toUpperCase()]) {
    return savedCountry.toUpperCase();
  }

  // 2. Vercel geo-IP header — automatic, no user permission needed
  const headerStore = await headers();
  const vercelCountry = headerStore.get("x-vercel-ip-country");
  if (vercelCountry && SUPPORTED_COUNTRIES[vercelCountry.toUpperCase()]) {
    return vercelCountry.toUpperCase();
  }

  // 3. Fallback to US for all unsupported countries
  return FALLBACK_COUNTRY_CODE;
}
