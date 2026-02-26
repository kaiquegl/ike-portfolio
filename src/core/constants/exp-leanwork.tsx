import { HighlightSkill } from "@/components/highlight-skill";
import type { ExpType } from "@/core/constants/exp-type";
import type { Locale } from "@/core/providers/locale/locale-factory.client";

const EXP_LEANWORK_PT_BR: ExpType[] = [
  {
    id: "leanwork-wake",
    title:
      "Tech Lead Frontend | <a href='https://wake.tech/wake-commerce/' target='_blank' rel='noopener noreferrer'>Wake Commerce</a>",
    period: "Set 2025 - Presente",

    bulletPoints: [
      "Liderança na implementação de integrações de terceiros (Serasa, Hero Seguros, Tuna Pagamentos) na plataforma Wake Commerce, focando em arquitetura segura e escalável  (preparação para Go-Live)."
    ],
    tags: ["Javascript", "HTML/CSS", "TailwindCSS"]
  },
  {
    id: "leanwork-sinerlog",
    title:
      "Tech Lead Frontend | <a href='https://sinerlog.global/' target='_blank' rel='noopener noreferrer'>Sinerlog</a>",
    period: "Jan 2025 - Ago 2025",
    bulletPoints: [
      <p key="sinerlog-team-lead">
        Liderança de Equipe: Gerenciamento de desenvolvedores frontend na entrega simultânea de 4 painéis
        administrativos e 1 e-commerce multi-tenant. (Utilizando: <HighlightSkill value="react">React</HighlightSkill>,{" "}
        <HighlightSkill value="nextjs">Next.js</HighlightSkill>, <HighlightSkill value="vitejs">Vite.js</HighlightSkill>
        , <HighlightSkill value="typescript">TypeScript</HighlightSkill>,{" "}
        <HighlightSkill value="tailwindcss">TailwindCSS</HighlightSkill>,{" "}
        <HighlightSkill value="shadcn">Shadcn UI</HighlightSkill>).
      </p>,
      "Engenharia de Produtividade: Criação de uma UI Registry proprietária (baseada na arquitetura do shadcn/ui), padronizando componentes e acelerando a criação de novas telas em toda a empresa.",
      <p key="sinerlog-devops-quality">
        DevOps & Qualidade: Reestruturação das pipelines de <HighlightSkill value="ci/cd">CI/CD</HighlightSkill> para
        suportar múltiplos ambientes (HML/PRD), garantindo deploys mais rápidos com{" "}
        <HighlightSkill value="docker">Docker</HighlightSkill>, seguros e previsíveis.
      </p>
    ],
    tags: ["React", "Next.js", "Vite.js", "TypeScript", "TailwindCSS", "Shadcn UI", "Figma", "CI/CD", "Docker"]
  },
  {
    id: "leanwork-farmacias",
    title:
      "Senior Frontend Engineer | <a href='https://farmaciasapp.com.br/' target='_blank' rel='noopener noreferrer'>FarmaciasApp (Grupo SC)</a>",
    period: "Jan 2023 - Dez 2024",
    bulletPoints: [
      <p key="fapp-greenfield-development">
        Desenvolvimento greenfield do marketplace (<HighlightSkill value="react">React</HighlightSkill>,{" "}
        <HighlightSkill value="nextjs">Next.js</HighlightSkill>,{" "}
        <HighlightSkill value="typescript">TypeScript</HighlightSkill>,{" "}
        <HighlightSkill value="tailwindcss">TailwindCSS</HighlightSkill>,{" "}
        <HighlightSkill value="shadcn">Shadcn UI</HighlightSkill>), integrando um catálogo de +15.000 lojas.
      </p>,
      <p key="fapp-performance-optimization">
        Otimização agressiva de performance (Core Web Vitals) e <HighlightSkill value="seo">SEO</HighlightSkill>,
        contribuindo diretamente para um aumento de 300% nas vendas mensais no primeiro ano de operação.
      </p>,
      <p key="fapp-ssr-isr-implementation">
        Implementação de estratégias avançadas de renderização (SSR/ISR) com{" "}
        <HighlightSkill value="nextjs">Next.js</HighlightSkill> para indexação de milhares de páginas de produtos.
      </p>
    ],
    tags: ["React", "Next.js", "TypeScript", "TailwindCSS", "AdobeXD", "CI/CD", "Shadcn UI", "SEO"]
  },
  {
    id: "leanwork-riachuelo",
    title:
      "Pleno Frontend Engineer | <a href='https://riachuelo.com.br/' target='_blank' rel='noopener noreferrer'>Riachuelo (Fanlab & Carter's)</a>",
    period: "Jan 2021 - Dez 2022",
    bulletPoints: [
      <p key="riachuelo">
        Atuação nas frentes digitais da Fanlab e Carter's, focando na performance de carregamento e componentização.
      </p>
    ],
    tags: ["React", "Next.js", "TypeScript", "AdobeXD", "Javascript"]
  },
  {
    id: "leanwork-riachuelo-centauro",
    title:
      "Pleno Frontend Engineer | <a href='https://centauro.com.br/' target='_blank' rel='noopener noreferrer'>Centauro</a>",
    period: "Jan 2019 - Dez 2020",
    bulletPoints: [
      <p key="centauro">
        Desenvolvimento de aplicações touch (<HighlightSkill value="react">React</HighlightSkill>) para personalização
        de produtos (print on demand) em lojas físicas (omnichannel) e sustentação de e-commerce de alto tráfego.
      </p>
    ],
    tags: ["React", "AdobeXD", "Javascript"]
  },
  {
    id: "leanwork-inicio",
    title:
      "Junior Frontend Engineer | <a href='https://leanwork.com.br/' target='_blank' rel='noopener noreferrer'>Leanwork</a>",
    period: "Jul 2018 - Dez 2018",
    bulletPoints: [
      <p key="legacy-ecommerces">
        Estilização pixel-perfect (<HighlightSkill value="html/css">HTML/CSS</HighlightSkill>,{" "}
        <HighlightSkill value="javascript">Javascript</HighlightSkill>,{" "}
        <HighlightSkill value="jquery">jQuery</HighlightSkill>.{" "}
        <HighlightSkill value="photoshop">Photoshop</HighlightSkill>) e manutenção de e-commerces legados
      </p>,
      <p key="educational-platform">
        Desenvolvimento de uma plataforma educacional <HighlightSkill value="angular">(Angular)</HighlightSkill> para a
        gestão de cursos, provas e alunos
      </p>
    ],
    tags: ["HTML/CSS", "Javascript", "jQuery", "Photoshop", "Angular"]
  }
];

