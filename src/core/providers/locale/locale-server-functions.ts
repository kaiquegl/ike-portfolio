/** biome-ignore-all lint/suspicious/noExplicitAny: vite config */
import { createServerFn } from "@tanstack/react-start";
import { getCookie, getRequestHeader, setCookie } from "@tanstack/react-start/server";
import { staticFunctionMiddleware } from "@tanstack/start-static-server-functions";

import type { LocaleProps } from "./locale-factory";

type SupportedLocale = LocaleProps["locale"];

const DEFAULT_LOCALE: SupportedLocale = "pt-BR";

function parseAcceptLanguage(header: string): SupportedLocale {
  const segments = header
    .split(",")
    .map((segment) => {
      const [code, quality] = segment.trim().split(";q=");
      return {
        code: code.toLowerCase().trim(),
        quality: quality ? Number.parseFloat(quality) : 1.0
      };
    })
    .sort((firstLocaleOption, secondLocaleOption) => secondLocaleOption.quality - firstLocaleOption.quality);

  for (const { code } of segments) {
    if (code === "en" || code.startsWith("en-")) {
      return "en";
    }
    if (code === "pt" || code.startsWith("pt-")) {
      return "pt-BR";
    }
  }

  return DEFAULT_LOCALE;
}

export const getLocaleSSR = createServerFn({ method: "GET" })
  .middleware([staticFunctionMiddleware] as any)
  .handler(() => {
    const localeCookie = getCookie("locale");

    if (localeCookie === "en" || localeCookie === "pt-BR") {
      return localeCookie;
    }

    let detectedLocale: SupportedLocale = DEFAULT_LOCALE;

    try {
      const acceptLanguage = getRequestHeader("accept-language");
      if (acceptLanguage) {
        detectedLocale = parseAcceptLanguage(acceptLanguage);
      }
    } catch {
      // Header detection may fail in some environments; fall back to default
    }

    setCookie("locale", detectedLocale);
    return detectedLocale;
  });

export const setLocaleSSR = createServerFn({ method: "POST" })
  .middleware([staticFunctionMiddleware] as any)
  .inputValidator((data: { locale: LocaleProps["locale"] }) => data)
  .handler(({ data }) => {
    setCookie("locale", data.locale);
    return data.locale;
  });
