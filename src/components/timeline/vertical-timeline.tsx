/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: 'This is a valid use case for dangerouslySetInnerHtml' */

import { parseAsArrayOf, parseAsString, useQueryState } from "nuqs";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import type { ExpType } from "@/core/constants/exp-type";
import { SKILLS_MAP, type SKILLS_QUERIES } from "@/core/constants/skills";
import { cn } from "@/lib/utils";

type VerticalTimelineProps = {
  items: ExpType[];
  className?: string;
};

export function VerticalTimeline({ items, className }: VerticalTimelineProps) {
  const [skills, setSkills] = useQueryState("skills", parseAsArrayOf(parseAsString).withDefault([]));

  function handleSkillToggle(newSkills: string[]) {
    setSkills(() => newSkills);
  }

  return (
    <ol className={cn("relative ml-6 flex flex-col gap-4 border-border border-l pl-6 lg:gap-6", className)}>
      {items.map((item) => (
        <li
          className="relative flex flex-col gap-2 last:mb-0 lg:gap-4 [&:first-of-type>span]:border-primary [&:first-of-type>span]:bg-primary [&:hover>span]:border-primary"
          key={item.id}
        >
          <span
            aria-hidden="true"
            className={cn(
              "absolute top-1.5 -left-7.5 h-3 w-3 rounded-full border-2",
              "border-muted-foreground/40 bg-background"
            )}
          />

          <div className="inline-flex items-center gap-4">
            <h5
              className="font-bold text-base text-foreground leading-snug"
              dangerouslySetInnerHTML={{ __html: item.title }}
            />

            <span className="text-muted-foreground text-xs">{item.period}</span>
          </div>

          {item.bulletPoints && item.bulletPoints.length > 0 && (
            <ul className="flex flex-col gap-1 lg:gap-2">
              {item.bulletPoints.map((point, index) => (
                <li
                  className="before: flex gap-2 text-muted-foreground text-sm leading-relaxed before:mt-1.5 before:h-2 before:w-2 before:shrink-0 before:rounded-full before:border before:border-muted-foreground/40 before:bg-background hover:text-foreground hover:before:bg-primary"
                  key={typeof point === "string" ? point : index.toString()}
                >
                  {point}
                </li>
              ))}
            </ul>
          )}

          {item.tags && item.tags.length > 0 && (
            <ToggleGroup
              multiple
              onValueChange={handleSkillToggle}
              size="sm"
              spacing={2}
              value={skills}
              variant="outline"
            >
              {item.tags.map((tag) => (
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
          )}
        </li>
      ))}
    </ol>
  );
}
