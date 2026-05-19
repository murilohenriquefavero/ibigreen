// Dados de contato fictícios — trocar pelos reais quando vierem.

export const contato = {
  whatsapp: {
    raw: "+55 67 9 9000-0000",
    e164: "5567990000000",
    href: "https://wa.me/5567990000000?text=" +
      encodeURIComponent(
        "Olá IBI Green, gostaria de informações sobre originação de crédito de carbono."
      ),
    display: "+55 67 99000-0000",
  },
  email: {
    address: "contato@ibigreen.com",
    href: "mailto:contato@ibigreen.com",
  },
  emailDossie: {
    address: "dossie@ibigreen.com",
    href:
      "mailto:dossie@ibigreen.com?subject=" +
      encodeURIComponent("Solicitação de dossiê institucional · IBI Green"),
  },
  sede: {
    cidade: "Campo Grande",
    uf: "MS",
    pais: "BR",
    endereco: "Av. Afonso Pena, 5000 · Edifício IBI · Sala 1804",
    cep: "79031-001",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/ibigreen",
    instagram: "https://instagram.com/ibigreen",
  },
  juridico: {
    razaoSocial: "IBI GREEN ORIGINAÇÃO TERRITORIAL S.A.",
    cnpj: "CNPJ em registro",
  },
} as const;
