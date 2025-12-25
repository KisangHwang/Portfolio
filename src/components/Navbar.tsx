import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

import profileImgCropped from "@/assets/profileImageCropped.png";
import { useI18n } from "./languages/hook/useI18n";
import type { NavItem } from "./languages/i18n";

export const Navbar = (): React.JSX.Element => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const { m, toggle } = useI18n();

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.screenY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300 px-10",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <a href="#hero" className=" flex items-center gap-3">
          <img
            src={profileImgCropped}
            alt="Kisang Hwang"
            className="h-12 w-12 rounded-full object-contain ring-1 ring-border"
          />
          <span className="text-xl font-bold text-primary relative z-10 max-sm:hidden">
            <span className="text-glow text-foreground"> {m.nav.name} </span>{" "}
            {m.nav.topic}
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex space-x-8 ml-5 mr-5">
          {m.nav.items.map((item: NavItem, key: number) => (
            <a
              key={key}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="md:hidden p-2 text-foreground z-50"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <ThemeToggle />

          <button
            className={cn(
              "top-5 right-5 z-50 rounded-full border p-1 transition-colors duration-300",
              "focus:outlin-hidden"
            )}
            onClick={toggle}
          >
            {m.nav.toggleLabel}
          </button>
        </div>

        {/* Mobile nav */}
        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {m.nav.items.map((item: NavItem, key: number) => (
              <a
                key={key}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                onClick={() => {
                  setIsMenuOpen(false);
                }}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
