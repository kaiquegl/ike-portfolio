/** Year Kaique started focusing full-time on frontend (Leanwork, Jul 2018). */
export const FRONTEND_START_YEAR = 2017;

/**
 * Years of frontend experience from {@link FRONTEND_START_YEAR} to the given date.
 * Defaults to today so hero/about stay accurate without yearly copy edits.
 */
export function getYearsOfExperience(referenceDate: Date = new Date()): number {
  return Math.max(0, referenceDate.getFullYear() - FRONTEND_START_YEAR);
}

/** Replaces `{years}` placeholders in i18n templates. */
export function withYearsOfExperience(template: string, years: number = getYearsOfExperience()): string {
  return template.replaceAll("{years}", String(years));
}
