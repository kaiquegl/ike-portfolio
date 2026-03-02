import { useNavigate } from "@tanstack/react-router";
import { useTranslation } from "@/core/i18n/use-translation";
import { useLocale } from "@/core/providers/locale/locale-hook.client";
import { Button } from "./ui/button";

export function LocaleToggle() {
  const locale = useLocale((state) => state.locale);
  const navigate = useNavigate();
  const t = useTranslation();

  const handleToggle = () => {
    navigate({ to: locale === "en" ? "/" : "/en" });
  };

  return (
    <Button onClick={handleToggle} size="icon" variant="outline">
      <span className="font-semibold text-xs">{locale === "en" ? "EN" : "PT"}</span>
      <span className="sr-only">{t("locale.toggle")}</span>
    </Button>
  );
}
