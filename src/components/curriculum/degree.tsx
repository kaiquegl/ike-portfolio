import { parseAsArrayOf, parseAsString, useQueryState } from "nuqs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SKILLS_MAP, type SKILLS_NAMES, type SKILLS_QUERIES } from "@/core/constants/skills";
import type { MessageKey } from "@/core/i18n/messages/en";
import { useTranslation } from "@/core/i18n/use-translation";
import { cn } from "@/lib/utils";

const DEFAULT_SKILLS = ["react", "nextjs", "typescript"];

type DegreeItem = {
  id: string;
  titleKey: MessageKey;
  institutionKey: MessageKey;
  dateRangeKey: MessageKey;
  tags: SKILLS_NAMES[];
};

const DEGREE_ITEMS: DegreeItem[] = [
  {
    id: "post-grad",
    titleKey: "degree.postGrad.title",
    institutionKey: "degree.postGrad.institution",
    dateRangeKey: "degree.postGrad.dateRange",
    tags: [
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
    ]
  },
  {
    id: "engineering",
    titleKey: "degree.engineering.title",
    institutionKey: "degree.engineering.institution",
    dateRangeKey: "degree.engineering.dateRange",
    tags: ["HTML/CSS", "Javascript", "MySQL", "PHP"]
  }
];

function resolveSkillQuery(tag: SKILLS_NAMES): SKILLS_QUERIES {
  return SKILLS_MAP.find((skill) => skill.name === tag)?.query as SKILLS_QUERIES;
}

export function CurriculumDegree() {
  const t = useTranslation();
  const [skills, setSkills] = useQueryState("skills", parseAsArrayOf(parseAsString).withDefault(DEFAULT_SKILLS));

  function handleSkillToggle(skillQuery: SKILLS_QUERIES) {
    setSkills((currentSkills) => {
      const selectedSkills = currentSkills ?? DEFAULT_SKILLS;

      if (selectedSkills.includes(skillQuery)) {
        return selectedSkills.filter((skill) => skill !== skillQuery);
      }

      return [...selectedSkills, skillQuery];
    });
  }

  return (
    <Accordion className="overflow-hidden rounded-3xl border-border bg-card" multiple>
      {DEGREE_ITEMS.map((degree) => (
        <AccordionItem
          className="border-border bg-transparent data-open:bg-transparent"
          key={degree.id}
          value={degree.id}
        >
          <AccordionTrigger className="gap-4 p-3 sm:p-4">
            <div className="flex min-w-0 flex-1 flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
              <div className="flex min-w-0 flex-col gap-0.5 text-left">
                <span className="font-semibold text-foreground text-sm leading-snug sm:text-base">
                  {t(degree.titleKey)}
                </span>
                <span className="text-muted-foreground text-xs leading-tight">{t(degree.institutionKey)}</span>
              </div>

              <span className="shrink-0 self-start rounded-md bg-muted/30 px-2 py-1 text-muted-foreground text-xs">
                {t(degree.dateRangeKey)}
              </span>
            </div>
          </AccordionTrigger>

          <AccordionContent className="p-3 sm:p-4">
            <ul className="flex flex-wrap gap-1.5 sm:gap-2">
              {degree.tags.map((tag) => {
                const skillQuery = resolveSkillQuery(tag);
                const isSelected = skills.includes(skillQuery);

                return (
                  <li key={tag}>
                    <button
                      aria-label={`Toggle ${tag}`}
                      aria-pressed={isSelected}
                      className={cn(
                        "cursor-pointer rounded-lg border px-2.5 py-1 text-xs transition-[color,border-color,background-color] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 sm:text-[0.8125rem]",
                        isSelected
                          ? "border-primary/50 bg-primary/10 text-foreground"
                          : "border-border bg-transparent text-muted-foreground hover:border-primary/40 hover:text-primary"
                      )}
                      onClick={() => handleSkillToggle(skillQuery)}
                      type="button"
                    >
                      {tag}
                    </button>
                  </li>
                );
              })}
            </ul>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
