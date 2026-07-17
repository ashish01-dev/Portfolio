"use client";

import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "next-themes";
import { useState, useSyncExternalStore, cloneElement, useMemo } from "react";

type Contribution = { date: string; count: number };

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

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

  const blockSize = 13;
  const blockMargin = 2;
  const calWidth = useMemo(() => 52 * (blockSize + blockMargin), [blockSize, blockMargin]);

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

  function formateContributionDate(dateString: string) {
    const date = new Date(dateString);
    return Intl.DateTimeFormat("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }).format(date);
  }

  if (!isMounted) return null;

  return (
    <div className="border-border ring-0.5 ring-border mx-auto w-full max-w-3xl border-x py-4 px-0 overflow-hidden">
      <div className="flex flex-col items-center">
        <div
          className="flex justify-between w-full text-[10px] text-foreground/30 font-mono mb-1.5 px-0"
          style={{ maxWidth: calWidth }}
        >
          {months.map((m) => (
            <span key={m}>{m}</span>
          ))}
        </div>
        <GitHubCalendar
          key={resolvedTheme}
          username="ashish01-dev"
          colorScheme={resolvedTheme as "light" | "dark"}
          fontSize={12}
          blockSize={blockSize}
          blockMargin={blockMargin}
          year={2026}
          blockRadius={4}
          showMonthLabels={false}
          showColorLegend={false}
          theme={theme}
          labels={{
            totalCount: contribution
              ? `${contribution.count} contribution${contribution.count !== 1 ? "s" : ""} in ${formateContributionDate(contribution.date)}`
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
