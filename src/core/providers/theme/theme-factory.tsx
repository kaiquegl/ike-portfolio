import { createStore } from "zustand";
import { setThemeSSR } from "./theme-server-functions";

export type ThemeProps = {
  theme: "dark" | "light";
};

export type ThemeState = {
  setTheme: (theme: ThemeProps["theme"]) => void;
} & ThemeProps;

export type ThemeStore = ReturnType<typeof createThemeStore>;

export const createThemeStore = (initProps?: ThemeProps) => {
  const defaultThemeProps: ThemeProps = {
    theme: "dark"
  };

  return createStore<ThemeState>()((setState) => ({
    ...defaultThemeProps,
    ...initProps,
    setTheme: (theme: ThemeProps["theme"]) => {
      setThemeSSR({ data: { theme } });
      document.documentElement.classList.remove("dark", "light");
      document.documentElement.classList.add(theme);
      return setState({ theme });
    }
  }));
};
