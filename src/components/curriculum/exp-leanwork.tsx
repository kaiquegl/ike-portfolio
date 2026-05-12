import { CodeFolderIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { VerticalTimeline } from "@/components/timeline/vertical-timeline";
import { getExpLeanwork } from "@/core/constants/exp-leanwork";
import { useTranslation } from "@/core/i18n/use-translation";
import { useLocale } from "@/core/providers/locale/locale-hook";

export function CurriculumExperienceLeanwork() {
  const t = useTranslation();
  const locale = useLocale((state) => state.locale);

  return (
    <div className="flex flex-col gap-3 lg:gap-4">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div className="inline-flex items-center gap-3">
          <div className="rounded-2xl border border-muted-foreground/40 bg-muted p-2.5 dark:bg-muted/30">
            <HugeiconsIcon className="text-muted-foreground" icon={CodeFolderIcon} size={24} />
          </div>
          <div>
            <h4 className="font-bold text-foreground text-lg leading-snug">Leanwork</h4>
            <p className="text-muted-foreground text-xs leading-tight">{t("exp.leanwork.location")}</p>
          </div>
        </div>

        <span className="shrink-0 self-start rounded-md bg-muted/30 px-2 py-1 text-muted-foreground text-xs">
          Jul 2018 ~ <strong className="text-green-600">{t("common.today")}</strong>
        </span>
      </div>

      <VerticalTimeline className="mt-2" current items={getExpLeanwork(locale)} />
    </div>
  );
}
