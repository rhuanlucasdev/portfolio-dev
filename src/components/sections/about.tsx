"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative px-6 py-24 sm:px-10 lg:px-6 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-block text-label-md uppercase tracking-[0.24em] text-accent-3"
          >
            Sobre mim
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-display text-[clamp(2.75rem,6vw,4.5rem)] leading-[0.95] tracking-[-0.05em] text-foreground"
          >
            Transformando ideias em
            <span className="text-name-gradient"> produtos digitais </span>
            modernos.
          </motion.h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="card-premium p-8 lg:p-10">
              <p className="text-body-lg leading-8 text-foreground-muted">
                Sou um desenvolvedor focado em criar interfaces modernas,
                intuitivas e de alta performance. Atualmente, meu principal foco
                está em React, Next.js, TypeScript e Tailwind CSS, sempre
                buscando unir design, usabilidade e código limpo.
              </p>

              <p className="mt-6 text-body-lg leading-8 text-foreground-muted">
                Também estou evoluindo constantemente no desenvolvimento full
                stack, construindo projetos completos com Node.js, bancos de
                dados e arquiteturas escaláveis para transformar ideias em
                aplicações reais.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="card-premium p-6">
                <p className="mb-2 font-display text-4xl font-bold text-accent">
                  3+
                </p>

                <p className="text-body-md text-foreground-muted">
                  Anos estudando desenvolvimento web e construindo projetos.
                </p>
              </div>

              <div className="card-premium p-6">
                <p className="mb-2 font-display text-4xl font-bold text-accent">
                  20+
                </p>

                <p className="text-body-md text-foreground-muted">
                  Projetos pessoais e acadêmicos desenvolvidos.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-5"
          >
            <div className="card-premium p-7">
              <p className="mb-6 font-display text-title-lg text-foreground">
                Stack principal
              </p>

              <div className="flex flex-wrap gap-3">
                {[
                  "React",
                  "Next.js",
                  "TypeScript",
                  "Tailwind CSS",
                  "JavaScript",
                  "Node.js",
                  "PHP",
                  ".NET",
                  "Git",
                  "Figma",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-outline bg-surface-high px-4 py-2 text-sm text-foreground-muted transition-colors duration-300 hover:border-accent/40 hover:text-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="code-panel relative overflow-hidden p-7">
              <div className="mb-6 flex items-center gap-2 border-b border-outline pb-4">
                <span className="h-3 w-3 rounded-full bg-[#ef4444]" />
                <span className="h-3 w-3 rounded-full bg-[#f59e0b]" />
                <span className="h-3 w-3 rounded-full bg-[#22c55e]" />

                <span className="ml-3 font-mono text-xs text-foreground-subtle">
                  about.ts
                </span>
              </div>

              <div className="space-y-2 font-mono text-[0.92rem] leading-8 text-foreground-muted">
                <p>
                  <span className="text-accent">const</span>{" "}
                  <span className="text-primary">developer</span> = {"{"}
                </p>

                <p className="pl-4">
                  <span className="text-accent-3">name</span>:{" "}
                  <span className="text-[#86efac]">"Rhuan Lucas"</span>,
                </p>

                <p className="pl-4">
                  <span className="text-accent-3">speciality</span>:{" "}
                  <span className="text-[#86efac]">
                    "Front-End & FullStack"
                  </span>
                  ,
                </p>

                <p className="pl-4">
                  <span className="text-accent-3">currentlyLearning</span>:{" "}
                  <span className="text-[#86efac]">
                    ["Arquitetura", "Back-End", "Cloud"]
                  </span>
                  ,
                </p>

                <p className="pl-4">
                  <span className="text-accent-3">goal</span>:{" "}
                  <span className="text-[#86efac]">
                    "Criar produtos modernos e memoráveis"
                  </span>
                </p>

                <p>{"};"}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
