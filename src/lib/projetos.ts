export type Bioma = "Cerrado" | "Pantanal" | "Mata Atlântica de transição";
export type ProjetoStatus = "Em originação" | "Em verificação" | "Registrado";

export interface Projeto {
  slug: string;
  codigo: string;            // identificador interno tipo "MS-CER-001"
  nome: string;
  bioma: Bioma;
  municipio: string;
  coordenada: string;         // formato decimal "−20.4486, −54.6295"
  hectares: number;
  comunidade: string;
  toneladasProjetadas: string;
  vintage: number;
  padrao: string;             // "VCS · CCB"
  status: ProjetoStatus;
  dossierId: string;          // ID público
  resumo: string;
}

export const projetos: Projeto[] = [
  {
    slug: "cerrado-vivo",
    codigo: "MS-CER-001",
    nome: "Cerrado Vivo",
    bioma: "Cerrado",
    municipio: "Bonito · MS",
    coordenada: "−20,9912, −56,4827",
    hectares: 5420,
    comunidade: "Comunidade quilombola Furnas do Dionísio",
    toneladasProjetadas: "112k tCO₂e",
    vintage: 2026,
    padrao: "VCS · CCB",
    status: "Em verificação",
    dossierId: "IBI-CER-2026-001",
    resumo:
      "Projeto-âncora do programa Cerrado. Cobertura de Cerrado strictu sensu + áreas de vereda, sob protocolo de preservação robusta com FPIC documentado.",
  },
  {
    slug: "aguas-do-miranda",
    codigo: "MS-PAN-002",
    nome: "Águas do Miranda",
    bioma: "Pantanal",
    municipio: "Miranda · MS",
    coordenada: "−20,2410, −56,3754",
    hectares: 8300,
    comunidade: "Pousada-rede Pantanal Norte",
    toneladasProjetadas: "172k tCO₂e",
    vintage: 2026,
    padrao: "VCS · CCB · ICVCM-CCP",
    status: "Em originação",
    dossierId: "IBI-PAN-2026-002",
    resumo:
      "Maior projeto Pantaneiro do portfólio. Cadeia de custódia integrada com fiscalização hídrica e cinco postos de monitoramento de fauna.",
  },
  {
    slug: "aquidauana-florescer",
    codigo: "MS-MAT-003",
    nome: "Aquidauana Florescer",
    bioma: "Mata Atlântica de transição",
    municipio: "Aquidauana · MS",
    coordenada: "−20,4720, −55,7910",
    hectares: 1890,
    comunidade: "Associação Rural de Aquidauana",
    toneladasProjetadas: "38k tCO₂e",
    vintage: 2026,
    padrao: "VCS · CCB",
    status: "Em originação",
    dossierId: "IBI-MAT-2026-003",
    resumo:
      "Mata Atlântica de transição em área de Pantanal alto. Foco em ARR (Afforestation, Reforestation & Revegetation) com espécies nativas de transição.",
  },
  {
    slug: "bonito-verde",
    codigo: "MS-CER-004",
    nome: "Bonito Verde",
    bioma: "Cerrado",
    municipio: "Bonito · MS",
    coordenada: "−21,1230, −56,4881",
    hectares: 3150,
    comunidade: "Cooperativa de Pequenos Produtores de Bonito",
    toneladasProjetadas: "65k tCO₂e",
    vintage: 2026,
    padrao: "VCS · CCB",
    status: "Em verificação",
    dossierId: "IBI-CER-2026-004",
    resumo:
      "Mosaico de Cerrado em área de aptidão turística regulada. Modelo de cobenefício com cadeia turística local.",
  },
  {
    slug: "pantanal-origem",
    codigo: "MS-PAN-005",
    nome: "Pantanal Origem",
    bioma: "Pantanal",
    municipio: "Corumbá · MS",
    coordenada: "−19,0089, −57,6532",
    hectares: 6700,
    comunidade: "Associação Ribeirinha de Albuquerque",
    toneladasProjetadas: "139k tCO₂e",
    vintage: 2026,
    padrao: "VCS · CCB · ICVCM-CCP",
    status: "Em originação",
    dossierId: "IBI-PAN-2026-005",
    resumo:
      "Pantanal de Albuquerque sob protocolo REDD+. Inclui acordo de pesca artesanal e monitoramento da fauna ictiológica.",
  },
  {
    slug: "serra-da-bodoquena",
    codigo: "MS-MAT-006",
    nome: "Serra da Bodoquena",
    bioma: "Mata Atlântica de transição",
    municipio: "Bodoquena · MS",
    coordenada: "−20,5377, −56,7128",
    hectares: 2450,
    comunidade: "Comunidade Bodoquena Tradicional",
    toneladasProjetadas: "51k tCO₂e",
    vintage: 2026,
    padrao: "VCS · CCB",
    status: "Em verificação",
    dossierId: "IBI-MAT-2026-006",
    resumo:
      "Encosta de Serra com Mata Atlântica residual de transição. Projeto-piloto de integração com Parque Nacional vizinho.",
  },
  {
    slug: "maracaju-raiz",
    codigo: "MS-CER-007",
    nome: "Maracaju Raiz",
    bioma: "Cerrado",
    municipio: "Maracaju · MS",
    coordenada: "−21,6125, −55,1683",
    hectares: 4020,
    comunidade: "Sindicato Rural de Maracaju",
    toneladasProjetadas: "83k tCO₂e",
    vintage: 2026,
    padrao: "VCS · CCB",
    status: "Em originação",
    dossierId: "IBI-CER-2026-007",
    resumo:
      "Cerrado de planalto em região de fronteira agrícola. Acordos de transição produtiva com produtores familiares.",
  },
  {
    slug: "coxim-continuidade",
    codigo: "MS-PAN-008",
    nome: "Coxim Continuidade",
    bioma: "Pantanal",
    municipio: "Coxim · MS",
    coordenada: "−18,5081, −54,7600",
    hectares: 5860,
    comunidade: "Associação Pesqueira de Coxim",
    toneladasProjetadas: "121k tCO₂e",
    vintage: 2026,
    padrao: "VCS · CCB · ICVCM-CCP",
    status: "Registrado",
    dossierId: "IBI-PAN-2026-008",
    resumo:
      "Continuidade de corredor pantaneiro até a calha do Taquari. Primeiro projeto do portfólio com selo ICVCM completo.",
  },
  {
    slug: "dourados-reflorestar",
    codigo: "MS-MAT-009",
    nome: "Dourados Reflorestar",
    bioma: "Mata Atlântica de transição",
    municipio: "Dourados · MS",
    coordenada: "−22,2206, −54,8061",
    hectares: 1560,
    comunidade: "Comunidade indígena Bororó",
    toneladasProjetadas: "32k tCO₂e",
    vintage: 2026,
    padrao: "VCS · CCB",
    status: "Em originação",
    dossierId: "IBI-MAT-2026-009",
    resumo:
      "ARR em área de terra indígena Bororó. Protocolo FPIC com governança indígena integrada à cadeia de custódia.",
  },
  {
    slug: "iguatemi-floresta",
    codigo: "MS-MAT-010",
    nome: "Iguatemi Floresta",
    bioma: "Mata Atlântica de transição",
    municipio: "Iguatemi · MS",
    coordenada: "−23,6802, −54,5621",
    hectares: 2180,
    comunidade: "Cooperativa Agroflorestal de Iguatemi",
    toneladasProjetadas: "45k tCO₂e",
    vintage: 2026,
    padrao: "VCS · CCB",
    status: "Em verificação",
    dossierId: "IBI-MAT-2026-010",
    resumo:
      "Fronteira sul de MS. Mata Atlântica de transição com sistemas agroflorestais consorciados.",
  },
  {
    slug: "apore-custodia",
    codigo: "MS-CER-011",
    nome: "Aporé Custódia",
    bioma: "Cerrado",
    municipio: "Aporé · MS",
    coordenada: "−18,9650, −51,9226",
    hectares: 2890,
    comunidade: "Associação Comunitária do Vale do Aporé",
    toneladasProjetadas: "60k tCO₂e",
    vintage: 2026,
    padrao: "VCS · CCB",
    status: "Em originação",
    dossierId: "IBI-CER-2026-011",
    resumo:
      "Cerrado em divisa interestadual com GO. Cadeia de custódia binacional documentada.",
  },
  {
    slug: "sidrolandia-origem",
    codigo: "MS-CER-012",
    nome: "Sidrolândia Origem",
    bioma: "Cerrado",
    municipio: "Sidrolândia · MS",
    coordenada: "−20,9305, −54,9618",
    hectares: 800,
    comunidade: "Pequena propriedade familiar consorciada",
    toneladasProjetadas: "17k tCO₂e",
    vintage: 2026,
    padrao: "VCS · CCB",
    status: "Em originação",
    dossierId: "IBI-CER-2026-012",
    resumo:
      "Menor unidade do portfólio. Prova de conceito para o modelo de originação em pequena propriedade.",
  },
];

