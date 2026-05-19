import { CSSProperties } from "react";

interface VesicaProps {
  /** Cor do preenchimento da folha (currentColor por padrão) */
  variant?: "filled" | "outline" | "inverse";
  /** Para "inverse": folha cream com nervuras tinta (use em fundo verde-tinta) */
  size?: number | string;
  className?: string;
  style?: CSSProperties;
  ariaLabel?: string;
}

const FILL_CREAM = "#F1ECDF";
const FILL_TINTA = "#0A1F18";
const FILL_COPPER = "#B08F5C";

export function Vesica({ variant = "filled", size, className, style, ariaLabel }: VesicaProps) {
  const sizeStyle: CSSProperties = size != null
    ? { width: typeof size === "number" ? `${size}px` : size, height: "auto" }
    : {};

  if (variant === "outline") {
    return (
      <svg
        viewBox="0 0 100 100"
        fill="none"
        className={className}
        style={{ ...sizeStyle, ...style }}
        role={ariaLabel ? "img" : undefined}
        aria-label={ariaLabel}
      >
        <path d="M 50 15.36 A 40 40 0 0 1 50 84.64 A 40 40 0 0 1 50 15.36 Z" stroke="currentColor" strokeWidth="1.4" fill="none" />
        <line x1="50" y1="17" x2="50" y2="84" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="50" y1="32" x2="32" y2="27" stroke="currentColor" strokeWidth="1.0" strokeLinecap="round" />
        <line x1="50" y1="32" x2="68" y2="27" stroke="currentColor" strokeWidth="1.0" strokeLinecap="round" />
        <line x1="50" y1="50" x2="24" y2="46" stroke="currentColor" strokeWidth="1.0" strokeLinecap="round" />
        <line x1="50" y1="50" x2="76" y2="46" stroke="currentColor" strokeWidth="1.0" strokeLinecap="round" />
        <line x1="50" y1="68" x2="32" y2="64" stroke="currentColor" strokeWidth="1.0" strokeLinecap="round" />
        <line x1="50" y1="68" x2="68" y2="64" stroke="currentColor" strokeWidth="1.0" strokeLinecap="round" />
        <circle cx="50" cy="15.36" r="2.8" fill={FILL_COPPER} />
      </svg>
    );
  }

  if (variant === "inverse") {
    return (
      <svg
        viewBox="0 0 100 100"
        fill="none"
        className={className}
        style={{ ...sizeStyle, ...style }}
        role={ariaLabel ? "img" : undefined}
        aria-label={ariaLabel}
      >
        <path d="M 50 15.36 A 40 40 0 0 1 50 84.64 A 40 40 0 0 1 50 15.36 Z" fill={FILL_CREAM} />
        <line x1="50" y1="17" x2="50" y2="84" stroke={FILL_TINTA} strokeWidth="1.2" strokeLinecap="round" />
        <line x1="50" y1="32" x2="32" y2="27" stroke={FILL_TINTA} strokeWidth="1.0" strokeLinecap="round" />
        <line x1="50" y1="32" x2="68" y2="27" stroke={FILL_TINTA} strokeWidth="1.0" strokeLinecap="round" />
        <line x1="50" y1="50" x2="24" y2="46" stroke={FILL_TINTA} strokeWidth="1.0" strokeLinecap="round" />
        <line x1="50" y1="50" x2="76" y2="46" stroke={FILL_TINTA} strokeWidth="1.0" strokeLinecap="round" />
        <line x1="50" y1="68" x2="32" y2="64" stroke={FILL_TINTA} strokeWidth="1.0" strokeLinecap="round" />
        <line x1="50" y1="68" x2="68" y2="64" stroke={FILL_TINTA} strokeWidth="1.0" strokeLinecap="round" />
        <circle cx="50" cy="15.36" r="2.8" fill={FILL_COPPER} />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      className={className}
      style={{ ...sizeStyle, ...style }}
      role={ariaLabel ? "img" : undefined}
      aria-label={ariaLabel}
    >
      <path d="M 50 15.36 A 40 40 0 0 1 50 84.64 A 40 40 0 0 1 50 15.36 Z" fill="currentColor" />
      <line x1="50" y1="17" x2="50" y2="84" stroke={FILL_CREAM} strokeWidth="1.2" strokeLinecap="round" />
      <line x1="50" y1="32" x2="32" y2="27" stroke={FILL_CREAM} strokeWidth="1.0" strokeLinecap="round" />
      <line x1="50" y1="32" x2="68" y2="27" stroke={FILL_CREAM} strokeWidth="1.0" strokeLinecap="round" />
      <line x1="50" y1="50" x2="24" y2="46" stroke={FILL_CREAM} strokeWidth="1.0" strokeLinecap="round" />
      <line x1="50" y1="50" x2="76" y2="46" stroke={FILL_CREAM} strokeWidth="1.0" strokeLinecap="round" />
      <line x1="50" y1="68" x2="32" y2="64" stroke={FILL_CREAM} strokeWidth="1.0" strokeLinecap="round" />
      <line x1="50" y1="68" x2="68" y2="64" stroke={FILL_CREAM} strokeWidth="1.0" strokeLinecap="round" />
      <circle cx="50" cy="15.36" r="2.8" fill={FILL_COPPER} />
    </svg>
  );
}
