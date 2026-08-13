import { techGroups } from "@/utils/consts";
import type { IconType } from "react-icons";
import {
  SiGit,
  SiGitkraken,
  SiGraphql,
  SiJavascript,
  SiJira,
  SiNodedotjs,
  SiPreact,
  SiReact,
  SiReactquery,
  SiSass,
  SiShopify,
  SiStorybook,
  SiTailwindcss,
  SiTypescript,
  SiVtex,
  SiVuedotjs,
} from "react-icons/si";
import {
  TbApi,
  TbBrandMonday,
  TbBuildingStore,
  TbComponents,
  TbShoppingCartCode,
} from "react-icons/tb";

const technologyIcons: Record<
  string,
  { icon: IconType; color: string }
> = {
  React: { icon: SiReact, color: "#61DAFB" },
  TypeScript: { icon: SiTypescript, color: "#3178C6" },
  JavaScript: { icon: SiJavascript, color: "#F7DF1E" },
  Preact: { icon: SiPreact, color: "#673AB8" },
  Vue: { icon: SiVuedotjs, color: "#42B883" },
  Sass: { icon: SiSass, color: "#CC6699" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#06B6D4" },
  Storybook: { icon: SiStorybook, color: "#FF4785" },
  VTEX: { icon: SiVtex, color: "#F71963" },
  Shopify: { icon: SiShopify, color: "#7AB55C" },
  Deco: { icon: TbShoppingCartCode, color: "#A06BFF" },
  Uappi: { icon: TbBuildingStore, color: "#F97316" },
  "REST APIs": { icon: TbApi, color: "#00A4EF" },
  GraphQL: { icon: SiGraphql, color: "#E10098" },
  "Node.js": { icon: SiNodedotjs, color: "#5FA04E" },
  "React Query": { icon: SiReactquery, color: "#FF4154" },
  "Design systems": { icon: TbComponents, color: "#A259FF" },
  Git: { icon: SiGit, color: "#F05032" },
  GitKraken: { icon: SiGitkraken, color: "#179287" },
  Jira: { icon: SiJira, color: "#2684FF" },
  Monday: { icon: TbBrandMonday, color: "#FFCB00" },
};

const TecsChart = () => {
  const technologiesCount = techGroups.reduce(
    (total, group) => total + group.technologies.length,
    0,
  );

  return (
    <div className="mt-10 overflow-hidden border-y border-primary/70 bg-black-secondary/15">
      <div className="flex flex-col gap-6 px-5 py-8 sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:px-10">
        <div className="max-w-2xl">
          <p className="mb-3 flex items-center gap-3 text-xs font-bold tracking-[0.22em] text-primary">
            <span className="h-px w-8 bg-primary" aria-hidden="true" />
            STACK EM PRODUÇÃO
          </p>
          <p className="text-lg leading-8 text-dark-or-light-secondary">
            Ferramentas que uso para construir, integrar e evoluir e-commerces
            com foco em performance, manutenção e experiência de compra.
          </p>
        </div>
        <p className="flex items-baseline gap-2 text-dark-or-light-secondary/60">
          <strong className="text-4xl font-semibold text-dark-or-light-secondary">
            {technologiesCount}
          </strong>
          <span className="text-xs uppercase tracking-widest">tecnologias</span>
        </p>
      </div>

      {techGroups.map((group, groupIndex) => (
        <article
          key={group.title}
          className="grid border-t border-black-secondary lg:grid-cols-[230px_1fr]"
        >
          <header className="flex items-center gap-4 px-5 py-5 sm:px-8 lg:items-start lg:px-10 lg:py-7">
            <span className="font-mono text-xs text-primary" aria-hidden="true">
              {String(groupIndex + 1).padStart(2, "0")}
            </span>
            <h3 className="text-base font-semibold leading-6 text-dark-or-light-secondary">
              {group.title}
            </h3>
          </header>

          <ul
            className="grid grid-cols-2 bg-dark-or-light-primary sm:grid-cols-3 xl:grid-cols-4"
            aria-label={group.title}
          >
            {group.technologies.map((technology) => {
              const technologyIcon = technologyIcons[technology];
              const TechnologyIcon = technologyIcon.icon;

              return (
                <li
                  key={technology}
                  className="group flex min-h-20 items-center gap-3 border-b border-r border-black-secondary bg-dark-or-light-primary px-4 py-4 hover:bg-primary/10 sm:px-5"
                >
                  <TechnologyIcon
                    aria-hidden="true"
                    size={26}
                    color={technologyIcon.color}
                    className="shrink-0 group-hover:scale-110"
                  />
                  <span className="text-sm font-medium text-dark-or-light-secondary">
                    {technology}
                  </span>
                </li>
              );
            })}
          </ul>
        </article>
      ))}
    </div>
  );
};

export default TecsChart;
