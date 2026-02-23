import { CodeFolderIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { VerticalTimeline } from "@/components/timeline/vertical-timeline";
import { EXP_LEANWORK } from "@/core/constants/exp-leanwork";

export function CurriculumExperienceLeanwork() {
  return (
    <div className="flex flex-col gap-3 lg:gap-4">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div className="inline-flex items-center gap-3">
          <div className="rounded-2xl border border-muted-foreground/40 bg-muted p-2.5 dark:bg-muted/30">
            <HugeiconsIcon className="text-muted-foreground" icon={CodeFolderIcon} size={24} />
          </div>
          <div>
            <h4 className="font-bold text-foreground text-lg leading-snug">Leanwork</h4>
            <p className="text-muted-foreground text-xs leading-tight">Londrina, Brasil - Hibrido</p>
          </div>
        </div>

        <span className="shrink-0 self-start rounded-md bg-muted/30 px-2 py-1 text-muted-foreground text-xs">
          Jul 2018 ~ <strong className="text-green-600">Hoje</strong>
        </span>
      </div>

      <VerticalTimeline className="mt-2" current items={EXP_LEANWORK} />
    </div>
  );
}
