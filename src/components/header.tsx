import { ThemeToggle } from "@/components/theme-toggle";

export function Header() {
  return (
    <header className="border-border border-b py-3 lg:py-4">
      <div className="container mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-0">
        <h1 className="text-accent-foreground text-sm sm:text-base lg:text-lg">
          portfólio - ike<span className="text-primary">/</span>2026
        </h1>

        <div className="flex items-center gap-2">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
