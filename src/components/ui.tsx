import { ReactNode, CSSProperties } from "react";

export function Eyebrow({ children, copper, cream, className = "" }: { children: ReactNode; copper?: boolean; cream?: boolean; className?: string }) {
  return (
    <span
      className={className}
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: 11,
        letterSpacing: "0.22em",
        textTransform: "uppercase",
        color: copper ? "var(--ibi-copper)" : cream ? "rgba(241, 236, 223, 0.7)" : "var(--ibi-ink-70)",
        display: "inline-block",
      }}
    >
      {children}
    </span>
  );
}

export function H1({ children, cream, className = "" }: { children: ReactNode; cream?: boolean; className?: string }) {
  return (
    <h1
      className={className}
      style={{
        fontFamily: "var(--font-serif)",
        fontSize: "clamp(48px, 6vw, 96px)",
        fontWeight: 400,
        lineHeight: 0.96,
        letterSpacing: "-0.022em",
        fontVariationSettings: '"opsz" 144, "SOFT" 0',
        color: cream ? "var(--ibi-cream)" : "var(--ibi-green)",
      }}
    >
      {children}
    </h1>
  );
}

export function H2({ children, cream, italic, className = "" }: { children: ReactNode; cream?: boolean; italic?: boolean; className?: string }) {
  return (
    <h2
      className={className}
      style={{
        fontFamily: "var(--font-serif)",
        fontSize: "clamp(36px, 4vw, 56px)",
        fontWeight: 400,
        fontStyle: italic ? "italic" : "normal",
        lineHeight: 1.04,
        letterSpacing: "-0.015em",
        fontVariationSettings: '"opsz" 96',
        color: cream ? "var(--ibi-cream)" : "var(--ibi-green)",
      }}
    >
      {children}
    </h2>
  );
}

export function H3({ children, cream, className = "" }: { children: ReactNode; cream?: boolean; className?: string }) {
  return (
    <h3
      className={className}
      style={{
        fontFamily: "var(--font-serif)",
        fontSize: "clamp(24px, 2.4vw, 36px)",
        fontWeight: 400,
        lineHeight: 1.1,
        letterSpacing: "-0.01em",
        color: cream ? "var(--ibi-cream)" : "var(--ibi-green)",
      }}
    >
      {children}
    </h3>
  );
}

export function Lede({ children, cream, className = "" }: { children: ReactNode; cream?: boolean; className?: string }) {
  return (
    <p
      className={className}
      style={{
        fontFamily: "var(--font-serif)",
        fontStyle: "italic",
        fontWeight: 300,
        fontSize: "clamp(18px, 1.7vw, 22px)",
        lineHeight: 1.5,
        letterSpacing: "-0.003em",
        color: cream ? "var(--ibi-cream)" : "var(--ibi-green)",
        opacity: cream ? 0.85 : 0.85,
        maxWidth: "44ch",
      }}
    >
      {children}
    </p>
  );
}

export function Body({ children, cream, dim, className = "" }: { children: ReactNode; cream?: boolean; dim?: boolean; className?: string }) {
  return (
    <p
      className={className}
      style={{
        fontFamily: "var(--font-sans)",
        fontSize: 17,
        lineHeight: 1.6,
        color: cream ? "var(--ibi-cream)" : "var(--ibi-ink)",
        opacity: dim ? 0.7 : 1,
        maxWidth: "60ch",
      }}
    >
      {children}
    </p>
  );
}

export function Mono({ children, copper, cream, dim, className = "", style }: { children: ReactNode; copper?: boolean; cream?: boolean; dim?: boolean; className?: string; style?: CSSProperties }) {
  return (
    <span
      className={className}
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: 11,
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        color: copper ? "var(--ibi-copper)" : cream ? "var(--ibi-cream)" : "var(--ibi-ink)",
        opacity: dim ? 0.55 : 1,
        ...style,
      }}
    >
      {children}
    </span>
  );
}

export function Rule({ cream, copper, className = "" }: { cream?: boolean; copper?: boolean; className?: string }) {
  return (
    <div
      className={className}
      style={{
        height: copper ? 2 : 1,
        background: copper ? "var(--ibi-copper)" : cream ? "var(--ibi-cream-rule)" : "var(--ibi-rule)",
        width: "100%",
      }}
    />
  );
}

export function CTAButton({
  href,
  variant = "copper",
  external,
  children,
  className = "",
}: {
  href: string;
  variant?: "copper" | "ghost-cream" | "ghost-tinta";
  external?: boolean;
  children: ReactNode;
  className?: string;
}) {
  const base: CSSProperties = {
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    padding: "14px 22px",
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    whiteSpace: "nowrap",
  };

  const styles: CSSProperties =
    variant === "copper"
      ? { ...base, background: "var(--ibi-copper)", color: "var(--ibi-green-deep)", border: "1px solid var(--ibi-copper)" }
      : variant === "ghost-cream"
      ? { ...base, background: "transparent", color: "var(--ibi-cream)", border: "1px solid var(--ibi-cream-rule)" }
      : { ...base, background: "transparent", color: "var(--ibi-green)", border: "1px solid var(--ibi-rule)" };

  return (
    <a href={href} className={`${className} transition-opacity hover:opacity-85`} style={styles} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>
      {children}
    </a>
  );
}

export function PageChrome({ children, label, total = 16, current = 1 }: { children?: ReactNode; label: string; total?: number; current?: number }) {
  return (
    <div className="hidden md:flex items-center gap-5 pt-6 pb-6 border-b" style={{ borderColor: "var(--ibi-rule)" }}>
      <span className="tick" />
      <Mono>{label}</Mono>
      <div className="flex-1 h-px" style={{ background: "var(--ibi-rule)" }} />
      <Mono dim>
        {String(current).padStart(2, "0")} / {String(total).padStart(2, "0")}
      </Mono>
      {children}
    </div>
  );
}
