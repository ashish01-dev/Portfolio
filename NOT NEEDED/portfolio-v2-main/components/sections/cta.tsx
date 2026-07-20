"use client";

import Image from "next/image";
import { ShinyButton } from "../ui/shiny-button";
import Github from "../icons/github";
import X from "../icons/x";
import LinkedIn from "../icons/linkedin";
import Mail from "../icons/mail";
import Container from "../container";

export function CTA() {
  return (
    <Container className="w-full flex-col px-6 sm:flex sm:items-center sm:justify-between sm:px-12">
      <p className="mb-4 text-center font-serif text-2xl text-pretty italic opacity-50 sm:mb-3 md:text-xl">
        If you&apos;ve read this far, you might be interested in what I do.
      </p>
      <div className="mt-4 flex w-full justify-center sm:mt-0 sm:w-auto sm:justify-end">
        <a
          href="https://cal.com/abhishek-rathore-oiio7l/30min"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ShinyButton className="group bg-background text-foreground border-border h-auto px-3 py-2">
            <div className="relative z-20 flex items-center gap-2 transition-all duration-300 group-hover:gap-8">
              <div className="h-5 w-5 shrink-0 overflow-hidden rounded-full">
                <Image
                  alt={"Abhishek Rathore"}
                  width={20}
                  height={20}
                  className="h-full w-full rounded-full bg-zinc-900 object-cover dark:bg-white"
                  src={"/me.png"}
                />
              </div>
              <div className="absolute left-[24px] flex -translate-x-full transform items-center gap-0 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-3 w-3"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
                <div className="mr-2 ml-1 flex h-5 w-5 items-center justify-center rounded-full bg-black/10 text-[8px] dark:bg-white/10">
                  You
                </div>
              </div>
              <span className="relative ml-0 block text-sm font-bold whitespace-nowrap normal-case transition-all duration-300 group-hover:ml-4">
                Book a call
              </span>
            </div>
          </ShinyButton>
        </a>
      </div>
      <p className="py-2 text-center text-sm font-medium text-black/30 uppercase dark:text-white/30">
        or
      </p>
      <div className="group flex items-center justify-center">
        <a
          href="https://github.com/rathore-abhishek"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-background -mr-1 flex w-13 -rotate-20 cursor-pointer flex-col items-center gap-1 rounded-lg border border-black/20 p-2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] transition-all duration-300 group-hover:mr-2 group-hover:rotate-0 dark:shadow-[0px_2px_3px_-1px_rgba(255,255,255,0.06),0px_1px_0px_0px_rgba(255,255,255,0.04),0px_0px_0px_1px_rgba(255,255,255,0.08)]"
        >
          <Github className="size-5" />
          <p className="text-[8px] font-bold text-black/50 dark:text-white/50">
            Github
          </p>
        </a>

        <a
          href="https://www.instagram.com/rathore.abhishekk"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-background -mr-1 flex w-13 -rotate-10 cursor-pointer flex-col items-center gap-0.5 rounded-lg border border-black/20 p-2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] transition-all duration-300 group-hover:mr-2 group-hover:rotate-0 dark:shadow-[0px_2px_3px_-1px_rgba(255,255,255,0.06),0px_1px_0px_0px_rgba(255,255,255,0.04),0px_0px_0px_1px_rgba(255,255,255,0.08)]"
        >
          <div className="size-5">
            <Image
              src={"/instagram.png"}
              width={20}
              height={20}
              alt="Instagram"
              className="h-full w-full object-contain"
            />
          </div>
          <p className="text-[8px] font-bold text-black/50 dark:text-white/50">
            Instagram
          </p>
        </a>
        <a
          href="https://x.com/abhiishekz"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-background z-5 -mr-1 flex w-13 -rotate-2 cursor-pointer flex-col items-center gap-0.5 rounded-lg border border-black/20 p-2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] transition-all duration-300 group-hover:mr-2 group-hover:rotate-0 dark:shadow-[0px_2px_3px_-1px_rgba(255,255,255,0.06),0px_1px_0px_0px_rgba(255,255,255,0.04),0px_0px_0px_1px_rgba(255,255,255,0.08)]"
        >
          <X className="size-5" />
          <p className="text-[8px] font-bold text-black/50 dark:text-white/50">
            Twitter
          </p>
        </a>
        <a
          href="https://www.linkedin.com/in/rathore-abhishekk/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-background z-2 -mr-1 flex w-13 rotate-10 cursor-pointer flex-col items-center gap-0.5 rounded-lg border border-black/20 p-2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] transition-all duration-300 group-hover:mr-2 group-hover:rotate-0 dark:shadow-[0px_2px_3px_-1px_rgba(255,255,255,0.06),0px_1px_0px_0px_rgba(255,255,255,0.04),0px_0px_0px_1px_rgba(255,255,255,0.08)]"
        >
          <LinkedIn className="size-5" />
          <p className="text-[8px] font-bold text-black/50 dark:text-white/50">
            LinkedIn
          </p>
        </a>
        <a
          href="mailto:rathore.abhiishekk@gmail.com"
          className="bg-background z-1 -mr-1 flex w-13 rotate-20 cursor-pointer flex-col items-center gap-0.5 rounded-lg border border-black/20 p-2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] transition-all duration-300 group-hover:mr-2 group-hover:rotate-0 dark:shadow-[0px_2px_3px_-1px_rgba(255,255,255,0.06),0px_1px_0px_0px_rgba(255,255,255,0.04),0px_0px_0px_1px_rgba(255,255,255,0.08)]"
        >
          <Mail className="size-5 opacity-40" />
          <p className="text-[8px] font-bold text-black/50 dark:text-white/50">
            Mail
          </p>
        </a>
      </div>
    </Container>
  );
}
