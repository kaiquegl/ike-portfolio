import { Briefcase01Icon, Location01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useTranslation } from "@/core/i18n/use-translation";
import { getYearsOfExperience, withYearsOfExperience } from "@/core/utils/years-of-experience";

export function Hero() {
  const t = useTranslation();
  const years = getYearsOfExperience();
  const headline = withYearsOfExperience(t("hero.headline"), years);

  return (
    <section className="rounded-3xl border border-border bg-card p-2 shadow-sm sm:p-4" id="top">
      <div className="flex flex-col items-center gap-2 text-center sm:flex-row sm:items-start sm:gap-4">
        <div className="size-20 shrink-0 overflow-hidden rounded-full border-2 border-primary sm:size-25">
          <img
            alt={t("hero.photoAlt")}
            className="size-full object-cover"
            height={100}
            src="/assets/kaique-lima-foto.webp"
            width={100}
          />
        </div>

        <div className="flex min-w-0 flex-1 flex-col items-center gap-2 sm:gap-4">
          <div className="flex flex-col items-center gap-1 sm:gap-2">
            <h1 className="font-bold text-foreground text-xl tracking-tight sm:text-2xl">
              Kaique Lima<span className="text-primary">.</span>
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base">{headline}</p>
            {/* <p className="text-muted-foreground/80 text-xs sm:text-sm">{t("hero.handle")}</p> */}
          </div>

          <ul className="flex flex-col items-center gap-1.5 text-muted-foreground text-sm sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-4 sm:gap-y-1 lg:justify-start">
            <li className="inline-flex items-center gap-1.5">
              <HugeiconsIcon className="size-5 shrink-0 text-primary" icon={Location01Icon} />
              {t("hero.location")}
            </li>
            <li className="inline-flex items-center gap-1.5 font-mono text-xs sm:text-sm">
              <HugeiconsIcon className="size-5 shrink-0 text-primary" icon={Briefcase01Icon} />
              {t("hero.work")}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
