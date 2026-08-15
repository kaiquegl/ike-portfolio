import { parseAsArrayOf, parseAsString, useQueryState } from "nuqs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { getExpElitesoft } from "@/core/constants/exp-elitesoft";
import { getExpLeanwork } from "@/core/constants/exp-leanwork";
import type { ExpType } from "@/core/constants/exp-type";
import { SKILLS_MAP, type SKILLS_NAMES, type SKILLS_QUERIES } from "@/core/constants/skills";
import { useTranslation } from "@/core/i18n/use-translation";
import { useLocale } from "@/core/providers/locale/locale-hook";
import { cn } from "@/lib/utils";

const DEFAULT_SKILLS = ["react", "nextjs", "typescript"];
const DEFAULT_OPEN_EXPERIENCE = ["leanwork-wake"];

function resolveSkillQuery(tag: SKILLS_NAMES): SKILLS_QUERIES {
  return SKILLS_MAP.find((skill) => skill.name === tag)?.query as SKILLS_QUERIES;
}

function ExperienceCompanyLine({ item }: { item: ExpType }) {
  const t = useTranslation();

  const clientLink = item.companyUrl ? (
    <a
      className="text-muted-foreground no-underline hover:text-primary"
      href={item.companyUrl}
      rel="noopener noreferrer"
      target="_blank"
    >
      {item.companyName}
    </a>
  ) : (
    <span className="text-muted-foreground">{item.companyName}</span>
  );

  if (!item.viaLeanwork) {
    return <span className="text-xs leading-tight">{clientLink}</span>;
  }

  return (
    <span className="text-muted-foreground text-xs leading-tight">
      Leanwork
      <span className="text-muted-foreground/80">
        {" "}
        • {t("exp.outsourcingAt")}{" "}
      </span>
      {clientLink}
    </span>
  );
}

export function CurriculumExperience() {
  const t = useTranslation();
  const locale = useLocale((state) => state.locale);
  const [skills, setSkills] = useQueryState("skills", parseAsArrayOf(parseAsString).withDefault(DEFAULT_SKILLS));

  const experienceItems = [...getExpLeanwork(locale), ...getExpElitesoft(locale)];

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
    <Accordion
      className="overflow-hidden rounded-3xl border-border bg-card"
      defaultValue={DEFAULT_OPEN_EXPERIENCE}
      multiple
    >
      {experienceItems.map((item) => (
        <AccordionItem className="border-border bg-transparent data-open:bg-transparent" key={item.id} value={item.id}>
          <AccordionTrigger className="gap-4 p-3 sm:p-4">
            <div className="flex min-w-0 flex-1 flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
              <div className="flex min-w-0 flex-col gap-0.5 text-left">
                <span className="font-semibold text-foreground text-sm leading-snug sm:text-base">
                  {t(item.roleKey ?? "exp.role")}
                </span>
                <ExperienceCompanyLine item={item} />
              </div>

              <div className="flex shrink-0 flex-wrap items-center gap-2 self-start">
                <span className="rounded-md bg-muted/30 px-2 py-1 text-muted-foreground text-xs">{item.period}</span>
                {item.current ? (
                  <span className="rounded-md border border-emerald-500/40 px-2 py-1 font-medium text-emerald-500 text-xs">
                    {t("exp.current")}
                  </span>
                ) : null}
              </div>
            </div>
          </AccordionTrigger>

          <AccordionContent className="flex flex-col gap-3 p-3 sm:gap-4 sm:p-4">
            {item.bulletPoints.length > 0 ? (
              <ul className="flex flex-col gap-2">
                {item.bulletPoints.map((point, index) => (
                  <li
                    className="flex gap-2 text-muted-foreground text-sm leading-relaxed before:mt-1.5 before:size-1.5 before:shrink-0 before:rounded-full before:bg-primary before:content-['']"
                    key={typeof point === "string" ? point : index.toString()}
                  >
                    <span className="min-w-0">{point}</span>
                  </li>
                ))}
              </ul>
            ) : null}

            {item.tags.length > 0 ? (
              <ul className="flex flex-wrap gap-1.5 sm:gap-2">
                {item.tags.map((tag) => {
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
            ) : null}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
