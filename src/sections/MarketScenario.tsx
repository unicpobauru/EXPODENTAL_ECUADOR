import { useEffect, useRef, useState } from "react";
import { TrendingUp } from "lucide-react";
import { Container } from "../components/ui/Container";
import { Reveal } from "../components/ui/Reveal";
import { CountUp } from "../components/ui/CountUp";
import { SectionHeading } from "../components/ui/SectionHeading";
import { marketScenario, type MarketStat } from "../data/marketScenario";

/** Barra que cresce da esquerda para a direita quando entra na tela. */
function Bar({ pct, tone, delay = 0 }: { pct: number; tone: "muted" | "alert"; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setWidth(pct);
      return;
    }
    let timer: number;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          timer = window.setTimeout(() => setWidth(pct), delay);
          obs.unobserve(el);
        }
      },
      { threshold: 0.35 }
    );
    obs.observe(el);
    return () => {
      obs.disconnect();
      window.clearTimeout(timer);
    };
  }, [pct, delay]);

  return (
    <div ref={ref} className="h-2.5 flex-1 overflow-hidden rounded-full bg-ink/10">
      <div
        className={`h-full rounded-full transition-[width] duration-[900ms] ease-out ${
          tone === "alert" ? "bg-red-600" : "bg-ink/25"
        }`}
        style={{ width: `${width}%` }}
      />
    </div>
  );
}

function StatRow({ stat }: { stat: MarketStat }) {
  const fromPct = Math.max(6, Math.round((stat.fromNum / stat.toNum) * 100));

  return (
    <div className="flex flex-col gap-4 py-7 first:pt-0 last:pb-0">
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-[15px] font-bold text-ink sm:text-base">{stat.label}</h3>
        <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-red-100 px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.04em] text-red-700">
          <TrendingUp className="h-3 w-3" strokeWidth={2.5} />
          {stat.badge}
        </span>
      </div>

      <div className="flex flex-col gap-2.5">
        <div className="flex items-center gap-3">
          <span className="w-11 shrink-0 text-[12px] font-semibold text-ink/40">{stat.fromYear}</span>
          <Bar pct={fromPct} tone="muted" />
          <span className="w-20 shrink-0 text-right text-[13px] font-bold text-ink/45">
            {stat.fromLabel}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-11 shrink-0 text-[12px] font-semibold text-red-600">{stat.toYear}</span>
          <Bar pct={100} tone="alert" delay={160} />
          <span className="w-20 shrink-0 text-right text-lg font-extrabold leading-none text-red-600 sm:text-xl">
            {typeof stat.toCount === "number" ? (
              <CountUp end={stat.toCount} suffix={stat.toSuffix ?? ""} />
            ) : (
              stat.toLabel
            )}
          </span>
        </div>
      </div>

      <p className="text-[13px] leading-relaxed text-ink/55">{stat.note}</p>
    </div>
  );
}

export function MarketScenario() {
  return (
    <section className="bg-paper py-20 sm:py-24 lg:py-32">
      <Container>
        <SectionHeading
          align="center"
          eyebrow={marketScenario.eyebrow}
          title={marketScenario.title}
          description={marketScenario.intro}
          className="mx-auto max-w-[640px]"
        />

        <Reveal delay={80} className="mx-auto mt-12 max-w-[760px]">
          <div className="divide-y divide-line rounded-3xl border border-line bg-white p-7 shadow-card sm:p-9">
            {marketScenario.stats.map((stat) => (
              <StatRow key={stat.label} stat={stat} />
            ))}
          </div>
        </Reveal>

        <Reveal delay={160} className="mx-auto max-w-[760px]">
          <div className="mt-6 flex flex-col gap-3 rounded-3xl bg-ink p-8 text-center sm:p-10">
            <p className="mx-auto max-w-[560px] text-balance text-[17px] font-semibold leading-snug text-white sm:text-lg">
              {marketScenario.punch}
            </p>
            <p className="text-[11.5px] text-white/40">{marketScenario.source}</p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
