import { HighlightSkill } from "@/components/highlight-skill";
import { RichText } from "@/components/rich-text";
import { useTranslation } from "@/core/i18n/use-translation";

export function About() {
  const t = useTranslation();

  return (
    <section className="flex flex-col gap-3 sm:gap-4" id="about">
      <h2 className="font-bold text-foreground text-lg sm:text-xl">{t("nav.about")}</h2>

      <div className="rounded-3xl border border-border bg-card p-5 sm:p-6">
        <ul className="flex flex-col gap-4 text-muted-foreground text-sm leading-relaxed sm:text-[0.9375rem]">
          <li className="flex gap-3">
            <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
            <p className="text-pretty">
              <RichText text={t("about.bullet1.before")} /> <HighlightSkill value="react">React</HighlightSkill>{" "}
              <RichText text={t("about.bullet1.afterReact")} />{" "}
              <HighlightSkill value="typescript">TypeScript</HighlightSkill>{" "}
              <RichText text={t("about.bullet1.afterTypeScript")} />{" "}
              <HighlightSkill value="nextjs">Next.js</HighlightSkill> <RichText text={t("about.bullet1.afterNext")} />{" "}
              <HighlightSkill value="tanstack-start">TanStack Start</HighlightSkill>
              <RichText text={t("about.bullet1.afterTanstack")} />
            </p>
          </li>
          <li className="flex gap-3">
            <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
            <p className="text-pretty">
              <RichText text={t("about.bullet2")} />
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
