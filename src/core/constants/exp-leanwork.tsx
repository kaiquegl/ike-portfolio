import { HighlightSkill } from "@/components/highlight-skill";
import type { ExpType } from "@/core/constants/exp-type";
import type { Locale } from "@/core/providers/locale/locale-factory";

const EXP_LEANWORK_PT_BR: ExpType[] = [
  {
    id: "leanwork-rheon",
    companyName: "Rheon",
    viaLeanwork: true,
    period: "Set 2025 ~ Presente",
    current: true,
    roleKey: "exp.role.senior",
    bulletPoints: [
      <p key="rheon-azure">
        Reduzi o tempo de build no <HighlightSkill value="azure">Azure</HighlightSkill> em 83% (de 6 minutos para 1
        minuto) ao reconstruir o marketplace multi-tenant com{" "}
        <HighlightSkill value="tanstack-start">TanStack Start</HighlightSkill>. A aplicação{" "}
        <HighlightSkill value="nextjs">Next.js</HighlightSkill> permaneceu ativa. Sem Vercel, o deploy no Azure era a
        etapa mais lenta.
      </p>,
      <p key="rheon-vitest">
        Implementei testes com <HighlightSkill value="vitest">Vitest</HighlightSkill> na aplicação{" "}
        <HighlightSkill value="tanstack-start">TanStack Start</HighlightSkill>: mais de 800 testes, cobrindo cerca de
        78% das linhas.
      </p>,
      <p key="rheon-dual-stack">
        Mantive o storefront legado em <HighlightSkill value="nextjs">Next.js</HighlightSkill> e a nova aplicação em{" "}
        <HighlightSkill value="tanstack-start">TanStack Start</HighlightSkill> em produção simultaneamente no mesmo
        marketplace multi-tenant. Usei Cursor para implementar mudanças e revisei cada uma antes do merge, enquanto
        novas farmácias eram integradas.
      </p>
    ],
    tags: ["Azure", "TanStack Start", "Next.js", "Vitest"]
  },
  {
    id: "leanwork-sinerlog",
    companyName: "Sinerlog",
    companyUrl: "https://sinerlog.global/",
    viaLeanwork: true,
    period: "Jan 2025 ~ Ago 2025",
    roleKey: "exp.role.techLead",
    bulletPoints: [
      <p key="sinerlog-team">
        Liderança de um time com 3 desenvolvedores frontend na entrega simultânea de quatro painéis administrativos e um
        e-commerce multi-tenant utilizando <HighlightSkill value="react">React</HighlightSkill>,{" "}
        <HighlightSkill value="nextjs">Next.js</HighlightSkill>, <HighlightSkill value="vitejs">Vite</HighlightSkill> e{" "}
        <HighlightSkill value="typescript">TypeScript</HighlightSkill>.
      </p>,
      "Atuação próxima ao cliente em reuniões recorrentes de alinhamento, traduzindo necessidades de negócio em escopo técnico, prioridades e planejamento das entregas de frontend.",
      <p key="sinerlog-registry">
        Criação de um registry compartilhado de UI inspirado no{" "}
        <HighlightSkill value="shadcn">shadcn/ui</HighlightSkill>, padronizando componentes reutilizáveis entre as
        aplicações e reduzindo implementações duplicadas.
      </p>,
      "Apoio na estruturação de pipelines separados para HML e produção, permitindo que cada ambiente fosse implantado de forma independente."
    ],
    tags: ["React", "Next.js", "Vite", "TypeScript", "shadcn/ui"]
  },
  {
    id: "leanwork-farmacias",
    companyName: "FarmaciasApp",
    companyUrl: "https://farmaciasapp.com.br/",
    viaLeanwork: true,
    period: "Jan 2023 ~ Dez 2024",
    roleKey: "exp.role.senior",
    bulletPoints: [
      <p key="fapp-templates">
        Melhorei os templates de catálogo e produto de um marketplace farmacêutico em{" "}
        <HighlightSkill value="nextjs">Next.js</HighlightSkill> por meio de memoização de componentes, cache de dados e
        otimização de imagens com next/image, validando as páginas no Chrome Lighthouse.
      </p>,
      <p key="fapp-seo">
        Melhorei a indexação e o compartilhamento das páginas de produto com JSON-LD e Open Graph e acompanhei eventos
        do storefront com Google Tag Manager. As páginas utilizavam SSR e ISR.
      </p>
    ],
    tags: ["Next.js"]
  },
  {
    id: "leanwork-riachuelo",
    companyName: "Riachuelo (Fanlab, Carter's)",
    companyUrl: "https://riachuelo.com.br/",
    viaLeanwork: true,
    period: "Jan 2021 ~ Dez 2022",
    roleKey: "exp.role",
    bulletPoints: [
      <p key="riachuelo-storefronts">
        Desenvolvi e mantive os storefronts da Fanlab e Carter's com{" "}
        <HighlightSkill value="react">React</HighlightSkill>, <HighlightSkill value="nextjs">Next.js</HighlightSkill> e{" "}
        <HighlightSkill value="typescript">TypeScript</HighlightSkill>, entregando funcionalidades em grandes equipes.
      </p>,
      "Melhorei a inicialização da aplicação ao adicionar um leitor YAML para configuração de ambiente, permitindo carregar as variáveis no startup em vez de configurá-las manualmente."
    ],
    tags: ["React", "Next.js", "TypeScript"]
  },
  {
    id: "leanwork-centauro",
    companyName: "Centauro",
    companyUrl: "https://centauro.com.br/",
    viaLeanwork: true,
    period: "Jan 2019 ~ Dez 2020",
    roleKey: "exp.role",
    bulletPoints: [
      "Desenvolvi uma página de produto na qual clientes personalizavam camisetas em um canvas HTML usando fabric.js.",
      <p key="centauro-totems">
        Migrei a customização de camisetas em lojas físicas para totens com{" "}
        <HighlightSkill value="react">React</HighlightSkill> e Electron e converti a interface de componentes de classe
        para componentes funcionais.
      </p>
    ],
    tags: ["React"]
  },
  {
    id: "leanwork-inicio",
    companyName: "Leanwork",
    companyUrl: "https://leanwork.com.br/",
    period: "Jul 2018 ~ Dez 2018",
    roleKey: "exp.role.junior",
    bulletPoints: [
      <p key="legacy-ecommerces">
        Estilizei e corrigi storefronts legados (<HighlightSkill value="html">HTML</HighlightSkill>,{" "}
        <HighlightSkill value="css">CSS</HighlightSkill>, <HighlightSkill value="javascript">JavaScript</HighlightSkill>
        , jQuery) e desenvolvi uma aplicação Angular para cursos, provas e alunos.
      </p>
    ],
    tags: ["HTML", "CSS", "JavaScript"]
  }
];

