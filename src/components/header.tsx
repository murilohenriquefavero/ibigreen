"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Lockup } from "./lockup";
import { contato } from "@/lib/contato";

const nav = [
  { label: "Metodologia", href: "/metodologia" },
  { label: "Projetos", href: "/projetos" },
  { label: "Originação", href: "/originacao" },
  { label: "Para Compradores", href: "/para-compradores" },
  { label: "Sobre", href: "/sobre" },
  { label: "Cartas", href: "/cartas" },
  { label: "Contato", href: "/contato" },
];

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const dark = isHome && !scrolled;

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300"
      style={{
        background: dark ? "transparent" : "var(--ibi-cream)",
        color: dark ? "var(--ibi-cream)" : "var(--ibi-green)",
        borderBottom: scrolled ? "1px solid var(--ibi-rule)" : "1px solid transparent",
      }}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14 py-4 flex items-center justify-between gap-6">
        <Link href="/" className="flex items-center" aria-label="IBI Green · home">
          <Lockup size={20} tone={dark ? "cream" : "tinta"} />
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {nav.map((item) => {
            const active = pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className="transition-opacity hover:opacity-100"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 10.5,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  opacity: active ? 1 : 0.7,
                  color: "currentColor",
                  borderBottom: active ? `1px solid ${dark ? "var(--ibi-copper)" : "var(--ibi-copper)"}` : "1px solid transparent",
                  paddingBottom: 4,
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <a
          href={contato.emailDossie.href}
          className="hidden md:inline-flex items-center"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 10.5,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            padding: "10px 16px",
            border: `1px solid ${dark ? "var(--ibi-copper)" : "var(--ibi-copper)"}`,
            color: dark ? "var(--ibi-copper)" : "var(--ibi-copper)",
            background: "transparent",
          }}
        >
          Solicitar dossiê →
        </a>

        {/* Mobile burger */}
        <button
          className="lg:hidden inline-flex items-center justify-center w-10 h-10"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menu"
          style={{ color: "currentColor" }}
        >
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5">
            {open ? (
              <path d="M6 6 L18 18 M18 6 L6 18" strokeLinecap="round" />
            ) : (
              <path d="M3 6 H21 M3 12 H21 M3 18 H21" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="lg:hidden border-t"
          style={{
            background: "var(--ibi-cream)",
            color: "var(--ibi-green)",
            borderTopColor: "var(--ibi-rule)",
          }}
        >
          <div className="max-w-[1440px] mx-auto px-6 py-6 flex flex-col gap-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-2"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                }}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={contato.emailDossie.href}
              className="mt-2 py-3 px-5 inline-flex items-center justify-center"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                border: "1px solid var(--ibi-copper)",
                color: "var(--ibi-copper)",
                alignSelf: "flex-start",
              }}
            >
              Solicitar dossiê →
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
