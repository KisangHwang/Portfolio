import React, { useContext } from "react";
import type { Lang } from "../i18n";

type Ctx = {
  lang: Lang;
  setLang: React.Dispatch<React.SetStateAction<Lang>>;
};

export const LanguageContext = React.createContext<Ctx | null>(null);

export const useLang = (): Ctx => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
};
