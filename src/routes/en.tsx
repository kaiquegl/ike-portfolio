import { createFileRoute } from "@tanstack/react-router";
import { PortfolioPage } from "@/components/portfolio-page";
import { buildPersonJsonLd, buildWebSiteJsonLd } from "@/core/seo/site-metadata";

export const Route = createFileRoute("/en")({
  head: () => ({
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify([buildPersonJsonLd(), buildWebSiteJsonLd()])
      }
    ]
  }),
  component: PortfolioPage
});
