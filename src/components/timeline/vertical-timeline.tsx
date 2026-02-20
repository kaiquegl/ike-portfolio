/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: 'This is a valid use case for dangerouslySetInnerHtml' */

import { parseAsArrayOf, parseAsString, useQueryState } from "nuqs";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import type { ExpType } from "@/core/constants/exp-type";
import { SKILLS_MAP, type SKILLS_QUERIES } from "@/core/constants/skills";
import { cn } from "@/lib/utils";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

type VerticalTimelineProps = {
  items: ExpType[];
  current?: boolean;
  className?: string;
};

export function VerticalTimeline({ items, current, className }: VerticalTimelineProps) {
  const [skills, setSkills] = useQueryState("skills", parseAsArrayOf(parseAsString).withDefault([]));

  function handleSkillToggle(newSkills: string[]) {
    setSkills(() => newSkills);
  }

  return (
    <Accordion
      className="overflow-visible!"
      multiple
      render={
        <ol className={cn("relative border-border border-l", className)}>
          {items.map((item) => (
            <AccordionItem
              className="bg-transparent!"
              key={item.id}
              render={
                <li
                  className={cn(
                    "relative last:mb-0 [&:hover>span]:border-primary",
                    !!current && "[&:first-of-type>span]:border-primary [&:first-of-type>span]:bg-primary"
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute top-5 -left-1.5 h-3 w-3 rounded-full border-2",
                      "border-muted-foreground/40 bg-background"
                    )}
                  />

                  <AccordionTrigger className="border-none hover:cursor-pointer hover:no-underline lg:py-4 lg:pr-4 lg:pl-6">
                    <div className="inline-flex items-center gap-4">
                      <h5
                        className="font-bold text-base text-foreground leading-snug"
                        dangerouslySetInnerHTML={{ __html: item.title }}
                      />

                      <span className="text-muted-foreground text-xs">{item.period}</span>
                    </div>
                  </AccordionTrigger>

                  <AccordionContent className="flex flex-col lg:gap-6 lg:p-4 lg:pb-6">
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
                  </AccordionContent>
                </li>
              }
            />
          ))}
        </ol>
      }
    />
  );
}
