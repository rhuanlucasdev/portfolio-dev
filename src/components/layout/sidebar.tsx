"use client";

import { useState, useEffect } from "react";
import {
  Files,
  Search,
  GitBranch,
  PackageSearch,
  Settings,
  CircleUserRound,
} from "lucide-react";

const topIcons = [
  { id: "explorer", icon: Files, label: "Explorer", href: "#hero" },
  { id: "search", icon: Search, label: "Search", href: "#about" },
  {
    id: "source-control",
    icon: GitBranch,
    label: "Source Control",
    href: "#projects",
  },
  {
    id: "extensions",
    icon: PackageSearch,
    label: "Extensions",
    href: "#tech-stack",
  },
];

const bottomIcons = [
  { id: "settings", icon: Settings, label: "Settings", href: "#" },
  { id: "account", icon: CircleUserRound, label: "Account", href: "#contact" },
];

export default function Sidebar() {
  const [activeId, setActiveId] = useState("explorer");
  const [tooltip, setTooltip] = useState<string | null>(null);

  useEffect(() => {
    const sectionMap: Record<string, string> = {
      hero: "explorer",
      about: "search",
      projects: "source-control",
      "tech-stack": "extensions",
      contact: "account",
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const mapped = sectionMap[entry.target.id];
            if (mapped) setActiveId(mapped);
          }
        });
      },
      { threshold: 0.4 },
    );

    Object.keys(sectionMap).forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNav = (href: string, id: string) => {
    setActiveId(id);
    if (href === "#") return;
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <aside className="fixed left-0 top-0 z-50 hidden h-screen w-12 flex-col items-center justify-between border-r border-outline bg-background isolate after:absolute after:right-0 after:top-0 after:h-full after:w-px after:bg-background lg:flex">
      {/* Top icons */}
      <div className="relative flex flex-col items-center gap-1 pt-2">
        {topIcons.map(({ id, icon: Icon, label, href }) => {
          const isActive = activeId === id;

          return (
            <div key={id} className="relative">
              {isActive && (
                <span
                  className="absolute top-1/2 h-5 w-0.5 -translate-y-1/2 rounded-r-full"
                  style={{
                    background: "var(--color-primary)",
                    boxShadow: "0 0 8px var(--color-primary)",
                    left: "-0.75rem",
                  }}
                />
              )}

              <button
                onClick={() => handleNav(href, id)}
                onMouseEnter={() => setTooltip(label)}
                onMouseLeave={() => setTooltip(null)}
                className="group relative flex h-10 w-10 items-center justify-center rounded-sm transition-all duration-200"
                style={{
                  color: isActive
                    ? "var(--color-foreground)"
                    : "var(--color-foreground-subtle)",
                }}
                aria-label={label}
              >
                <Icon
                  size={20}
                  strokeWidth={isActive ? 2 : 1.5}
                  className="transition-all duration-200 group-hover:scale-110"
                  style={{
                    color: isActive ? "var(--color-primary)" : undefined,
                    filter: isActive
                      ? "drop-shadow(0 0 6px var(--color-primary))"
                      : undefined,
                  }}
                />
              </button>

              {tooltip === label && (
                <div
                  className="pointer-events-none absolute left-[calc(100%+0.75rem)] top-1/2 z-50 -translate-y-1/2 whitespace-nowrap rounded px-2 py-1 text-xs font-medium"
                  style={{
                    background: "var(--color-surface-high)",
                    color: "var(--color-foreground)",
                    border: "1px solid var(--color-outline)",
                    fontFamily: "var(--font-body)",
                    letterSpacing: "0.02em",
                  }}
                >
                  {label}

                  <span
                    className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent"
                    style={{
                      borderRightColor: "var(--color-surface-high)",
                    }}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Bottom icons */}
      <div className="relative flex flex-col items-center gap-1 pb-3">
        {bottomIcons.map(({ id, icon: Icon, label, href }) => {
          const isActive = activeId === id;

          return (
            <div key={id} className="relative">
              {isActive && (
                <span
                  className="absolute top-1/2 h-5 w-0.5 -translate-y-1/2 rounded-r-full"
                  style={{
                    background: "var(--color-primary)",
                    boxShadow: "0 0 8px var(--color-primary)",
                    left: "-0.75rem",
                  }}
                />
              )}

              <button
                onClick={() => handleNav(href, id)}
                onMouseEnter={() => setTooltip(label)}
                onMouseLeave={() => setTooltip(null)}
                className="group relative flex h-10 w-10 items-center justify-center rounded-sm transition-all duration-200"
                aria-label={label}
              >
                <Icon
                  size={20}
                  strokeWidth={isActive ? 2 : 1.5}
                  className="transition-all duration-200 group-hover:scale-110"
                  style={{
                    color: isActive
                      ? "var(--color-primary)"
                      : "var(--color-foreground-subtle)",
                    filter: isActive
                      ? "drop-shadow(0 0 6px var(--color-primary))"
                      : undefined,
                  }}
                />
              </button>

              {tooltip === label && (
                <div
                  className="pointer-events-none absolute left-[calc(100%+0.75rem)] top-1/2 z-50 -translate-y-1/2 whitespace-nowrap rounded px-2 py-1 text-xs font-medium"
                  style={{
                    background: "var(--color-surface-high)",
                    color: "var(--color-foreground)",
                    border: "1px solid var(--color-outline)",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {label}

                  <span
                    className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent"
                    style={{
                      borderRightColor: "var(--color-surface-high)",
                    }}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </aside>
  );
}
