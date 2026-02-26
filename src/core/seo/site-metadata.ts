import { en, type MessageKey } from "@/core/i18n/messages/en";
import { ptBR } from "@/core/i18n/messages/pt-BR";
import type { Locale } from "@/core/providers/locale/locale-factory.client";

export const SITE_URL = "https://ike-dev.com.br";

const MESSAGES: Record<Locale, Record<MessageKey, string>> = {
  en,
  "pt-BR": ptBR
};

type BuildSeoHeadOptions = {
  locale: Locale;
  path: string;
};

export function buildSeoHead({ locale, path }: BuildSeoHeadOptions) {
  const messages = MESSAGES[locale];
  const title = messages["meta.title"];
  const description = messages["meta.description"];
  const canonicalUrl = `${SITE_URL}${path === "/" ? "" : path}`;

  return {
    title,
    meta: [
      { charSet: "utf-8" as const },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "description", content: description },
      { name: "robots", content: "index, follow" },

      { property: "og:type", content: "website" },
      { property: "og:locale", content: locale === "pt-BR" ? "pt_BR" : "en_US" },
      { property: "og:url", content: canonicalUrl },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:site_name", content: "Ike UI" },
      { property: "og:image", content: "/assets/ike-graph.png" },

      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description }
    ],
    links: [
      { rel: "canonical", href: canonicalUrl },
      { rel: "manifest", href: "/manifest.json" }
    ]
  };
}

export function buildPersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Kaique Lima",
    jobTitle: "Senior Frontend Engineer",
    url: SITE_URL,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Londrina",
      addressRegion: "PR",
      addressCountry: "BR"
    },
    knowsLanguage: ["pt-BR", "en"],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "UNOPAR - Universidade Norte do Paraná"
    }
  };
}

export function buildWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Ike UI",
    url: SITE_URL
  };
}
