import { DiplomaIcon, LanguageSquareIcon, MapPin, SourceCodeSquareIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export function SidebarList() {
  return (
    <ul className="flex flex-col gap-1.5 lg:gap-3">
      <li className="inline-flex items-center gap-2 text-muted-foreground text-sm leading-tight">
        <HugeiconsIcon icon={SourceCodeSquareIcon} size={20} /> 9+ anos.
      </li>
      <li className="inline-flex items-center gap-2 text-muted-foreground text-sm leading-tight">
        <HugeiconsIcon icon={MapPin} size={20} /> Londrina, Brasil.
      </li>
      <li className="inline-flex items-center gap-2 text-muted-foreground text-sm leading-tight">
        <HugeiconsIcon icon={LanguageSquareIcon} size={20} /> Português & English.
      </li>
      <li className="inline-flex items-center gap-2 text-muted-foreground text-sm leading-tight">
        <HugeiconsIcon icon={DiplomaIcon} size={20} /> Engenheiro da Computação.
      </li>

      {/* <li>
        <ToggleGroup
          className="mt-2 flex-wrap"
          multiple
          onValueChange={handleSkillToggle}
          size="sm"
          spacing={2}
          value={skills}
          variant="outline"
        >
          {SKILLS_MAP.map((skill) => (
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
      </li> */}
    </ul>
  );
}
