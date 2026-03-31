import React from "react";

const Timeline = () => {
  return (
    <section id="timeline" className="relative px-6 py-24 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 flex items-center gap-3">
          <div className="h-px w-12 bg-primary" />

          <span className="font-mono text-sm uppercase tracking-[0.3em] text-primary">
            timeline.tsx
          </span>
        </div>

        <div className="mb-16 max-w-3xl">
          <h2 className="font-display text-4xl font-bold text-foreground md:text-5xl">
            Minha trajetória
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Uma visão geral da minha evolução como desenvolvedor, desde os
            primeiros estudos até os projetos e experiências que estou
            construindo atualmente.
          </p>
        </div>

        <div className="relative ml-2 border-l border-white/10 pl-8">
          {[
            {
              year: "2016",
              title:
                "Início nos estudos de programação - Curso Tecnico em Desenvolvimento Web",
              description:
                "Comecei a estudar desenvolvimento web com foco em HTML, CSS e JavaScript, construindo meus primeiros projetos e aprendendo lógica de programação.",
            },
            {
              year: "2018",
              title: "Bacharelado em Física - UNIFEI",
              description:
                "Cursei o bacharelado em Física na UNIFEI, aprofundando meus conhecimentos em matemática, física e ali aprendi um pouco de Python.",
            },
            {
              year: "2025",
              title: "Analise e Desenvolvimento de Sistemas - UNA",
              description:
                "Comecei a cursar análise e desenvolvimento de sistemas na UNA, aprofundando meus conhecimentos em programação e engenharia de software.",
            },
            {
              year: "Agora",
              title: "Estagiario em Desenvolvimento - AVANTI",
              description:
                "Estou atuando como estagiário em desenvolvimento na area de implantação na AVANTI, onde estou aplicando meus conhecimentos em VTEXIO, Faststore, Magento (React.js / Node.js / TypeScript / PHP) e aprendendo com profissionais experientes.",
            },
          ].map((item, index) => (
            <article
              key={index}
              className="group relative mb-10 rounded-3xl border border-white/10 bg-white/3 p-6 backdrop-blur transition-all duration-300 hover:border-primary/40 hover:bg-white/5 hover:-translate-y-1"
            >
              <div className="absolute -left-[2.65rem] top-8 flex h-5 w-5 items-center justify-center rounded-full border border-primary/40 bg-background shadow-[0_0_20px_rgba(167,201,87,0.25)]">
                <div className="h-2 w-2 rounded-full bg-primary" />
              </div>

              <div className="mb-4 flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 font-mono text-xs uppercase tracking-[0.2em] text-primary">
                  {item.year}
                </span>

                <span className="font-mono text-xs text-muted-foreground">
                  {`// etapa-${index + 1}`}
                </span>
              </div>

              <h3 className="font-display text-2xl font-semibold text-foreground">
                {item.title}
              </h3>

              <p className="mt-4 leading-8 text-muted-foreground">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
