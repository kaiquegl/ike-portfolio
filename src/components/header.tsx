import { ThemeToggle } from "@/components/theme-toggle";

export function Header() {
  return (
    <header className="">
      <div className="container mx-auto flex h-10 max-w-7xl items-center justify-between">
        <h1 className="text-accent-foreground text-base lg:text-lg">
          portfólio - ike<span className="text-primary">/</span>2026
        </h1>

        <div className="flex items-center gap-2">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
