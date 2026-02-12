import { ThemeToggle } from "@/components/theme-toggle";

export function Header() {
  return (
    <header className="">
      <div className="container mx-auto flex h-10 max-w-7xl items-center justify-between">
        <h1 className="text-accent-foreground text-base">
          portfólio - ike<span className="text-purple-700">/</span>2026
        </h1>

        <ThemeToggle />
      </div>
    </header>
  );
}
