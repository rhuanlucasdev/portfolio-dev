"use client";

import { useState, useEffect, useRef } from "react";
import {
  TerminalSquare,
  FileDown,
  X,
  Minus,
  Square,
  ChevronRight,
} from "lucide-react";

// const navLinks = [
//   { label: "About", href: "#about" },
//   { label: "Projects", href: "#projects" },
//   { label: "Contact", href: "#cta" },
// ];

const terminalLines = [
  { prefix: "~", cmd: "whoami", delay: 0 },
  { prefix: "~", cmd: "cat resume.pdf | open", delay: 800 },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [typedLines, setTypedLines] = useState<number[]>([]);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = [
      "about",
      "projects",
      "tech-stack",
      "timeline",
      "github-activity",
      "contact",
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.35 },
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!terminalOpen) {
      setTypedLines([]);
      return;
    }

    const timers = terminalLines.map((line, i) =>
      window.setTimeout(() => {
        setTypedLines((prev) => [...prev, i]);
      }, line.delay + 150),
    );

    return () => timers.forEach(clearTimeout);
  }, [terminalOpen]);

  useEffect(() => {
    if (!terminalOpen) return;

    const handler = (e: MouseEvent) => {
      if (
        terminalRef.current &&
        !terminalRef.current.contains(e.target as Node)
      ) {
        setTerminalOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => document.removeEventListener("mousedown", handler);
  }, [terminalOpen]);

  const handleNav = (href: string) => {
    const target = document.querySelector(href);

    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className="fixed top-0 right-0 left-0 z-40 flex h-11 items-center justify-between px-4 transition-all duration-300 sm:px-6 lg:left-12"
        style={{
          background: scrolled
            ? "rgba(16, 20, 32, 0.72)"
            : "var(--color-surface-lowest)",
          backdropFilter: scrolled ? "blur(14px)" : "none",
          borderBottom: `1px solid ${
            scrolled
              ? "rgba(120, 170, 255, 0.18)"
              : "var(--color-surface-container)"
          }`,
          boxShadow: scrolled ? "0 8px 24px rgba(0,0,0,0.35)" : "none",
        }}
      >
        {/* Left breadcrumb */}
        <div
          className="flex min-w-0 items-center gap-1.5 overflow-hidden text-xs"
          style={{
            fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
            color: "var(--color-foreground-subtle)",
          }}
        >
          <span
            className="truncate"
            style={{ color: "var(--color-foreground-muted)" }}
          >
            portfolio
          </span>

          <ChevronRight size={12} strokeWidth={1.5} />

          <span className="truncate" style={{ color: "var(--color-primary)" }}>
            rhuan-lucas
          </span>

          <ChevronRight size={12} strokeWidth={1.5} />

          <span
            className="hidden truncate sm:inline"
            style={{ color: "var(--color-accent)" }}
          >
            page.tsx
          </span>

          <span
            className="ml-0.5 inline-block h-3 w-px animate-pulse"
            style={{ background: "var(--color-accent)" }}
          />
        </div>

        {/* Center nav */}
        <nav className="absolute left-1/2 hidden max-w-[42vw] -translate-x-1/2 items-center gap-1 overflow-hidden md:flex" />

        {/* Right actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setTerminalOpen((prev) => !prev)}
            className="group flex h-8 w-8 items-center justify-center rounded-sm border transition-all duration-200"
            style={{
              borderColor: terminalOpen
                ? "var(--color-outline-strong)"
                : "transparent",
              background: terminalOpen
                ? "var(--color-surface-container)"
                : "transparent",
              color: terminalOpen
                ? "var(--color-accent)"
                : "var(--color-foreground-subtle)",
            }}
            aria-label="Toggle terminal"
          >
            <TerminalSquare
              size={15}
              strokeWidth={1.7}
              className="transition-transform duration-200 group-hover:scale-110"
            />
          </button>

          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-1.5 rounded-sm px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] transition-all duration-200 hover:-translate-y-px hover:brightness-110"
            style={{
              fontFamily: "var(--font-display)",
              background: "var(--background-image-primary-gradient)",
              color: "var(--color-surface)",
              boxShadow: "var(--shadow-button)",
            }}
          >
            <FileDown size={13} strokeWidth={2} />
            <span className="hidden sm:inline">Resume</span>
          </a>
        </div>
      </header>

      {terminalOpen && (
        <div
          ref={terminalRef}
          className="fixed right-0 bottom-0 left-0 z-30 transition-all duration-300 lg:left-12"
          style={{
            height: "clamp(160px, 22vh, 240px)",
            background: "rgba(10, 13, 28, 0.92)",
            backdropFilter: "blur(18px)",
            borderTop: "1px solid var(--color-outline-strong)",
            boxShadow: "0 -12px 32px rgba(0,0,0,0.45)",
          }}
        >
          {/* Terminal header */}
          <div
            className="flex items-center justify-between border-b px-4 py-1.5"
            style={{
              borderColor: "var(--color-outline)",
              background: "rgba(20, 24, 38, 0.9)",
            }}
          >
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setTerminalOpen(false)}
                  className="flex h-3 w-3 items-center justify-center rounded-full transition-opacity hover:opacity-80"
                  style={{ background: "#ff5f57" }}
                  aria-label="Close terminal"
                >
                  <X
                    size={7}
                    strokeWidth={2.5}
                    className="opacity-0 transition-opacity hover:opacity-100"
                  />
                </button>

                <span
                  className="h-3 w-3 rounded-full"
                  style={{ background: "#febc2e" }}
                />

                <span
                  className="h-3 w-3 rounded-full"
                  style={{ background: "#28c840" }}
                />
              </div>

              <span
                className="text-xs"
                style={{
                  fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                  color: "var(--color-foreground-subtle)",
                }}
              >
                zsh — portfolio
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Minus
                size={12}
                style={{ color: "var(--color-foreground-subtle)" }}
              />
              <Square
                size={10}
                style={{ color: "var(--color-foreground-subtle)" }}
              />
            </div>
          </div>

          {/* Terminal body */}
          <div className="flex h-[calc(100%-34px)] flex-col gap-1 overflow-auto px-5 py-3">
            {terminalLines.map((line, i) =>
              typedLines.includes(i) ? (
                <div
                  key={i}
                  className="flex items-center gap-2 text-sm"
                  style={{
                    fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                  }}
                >
                  <span style={{ color: "#28c840" }}>❯</span>

                  <span style={{ color: "var(--color-foreground-subtle)" }}>
                    {line.prefix}
                  </span>

                  <span style={{ color: "var(--color-foreground)" }}>
                    {line.cmd}
                  </span>

                  {i === 1 && (
                    <span
                      className="ml-2 rounded px-2 py-0.5 text-xs"
                      style={{
                        background: "var(--color-surface-container)",
                        color: "var(--color-accent-3)",
                        border: "1px solid var(--color-outline)",
                      }}
                    >
                      Opening resume.pdf...
                    </span>
                  )}
                </div>
              ) : null,
            )}

            <div
              className="flex items-center gap-2 text-sm"
              style={{
                fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
              }}
            >
              <span style={{ color: "#28c840" }}>❯</span>

              <span style={{ color: "var(--color-foreground-subtle)" }}>~</span>

              <span
                className="inline-block h-4 w-1 animate-pulse"
                style={{
                  background: "var(--color-foreground)",
                  opacity: 0.9,
                }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
