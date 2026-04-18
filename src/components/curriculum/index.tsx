import { DiplomaIcon, SourceCodeIcon, WorkHistoryIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useTranslation } from "@/core/i18n/use-translation";

import { Separator } from "../ui/separator";
import { CurriculumDegree } from "./degree";
import { CurriculumExperienceElitesoft } from "./exp-elitesoft";
import { CurriculumExperienceLeanwork } from "./exp-leanwork";
import { CurriculumSkills } from "./skills";

export function Curriculum() {
  const t = useTranslation();

  return (
    <div className="flex flex-col gap-8 border-border lg:gap-10 lg:border-l lg:pl-6">
      <div className="flex flex-col gap-3 lg:gap-6">
        <h2 className="inline-flex items-center gap-2 text-lg lg:text-xl">
          <HugeiconsIcon className="text-primary" icon={SourceCodeIcon} size={24} /> {t("curriculum.technicalSkills")}
        </h2>

        <CurriculumSkills />
      </div>

      <Separator />

      <div className="flex flex-col gap-8 lg:gap-6">
        <h2 className="inline-flex items-center gap-2 text-lg lg:text-xl">
          <HugeiconsIcon className="text-primary" icon={WorkHistoryIcon} size={24} />{" "}
          {t("curriculum.professionalExperience")}
        </h2>

        <CurriculumExperienceLeanwork />

        <CurriculumExperienceElitesoft />
      </div>

      <Separator />

      <div className="flex flex-col gap-3 lg:gap-6">
        <h2 className="inline-flex items-center gap-2 text-lg lg:text-xl">
          <HugeiconsIcon className="text-primary" icon={DiplomaIcon} size={24} /> {t("curriculum.education")}
        </h2>

        <CurriculumDegree />
      </div>
    </div>
  );
}
