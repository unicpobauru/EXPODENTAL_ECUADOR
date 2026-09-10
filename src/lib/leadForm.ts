/**
 * Formulario propio de registro (sin terceros).
 * Al enviar, hace un POST al Web App de Google Apps Script, que escribe
 * una fila en la Hoja de cálculo de Google.
 *
 * El script que recibe estos datos está en `apps-script/Code.gs` (raíz del
 * repo). Las claves de `fields` de abajo tienen que coincidir con las que
 * ese script busca en `FIELD_KEYS`.
 *
 * Si GOOGLE_SCRIPT_URL se pone en null, el formulario funciona en la
 * interfaz (muestra "registro recibido") pero NO envía datos a ningún lado.
 */

/**
 * URL de implementación ("Web app", termina en `/exec`) del Apps Script de
 * la planilla NUEVA del sorteo. Mientras esté en `null`, el formulario no
 * envía nada — pegar aquí la URL cuando la implementación esté hecha.
 *
 * Planilla anterior (ya no se usa):
 * "https://script.google.com/macros/s/AKfycbzElfLuW-ioK-GMspJ7FqMvtc4e3h5aQDa60hbYCCLzNPBSZwOEFmqcRae9SgD4vi0r5Q/exec"
 */
export const GOOGLE_SCRIPT_URL: string | null = null;

/** Etiqueta fija que viaja en CADA fila (columna "Tag"), fuera del formulario. */
const LEAD_TAG = "[LP-SORTEO-BECAS-EC]";

/** Texto que va a la columna "Origen" de la planilla. */
const ORIGEN = "LP Sorteo Becas UniCPO";

/**
 * Valor por defecto para la columna "País (DDI)".
 * El formulario no pide país como campo aparte (el DDI ya viene del
 * selector de teléfono), así que se manda este valor si no llega otro.
 */
const PAIS_DEFAULT = "Ecuador (+593)";

export interface LeadFormData {
  nome: string;
  telefone: string;
  email: string;
  /** "Sí" | "No" — si la persona es odontóloga. */
  medico: string;
  /** "Sí" | "No" — ¿ya es especialista en algún área de la odontología? */
  especialista: string;
  /** Área de especialidad (texto abierto). Vacío si `especialista` = "No". */
  area?: string;
  /** Tiempo trabajando en odontología (una de las 4 franjas). */
  tiempo: string;
  /** Perfil laboral (consultorio propio / terceros / sector público). */
  perfil: string;
  /** "Sí" | "No" — ¿usa algún sistema de gestión de agenda? */
  agenda: string;
  /** Rango de facturación mensual de la clínica. */
  facturacion: string;
  /** Opcional — país / DDI. Si no viene, se usa PAIS_DEFAULT. */
  pais?: string;
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
 * "CORS-safelisted", por lo que NO dispara preflight. La respuesta es
 * opaca (`no-cors`) — la UI de éxito no depende de ella.
 */
export function logToGoogleSheet(data: LeadFormData): void {
  if (!GOOGLE_SCRIPT_URL) return;

  const pais = data.pais && data.pais.trim() ? data.pais.trim() : PAIS_DEFAULT;

  const fields: Record<string, string> = {
    fecha: formatFecha(new Date()),
    nombre: data.nome,
    telefono: data.telefone,
    pais,
    correo: data.email,
    odontologo: data.medico,
    especialista: data.especialista,
    area: data.area?.trim() ?? "",
    tiempo: data.tiempo,
    perfil: data.perfil,
    agenda: data.agenda,
    facturacion: data.facturacion,
    origen: ORIGEN,
    tag: LEAD_TAG,
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
