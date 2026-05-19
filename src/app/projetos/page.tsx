import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Eyebrow, H1, H2, H3, Lede, Body, Mono, Rule } from "@/components/ui";
import { biomasSummary, projetos } from "@/lib/projetos";

export default function ProjetosPage() {
  const totalHa = projetos.reduce((s, p) => s + p.hectares, 0);

  return (
    <>
      <Header />
      <main style={{ paddingTop: 96 }}>
        {/* HERO */}
        <section style={{ background: "var(--ibi-cream)" }}>
          <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14 pt-16 lg:pt-24 pb-12">
            <div className="flex items-center gap-5 pb-12" style={{ borderBottom: "1px solid var(--ibi-rule)" }}>
              <span className="tick" />
              <Mono>Inventário · 12 projetos · 3 biomas</Mono>
              <div className="flex-1 h-px" style={{ background: "var(--ibi-rule)" }} />
              <Mono dim>safra 2026</Mono>
            </div>

            <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 pt-16 lg:pt-24 items-end">
              <div className="lg:col-span-8">
                <Eyebrow copper>Portfólio territorial</Eyebrow>
                <H1 className="mt-5">Projetos.</H1>
              </div>
              <div className="lg:col-span-4">
                <Lede>
                  Doze projetos ativos no Mato Grosso do Sul, cobrindo Cerrado, Pantanal e Mata Atlântica de transição. Cada um com coordenada, comunidade hospedeira e dossiê público.
                </Lede>
              </div>
            </div>

            {/* Summary table */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-10">
              {[
                { v: projetos.length.toString(), l: "Projetos ativos" },
                { v: `${(totalHa / 1000).toFixed(1).replace(".", ",")}k`, l: "Hectares sob contrato" },
                { v: "3", l: "Biomas cobertos" },
                { v: "100%", l: "Cadeia de custódia documentada" },
              ].map((m, i) => (
                <div key={i}>
                  <div style={{ fontFamily: "var(--font-serif)", fontSize: 56, lineHeight: 1, letterSpacing: "-0.02em", color: "var(--ibi-green)" }}>
                    {m.v}
                  </div>
                  <Mono dim className="block mt-3">{m.l}</Mono>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LISTA POR BIOMA */}
        <section style={{ background: "var(--ibi-cream)" }}>
          <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14 pb-24 lg:pb-32">
            {biomasSummary.map((bioma) => {
              const projs = projetos.filter((p) => p.bioma === bioma.nome);
              const haBioma = projs.reduce((s, p) => s + p.hectares, 0);
              return (
                <div key={bioma.codigo} className="mt-20" id={bioma.codigo}>
                  <div className="grid lg:grid-cols-12 gap-6 items-end mb-8">
                    <div className="lg:col-span-7">
                      <Mono copper>Bioma · {bioma.codigo}</Mono>
                      <H2 className="mt-3">{bioma.nome}.</H2>
                    </div>
                    <div className="lg:col-span-5 flex gap-10 lg:justify-end">
                      <div>
                        <div style={{ fontFamily: "var(--font-serif)", fontSize: 36, lineHeight: 1, color: "var(--ibi-green)" }}>{projs.length}</div>
                        <Mono dim className="block mt-2">Projetos</Mono>
                      </div>
                      <div>
                        <div style={{ fontFamily: "var(--font-serif)", fontSize: 36, lineHeight: 1, color: "var(--ibi-green)" }}>
                          {(haBioma / 1000).toFixed(1).replace(".", ",")}<i style={{ fontStyle: "italic", fontSize: "0.5em", marginLeft: 4, color: "var(--ibi-copper)" }}>k</i>
                        </div>
                        <Mono dim className="block mt-2">Hectares</Mono>
                      </div>
                    </div>
                  </div>

                  <Rule />

                  <div className="divide-y" style={{ borderColor: "var(--ibi-rule)" }}>
                    {projs.map((p) => (
                      <Link
                        key={p.slug}
                        href={`/projetos/${p.slug}`}
                        className="grid lg:grid-cols-12 gap-6 lg:gap-8 py-8 hover:bg-[var(--ibi-cream-dim)]/40 transition-colors group"
                        style={{ borderBottom: "1px solid var(--ibi-rule)" }}
                      >
                        <div className="lg:col-span-1"><Mono copper>{p.codigo}</Mono></div>
                        <div className="lg:col-span-3">
                          <H3 className="group-hover:underline">{p.nome}.</H3>
                          <Mono dim className="block mt-2">{p.municipio}</Mono>
                        </div>
                        <div className="lg:col-span-4">
                          <p style={{ fontFamily: "var(--font-sans)", fontSize: 15, lineHeight: 1.5, color: "var(--ibi-ink-70)", maxWidth: "52ch" }}>
                            {p.resumo}
                          </p>
                        </div>
                        <div className="lg:col-span-2">
                          <div style={{ fontFamily: "var(--font-serif)", fontSize: 28, lineHeight: 1, color: "var(--ibi-green)" }}>
                            {p.hectares.toLocaleString("pt-BR")}<i style={{ fontStyle: "italic", fontSize: "0.4em", marginLeft: 4, opacity: 0.6 }}>ha</i>
                          </div>
                          <Mono dim className="block mt-2">Sob contrato</Mono>
                        </div>
                        <div className="lg:col-span-2">
                          <Mono className="block mb-1">{p.padrao}</Mono>
                          <Mono copper className="block">{p.status}</Mono>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
