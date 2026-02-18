import { createStore } from "zustand";
import { setThemeSSR } from "./theme.server";

export type ThemeProps = {
  theme: "dark" | "light";
};

export type ThemeState = {
  setTheme: (theme: ThemeProps["theme"]) => void;
} & ThemeProps;

export type ThemeStore = ReturnType<typeof createThemeStore>;

export const createThemeStore = (initProps?: ThemeProps) => {
  const DEFAULT_PROPS: ThemeProps = {
    theme: "dark"
  };

  return createStore<ThemeState>()((set) => ({
    ...DEFAULT_PROPS,
    ...initProps,
    setTheme: (theme: ThemeProps["theme"]) => {
      // SSR -> setCookie
      setThemeSSR({ data: { theme } });

      // CSR -> change HTML
      document.documentElement.classList.remove("dark", "light");
      document.documentElement.classList.add(theme);

      return set({ theme });
    }
  }));
};
