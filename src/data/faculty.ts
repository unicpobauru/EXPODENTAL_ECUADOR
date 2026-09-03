export interface FacultyMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  instagram: string;
}

export const faculty: FacultyMember[] = [
  {
    name: "Dr. Glauco Melo",
    role: "Coordenador",
    bio: "Formado pela Faculdade de Medicina de São José do Rio Preto (SP), com residência em Cirurgia Geral e Urologia pelo Hospital de Base de São José do Rio Preto. Cirurgião robótico certificado pela Intuitive (Atlanta–EUA). Pós-graduado em Cirurgia Minimamente Invasiva pelo Hospital Sírio-Libanês, em Longevidade Saudável e em Obesidade e Emagrecimento pelo Hospital Albert Einstein. Criador da técnica Men's Filler de preenchimento peniano. Fundador e CEO da Doc10X — Mentoria de Alta Performance para Médicos — e sócio da MLS (Mentoring League Society). CRM 121235 | RQE 40355.",
    image: "images/esp-glauco-melo.jpg",
    instagram: "https://www.instagram.com/drglaucomelo/",
  },
  {
    name: "Dra. Thaís Moreschi",
    role: "Professora · Emagrecimento e Obesidade",
    bio: "Médica pela Universidade Estadual de Maringá (UEM), com residência em Anestesiologia pela mesma instituição. Pós-graduada em Ciências da Longevidade e em Adequação Nutricional e Manutenção da Homeostase; cursa pós-graduação em Ginecologia Clínica e Endocrinologia Feminina. Formação complementar em Terapia Neural e Biorressonância, com atuação voltada à medicina integrativa e à regulação dos sistemas biológicos. CRM-PR 25.605 | RQE 2204.",
    image: "images/esp-thais-moreschi.jpg",
    instagram: "https://www.instagram.com/dra.thaismoreschi/",
  },
  {
    name: "Dr. Tiago Vilela Santos",
    role: "Professor · Estética Íntima Masculina",
    bio: "Médico urologista pela Universidade Federal da Grande Dourados (UFGD), com residências em Cirurgia Geral (Santa Casa de Campo Grande–MS) e em Urologia (Hospital Regional da Asa Norte–HRAN, Brasília). Membro da ABEMSS, CEO e coordenador do Intimate Growth. Atua em assistência, ensino e capacitação médica em saúde sexual masculina e procedimentos regenerativos, com cursos de pós-graduação e treinamentos hands-on. CRM 22944 | RQE 17282.",
    image: "images/esp-tiago-vilela.jpg",
    instagram: "https://www.instagram.com/drtiagovilela/",
  },
  {
    name: "Dra. Manuela Satake",
    role: "Professora · Terapias Nutricionais Injetáveis",
    bio: "Médica pela Universidade Federal do Paraná (UFPR), com residência em Anestesiologia pela mesma instituição. Especialista em Acupuntura Médica (AMBA), com pós-graduações em Cuidados ao Paciente com Dor pela USP e pelo Instituto Sírio-Libanês e em Medicina do Esporte. Certificação internacional em Medicina Endocanabinoide (WeCann Academy); cursa pós-graduação em Medicina da Longevidade. CRM-SC 16106 | RQE 8178 e 11329.",
    image: "images/esp-manuela-satake.jpg",
    instagram: "https://www.instagram.com/dra_manuelasatake/",
  },
  {
    name: "Dr. Maurício Mosna",
    role: "Professor · Lipedema",
    bio: "Médico pela Universidade Federal de Santa Catarina (UFSC), com residência em Nefrologia pela Fundação Pró-Rim de Santa Catarina e título de especialista pela SBN e AMB. MBA em Gestão Estratégica de Negócios (UNOESC). Formação complementar em Lipedema, Reposição Hormonal, Tratamento da Obesidade e Medicina da Longevidade, com atuação em saúde metabólica, composição corporal e longevidade baseada em evidências. CRM-SC 9503 | RQE 7375.",
    image: "images/esp-mauricio-mosna.jpg",
    instagram: "https://www.instagram.com/dr.mauriciomosna/",
  },
  {
    name: "Dr. Leonardo Horta",
    role: "Professor · Transtornos Sexuais",
    bio: "Médico pela Universidade Federal de Minas Gerais (UFMG), com residências em Cirurgia Geral e Urologia pelo Hospital Evangélico e Hospital João XXIII. Pós-graduado em Cirurgia Minimamente Invasiva pelo Hospital Sírio-Libanês, com formação em Urodinâmica e Ultrassonografia. Urologista no Hospital Santa Izabel, em Ubá (MG), desde 1999, com trabalhos científicos sobre pré-operatório, varicocele e infertilidade. CRM-MG 27088 | RQE 24065.",
    image: "images/esp-leonardo-horta.jpg",
    instagram: "https://www.instagram.com/dr.leonardohorta/",
  },
  {
    name: "Dra. Mariana Amália",
    role: "Professora · Estética Íntima Feminina",
    bio: "Médica pela FIMCA, com residência em Ginecologia e Obstetrícia pela UFGD e pós-graduações em Adequação Nutricional e Homeostase e em Dermatologia com ênfase em Cosmiatria. Atua em medicina integrativa e regenerativa, saúde hormonal, longevidade, emagrecimento e ginecologia regenerativa. Mentora de médicos em ginecologia regenerativa e estética, cirurgia íntima a laser e terapias hormonais. CRM-MS 8222 | CRM-SP 253890 | RQE 6077.",
    image: "images/esp-maria-amalia.jpg",
    instagram: "https://www.instagram.com/dramarianaamalia/",
  },
  {
    name: "Dr. Fábio Moraes",
    role: "Professor · Segurança, Ética e Regulação",
    bio: "Médico pela UFSC, com residência em Ginecologia e Obstetrícia e mestrado em Princípios da Cirurgia. Formação em Medicina Fetal, Ecocardiografia Fetal, Densitometria Óssea e Ultrassonografia. Professor e coordenador na UFT. Membro de instituições nacionais e internacionais da área, presidente da SOTUS e membro titular da Academia Brasileira de Ginecologia e Obstetrícia. CRM-TO 1439 | RQE 0601/1086.",
    image: "images/esp-fabio-moraes.jpg",
    instagram: "https://www.instagram.com/drfabiomoraes/",
  },
  {
    name: "Prof. Victor Tóffoli",
    role: "Professor · Gestão para Clínicas",
    bio: "Engenheiro eletricista pela UFES, com MBAs em Gestão de Clínicas Médicas e Gestão 5.0. Cofundador e diretor executivo da Clínica Mariana Rocha e fundador do ClinScale, consultoria em gestão e estruturação financeira para clínicas médicas. Une engenharia e gestão à experiência prática na operação e consultoria do setor de saúde.",
    image: "images/esp-victor-toffoli.jpg",
    instagram: "https://www.instagram.com/victor.toffoli/",
  },
];
