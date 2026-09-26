export const SKILLS_MAP = [
  { name: "React", query: "react", section: "frontend" },
  { name: "Next.js", query: "nextjs", section: "frontend" },
  { name: "TanStack Start", query: "tanstack-start", section: "frontend" },
  { name: "TanStack Router", query: "tanstack-router", section: "frontend" },
  { name: "TypeScript", query: "typescript", section: "frontend" },
  { name: "JavaScript", query: "javascript", section: "frontend" },
  { name: "Vite", query: "vitejs", section: "frontend" },
  { name: "Tailwind CSS", query: "tailwindcss", section: "frontend" },
  { name: "shadcn/ui", query: "shadcn", section: "frontend" },
  { name: "HTML", query: "html", section: "frontend" },
  { name: "CSS", query: "css", section: "frontend" },
  { name: "Vitest", query: "vitest", section: "testing" },
  { name: "Node.js", query: "node", section: "backend" },
  { name: "Bun", query: "bun", section: "backend" },
  { name: "Fastify", query: "fastify", section: "backend" },
  { name: "Prisma", query: "prisma", section: "backend" },
  { name: "Drizzle", query: "drizzle", section: "backend" },
  { name: "PostgreSQL", query: "postgresql", section: "backend" },
  { name: "SQLite", query: "sqlite", section: "backend" },
  { name: "PHP", query: "php", section: "backend" },
  { name: "MySQL", query: "mysql", section: "backend" },
  { name: "Docker", query: "docker", section: "devops" },
  { name: "CI/CD", query: "ci/cd", section: "devops" },
  { name: "Azure", query: "azure", section: "devops" },
  { name: "AWS", query: "aws", section: "devops" },
  { name: "Cloudflare", query: "cloudflare", section: "devops" },
  { name: "Figma", query: "figma", section: "design" },
  { name: "Adobe XD", query: "adobexd", section: "design" },
  { name: "Photoshop", query: "photoshop", section: "design" }
] as const;

export type SKILLS_NAMES = (typeof SKILLS_MAP)[number]["name"];
export type SKILLS_QUERIES = (typeof SKILLS_MAP)[number]["query"];
