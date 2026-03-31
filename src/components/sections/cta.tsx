import React from "react";

const Cta = () => {
  return (
    <section id="cta" className="relative px-6 pt-10 lg:px-12">
      <div className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/3 p-8 backdrop-blur md:p-12">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(167,201,87,0.12),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(56,102,65,0.18),transparent_40%)]" />

          <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-2xl">
              <span className="font-mono text-xs uppercase tracking-[0.35em] text-primary">
                contact.tsx
              </span>

              <h2 className="mt-5 font-display text-4xl font-bold leading-tight text-foreground md:text-5xl">
                Vamos transformar uma ideia em um projeto real.
              </h2>

              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Estou aberto a oportunidades como desenvolvedor front-end/full
                stack e também aberto a freelas, colaborações e novos projetos.
                Se você gostou do meu trabalho, vamos conversar.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="mailto:rhcarvalhodev@gmail.com"
                  className="inline-flex items-center justify-center rounded-2xl bg-primary px-6 py-3 font-medium text-background transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(167,201,87,0.25)]"
                >
                  Entrar em contato
                </a>

                <a
                  href="https://github.com/rhuanlucasdev"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/3 px-6 py-3 font-medium text-foreground transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-white/5"
                >
                  Ver GitHub
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="w-full min-w-70 rounded-3xl border border-white/10 bg-black/30 p-6 backdrop-blur">
                <div className="mb-5 flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-400/80" />
                  <div className="h-3 w-3 rounded-full bg-yellow-400/80" />
                  <div className="h-3 w-3 rounded-full bg-green-400/80" />

                  <span className="ml-3 font-mono text-xs text-muted-foreground">
                    hire-me.ts
                  </span>
                </div>

                <div className="space-y-3 font-mono text-sm leading-7">
                  <p>
                    <span className="text-primary">const</span>{" "}
                    <span className="text-foreground">developer</span> = {"{"}
                  </p>

                  <p className="pl-4">
                    name: <span className="text-[#A7C957]">"Rhuan Lucas"</span>,
                  </p>

                  <p className="pl-4">
                    role:{" "}
                    <span className="text-[#A7C957]">
                      "Front-End / Full Stack Developer"
                    </span>
                    ,
                  </p>

                  <p className="pl-4">
                    status:{" "}
                    <span className="text-[#A7C957]">
                      "Disponível para oportunidades"
                    </span>
                    ,
                  </p>

                  <p className="pl-4">
                    stack:{" "}
                    <span className="text-[#A7C957]">
                      ["React", "Next.js", "TypeScript", "Node.js"]
                    </span>
                    ,
                  </p>

                  <p>{"}"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
