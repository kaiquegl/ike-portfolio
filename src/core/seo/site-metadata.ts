import { en, type MessageKey } from "@/core/i18n/messages/en";
import { ptBR } from "@/core/i18n/messages/pt-BR";
import type { Locale } from "@/core/providers/locale/locale-factory.client";

export const SITE_URL = "https://ike-dev.com.br";

const MESSAGES: Record<Locale, Record<MessageKey, string>> = {
  en,
  "pt-BR": ptBR
};

const OG_IMAGE_URL = `${SITE_URL}/assets/ike-graph.png`;
const OG_IMAGE_ALT = "Kaique Lima – Senior Frontend Engineer portfolio preview";

type BuildSeoHeadOptions = {
  locale: Locale;
  path: string;
};

export function buildSeoHead({ locale, path }: BuildSeoHeadOptions) {
  const messages = MESSAGES[locale];
  const title = messages["meta.title"];
  const description = messages["meta.description"];
  const canonicalUrl = `${SITE_URL}${path}`;

  return {
    title,
    meta: [
      { title },
      { charSet: "utf-8" as const },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "description", content: description },
      { name: "robots", content: "index, follow" },
      { name: "theme-color", content: "#000000" },

      { property: "og:type", content: "website" },
      { property: "og:locale", content: locale === "pt-BR" ? "pt_BR" : "en_US" },
      { property: "og:url", content: canonicalUrl },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:site_name", content: "Portfolio - Kaique Lima" },
      { property: "og:image", content: OG_IMAGE_URL },
      { property: "og:image:alt", content: OG_IMAGE_ALT },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },

      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: OG_IMAGE_URL },
      { name: "twitter:image:alt", content: OG_IMAGE_ALT }
    ],
    links: [
      { rel: "canonical", href: canonicalUrl },
      { rel: "manifest", href: "/manifest.json" },
      { rel: "alternate", hrefLang: "pt-BR", href: `${SITE_URL}/` },
      { rel: "alternate", hrefLang: "en", href: `${SITE_URL}/en` },
      { rel: "alternate", hrefLang: "x-default", href: `${SITE_URL}/` }
    ]
  };
}

export function buildPersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Kaique de Godoi Lima",
    jobTitle: "Senior Frontend Engineer",
    url: SITE_URL,
    image: `${SITE_URL}/assets/kaique-lima-foto.webp`,
    sameAs: ["https://github.com/kaiquegl", "https://www.linkedin.com/in/kaique-gl"],
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
    name: "Portfolio - Kaique Lima",
    url: SITE_URL
  };
}
