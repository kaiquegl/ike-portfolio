import type { SKILLS_NAMES } from "./skills";

export type ExpType = {
  id: string;
  title: string;
  period: string;
  tags: SKILLS_NAMES[];
  bulletPoints: (string | React.ReactNode)[];
};
