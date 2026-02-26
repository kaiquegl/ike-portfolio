import { HighlightSkill } from "@/components/highlight-skill";
import type { ExpType } from "@/core/constants/exp-type";
import type { Locale } from "@/core/providers/locale/locale-factory.client";

const EXP_ELITESOFT_PT_BR: ExpType[] = [
  {
    id: "elitesoft",
    title:
      "Junior Fullstack Developer & Suporte | <a href='https://www.elitesoft.com.br/' target='_blank' rel='noopener noreferrer'>Elitesoft</a>",
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

const EXP_ELITESOFT_EN: ExpType[] = [
  {
    id: "elitesoft",
    title:
      "Junior Fullstack Developer & Support | <a href='https://www.elitesoft.com.br/' target='_blank' rel='noopener noreferrer'>Elitesoft</a>",
    period: "Jan 2017 - Jun 2018",

    bulletPoints: [
      <p key="elitesoft">
        Development and maintenance of systems in <HighlightSkill value="php">PHP</HighlightSkill> and{" "}
        <HighlightSkill value="angular">Angular</HighlightSkill>, plus process automation that reduced the operational
        workload of technical support
      </p>
    ],
    tags: ["PHP", "Angular", "MySQL", "HTML/CSS"]
  }
];

export function getExpElitesoft(locale: Locale): ExpType[] {
  return locale === "en" ? EXP_ELITESOFT_EN : EXP_ELITESOFT_PT_BR;
}
