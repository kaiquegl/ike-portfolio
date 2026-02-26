import { createContext } from "react";

import type { LocaleStore } from "./locale-factory.client";

export const LocaleContext = createContext<LocaleStore | null>(null);
