import { CodeFolderIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { getExpElitesoft } from "@/core/constants/exp-elitesoft";
import { useTranslation } from "@/core/i18n/use-translation";
import { useLocale } from "@/core/providers/locale/locale-hook.client";
import { VerticalTimeline } from "../timeline/vertical-timeline";

export function CurriculumExperienceElitesoft() {
  const t = useTranslation();
  const locale = useLocale((state) => state.locale);

  return (
    <div className="flex flex-col lg:gap-3">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div className="inline-flex items-center gap-3">
          <div className="rounded-2xl border border-muted-foreground/40 bg-muted p-2.5 dark:bg-muted/30">
            <HugeiconsIcon className="text-muted-foreground" icon={CodeFolderIcon} size={24} />
          </div>
          <div>
            <h5 className="font-bold text-foreground text-lg leading-snug">Elitesoft</h5>
            <p className="text-muted-foreground text-xs leading-tight">{t("exp.elitesoft.location")}</p>
          </div>
        </div>

        <span className="shrink-0 self-start rounded-md bg-muted/30 px-2 py-1 text-muted-foreground text-xs">
          Jan 2017 ~ Jun 2018
        </span>
      </div>

      <VerticalTimeline className="mt-2" items={getExpElitesoft(locale)} />
    </div>
  );
}
