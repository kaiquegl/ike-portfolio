import { useContext } from "react";
import { useStore } from "zustand";

import { ThemeContext } from "./theme-context.client";
import type { ThemeState } from "./theme-factory.client";

export function useTheme<T>(selector: (state: ThemeState) => T): T {
  const themeStore = useContext(ThemeContext);

  if (!themeStore) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return useStore(themeStore, selector);
}
