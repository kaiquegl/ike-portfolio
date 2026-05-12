import { createContext } from "react";
import type { ThemeStore } from "./theme-factory";

export const ThemeContext = createContext<ThemeStore | null>(null);
