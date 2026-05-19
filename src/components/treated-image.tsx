import Image from "next/image";
import { CSSProperties, ReactNode } from "react";

/**
 * Imagem tratada com overlay verde-tinta + grain — mantém a identidade do site
 * mesmo com fotos externas. Aceita children para sobrepor texto/CTAs.
 */
export function TreatedImage({
  src,
  alt = "",
  intensity = "medium",
  vignette = true,
  className = "",
  style,
  rounded = false,
  fill = true,
  width,
  height,
  priority,
  children,
}: {
  src: string;
  alt?: string;
  intensity?: "soft" | "medium" | "strong" | "deep";
  vignette?: boolean;
  className?: string;
  style?: CSSProperties;
  rounded?: boolean;
  fill?: boolean;
  width?: number;
  height?: number;
  priority?: boolean;
  children?: ReactNode;
}) {
  const overlayOpacity = {
    soft: 0.35,
    medium: 0.55,
    strong: 0.7,
    deep: 0.85,
  }[intensity];

  // Detecta se className inclui "absolute" — nesse caso, NÃO força position: relative
  const isAbsolute = className.includes("absolute");
  return (
    <div
      className={`overflow-hidden ${className}`}
      style={{
        position: isAbsolute ? "absolute" : "relative",
        borderRadius: rounded ? 8 : 0,
        background: "var(--ibi-green)",
        ...style,
      }}
    >
      {fill ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1440px) 100vw, 1440px"
          style={{
            objectFit: "cover",
            filter: "saturate(0.55) contrast(1.05) brightness(0.85)",
          }}
        />
      ) : (
        <Image
          src={src}
          alt={alt}
          width={width || 1800}
          height={height || 1200}
          priority={priority}
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
            filter: "saturate(0.55) contrast(1.05) brightness(0.85)",
          }}
        />
      )}

      {/* Verde-tinta overlay — multiply pra preservar luz nos highlights */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `var(--ibi-green)`,
          mixBlendMode: "multiply",
          opacity: overlayOpacity,
        }}
      />

      {/* Tint extra com gradient pra dar leitura editorial */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: vignette
            ? `linear-gradient(180deg, rgba(10,31,24,0.10) 0%, rgba(10,31,24,0.0) 35%, rgba(10,31,24,0.55) 100%)`
            : `linear-gradient(180deg, rgba(10,31,24,0.10) 0%, rgba(10,31,24,0.0) 60%, rgba(10,31,24,0.15) 100%)`,
        }}
      />

      {/* Grain editorial sutil */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.5'/></svg>\")",
        }}
      />

      {/* Conteúdo sobreposto */}
      {children && <div className="relative z-10 h-full">{children}</div>}
    </div>
  );
}
