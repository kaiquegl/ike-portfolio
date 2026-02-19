import { parseAsArrayOf, parseAsString, useQueryState } from "nuqs";
import type { SKILLS_QUERIES } from "@/core/constants/skills";
import { cn } from "@/lib/utils";

type HighlightSkillProps = {
  children: React.ReactNode;
  value: SKILLS_QUERIES;
};

export function HighlightSkill({ children, value }: HighlightSkillProps) {
  const [skills, setSkills] = useQueryState("skills", parseAsArrayOf(parseAsString).withDefault([]));

  function handleSkillToggle() {
    if (skills.some((skill) => skill === value)) {
      setSkills(() => skills.filter((skill) => skill !== value));
    } else {
      setSkills(() => [...skills, value]);
    }
  }

  return (
    <button
      className={cn(
        "cursor-pointer border-transparent border-b-2",
        skills.some((skill) => skill === value) && "border-spacing-4 border-b-2 border-b-primary text-foreground"
      )}
      onClick={handleSkillToggle}
      type="button"
    >
      {children}
    </button>
  );
}
