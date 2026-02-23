import { DiplomaIcon, SourceCodeIcon, WorkHistoryIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { CurriculumDegree } from "@/components/curriculum/degree";
import { Separator } from "../ui/separator";
import { CurriculumExperienceElitesoft } from "./exp-elitesoft";
import { CurriculumExperienceLeanwork } from "./exp-leanwork";
import { CurriculumSkills } from "./skills";

export function Curriculum() {
  return (
    <div className="flex flex-col gap-4 border-border border-l pl-4 lg:gap-8 lg:pl-6">
      {/* <div className="flex flex-col gap-3 lg:gap-6">
        <p className="inline-flex items-center gap-2 text-base lg:text-lg">
          <HugeiconsIcon className="text-primary" icon={Rocket01Icon} size={24} /> Sobre
        </p>
        <CurriculumAbout />
      </div>

      <Separator /> */}

      <div className="flex flex-col gap-3 lg:gap-6">
        <p className="inline-flex items-center gap-2 text-base lg:text-lg">
          <HugeiconsIcon className="text-primary" icon={SourceCodeIcon} size={24} /> Habilidades Técnicas
        </p>

        <CurriculumSkills />
      </div>

      <Separator />

      <div className="flex flex-col gap-3 lg:gap-6">
        <p className="inline-flex items-center gap-2 text-base lg:text-lg">
          <HugeiconsIcon className="text-primary" icon={WorkHistoryIcon} size={24} /> Experiências Profissionais
        </p>

        <CurriculumExperienceLeanwork />

        <CurriculumExperienceElitesoft />
      </div>

      <Separator />

      <div className="flex flex-col gap-3 lg:gap-6">
        <p className="inline-flex items-center gap-2 text-base lg:text-lg">
          <HugeiconsIcon className="text-primary" icon={DiplomaIcon} size={24} /> Formação Acadêmica
        </p>

        <CurriculumDegree />
      </div>
    </div>
  );
}
