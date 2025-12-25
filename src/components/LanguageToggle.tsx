import React from "react";
import { cn } from "@/lib/utils";
import { useI18n } from "./languages/hook/useI18n";

export const LanguageToggle = (): React.JSX.Element => {
  const { m, toggle } = useI18n();

  return (
    <button
      className={cn(
        "top-5 right-5 z-50 rounded-full border p-1 transition-colors duration-300",
        "focus:outlin-hidden"
      )}
      onClick={toggle}
    >
      {m.nav.toggleLabel}
    </button>
  );
};
