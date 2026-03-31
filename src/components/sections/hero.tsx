"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-24 pt-5 sm:px-10 lg:px-6 lg:pb-32 lg:pt-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10"
        >
          <span className="status-chip mb-8 text-[11px] font-semibold uppercase tracking-[0.24em] text-accent-3">
            Disponivel para novos projetos
          </span>

          <div className="max-w-3xl space-y-3">
            <h1 className="font-display text-[clamp(3.5rem,8vw,4.75rem)] font-medium leading-[0.95] tracking-[-0.06em] text-foreground">
              Rhuan Lucas
            </h1>

            <h1 className="text-name-gradient font-display text-[clamp(4.5rem,10vw,6.5rem)] font-bold leading-[0.9] tracking-[-0.07em]">
              Dev Fullstack
            </h1>
          </div>

          <p className="mt-8 max-w-2xl text-balance text-body-lg text-foreground-muted sm:text-[1.05rem] sm:leading-8">
            Projetando e desenvolvendo experiências digitais de alta
            performance, com foco em interfaces elegantes, arquitetura escalável
            e tecnologias web modernas.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="#cta"
              className="button-primary inline-flex h-14 items-center justify-center px-8 text-center"
            >
              Entrar em Contato
            </Link>

            <Link
              href="https://github.com/rhuanlucasdev"
              target="_blank"
              rel="noreferrer"
              className="button-secondary inline-flex h-14 items-center justify-center px-8 text-label-md font-semibold uppercase tracking-[0.14em] text-foreground transition-all duration-300 hover:border-accent/30 hover:bg-surface-high"
            >
              Ver Github
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40, rotateY: -10 }}
          animate={{ opacity: 1, x: 0, rotateY: -8 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative hidden lg:block"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="pointer-events-none absolute -left-12 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-accent/10 blur-3xl" />

          <div className="code-panel relative ml-auto max-w-136 overflow-hidden">
            <div className="flex items-center gap-2 border-b border-outline px-5 py-4">
              <span className="h-3 w-3 rounded-full bg-[#ef4444]" />
              <span className="h-3 w-3 rounded-full bg-[#f59e0b]" />
              <span className="h-3 w-3 rounded-full bg-[#22c55e]" />

              <span className="ml-4 font-mono text-[0.72rem] text-foreground-subtle">
                portfolio.tsx
              </span>
            </div>

            <div className="grid grid-cols-[auto_1fr] gap-x-5 px-5 py-6 font-mono text-[0.92rem] leading-8 text-foreground-muted">
              <div className="select-none text-right text-foreground-subtle/40">
                <p>01</p>
                <p>02</p>
                <p>03</p>
                <p>04</p>
                <p>05</p>
                <p>06</p>
                <p>07</p>
                <p>08</p>
                <p>09</p>
                <p>10</p>
                <p>11</p>
              </div>

              <div className="space-y-0.5">
                <p>
                  <span className="text-accent">const</span>{" "}
                  <span className="text-primary">rhuan-lucas</span>{" "}
                  <span className="text-foreground">=</span>{" "}
                  <span className="text-foreground">{"{"}</span>
                </p>

                <p className="pl-4">
                  <span className="text-accent-3">role</span>
                  <span className="text-foreground">:</span>{" "}
                  <span className="text-[#86efac]">"FullStack Developer"</span>,
                </p>

                <p className="pl-4">
                  <span className="text-accent-3">focus</span>
                  <span className="text-foreground">:</span>{" "}
                  <span className="text-[#86efac]">
                    ["Performance", "Scalability"]
                  </span>
                  ,
                </p>

                <p className="pl-4">
                  <span className="text-accent-3">techStack</span>
                  <span className="text-foreground">:</span>{" "}
                  <span className="text-foreground">{"{"}</span>
                </p>

                <p className="pl-8">
                  <span className="text-accent-3">frontend</span>
                  <span className="text-foreground">:</span>{" "}
                  <span className="text-[#86efac]">
                    "React / Next.js / TailwindCSS"
                  </span>
                  ,
                </p>

                <p className="pl-8">
                  <span className="text-accent-3">backend</span>
                  <span className="text-foreground">:</span>{" "}
                  <span className="text-[#86efac]">"Node.js / PHP "</span>
                </p>
                <p className="pl-8">
                  <span className="text-accent-3">e-commerce</span>
                  <span className="text-foreground">:</span>{" "}
                  <span className="text-[#86efac]">"VTEX IO / Magento 2"</span>
                </p>

                <p className="pl-4 text-foreground">{"},"}</p>
                <p className="text-foreground">{"};"}</p>

                <p className="pt-3 text-accent">
                  export default <span className="text-primary">Rhuan</span>;
                  <span className="ml-1 inline-block h-4 w-2 animate-pulse bg-white align-middle" />
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
