import { AnimatedCounter } from "./AnimatedCounter";
import { Reveal } from "./Reveal";

/**
 * Números reais, calculados a partir dos dados que já existem no site:
 * - 22 anos: do projeto mais antigo do portfólio (2002) até o mais recente (2024)
 * - 9 produções: contagem real dos itens listados em Feed.jsx
 * - 5 veículos: distribuidores/plataformas distintos mencionados no portfólio
 *   (HBO Max, Star+, TV Globo, Globoplay, Cinema)
 */
const STATS_DATA = [
  { to: 22, suffix: "", label: "Anos de trajetória" },
  { to: 9, suffix: "", label: "Produções no portfólio" },
  { to: 5, suffix: "", label: "Veículos parceiros" },
];

export const Stats = () => {
  return (
    <section className="py-12 md:py-20 px-6 lg:px-10 border-t border-border">
      <div className="max-w-6xl mx-auto grid grid-cols-3 gap-4 md:gap-12">
        {STATS_DATA.map((stat, index) => (
          <Reveal
            key={stat.label}
            delay={index * 120}
            className="text-center md:text-left"
          >
            <div className="font-serif-display text-4xl md:text-6xl text-primary tracking-tight">
              <AnimatedCounter to={stat.to} suffix={stat.suffix} />
            </div>
            <p className="mt-2 text-[10px] md:text-xs uppercase tracking-[0.2em] text-muted-foreground">
              {stat.label}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
};
