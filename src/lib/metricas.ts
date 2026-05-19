// Métricas institucionais — fictícias, consistentes com o Manual de Marca.

export const metricas = {
  toneladasOriginadas: { valor: "847k", unidade: "tCO₂e", legenda: "Originadas · safra 2026" },
  projetosAtivos:      { valor: "12",   unidade: "projetos", legenda: "Em originação · MS" },
  hectaresContratados: { valor: "45,2k", unidade: "ha", legenda: "Sob contrato territorial" },
  biomasCobertos:      { valor: "3",    unidade: "biomas", legenda: "Cerrado · Pantanal · Mata Atl." },
  familias:            { valor: "1.420", unidade: "famílias", legenda: "Comunidades hospedeiras" },
  custodia:            { valor: "100%",  unidade: "cadeia", legenda: "Custódia documentada por hectare" },
} as const;

export const padroesExternos = [
  { sigla: "VCS",        nome: "Verra · Verified Carbon Standard",     descricao: "Padrão metodológico de quantificação de emissões evitadas/removidas." },
  { sigla: "CCB",        nome: "Climate, Community & Biodiversity",     descricao: "Padrão de cobenefícios sociais e de biodiversidade." },
  { sigla: "ICVCM-CCP",  nome: "Integrity Council · Core Carbon Princ.", descricao: "Os Core Carbon Principles do Integrity Council." },
  { sigla: "ISO 14064",  nome: "ISO 14064-2",                            descricao: "Norma internacional de quantificação e relato de GEE." },
  { sigla: "GHG",        nome: "GHG Protocol",                           descricao: "Protocolo internacional para inventário e relato de emissões." },
  { sigla: "ODS",        nome: "ODS 1 · 8 · 10 · 15",                    descricao: "Objetivos de Desenvolvimento Sustentável da ONU." },
] as const;
