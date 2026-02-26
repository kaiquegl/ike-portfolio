import { useTranslation } from "@/core/i18n/use-translation";

export function SidebarMe() {
  const t = useTranslation();

  return (
    <div className="flex flex-col items-center gap-1 text-center lg:items-start lg:gap-2 lg:text-left">
      <div className="h-24 w-24 overflow-hidden rounded-full border-3 border-primary sm:h-28 sm:w-28 lg:h-30 lg:w-30">
        <img alt={t("sidebar.photoAlt")} height={200} src="/assets/kaique-lima-foto.jfif" width={200} />
      </div>

      <h2 className="mt-1 font-bold text-lg leading-tight lg:mt-0 lg:text-2xl">
        Kaique Lima<span className="text-primary">.</span>
      </h2>

      <h3 className="font-semibold text-primary leading-tight">{t("sidebar.role")}</h3>
    </div>
  );
}
