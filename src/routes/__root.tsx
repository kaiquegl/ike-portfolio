import { TanStackDevtools } from "@tanstack/react-devtools";
import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { NuqsAdapter } from "nuqs/adapters/tanstack-router";
import { useEffect, useState } from "react";
import { Toaster } from "@/components/ui/sonner";
import { LocaleContext } from "@/core/providers/locale/locale-context";
import type { Locale } from "@/core/providers/locale/locale-factory";
import { createLocaleStore } from "@/core/providers/locale/locale-factory";
import { buildSeoHead } from "@/core/seo/site-metadata";
import appCss from "../styles.css?url";

type RootRouteContext = {
  locale: Locale;
};

export const Route = createRootRoute({
  beforeLoad: ({ location }: { location: { pathname: string } }) => {
    const isEnglishPath = location.pathname === "/en" || location.pathname.startsWith("/en/");
    const locale: Locale = isEnglishPath ? "en" : "pt-BR";
    return { locale };
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
  const { locale } = Route.useRouteContext();
  const [localeStore] = useState(() => createLocaleStore({ locale }));

  useEffect(() => {
    localeStore.setState({ locale });
    document.documentElement.lang = locale;
  }, [locale, localeStore]);

  return (
    <html className="dark" lang={locale}>
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
          <div
            aria-hidden
            className="pointer-events-none fixed inset-0 z-0"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)
              `,
              backgroundSize: "24px 24px"
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none fixed inset-0 z-0"
            style={{
              background: `
                radial-gradient(
                  circle at 50% 0%,
                  rgba(168, 85, 247, 0.1) 0%,
                  rgba(168, 85, 247, 0.04) 25%,
                  rgba(0, 0, 0, 0) 55%
                )
              `
            }}
          />

          <NuqsAdapter>
            <LocaleContext.Provider value={localeStore}>
              {children}
              <Toaster position="bottom-right" />
            </LocaleContext.Provider>
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
