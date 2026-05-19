import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Eyebrow, H1, H2, H3, Lede, Body, Mono, Rule, CTAButton } from "@/components/ui";
import { getProjeto, projetos } from "@/lib/projetos";
import { contato } from "@/lib/contato";

export function generateStaticParams() {
  return projetos.map((p) => ({ slug: p.slug }));
}

export default async function ProjetoDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getProjeto(slug);
  if (!p) notFound();

  const idx = projetos.findIndex((x) => x.slug === p.slug);
  const prev = idx > 0 ? projetos[idx - 1] : projetos[projetos.length - 1];
  const next = idx < projetos.length - 1 ? projetos[idx + 1] : projetos[0];

  return (
    <>
      <Header />
      <main style={{ paddingTop: 96 }}>
        {/* HERO — ficha PPM */}
        <section style={{ background: "var(--ibi-cream)" }}>
          <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14 pt-16 lg:pt-24 pb-12">
            <div className="flex items-center gap-5 pb-8" style={{ borderBottom: "1px solid var(--ibi-rule)" }}>
              <span className="tick" />
              <Mono>Ficha de projeto · {p.codigo}</Mono>
              <div className="flex-1 h-px" style={{ background: "var(--ibi-rule)" }} />
              <Mono dim>Bioma · {p.bioma}</Mono>
            </div>

            <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 pt-12 lg:pt-16">
              <div className="lg:col-span-8">
                <Mono copper>{p.bioma} · {p.municipio}</Mono>
                <H1 className="mt-5">{p.nome}.</H1>
                <Lede className="mt-8">{p.resumo}</Lede>
              </div>
              <div className="lg:col-span-4">
                <div style={{ background: "var(--ibi-green)", color: "var(--ibi-cream)", padding: 24 }}>
                  <Mono cream copper>Status</Mono>
                  <H3 cream className="mt-3">{p.status}.</H3>
                  <Rule cream className="my-5" />
                  <Mono cream copper>Padrão metodológico</Mono>
                  <p className="mt-2" style={{ fontFamily: "var(--font-mono)", fontSize: 13, letterSpacing: "0.05em", color: "var(--ibi-cream)" }}>{p.padrao}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SPEC TABLE — bond prospectus style */}
        <section style={{ background: "var(--ibi-cream)" }}>
          <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14 pb-24 lg:pb-32">
            <div className="border-t border-b" style={{ borderColor: "var(--ibi-rule)" }}>
              {[
                ["Código interno", p.codigo],
                ["ID de dossiê público", p.dossierId],
                ["Município sede", p.municipio],
                ["Coordenada", p.coordenada],
                ["Hectares sob contrato", `${p.hectares.toLocaleString("pt-BR")} ha`],
                ["Toneladas projetadas", p.toneladasProjetadas],
                ["Vintage", p.vintage.toString()],
                ["Comunidade hospedeira", p.comunidade],
                ["Padrão de auditoria", p.padrao],
              ].map(([label, value]) => (
                <div key={label} className="grid md:grid-cols-12 gap-4 py-5" style={{ borderBottom: "1px solid var(--ibi-rule)" }}>
                  <Mono dim className="md:col-span-4">{label}</Mono>
                  <div className="md:col-span-8" style={{ fontFamily: "var(--font-sans)", fontSize: 17, color: "var(--ibi-ink)" }}>{value}</div>
                </div>
              ))}
            </div>

            {/* CTA + Nav */}
            <div className="mt-16 grid lg:grid-cols-12 gap-10 items-end">
              <div className="lg:col-span-7">
                <Eyebrow copper>Próximo passo</Eyebrow>
                <H2 italic className="mt-3">Solicitar o dossiê completo deste projeto.</H2>
              </div>
              <div className="lg:col-span-5 flex flex-wrap gap-3 lg:justify-end">
                <CTAButton href={`mailto:${contato.emailDossie.address}?subject=${encodeURIComponent(`Dossiê · ${p.codigo} · ${p.nome}`)}`} variant="copper">Solicitar dossiê →</CTAButton>
                <CTAButton href={contato.whatsapp.href} variant="ghost-tinta" external>WhatsApp →</CTAButton>
              </div>
            </div>

            {/* Prev / Next */}
            <div className="mt-16 pt-8 grid grid-cols-2 gap-6" style={{ borderTop: "1px solid var(--ibi-rule)" }}>
              <Link href={`/projetos/${prev.slug}`} className="block">
                <Mono dim>← Projeto anterior</Mono>
                <div className="mt-2" style={{ fontFamily: "var(--font-serif)", fontSize: 22, color: "var(--ibi-green)" }}>{prev.nome}</div>
              </Link>
              <Link href={`/projetos/${next.slug}`} className="block text-right">
                <Mono dim>Próximo projeto →</Mono>
                <div className="mt-2" style={{ fontFamily: "var(--font-serif)", fontSize: 22, color: "var(--ibi-green)" }}>{next.nome}</div>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
