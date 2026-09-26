import { HighlightSkill } from "@/components/highlight-skill";
import type { ExpType } from "@/core/constants/exp-type";
import type { Locale } from "@/core/providers/locale/locale-factory";

const EXP_ELITESOFT_PT_BR: ExpType[] = [
  {
    id: "elitesoft",
    companyName: "Elitesoft Informática",
    companyUrl: "https://www.elitesoft.com.br/",
    roleKey: "exp.role.juniorSoftware",
    period: "Jan 2017 ~ Jun 2018",
    bulletPoints: [
      <p key="elitesoft-migration">
        Migrei a interface do ERP para provedores de internet de Qooxdoo para Angular e reduzi o tempo de manutenção em
        cerca de 40%, atuando com <HighlightSkill value="php">PHP</HighlightSkill>,{" "}
        <HighlightSkill value="mysql">MySQL</HighlightSkill> e Angular.
      </p>,
      "Automatizei tarefas semanais de suporte que os clientes executavam manualmente."
    ],
    tags: ["PHP", "MySQL"]
  }
];

const EXP_ELITESOFT_EN: ExpType[] = [
  {
    id: "elitesoft",
    companyName: "Elitesoft Informática",
    companyUrl: "https://www.elitesoft.com.br/",
    roleKey: "exp.role.juniorSoftware",
    period: "Jan 2017 ~ Jun 2018",
    bulletPoints: [
      <p key="elitesoft-migration">
        Moved the ISP ERP UI from Qooxdoo to Angular and cut maintenance time by about 40%, working across{" "}
        <HighlightSkill value="php">PHP</HighlightSkill>, <HighlightSkill value="mysql">MySQL</HighlightSkill>, and
        Angular.
      </p>,
      "Automated weekly support tasks that clients were doing by hand."
    ],
    tags: ["PHP", "MySQL"]
  }
];

export function getExpElitesoft(locale: Locale): ExpType[] {
  return locale === "en" ? EXP_ELITESOFT_EN : EXP_ELITESOFT_PT_BR;
}
