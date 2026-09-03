import { useState } from "react";
import { FORM_HREF } from "../lib/cta";
import { Award, Users, TrendingUp, FlaskConical } from "lucide-react";
import { Container } from "../components/ui/Container";
import { Reveal } from "../components/ui/Reveal";
import { Button } from "../components/ui/Button";
import { differentials, type Differential } from "../data/differentials";

const icons = { award: Award, users: Users, "trending-up": TrendingUp, flask: FlaskConical };

/** Muestra la imagen del item; si no existe todavía (404), cae a un degradado de marca. */
function DifferentialMedia({ item }: { item: Differential }) {
  const [imgFailed, setImgFailed] = useState(false);

  if (imgFailed) {
    return (
      <div
        aria-hidden
        className="h-full w-full transition-transform duration-500 group-hover:scale-105"
        style={{ background: "linear-gradient(150deg, #0b1b33 0%, #001360 60%, #050b16 100%)" }}
      />
    );
  }

  return (
    <img
      src={item.image}
      alt=""
      aria-hidden
      onError={() => setImgFailed(true)}
      className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
    />
  );
}

export function Differentials() {
  return (
    <section id="beneficios" className="scroll-mt-24 bg-soft py-24 sm:py-28 lg:py-36">
      <Container>
        <div className="mx-auto flex max-w-[720px] flex-col items-center gap-5 text-center">
          <Reveal>
            <span className="eyebrow">
              <span className="h-px w-6 bg-gold-500" aria-hidden />
              Por qué asistir
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2
              className="text-balance font-extrabold leading-[1.1] tracking-[-0.015em] text-ink"
              style={{ fontSize: "clamp(2rem, 1.5rem + 2.4vw, 3.25rem)" }}
            >
              Todo el sector dental, en tres días
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="text-[15px] leading-relaxed text-ink/65 sm:text-lg">
              Actualizate, conocé la última tecnología y ampliá tu red de contactos
              <br />
              en la feria de referencia de la odontología en Ecuador.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
          {differentials.map((item, i) => {
            const Icon = icons[item.icon as keyof typeof icons];
            return (
              <Reveal key={item.title} delay={i * 90}>
                <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white shadow-card ring-1 ring-transparent transition-all duration-300 hover:-translate-y-2 hover:border-gold-400/50 hover:shadow-card-hover hover:ring-gold-400/20">
                  <div className="relative aspect-[3/4] w-full overflow-hidden">
                    <DifferentialMedia item={item} />
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink/70 to-transparent" aria-hidden />
                    <div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold-500 text-ink shadow-lg transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-5 w-5" strokeWidth={2.25} />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-2.5 p-7">
                    <h3 className="text-[1.35rem] font-bold leading-snug text-ink">{item.title}</h3>
                    <p className="text-[15px] leading-relaxed text-ink/60">{item.description}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={260} className="mt-16 flex justify-center">
          <Button href={FORM_HREF} variant="primary" size="lg">
            Registrarme
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
