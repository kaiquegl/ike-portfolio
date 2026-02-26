import { DiplomaIcon, LanguageSquareIcon, MapPin, SourceCodeSquareIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useTranslation } from "@/core/i18n/use-translation";

export function SidebarList() {
  const t = useTranslation();

  return (
    <ul className="flex flex-col gap-1.5 lg:gap-3">
      <li className="inline-flex items-center gap-2 text-muted-foreground text-sm leading-tight">
        <HugeiconsIcon className="size-5" icon={SourceCodeSquareIcon} /> {t("sidebar.experience")}
      </li>
      <li className="inline-flex items-center gap-2 text-muted-foreground text-sm leading-tight">
        <HugeiconsIcon className="size-5" icon={MapPin} /> {t("sidebar.location")}
      </li>
      <li className="inline-flex items-center gap-2 text-muted-foreground text-sm leading-tight">
        <HugeiconsIcon className="size-5" icon={LanguageSquareIcon} /> {t("sidebar.languages")}
      </li>
      <li className="inline-flex items-center gap-2 text-muted-foreground text-sm leading-tight">
        <HugeiconsIcon className="size-5" icon={DiplomaIcon} /> {t("sidebar.degree")}
      </li>
    </ul>
  );
}
