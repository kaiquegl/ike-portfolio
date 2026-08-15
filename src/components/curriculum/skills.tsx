import { parseAsArrayOf, parseAsString, useQueryState } from "nuqs";
import { SKILLS_MAP, type SKILLS_QUERIES } from "@/core/constants/skills";
import type { MessageKey } from "@/core/i18n/messages/en";
import { useTranslation } from "@/core/i18n/use-translation";
import { cn } from "@/lib/utils";

type SkillSection = (typeof SKILLS_MAP)[number]["section"];

type SkillCategory = {
  labelKey: MessageKey;
  section: SkillSection;
};

const LEFT_CATEGORIES: SkillCategory[] = [
  { labelKey: "skills.category.frontend", section: "frontend" },
  { labelKey: "skills.category.design", section: "design" }
];

const RIGHT_CATEGORIES: SkillCategory[] = [
  { labelKey: "skills.category.backend", section: "backend" },
  { labelKey: "skills.category.devops", section: "devops" }
];

const DEFAULT_SKILLS = ["react", "nextjs", "typescript"];

type SkillCategoryBlockProps = {
  category: SkillCategory;
  onSkillToggle: (skillQuery: SKILLS_QUERIES) => void;
  selectedSkills: string[];
};

function SkillCategoryBlock({ category, onSkillToggle, selectedSkills }: SkillCategoryBlockProps) {
  const t = useTranslation();
  const categorySkills = SKILLS_MAP.filter((skill) => skill.section === category.section);

  return (
    <div className="flex flex-col gap-2.5 px-4 py-3.5 sm:px-5 sm:py-4">
      <h3 className="font-medium text-primary text-xs uppercase tracking-[0.14em]">{t(category.labelKey)}</h3>

      <ul className="flex flex-wrap gap-1.5 sm:gap-2">
        {categorySkills.map((skill) => {
          const isSelected = selectedSkills.includes(skill.query);

          return (
            <li key={skill.query}>
              <button
                aria-label={`Toggle ${skill.name}`}
                aria-pressed={isSelected}
                className={cn(
                  "cursor-pointer rounded-lg border px-2.5 py-1 text-xs transition-[color,border-color,background-color] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 sm:text-[0.8125rem]",
                  isSelected
                    ? "border-primary/50 bg-primary/10 text-foreground"
                    : "border-border bg-transparent text-muted-foreground hover:border-primary/40 hover:text-primary"
                )}
                onClick={() => onSkillToggle(skill.query)}
                type="button"
              >
                {skill.name}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

type SkillsColumnProps = {
  categories: SkillCategory[];
  justifyBetween?: boolean;
  onSkillToggle: (skillQuery: SKILLS_QUERIES) => void;
  selectedSkills: string[];
};

function SkillsColumn({ categories, justifyBetween = false, onSkillToggle, selectedSkills }: SkillsColumnProps) {
  return (
    <div
      className={cn(
        "flex flex-col overflow-hidden rounded-3xl border border-border bg-card",
        justifyBetween && "md:h-full md:justify-between"
      )}
    >
      {categories.map((category, categoryIndex) => (
        <div className={cn(categoryIndex > 0 && "border-border border-t")} key={category.section}>
          <SkillCategoryBlock category={category} onSkillToggle={onSkillToggle} selectedSkills={selectedSkills} />
        </div>
      ))}
    </div>
  );
}

export function CurriculumSkills() {
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
    <div className="grid grid-cols-1 items-stretch gap-3 sm:gap-4 md:grid-cols-2">
      <SkillsColumn categories={LEFT_CATEGORIES} onSkillToggle={handleSkillToggle} selectedSkills={skills} />
      <SkillsColumn
        categories={RIGHT_CATEGORIES}
        justifyBetween
        onSkillToggle={handleSkillToggle}
        selectedSkills={skills}
      />
    </div>
  );
}
