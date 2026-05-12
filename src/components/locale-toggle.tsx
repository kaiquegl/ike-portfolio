import { useNavigate } from "@tanstack/react-router";
import { useTranslation } from "@/core/i18n/use-translation";
import { useLocale } from "@/core/providers/locale/locale-hook";
import { Button } from "./ui/button";

export function LocaleToggle() {
  const locale = useLocale((state) => state.locale);
  const navigate = useNavigate();
  const t = useTranslation();

  const handleToggle = () => {
    navigate({ to: locale === "en" ? "/" : "/en" });
  };

  const switchToPortuguese = locale === "en";
  const accessibleLabel = switchToPortuguese ? t("locale.switchToPt") : t("locale.switchToEn");

  return (
    <Button aria-label={accessibleLabel} onClick={handleToggle} size="icon" title={accessibleLabel} variant="outline">
      <span className="font-semibold text-xs">{switchToPortuguese ? "PT" : "EN"}</span>
    </Button>
  );
}
