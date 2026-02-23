import { parseAsArrayOf, parseAsString, useQueryState } from "nuqs";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { SKILLS_MAP, type SKILLS_NAMES, type SKILLS_QUERIES } from "@/core/constants/skills";

export function CurriculumDegree() {
  const [skills, setSkills] = useQueryState("skills", parseAsArrayOf(parseAsString).withDefault([]));

  function handleSkillToggle(newSkills: string[]) {
    setSkills(() => newSkills);
  }

  return (
    <div>
      <ol className="flex flex-col gap-3 lg:gap-4">
        <li className="flex flex-col gap-2 lg:gap-3">
          <div className="flex items-start justify-between">
            <div className="flex flex-col gap-0.5 lg:gap-1">
              <p>Pós-Graduação Full-Stack 360° com Inteligência Artificial</p>
              <p className="text-muted-foreground text-xs leading-tight">Rocketseat</p>
            </div>

            <span className="rounded-md bg-muted/30 px-2 py-1 text-muted-foreground text-xs">
              Jan 2025 ~ <strong className="text-green-600">Hoje</strong>
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
          <div className="flex items-start justify-between">
            <div className="flex flex-col gap-0.5 lg:gap-1">
              <p>Engenharia da Computação</p>
              <p className="text-muted-foreground text-xs leading-tight">UNOPAR - Universidade Norte do Paraná</p>
            </div>

            <span className="rounded-md bg-muted/30 px-2 py-1 text-muted-foreground text-xs">Jan 2013 ~ Dez 2017</span>
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
