import { FORM_HREF } from "../lib/cta";
import { CheckCircle2 } from "lucide-react";
import { Container } from "../components/ui/Container";
import { Button } from "../components/ui/Button";
import { LeadForm } from "../components/ui/LeadForm";
import { trustPoints } from "../data/trustPoints";

export function Hero() {
  return (
    <section id="inicio" className="relative bg-ink">
      <div className="relative flex min-h-[640px] items-center overflow-hidden bg-ink sm:min-h-[720px] lg:min-h-[820px]">
        <div className="absolute inset-0">
          {/* TODO: reemplazar por una foto real del evento en public/images/hero.jpg */}
          <img
            src="images/hero.jpg"
            alt="Expodental Ecuador — feria internacional de odontología"
            className="h-full w-full object-cover object-center"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = "none";
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(5,11,22,0.72) 0%, rgba(5,11,22,0.6) 45%, rgba(5,11,22,0.94) 100%)",
            }}
          />
        </div>

        <Container className="relative z-10 pb-32 pt-32 sm:pt-40 lg:pb-48 lg:pt-44">
          <div className="mx-auto flex max-w-[760px] flex-col items-center gap-6 text-center [text-shadow:0_1px_12px_rgba(5,11,22,0.5)]">
            <span className="eyebrow text-white/80">
              <span className="h-px w-6 bg-gold-400" aria-hidden />
              Feria Internacional de Odontología
            </span>
            <h1
              className="text-balance font-extrabold leading-[1.08] tracking-[-0.02em] text-white"
              style={{ fontSize: "clamp(2.25rem, 1.6rem + 3vw, 3.75rem)" }}
            >
              Expodental Ecuador
            </h1>
            <p className="max-w-[560px] text-[16px] leading-relaxed text-white/75 sm:text-lg">
              Congreso científico, exposición comercial y networking para todo el sector dental.
              <br />
              [Fecha] · [Sede], Ecuador.
            </p>

            <Button href={FORM_HREF} variant="primary" size="lg" className="mt-2">
              Registrarme gratis
            </Button>
            <span className="text-[12px] text-white/50">Cupos limitados — registro anticipado</span>
          </div>
        </Container>
      </div>

      <div className="relative z-20 px-6 sm:px-8 lg:px-10">
        <Container className="!px-0">
          <div className="-mt-20 grid gap-0 overflow-hidden rounded-3xl bg-ink shadow-panel sm:-mt-24 lg:-mt-28 lg:grid-cols-[1.1fr_1fr]">
            <div className="flex flex-col justify-center gap-6 p-8 sm:p-10 lg:p-14">
              <span className="eyebrow text-white/70">
                <span className="h-px w-6 bg-gold-400" aria-hidden />
                Expodental Ecuador
              </span>
              <h2 className="text-balance text-2xl font-extrabold leading-tight text-white sm:text-3xl">
                Lo que vas a encontrar
              </h2>
              <ul className="flex flex-col gap-3.5">
                {trustPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-[14.5px] leading-snug text-white/80">
                    <CheckCircle2 className="mt-0.5 h-[18px] w-[18px] shrink-0 text-gold-400" strokeWidth={2} />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div
              id="formulario"
              className="flex scroll-mt-24 flex-col items-center gap-4 border-t border-white/10 bg-white/[0.03] p-8 text-center sm:p-10 lg:border-l lg:border-t-0 lg:p-12"
            >
              <span className="eyebrow text-white/70">
                <span className="h-px w-6 bg-gold-400" aria-hidden />
                Registro abierto
              </span>
              <h3 className="text-2xl font-extrabold leading-tight text-white sm:text-3xl">
                Asegurá tu lugar
              </h3>
              <p className="max-w-xs text-[13.5px] leading-relaxed text-white/70">
                Dejá tus datos y te enviamos la confirmación, la agenda y los detalles de acceso.
              </p>
              <LeadForm />
              <span className="text-[11px] text-white/40">Cupos limitados</span>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
