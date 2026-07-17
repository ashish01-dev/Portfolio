"use client";

import Container from "@/components/container";
import Home from "@/components/icons/home";
import ThemeToggle from "@/components/theme-toggle";
import Link from "next/link";

const Navbar = () => {
  return (
    <Container>
      <header className="w-full px-8">
        <nav className="flex justify-between">
          <Link
            href={"/"}
            className="group bg-muted flex size-8 cursor-pointer items-center justify-center rounded-full transition-colors"
          >
            <Home className="size-4 opacity-60 transition-opacity group-hover:opacity-80" />
          </Link>
          <ThemeToggle />
        </nav>
      </header>
    </Container>
  );
};

export default Navbar;
