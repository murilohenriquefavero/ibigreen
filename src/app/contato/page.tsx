import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Eyebrow, H1, H2, Lede, Body, Mono, Rule, CTAButton } from "@/components/ui";
import { contato } from "@/lib/contato";

export default function ContatoPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: 96 }}>
        {/* HERO */}
        <section style={{ background: "var(--ibi-cream)" }}>
          <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14 pt-16 lg:pt-24 pb-20">
            <div className="flex items-center gap-5 pb-12" style={{ borderBottom: "1px solid var(--ibi-rule)" }}>
              <span className="tick" />
              <Mono>Contato · institucional</Mono>
              <div className="flex-1 h-px" style={{ background: "var(--ibi-rule)" }} />
              <Mono dim>10 · 10</Mono>
            </div>

            <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 pt-16 lg:pt-24 items-end">
              <div className="lg:col-span-8">
                <Eyebrow copper>Fale com a originação</Eyebrow>
                <H1 className="mt-5">Contato.</H1>
              </div>
              <div className="lg:col-span-4">
                <Lede>
                  Três canais. Cada um para uma finalidade específica. Escolha o que cabe no seu pedido.
                </Lede>
              </div>
            </div>
          </div>
        </section>

        {/* TRÊS CANAIS */}
        <section style={{ background: "var(--ibi-cream)" }}>
          <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14 pb-24 lg:pb-32">
            <div className="grid lg:grid-cols-3 gap-px" style={{ background: "var(--ibi-rule)" }}>
              <Channel
                num="01"
                tag="Para compradores institucionais"
                titulo="Solicitar dossiê."
                desc="Resposta em até 48 horas com o dossiê institucional completo. Padrões mapeados, coordenadas e IDs públicos de registro."
                ctaLabel="Solicitar dossiê →"
                ctaHref={contato.emailDossie.href}
              />
              <Channel
                num="02"
                tag="Para parceiros & territórios"
                titulo="Conversar com a originação."
                desc="Comunidades, proprietários rurais, ONGs de território. Conversas técnicas sobre elegibilidade de novos hectares."
                ctaLabel={`${contato.email.address} →`}
                ctaHref={contato.email.href}
              />
              <Channel
                num="03"
                tag="Para conversas rápidas"
                titulo="WhatsApp da originação."
                desc="Resposta humana em horário comercial brasileiro. Para perguntas curtas, encaminhamentos ou agendamento."
                ctaLabel={`WhatsApp · ${contato.whatsapp.display} →`}
                ctaHref={contato.whatsapp.href}
                external
              />
            </div>

            {/* Sede */}
            <div className="mt-20 grid lg:grid-cols-12 gap-10">
              <div className="lg:col-span-5">
                <Eyebrow copper>Sede</Eyebrow>
                <H2 className="mt-3">{contato.sede.cidade}, {contato.sede.uf}.</H2>
                <p className="mt-6" style={{ fontFamily: "var(--font-mono)", fontSize: 13, letterSpacing: "0.05em", lineHeight: 1.8, color: "var(--ibi-ink)" }}>
                  {contato.sede.endereco}<br />
                  {contato.sede.cidade} · {contato.sede.uf} · {contato.sede.pais}<br />
                  CEP {contato.sede.cep}
                </p>
                <Rule className="mt-8" />
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div>
                    <Mono dim className="block">Razão social</Mono>
                    <Mono className="block mt-2 normal-case" style={{ textTransform: "none", letterSpacing: "0.02em" }}>{contato.juridico.razaoSocial}</Mono>
                  </div>
                  <div>
                    <Mono dim className="block">Documento fiscal</Mono>
                    <Mono className="block mt-2">{contato.juridico.cnpj}</Mono>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 lg:col-start-7 p-8 lg:p-10" style={{ background: "var(--ibi-green-deep)", color: "var(--ibi-cream)" }}>
                <Mono cream copper>Horário operacional</Mono>
                <H2 cream italic className="mt-4">Equipe em campo, equipe em mesa.</H2>
                <Body cream className="mt-6">
                  Mesa de originação: segunda a sexta · 09h às 18h (BRT). Equipe de campo: variável, conforme cronograma de projeto. Mensagens enviadas fora do horário recebem confirmação no primeiro dia útil seguinte.
                </Body>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function Channel({
  num,
  tag,
  titulo,
  desc,
  ctaLabel,
  ctaHref,
  external,
}: {
  num: string;
  tag: string;
  titulo: string;
  desc: string;
  ctaLabel: string;
  ctaHref: string;
  external?: boolean;
}) {
  return (
    <div className="p-8 lg:p-10 flex flex-col gap-5" style={{ background: "var(--ibi-cream)", minHeight: 420 }}>
      <div className="flex items-baseline justify-between">
        <Mono copper>{num}</Mono>
        <Mono dim>Canal</Mono>
      </div>
      <Mono>{tag}</Mono>
      <H2>{titulo}</H2>
      <Body className="flex-1">{desc}</Body>
      <a
        href={ctaHref}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 11,
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "var(--ibi-copper)",
          borderBottom: "1px solid var(--ibi-copper)",
          paddingBottom: 4,
          alignSelf: "flex-start",
        }}
      >
        {ctaLabel}
      </a>
    </div>
  );
}
