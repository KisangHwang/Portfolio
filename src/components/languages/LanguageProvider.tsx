import React, { useEffect, useMemo, useState } from "react";
import type { Lang } from "./i18n";
import { LanguageContext } from "./hook/useLang";

const LOCAL_STORAGE_KEY = "portfolio-lang";

export const LanguageProvider = ({
  children,
}: React.PropsWithChildren): React.JSX.Element => {
  const [lang, setLang] = useState<Lang>(() => {
    if (typeof window === "undefined") return "en";
    const stored = window.localStorage.getItem(LOCAL_STORAGE_KEY);
    if (stored === "en" || stored === "ko") {
      return stored;
    }
    return "en";
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(LOCAL_STORAGE_KEY, lang);
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang }), [lang]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
