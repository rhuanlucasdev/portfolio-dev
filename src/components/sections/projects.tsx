export default function Projects() {
  const projects = [
    {
      id: "finly",
      file: "finly/page.tsx",
      title: "Finly",
      description:
        "Dashboard financeiro pessoal para acompanhar receitas, despesas, metas e investimentos com interface moderna e arquitetura full stack.",
      stack: ["Next.js 14", "TypeScript", "TailwindCSS", "Laravel 11"],
      features: [
        "Controle de receitas e despesas",
        "Metas financeiras e investimentos",
        "Dashboard com gráficos e estatísticas",
        "Arquitetura Clean entre front-end e back-end",
      ],
      github: "https://github.com/rhuanlucasdev/finly",
      demo: "#",
    },
    {
      id: "task-manager-fullstack",
      file: "task-manager-fullstack/App.vue",
      title: "Task Manager Fullstack",
      description:
        "Gerenciador de tarefas moderno construído com Vue, Spring Boot e PostgreSQL, focado em arquitetura escalável e interface refinada.",
      stack: ["Vue", "TypeScript", "Spring Boot", "PostgreSQL"],
      features: [
        "CRUD completo de tarefas",
        "Backend escalável com Spring Boot",
        "Persistência em PostgreSQL",
        "Interface moderna e responsiva",
      ],
      github: "https://github.com/rhuanlucasdev/task-manager-fullstack",
      demo: "#",
    },
    {
      id: "xp-forge",
      file: "xp-forge/page.tsx",
      title: "XP Forge",
      description:
        "Planejador e rastreador de progresso para habilidades de RuneScape, criado com foco em UX e organização de metas.",
      stack: ["Next.js", "TypeScript", "TailwindCSS"],
      features: [
        "Planejamento de skills",
        "Cálculo de XP e progresso",
        "Interface inspirada em jogos",
        "Experiência totalmente responsiva",
      ],
      github: "https://github.com/rhuanlucasdev/xp-forge",
      demo: "#",
    },
    {
      id: "velour",
      file: "velour/main.tsx",
      title: "Velour",
      description:
        "Ferramenta para criadores organizarem ideias, criarem hooks de alto impacto e transformarem inspiração em conteúdo pronto para publicação.",
      stack: ["React", "TypeScript", "Stripe", "TailwindCSS"],
      features: [
        "Organização de ideias de conteúdo",
        "Geração de hooks para posts",
        "Fluxo pronto para creators",
        "Modelo SaaS com Stripe",
      ],
      github: "https://github.com/rhuanlucasdev/velour",
      demo: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="relative border-t border-outline bg-surface-lowest px-6 py-24 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-4">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary">
            <span className="h-px w-10 bg-primary" />
            Projects
          </div>

          <h2 className="max-w-3xl text-3xl font-semibold leading-tight text-foreground md:text-5xl">
            Alguns dos projetos que estou desenvolvendo para meu portfólio.
          </h2>

          <p className="max-w-2xl text-sm leading-7 text-foreground-subtle md:text-base">
            Cada projeto foi pensado para demonstrar diferentes habilidades em
            front-end, back-end e arquitetura full stack.
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project) => (
            <article
              key={project.id}
              className="overflow-hidden rounded-3xl border border-outline bg-surface shadow-[0_20px_50px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
            >
              <div className="border-b border-outline bg-surface-container px-4 py-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                  <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                  <span className="h-3 w-3 rounded-full bg-[#28c840]" />

                  <div className="ml-4 flex items-center rounded-lg border border-outline bg-surface-lowest px-3 py-1 text-xs text-foreground-subtle">
                    src/projects/{project.file}
                  </div>
                </div>
              </div>

              <div className="grid gap-0 lg:grid-cols-[1.2fr_0.8fr]">
                <div className="border-b border-outline p-6 lg:border-b-0 lg:border-r">
                  <div className="mb-5 flex items-center justify-between gap-4">
                    <div>
                      <h3 className="mb-2 text-2xl font-semibold text-foreground">
                        {project.title}
                      </h3>
                      <p className="max-w-2xl text-sm leading-7 text-foreground-subtle">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-outline bg-[#0f1726] p-5 font-mono text-sm leading-7 text-foreground-subtle">
                    <div>
                      <span className="text-primary">//</span>{" "}
                      {project.title}
                    </div>
                    <div>
                      <span className="text-primary">//</span>{" "}
                      {project.stack.join(" + ")}
                    </div>
                    <div className="mt-4 text-foreground">
                      <span className="text-accent">const</span>{" "}
                      <span className="text-primary">
                        features
                      </span>{" "}
                      = [
                    </div>

                    <div className="mt-2 space-y-1 pl-6">
                      {project.features.map((feature) => (
                        <div key={feature}>
                          <span className="text-accent-2">
                            "{feature}"
                          </span>
                          ,
                        </div>
                      ))}
                    </div>

                    <div className="mt-2 text-foreground">
                      ];
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-between p-6">
                  <div>
                    <span className="mb-4 block text-xs uppercase tracking-[0.25em] text-foreground-muted">
                      Stack
                    </span>

                    <div className="mb-8 flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-outline bg-surface-container px-3 py-1 text-xs font-medium text-foreground-subtle"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      className="inline-flex items-center justify-center rounded-xl border border-outline px-4 py-2 text-sm font-medium text-foreground transition-all duration-200 hover:border-primary hover:bg-surface-container"
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
