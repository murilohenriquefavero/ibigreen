// Biblioteca de imagens — todas Unsplash, hotlinkáveis.
// Tratadas via CSS com overlay verde-tinta + grain pra manter a identidade.
// Substituir por fotos reais quando vier o material da operação.

const u = (id: string, w = 1800) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const imagens = {
  // HERO — drone shot de canopy tropical, escala épica
  heroHome: u("photo-1448375240586-882707db888b"),

  // BIOMAS — uma foto característica por bioma
  biomas: {
    Cerrado: u("photo-1564507592333-c60657eea523"),
    Pantanal: u("photo-1517999144091-3d9dca6d1e43"),
    "Mata Atlântica de transição": u("photo-1473773508845-188df298d2d1"),
  } as Record<string, string>,

  // EM CAMPO — quatro takes da operação
  emCampo: [
    { src: u("photo-1542273917363-3b1817f69a2d"), legenda: "Levantamento territorial · Cerrado Vivo", credito: "2026 · 04" },
    { src: u("photo-1542838132-92c53300491e"), legenda: "Assinatura de protocolo CLPI · Pantanal Origem", credito: "2026 · 02" },
    { src: u("photo-1426604966848-d7adac402bff"), legenda: "Baseline de carbono · Mata Atlântica", credito: "2026 · 03" },
    { src: u("photo-1450101499163-c8848c66ca85"), legenda: "Dossiê institucional · ID público de registro", credito: "2026 · 04" },
  ],

  // ORIGINAÇÃO — banner cinematográfico, hectare ao registro
  originacao: u("photo-1500382017468-9049fed747ef"),

  // METODOLOGIA — paisagem ampla, autoridade institucional
  metodologia: u("photo-1426604966848-d7adac402bff"),

  // SOBRE — território, equipe em campo
  sobre: u("photo-1518495973542-4542c06a5843"),
  sobreSecundaria: u("photo-1502082553048-f009c37129b9"),

  // PARA COMPRADORES — paisagem grave, dossiê
  paraCompradores: u("photo-1500964757637-c85e8a162699"),

  // PROJETOS — fallback por bioma (vide getProjetoImagem abaixo)
  projetosFallback: u("photo-1500382017468-9049fed747ef"),

  // CONTATO — sede Campo Grande / paisagem MS
  contato: u("photo-1473773508845-188df298d2d1"),

  // CARTAS — capa editorial por carta
  cartasFallback: u("photo-1502082553048-f009c37129b9"),

  // FOOTER — texture sutil
  footer: u("photo-1448375240586-882707db888b"),
} as const;

// Imagens específicas por slug de projeto — fallback usa imagem do bioma
export function getProjetoImagem(slug: string, bioma: string): string {
  const map: Record<string, string> = {
    "cerrado-vivo": u("photo-1564507592333-c60657eea523"),
    "aguas-do-miranda": u("photo-1517999144091-3d9dca6d1e43"),
    "aquidauana-florescer": u("photo-1473773508845-188df298d2d1"),
    "bonito-verde": u("photo-1542273917363-3b1817f69a2d"),
    "pantanal-origem": u("photo-1500964757637-c85e8a162699"),
    "serra-da-bodoquena": u("photo-1426604966848-d7adac402bff"),
    "maracaju-raiz": u("photo-1500382017468-9049fed747ef"),
    "coxim-continuidade": u("photo-1518495973542-4542c06a5843"),
    "dourados-reflorestar": u("photo-1502082553048-f009c37129b9"),
    "iguatemi-floresta": u("photo-1473773508845-188df298d2d1"),
    "apore-custodia": u("photo-1448375240586-882707db888b"),
    "sidrolandia-origem": u("photo-1564507592333-c60657eea523"),
  };
  return map[slug] ?? imagens.biomas[bioma] ?? imagens.projetosFallback;
}

// Imagens por slug de carta — fallback editorial
export function getCartaImagem(slug: string): string {
  const map: Record<string, string> = {
    "carta-inaugural": u("photo-1450101499163-c8848c66ca85"),
    "carbono-nao-e-narrativa": u("photo-1448375240586-882707db888b"),
    "por-que-origem-importa-mais-que-volume": u("photo-1500382017468-9049fed747ef"),
    "como-mapeamos-os-pilares": u("photo-1426604966848-d7adac402bff"),
    "seis-etapas-da-originacao": u("photo-1518495973542-4542c06a5843"),
  };
  return map[slug] ?? imagens.cartasFallback;
}
