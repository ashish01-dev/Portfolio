import React from "react";
import Container from "../container";

const quotes = [
  {
    quote: `A man who is master of patience is master of everything else.`,
    author: "George Savile",
  },
  {
    quote: `You have a right to perform your prescribed duty, but you are not entitled to the fruits of actions.`,
    author: "Bhagavad Gita",
  },
  {
    quote: `Man is made by his belief. As he believes, so he is.`,
    author: "Bhagavad Gita",
  },
  {
    quote: `Arise, awake, and stop not till the goal is reached.`,
    author: "Katha Upanishad",
  },
  {
    quote: `If the pain doesn't kill me, it will only make me stronger.`,
    author: "Sung Jin-Woo, Solo Leveling",
  },
  {
    quote: `I’ll take a potato chip… AND EAT IT!`,
    author: "Light Yagami, Death Note",
  },
];

export const QuoteSection = () => {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <Container className="relative z-0 px-8">
      {/* Background Quote Mark */}
      <div className="pointer-events-none absolute bottom-1 left-8 opacity-[0.05] dark:opacity-[0.05]">
        <svg
          width="60"
          height="40"
          viewBox="0 0 120 100"
          fill="currentColor"
          className="text-black dark:text-white"
        >
          <path d="M0 100V50c0-27.614 22.386-50 50-50h10v20H50c-16.569 0-30 13.431-30 30v10h30v40H0zm60 0V50c0-27.614 22.386-50 50-50h10v20h-10c-16.569 0-30 13.431-30 30v10h30v40H60z" />
        </svg>
      </div>

      <div className="relative z-10 flex flex-col justify-center">
        <div className="flex flex-col">
          <p className="font-serif text-lg leading-relaxed text-black/40 italic dark:text-white/40">
            &quot;{quote.quote}&quot;
          </p>
          <div className="mt-4 flex items-center gap-3 self-end">
            <div className="h-px w-8 bg-black/20 dark:bg-white/10" />
            <span className="text-sm font-medium text-black italic dark:text-white">
              {quote.author}
            </span>
          </div>
        </div>
      </div>
    </Container>
  );
};
