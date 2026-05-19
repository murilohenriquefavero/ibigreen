import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Eyebrow, H1, H2, Lede, Body, Mono, Rule, CTAButton } from "@/components/ui";
import { cartas, getCarta } from "@/lib/cartas";
import { contato } from "@/lib/contato";

export function generateStaticParams() {
  return cartas.map((c) => ({ slug: c.slug }));
}

export default async function CartaDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = getCarta(slug);
  if (!c) notFound();

  const idx = cartas.findIndex((x) => x.slug === c.slug);
  const prev = idx > 0 ? cartas[idx - 1] : null;
  const next = idx < cartas.length - 1 ? cartas[idx + 1] : null;

  return (
    <>
      <Header />
      <main style={{ paddingTop: 96, background: "var(--ibi-cream)" }}>
        {/* HERO */}
        <section>
          <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14 pt-16 lg:pt-24 pb-12">
            <div className="flex items-center gap-5 pb-12" style={{ borderBottom: "1px solid var(--ibi-rule)" }}>
              <span className="tick" />
              <Mono>{c.subtitulo}</Mono>
              <div className="flex-1 h-px" style={{ background: "var(--ibi-rule)" }} />
              <Mono dim>{c.data}</Mono>
            </div>

            <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 pt-16 lg:pt-24 items-end">
              <div className="lg:col-span-9">
                <Eyebrow copper>{c.autor}</Eyebrow>
                <H1 className="mt-5">{c.titulo}</H1>
              </div>
              <div className="lg:col-span-3 text-right">
                <Mono dim>Documento</Mono>
                <p className="mt-2" style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.04em", color: "var(--ibi-ink)" }}>
                  {c.slug}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CORPO */}
        <section>
          <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14 pb-24 lg:pb-32">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 pt-12">
              <div className="lg:col-span-3">
                <Mono copper>Resumo</Mono>
                <p className="mt-4" style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: 17, lineHeight: 1.5, color: "var(--ibi-ink)" }}>
                  {c.resumo}
                </p>
                <Rule className="mt-8" />
                <div className="mt-6 space-y-1">
                  <Mono dim className="block">Publicado em</Mono>
                  <Mono className="block">{c.data}</Mono>
                </div>
                <div className="mt-5 space-y-1">
                  <Mono dim className="block">Por</Mono>
                  <Mono className="block">{c.autor}</Mono>
                </div>
              </div>

              <article className="lg:col-span-8 lg:col-start-5 space-y-7">
                {c.paragrafos.map((p, i) => (
                  <p key={i} style={{ fontFamily: "var(--font-serif)", fontWeight: 300, fontSize: 22, lineHeight: 1.55, color: "var(--ibi-ink)", letterSpacing: "-0.003em" }}>
                    {p}
                  </p>
                ))}
              </article>
            </div>

            {/* Prev / Next */}
            <div className="mt-20 pt-8 grid grid-cols-2 gap-6" style={{ borderTop: "1px solid var(--ibi-rule)" }}>
              {prev ? (
                <Link href={`/cartas/${prev.slug}`} className="block">
                  <Mono dim>← Carta anterior</Mono>
                  <div className="mt-2" style={{ fontFamily: "var(--font-serif)", fontSize: 22, color: "var(--ibi-green)" }}>{prev.titulo}</div>
                </Link>
              ) : <div />}
              {next ? (
                <Link href={`/cartas/${next.slug}`} className="block text-right">
                  <Mono dim>Próxima carta →</Mono>
                  <div className="mt-2" style={{ fontFamily: "var(--font-serif)", fontSize: 22, color: "var(--ibi-green)" }}>{next.titulo}</div>
                </Link>
              ) : <div />}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