export function getProjeto(slug: string): Projeto | undefined {
  return projetos.find((p) => p.slug === slug);
}

export function projetosPorBioma(bioma: Bioma): Projeto[] {
  return projetos.filter((p) => p.bioma === bioma);
}

export const biomasSummary: { nome: Bioma; codigo: "CER" | "PAN" | "MAT"; legenda: string; descricao: string }[] = [
  {
    nome: "Cerrado",
    codigo: "CER",
    legenda: "Bioma de savana tropical",
    descricao:
      "O segundo maior bioma do Brasil — savana tropical hiperdiversa, em alta pressão de conversão produtiva. Preservar o Cerrado é um dos rendimentos climáticos mais altos por hectare disponível no continente.",
  },
  {
    nome: "Pantanal",
    codigo: "PAN",
    legenda: "Maior planície alagável do mundo",
    descricao:
      "A maior planície alagável tropical do planeta — área úmida com regime hidrológico singular. Originar carbono no Pantanal exige protocolo hídrico e governança ribeirinha integrada.",
  },
  {
    nome: "Mata Atlântica de transição",
    codigo: "MAT",
    legenda: "Faixa de transição",
    descricao:
      "Áreas residuais de Mata Atlântica em transição com Cerrado e Pantanal alto. Pequenos remanescentes de altíssimo valor de biodiversidade e oportunidade para projetos ARR de alta integridade.",
  },
];
