/**
 * LP — Sorteo de becas UniCPO (Ecuador)
 * Recibe los POST del formulario de la landing y agrega una fila en la
 * primera hoja de ESTA planilla.
 *
 * ── Cómo instalarlo (una sola vez) ──────────────────────────────────────
 *  1. Abrí la planilla destino en Google Sheets (la hoja en blanco nueva).
 *  2. Menú  Extensiones ▸ Apps Script.
 *  3. Borrá todo lo que haya en el editor y pegá este archivo completo.
 *     Guardá con el disquete (💾).
 *  4. Botón  Implementar ▸ Nueva implementación.
 *       - Tipo (engranaje):        Aplicación web
 *       - Ejecutar como:           Yo
 *       - Quién tiene acceso:      Cualquier persona
 *     Implementar ▸ autorizá los permisos que pida.
 *  5. Copiá la "URL de la aplicación web" (termina en /exec) y pasásela
 *     al equipo de la landing — va en src/lib/leadForm.ts.
 *
 *  Si después cambiás este código: Implementar ▸ Administrar implementaciones
 *  ▸ editar (lápiz) ▸ Versión: Nueva ▸ Implementar. La URL /exec no cambia.
 * ───────────────────────────────────────────────────────────────────────
 */

// Orden EXACTO de las columnas en la hoja (fila 1). El script crea esta
// fila de encabezados solo, la primera vez que llega un registro.
var HEADERS = [
  "Fecha/Hora",
  "Nombre",
  "Teléfono",
  "País (DDI)",
  "Correo",
  "¿Es odontólogo?",
  "¿Es especialista?",
  "Área de especialidad",
  "Tiempo en odontología",
  "Perfil laboral",
  "¿Usa sistema de agenda?",
  "Facturación mensual",
  "Origen",
  "Tag",
];

// Para cada columna, las claves de parámetro que pueden traer su valor.
// La primera que llegue con contenido gana.
var FIELD_KEYS = {
  "Fecha/Hora": ["fecha", "Fecha", "data", "timestamp"],
  "Nombre": ["nombre", "nome", "Nombre", "name", "fullName"],
  "Teléfono": ["telefono", "telefone", "Telefono", "phone", "whatsapp", "celular"],
  "País (DDI)": ["pais", "país", "Pais", "country", "ddi", "DDI"],
  "Correo": ["correo", "email", "Correo", "e-mail", "mail"],
  "¿Es odontólogo?": ["odontologo", "medico", "Odontologo", "dentista", "isDentist"],
  "¿Es especialista?": ["especialista", "Especialista", "esEspecialista"],
  "Área de especialidad": ["area", "área", "Area", "areaEspecialidad", "especialidad"],
  "Tiempo en odontología": ["tiempo", "Tiempo", "tiempoOdontologia", "experiencia"],
  "Perfil laboral": ["perfil", "Perfil", "perfilLaboral"],
  "¿Usa sistema de agenda?": ["agenda", "Agenda", "sistemaAgenda"],
  "Facturación mensual": ["facturacion", "facturación", "Facturacion", "ingresos", "billing"],
  "Origen": ["origen", "origem", "Origen", "source", "fonte", "canal"],
  "Tag": ["tag", "Tag", "etiqueta"],
};

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(30000);
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    ensureHeaders_(sheet);

    var params = e && e.parameter ? e.parameter : {};
    var row = HEADERS.map(function (header) {
      var keys = FIELD_KEYS[header] || [];
      for (var i = 0; i < keys.length; i++) {
        var v = params[keys[i]];
        if (v !== undefined && v !== null && String(v).trim() !== "") {
          return String(v);
        }
      }
      return "";
    });

    // Respaldo: si no llegó "Fecha/Hora", la ponemos nosotros.
    if (!row[0]) {
      row[0] = Utilities.formatDate(new Date(), "America/Guayaquil", "dd-MM-yyyy HH:mm:ss");
    }

    sheet.appendRow(row);
    return json_({ ok: true });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

// Abrir la URL /exec en el navegador para comprobar que está viva.
function doGet() {
  return json_({ ok: true, msg: "LP Sorteo becas UniCPO — endpoint activo" });
}

function ensureHeaders_(sheet) {
  var firstCell = sheet.getRange(1, 1).getValue();
  if (firstCell === "" || firstCell === null) {
    sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
    sheet.setFrozenRows(1);
  }
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON,
  );
}
