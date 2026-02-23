import { HighlightSkill } from "@/components/highlight-skill";

export function SidebarAbout() {
  return (
    <desc className="text-muted-foreground text-sm leading-relaxed lg:text-base">
      Especialista em <HighlightSkill value="react">React</HighlightSkill>,{" "}
      <HighlightSkill value="nextjs">Next.js</HighlightSkill> e{" "}
      <HighlightSkill value="typescript">TypeScript</HighlightSkill>, com +9 anos de experiência. Apaixonado por
      resolver problemas e criar soluções.
    </desc>
  );
}
