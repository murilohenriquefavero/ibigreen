export interface Carta {
  slug: string;
  titulo: string;
  subtitulo: string;
  data: string; // ISO yyyy-mm
  autor: string;
  resumo: string;
  paragrafos: string[];
}

export const cartas: Carta[] = [
  {
    slug: "carta-inaugural",
    titulo: "Da originação, com método.",
    subtitulo: "Uma carta ao leitor.",
    data: "2026-04",
    autor: "Os originadores da IBI Green",
    resumo:
      "Um manifesto inicial sobre por que escolhemos comportar essa empresa como uma originadora de ativos, e não como uma narrativa.",
    paragrafos: [
      "O carbono brasileiro não precisa de mais uma história de origem. Precisa de um registro de origem. Um documento que viaja do hectare até o livro-razão sem perder uma coordenada.",
      "A IBI Green nasceu com essa ambição única, técnica: originar crédito de carbono territorial brasileiro sob um padrão que sobreviva ao escrutínio de qualquer conselho, regulador ou auditor — e fazê-lo a partir de um estado, Mato Grosso do Sul, que reúne três biomas de consequência global: Cerrado, Pantanal e Mata Atlântica de transição.",
      "Este documento não é uma peça de marketing. É o manual operacional de uma marca construída para se comportar como uma originadora de ativos — disciplinada, denominada e responsabilizável — num mercado que já cansou de teatro.",
    ],
  },
  {
    slug: "carbono-nao-e-narrativa",
    titulo: "Carbono não é narrativa. É território, registrado.",
    subtitulo: "Manifesto.",
    data: "2026-04",
    autor: "IBI Green",
    resumo:
      "Por que a originadora rejeita o vocabulário de impacto e adota o vocabulário de instrumento financeiro.",
    paragrafos: [
      "Existe uma narrativa dominante no mercado brasileiro de carbono. Ela usa palavras como floresta, comunidade, futuro. Ela escreve em verde-pastel e fotografa mãos segurando muda. Essa narrativa existe há trinta anos. Ela não convenceu o comprador europeu.",
      "O comprador europeu sob pressão de board e regulador não compra mais boa intenção. Ele compra rastreabilidade. Ele compra governança institucional. Ele compra padrão internacional. Ele compra documento.",
      "A IBI Green opera nesse vocabulário. Originamos cada tonelada como um ativo institucional: com coordenada, com contrato comunitário, com padrão metodológico, com registro público. Hectare por hectare. Tonelada por tonelada.",
      "Isso não é menos sustentável que a narrativa antiga. É mais — porque sobrevive à auditoria. E o que não sobrevive à auditoria não vira clima evitado.",
    ],
  },
  {
    slug: "por-que-origem-importa-mais-que-volume",
    titulo: "Por que origem importa mais que volume.",
    subtitulo: "Nota técnica.",
    data: "2026-04",
    autor: "IBI Green",
    resumo:
      "Volume sem origem é commodity barata. Origem sem volume é ativo institucional. A diferença está no preço, na liquidez e na confiabilidade do que sobra ao fim do contrato.",
    paragrafos: [
      "O mercado de crédito de carbono opera há duas décadas em duas tradições paralelas. A primeira é a tradição de volume: maximizar toneladas, minimizar custo unitário, vender em escala. A segunda é a tradição de origem: maximizar rastreabilidade, denominar cada tonelada, vender abaixo de volume mas acima de scrutiny.",
      "Os últimos cinco anos foram brutais com a primeira tradição. Investigações jornalísticas, retração de compradores, recall de toneladas — tudo isso atingiu produtores que privilegiavam volume sobre origem. A segunda tradição sobreviveu, e agora está em alta.",
      "A IBI Green opera por definição na segunda tradição. Cada tonelada do nosso portfólio tem uma coordenada. Cada coordenada tem um contrato. Cada contrato tem uma comunidade hospedeira. Cada comunidade hospedeira tem uma cadeia de repartição auditada. Sem exceção.",
    ],
  },
  {
    slug: "como-mapeamos-os-pilares",
    titulo: "Como mapeamos os quatro pilares contra padrões externos.",
    subtitulo: "Documento metodológico.",
    data: "2026-04",
    autor: "Time de Originação",
    resumo:
      "Por que escolhemos VCS · CCB · ICVCM-CCP · ISO 14064 · GHG Protocol como nossa malha de padrões — e como cada um dos nossos quatro pilares se ancora externamente.",
    paragrafos: [
      "Cada um dos quatro pilares da IBI Green é mapeado contra ao menos um padrão externo já reconhecido pelo comprador europeu. Essa escolha não é decorativa — é o que torna a marca compatível com a fiduciary discipline de um diretor de ESG sob pressão de board.",
      "Pilar 01 — Preservação robusta. Mapeado contra VCS (Verified Carbon Standard) e ICVCM-CCP (Core Carbon Principles). Define a quantificação técnica do que estamos preservando.",
      "Pilar 02 — Impacto cultural e social. Mapeado contra CCB (Climate, Community & Biodiversity) e os ODS 1, 8, 10, 15. Define a auditoria de cobenefícios.",
      "Pilar 03 — Segurança documental. Mapeado contra ISO 14064-2 e o GHG Protocol. Define a forma pública e auditável do dossiê.",
      "Pilar 04 — Transparência absoluta. Não é mapeado contra um padrão externo porque vai além de todos eles: publicamos as coordenadas, a metodologia e os IDs de registro antes mesmo da compra. O comprador pode verificar o ativo sem nos perguntar nada.",
    ],
  },
  {
    slug: "seis-etapas-da-originacao",
    titulo: "As seis etapas da originação.",
    subtitulo: "Operação.",
    data: "2026-04",
    autor: "Time de Originação",
    resumo:
      "Como uma tonelada de carbono territorial sai do hectare e chega ao livro-razão do comprador europeu — passo a passo, sem teatro.",
    paragrafos: [
      "Etapa 01 — Levantamento territorial. Identificamos o hectare candidato, verificamos a titularidade jurídica e a sobreposição com áreas protegidas ou comunitárias. Sem clareza dominial, não há originação.",
      "Etapa 02 — CLPI comunitário (Consentimento Livre, Prévio e Informado). Antes de qualquer baseline técnico, contratamos a comunidade hospedeira sob protocolo FPIC. A repartição de benefícios é estabelecida nesta etapa.",
      "Etapa 03 — Baseline de carbono. Quantificamos o estoque inicial sob metodologia VCS/CCB, com remote sensing, parcelas amostrais e validação de campo.",
      "Etapa 04 — Verificação independente. Auditoria externa por organismo acreditado. Sem auditoria, sem emissão.",
      "Etapa 05 — Registro público. A tonelada entra no registro com ID, coordenada, metodologia e contrato comunitário visível.",
      "Etapa 06 — Custódia continuada. Monitoramento de re-verificação a cada cinco anos, ou antes em caso de evento. A custódia não termina na venda.",
    ],
  },
];

export function getCarta(slug: string): Carta | undefined {
  return cartas.find((c) => c.slug === slug);
}
