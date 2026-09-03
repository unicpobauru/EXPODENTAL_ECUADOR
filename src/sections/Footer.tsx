import { PenLine } from "lucide-react";
import { Container } from "../components/ui/Container";
import { FORM_HREF } from "../lib/cta";

export function Footer() {
  return (
    <footer
      className="pt-14 text-white/70"
      style={{
        background:
          "radial-gradient(120% 160% at 50% 0%, #1c56b8 0%, #123a86 34%, #0a1f4a 68%, #07173a 100%)",
      }}
    >
      <Container>
        <div className="flex flex-col items-center gap-6 border-b border-white/10 pb-12 text-center">
          <img src="images/logo-unicpo.png" alt="Faculdade UniCPO" className="h-9 w-auto" />
          <p className="max-w-[440px] text-[13.5px] leading-relaxed text-white/55">
            El conocimiento que transforma tu carrera. Formación especializada, experiencia
            práctica y docentes que inspiran nuevas posibilidades.
          </p>
          <a
            href={FORM_HREF}
            className="inline-flex items-center gap-2 text-[13.5px] font-semibold text-brand-300 transition-colors hover:text-brand-200"
          >
            <PenLine className="h-4 w-4 shrink-0" strokeWidth={1.75} />
            Quiero participar del sorteo
          </a>
          <img
            src="images/cobrand-cpo-fainter.png"
            alt="CPO Ecuador · FAINTER"
            className="mt-2 h-11 w-auto opacity-95"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = "none";
            }}
          />
        </div>

        <div className="flex flex-col items-center justify-between gap-3 py-7 text-center text-[12px] text-white/35 sm:flex-row sm:text-left">
          <p>Faculdade UniCPO · CPO Ecuador — Copyright {new Date().getFullYear()}. Todos los derechos reservados.</p>
          <a href="#" className="underline-offset-4 hover:underline">Política de Privacidad</a>
        </div>
      </Container>
    </footer>
  );
}
