import { CodeFolderIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { VerticalTimeline } from "@/components/timeline/vertical-timeline";
import { EXP_LEANWORK } from "@/core/constants/exp-leanwork";

export function CurriculumExperienceLeanwork() {
  return (
    <div className="flex flex-col gap-3 lg:gap-4">
      <div className="flex items-start justify-between">
        <div className="inline-flex items-center lg:gap-3">
          <div className="rounded-2xl border border-primary/60 bg-primary/20 p-2.5">
            <HugeiconsIcon className="text-primary" icon={CodeFolderIcon} size={26} />
          </div>
          <div>
            <h4 className="font-bold text-foreground text-lg leading-snug">Leanwork</h4>
            <p className="text-muted-foreground text-xs leading-tight">Londrina, Brasil - Hibrido</p>
          </div>
        </div>

        <span className="rounded-md bg-muted/30 px-2 py-1 text-muted-foreground text-xs">
          Jul 2018 ~ <strong className="text-green-600">Hoje</strong>
        </span>
      </div>

      <VerticalTimeline className="mt-2" items={EXP_LEANWORK} />
    </div>
  );
}
