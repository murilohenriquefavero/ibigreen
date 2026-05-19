import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Eyebrow, H1, H2, H3, Lede, Body, Mono, Rule, CTAButton } from "@/components/ui";
import { contato } from "@/lib/contato";
import { TreatedImage } from "@/components/treated-image";
import { imagens } from "@/lib/imagens";

const time = [
  { nome: "[Diretor de Originação]", cargo: "Originação Territorial", bio: "Vinte anos em campo, três biomas. Conduz a equipe que negocia o hectare antes de qualquer baseline técnico." },
  { nome: "[Diretora Metodológica]", cargo: "Metodologia e Auditoria", bio: "Engenharia florestal, mestrado em sequestro de carbono. Responsável pelo mapeamento contra VCS, CCB e ICVCM-CCP." },
  { nome: "[Diretor de Mercados]", cargo: "Mercados EU & Investidores", bio: "Quinze anos em mesa de operações de carbono na Europa. Traduz a linguagem técnica brasileira para a linguagem do board europeu." },
  { nome: "[Diretora Comunitária]", cargo: "Comunidades e CLPI", bio: "Antropóloga de formação. Conduz o protocolo FPIC com todas as comunidades hospedeiras antes da assinatura de qualquer contrato." },
];

const governanca = [
  { t: "Conselho de Integridade", d: "Independente da operação. Compete vetar projetos que não atendam aos quatro pilares. Reúne-se trimestralmente." },
  { t: "Auditoria externa anual", d: "Big-four contratada anualmente para auditar processos de originação, registro e custódia. Relatório público no site." },
  { t: "Comitê comunitário consultivo", d: "Representantes das comunidades hospedeiras participam de comitê consultivo. Voto na composição da repartição de benefícios." },
  { t: "Repositório público datado", d: "Cada decisão metodológica, cada coordenada, cada ID de registro fica em repositório público com timestamp. Sem revisionismo." },
];

