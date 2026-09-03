import { FORM_HREF } from "../lib/cta";
import { Container } from "../components/ui/Container";
import { Reveal } from "../components/ui/Reveal";
import { Button } from "../components/ui/Button";
import { renderBold } from "../lib/renderBold";

export function Methodology() {
  return (
    <section id="metodologia" className="bg-paper py-20 sm:py-24 lg:py-32">
      <Container>
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
          <Reveal className="order-2 lg:order-1">
            <img
              src="images/metodologia-mpa.jpg"
              alt="Medicina Metabólica e Longevidade — visão integrada do paciente"
              className="aspect-[4/5] w-full rounded-3xl object-cover"
            />
          </Reveal>

          <div className="order-1 flex flex-col gap-6 lg:order-2">
            <Reveal>
              <span className="eyebrow">
                <span className="h-px w-6 bg-gold-500" aria-hidden />
                MPA · Nossa metodologia
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h2
                className="text-balance font-extrabold leading-[1.12] tracking-[-0.01em] text-ink"
                style={{ fontSize: "clamp(1.75rem, 1.35rem + 1.8vw, 2.75rem)" }}
              >
                Do tratamento reativo à prevenção ativa.
              </h2>
            </Reveal>
            <Reveal delay={110}>
              <p className="text-[15px] font-semibold text-gold-600 sm:text-base">
                Antecipe os riscos. Amplie a longevidade.
              </p>
            </Reveal>
            <Reveal delay={140}>
              <p className="max-w-[540px] text-[15px] leading-relaxed text-ink/65 sm:text-base">
                {renderBold(
                  "O objetivo é identificar **sinais, fatores de risco e desequilíbrios** antes que evoluam para doenças, possibilitando intervenções precoces, personalizadas e integradas — com **avaliação ampla do paciente** e reconhecimento antecipado de riscos."
                )}
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p className="max-w-[540px] text-[15px] leading-relaxed text-ink/65 sm:text-base">
                {renderBold(
                  "A saúde do paciente vai além de uma única especialidade. Por isso, o MPA amplia o olhar clínico sobre os fatores que influenciam **o envelhecimento, o metabolismo e o desenvolvimento de doenças** — para médicos de diferentes especialidades que desejam integrar **prevenção, avaliação metabólica e estratégias de longevidade** à sua atuação."
                )}
              </p>
            </Reveal>
            <Reveal delay={260} className="mt-2">
              <Button href={FORM_HREF} variant="secondary" size="lg">
                Fazer minha inscrição
              </Button>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
