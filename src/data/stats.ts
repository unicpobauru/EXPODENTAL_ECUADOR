export interface Stat {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

// TODO: reemplazar con las cifras reales de Expodental Ecuador.
export const aboutStats: Stat[] = [
  { value: 120, prefix: "+", label: "marcas expositoras" },
  { value: 5000, prefix: "+", label: "visitantes profesionales" },
  { value: 40, prefix: "+", label: "conferencias y talleres" },
  { value: 15, prefix: "+", label: "países representados" },
];
