export interface MarketStat {
  label: string;
  fromYear: string;
  fromLabel: string;
  fromNum: number;
  toYear: string;
  toLabel: string;
  toNum: number;
  /** Se definido, anima uma contagem (inteiro) até este valor; senão usa toLabel fixo. */
  toCount?: number;
  toSuffix?: string;
  badge: string;
  note: string;
}

/** Dados do "Panorama do mercado médico" — PPT do MPA, slide 10
 *  (Fonte: Demografia Médica no Brasil 2025 — Ministério da Saúde · FMUSP · AMB). */
export const marketScenario = {
  eyebrow: "Panorama do mercado médico",
  title: "A competição virou o novo normal.",
  intro:
    "O Brasil forma médicos em ritmo recorde. Num mercado de abundância, o diploma deixou de ser diferencial — quem cresce é quem se posiciona.",
  stats: [
    {
      label: "Escolas médicas no Brasil",
      fromYear: "2015",
      fromLabel: "257",
      fromNum: 257,
      toYear: "2025",
      toLabel: "494",
      toNum: 494,
      toCount: 494,
      badge: "≈ 2×",
      note: "As vagas de graduação cresceram quase 185% em uma década.",
    },
    {
      label: "Novos médicos formados por ano",
      fromYear: "2015",
      fromLabel: "18 mil",
      fromNum: 18000,
      toYear: "2025",
      toLabel: "36 mil",
      toNum: 36000,
      toCount: 36,
      toSuffix: " mil",
      badge: "2×",
      note: "O dobro de profissionais entrando no mercado, todo ano.",
    },
    {
      label: "Médicos em atividade no país",
      fromYear: "2026",
      fromLabel: "635 mil",
      fromNum: 635000,
      toYear: "2035",
      toLabel: "1,15 mi",
      toNum: 1150000,
      badge: "projeção",
      note: "Quase o dobro de profissionais em apenas 10 anos.",
    },
  ] as MarketStat[],
  punch:
    "Em um mercado de abundância, quem é lembrado é quem se posiciona e se diferencia.",
  source: "Fonte: Demografia Médica no Brasil 2025 (Ministério da Saúde · FMUSP · AMB).",
};