const EXP_LEANWORK_EN: ExpType[] = [
  {
    id: "leanwork-wake",
    title:
      "Tech Lead Frontend | <a href='https://wake.tech/wake-commerce/' target='_blank' rel='noopener noreferrer'>Wake Commerce</a>",
    period: "Sep 2025 - Present",

    bulletPoints: [
      "Led the implementation of third-party integrations (Serasa, Hero Seguros, Tuna Pagamentos) on the Wake Commerce platform, focusing on secure and scalable architecture (Go-Live preparation)."
    ],
    tags: ["Javascript", "HTML/CSS", "TailwindCSS"]
  },
  {
    id: "leanwork-sinerlog",
    title:
      "Tech Lead Frontend | <a href='https://sinerlog.global/' target='_blank' rel='noopener noreferrer'>Sinerlog</a>",
    period: "Jan 2025 - Aug 2025",
    bulletPoints: [
      <p key="sinerlog-team-lead">
        Team Leadership: Managed frontend developers in the simultaneous delivery of 4 admin panels and 1 multi-tenant
        e-commerce. (Using: <HighlightSkill value="react">React</HighlightSkill>,{" "}
        <HighlightSkill value="nextjs">Next.js</HighlightSkill>, <HighlightSkill value="vitejs">Vite.js</HighlightSkill>
        , <HighlightSkill value="typescript">TypeScript</HighlightSkill>,{" "}
        <HighlightSkill value="tailwindcss">TailwindCSS</HighlightSkill>,{" "}
        <HighlightSkill value="shadcn">Shadcn UI</HighlightSkill>).
      </p>,
      "Productivity Engineering: Created a proprietary UI Registry (based on shadcn/ui architecture), standardizing components and accelerating new screen creation across the company.",
      <p key="sinerlog-devops-quality">
        DevOps & Quality: Restructured <HighlightSkill value="ci/cd">CI/CD</HighlightSkill> pipelines to support
        multiple environments (HML/PRD), ensuring faster, secure, and predictable deploys with{" "}
        <HighlightSkill value="docker">Docker</HighlightSkill>.
      </p>
    ],
    tags: ["React", "Next.js", "Vite.js", "TypeScript", "TailwindCSS", "Shadcn UI", "Figma", "CI/CD", "Docker"]
  },
  {
    id: "leanwork-farmacias",
    title:
      "Senior Frontend Engineer | <a href='https://farmaciasapp.com.br/' target='_blank' rel='noopener noreferrer'>FarmaciasApp (Grupo SC)</a>",
    period: "Jan 2023 - Dec 2024",
    bulletPoints: [
      <p key="fapp-greenfield-development">
        Greenfield development of the marketplace (<HighlightSkill value="react">React</HighlightSkill>,{" "}
        <HighlightSkill value="nextjs">Next.js</HighlightSkill>,{" "}
        <HighlightSkill value="typescript">TypeScript</HighlightSkill>,{" "}
        <HighlightSkill value="tailwindcss">TailwindCSS</HighlightSkill>,{" "}
        <HighlightSkill value="shadcn">Shadcn UI</HighlightSkill>), integrating a catalog of 15,000+ stores.
      </p>,
      <p key="fapp-performance-optimization">
        Aggressive performance optimization (Core Web Vitals) and <HighlightSkill value="seo">SEO</HighlightSkill>,
        directly contributing to a 300% increase in monthly sales in the first year of operation.
      </p>,
      <p key="fapp-ssr-isr-implementation">
        Implementation of advanced rendering strategies (SSR/ISR) with{" "}
        <HighlightSkill value="nextjs">Next.js</HighlightSkill> for indexing thousands of product pages.
      </p>
    ],
    tags: ["React", "Next.js", "TypeScript", "TailwindCSS", "AdobeXD", "CI/CD", "Shadcn UI", "SEO"]
  },
  {
    id: "leanwork-riachuelo",
    title:
      "Mid Frontend Engineer | <a href='https://riachuelo.com.br/' target='_blank' rel='noopener noreferrer'>Riachuelo (Fanlab & Carter's)</a>",
    period: "Jan 2021 - Dec 2022",
    bulletPoints: [
      <p key="riachuelo">
        Worked on the Fanlab and Carter's digital fronts, focusing on loading performance and componentization.
      </p>
    ],
    tags: ["React", "Next.js", "TypeScript", "AdobeXD", "Javascript"]
  },
  {
    id: "leanwork-riachuelo-centauro",
    title:
      "Mid Frontend Engineer | <a href='https://centauro.com.br/' target='_blank' rel='noopener noreferrer'>Centauro</a>",
    period: "Jan 2019 - Dec 2020",
    bulletPoints: [
      <p key="centauro">
        Development of touch applications (<HighlightSkill value="react">React</HighlightSkill>) for product
        customization (print on demand) in physical stores (omnichannel) and maintenance of high-traffic e-commerce.
      </p>
    ],
    tags: ["React", "AdobeXD", "Javascript"]
  },
  {
    id: "leanwork-inicio",
    title:
      "Junior Frontend Engineer | <a href='https://leanwork.com.br/' target='_blank' rel='noopener noreferrer'>Leanwork</a>",
    period: "Jul 2018 - Dec 2018",
    bulletPoints: [
      <p key="legacy-ecommerces">
        Pixel-perfect styling (<HighlightSkill value="html/css">HTML/CSS</HighlightSkill>,{" "}
        <HighlightSkill value="javascript">Javascript</HighlightSkill>,{" "}
        <HighlightSkill value="jquery">jQuery</HighlightSkill>,{" "}
        <HighlightSkill value="photoshop">Photoshop</HighlightSkill>) and legacy e-commerce maintenance
      </p>,
      <p key="educational-platform">
        Development of an educational platform <HighlightSkill value="angular">(Angular)</HighlightSkill> for managing
        courses, exams, and students
      </p>
    ],
    tags: ["HTML/CSS", "Javascript", "jQuery", "Photoshop", "Angular"]
  }
];

export function getExpLeanwork(locale: Locale): ExpType[] {
  return locale === "en" ? EXP_LEANWORK_EN : EXP_LEANWORK_PT_BR;
}
