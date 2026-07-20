export async function getTotalViews() {
  const websiteId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;
  const apiToken = process.env.UMAMI_API_TOKEN;

  if (!websiteId || !apiToken) {
    return null;
  }

  try {
    // Umami Cloud API endpoint for stats
    // We fetch from the beginning of time (startAt=0) to now
    const url = `https://api.umami.is/v1/websites/${websiteId}/stats?startAt=0&endAt=${Date.now()}`;

    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${apiToken}`,
      },
      next: {
        revalidate: 3600, // Cache for 1 hour
      },
    });

    if (!response.ok) {
      return null;
    }

    const data = await response.json();
    return data?.pageviews ?? 0;
  } catch (error) {
    console.error("Error fetching Umami stats:", error);
    return null;
  }
}

export function getOrdinalSuffix(n: number) {
  const s = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return s[(v - 20) % 10] || s[v] || s[0];
}
