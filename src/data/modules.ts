export interface CurriculumTopic {
  title: string;
  description: string;
}

/** Seção "O que você vai aprender": 3 tópicos em destaque do currículo (PPT do MPA,
 *  slides 24–27) + o bloco "e muito mais". A matriz completa tem 10 módulos. */
export const curriculumTopics: CurriculumTopic[] = [
  {
    title: "Emagrecimento e obesidade",
    description:
      "Farmacoterapia moderna do emagrecimento (GLP-1, tirzepatida), metabolismo e preservação de massa muscular.",
  },
  {
    title: "Reposição hormonal",
    description:
      "Terapias de reposição hormonal masculina e feminina, com performance, monitorização e segurança.",
  },
  {
    title: "Terapias injetáveis (IM/EV)",
    description:
      "Protocolos intramusculares e endovenosos, com prescrição, segurança e treinamento hands-on.",
  },
];

/** Destaque de Gestão de Clínicas — PPT do MPA, slide 23. */
export const gestaoClinica = {
  title: "Gestão, posicionamento e modelos de negócio para clínicas",
  intro:
    "Ser um excelente médico é apenas parte do sucesso. São 50 horas para transformar conhecimento médico em um negócio mais estratégico e sustentável.",
  pillars: [
    "Vender melhor — comunicar valor e aumentar a conversão.",
    "Fidelizar mais — experiência, recorrência e indicação.",
    "Posicionar-se no mercado — autoridade e percepção de valor.",
    "Gerir com indicadores — KPIs, rentabilidade e ticket médio.",
  ],
  bigNumber: "50h",
  bigNumberLabel: "clínica como negócio",
};

export const curriculumMore = {
  title: "E muito mais",
  summary:
    "Lipedema, saúde sexual, estética íntima, evidência e segurança (ética, regulação e uso off-label) e gestão, posicionamento e modelos de negócio para clínicas.",
  bigNumber: "400h",
  bigNumberLabel: "teoria + prática + hands-on",
};
