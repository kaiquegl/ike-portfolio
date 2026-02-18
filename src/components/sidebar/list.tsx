import { LanguageSquareIcon, MapPin, SourceCodeSquareIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { parseAsArrayOf, parseAsString, useQueryState } from "nuqs";

import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";

export function SidebarList() {
  const [skills, setSkills] = useQueryState("skills", parseAsArrayOf(parseAsString).withDefault([]));

  function handleSkillToggle(newSkills: string[]) {
    setSkills(newSkills);
  }

  return (
    <ul className="flex flex-col gap-1.5 lg:gap-3">
      <li className="inline-flex items-center gap-2 text-muted-foreground text-sm leading-tight">
        <HugeiconsIcon icon={SourceCodeSquareIcon} size={20} /> 7+ anos.
      </li>
      <li className="inline-flex items-center gap-2 text-muted-foreground text-sm leading-tight">
        <HugeiconsIcon icon={MapPin} size={20} /> Londrina, Brasil.
      </li>
      <li className="inline-flex items-center gap-2 text-muted-foreground text-sm leading-tight">
        <HugeiconsIcon icon={LanguageSquareIcon} size={20} /> Português & English.
      </li>

      <li>
        <ToggleGroup
          className="mt-2 flex-wrap"
          defaultValue={skills}
          multiple
          onValueChange={handleSkillToggle}
          size="default"
          spacing={2}
          variant="outline"
        >
          <ToggleGroupItem aria-label="Toggle React" value="react">
            React
          </ToggleGroupItem>
          <ToggleGroupItem aria-label="Toggle Next.js" value="nextjs">
            Next.js
          </ToggleGroupItem>
          <ToggleGroupItem aria-label="Toggle TypeScript" value="typescript">
            TypeScript
          </ToggleGroupItem>
          <ToggleGroupItem aria-label="Toggle Angular" value="angular">
            Angular
          </ToggleGroupItem>
          <ToggleGroupItem aria-label="Toggle Node" value="node">
            Node
          </ToggleGroupItem>
          <ToggleGroupItem aria-label="Toggle Jquery" value="jquery">
            jQuery
          </ToggleGroupItem>
          <ToggleGroupItem aria-label="Toggle Fastify" value="fastify">
            Fastify
          </ToggleGroupItem>
          <ToggleGroupItem aria-label="Toggle Drizzle" value="drizzle">
            Drizzle ORM
          </ToggleGroupItem>
          <ToggleGroupItem aria-label="Toggle PostgreSQL" value="postgresql">
            PostgreQSL
          </ToggleGroupItem>
          <ToggleGroupItem aria-label="Toggle MySQL" value="mysql">
            MySQL
          </ToggleGroupItem>
        </ToggleGroup>
      </li>
    </ul>
  );
}
