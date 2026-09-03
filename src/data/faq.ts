export interface FaqItem {
  number: string;
  question: string;
  answer: string;
}

// TODO: reemplazar todas las respuestas con la información real del evento.
export const faqItems: FaqItem[] = [
  {
    number: "01",
    question: "¿Qué es Expodental Ecuador?",
    answer:
      "Es la feria internacional de odontología del país: reúne congreso científico, exposición comercial de marcas del sector y espacios de networking en un mismo lugar.",
  },
  {
    number: "02",
    question: "¿Cuándo y dónde se realiza?",
    answer:
      "La próxima edición se realiza en [Sede], [Ciudad], Ecuador, los días [Fecha]. Confirmá la información en el formulario de esta página.",
  },
  {
    number: "03",
    question: "¿Para quién es el evento?",
    answer:
      "Para odontólogos, estudiantes de odontología, asistentes dentales, laboratorios, distribuidores y empresas del sector.",
  },
  {
    number: "04",
    question: "¿Tiene costo la entrada?",
    answer:
      "El registro anticipado por esta página no tiene costo. [Ajustar si hay entrada paga o acreditación profesional.]",
  },
  {
    number: "05",
    question: "¿El congreso científico está incluido?",
    answer:
      "[Definir: si el acceso a conferencias está incluido en el registro o requiere inscripción / pago aparte.]",
  },
  {
    number: "06",
    question: "¿Quiero exponer mi marca. ¿Con quién hablo?",
    answer:
      "Completá el formulario de esta página indicando que te interesa exponer y el equipo comercial te contacta con el plano y los valores de stand.",
  },
  {
    number: "07",
    question: "¿Cómo me registro?",
    answer:
      "Completá el formulario al inicio de esta página con tu nombre, correo y teléfono. Te enviamos la confirmación y los detalles de acceso.",
  },
];
