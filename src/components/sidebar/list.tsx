import { LanguageSquareIcon, MapPin, SourceCodeSquareIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Button } from "../ui/button";

export function SidebarList() {
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
        <ul className="inline-flex flex-wrap gap-1 lg:gap-2">
          <li>
            <Button variant="outline">React</Button>
          </li>
          <li>
            <Button variant="outline">Javascript</Button>
          </li>
          <li>
            <Button variant="outline">Typescript</Button>
          </li>
          <li>
            <Button variant="outline">Next.js</Button>
          </li>
        </ul>
      </li>
    </ul>
  );
}
