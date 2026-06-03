import { resolvePricing, buildProjectTiers } from "../../lib/pricing";
import CurrencySelector from "../../components/public/CurrencySelector";
import PricingClient from "../../components/public/PricingClient";

export const metadata = {
  title: "Pricing — Vuglo",
  description: "Transparent, flexible pricing for website development, web applications, SEO, and consulting services.",
};

export default async function PricingPage() {
  // Always render USD on first load — client fetches local pricing after hydration
  const country = resolvePricing("US");
  const projectTiers = buildProjectTiers(country);

  return (
    <>
      <div className="relative z-10 pt-28 px-4 md:px-8 max-w-7xl mx-auto">
        <CurrencySelector currentCountryCode="US" />
      </div>
      <PricingClient
        projectTiers={projectTiers}
        perPagePrice={country.perPage.price}
        hourlyPrice={country.hourly.price}
      />
    </>
  );
}