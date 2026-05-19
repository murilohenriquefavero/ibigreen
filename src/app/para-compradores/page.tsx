"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Eyebrow, H1, H2, H3, Lede, Body, Mono, Rule, CTAButton } from "@/components/ui";
import { contato } from "@/lib/contato";

type Form = {
  nome: string;
  email: string;
  organizacao: string;
  cargo: string;
  volume: string;
  vintage: string;
  contexto: string;
};

const empty: Form = { nome: "", email: "", organizacao: "", cargo: "", volume: "", vintage: "", contexto: "" };

export default function ParaCompradoresPage() {
  const [form, setForm] = useState<Form>(empty);

  const update = (key: keyof Form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const sendEmail = () => {
    const subject = `Solicitação de dossiê institucional · ${form.organizacao || "Comprador"}`;
    const body = [
      `Solicitante: ${form.nome}`,
      `Cargo: ${form.cargo}`,
      `Organização: ${form.organizacao}`,
      `Email: ${form.email}`,
      `Volume estimado: ${form.volume}`,
      `Vintage de interesse: ${form.vintage}`,
      "",
      "Contexto adicional:",
      form.contexto,
    ].join("\n");
    window.location.href = `mailto:${contato.emailDossie.address}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const sendWhats = () => {
    const text = [
      `Olá IBI Green, sou ${form.nome || "[nome]"}, ${form.cargo || "[cargo]"} na ${form.organizacao || "[organização]"}.`,
      `Gostaria de solicitar o dossiê institucional. Volume estimado: ${form.volume || "[volume]"} · vintage ${form.vintage || "[vintage]"}.`,
      form.contexto ? `Contexto: ${form.contexto}` : "",
    ].filter(Boolean).join("\n\n");
    window.open(`https://wa.me/${contato.whatsapp.e164}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <>
      <Header />
      <main style={{ paddingTop: 96 }}>
        {/* HERO */}
        <section style={{ background: "var(--ibi-green)", color: "var(--ibi-cream)" }} className="relative">
          <div className="pattern-bg pattern-bg--sparse absolute inset-0" />
          <div className="relative max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14 pt-16 lg:pt-24 pb-20">
            <div className="flex items-center gap-5 pb-12" style={{ borderBottom: "1px solid var(--ibi-cream-rule)" }}>
              <span className="tick" />
              <Mono cream>Para diretores de ESG · compradores institucionais</Mono>
              <div className="flex-1 h-px" style={{ background: "var(--ibi-cream-rule)" }} />
              <Mono cream dim>06 · 10</Mono>
            </div>

            <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 pt-16 lg:pt-24 items-end">
              <div className="lg:col-span-8">
                <Eyebrow copper>Solicitar dossiê institucional</Eyebrow>
                <H1 cream className="mt-5">O dossiê chega<br />em 48 horas.</H1>
              </div>
              <div className="lg:col-span-4">
                <Lede cream>
                  Preencha cinco campos. Receba o dossiê institucional completo: metodologia, coordenadas, comunidades hospedeiras, padrão de auditoria, vintage e ID público de registro.
                </Lede>
              </div>
            </div>
          </div>
        </section>

        {/* FORM */}
        <section style={{ background: "var(--ibi-cream)" }}>
          <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14 py-20 lg:py-28">
            <div className="grid lg:grid-cols-12 gap-12">
              {/* Form */}
              <div className="lg:col-span-7">
                <Eyebrow copper>Formulário de pré-qualificação</Eyebrow>
                <H2 className="mt-3">Cinco campos.</H2>

                <div className="mt-10 space-y-7">
                  <Field label="Nome completo">
                    <input className="ibi-input" value={form.nome} onChange={update("nome")} placeholder="Como devemos chamar você" />
                  </Field>
                  <div className="grid md:grid-cols-2 gap-7">
                    <Field label="Organização">
                      <input className="ibi-input" value={form.organizacao} onChange={update("organizacao")} placeholder="Razão social" />
                    </Field>
                    <Field label="Cargo">
                      <input className="ibi-input" value={form.cargo} onChange={update("cargo")} placeholder="Ex. Diretor(a) de ESG" />
                    </Field>
                  </div>
                  <Field label="Email institucional">
                    <input className="ibi-input" type="email" value={form.email} onChange={update("email")} placeholder="nome@empresa.com" />
                  </Field>
                  <div className="grid md:grid-cols-2 gap-7">
                    <Field label="Volume estimado">
                      <select className="ibi-input" value={form.volume} onChange={update("volume")}>
                        <option value="">Selecione</option>
                        <option>Até 10k tCO₂e</option>
                        <option>10–50k tCO₂e</option>
                        <option>50–200k tCO₂e</option>
                        <option>200k+ tCO₂e</option>
                        <option>Ainda não definido</option>
                      </select>
                    </Field>
                    <Field label="Vintage de interesse">
                      <select className="ibi-input" value={form.vintage} onChange={update("vintage")}>
                        <option value="">Selecione</option>
                        <option>2026</option>
                        <option>2027</option>
                        <option>2028</option>
                        <option>Múltiplos vintages</option>
                        <option>Aberto a recomendação</option>
                      </select>
                    </Field>
                  </div>
                  <Field label="Contexto adicional (opcional)">
                    <textarea className="ibi-input min-h-32" value={form.contexto} onChange={update("contexto")} placeholder="Restrições, biomas de preferência, padrão exigido, prazo decisório, etc." />
                  </Field>
                </div>

                <div className="mt-10 flex flex-wrap gap-3">
                  <button onClick={sendEmail} className="ibi-cta-copper">Enviar por email →</button>
                  <button onClick={sendWhats} className="ibi-cta-ghost">Enviar por WhatsApp →</button>
                </div>
                <p className="mt-4 max-w-[60ch]" style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.04em", color: "var(--ibi-ink-50)" }}>
                  Sem CRM. Sem mailing list. O formulário monta uma mensagem com seus dados — você revisa e envia.
                </p>
              </div>

              {/* O que acontece */}
              <div className="lg:col-span-4 lg:col-start-9">
                <div style={{ background: "var(--ibi-green-deep)", color: "var(--ibi-cream)", padding: 32 }}>
                  <Mono cream copper>O que acontece depois</Mono>
                  <ol className="mt-7 space-y-6">
                    {[
                      { n: "01", t: "Confirmação em 24h" },
                      { n: "02", t: "Dossiê em 48h" },
                      { n: "03", t: "Sessão técnica de 1h" },
                      { n: "04", t: "Memorando de oferta" },
                    ].map((s) => (
                      <li key={s.n} className="grid grid-cols-[36px_1fr] gap-3">
                        <Mono copper>{s.n}</Mono>
                        <H3 cream className="!text-[22px]">{s.t}</H3>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="mt-8 p-7" style={{ background: "var(--ibi-cream-dim)", border: "1px solid var(--ibi-rule)" }}>
                  <Mono copper>Atalho institucional</Mono>
                  <p className="mt-4" style={{ fontFamily: "var(--font-serif)", fontSize: 18, fontStyle: "italic", color: "var(--ibi-green)" }}>
                    Compradores recorrentes ou times com mandato definido podem agendar uma sessão direta com a originação.
                  </p>
                  <a href={contato.email.href} className="mt-5 inline-flex items-center" style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--ibi-copper)", borderBottom: "1px solid var(--ibi-copper)", paddingBottom: 4 }}>
                    {contato.email.address} →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <style jsx global>{`
        .ibi-input {
          width: 100%;
          background: transparent;
          border: 0;
          border-bottom: 1px solid var(--ibi-rule);
          padding: 12px 0;
          font-family: var(--font-sans);
          font-size: 18px;
          color: var(--ibi-ink);
          outline: none;
          transition: border-color 0.2s;
        }
        .ibi-input:focus { border-bottom-color: var(--ibi-copper); }
        .ibi-input::placeholder { color: var(--ibi-ink-30); }
        select.ibi-input { padding-right: 24px; appearance: none; background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'><path d='M1 1l5 5 5-5' stroke='%230A1F18' stroke-width='1.4' fill='none' stroke-linecap='round'/></svg>"); background-repeat: no-repeat; background-position: right 4px center; }
        textarea.ibi-input { resize: vertical; line-height: 1.5; padding-top: 14px; }
        .ibi-cta-copper {
          font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.22em; text-transform: uppercase;
          padding: 14px 22px; background: var(--ibi-copper); color: var(--ibi-green-deep); border: 1px solid var(--ibi-copper);
          cursor: pointer; transition: opacity 0.2s;
        }
        .ibi-cta-copper:hover { opacity: 0.85; }
        .ibi-cta-ghost {
          font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.22em; text-transform: uppercase;
          padding: 14px 22px; background: transparent; color: var(--ibi-green); border: 1px solid var(--ibi-rule);
          cursor: pointer; transition: opacity 0.2s;
        }
        .ibi-cta-ghost:hover { opacity: 0.85; }
      `}</style>
    </>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span style={{ fontFamily: "var(--font-mono)", fontSize: 10.5, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--ibi-ink-50)", display: "block", marginBottom: 8 }}>
        {label}
      </span>
      {children}
    </label>
  );
}
