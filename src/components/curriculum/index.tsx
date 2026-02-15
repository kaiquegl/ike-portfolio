import { Rocket01Icon, WorkHistoryIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Separator } from "../ui/separator";
import { CurriculumAbout } from "./about";

export function Curriculum() {
  return (
    <div className="flex flex-col gap-4 lg:gap-6">
      <div className="flex flex-col gap-1.5 lg:gap-3">
        <p className="inline-flex items-center gap-2 text-base lg:text-lg">
          <HugeiconsIcon className="text-primary" icon={Rocket01Icon} size={24} /> Sobre
        </p>
        <CurriculumAbout />
      </div>

      <Separator />

      <div className="flex flex-col gap-1.5 lg:gap-3">
        <p className="inline-flex items-center gap-2 text-base lg:text-lg">
          <HugeiconsIcon className="text-primary" icon={WorkHistoryIcon} size={24} /> Experiência
        </p>
      </div>
    </div>
  );
}
