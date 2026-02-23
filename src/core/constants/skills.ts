export const SKILLS_MAP = [
  { name: "React", query: "react", section: "frontend" },
  { name: "Next.js", query: "nextjs", section: "frontend" },
  { name: "TypeScript", query: "typescript", section: "frontend" },
  { name: "Vite.js", query: "vitejs", section: "frontend" },
  { name: "Docker", query: "docker", section: "devops" },
  { name: "TailwindCSS", query: "tailwindcss", section: "frontend" },
  { name: "Shadcn UI", query: "shadcn", section: "frontend" },
  { name: "CI/CD", query: "ci/cd", section: "devops" },
  { name: "SEO", query: "seo", section: "frontend" },
  { name: "Figma", query: "figma", section: "design" },
  { name: "AdobeXD", query: "adobexd", section: "design" },
  { name: "Node", query: "node", section: "backend" },
  { name: "Angular", query: "angular", section: "frontend" },
  { name: "jQuery", query: "jquery", section: "frontend" },
  { name: "Photoshop", query: "photoshop", section: "design" },
  { name: "AWS", query: "aws", section: "devops" },
  { name: "Fastify", query: "fastify", section: "backend" },
  { name: "Drizzle ORM", query: "drizzle", section: "backend" },
  { name: "PostgreSQL", query: "postgresql", section: "backend" },
  { name: "PHP", query: "php", section: "backend" },
  { name: "MySQL", query: "mysql", section: "backend" },
  { name: "HTML/CSS", query: "html/css", section: "frontend" },
  { name: "Javascript", query: "javascript", section: "frontend" }
] as const;

export type SKILLS_NAMES = (typeof SKILLS_MAP)[number]["name"];
export type SKILLS_QUERIES = (typeof SKILLS_MAP)[number]["query"];
