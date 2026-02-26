import { LocaleToggle } from "@/components/locale-toggle";
import { ThemeToggle } from "@/components/theme-toggle";
import { useTranslation } from "@/core/i18n/use-translation";

export function Header() {
  const t = useTranslation();

  return (
    <header className="border-border border-b py-3 lg:py-4">
      <div className="container mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6">
        <h1 className="text-accent-foreground text-sm sm:text-base lg:text-lg">
          {t("header.title")}
          <span className="text-primary">/</span>2026
        </h1>

        <div className="flex items-center gap-2 lg:gap-3">
          <LocaleToggle />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
