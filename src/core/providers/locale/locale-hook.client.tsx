import { useContext } from "react";
import { useStore } from "zustand";

import { LocaleContext } from "./locale-context.client";
import type { LocaleState } from "./locale-factory.client";

export function useLocale<T>(selector: (state: LocaleState) => T): T {
  const localeStore = useContext(LocaleContext);

  if (!localeStore) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }

  return useStore(localeStore, selector);
}
