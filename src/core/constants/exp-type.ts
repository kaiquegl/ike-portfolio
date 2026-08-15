import type { MessageKey } from "@/core/i18n/messages/en";
import type { SKILLS_NAMES } from "./skills";

export type ExpType = {
  id: string;
  companyName: string;
  companyUrl?: string;
  roleKey?: MessageKey;
  viaLeanwork?: boolean;
  period: string;
  current?: boolean;
  tags: SKILLS_NAMES[];
  bulletPoints: (string | React.ReactNode)[];
};
