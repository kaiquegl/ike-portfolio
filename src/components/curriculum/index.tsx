import { Rocket01Icon, WorkHistoryIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Separator } from "../ui/separator";
import { CurriculumAbout } from "./about";
import { CurriculumExperienceElitesoft } from "./exp-elitesoft";
import { CurriculumExperienceLeanwork } from "./exp-leanwork";

export function Curriculum() {
  return (
    <div className="flex flex-col gap-4 lg:gap-8">
      <div className="flex flex-col gap-3 lg:gap-6">
        <p className="inline-flex items-center gap-2 text-base lg:text-lg">
          <HugeiconsIcon className="text-primary" icon={Rocket01Icon} size={24} /> Sobre
        </p>
        <CurriculumAbout />
      </div>

      <Separator />

      <div className="flex flex-col gap-3 lg:gap-6">
        <p className="inline-flex items-center gap-2 text-base lg:text-lg">
          <HugeiconsIcon className="text-primary" icon={WorkHistoryIcon} size={24} /> Experiências Profissionais
        </p>

        <CurriculumExperienceLeanwork />

        <CurriculumExperienceElitesoft />
      </div>
    </div>
  );
}
