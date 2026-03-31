import React from "react";
import { GitHubCalendar } from "react-github-calendar";

const GithubActivity = () => {
  return (
    <section id="github" className="relative px-6 py-24 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 flex items-center gap-3">
          <div className="h-px w-12 bg-primary" />

          <span className="font-mono text-sm uppercase tracking-[0.3em] text-primary">
            github.tsx
          </span>
        </div>

        <div className="mb-12 max-w-3xl">
          <h2 className="font-display text-4xl font-bold text-foreground md:text-5xl">
            Atividade no GitHub
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Estou constantemente estudando, criando projetos e evoluindo minhas
            habilidades. Esta seção mostra um pouco da minha atividade e do meu
            progresso como desenvolvedor.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-white/10 bg-white/3 backdrop-blur">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-red-400/80" />
                <div className="h-3 w-3 rounded-full bg-yellow-400/80" />
                <div className="h-3 w-3 rounded-full bg-green-400/80" />
              </div>

              <span className="font-mono text-xs text-muted-foreground">
                contribution-graph.tsx
              </span>
            </div>

            <div className="p-6">
              <div className="react-github-calendar">
                <GitHubCalendar
                  username="rhuanlucasdev"
                  blockSize={6}
                  blockMargin={4}
                  fontSize={12}
                  colorScheme="dark"
                  theme={{
                    dark: [
                      "#171b2a",
                      "#262939",
                      "#334155",
                      "#2563eb",
                      "#b4c5ff",
                    ],
                  }}
                  style={{
                    color: "#c3c6d7",
                    fontFamily: "var(--font-body)",
                    width: "100%",
                  }}
                />
              </div>

              <p className="mt-5 font-mono text-sm leading-7 text-muted-foreground">
                <span className="text-primary">{">"}</span> Contribuindo quase
                todos os dias, desenvolvendo projetos em React, Next.js,
                TypeScript e Node.js.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-white/10 bg-white/3 p-6 backdrop-blur">
              <div className="mb-5 flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
                  stats.json
                </span>

                <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 font-mono text-xs text-primary">
                  github
                </span>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/3 px-4 py-3">
                  <span className="text-muted-foreground">Repositórios</span>
                  <span className="font-mono text-lg font-semibold text-foreground">
                    30+
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/3 px-4 py-3">
                  <span className="text-muted-foreground">Tecnologias</span>
                  <span className="font-mono text-lg font-semibold text-foreground">
                    React • TS • Node.js
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/3 px-4 py-3">
                  <span className="text-muted-foreground">Foco Atual</span>
                  <span className="font-mono text-lg font-semibold text-foreground">
                    Full Stack
                  </span>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/3 p-6 backdrop-blur">
              <div className="mb-5 flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
                  streak.ts
                </span>

                <span className="font-mono text-xs text-muted-foreground">
                  // consistência
                </span>
              </div>

              <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20 p-4">
                <img
                  src="https://github-readme-streak-stats.herokuapp.com?user=rhuanlucasdev&theme=transparent&hide_border=true&ring=6A994E&fire=A7C957&currStreakLabel=A7C957"
                  alt="GitHub Streak"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GithubActivity;
