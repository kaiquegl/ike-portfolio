import { createContext } from "react";

import type { ThemeStore } from "./theme-factory.client";

export const ThemeContext = createContext<ThemeStore | null>(null);