export default function SobrePage() {
  return (
    <>
      <Header />
      <main>
        {/* HERO CINEMATOGRÁFICO */}
        <section className="relative" style={{ paddingTop: 96, color: "var(--ibi-cream)" }}>
          <TreatedImage src={imagens.sobre} alt="Território brasileiro" intensity="strong" priority className="absolute inset-0" />
          <div className="relative max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14 pt-16 lg:pt-24 pb-20 min-h-[600px] flex flex-col justify-end">
            <div className="flex items-center gap-5 pb-12" style={{ borderBottom: "1px solid var(--ibi-cream-rule)" }}>
              <span className="tick" />
              <Mono cream>Sobre · originadores · governança</Mono>
              <div className="flex-1 h-px" style={{ background: "var(--ibi-cream-rule)" }} />
              <Mono cream dim>07 · 10</Mono>
            </div>

            <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 pt-16">
              <div className="lg:col-span-7">
                <Eyebrow copper>Quem somos</Eyebrow>
                <H1 cream className="mt-5">Uma originadora,<br />não uma agência.</H1>
              </div>
              <div className="lg:col-span-5 flex flex-col gap-6">
                <Lede cream>
                  A IBI Green nasceu em 2026, em Campo Grande (MS), com a tese de que o Brasil tem o maior potencial florestal do mundo — mas falta uma originadora institucional capaz de empacotar esse potencial em ativo verificável.
                </Lede>
                <Body cream>
                  Operamos no Mato Grosso do Sul porque é o único estado brasileiro que reúne Cerrado, Pantanal e Mata Atlântica de transição. Um estado, três biomas, três cadeias de custódia distintas.
                </Body>
              </div>
            </div>
          </div>
        </section>

        {/* TIME */}
        <section style={{ background: "var(--ibi-cream-dim)" }}>
          <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14 py-24 lg:py-32">
            <div className="grid lg:grid-cols-12 gap-10 items-end mb-16">
              <div className="lg:col-span-7">
                <Eyebrow copper>Originadores</Eyebrow>
                <H1 className="mt-5">O time<br />operacional.</H1>
              </div>
              <div className="lg:col-span-5">
                <Lede>
                  Quatro diretorias, sob um conselho de integridade independente. Cada um responde por uma camada da tonelada — da terra ao mercado.
                </Lede>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-px" style={{ background: "var(--ibi-rule)" }}>
              {time.map((t, i) => (
                <div key={i} className="p-8 lg:p-10" style={{ background: "var(--ibi-cream-dim)" }}>
                  <div className="flex items-baseline justify-between mb-3">
                    <Mono copper>0{i + 1}</Mono>
                    <Mono dim>Diretoria</Mono>
                  </div>
                  <H3>{t.nome}</H3>
                  <Mono className="block mt-2">{t.cargo}</Mono>
                  <Body className="mt-5">{t.bio}</Body>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GOVERNANÇA */}
        <section id="governanca" style={{ background: "var(--ibi-green)", color: "var(--ibi-cream)" }} className="relative">
          <div className="pattern-bg pattern-bg--sparse absolute inset-0" />
          <div className="relative max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14 py-24 lg:py-32">
            <div className="grid lg:grid-cols-12 gap-10 items-end mb-16">
              <div className="lg:col-span-7">
                <Eyebrow copper>Governança</Eyebrow>
                <H1 cream className="mt-5">Quatro<br />contrapesos.</H1>
              </div>
              <div className="lg:col-span-5">
                <Lede cream>
                  A IBI Green opera sob quatro mecanismos de governança independente. Eles são caros e tornam o ciclo de originação mais lento. É o ponto.
                </Lede>
              </div>
            </div>

            <div className="space-y-px">
              {governanca.map((g, i) => (
                <div key={i} className="grid lg:grid-cols-12 gap-6 p-8 lg:p-10" style={{ background: "var(--ibi-green-deep)" }}>
                  <div className="lg:col-span-1"><Mono copper>{`0${i + 1}`}</Mono></div>
                  <div className="lg:col-span-5"><H3 cream>{g.t}.</H3></div>
                  <div className="lg:col-span-6"><Body cream dim>{g.d}</Body></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEDE */}
        <section style={{ background: "var(--ibi-cream)" }}>
          <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14 py-24 lg:py-32">
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6">
                <Eyebrow copper>Sede operacional</Eyebrow>
                <H1 className="mt-5">Campo Grande,<br />Mato Grosso do Sul.</H1>
                <Body className="mt-8">
                  Operamos a partir do coração geográfico do Brasil — equidistante dos três biomas que originamos. Cada projeto está a menos de seis horas de carro da sede.
                </Body>
                <div className="mt-10 p-7" style={{ background: "var(--ibi-cream-dim)" }}>
                  <Mono copper>Endereço</Mono>
                  <p className="mt-3" style={{ fontFamily: "var(--font-mono)", fontSize: 13, letterSpacing: "0.04em", lineHeight: 1.7, color: "var(--ibi-ink)" }}>
                    {contato.sede.endereco}<br />
                    {contato.sede.cidade} · {contato.sede.uf} · {contato.sede.pais}<br />
                    CEP {contato.sede.cep}
                  </p>
                  <p className="mt-4" style={{ fontFamily: "var(--font-mono)", fontSize: 13, letterSpacing: "0.04em", lineHeight: 1.7, color: "var(--ibi-ink)" }}>
                    {contato.email.address} · {contato.whatsapp.display}
                  </p>
                </div>
              </div>
              <div className="lg:col-span-5 lg:col-start-8">
                {/* Mapinha esquemático */}
                <div style={{ background: "var(--ibi-green)", color: "var(--ibi-cream)", padding: 32, minHeight: 420 }} className="relative">
                  <div className="pattern-bg pattern-bg--sparse absolute inset-0" style={{ opacity: 0.06 }} />
                  <Mono copper className="relative">Mato Grosso do Sul · 3 biomas</Mono>
                  <svg viewBox="0 0 200 220" className="relative mt-6 w-full" fill="none">
                    <path d="M 60 30 Q 80 20 110 30 Q 140 35 155 60 Q 170 90 160 130 Q 150 160 120 175 Q 90 180 70 160 Q 50 140 45 110 Q 40 80 55 55 Q 58 40 60 30 Z" stroke="var(--ibi-cream)" strokeWidth="0.6" fill="rgba(241,236,223,0.05)" />
                    {/* Cerrado (NE) */}
                    <circle cx="100" cy="60" r="3" fill="var(--ibi-copper)" />
                    {/* Pantanal (W) */}
                    <circle cx="64" cy="100" r="3" fill="var(--ibi-copper)" />
                    {/* Mata Atlântica (SE) */}
                    <circle cx="130" cy="140" r="3" fill="var(--ibi-copper)" />
                    {/* Campo Grande (centro) */}
                    <circle cx="105" cy="115" r="5" fill="none" stroke="var(--ibi-cream)" strokeWidth="0.8" />
                    <circle cx="105" cy="115" r="1.5" fill="var(--ibi-cream)" />
                  </svg>
                  <div className="relative mt-6 space-y-3" style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.08em", lineHeight: 1.7, color: "var(--ibi-cream)" }}>
                    <p><span style={{ color: "var(--ibi-copper)" }}>•</span> CER — Cerrado</p>
                    <p><span style={{ color: "var(--ibi-copper)" }}>•</span> PAN — Pantanal</p>
                    <p><span style={{ color: "var(--ibi-copper)" }}>•</span> MAT — Mata Atlântica de transição</p>
                    <p><span className="inline-block w-2 h-2 rounded-full mr-1 align-middle" style={{ border: "1px solid var(--ibi-cream)" }} /> Sede · Campo Grande</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: "var(--ibi-cream-dim)" }}>
          <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14 py-16 lg:py-24 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div>
              <Eyebrow copper>Próximo passo</Eyebrow>
              <H2 italic className="mt-3">Conhecer a metodologia ou solicitar o dossiê.</H2>
            </div>
            <div className="flex flex-wrap gap-3">
              <CTAButton href={contato.emailDossie.href} variant="copper">Solicitar dossiê →</CTAButton>
              <CTAButton href="/metodologia" variant="ghost-tinta">Ver metodologia →</CTAButton>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
