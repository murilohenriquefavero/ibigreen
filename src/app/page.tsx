import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Vesica } from "@/components/vesica";
import { TreatedImage } from "@/components/treated-image";
import { Eyebrow, H1, H2, H3, Lede, Body, Mono, Rule, CTAButton } from "@/components/ui";
import { metricas } from "@/lib/metricas";
import { biomasSummary, projetos } from "@/lib/projetos";
import { cartas } from "@/lib/cartas";
import { contato } from "@/lib/contato";
import { imagens } from "@/lib/imagens";

export default function HomePage() {
  const cartaInaugural = cartas[0];
  const cartaManifesto = cartas[1];

  return (
    <>
      <Header />

      {/* ============================================================
          HERO CINEMATOGRÁFICO — full-bleed image + overlay verde-tinta
      ============================================================ */}
      <section className="relative" style={{ minHeight: "100vh", color: "var(--ibi-cream)" }}>
        {/* Background image full-bleed */}
        <TreatedImage src={imagens.heroHome} alt="Floresta tropical brasileira vista de cima" intensity="medium" priority className="absolute inset-0" />

        <div className="relative max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14 pt-32 lg:pt-40 pb-20 min-h-screen flex flex-col">
          {/* Top chrome */}
          <div className="flex items-center gap-5 pb-12" style={{ borderBottom: "1px solid var(--ibi-cream-rule)" }}>
            <span className="tick" />
            <Mono cream>Originação de carbono · Mato Grosso do Sul · BR</Mono>
            <div className="flex-1 h-px" style={{ background: "var(--ibi-cream-rule)" }} />
            <Mono cream dim>vol. 01 · 2026</Mono>
          </div>

          <div className="flex-1 flex items-center">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 w-full pt-12">
              <div className="lg:col-span-9 flex flex-col gap-8">
                <Eyebrow copper>Para compradores institucionais · safra 2026</Eyebrow>

                <h1
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "clamp(56px, 9.5vw, 168px)",
                    fontWeight: 400,
                    lineHeight: 0.9,
                    letterSpacing: "-0.03em",
                    fontVariationSettings: '"opsz" 144, "SOFT" 0',
                    color: "var(--ibi-cream)",
                  }}
                >
                  Carbono brasileiro,<br />
                  <i style={{ fontStyle: "italic", color: "var(--ibi-copper)" }}>com origem.</i>
                </h1>

                <p
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontStyle: "italic",
                    fontWeight: 300,
                    fontSize: "clamp(20px, 1.9vw, 26px)",
                    lineHeight: 1.45,
                    color: "var(--ibi-cream)",
                    opacity: 0.92,
                    maxWidth: "52ch",
                  }}
                >
                  Originadora institucional de crédito de carbono territorial. Cerrado, Pantanal e Mata Atlântica de transição — cada tonelada com coordenada, contrato comunitário e ID público de registro.
                </p>

                <div className="flex flex-wrap gap-3 mt-6">
                  <CTAButton href={contato.emailDossie.href} variant="copper">
                    Solicitar dossiê institucional →
                  </CTAButton>
                  <CTAButton href="/metodologia" variant="ghost-cream">
                    Conhecer a metodologia
                  </CTAButton>
                </div>
              </div>

              <div className="lg:col-span-3 hidden lg:flex flex-col justify-end items-end gap-6">
                <div className="text-right">
                  <Mono copper>Ativo · IBI-CER-2026</Mono>
                  <p className="mt-2" style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.04em", lineHeight: 1.7, color: "var(--ibi-cream)", opacity: 0.75 }}>
                    Originação iniciada · 04.2026<br />
                    Próxima safra · 2027
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Métricas em tabela editorial — fica colado no rodapé do hero */}
          <div className="mt-16">
            <div className="flex items-end gap-5 pb-4" style={{ borderBottom: "1px solid var(--ibi-cream-rule)" }}>
              <Mono copper>Inventário · ano um</Mono>
              <div className="flex-1 h-px" style={{ background: "var(--ibi-cream-rule)" }} />
              <Mono cream dim>auditado em · 04.2026</Mono>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-14 pt-8">
              {[metricas.toneladasOriginadas, metricas.projetosAtivos, metricas.hectaresContratados, metricas.biomasCobertos].map((m, i) => (
                <div key={i}>
                  <div style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(40px, 5.5vw, 76px)", lineHeight: 0.92, letterSpacing: "-0.025em", color: "var(--ibi-cream)" }}>
                    {m.valor}
                    <span style={{ fontStyle: "italic", fontSize: "0.45em", marginLeft: 8, color: "var(--ibi-copper)", opacity: 0.9 }}>{m.unidade}</span>
                  </div>
                  <div className="mt-3" style={{ fontFamily: "var(--font-mono)", fontSize: 10.5, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--ibi-cream)", opacity: 0.7 }}>
                    {m.legenda}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          MANIFESTO — split: imagem + texto
      ============================================================ */}
      <section style={{ background: "var(--ibi-cream)" }}>
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14 py-24 lg:py-32">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-stretch">
            <div className="lg:col-span-5">
              <TreatedImage
                src={imagens.biomas.Pantanal}
                alt="Pantanal alagado visto de cima"
                intensity="strong"
                vignette
                fill={false}
                width={1400}
                height={1700}
                className="h-full min-h-[480px] lg:min-h-[640px]"
              >
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <Mono copper className="mb-3">Pantanal · Coxim Continuidade</Mono>
                  <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: 22, lineHeight: 1.35, color: "var(--ibi-cream)" }}>
                    Cada hectare alagado é um contrato. Cada contrato é um ativo registrado.
                  </p>
                </div>
              </TreatedImage>
            </div>

            <div className="lg:col-span-7 flex flex-col justify-center">
              <Eyebrow copper>Manifesto</Eyebrow>
              <p
                className="mt-5"
                style={{
                  fontFamily: "var(--font-serif)",
                  fontStyle: "italic",
                  fontWeight: 300,
                  fontSize: "clamp(36px, 4.2vw, 64px)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                  fontVariationSettings: '"opsz" 144, "SOFT" 30',
                  color: "var(--ibi-green)",
                  maxWidth: "22ch",
                }}
              >
                Carbono não é narrativa.<br />
                É <em style={{ fontStyle: "italic", color: "var(--ibi-copper)" }}>território</em>, registrado.
              </p>
              <p
                className="mt-8"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 18,
                  lineHeight: 1.6,
                  color: "var(--ibi-ink)",
                  maxWidth: "60ch",
                }}
              >
                Originamos cada tonelada brasileira com a mesma disciplina com que um banco origina um ativo — hectare por hectare, com endereço, comunidade hospedeira e dossiê público. Para o comprador europeu sob pressão de board, isso não é estilo. É <i>fiduciary discipline</i>.
              </p>
              <div className="mt-10">
                <Link href={`/cartas/${cartaManifesto.slug}`} style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--ibi-copper)", borderBottom: "1px solid var(--ibi-copper)", paddingBottom: 4 }}>
                  Ler o manifesto completo →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          PADRÕES — tabela editorial
      ============================================================ */}
      <section style={{ background: "var(--ibi-cream-dim)" }}>
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14 py-24 lg:py-32">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
            <div className="lg:col-span-7">
              <Eyebrow copper>Os quatro pilares da tonelada IBI Green</Eyebrow>
              <H1 className="mt-5">Padrões.</H1>
            </div>
            <div className="lg:col-span-5">
              <Lede>
                Cada pilar é mapeado contra um padrão externo que o comprador europeu já reconhece. Integridade é o alicerce sob os quatro.
              </Lede>
            </div>
          </div>

          <div className="mt-12 lg:mt-20" id="padroes">
            <div className="hidden md:grid grid-cols-12 gap-6 pb-3" style={{ borderBottom: "1px solid var(--ibi-green)" }}>
              <Mono dim className="col-span-1">#</Mono>
              <Mono dim className="col-span-3">Pilar</Mono>
              <Mono dim className="col-span-5">O que o comprador está comprando</Mono>
              <Mono dim className="col-span-3">Mapeado contra</Mono>
            </div>

            {[
              { num: "01", nome: "Preservação robusta.", desc: "Adicionalidade verificável. Estoque de carbono monitorado, reportado e reverificável — protocolo específico por bioma e por hectare sob contrato.", std: "VCS · CCB · ICVCM-CCP" },
              { num: "02", nome: "Impacto cultural e social.", desc: "Contratos de repartição de benefícios com comunidades territoriais. CLPI documentado, fluxo de receita auditado, sem histórico extrativista.", std: "ODS 1 · 8 · 10 · 15" },
              { num: "03", nome: "Segurança documental.", desc: "Registro de fonte única. Cada coordenada, contrato, metodologia e auditoria empacotados em um dossiê de cadeia de custódia por projeto.", std: "ISO 14064 · GHG Protocol" },
              { num: "04", nome: "Transparência absoluta.", desc: "Coordenadas públicas, metodologia pública, IDs de registro públicos. O comprador pode verificar a tonelada sem perguntar ao vendedor.", std: "Aberto · público · datado" },
            ].map((p) => (
              <div key={p.num} className="grid md:grid-cols-12 gap-6 py-7" style={{ borderBottom: "1px solid var(--ibi-rule)" }}>
                <div className="md:col-span-1"><Mono copper>{p.num}</Mono></div>
                <div className="md:col-span-3"><H3>{p.nome}</H3></div>
                <div className="md:col-span-5"><Body dim>{p.desc}</Body></div>
                <div className="md:col-span-3"><Mono>{p.std}</Mono></div>
              </div>
            ))}

            <div className="mt-10 grid md:grid-cols-12 gap-6 items-center p-8 lg:p-10" style={{ background: "var(--ibi-green)", color: "var(--ibi-cream)" }}>
              <div className="md:col-span-1"><Mono copper>00</Mono></div>
              <div className="md:col-span-8">
                <H3 cream>Integridade não é um pilar — é a laje sobre a qual os quatro pilares se apoiam.</H3>
              </div>
              <div className="md:col-span-3 flex md:justify-end">
                <div style={{ width: 64, height: 64, background: "var(--ibi-cream)", display: "flex", alignItems: "center", justifyContent: "center", padding: 8 }}>
                  <Vesica variant="filled" style={{ color: "var(--ibi-green)", width: "100%", height: "100%" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          3 BIOMAS — agora com header image
      ============================================================ */}
      <section style={{ background: "var(--ibi-cream)" }}>
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14 py-24 lg:py-32">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-16">
            <div className="lg:col-span-7">
              <Eyebrow copper>Três biomas · um estado · três cadeias de custódia</Eyebrow>
              <H1 className="mt-5">O território.</H1>
            </div>
            <div className="lg:col-span-5">
              <Lede>
                Mato Grosso do Sul reúne, em um único estado, três biomas de consequência global. Originamos sob protocolo específico em cada um.
              </Lede>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-1">
            {biomasSummary.map((b, i) => {
              const projs = projetos.filter((p) => p.bioma === b.nome);
              const ha = projs.reduce((s, p) => s + p.hectares, 0);
              return (
                <Link
                  key={b.codigo}
                  href={`/projetos?bioma=${b.codigo}`}
                  className="group block transition-colors"
                  style={{ background: i === 1 ? "var(--ibi-green)" : "var(--ibi-cream-dim)", color: i === 1 ? "var(--ibi-cream)" : "var(--ibi-green)" }}
                >
                  {/* Header image */}
                  <TreatedImage
                    src={imagens.biomas[b.nome]}
                    alt={`Bioma ${b.nome}`}
                    intensity={i === 1 ? "deep" : "medium"}
                    fill={false}
                    width={900}
                    height={560}
                    className="h-[260px] lg:h-[300px]"
                  >
                    <div className="absolute inset-0 p-6 flex justify-between items-start">
                      <Mono copper>{`Bioma · ${b.codigo}`}</Mono>
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: 10.5, letterSpacing: "0.22em", color: "var(--ibi-cream)", opacity: 0.7 }}>0{i + 1}</span>
                    </div>
                  </TreatedImage>

                  {/* Card body */}
                  <div className="p-8 lg:p-10">
                    <H2 cream={i === 1}>{b.nome}.</H2>
                    <p className="mt-5" style={{ fontFamily: "var(--font-sans)", fontSize: 16, lineHeight: 1.55, opacity: 0.78, maxWidth: "38ch" }}>
                      {b.descricao}
                    </p>
                    <div className="mt-8 pt-5" style={{ borderTop: `1px solid ${i === 1 ? "var(--ibi-cream-rule)" : "var(--ibi-rule)"}` }}>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div style={{ fontFamily: "var(--font-serif)", fontSize: 32, lineHeight: 1, letterSpacing: "-0.015em" }}>{projs.length}</div>
                          <div className="mt-1" style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", opacity: 0.6 }}>Projetos</div>
                        </div>
                        <div>
                          <div style={{ fontFamily: "var(--font-serif)", fontSize: 32, lineHeight: 1, letterSpacing: "-0.015em" }}>
                            {(ha / 1000).toFixed(1).replace(".", ",")}<i style={{ fontStyle: "italic", fontSize: "0.5em", marginLeft: 4, color: "var(--ibi-copper)" }}>k</i>
                          </div>
                          <div className="mt-1" style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", opacity: 0.6 }}>Hectares</div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-7" style={{ fontFamily: "var(--font-mono)", fontSize: 10.5, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--ibi-copper)", borderBottom: "1px solid var(--ibi-copper)", paddingBottom: 4, display: "inline-block" }}>
                      Ver projetos do bioma →
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================
          EM CAMPO — galeria editorial
      ============================================================ */}
      <section style={{ background: "var(--ibi-green-deep)", color: "var(--ibi-cream)" }}>
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14 py-24 lg:py-32">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-16">
            <div className="lg:col-span-7">
              <Eyebrow copper>Em campo</Eyebrow>
              <H1 cream className="mt-5">A originação<br />não acontece atrás<br />de uma mesa.</H1>
            </div>
            <div className="lg:col-span-5">
              <Lede cream>
                Cada hectare do nosso portfólio foi visitado, fotografado, georreferenciado. Cada contrato comunitário foi assinado em assembleia. Cada baseline tem parcelas de campo.
              </Lede>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
            {imagens.emCampo.map((img, i) => (
              <div key={i} className="relative">
                <TreatedImage
                  src={img.src}
                  alt={img.legenda}
                  intensity="medium"
                  vignette
                  fill={false}
                  width={800}
                  height={1000}
                  className="aspect-[4/5]"
                >
                  <div className="absolute inset-0 p-5 flex flex-col justify-between">
                    <Mono copper>{String(i + 1).padStart(2, "0")} · 04</Mono>
                    <div>
                      <p style={{ fontFamily: "var(--font-serif)", fontSize: 18, lineHeight: 1.25, color: "var(--ibi-cream)" }}>{img.legenda}</p>
                      <Mono cream dim className="block mt-2">{img.credito}</Mono>
                    </div>
                  </div>
                </TreatedImage>
              </div>
            ))}
          </div>

          <div className="mt-16 flex flex-wrap gap-3">
            <CTAButton href="/projetos" variant="copper">Ver os 12 projetos →</CTAButton>
            <CTAButton href="/originacao" variant="ghost-cream">Entender a originação →</CTAButton>
          </div>
        </div>
      </section>

      {/* ============================================================
          CARTA DA ORIGINADORA — agora com lateral cinematográfica
      ============================================================ */}
      <section style={{ background: "var(--ibi-cream-dim)" }}>
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14 py-24 lg:py-32">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-stretch">
            <div className="lg:col-span-5">
              <TreatedImage
                src={imagens.cartasFallback}
                alt="Documento institucional"
                intensity="medium"
                fill={false}
                width={1200}
                height={1500}
                className="h-full min-h-[420px]"
              >
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <Mono copper>{cartaInaugural.subtitulo}</Mono>
                  <Mono cream dim className="block mt-1">04 · 2026</Mono>
                </div>
              </TreatedImage>
            </div>
            <div className="lg:col-span-7 flex flex-col justify-center">
              <Eyebrow copper>Carta · 04 · 2026</Eyebrow>
              <H1 className="mt-5">Da<br />originação,<br />com método.</H1>
              <Mono dim className="mt-6 block">{cartaInaugural.autor}</Mono>
              <div className="mt-8 flex flex-col gap-5">
                {cartaInaugural.paragrafos.slice(0, 2).map((p, i) => (
                  <p key={i} style={{ fontFamily: "var(--font-serif)", fontWeight: 300, fontSize: 19, lineHeight: 1.55, color: "var(--ibi-ink)" }}>
                    {p}
                  </p>
                ))}
                <Link
                  href={`/cartas/${cartaInaugural.slug}`}
                  className="mt-4"
                  style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--ibi-copper)", borderBottom: "1px solid var(--ibi-copper)", paddingBottom: 4, alignSelf: "flex-start" }}
                >
                  Ler a carta completa →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          PARA COMPRADORES — bloco verde-tinta cinematográfico
      ============================================================ */}
      <section className="relative" style={{ color: "var(--ibi-cream)" }}>
        <TreatedImage src={imagens.paraCompradores} alt="Pantanal aerial" intensity="deep" className="absolute inset-0" />
        <div className="relative max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14 py-24 lg:py-32">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-6">
              <Eyebrow copper>Para diretores de ESG · compradores institucionais</Eyebrow>
              <H1 cream className="mt-5">O dossiê chega<br />em 48 horas.</H1>
              <p className="mt-8" style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: 22, lineHeight: 1.5, color: "var(--ibi-cream)", opacity: 0.92, maxWidth: "44ch" }}>
                Solicitamos cinco campos. Devolvemos o dossiê institucional completo — metodologia, coordenadas, comunidades hospedeiras, padrão de auditoria, vintage e ID público de registro.
              </p>
              <div className="flex flex-wrap gap-3 mt-10">
                <CTAButton href="/para-compradores" variant="copper">
                  Solicitar dossiê →
                </CTAButton>
                <CTAButton href={contato.whatsapp.href} variant="ghost-cream" external>
                  WhatsApp · {contato.whatsapp.display}
                </CTAButton>
              </div>
            </div>

            <div className="lg:col-span-5 lg:col-start-8">
              <Mono copper>O que acontece depois do contato</Mono>
              <ol className="mt-8 space-y-7">
                {[
                  { n: "01", t: "Confirmação em 24h", d: "Confirmamos o recebimento e validamos a elegibilidade institucional do solicitante." },
                  { n: "02", t: "Dossiê em 48h", d: "Enviamos o dossiê institucional com metodologia, mapas, coordenadas e padrões mapeados." },
                  { n: "03", t: "Sessão técnica", d: "Agendamos uma sessão de uma hora com a originação para responder o que faltou." },
                  { n: "04", t: "Memorando de oferta", d: "Se houver interesse formal, emitimos o memorando de oferta com vintage e preço." },
                ].map((step) => (
                  <li key={step.n} className="grid grid-cols-[40px_1fr] gap-4">
                    <Mono copper>{step.n}</Mono>
                    <div>
                      <H3 cream>{step.t}</H3>
                      <p className="mt-2" style={{ fontFamily: "var(--font-sans)", fontSize: 15, lineHeight: 1.55, color: "var(--ibi-cream)", opacity: 0.85, maxWidth: "42ch" }}>
                        {step.d}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
