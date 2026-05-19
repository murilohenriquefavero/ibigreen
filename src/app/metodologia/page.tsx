import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Eyebrow, H1, H2, H3, Lede, Body, Mono, CTAButton } from "@/components/ui";
import { padroesExternos } from "@/lib/metricas";
import { contato } from "@/lib/contato";
import { TreatedImage } from "@/components/treated-image";
import { imagens } from "@/lib/imagens";

const etapas = [
  { n: "01", t: "Levantamento territorial", desc: "Identificamos o hectare candidato, verificamos a titularidade jurídica e a sobreposição com áreas protegidas ou comunitárias. Sem clareza dominial, não há originação.", saida: "Relatório de elegibilidade jurídica · CAR · SNCI" },
  { n: "02", t: "CLPI comunitário", desc: "Antes de qualquer baseline técnico, contratamos a comunidade hospedeira sob protocolo FPIC (Free, Prior and Informed Consent). A repartição de benefícios é estabelecida nesta etapa.", saida: "Contrato comunitário assinado · ata de assembleia" },
  { n: "03", t: "Baseline de carbono", desc: "Quantificamos o estoque inicial sob metodologia VCS / CCB, com remote sensing, parcelas amostrais e validação de campo.", saida: "Documento de baseline · imagens de satélite · parcelas" },
  { n: "04", t: "Verificação independente", desc: "Auditoria externa por organismo acreditado pelo VCS e/ou ICVCM. Sem auditoria, sem emissão.", saida: "Relatório de verificação · selo do auditor" },
  { n: "05", t: "Registro público", desc: "A tonelada entra no registro com ID público, coordenada, metodologia e contrato comunitário visível. Tudo datado, timestamped.", saida: "ID público no registro · dossiê institucional" },
  { n: "06", t: "Custódia continuada", desc: "Monitoramento de re-verificação a cada cinco anos, ou antes em caso de evento adverso. A custódia não termina na venda.", saida: "Relatórios anuais · re-verificação a cada 5 anos" },
];

export default function MetodologiaPage() {
  return (
    <>
      <Header />
      <main>
        {/* HERO CINEMATOGRÁFICO */}
        <section className="relative" style={{ paddingTop: 96, color: "var(--ibi-cream)" }}>
          <TreatedImage src={imagens.metodologia} alt="Paisagem florestal" intensity="strong" priority className="absolute inset-0" />
          <div className="relative max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14 pt-16 lg:pt-24 pb-20 min-h-[580px] flex flex-col justify-end">
            <div className="flex items-center gap-5 pb-12" style={{ borderBottom: "1px solid var(--ibi-cream-rule)" }}>
              <span className="tick" />
              <Mono cream>Metodologia · operação</Mono>
              <div className="flex-1 h-px" style={{ background: "var(--ibi-cream-rule)" }} />
              <Mono cream dim>02 · 10</Mono>
            </div>

            <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 pt-16 items-end">
              <div className="lg:col-span-8">
                <Eyebrow copper>Construção & significado</Eyebrow>
                <H1 cream className="mt-5">Seis etapas,<br />sem teatro.</H1>
              </div>
              <div className="lg:col-span-4">
                <Lede cream>
                  Como uma tonelada de carbono territorial brasileiro sai do hectare e chega ao livro-razão do comprador europeu — passo a passo, com saída documental em cada etapa.
                </Lede>
              </div>
            </div>
          </div>
        </section>

        {/* 6 ETAPAS */}
        <section style={{ background: "var(--ibi-cream)" }}>
          <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14 pb-24 lg:pb-32">
            <div className="border-t" style={{ borderColor: "var(--ibi-green)" }}>
              {etapas.map((e) => (
                <div key={e.n} className="grid lg:grid-cols-12 gap-6 lg:gap-10 py-10 lg:py-14" style={{ borderBottom: "1px solid var(--ibi-rule)" }}>
                  <div className="lg:col-span-1"><Mono copper>{e.n}</Mono></div>
                  <div className="lg:col-span-4"><H3>{e.t}.</H3></div>
                  <div className="lg:col-span-4"><Body>{e.desc}</Body></div>
                  <div className="lg:col-span-3">
                    <Mono dim className="block mb-2">Saída documental</Mono>
                    <p style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.04em", lineHeight: 1.6 }}>{e.saida}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PADRÕES MAPEADOS */}
        <section id="padroes" style={{ background: "var(--ibi-cream-dim)" }}>
          <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14 py-24 lg:py-32">
            <div className="grid lg:grid-cols-12 gap-10 items-end mb-16">
              <div className="lg:col-span-7">
                <Eyebrow copper>Mapeamento contra padrões externos</Eyebrow>
                <H1 className="mt-5">Padrões<br />reconhecidos.</H1>
              </div>
              <div className="lg:col-span-5">
                <Lede>
                  Cada decisão metodológica da IBI Green é mapeada contra um padrão externo já reconhecido pelo comprador europeu. Não inventamos novas siglas.
                </Lede>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-px" style={{ background: "var(--ibi-rule)" }}>
              {padroesExternos.map((p) => (
                <div key={p.sigla} className="p-8 lg:p-10" style={{ background: "var(--ibi-cream-dim)" }}>
                  <div className="flex items-baseline justify-between mb-3">
                    <H3>{p.sigla}</H3>
                    <Mono dim>Padrão externo</Mono>
                  </div>
                  <p className="mb-3" style={{ fontFamily: "var(--font-serif)", fontSize: 17, fontStyle: "italic", color: "var(--ibi-green)" }}>{p.nome}</p>
                  <Body dim>{p.descricao}</Body>
                </div>
              ))}
            </div>

            <p className="mt-12 max-w-[60ch]" style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: 22, lineHeight: 1.5, color: "var(--ibi-green)" }}>
              O comprador europeu já confia nesses padrões. Cabe a nós, originadores, mapear nossa operação contra eles — e não inventar uma nova régua para nossa própria vantagem.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: "var(--ibi-green)", color: "var(--ibi-cream)" }}>
          <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14 py-20 lg:py-28 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
            <div>
              <Eyebrow copper>Próximo passo</Eyebrow>
              <H2 cream italic className="mt-4">Receber o documento metodológico completo.</H2>
            </div>
            <div className="flex flex-wrap gap-3">
              <CTAButton href={contato.emailDossie.href} variant="copper">Solicitar metodologia PDF →</CTAButton>
              <CTAButton href="/projetos" variant="ghost-cream">Ver projetos →</CTAButton>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
