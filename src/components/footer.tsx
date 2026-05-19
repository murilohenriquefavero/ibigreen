import Link from "next/link";
import { Lockup } from "./lockup";
import { contato } from "@/lib/contato";

const cols = [
  {
    label: "Operação",
    items: [
      { label: "Metodologia", href: "/metodologia" },
      { label: "Originação", href: "/originacao" },
      { label: "Projetos", href: "/projetos" },
    ],
  },
  {
    label: "Para compradores",
    items: [
      { label: "Dossiê institucional", href: "/para-compradores" },
      { label: "Cartas & notas", href: "/cartas" },
      { label: "Padrões mapeados", href: "/metodologia#padroes" },
    ],
  },
  {
    label: "Organização",
    items: [
      { label: "Sobre a IBI Green", href: "/sobre" },
      { label: "Governança", href: "/sobre#governanca" },
      { label: "Contato", href: "/contato" },
    ],
  },
];

export function Footer() {
  return (
    <footer style={{ background: "var(--ibi-green-deep)", color: "var(--ibi-cream)" }}>
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14 py-16 lg:py-24">
        {/* TOP — lockup + tagline */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 pb-12 border-b" style={{ borderColor: "var(--ibi-cream-rule)" }}>
          <div>
            <Lockup size={28} tone="cream" />
            <p className="mt-5 max-w-[42ch]" style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: 18, lineHeight: 1.4, opacity: 0.85 }}>
              Carbono brasileiro com origem — grau institucional, territorial, rastreável.
            </p>
          </div>
          <div className="flex flex-col items-start lg:items-end gap-3">
            <a
              href={contato.emailDossie.href}
              className="inline-flex items-center"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                padding: "12px 18px",
                background: "var(--ibi-copper)",
                color: "var(--ibi-green-deep)",
              }}
            >
              Solicitar dossiê institucional →
            </a>
            <a
              href={contato.whatsapp.href}
              target="_blank"
              rel="noreferrer"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 10.5,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                opacity: 0.75,
              }}
            >
              WhatsApp · {contato.whatsapp.display}
            </a>
          </div>
        </div>

        {/* MID — columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-12 py-12">
          {cols.map((col) => (
            <div key={col.label}>
              <div className="eyebrow eyebrow--cream mb-4" style={{ color: "var(--ibi-copper)", opacity: 1 }}>{col.label}</div>
              <ul className="space-y-2.5">
                {col.items.map((it) => (
                  <li key={it.href}>
                    <Link href={it.href} className="hover:underline" style={{ fontFamily: "var(--font-serif)", fontSize: 16, lineHeight: 1.3, opacity: 0.9 }}>
                      {it.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <div className="eyebrow eyebrow--cream mb-4" style={{ color: "var(--ibi-copper)", opacity: 1 }}>Sede</div>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.04em", lineHeight: 1.8, opacity: 0.85 }}>
              {contato.sede.endereco}<br />
              {contato.sede.cidade} · {contato.sede.uf} · {contato.sede.pais}<br />
              CEP {contato.sede.cep}
            </p>
            <p className="mt-4" style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.04em", lineHeight: 1.7, opacity: 0.85 }}>
              <a href={contato.email.href} className="hover:underline">{contato.email.address}</a><br />
              <a href={contato.whatsapp.href} target="_blank" rel="noreferrer" className="hover:underline">{contato.whatsapp.display}</a>
            </p>
          </div>
        </div>

        {/* BOTTOM — legal */}
        <div className="pt-8 border-t flex flex-col md:flex-row md:items-center md:justify-between gap-4" style={{ borderColor: "var(--ibi-cream-rule)" }}>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", opacity: 0.55 }}>
            {contato.juridico.razaoSocial} · {contato.juridico.cnpj}
          </p>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", opacity: 0.55 }}>
            © 2026 IBI Green · Manual de Marca vol. 01
          </p>
        </div>
      </div>
    </footer>
  );
}
