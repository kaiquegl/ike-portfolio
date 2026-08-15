import { Download05Icon, Email, GithubIcon, Linkedin02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import type { ComponentProps } from "react";
import { toast } from "sonner";
import { useTranslation } from "@/core/i18n/use-translation";
import { useLocale } from "@/core/providers/locale/locale-hook";

const EMAIL = "kaikegl@proton.me";

const RESUME_BY_LOCALE = {
  en: "/assets/kaique-lima-resume-en.pdf",
  "pt-BR": "/assets/kaique-lima-resume-ptbr.pdf"
} as const;

const CARD_CLASS =
  "group flex min-h-[4.5rem] cursor-pointer flex-col items-center [&:hover>span:last-child]:text-primary justify-center gap-1.5 rounded-2xl border border-border bg-card px-2 py-4 text-center no-underline transition-colors hover:border-primary/40  focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30 sm:min-h-20 sm:gap-2 sm:py-5";

type HugeIcon = ComponentProps<typeof HugeiconsIcon>["icon"];

type ContactCardProps = {
  heading: string;
  icon: HugeIcon;
  label: string;
} & ({ download?: boolean; href: string; onClick?: never } | { download?: never; href?: never; onClick: () => void });

function ContactCard({ download, heading, href, icon, label, onClick }: ContactCardProps) {
  const content = (
    <>
      <HugeiconsIcon
        className="size-5 text-muted-foreground transition-colors group-hover:text-primary sm:size-6"
        icon={icon}
      />
      <span className="font-bold text-foreground text-sm tracking-tight sm:text-base">{heading}</span>
      <span className="font-medium text-[0.625rem] text-muted-foreground uppercase tracking-[0.16em] sm:text-xs">
        {label}
      </span>
    </>
  );

  if (href) {
    return (
      <a
        className={CARD_CLASS}
        download={download}
        href={href}
        rel={download ? undefined : "noopener noreferrer"}
        target={download ? undefined : "_blank"}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={CARD_CLASS} onClick={onClick} type="button">
      {content}
    </button>
  );
}

export function Contact() {
  const t = useTranslation();
  const locale = useLocale((state) => state.locale);
  const resumeUrl = RESUME_BY_LOCALE[locale];

  function handleCopyEmail() {
    navigator.clipboard.writeText(EMAIL);
    toast.success(t("toast.emailCopied"), { id: "email-copied" });
  }

  return (
    <section className="flex flex-col gap-2 sm:gap-4" id="contact">
      <h2 className="font-bold text-foreground text-lg sm:text-xl">{t("contact.title")}</h2>

      <div className="grid grid-cols-2 gap-2 sm:gap-4 lg:grid-cols-4">
        <ContactCard
          heading={t("contact.email.heading")}
          icon={Email}
          label={t("contact.email.label")}
          onClick={handleCopyEmail}
        />
        <ContactCard
          heading={t("contact.github.heading")}
          href="https://github.com/kaiquegl"
          icon={GithubIcon}
          label={t("contact.github.label")}
        />
        <ContactCard
          heading={t("contact.linkedin.heading")}
          href="https://www.linkedin.com/in/kaique-gl"
          icon={Linkedin02Icon}
          label={t("contact.linkedin.label")}
        />
        <ContactCard
          download
          heading={t("contact.resume.heading")}
          href={resumeUrl}
          icon={Download05Icon}
          label={t("contact.resume.label")}
        />
      </div>
    </section>
  );
}
