/**
 * Pillars — Bloco com numeração gigante sequencial.
 * Traduz os fundamentos institucionais da marca em três eixos de valor (Propósito, Missão e Valores).
 * * Versão limpa e totalmente comentada para o Design System da IRAWO.
 */

// Estrutura de dados que centraliza as informações dos eixos da produtora
import { Reveal } from "./Reveal";

const PILLARS_DATA = [
  {
    number: "01",
    title: "Propósito",
    description: "Produzir diversas formas de expressão artística, transformando narrativas em ferramentas poderosas para a representação da Diáspora Africana no Brasil."
  },
  {
    number: "02",
    title: "Missão",
    description: "Abrir espaço e impulsionar criadores pretos visionários, desenvolvendo projetos inovadores no audiovisual, na música e nos palcos com impacto duradouro."
  },
  {
    number: "03",
    title: "Valores",
    description: "Preservar identidades culturais profundas, fundindo de maneira lúdica o passado, o presente e o amanhã para divertir e educar o público."
  }
];

export const Pillars = () => {
  return (
    <section className="py-12 md:py-24 lg:py-36 px-6 lg:px-10 border-t border-border bg-neutral-950/20">
      <div className="max-w-6xl mx-auto">
        
        {/* Título da seção — visualmente oculto para não alterar o design, mas necessário para a hierarquia semântica de headings (h2 antes dos h3 dos pilares) */}
        <h2 className="sr-only">Pilares institucionais da IRAWO</h2>

        {/* Grid de 3 colunas, uma para cada número/pilar */}
        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {PILLARS_DATA.map((pillar, index) => (
            <Reveal key={index} delay={index * 120} className="space-y-6 group">
              
              {/* Numeração Gigante Estilizada */}
              {/* O efeito "group-hover" faz com que o número ganhe a cor principal (primary) com suavidade ao passar o rato pelo bloco */}
              <div className="font-serif-display text-7xl md:text-8xl lg:text-9xl text-neutral-800 group-hover:text-primary/30 transition-colors duration-500 tracking-tighter select-none">
                {pillar.number}
              </div>

              {/* Título do Pilar */}
              <h3 className="text-xs uppercase tracking-[0.25em] text-foreground font-medium">
                // {pillar.title}
              </h3>

              {/* Descrição em texto menor e refinado */}
              <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
                {pillar.description}
              </p>
              
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
};