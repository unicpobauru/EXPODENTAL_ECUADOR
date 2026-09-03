import { Container } from "../components/ui/Container";
import { Reveal } from "../components/ui/Reveal";
import { CountUp } from "../components/ui/CountUp";
import { aboutStats } from "../data/stats";

export function Stats() {
  return (
    <section className="bg-ink py-20 sm:py-24">
      <Container>
        <Reveal>
          <p className="mb-12 text-center text-[13px] font-semibold uppercase tracking-[0.18em] text-gold-400">
            Expodental Ecuador en números
          </p>
        </Reveal>
        <div className="grid grid-cols-2 gap-x-4 gap-y-12 md:grid-cols-4 md:divide-x md:divide-white/10">
          {aboutStats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 80}>
              <div className="flex flex-col items-center gap-2 px-2 text-center md:px-6">
                <p
                  className="font-extrabold leading-none tracking-tight text-white [font-variant-numeric:tabular-nums]"
                  style={{ fontSize: "clamp(2.25rem, 1.5rem + 2.4vw, 3.5rem)" }}
                >
                  <CountUp end={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                </p>
                <p className="max-w-[160px] text-[13px] leading-snug text-white/55 sm:text-sm">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
