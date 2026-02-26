import { HighlightSkill } from "@/components/highlight-skill";
import { useTranslation } from "@/core/i18n/use-translation";

export function Footer() {
  const t = useTranslation();

  return (
    <footer className="border-border border-t py-3 lg:py-4">
      <div className="container mx-auto flex max-w-7xl flex-col items-center justify-between gap-1 px-4 sm:px-6 lg:gap-2 lg:px-0">
        <small className="text-muted-foreground text-xs leading-tight">{t("footer.copyright")}</small>
        <p className="text-[0.625rem] text-muted-foreground leading-tight">
          {t("footer.techIntro")} TanstackStart, <HighlightSkill value="shadcn">Shadcn UI</HighlightSkill>,{" "}
          <HighlightSkill value="tailwindcss">TailwindCSS</HighlightSkill>,{" "}
          <HighlightSkill value="typescript">Typescript</HighlightSkill>, Nuqs {t("footer.connector")}{" "}
          <HighlightSkill value="react">React</HighlightSkill>.
        </p>
      </div>
    </footer>
  );
}
