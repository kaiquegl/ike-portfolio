import { HighlightSkill } from "@/components/highlight-skill";
import { useLocale } from "@/core/providers/locale/locale-hook.client";

export function SidebarAbout() {
  const locale = useLocale((state) => state.locale);

  return (
    <h2 className="text-center text-muted-foreground text-sm leading-relaxed lg:text-left">
      {locale === "en" ? (
        <>
          Specialist in <HighlightSkill value="react">React</HighlightSkill>,{" "}
          <HighlightSkill value="nextjs">Next.js</HighlightSkill> and{" "}
          <HighlightSkill value="typescript">TypeScript</HighlightSkill>, with 9+ years of experience. Passionate about
          solving problems and creating solutions.
        </>
      ) : (
        <>
          Especialista em <HighlightSkill value="react">React</HighlightSkill>,{" "}
          <HighlightSkill value="nextjs">Next.js</HighlightSkill> e{" "}
          <HighlightSkill value="typescript">TypeScript</HighlightSkill>, com 9+ anos de experiência. Apaixonado por
          resolver problemas e criar soluções.
        </>
      )}
    </h2>
  );
}
