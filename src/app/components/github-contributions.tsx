"use client";

import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "next-themes";
import { useState, useSyncExternalStore, cloneElement } from "react";

type Contribution = { date: string; count: number };

const emptySubscribe = () => () => {};
const useIsMounted = () => {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
};

export default function GithubContributions() {
  const { resolvedTheme } = useTheme();
  const [contribution, setContribution] = useState<Contribution | null>(null);
  const isMounted = useIsMounted();

  const theme = {
    light: [
      "var(--color-zinc-100)",
      "var(--color-cyan-200)",
      "var(--color-cyan-300)",
      "var(--color-cyan-400)",
      "var(--color-cyan-500)",
    ],
    dark: [
      "var(--color-zinc-800)",
      "var(--color-cyan-200)",
      "var(--color-cyan-300)",
      "var(--color-cyan-400)",
      "var(--color-cyan-500)",
    ],
  };

  function formatContributionDate(dateString: string) {
    const date = new Date(dateString);
    return Intl.DateTimeFormat("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }).format(date);
  }

  if (!isMounted) return null;

  return (
    <div className="border-border ring-0.5 ring-border mx-auto w-full max-w-3xl border-x py-4">
      <style>{`
        .github-calendar .react-activity-calendar__legend-month text {
          font-family: var(--font-geist-mono), ui-monospace, SFMono-Regular, monospace;
          fill: var(--color-foreground);
          opacity: 0.3;
          font-size: 10px;
        }
        .github-calendar .react-activity-calendar__scroll-container {
          overflow: visible;
        }
        .github-calendar .react-activity-calendar__count {
          font-family: var(--font-geist-mono), ui-monospace, SFMono-Regular, monospace;
          color: var(--color-foreground);
          opacity: 0.3;
          font-size: 10px;
        }
      `}</style>
      <div className="flex justify-center w-full">
        <GitHubCalendar
          key={resolvedTheme}
          username="ashish01-dev"
          colorScheme={resolvedTheme as "light" | "dark"}
          fontSize={12}
          blockSize={12}
          blockMargin={2}
          year={2026}
          blockRadius={4}
          showColorLegend={false}
          showWeekdayLabels={false}
          className="github-calendar"
          theme={theme}
          labels={{
            totalCount: contribution
              ? `${contribution.count} contribution${contribution.count !== 1 ? "s" : ""} in ${formatContributionDate(contribution.date)}`
              : "Total {{count}} contributions in {{year}}",
          }}
          renderBlock={(block, activity) =>
            cloneElement(block, {
              onPointerEnter: () => {
                setContribution({ date: activity.date, count: activity.count });
              },
              onPointerLeave: () => {
                setContribution(null);
              },
            })
          }
        />
      </div>
    </div>
  );
}
