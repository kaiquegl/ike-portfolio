import { useMemo } from "react";

import type { Locale } from "@/core/providers/locale/locale-factory";
import { useLocale } from "@/core/providers/locale/locale-hook";
import { en, type MessageKey } from "./messages/en";
import { ptBR } from "./messages/pt-BR";

const MESSAGES: Record<Locale, Record<MessageKey, string>> = {
  en,
  "pt-BR": ptBR
};

export function useTranslation() {
  const locale = useLocale((state) => state.locale);

  return useMemo(() => {
    const messages = MESSAGES[locale];
    return (key: MessageKey): string => messages[key];
  }, [locale]);
}
