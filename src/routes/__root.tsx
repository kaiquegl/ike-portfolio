import { TanStackDevtools } from "@tanstack/react-devtools";
import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { NuqsAdapter } from "nuqs/adapters/tanstack-router";
import { useEffect, useState } from "react";
import { Toaster } from "@/components/ui/sonner";
import { LocaleContext } from "@/core/providers/locale/locale-context.client";
import type { Locale } from "@/core/providers/locale/locale-factory.client";
import { createLocaleStore } from "@/core/providers/locale/locale-factory.client";
import { getThemeSSR } from "@/core/providers/theme/theme.server";
import { ThemeContext } from "@/core/providers/theme/theme-context.client";
import { createThemeStore } from "@/core/providers/theme/theme-factory.client";
import { buildSeoHead } from "@/core/seo/site-metadata";
import appCss from "../styles.css?url";

type RootRouteContext = {
  locale: Locale;
  theme: "dark" | "light";
};

export const Route = createRootRoute({
  beforeLoad: async ({ location }: { location: { pathname: string } }) => {
    const isEnglishPath = location.pathname === "/en" || location.pathname.startsWith("/en/");
    const locale: Locale = isEnglishPath ? "en" : "pt-BR";
    const theme = await getThemeSSR();
    return { theme, locale };
  },
  head: (opts) => {
    const locale = (opts as unknown as { context?: RootRouteContext }).context?.locale ?? "pt-BR";
    const path = locale === "en" ? "/en" : "/";
    const seo = buildSeoHead({ locale, path });

    return {
      title: seo.title,
      meta: seo.meta,
      links: [{ rel: "stylesheet", href: appCss }, ...seo.links]
    };
  },

  shellComponent: RootDocument
});

const GOOGLE_TAG_MANAGER_ID = "G-SH541SEFFZ";

function RootDocument({ children }: { children: React.ReactNode }) {
  const { theme, locale } = Route.useRouteContext();
  const [themeStore] = useState(() => createThemeStore({ theme }));
  const [localeStore] = useState(() => createLocaleStore({ locale }));

  useEffect(() => {
    localeStore.setState({ locale });
    document.documentElement.lang = locale;
  }, [locale, localeStore]);

  return (
    <html className={theme} lang={locale}>
      <head>
        <HeadContent />
        <link href="/assets/ike-favicon-32x32.png" rel="icon" sizes="32x32" />
        <link href="/assets/ike-favicon-48x48.png" rel="icon" sizes="48x48" />
        <link href="/assets/ike-favicon-512x512.png" rel="icon" sizes="512x512" />
        <link as="image" fetchPriority="high" href="/assets/kaique-lima-foto.webp" rel="preload" />

        <script async src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_TAG_MANAGER_ID}`} />
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${GOOGLE_TAG_MANAGER_ID}');
          `}
        </script>
      </head>
      <body>
        <div className="relative min-h-screen w-full">
          {/* LIGHT MODE BACKGROUND */}
          <div
            className="fixed inset-0 z-0 dark:hidden"
            style={{
              backgroundImage: `
        linear-gradient(to right, #e7e5e4 1px, transparent 1px),
        linear-gradient(to bottom, #e7e5e4 1px, transparent 1px)
      `,
              backgroundSize: "20px 20px",
              backgroundPosition: "0 0, 0 0",
              maskImage: `
          repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 80% 80% at 100% 0%, #000 50%, transparent 90%)
      `,
              WebkitMaskImage: `
    repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 80% 80% at 100% 0%, #000 50%, transparent 90%)
      `,
              maskComposite: "intersect",
              WebkitMaskComposite: "source-in"
            }}
          />
          {/* DARK MODE BACKGROUND */}
          <div
            className="pointer-events-none fixed inset-0 z-0 hidden dark:block"
            style={{
              background: `
                radial-gradient(
                  circle at center,
                  rgba(168, 85, 247, 0.12) 0%,
                  rgba(168, 85, 247, 0.06) 20%,
                  rgba(0, 0, 0, 0.0) 60%
                )
              `
            }}
          />

          <NuqsAdapter>
            <ThemeContext.Provider value={themeStore}>
              <LocaleContext.Provider value={localeStore}>
                {children}
                <Toaster position="bottom-right" />
              </LocaleContext.Provider>
            </ThemeContext.Provider>
          </NuqsAdapter>
        </div>

        {import.meta.env.DEV && (
          <TanStackDevtools
            config={{ position: "bottom-right" }}
            plugins={[{ name: "Tanstack Router", render: <TanStackRouterDevtoolsPanel /> }]}
          />
        )}
        <Scripts />
      </body>
    </html>
  );
}
