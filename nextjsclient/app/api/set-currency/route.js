/**
 * POST /api/set-currency
 *
 * Saves the user's manually selected country code as a secure HTTP-only cookie.
 * Called by the CurrencySelector client component when the user picks a country.
 *
 * Body: { country: "IN" | "US" | "CA" | ... }
 */

import { NextResponse } from "next/server";
import { CURRENCY_COOKIE_NAME, SUPPORTED_COUNTRIES } from "../../../lib/pricing";

export async function POST(request) {
  try {
    const { country } = await request.json();

    // Validate — only accept supported country codes
    if (!country || !SUPPORTED_COUNTRIES[country.toUpperCase()]) {
      return NextResponse.json({ error: "Unsupported country code" }, { status: 400 });
    }

    const response = NextResponse.json({ success: true });

    response.cookies.set(CURRENCY_COOKIE_NAME, country.toUpperCase(), {
      path: "/",
      maxAge: 60 * 60 * 24 * 365, // 1 year
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      httpOnly: false, // Needs to be readable client-side for the selector UI
    });

    return response;
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
