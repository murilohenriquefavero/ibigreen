import { CSSProperties } from "react";
import { Vesica } from "./vesica";

type Tone = "tinta" | "cream";

interface LockupProps {
  size?: number;        // font-size base do wordmark
  tone?: Tone;          // tinta (símbolo verde + texto verde) ou cream (símbolo cream + texto cream)
  className?: string;
  style?: CSSProperties;
}

export function Lockup({ size = 28, tone = "tinta", className = "", style }: LockupProps) {
  const wordColor = tone === "tinta" ? "var(--ibi-green)" : "var(--ibi-cream)";
  const symbolTone: "filled" | "inverse" = tone === "tinta" ? "filled" : "inverse";
  const symbolColor = tone === "tinta" ? "var(--ibi-green)" : undefined;

  // peso visual 1:~1.2 — símbolo um pouco maior que altura do wordmark
  const symHeight = size * 1.55;

  return (
    <div
      className={`inline-flex items-center ${className}`}
      style={{
        gap: `${size * 0.42}px`,
        color: wordColor,
        ...style,
      }}
    >
      <Vesica
        variant={symbolTone}
        size={symHeight * 0.64}
        style={{ height: `${symHeight}px`, width: `${symHeight * 0.64}px`, color: symbolColor as string }}
      />
      <span
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: `${size}px`,
          lineHeight: 0.85,
          letterSpacing: "-0.015em",
          fontVariationSettings: '"opsz" 144, "SOFT" 0',
          whiteSpace: "nowrap",
        }}
      >
        <b style={{ fontWeight: 600 }}>Ibi</b>
        <i style={{ fontStyle: "normal", fontWeight: 300, marginLeft: `${size * 0.22}px` }}>Green</i>
      </span>
    </div>
  );
}
