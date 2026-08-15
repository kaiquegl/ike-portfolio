import { useTranslation } from "@/core/i18n/use-translation";

import { CurriculumDegree } from "./degree";
import { CurriculumExperience } from "./experience";
import { CurriculumSkills } from "./skills";

export function Curriculum() {
  const t = useTranslation();

  return (
    <div className="flex flex-col gap-8 lg:gap-10">
      <section className="flex flex-col gap-3 sm:gap-4" id="skills">
        <h2 className="font-bold text-foreground text-lg sm:text-xl">{t("nav.skills")}</h2>

        <CurriculumSkills />
      </section>

      <section className="flex flex-col gap-3 sm:gap-4" id="experience">
        <h2 className="font-bold text-foreground text-lg sm:text-xl">{t("nav.experience")}</h2>

        <CurriculumExperience />
      </section>

      <section className="flex flex-col gap-3 sm:gap-4" id="education">
        <h2 className="font-bold text-foreground text-lg sm:text-xl">{t("nav.education")}</h2>

        <CurriculumDegree />
      </section>
    </div>
  );
}
