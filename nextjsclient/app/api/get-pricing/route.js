import { detectCountry } from "../../../lib/detectCountry";
import { resolvePricing, buildProjectTiers } from "../../../lib/pricing";

export async function GET() {
    const countryCode = await detectCountry();
    const country = resolvePricing(countryCode);
    const projectTiers = buildProjectTiers(country);

    return Response.json({
        countryCode,
        projectTiers,
        perPagePrice: country.perPage.price,
        hourlyPrice: country.hourly.price,
    });
}