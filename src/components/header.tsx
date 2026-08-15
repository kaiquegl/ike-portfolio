import { useCallback, useEffect, useRef, useState } from "react";
import { LocaleToggle } from "@/components/locale-toggle";
import type { MessageKey } from "@/core/i18n/messages/en";
import { useTranslation } from "@/core/i18n/use-translation";
import { cn } from "@/lib/utils";

const NAV_LINKS: { href: string; key: MessageKey }[] = [
  { href: "#contact", key: "nav.contact" },
  { href: "#about", key: "nav.about" },
  { href: "#skills", key: "nav.skills" },
  { href: "#experience", key: "nav.experience" },
  { href: "#education", key: "nav.education" }
];

const SECTION_IDS = NAV_LINKS.map((link) => link.href.slice(1));
const SCROLL_UNLOCK_MS = 800;

function getActivationLine() {
  const scrollPaddingTop = Number.parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop);
  const padding = Number.isFinite(scrollPaddingTop) ? scrollPaddingTop : 80;

  return padding + 16;
}

function useActiveSection() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const isLockedRef = useRef(false);
  const unlockTimeoutRef = useRef(0);

  const activateSection = useCallback((sectionId: string | null) => {
    isLockedRef.current = true;
    setActiveId(sectionId);
    window.clearTimeout(unlockTimeoutRef.current);

    function unlock() {
      isLockedRef.current = false;
      window.removeEventListener("scrollend", unlock);
      window.clearTimeout(unlockTimeoutRef.current);
    }

    window.addEventListener("scrollend", unlock, { once: true });
    unlockTimeoutRef.current = window.setTimeout(unlock, SCROLL_UNLOCK_MS);
  }, []);

  useEffect(() => {
    let animationFrame = 0;

    function updateActiveSection() {
      if (isLockedRef.current) {
        return;
      }

      const reachedPageBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8;

      if (reachedPageBottom) {
        setActiveId(SECTION_IDS.at(-1) ?? null);
        return;
      }

      const activationLine = getActivationLine();
      let currentId: string | null = null;

      for (const sectionId of SECTION_IDS) {
        const section = document.getElementById(sectionId);

        if (!section) {
          continue;
        }

        if (section.getBoundingClientRect().top <= activationLine) {
          currentId = sectionId;
        }
      }

      setActiveId(currentId);
    }

    function onScroll() {
      if (animationFrame) {
        return;
      }

      animationFrame = window.requestAnimationFrame(() => {
        animationFrame = 0;
        updateActiveSection();
      });
    }

    function onHashChange() {
      const hashId = window.location.hash.slice(1);

      if (hashId === "top" || hashId === "") {
        activateSection(null);
        return;
      }

      if (SECTION_IDS.includes(hashId)) {
        activateSection(hashId);
      }
    }

    updateActiveSection();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("hashchange", onHashChange);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.clearTimeout(unlockTimeoutRef.current);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("hashchange", onHashChange);
    };
  }, [activateSection]);

  return { activateSection, activeId };
}

export function Header() {
  const t = useTranslation();
  const navRef = useRef<HTMLElement>(null);
  const { activateSection, activeId } = useActiveSection();
  const [indicator, setIndicator] = useState({ visible: false, width: 0, x: 0 });

  useEffect(() => {
    const nav = navRef.current;

    function updateIndicator() {
      if (!(nav && activeId)) {
        setIndicator((current) => ({ ...current, visible: false }));
        return;
      }

      const activeLink = nav.querySelector<HTMLAnchorElement>(`a[href="#${activeId}"]`);

      if (!activeLink) {
        setIndicator((current) => ({ ...current, visible: false }));
        return;
      }

      const navBox = nav.getBoundingClientRect();
      const linkBox = activeLink.getBoundingClientRect();

      setIndicator({
        visible: true,
        width: linkBox.width,
        x: linkBox.left - navBox.left
      });
    }

    updateIndicator();
    window.addEventListener("resize", updateIndicator);

    const resizeObserver = nav ? new ResizeObserver(updateIndicator) : null;
    if (nav) {
      resizeObserver?.observe(nav);
    }

    return () => {
      window.removeEventListener("resize", updateIndicator);
      resizeObserver?.disconnect();
    };
  }, [activeId]);

  return (
    <header className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 py-2">
      <a className="inline-flex shrink-0 no-underline" href="#top">
        <img
          alt={t("header.logoAlt")}
          className="size-8 rounded-lg"
          height={32}
          src="/assets/ike-favicon-48x48.png"
          width={32}
        />
      </a>

      <nav aria-label={t("nav.aria")} className="relative hidden sm:block" ref={navRef}>
        <span
          aria-hidden
          className="pointer-events-none absolute bottom-0 left-0 h-0.5 rounded-full bg-primary transition-[transform,width,opacity] duration-300 ease-out"
          style={{
            opacity: indicator.visible ? 1 : 0,
            transform: `translateX(${indicator.x}px)`,
            width: indicator.width
          }}
        />

        <ul className="flex items-center justify-center gap-3 overflow-x-auto whitespace-nowrap pb-1 sm:gap-5">
          {NAV_LINKS.map((link) => {
            const sectionId = link.href.slice(1);
            const isActive = activeId === sectionId;

            return (
              <li key={link.href}>
                <a
                  aria-current={isActive ? "location" : undefined}
                  className={cn(
                    "text-xs no-underline transition-colors duration-300 hover:text-primary sm:text-sm",
                    isActive ? "text-foreground" : "text-muted-foreground"
                  )}
                  href={link.href}
                  onClick={() => activateSection(sectionId)}
                >
                  {t(link.key)}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="justify-self-end">
        <LocaleToggle />
      </div>
    </header>
  );
}
