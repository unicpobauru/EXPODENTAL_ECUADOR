/**
 * Formulario propio de registro de Expodental Ecuador (sin terceros).
 * Al enviar, hace un POST al Web App de Google Apps Script, que escribe
 * una fila en la Hoja de cálculo de Google.
 *
 * Si se pone en null, el formulario funciona en la interfaz (muestra
 * "registro recibido") pero NO envía datos a ningún lado.
 */

/** URL de implementación ("Web app") del Google Apps Script del cliente. */
export const GOOGLE_SCRIPT_URL: string | null =
  "https://script.google.com/macros/s/AKfycbzElfLuW-ioK-GMspJ7FqMvtc4e3h5aQDa60hbYCCLzNPBSZwOEFmqcRae9SgD4vi0r5Q/exec";

/** Etiqueta fija que viaja en CADA fila (columna "Tag"), fuera del formulario. */
const LEAD_TAG = "[LP-SORTEO-BECAS-EC]";

export interface LeadFormData {
  nome: string;
  telefone: string;
  email: string;
  /** "Sí" | "No" — si la persona es odontóloga. */
  medico: string;
}

/** Fecha en formato local (DD-MM-AAAA HH:mm:ss, 24h, zona de Ecuador). */
function formatFecha(date: Date): string {
  const parts = new Intl.DateTimeFormat("es-EC", {
    timeZone: "America/Guayaquil",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).formatToParts(date);
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "00";
  const hour = get("hour") === "24" ? "00" : get("hour");
  return `${get("day")}-${get("month")}-${get("year")} ${hour}:${get("minute")}:${get("second")}`;
}

/**
 * Envía los datos a la Hoja de cálculo de Google.
 *
 * Va como `application/x-www-form-urlencoded` (no JSON): así los campos
 * caen en `e.parameter` del Apps Script. Ese Content-Type es
 * "CORS-safelisted", por lo que NO dispara preflight.
 *
 * Cada valor se envía bajo VARIAS claves (ES / variaciones de mayúsculas)
 * para caer en la columna correcta sea cual sea el nombre esperado.
 */
export function logToGoogleSheet(data: LeadFormData): void {
  if (!GOOGLE_SCRIPT_URL) return;

  const fecha = formatFecha(new Date());
  const fields: Record<string, string> = {
    nombre: data.nome,
    Nombre: data.nome,
    nombreCompleto: data.nome,
    nombre_completo: data.nome,
    name: data.nome,

    telefono: data.telefone,
    Telefono: data.telefone,
    celular: data.telefone,
    whatsapp: data.telefone,
    phone: data.telefone,

    email: data.email,
    Email: data.email,
    correo: data.email,

    odontologo: data.medico,
    esOdontologo: data.medico,

    origen: "site",
    Origen: "site",
    tag: LEAD_TAG,
    Tag: LEAD_TAG,

    fecha: fecha,
    Fecha: fecha,
    fechaHora: fecha,
    timestamp: fecha,
    date: fecha,
  };

  fetch(GOOGLE_SCRIPT_URL, {
    method: "POST",
    mode: "no-cors",
    keepalive: true,
    redirect: "follow",
    headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
    body: new URLSearchParams(fields).toString(),
  }).catch(() => {
    /* silencioso a propósito — la UI de éxito no depende de la respuesta */
  });
}
