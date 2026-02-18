import { HighlightSkill } from "../highlight";

export function CurriculumAbout() {
  return (
    <desc className="text-muted-foreground text-sm lg:text-base">
      Desenvolvedor Frontend Sênior especializado em <HighlightSkill value="react">React</HighlightSkill> e{" "}
      <HighlightSkill value="nextjs">Next.js</HighlightSkill>, com +7 anos transformando experiências digitais em
      e-commerces de grande escala. Apaixonado por criar interfaces performáticas e escaláveis que impactam milhões de
      usuários.
    </desc>
  );
}
