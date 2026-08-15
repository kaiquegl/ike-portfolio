import { Briefcase01Icon, Location01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { HighlightSkill } from "@/components/highlight-skill";
import { useTranslation } from "@/core/i18n/use-translation";
import { getYearsOfExperience, withYearsOfExperience } from "@/core/utils/years-of-experience";

export function Hero() {
  const t = useTranslation();
  const years = getYearsOfExperience();
  const headline = withYearsOfExperience(t("hero.headline"), years);

  return (
    <section className="rounded-3xl border border-border bg-card p-5 shadow-sm sm:p-6 lg:p-8" id="top">
      <div className="flex flex-col items-center gap-5 text-center sm:gap-6 lg:flex-row lg:items-start lg:gap-8 lg:text-left">
        <div className="size-24 shrink-0 overflow-hidden rounded-full border-2 border-primary sm:size-28 lg:size-32">
          <img
            alt={t("hero.photoAlt")}
            className="size-full object-cover"
            height={128}
            src="/assets/kaique-lima-foto.webp"
            width={128}
          />
        </div>

        <div className="flex min-w-0 flex-1 flex-col items-center gap-3 lg:items-start lg:gap-4">
          <div className="flex flex-col items-center gap-1 lg:items-start">
            <h1 className="font-bold text-2xl text-foreground tracking-tight sm:text-3xl">
              Kaique Lima<span className="text-primary">.</span>
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base">{headline}</p>
            <p className="text-muted-foreground/80 text-xs sm:text-sm">{t("hero.handle")}</p>
          </div>

          <ul className="flex flex-col items-center gap-1.5 text-muted-foreground text-sm sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-4 sm:gap-y-1 lg:justify-start">
            <li className="inline-flex items-center gap-1.5">
              <HugeiconsIcon className="size-4 shrink-0 text-primary" icon={Location01Icon} />
              {t("hero.location")}
            </li>
            <li className="inline-flex items-center gap-1.5 font-mono text-xs sm:text-sm">
              <HugeiconsIcon className="size-4 shrink-0 text-primary" icon={Briefcase01Icon} />
              {t("hero.work")}
            </li>
          </ul>

          <div className="flex flex-wrap items-center justify-center gap-2 lg:justify-start">
            <span className="rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs">
              <HighlightSkill value="react">React</HighlightSkill>
            </span>
            <span className="rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs">
              <HighlightSkill value="nextjs">Next.js</HighlightSkill>
            </span>
            <span className="rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs">
              <HighlightSkill value="typescript">TypeScript</HighlightSkill>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
