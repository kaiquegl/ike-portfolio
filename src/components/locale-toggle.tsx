import { useNavigate } from "@tanstack/react-router";
import { useTranslation } from "@/core/i18n/use-translation";
import { useLocale } from "@/core/providers/locale/locale-hook";
import { cn } from "@/lib/utils";

export function LocaleToggle() {
  const locale = useLocale((state) => state.locale);
  const navigate = useNavigate();
  const t = useTranslation();

  const isEnglish = locale === "en";

  return (
    <fieldset
      aria-label={isEnglish ? t("locale.switchToPt") : t("locale.switchToEn")}
      className="inline-flex items-center rounded-full border border-border bg-card p-0.5 font-semibold text-xs"
    >
      <legend className="sr-only">{isEnglish ? t("locale.switchToPt") : t("locale.switchToEn")}</legend>
      <button
        aria-current={isEnglish ? "true" : undefined}
        aria-label={t("locale.switchToEn")}
        className={cn(
          "rounded-full px-2.5 py-1 transition-colors",
          isEnglish ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"
        )}
        onClick={() => navigate({ to: "/en" })}
        type="button"
      >
        EN
      </button>
      <button
        aria-current={isEnglish ? undefined : "true"}
        aria-label={t("locale.switchToPt")}
        className={cn(
          "rounded-full px-2.5 py-1 transition-colors",
          isEnglish ? "text-muted-foreground hover:text-foreground" : "bg-foreground text-background"
        )}
        onClick={() => navigate({ to: "/" })}
        type="button"
      >
        PT
      </button>
    </fieldset>
  );
}
