import { createContext } from "react";
import type { LocaleStore } from "./locale-factory";

export const LocaleContext = createContext<LocaleStore | null>(null);
