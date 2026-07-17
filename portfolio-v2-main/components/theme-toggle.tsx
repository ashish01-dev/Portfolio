"use client";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";
import Moon from "./icons/moon";
import Sun from "./icons/sun";

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  function handleThemeToggle() {
    const newTheme = resolvedTheme === "light" ? "dark" : "light";
    if (typeof document !== "undefined" && "startViewTransition" in document) {
      (
        document as Document & {
          startViewTransition: (callback: () => void) => void;
        }
      ).startViewTransition(() => {
        setTheme(newTheme);
      });
    } else {
      setTheme(newTheme);
    }
  }

  if (!mounted) {
    return (
      <Button
        size={"icon-sm"}
        variant={"outline"}
        className="rounded-full"
        aria-label="Toggle theme"
        style={{
          WebkitTapHighlightColor: "transparent",
          WebkitTouchCallout: "none",
          WebkitUserSelect: "none",
          userSelect: "none",
        }}
      >
        <div className="size-5" />
      </Button>
    );
  }

  return (
    <Button
      size={"icon-sm"}
      variant={"outline"}
      className="rounded-full"
      onClick={handleThemeToggle}
      aria-label={
        resolvedTheme === "light"
          ? "Switch to dark theme"
          : "Switch to light theme"
      }
      style={{
        WebkitTapHighlightColor: "transparent",
        WebkitTouchCallout: "none",
        WebkitUserSelect: "none",
        userSelect: "none",
      }}
    >
      {resolvedTheme === "light" ? (
        <Moon aria-hidden="true" />
      ) : (
        <Sun aria-hidden="true" />
      )}
    </Button>
  );
};

export default ThemeToggle;
