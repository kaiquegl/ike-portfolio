import { TanStackDevtools } from "@tanstack/react-devtools";
import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { NuqsAdapter } from "nuqs/adapters/tanstack-router";
import { useState } from "react";

import { getThemeSSR } from "@/core/providers/theme/theme.server";
import { ThemeContext } from "@/core/providers/theme/theme-context.client";
import { createThemeStore } from "@/core/providers/theme/theme-factory.client";

import appCss from "../styles.css?url";

export const Route = createRootRoute({
  beforeLoad: async () => {
    const theme = await getThemeSSR();
    return { theme };
  },
  head: () => ({
    meta: [
      {
        charSet: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        title: "Portfólio - Ike UI"
      }
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss
      }
    ]
  }),

  shellComponent: RootDocument
});

function RootDocument({ children }: { children: React.ReactNode }) {
  const { theme } = Route.useRouteContext();
  const [themeStore] = useState(() => createThemeStore({ theme }));

  return (
    <html className={theme} lang="pt-BR">
      <head>
        <HeadContent />
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
            <ThemeContext.Provider value={themeStore}>{children}</ThemeContext.Provider>
          </NuqsAdapter>
        </div>

        <TanStackDevtools
          config={{ position: "bottom-right" }}
          plugins={[{ name: "Tanstack Router", render: <TanStackRouterDevtoolsPanel /> }]}
        />
        <Scripts />
      </body>
    </html>
  );
}
