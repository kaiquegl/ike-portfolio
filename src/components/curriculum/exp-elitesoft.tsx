import { CodeFolderIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export function CurriculumExperienceElitesoft() {
  return (
    <div className="flex flex-col lg:gap-3">
      <div className="flex items-start justify-between">
        <div className="inline-flex items-center lg:gap-3">
          <div className="rounded-2xl border border-muted-foreground/40 bg-muted p-2.5 dark:bg-muted/30">
            <HugeiconsIcon className="text-muted-foreground" icon={CodeFolderIcon} size={24} />
          </div>
          <div>
            <h5 className="font-bold text-foreground text-lg leading-snug">Elitesoft</h5>
            <p className="text-muted-foreground text-xs leading-tight">Londrina, Brasil - Presencial</p>
          </div>
        </div>

        <span className="rounded-md bg-muted/30 px-2 py-1 text-muted-foreground text-xs">Jan 2017 ~ Jun 2018</span>
      </div>

      <div>
        <p>Front</p>
      </div>
    </div>
  );
}
