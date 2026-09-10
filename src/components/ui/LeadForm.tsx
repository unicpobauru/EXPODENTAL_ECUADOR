import { useState, type FormEvent } from "react";
import { Loader2, CheckCircle2 } from "lucide-react";
import { logToGoogleSheet, type LeadFormData } from "../../lib/leadForm";
import { PhoneField } from "./PhoneField";
import { countries, DEFAULT_COUNTRY, type Country } from "../../data/countries";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const inputClass =
  "w-full rounded-xl border border-white/15 bg-white/[0.06] px-4 py-3 text-[14px] text-white placeholder:text-white/35 outline-none transition-colors duration-200 focus:border-gold-400/60 focus:bg-white/[0.09]";
const labelClass = "text-left text-[12.5px] font-semibold text-white/70";

const SI_NO = ["Sí", "No"] as const;
const TIEMPO_OPTS = [
  "Hasta 2 años",
  "De 3 a 5 años",
  "De 6 a 10 años",
  "Más de 10 años",
] as const;
const PERFIL_OPTS = [
  "Tengo mi propio consultorio",
  "Trabajo para terceros",
  "Trabajo en el sector público",
] as const;
const FACTURACION_OPTS = [
  "Hasta US$ 5.000 al mes",
  "Entre US$ 5.000 y US$ 10.000 al mes",
  "Entre US$ 10.000 y US$ 20.000 al mes",
  "Más de US$ 20.000 al mes",
] as const;

/** Grupo de opciones tipo "elegí una" (botones). */
function ChoiceGroup({
  label,
  options,
  value,
  onChange,
  columns = 1,
}: {
  label: string;
  options: readonly string[];
  value: string;
  onChange: (value: string) => void;
  columns?: 1 | 2;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <span className={labelClass}>{label}</span>
      <div className={`grid gap-2 ${columns === 2 ? "grid-cols-2" : "grid-cols-1"}`}>
        {options.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            className={`rounded-xl border px-4 py-2.5 text-[13px] font-semibold leading-snug transition-colors duration-200 ${
              value === option
                ? "border-gold-400 bg-gold-500 text-white"
                : "border-white/15 bg-white/[0.06] text-white/70 hover:border-white/30"
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export function LeadForm() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [country, setCountry] = useState<Country>(
    () => countries.find((c) => c.code === DEFAULT_COUNTRY) ?? countries[0],
  );
  const [email, setEmail] = useState("");
  const [medico, setMedico] = useState("");
  const [especialista, setEspecialista] = useState("");
  const [area, setArea] = useState("");
  const [tiempo, setTiempo] = useState("");
  const [perfil, setPerfil] = useState("");
  const [agenda, setAgenda] = useState("");
  const [facturacion, setFacturacion] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);

    if (
      !nome.trim() ||
      !telefone.trim() ||
      !email.trim() ||
      !medico ||
      !especialista ||
      !tiempo ||
      !perfil ||
      !agenda ||
      !facturacion
    ) {
      setError("Completá todos los campos para continuar.");
      return;
    }
    if (!EMAIL_PATTERN.test(email.trim())) {
      setError("Ingresá un correo electrónico válido.");
      return;
    }
    if (especialista === "Sí" && !area.trim()) {
      setError("Indicá en qué área sos especialista.");
      return;
    }

    setSubmitting(true);
    const data: LeadFormData = {
      nome: nome.trim(),
      // Formato "(+55) 11 9...": NO empieza con "+", así Google Sheets no lo
      // interpreta como fórmula (eso causaba #ERROR! en la columna Telefono).
      telefone: `(+${country.dial}) ${telefone.trim()}`,
      email: email.trim(),
      medico,
      especialista,
      area: especialista === "Sí" ? area.trim() : "",
      tiempo,
      perfil,
      agenda,
      facturacion,
      pais: `${country.name} (+${country.dial})`,
    };
    logToGoogleSheet(data);

    // Sin respuesta legible del Apps Script (no-cors) — mostramos el éxito
    // apenas después de enviar; el registro ya fue disparado a la hoja.
    window.setTimeout(() => {
      setSubmitting(false);
      setDone(true);
    }, 600);
  }

  if (done) {
    return (
      <div className="flex w-full flex-col items-center gap-3 rounded-2xl border border-gold-400/30 bg-white/[0.05] px-6 py-8 text-center">
        <CheckCircle2 className="h-9 w-9 text-gold-400" strokeWidth={2} />
        <p className="text-[15px] font-bold text-white">¡Ya estás participando!</p>
        <p className="max-w-xs text-[13px] leading-relaxed text-white/65">
          Registramos tus datos para el sorteo de becas. Te contactamos si resultás
          seleccionado/a.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-col gap-3.5 text-left" noValidate>
      <div className="flex flex-col gap-1.5">
        <label className={labelClass} htmlFor="lead-nome">
          Nombre completo
        </label>
        <input
          id="lead-nome"
          type="text"
          autoComplete="name"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className={inputClass}
          placeholder="Tu nombre y apellido"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className={labelClass} htmlFor="lead-telefone">
          Teléfono / WhatsApp
        </label>
        <PhoneField
          id="lead-telefone"
          value={telefone}
          onChange={setTelefone}
          country={country}
          onCountryChange={setCountry}
          placeholder="99 123 4567"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className={labelClass} htmlFor="lead-email">
          Correo electrónico
        </label>
        <input
          id="lead-email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputClass}
          placeholder="tu@correo.com"
        />
      </div>

      <ChoiceGroup
        label="¿Sos odontólogo/a?"
        options={SI_NO}
        value={medico}
        onChange={setMedico}
        columns={2}
      />

      <ChoiceGroup
        label="¿Ya eres especialista en alguna área de la odontología?"
        options={SI_NO}
        value={especialista}
        onChange={setEspecialista}
        columns={2}
      />

      {especialista === "Sí" && (
        <div className="flex flex-col gap-1.5">
          <label className={labelClass} htmlFor="lead-area">
            Si respondiste sí, ¿en qué área?
          </label>
          <input
            id="lead-area"
            type="text"
            value={area}
            onChange={(e) => setArea(e.target.value)}
            className={inputClass}
            placeholder="Ej.: Ortodoncia, Implantología, Endodoncia..."
          />
        </div>
      )}

      <ChoiceGroup
        label="¿Cuánto tiempo llevas trabajando en odontología?"
        options={TIEMPO_OPTS}
        value={tiempo}
        onChange={setTiempo}
        columns={2}
      />

      <ChoiceGroup
        label="Seleccioná la alternativa que mejor te representa:"
        options={PERFIL_OPTS}
        value={perfil}
        onChange={setPerfil}
      />

      <ChoiceGroup
        label="¿Ya utilizás algún sistema de gestión de agenda en tu clínica?"
        options={SI_NO}
        value={agenda}
        onChange={setAgenda}
        columns={2}
      />

      <ChoiceGroup
        label="¿Cuál es el rango de facturación mensual de tu clínica?"
        options={FACTURACION_OPTS}
        value={facturacion}
        onChange={setFacturacion}
      />

      {error && <p className="text-[12.5px] font-medium text-red-300">{error}</p>}

      <button
        type="submit"
        disabled={submitting}
        className="mt-1 flex items-center justify-center gap-2 rounded-full bg-gold-500 px-6 py-3.5 text-[13px] font-bold uppercase tracking-[0.08em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-600 disabled:pointer-events-none disabled:opacity-60"
      >
        {submitting && <Loader2 className="h-4 w-4 animate-spin" strokeWidth={2.5} />}
        Quiero participar
      </button>
    </form>
  );
}
