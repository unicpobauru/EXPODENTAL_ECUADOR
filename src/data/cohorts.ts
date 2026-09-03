export interface FormatHighlight {
  icon: "calendar" | "map-pin" | "clock";
  label: string;
  detail: string;
}

// TODO: reemplazar con fecha, sede y horario reales.
export const formatHighlights: FormatHighlight[] = [
  { icon: "calendar", label: "[Fecha]", detail: "[X] días de feria — agenda por confirmar" },
  { icon: "map-pin", label: "[Sede]", detail: "[Ciudad], Ecuador" },
  { icon: "clock", label: "[Horario]", detail: "Entrada profesional — registro anticipado sin costo" },
];

/** Días de la feria / bloques de agenda. */
export interface Encontro {
  ord: string;
  date: string;
}

// TODO: reemplazar con los días y fechas reales del evento.
export const encontrosPresenciais: Encontro[] = [
  { ord: "Día 1", date: "[dd / mes]" },
  { ord: "Día 2", date: "[dd / mes]" },
  { ord: "Día 3", date: "[dd / mes]" },
];
