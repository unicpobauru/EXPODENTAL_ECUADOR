import { PenLine, MapPin } from "lucide-react";
import { Container } from "../components/ui/Container";
import { navLinks } from "../data/nav";
import { FORM_HREF } from "../lib/cta";

export function Footer() {
  return (
    <footer className="bg-ink-900 pt-16 text-white/70 sm:pt-20">
      <Container>
        <div className="grid gap-12 border-b border-white/10 pb-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div className="flex flex-col gap-4">
            <span className="self-start text-[15px] font-extrabold uppercase tracking-[0.14em] text-white">
              Expodental <span className="text-gold-500">Ecuador</span>
            </span>
            <p className="max-w-[320px] text-[14px] leading-relaxed text-white/50">
              Feria Internacional de Odontología — congreso científico, exposición comercial y
              networking para el sector dental. Una realización de [Organizador].
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="mb-1 text-[13px] font-semibold uppercase tracking-[0.1em] text-white">
              Navegación
            </h4>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[14px] text-white/55 transition-colors hover:text-gold-400"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="mb-1 text-[13px] font-semibold uppercase tracking-[0.1em] text-white">
              Contacto
            </h4>
            <a
              href={FORM_HREF}
              className="flex items-center gap-2 text-[14px] text-white/55 transition-colors hover:text-gold-400"
            >
              <PenLine className="h-4 w-4 shrink-0" strokeWidth={1.75} />
              Registrarme
            </a>
            <span className="flex items-start gap-2 text-[14px] text-white/55">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={1.75} />
              [Sede] · [Ciudad], Ecuador
            </span>
            <a href="#" className="mt-1 text-[13px] text-white/40 underline-offset-4 hover:underline">
              Política de Privacidad
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 py-8 text-center text-[12px] text-white/35 sm:flex-row sm:text-left">
          <p>Expodental Ecuador — Feria Internacional de Odontología. Copyright {new Date().getFullYear()} — Todos los derechos reservados.</p>
          <p>[Datos del organizador]</p>
        </div>
      </Container>
    </footer>
  );
}
