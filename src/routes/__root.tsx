import { TanStackDevtools } from "@tanstack/react-devtools";
import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { NuqsAdapter } from "nuqs/adapters/tanstack-router";
import { useEffect, useState } from "react";
import { Toaster } from "@/components/ui/sonner";
import { getGaMeasurementId, shouldLoadAnalytics } from "@/core/analytics/gtag";
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

const GA_MEASUREMENT_ID = getGaMeasurementId();
const LOAD_ANALYTICS = shouldLoadAnalytics();

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

        {LOAD_ANALYTICS ? (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} />
            <script>
              {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
            </script>
          </>
        ) : null}
      </head>
      <body>
        <div className="relative min-h-screen w-full">
          {/* <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `
              radial-gradient(circle at 50% 0%, rgba(142 ,81, 255, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 50% 50%,rgba(168, 85, 247, 0.1) 0%, transparent 100%),
              radial-gradient(circle at 50% 100%, rgba(142 ,81, 255, 0.1) 0%, transparent 50%)
            `
            }}
          /> */}
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `
              radial-gradient(circle at 0% 0%, rgba(168, 85, 247, 0.1) 0%, transparent 30%),
              radial-gradient(circle at 100% 0%, rgba(168, 85, 247, 0.1) 0%, transparent 30%),
              radial-gradient(circle at 50% 50%,  rgba(168, 85, 247, 0.04) 0%, transparent 100%),
              radial-gradient(circle at 0% 100%, rgba(168, 85, 247, 0.1) 0%, transparent 30%),
              radial-gradient(circle at 100% 100%, rgba(168, 85, 247, 0.1) 0%, transparent 30%)
            `
            }}
          />
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
