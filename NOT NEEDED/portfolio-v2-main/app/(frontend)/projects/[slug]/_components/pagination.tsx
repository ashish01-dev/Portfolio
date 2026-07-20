import Container from "@/components/container";
import Link from "next/link";

interface NavItem {
  title: string;
  slug: string;
}

interface PaginationProps {
  prev?: NavItem | null;
  next?: NavItem | null;
}

const DisabledNav = ({ direction }: { direction: "prev" | "next" }) => (
  <div
    className={`flex flex-col gap-0.5 opacity-20 ${
      direction === "next" ? "items-end text-right" : "items-start"
    }`}
  >
    <span className="flex items-center gap-1 text-xs font-medium">
      {direction === "prev" && (
        <svg
          className="size-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      )}
      {direction === "prev" ? "Previous" : "Next"}
      {direction === "next" && (
        <svg
          className="size-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      )}
    </span>
    <h3 className="text-sm font-medium text-black dark:text-white/30">
      — End —
    </h3>
  </div>
);

const Pagination = ({ prev, next }: PaginationProps) => {
  return (
    <Container className="px-8">
      <div className="flex items-center justify-between gap-4 py-4">
        {prev ? (
          <Link
            href={`/projects/${prev.slug}`}
            className="group flex flex-col items-start gap-0.5"
          >
            <span className="flex items-center gap-1 text-xs font-medium text-black/30 transition-colors duration-200 group-hover:text-black/60 dark:text-white/30 dark:group-hover:text-white/60">
              <svg
                className="size-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Previous
            </span>
            <h3 className="text-lg font-medium text-black transition-colors duration-200 group-hover:text-black/70 dark:text-white dark:group-hover:text-white/70">
              {prev.title}
            </h3>
          </Link>
        ) : (
          <DisabledNav direction="prev" />
        )}

        {next ? (
          <Link
            href={`/projects/${next.slug}`}
            className="group flex flex-col items-end gap-0.5 text-right"
          >
            <span className="flex items-center gap-1 text-xs font-medium text-black/30 transition-colors duration-200 group-hover:text-black/60 dark:text-white/30 dark:group-hover:text-white/60">
              Next
              <svg
                className="size-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
            <h3 className="text-lg font-medium text-black transition-colors duration-200 group-hover:text-black/70 dark:text-white dark:group-hover:text-white/70">
              {next.title}
            </h3>
          </Link>
        ) : (
          <DisabledNav direction="next" />
        )}
      </div>
    </Container>
  );
};

export default Pagination;
