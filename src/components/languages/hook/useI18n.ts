import { useMemo } from "react";
import { getMessages, toggleLang } from "../i18n";
import { useLang } from "./useLang";

export const useI18n = () => {
  const { lang, setLang } = useLang();

  const m = useMemo(() => getMessages(lang), [lang]);

  const toggle = () => setLang((prev) => toggleLang(prev));

  return { lang, setLang, toggle, m };
};
