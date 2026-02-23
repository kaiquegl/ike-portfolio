import { parseAsArrayOf, parseAsString, useQueryState } from "nuqs";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { SKILLS_MAP } from "@/core/constants/skills";

export function CurriculumSkills() {
  const [skills, setSkills] = useQueryState(
    "skills",
    parseAsArrayOf(parseAsString).withDefault(["react", "nextjs", "typescript"])
  );

  const frontendSkills = SKILLS_MAP.filter((skill) => skill.section === "frontend");
  const backendSkills = SKILLS_MAP.filter((skill) => skill.section === "backend");
  const devopsSkills = SKILLS_MAP.filter((skill) => skill.section === "devops");
  const designSkills = SKILLS_MAP.filter((skill) => skill.section === "design");

  function handleSkillToggle(newSkills: string[]) {
    setSkills(() => newSkills);
  }

  return (
    <div className="grid grid-cols-2 gap-4 lg:gap-6">
      <div className="flex flex-col gap-2">
        <p>Frontend</p>
        <ToggleGroup
          className="mt-2 flex-wrap"
          multiple
          onValueChange={handleSkillToggle}
          size="sm"
          spacing={2}
          value={skills}
          variant="outline"
        >
          {frontendSkills.map((skill) => (
            <ToggleGroupItem
              aria-label={`Toggle ${skill.name}`}
              className="cursor-pointer"
              key={skill.query}
              value={skill.query}
            >
              {skill.name}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>

      <div className="flex flex-col gap-2">
        <p>Backend</p>
        <ToggleGroup
          className="mt-2 flex-wrap"
          multiple
          onValueChange={handleSkillToggle}
          size="sm"
          spacing={2}
          value={skills}
          variant="outline"
        >
          {backendSkills.map((skill) => (
            <ToggleGroupItem
              aria-label={`Toggle ${skill.name}`}
              className="cursor-pointer"
              key={skill.query}
              value={skill.query}
            >
              {skill.name}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>

      <div className="flex flex-col gap-2">
        <p>Design</p>
        <ToggleGroup
          className="mt-2 flex-wrap"
          multiple
          onValueChange={handleSkillToggle}
          size="sm"
          spacing={2}
          value={skills}
          variant="outline"
        >
          {designSkills.map((skill) => (
            <ToggleGroupItem
              aria-label={`Toggle ${skill.name}`}
              className="cursor-pointer"
              key={skill.query}
              value={skill.query}
            >
              {skill.name}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>

      <div className="flex flex-col gap-2">
        <p>DevOps</p>
        <ToggleGroup
          className="mt-2 flex-wrap"
          multiple
          onValueChange={handleSkillToggle}
          size="sm"
          spacing={2}
          value={skills}
          variant="outline"
        >
          {devopsSkills.map((skill) => (
            <ToggleGroupItem
              aria-label={`Toggle ${skill.name}`}
              className="cursor-pointer"
              key={skill.query}
              value={skill.query}
            >
              {skill.name}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>
    </div>
  );
}
