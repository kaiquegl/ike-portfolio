import { Download05Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useLocation } from "@tanstack/react-router";
import { useTranslation } from "@/core/i18n/use-translation";
import { Button } from "../ui/button";

const RESUME_BY_LOCALE: Record<string, string> = {
  en: "/assets/kaique-lima-resume-en.pdf",
  "pt-BR": "/assets/kaique-lima-resume-ptbr.pdf"
};

export function SidebarResumeDownload() {
  const t = useTranslation();
  const { pathname } = useLocation();
  const locale = pathname === "/en" || pathname.startsWith("/en/") ? "en" : "pt-BR";
  const resumeUrl = RESUME_BY_LOCALE[locale] ?? RESUME_BY_LOCALE["pt-BR"];

  return (
    <Button
      className="w-full gap-2"
      nativeButton={false}
      render={
        <a download href={resumeUrl}>
          <HugeiconsIcon className="size-4" icon={Download05Icon} />
          {t("sidebar.downloadResume")}
        </a>
      }
      size="lg"
      title={t("sidebar.downloadResume")}
      variant="default"
    />
  );
}
