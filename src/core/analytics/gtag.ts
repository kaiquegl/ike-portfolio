export const DEFAULT_GA_MEASUREMENT_ID = "G-SH541SEFFZ";

export type AnalyticsEventName = "experience_expand" | "contact_click" | "skill_filter_toggle" | "company_link_click";

export type AnalyticsEventParams = {
  experience_expand: {
    experience_id: string;
    company: string;
  };
  contact_click: {
    contact_method: "email" | "github" | "linkedin" | "resume";
  };
  skill_filter_toggle: {
    skill: string;
    action: "select" | "deselect";
  };
  company_link_click: {
    company: string;
    url: string;
  };
};

type GtagCommand = "js" | "config" | "event" | "set" | "consent";

type GtagFunction = (
  command: GtagCommand,
  targetOrDateOrEventName: string | Date,
  params?: Record<string, unknown>
) => void;

type AnalyticsWindow = Window & {
  dataLayer?: unknown[];
  gtag?: GtagFunction;
};

function getAnalyticsWindow(): AnalyticsWindow | undefined {
  if (typeof window === "undefined") {
    return;
  }

  return window as AnalyticsWindow;
}

export function getGaMeasurementId(): string {
  return import.meta.env.VITE_GA_MEASUREMENT_ID || DEFAULT_GA_MEASUREMENT_ID;
}

export function shouldLoadAnalytics(): boolean {
  return !import.meta.env.DEV && Boolean(getGaMeasurementId());
}

export function trackEvent<TEventName extends AnalyticsEventName>(
  eventName: TEventName,
  params: AnalyticsEventParams[TEventName]
): void {
  if (import.meta.env.DEV) {
    return;
  }

  const analyticsWindow = getAnalyticsWindow();
  const gtag = analyticsWindow?.gtag;

  if (typeof gtag !== "function") {
    return;
  }

  gtag("event", eventName, params);
}
