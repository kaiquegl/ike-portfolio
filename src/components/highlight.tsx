import { parseAsArrayOf, parseAsString, useQueryState } from "nuqs";
import { cn } from "@/lib/utils";

type HighlightSkillProps = {
  children: React.ReactNode;
  value: string;
};

export function HighlightSkill({ children, value }: HighlightSkillProps) {
  const [skills] = useQueryState("skills", parseAsArrayOf(parseAsString).withDefault([]));

  return (
    <span className={cn(skills.some((skill) => skill === value) && "border-spacing-4 border-b-2 border-b-primary")}>
      {children}
    </span>
  );
}
