import { createContext } from "react";

import type { ThemeStore } from "./theme-csr-factory";

export const ThemeContext = createContext<ThemeStore | null>(null);
