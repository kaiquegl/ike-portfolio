export const SKILLS_MAP = [
  { name: "React", query: "react" },
  { name: "Next.js", query: "nextjs" },
  { name: "TypeScript", query: "typescript" },
  { name: "Vite.js", query: "vitejs" },
  { name: "Docker", query: "docker" },
  { name: "TailwindCSS", query: "tailwindcss" },
  { name: "Shadcn UI", query: "shadcn" },
  { name: "CI/CD", query: "ci/cd" },
  { name: "SEO", query: "seo" },
  { name: "Figma", query: "figma" },
  { name: "AdobeXD", query: "adobexd" },
  { name: "Node", query: "node" },
  { name: "Angular", query: "angular" },
  { name: "jQuery", query: "jquery" },
  { name: "Photoshop", query: "photoshop" },
  { name: "AWS", query: "aws" },
  { name: "Fastify", query: "fastify" },
  { name: "Drizzle ORM", query: "drizzle" },
  { name: "PostgreSQL", query: "postgresql" },
  { name: "PHP", query: "php" },
  { name: "MySQL", query: "mysql" },
  { name: "HTML/CSS", query: "html/css" },
  { name: "Javascript", query: "javascript" }
] as const;

export type SKILLS_NAMES = (typeof SKILLS_MAP)[number]["name"];
export type SKILLS_QUERIES = (typeof SKILLS_MAP)[number]["query"];
