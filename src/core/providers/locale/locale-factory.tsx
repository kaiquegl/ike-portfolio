import { createStore } from "zustand";
import { setLocaleSSR } from "./locale-server-functions";

export type Locale = "en" | "pt-BR";

export type LocaleProps = {
  locale: Locale;
};

export type LocaleState = {
  setLocale: (locale: Locale) => void;
} & LocaleProps;

export type LocaleStore = ReturnType<typeof createLocaleStore>;

export const createLocaleStore = (initProps?: LocaleProps) => {
  const defaultLocaleProps: LocaleProps = {
    locale: "pt-BR"
  };

  return createStore<LocaleState>()((setState) => ({
    ...defaultLocaleProps,
    ...initProps,
    setLocale: (locale: Locale) => {
      setLocaleSSR({ data: { locale } });
      document.documentElement.lang = locale;
      return setState({ locale });
    }
  }));
};
