import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

const getInitialIsDark = (): boolean => {
  if (typeof window === "undefined") return false;
  return localStorage.getItem("theme") === "dark";
};

export const ThemeToggle = (): React.JSX.Element => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(getInitialIsDark);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const handleToggleTheme = (): void => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <button
      onClick={handleToggleTheme}
      className={cn(
        "top-5 right-5 z-50 rounded-full transition-colors duration-300",
        "focus:outlin-hidden"
      )}
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6 text-blue-900" />
      )}
    </button>
  );
};
