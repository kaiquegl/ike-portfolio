import { createStore } from "zustand";
import { setLocaleSSR } from "./locale.server";

export type Locale = "en" | "pt-BR";

export type LocaleProps = {
  locale: Locale;
};

export type LocaleState = {
  setLocale: (locale: Locale) => void;
} & LocaleProps;

export type LocaleStore = ReturnType<typeof createLocaleStore>;

export const createLocaleStore = (initProps?: LocaleProps) => {
  const DEFAULT_PROPS: LocaleProps = {
    locale: "pt-BR"
  };

  return createStore<LocaleState>()((set) => ({
    ...DEFAULT_PROPS,
    ...initProps,
    setLocale: (locale: Locale) => {
      setLocaleSSR({ data: { locale } });

      document.documentElement.lang = locale;

      return set({ locale });
    }
  }));
};