const EXP_LEANWORK_EN: ExpType[] = [
  {
    id: "leanwork-rheon",
    companyName: "Rheon",
    viaLeanwork: true,
    period: "Sep 2025 ~ Present",
    current: true,
    roleKey: "exp.role.senior",
    bulletPoints: [
      <p key="rheon-azure">
        Cut <HighlightSkill value="azure">Azure</HighlightSkill> build time by 83% (from 6 minutes to 1 minute) by
        rebuilding the multi-tenant marketplace on{" "}
        <HighlightSkill value="tanstack-start">TanStack Start</HighlightSkill>. The{" "}
        <HighlightSkill value="nextjs">Next.js</HighlightSkill> app stayed live. Without Vercel, its Azure deploy was
        the slow part.
      </p>,
      <p key="rheon-vitest">
        Put the <HighlightSkill value="tanstack-start">TanStack Start</HighlightSkill> app under{" "}
        <HighlightSkill value="vitest">Vitest</HighlightSkill>: 800+ tests, covering about 78% of the lines.
      </p>,
      <p key="rheon-dual-stack">
        Kept the legacy <HighlightSkill value="nextjs">Next.js</HighlightSkill> storefront and the new{" "}
        <HighlightSkill value="tanstack-start">TanStack Start</HighlightSkill> app in production together. Same
        multi-tenant marketplace. Used Cursor to implement changes and reviewed each one before merge, while pharmacies
        onboarded.
      </p>
    ],
    tags: ["Azure", "TanStack Start", "Next.js", "Vitest"]
  },
  {
    id: "leanwork-sinerlog",
    companyName: "Sinerlog",
    companyUrl: "https://sinerlog.global/",
    viaLeanwork: true,
    period: "Jan 2025 ~ Aug 2025",
    roleKey: "exp.role.techLead",
    bulletPoints: [
      <p key="sinerlog-team">
        Led a team of 3 frontend engineers in the simultaneous delivery of four admin applications and one multi-tenant
        e-commerce platform using <HighlightSkill value="react">React</HighlightSkill>,{" "}
        <HighlightSkill value="nextjs">Next.js</HighlightSkill>, <HighlightSkill value="vitejs">Vite</HighlightSkill>,
        and <HighlightSkill value="typescript">TypeScript</HighlightSkill>.
      </p>,
      "Worked closely with the client through recurring alignment meetings, translating business requirements into technical scope, priorities, and frontend delivery plans.",
      <p key="sinerlog-registry">
        Designed a shared UI registry inspired by <HighlightSkill value="shadcn">shadcn/ui</HighlightSkill>,
        standardizing reusable components across applications and reducing duplicated implementations.
      </p>,
      "Helped structure separate HML and production delivery pipelines so each environment could be deployed independently."
    ],
    tags: ["React", "Next.js", "Vite", "TypeScript", "shadcn/ui"]
  },
  {
    id: "leanwork-farmacias",
    companyName: "FarmaciasApp",
    companyUrl: "https://farmaciasapp.com.br/",
    viaLeanwork: true,
    period: "Jan 2023 ~ Dec 2024",
    roleKey: "exp.role.senior",
    bulletPoints: [
      <p key="fapp-templates">
        Improved catalog and product templates on a <HighlightSkill value="nextjs">Next.js</HighlightSkill> pharmacy
        marketplace by memoizing components, caching data, and serving images with next/image, then checking the pages
        in Chrome Lighthouse.
      </p>,
      "Made product pages easier to index and share with JSON-LD and Open Graph, and tracked storefront events with Google Tag Manager. Pages rendered with SSR and ISR."
    ],
    tags: ["Next.js"]
  },
  {
    id: "leanwork-riachuelo",
    companyName: "Riachuelo (Fanlab, Carter's)",
    companyUrl: "https://riachuelo.com.br/",
    viaLeanwork: true,
    period: "Jan 2021 ~ Dec 2022",
    roleKey: "exp.role",
    bulletPoints: [
      <p key="riachuelo-storefronts">
        Built and maintained the Fanlab and Carter's storefronts with{" "}
        <HighlightSkill value="react">React</HighlightSkill>, <HighlightSkill value="nextjs">Next.js</HighlightSkill>,
        and <HighlightSkill value="typescript">TypeScript</HighlightSkill>, shipping features on large teams.
      </p>,
      "Improved app cold start by adding a YAML reader for environment config, so the team loaded env at startup instead of setting variables by hand."
    ],
    tags: ["React", "Next.js", "TypeScript"]
  },
  {
    id: "leanwork-centauro",
    companyName: "Centauro",
    companyUrl: "https://centauro.com.br/",
    viaLeanwork: true,
    period: "Jan 2019 ~ Dec 2020",
    roleKey: "exp.role",
    bulletPoints: [
      "Built a product page where customers customized t-shirts on an HTML canvas with fabric.js.",
      <p key="centauro-totems">
        Moved in-store t-shirt customization to <HighlightSkill value="react">React</HighlightSkill> and Electron
        totems, and migrated that UI from class components to functions.
      </p>
    ],
    tags: ["React"]
  },
  {
    id: "leanwork-inicio",
    companyName: "Leanwork",
    companyUrl: "https://leanwork.com.br/",
    period: "Jul 2018 ~ Dec 2018",
    roleKey: "exp.role.junior",
    bulletPoints: [
      <p key="legacy-ecommerces">
        Styled and fixed legacy storefronts (<HighlightSkill value="html">HTML</HighlightSkill>,{" "}
        <HighlightSkill value="css">CSS</HighlightSkill>, <HighlightSkill value="javascript">JavaScript</HighlightSkill>
        , jQuery) and built an Angular app for courses, exams, and students.
      </p>
    ],
    tags: ["HTML", "CSS", "JavaScript"]
  }
];

export function getExpLeanwork(locale: Locale): ExpType[] {
  return locale === "en" ? EXP_LEANWORK_EN : EXP_LEANWORK_PT_BR;
}
