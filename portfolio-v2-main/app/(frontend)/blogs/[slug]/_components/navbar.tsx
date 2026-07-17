import Container from "@/components/container";
import Back from "@/components/icons/back";
import Home from "@/components/icons/home";
import ThemeToggle from "@/components/theme-toggle";
import Link from "next/link";

const Navbar = () => {
  return (
    <Container>
      <header className="w-full px-8">
        <nav className="flex justify-between">
          <div className="border-border inline-flex items-center rounded-full border p-0.5">
            <Link
              href={"/"}
              className="group bg-muted cursor-pointer rounded-full p-1.5 transition-colors"
            >
              <Home className="size-4 opacity-60 transition-opacity group-hover:opacity-80" />
            </Link>
            <Link
              href={"/blogs"}
              className="group cursor-pointer rounded-full p-1.5 transition-colors hover:bg-black/5"
            >
              <Back className="size-4 opacity-40 transition-opacity group-hover:opacity-80" />
            </Link>
          </div>
          <ThemeToggle />
        </nav>
      </header>
    </Container>
  );
};

export default Navbar;
