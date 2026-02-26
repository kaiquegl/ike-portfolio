import { parseAsArrayOf, parseAsString, useQueryState } from "nuqs";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { SKILLS_MAP, type SKILLS_NAMES, type SKILLS_QUERIES } from "@/core/constants/skills";
import { useTranslation } from "@/core/i18n/use-translation";

export function CurriculumDegree() {
  const t = useTranslation();
  const [skills, setSkills] = useQueryState(
    "skills",
    parseAsArrayOf(parseAsString).withDefault(["react", "nextjs", "typescript"])
  );

  function handleSkillToggle(newSkills: string[]) {
    setSkills(() => newSkills);
  }

  return (
    <div>
      <ol className="flex flex-col gap-4 lg:gap-6">
        <li className="flex flex-col gap-2 lg:gap-3">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex flex-col gap-0.5 lg:gap-1">
              <p>{t("degree.postGrad.title")}</p>
              <p className="text-muted-foreground text-xs leading-tight">{t("degree.postGrad.institution")}</p>
            </div>

            <span className="shrink-0 self-start rounded-md bg-muted/30 px-2 py-1 text-muted-foreground text-xs">
              {t("degree.postGrad.dateStart")} <strong className="text-green-600">{t("common.today")}</strong>
            </span>
          </div>

          <ToggleGroup
            className="flex-wrap"
            multiple
            onValueChange={handleSkillToggle}
            size="sm"
            spacing={2}
            value={skills}
            variant="outline"
          >
            {(
              [
                "AWS",
                "CI/CD",
                "Docker",
                "React",
                "Next.js",
                "TypeScript",
                "Drizzle ORM",
                "Figma",
                "Fastify",
                "TailwindCSS",
                "Vite.js",
                "Node",
                "Shadcn UI"
              ] as SKILLS_NAMES[]
            ).map((tag) => (
              <ToggleGroupItem
                aria-label={`Toggle ${tag}`}
                className="cursor-pointer"
                key={tag}
                value={SKILLS_MAP.find((skill) => skill.name === tag)?.query as SKILLS_QUERIES}
              >
                {tag}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </li>

        <li className="flex flex-col gap-2 lg:gap-3">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex flex-col gap-0.5 lg:gap-1">
              <p>{t("degree.engineering.title")}</p>
              <p className="text-muted-foreground text-xs leading-tight">{t("degree.engineering.institution")}</p>
            </div>

            <span className="shrink-0 self-start rounded-md bg-muted/30 px-2 py-1 text-muted-foreground text-xs">
              {t("degree.engineering.dateRange")}
            </span>
          </div>

          <ToggleGroup
            multiple
            onValueChange={handleSkillToggle}
            size="sm"
            spacing={2}
            value={skills}
            variant="outline"
          >
            {(["HTML/CSS", "Javascript", "MySQL", "PHP"] as SKILLS_NAMES[]).map((tag) => (
              <ToggleGroupItem
                aria-label={`Toggle ${tag}`}
                className="cursor-pointer"
                key={tag}
                value={SKILLS_MAP.find((skill) => skill.name === tag)?.query as SKILLS_QUERIES}
              >
                {tag}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </li>
      </ol>
    </div>
  );
}
