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
        <NuqsAdapter>
          <ThemeContext.Provider value={themeStore}>{children}</ThemeContext.Provider>
        </NuqsAdapter>

        <TanStackDevtools
          config={{ position: "bottom-right" }}
          plugins={[{ name: "Tanstack Router", render: <TanStackRouterDevtoolsPanel /> }]}
        />
        <Scripts />
      </body>
    </html>
  );
}
