import { useState } from "react";
import { FORM_HREF } from "../lib/cta";
import { Quote as QuoteIcon } from "lucide-react";
import { Container } from "../components/ui/Container";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Reveal } from "../components/ui/Reveal";
import { Button } from "../components/ui/Button";
import { InstagramIcon } from "../components/ui/SocialIcons";
import { ImagePlaceholder } from "../components/ui/ImagePlaceholder";
import { renderBold } from "../lib/renderBold";
import { testimonials, type Testimonial } from "../data/testimonials";

/** Mostra a foto real quando existir em `src`; cai de volta no placeholder se 404. */
function TestimonialPhoto({ t }: { t: Testimonial }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <ImagePlaceholder
        label={t.image}
        className="h-20 w-20 rounded-full border-2 border-gold-400/40"
      />
    );
  }

  return (
    <img
      src={t.image}
      alt={t.name}
      onError={() => setFailed(true)}
      className="h-20 w-20 rounded-full border-2 border-gold-400/40 object-cover"
    />
  );
}

export function Testimonials() {
  return (
    <section className="bg-ink py-20 sm:py-24 lg:py-32">
      <Container>
        <SectionHeading
          align="center"
          tone="dark"
          eyebrow="MPA · Quem ensina"
          title="A palavra de quem vai te formar"
          description="Os médicos que constroem o MPA resumem, em uma frase, por que essa é a formação para quem quer se posicionar."
          className="mx-auto max-w-[640px]"
        />

        <div className="mt-14 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 sm:grid sm:grid-cols-3 sm:overflow-visible sm:pb-0">
          {testimonials.map((t, i) => (
            <Reveal
              key={t.image}
              delay={i * 90}
              className="min-w-[280px] flex-1 snap-center sm:min-w-0"
            >
              <article className="flex h-full flex-col items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-7 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-gold-400/30 hover:bg-white/[0.06]">
                <div className="relative">
                  <TestimonialPhoto t={t} />
                  {t.instagram && (
                    <a
                      href={t.instagram}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Ver o Instagram de ${t.name}`}
                      className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-white text-ink/70 shadow-md transition-colors duration-200 hover:text-gold-600"
                    >
                      <InstagramIcon className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
                <QuoteIcon className="h-5 w-5 text-gold-400" strokeWidth={1.5} />
                <p className="flex-1 text-[14px] italic leading-relaxed text-white/80">
                  &ldquo;{renderBold(t.quote, "dark")}&rdquo;
                </p>
                <div className="flex flex-col items-center gap-1">
                  <p className="text-[13px] font-semibold text-gold-200">{t.name}</p>
                  <p className="text-[12px] text-white/45">{t.role}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={260} className="mt-14 flex justify-center">
          <Button href={FORM_HREF} variant="ghost" size="lg">
            Garanta sua vaga
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
