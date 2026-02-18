import { createServerFn } from "@tanstack/react-start";
import { getCookie, setCookie } from "@tanstack/react-start/server";

import type { ThemeProps } from "./theme-factory.client";

export const getThemeSSR = createServerFn({ method: "GET" }).handler(() => {
  let theme = getCookie("theme");

  if (!theme) {
    setCookie("theme", "dark");
    theme = "dark";
  }

  return theme as ThemeProps["theme"];
});

export const setThemeSSR = createServerFn({ method: "POST" })
  .inputValidator((data: { theme: ThemeProps["theme"] }) => data)
  .handler(({ data }) => {
    setCookie("theme", data.theme);
    return data.theme as ThemeProps["theme"];
  });
