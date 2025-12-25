import React, { useMemo, useState } from "react";
import type { Lang } from "./i18n";
import { LanguageContext } from "./hook/useLang";

export const LanguageProvider = ({
  children,
}: React.PropsWithChildren): React.JSX.Element => {
  const [lang, setLang] = useState<Lang>("en");

  const value = useMemo(() => ({ lang, setLang }), [lang]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
