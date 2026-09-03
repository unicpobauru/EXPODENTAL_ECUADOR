import { Container } from "../components/ui/Container";
import { Reveal } from "../components/ui/Reveal";
import { renderBold } from "../lib/renderBold";
import { aboutParagraphs } from "../data/about";

export function About() {
  return (
    <section id="evento" className="scroll-mt-24 bg-paper py-20 sm:py-24 lg:py-32">
      <Container>
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div className="flex flex-col gap-6">
            <Reveal>
              <span className="eyebrow">
                <span className="h-px w-6 bg-gold-500" aria-hidden />
                El evento
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h2
                className="text-balance font-extrabold leading-[1.12] tracking-[-0.01em] text-ink"
                style={{ fontSize: "clamp(1.75rem, 1.35rem + 1.8vw, 2.75rem)" }}
              >
                Qué es Expodental Ecuador
              </h2>
            </Reveal>
            <div className="flex flex-col gap-4">
              {aboutParagraphs.map((paragraph, i) => (
                <Reveal key={paragraph} delay={140 + i * 60}>
                  <p className="max-w-[520px] text-[15px] leading-relaxed text-ink/65 sm:text-base">
                    {renderBold(paragraph)}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={100}>
            {/* TODO: reemplazar por una foto real del evento en public/images/evento.jpg */}
            <img
              src="images/evento.jpg"
              alt="Expodental Ecuador"
              className="aspect-[4/5] w-full rounded-3xl object-cover sm:aspect-video lg:aspect-[4/5]"
              style={{ background: "linear-gradient(150deg, #0b1b33 0%, #001360 60%, #050b16 100%)" }}
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.visibility = "hidden";
              }}
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
