import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Eyebrow, H1, H2, H3, Lede, Body, Mono, Rule } from "@/components/ui";
import { cartas } from "@/lib/cartas";

export default function CartasPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: 96 }}>
        {/* HERO */}
        <section style={{ background: "var(--ibi-cream)" }}>
          <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14 pt-16 lg:pt-24 pb-12">
            <div className="flex items-center gap-5 pb-12" style={{ borderBottom: "1px solid var(--ibi-rule)" }}>
              <span className="tick" />
              <Mono>Cartas · notas técnicas · documentos</Mono>
              <div className="flex-1 h-px" style={{ background: "var(--ibi-rule)" }} />
              <Mono dim>08 · 10</Mono>
            </div>

            <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 pt-16 lg:pt-24 items-end">
              <div className="lg:col-span-8">
                <Eyebrow copper>Sem blog · sem notícias · sem timeline</Eyebrow>
                <H1 className="mt-5">Cartas.</H1>
              </div>
              <div className="lg:col-span-4">
                <Lede>
                  Documentos curtos publicados quando há algo a registrar. Manifestos, notas técnicas e cartas operacionais.
                </Lede>
              </div>
            </div>
          </div>
        </section>

        {/* LISTA */}
        <section style={{ background: "var(--ibi-cream)" }}>
          <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14 pb-24 lg:pb-32">
            <div className="border-t" style={{ borderColor: "var(--ibi-green)" }}>
              {cartas.map((c, i) => (
                <Link
                  key={c.slug}
                  href={`/cartas/${c.slug}`}
                  className="grid lg:grid-cols-12 gap-6 py-10 lg:py-14 hover:bg-[var(--ibi-cream-dim)]/40 transition-colors"
                  style={{ borderBottom: "1px solid var(--ibi-rule)" }}
                >
                  <div className="lg:col-span-1"><Mono copper>{String(i + 1).padStart(2, "0")}</Mono></div>
                  <div className="lg:col-span-2">
                    <Mono dim>{c.data}</Mono>
                    <Mono dim className="block mt-2">{c.subtitulo}</Mono>
                  </div>
                  <div className="lg:col-span-6">
                    <H3>{c.titulo}</H3>
                    <Body dim className="mt-4">{c.resumo}</Body>
                  </div>
                  <div className="lg:col-span-3 flex flex-col gap-3 lg:items-end">
                    <Mono>{c.autor}</Mono>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--ibi-copper)", borderBottom: "1px solid var(--ibi-copper)", paddingBottom: 4 }}>
                      Ler →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
