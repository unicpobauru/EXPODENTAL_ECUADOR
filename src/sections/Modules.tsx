import { FORM_HREF } from "../lib/cta";
import { Container } from "../components/ui/Container";
import { Reveal } from "../components/ui/Reveal";
import { Button } from "../components/ui/Button";
import { curriculumTopics, gestaoClinica, curriculumMore } from "../data/modules";

export function Modules() {
  return (
    <section id="modulos" className="bg-soft py-20 sm:py-24 lg:py-32">
      <Container size="lg">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="flex flex-col gap-4">
            <Reveal>
              <span className="eyebrow">
                <span className="h-px w-6 bg-gold-500" aria-hidden />
                MPA · Matriz curricular
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h2
                className="text-balance font-extrabold leading-[1.12] tracking-[-0.01em] text-ink"
                style={{ fontSize: "clamp(1.75rem, 1.35rem + 1.8vw, 2.75rem)" }}
              >
                O que você vai aprender
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="max-w-[480px] text-[15px] leading-relaxed text-ink/60">
                Uma formação multidimensional para uma atuação médica mais completa. Alguns dos
                temas que você domina ao longo dos 10 módulos:
              </p>
            </Reveal>
          </div>
          <Reveal delay={160}>
            <Button href={FORM_HREF} variant="secondary" size="md">
              Garanta sua vaga
            </Button>
          </Reveal>
        </div>

        <Reveal delay={180}>
          <div className="mt-12 flex flex-col gap-6 rounded-3xl bg-ink p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
            <div className="flex flex-col gap-3">
              <h3 className="text-lg font-extrabold text-white sm:text-xl">{gestaoClinica.title}</h3>
              <p className="max-w-[560px] text-[14.5px] leading-relaxed text-white/70">
                {gestaoClinica.intro}
              </p>
              <ul className="mt-1 flex flex-col gap-1.5">
                {gestaoClinica.pillars.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-[13.5px] leading-snug text-white/65">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold-400" aria-hidden />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex shrink-0 flex-col items-start sm:items-end">
              <span className="text-4xl font-extrabold leading-none text-white sm:text-5xl">
                {gestaoClinica.bigNumber}
              </span>
              <span className="mt-1 font-mono text-[12px] uppercase tracking-[0.08em] text-gold-200">
                {gestaoClinica.bigNumberLabel}
              </span>
            </div>
          </div>
        </Reveal>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {curriculumTopics.map((topic, i) => (
            <Reveal key={topic.title} delay={i * 90}>
              <div className="flex h-full flex-col gap-3 rounded-3xl border border-line bg-white p-8 shadow-card">
                <h3 className="text-lg font-bold leading-snug text-ink">{topic.title}</h3>
                <p className="text-[14px] leading-relaxed text-ink/65">{topic.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={220}>
          <div className="mt-6 flex flex-col gap-6 rounded-3xl bg-ink p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-extrabold text-white sm:text-xl">{curriculumMore.title}</h3>
              <p className="max-w-[560px] text-[14.5px] leading-relaxed text-white/70">
                {curriculumMore.summary}
              </p>
            </div>
            <div className="flex shrink-0 flex-col items-start sm:items-end">
              <span className="text-4xl font-extrabold leading-none text-white sm:text-5xl">
                {curriculumMore.bigNumber}
              </span>
              <span className="mt-1 font-mono text-[12px] uppercase tracking-[0.08em] text-gold-200">
                {curriculumMore.bigNumberLabel}
              </span>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
