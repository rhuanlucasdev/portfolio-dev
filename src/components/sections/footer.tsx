import Link from "next/link";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative mt-32 border-t border-outline bg-surface-lowest/80 backdrop-blur-xl">
      <div className="absolute inset-0 bg-section-glow opacity-60" />

      <div className="relative mx-auto flex max-w-7xl flex-col gap-10 px-6 py-12 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-16">
        <div className="max-w-md space-y-4">
          <div>
            <p className="font-display text-2xl font-bold tracking-[-0.04em] text-foreground">
              Rhuan Lucas <span className="text-name-gradient">Carvalho</span>
            </p>

            <p className="mt-1 text-sm uppercase tracking-[0.22em] text-foreground-subtle">
              Desenvolvedor Full Stack
            </p>
          </div>

          <p className="text-body-md text-foreground-muted">
            Desenvolvendo experiências digitais modernas com foco em
            performance, design e código limpo.
          </p>
        </div>

        <div className="flex flex-col items-start gap-8 sm:flex-row sm:gap-12 lg:items-end">
          <div>
            <p className="mb-4 text-label-md uppercase tracking-[0.18em] text-foreground-subtle">
              Navegação
            </p>

            <nav className="flex flex-col gap-3 text-body-md text-foreground-muted">
              <Link
                href="#about"
                className="transition-colors duration-300 hover:text-accent"
              >
                Sobre
              </Link>

              <Link
                href="#projects"
                className="transition-colors duration-300 hover:text-accent"
              >
                Projetos
              </Link>

              <Link
                href="#cta"
                className="transition-colors duration-300 hover:text-accent"
              >
                Contato
              </Link>
            </nav>
          </div>

          <div>
            <p className="mb-4 text-label-md uppercase tracking-[0.18em] text-foreground-subtle">
              Contato
            </p>

            <div className="flex items-center gap-3">
              <Link
                href="https://github.com/rhuanlucasdev"
                target="_blank"
                rel="noreferrer"
                className="glass flex h-11 w-11 items-center justify-center rounded-lg text-foreground-muted transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:text-accent"
              >
                <FaGithub size={18} />
              </Link>

              <Link
                href="https://linkedin.com/in/rhuanlucas"
                target="_blank"
                rel="noreferrer"
                className="glass flex h-11 w-11 items-center justify-center rounded-lg text-foreground-muted transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:text-accent"
              >
                <FaLinkedinIn size={18} />
              </Link>

              <Link
                href="mailto:rhcarvalhodev@gmail.com"
                className="glass flex h-11 w-11 items-center justify-center rounded-lg text-foreground-muted transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:text-accent"
              >
                <Mail size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-t border-outline px-6 py-5 sm:px-10 lg:px-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 text-sm text-foreground-subtle sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Rhuan Lucas Carvalho.</p>

          <p>Construído com Next.js, Tailwind CSS e Framer Motion.</p>
        </div>
      </div>
    </footer>
  );
}
