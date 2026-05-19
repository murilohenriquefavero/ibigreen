import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Vesica } from "@/components/vesica";
import { Eyebrow, H1, H2, H3, Lede, Body, Mono, Rule, CTAButton } from "@/components/ui";
import { contato } from "@/lib/contato";
import { TreatedImage } from "@/components/treated-image";
import { imagens } from "@/lib/imagens";

const fluxo = [
  { fase: "Hectare", tempo: "Mês 0", desc: "O ato começa no hectare candidato. Verificamos titularidade, sobreposição e elegibilidade jurídica antes de qualquer outra coisa." },
  { fase: "Comunidade", tempo: "Mês 1–3", desc: "Contratação da comunidade hospedeira sob CLPI (FPIC). A repartição de benefícios é desenhada na mesa com a comunidade — não imposta." },
  { fase: "Baseline", tempo: "Mês 4–6", desc: "Quantificação do estoque inicial sob VCS/CCB. Remote sensing, parcelas amostrais, validação de campo. O carbono fica documentado em mapa." },
  { fase: "Verificação", tempo: "Mês 7–9", desc: "Auditoria externa por organismo acreditado. É a etapa em que a tonelada passa a existir formalmente." },
  { fase: "Registro", tempo: "Mês 10", desc: "Entrada no registro público com ID, coordenada e dossiê completo. A partir daqui, a tonelada é um ativo institucional." },
  { fase: "Custódia", tempo: "Anos 1–30", desc: "Monitoramento contínuo, re-verificação a cada cinco anos. A custódia não termina na venda. Acompanhamos o ativo pela vida útil do contrato." },
];

export default function OriginacaoPage() {
  return (
    <>
      <Header />
      <main>
        {/* HERO CINEMATOGRÁFICO */}
        <section className="relative" style={{ paddingTop: 96, color: "var(--ibi-cream)" }}>
          <TreatedImage src={imagens.originacao} alt="Hectare florestal" intensity="strong" priority className="absolute inset-0" />
          <div className="relative max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14 pt-16 lg:pt-24 pb-20 min-h-[640px] flex flex-col justify-end">
            <div className="flex items-center gap-5 pb-12" style={{ borderBottom: "1px solid var(--ibi-cream-rule)" }}>
              <span className="tick" />
              <Mono cream>O que é uma originadora</Mono>
              <div className="flex-1 h-px" style={{ background: "var(--ibi-cream-rule)" }} />
              <Mono cream dim>05 · 10</Mono>
            </div>

            <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 pt-16">
              <div className="lg:col-span-8">
                <Eyebrow copper>Do hectare ao livro-razão</Eyebrow>
                <H1 cream className="mt-5">Originação.</H1>
                <Lede cream className="mt-8">
                  Originar carbono é o ato de trazer uma tonelada de CO₂ equivalente à existência como ativo registrado — partindo de um hectare específico, com uma comunidade hospedeira, sob um padrão metodológico, com uma cadeia de custódia auditável.
                </Lede>
                <p className="mt-6 max-w-[58ch]" style={{ fontFamily: "var(--font-sans)", fontSize: 17, lineHeight: 1.6, color: "var(--ibi-cream)", opacity: 0.9 }}>
                  É o oposto de gerar carbono em volume sem rastreabilidade. É o oposto de revender toneladas de terceiros. Originar é fazer o ativo nascer com endereço — e segui-lo pela vida útil do contrato.
                </p>
              </div>
              <div className="lg:col-span-4 hidden lg:flex items-center justify-center">
                <div style={{ width: 200, height: 300, background: "var(--ibi-cream)", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
                  <Vesica variant="filled" style={{ color: "var(--ibi-green)", width: "100%", height: "100%" }} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FLUXO LINEAR — Hectare → Custódia */}
        <section style={{ background: "var(--ibi-green-deep)", color: "var(--ibi-cream)" }} className="relative">
          <div className="pattern-bg pattern-bg--sparse absolute inset-0" />
          <div className="relative max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14 py-24 lg:py-32">
            <div className="grid lg:grid-cols-12 gap-10 items-end mb-16">
              <div className="lg:col-span-6">
                <Eyebrow copper>Linha do tempo da originação</Eyebrow>
                <H1 cream className="mt-5">Trinta anos<br />de custódia.</H1>
              </div>
              <div className="lg:col-span-6">
                <Lede cream>
                  Cada projeto da IBI Green é um contrato de décadas. Os primeiros 10 meses montam o ativo. Os 30 anos seguintes mantêm-no de pé.
                </Lede>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: "var(--ibi-cream-rule)" }}>
              {fluxo.map((f, i) => (
                <div key={f.fase} className="p-8 lg:p-10" style={{ background: "var(--ibi-green-deep)" }}>
                  <div className="flex items-center justify-between mb-5">
                    <Mono copper>{String(i + 1).padStart(2, "0")}</Mono>
                    <Mono cream dim>{f.tempo}</Mono>
                  </div>
                  <H3 cream>{f.fase}.</H3>
                  <p className="mt-4" style={{ fontFamily: "var(--font-sans)", fontSize: 15, lineHeight: 1.55, color: "var(--ibi-cream)", opacity: 0.78 }}>
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* O QUE NÃO SOMOS */}
        <section style={{ background: "var(--ibi-cream-dim)" }}>
          <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14 py-24 lg:py-32">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
              <div className="lg:col-span-4">
                <Eyebrow copper>Distinção</Eyebrow>
                <H1 className="mt-5">O que<br />não somos.</H1>
              </div>
              <div className="lg:col-span-7 lg:col-start-6 space-y-8">
                {[
                  { t: "Não somos uma corretora.", d: "Não revendemos toneladas de terceiros. Cada crédito que vendemos foi originado por nós, com nossa equipe técnica, no nosso território." },
                  { t: "Não somos uma ONG.", d: "Operamos com lógica institucional, contratos comerciais e métricas auditáveis. Nossa missão é resultado climático verificável, não militância." },
                  { t: "Não somos uma plataforma de marketplace.", d: "Não conectamos qualquer projeto com qualquer comprador. Selecionamos o hectare, contratamos a comunidade, montamos o ativo." },
                  { t: "Não somos uma greenwasher.", d: "Tudo o que originamos é mapeado contra padrão externo, verificado por terceiros e publicado em registro datado. Sem dossiê público, sem venda." },
                ].map((b) => (
                  <div key={b.t}>
                    <H3>{b.t}</H3>
                    <Body className="mt-3">{b.d}</Body>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: "var(--ibi-green)", color: "var(--ibi-cream)" }}>
          <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14 py-20 lg:py-28 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
            <div>
              <Eyebrow copper>Originação como serviço</Eyebrow>
              <H2 cream italic className="mt-4">Conhecer a metodologia em detalhe.</H2>
            </div>
            <div className="flex flex-wrap gap-3">
              <CTAButton href="/metodologia" variant="copper">Ver metodologia →</CTAButton>
              <CTAButton href="/projetos" variant="ghost-cream">Ver os 12 projetos →</CTAButton>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
