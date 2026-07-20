// "use client";
import Link from "next/link";
// import Back from "./icons/back";
import Home from "./icons/home";
import ThemeToggle from "./theme-toggle";
// import { useRouter } from "next/navigation";

export const Navbar = () => {
  // const router = useRouter();

  return (
    <header className="w-full pt-4">
      <nav className="flex justify-between">
        {/*<div className="border-border inline-flex items-center rounded-full border p-0.5">*/}
        <Link
          href={"/"}
          className="group bg-muted inline-flex size-6 cursor-pointer items-center justify-center rounded-full transition-colors"
        >
          <Home className="size-4 opacity-40 transition-opacity group-hover:opacity-80" />
        </Link>
        {/*<button
            onClick={() => router.back()}
            className="group cursor-pointer rounded-full p-1.5 transition-colors hover:bg-black/5"
          >
            <Back className="size-4 opacity-40 transition-opacity group-hover:opacity-80" />
          </button>*/}
        {/*</div>*/}
        <ThemeToggle />
      </nav>
    </header>
  );
};
