import { HighlightSkill } from "@/components/highlight-skill";
import type { ExpType } from "@/core/constants/exp-type";

export const EXP_ELITESOFT: ExpType[] = [
  {
    id: "elitesoft",
    title:
      "Junior Fullstack Developer & Suport | <a href='https://www.elitesoft.com.br/' target='_blank' rel='noopener noreferrer'>Elitesoft</a>",
    period: "Jan 2017 - Jun 2018",

    bulletPoints: [
      <p key="elitesoft">
        Desenvolvimento e manutenção de sistemas em <HighlightSkill value="php">PHP</HighlightSkill> e{" "}
        <HighlightSkill value="angular">Angular</HighlightSkill>, além de automação de processos que reduziu a carga
        operacional de suporte técnico
      </p>
    ],
    tags: ["PHP", "Angular", "MySQL", "HTML/CSS"]
  }
];
