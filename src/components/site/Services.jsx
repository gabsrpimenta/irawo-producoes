/**
 * Services — Exibição do ecossistema de serviços da IRAWO.
 * Organização horizontal limpa (estilo índice de portfólio editorial)
 */
import { Clapperboard, Tv, Film, Theater, Share2, ArrowUpRight } from "lucide-react";
import { Eyebrow } from "./Eyebrow";
import { Reveal } from "./Reveal";

const SERVICES_DATA = [
  {
    category: "Audiovisual",
    items: [
      {
        title: "Cinema",
        description: "Produção de longas, médias, curtas-metragens e animações, além de curadoria e promoção de festivais de cinema e atividades formativas.",
        icon: Film,
      },
      {
        title: "TV & Streaming",
        description: "Desenvolvimento e produção de filmes, séries ficcionais, animações e documentários com narrativas inovadoras.",
        icon: Tv,
      },
      {
        title: "Clip & Visualizer",
        description: "Direção artística e produção executiva para videoclipes musicais e conceitos visuais integrados.",
        icon: Clapperboard,
      },
    ],
  },
  {
    category: "Palco",
    items: [
      {
        title: "Shows & Espetáculos",
        description: "Direção moderna e lúdica para cantores que desejam estéticas afrofuturistas em seus palcos e produção de espetáculos teatrais musicais.",
        icon: Theater,
      },
    ],
  },
  {
    category: "Branded Content",
    items: [
      {
        title: "Mídias Sociais & Marcas",
        description: "Criação e produção de campanhas com conceito afrofuturista sob medida para empresas no Instagram, TikTok e Facebook.",
        icon: Share2,
      },
    ],
  },
];

export const Services = () => {
  return (
    <section id="servicos" className="py-16 md:py-32 lg:py-44 px-6 lg:px-10 border-t border-border">
      <div className="max-w-6xl mx-auto">
        
        {/* Cabeçalho da Seção */}
        <Reveal className="mb-24 max-w-xl">
          <Eyebrow className="mb-3">O que fazemos</Eyebrow>
          <h2 className="font-serif-display text-4xl md:text-6xl tracking-tight text-foreground">
            Linguagem <span className="italic text-muted-foreground">moderna</span> no ecossistema cultural.
          </h2>
        </Reveal>

        {/* Listagem Estruturada e Linear */}
        <div className="space-y-20">
          {SERVICES_DATA.map((group, groupIndex) => (
            <Reveal key={groupIndex} delay={groupIndex * 100} className="grid md:grid-cols-12 gap-6 items-start">
              
              {/* Coluna da Esquerda: Nome da Categoria — sticky só quando o grupo tem
                  itens suficientes pra dar espaço de rolagem ao efeito (senão o "stick"
                  acontece e solta quase instantaneamente, parecendo um solavanco) */}
              <div className={`md:col-span-3 ${group.items.length > 1 ? "sticky top-24" : ""}`}>
                <h3 className="text-[10px] uppercase tracking-[0.3em] text-primary font-semibold font-mono block">
                  // {group.category}
                </h3>
              </div>

              {/* Coluna da Direita: Linhas de Itens Alinhados */}
              <div className="md:col-span-9 border-t border-border/40">
                {group.items.map((service, serviceIndex) => {
                  const Icon = service.icon;
                  return (
                    <div 
                      key={serviceIndex} 
                      className="group grid sm:grid-cols-12 gap-4 py-8 border-b border-border/40 hover:bg-neutral-950/30 transition-all duration-300 px-2 -mx-2 items-start"
                    >
                      {/* Sub-item Ícone + Título */}
                      <div className="sm:col-span-4 flex items-center gap-4">
                        <div className="text-muted-foreground group-hover:text-primary transition-colors duration-300 shrink-0">
                          <Icon size={20} strokeWidth={1.5} aria-hidden="true" />
                        </div>
                        <h4 className="font-serif-display text-lg md:text-xl text-foreground">
                          {service.title}
                        </h4>
                      </div>

                      {/* Sub-item Descrição */}
                      <div className="sm:col-span-7">
                        <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/90 transition-colors duration-300">
                          {service.description}
                        </p>
                      </div>

                      {/* Detalhe estético: Seta indicadora minimalista na ponta */}
                      <div className="sm:col-span-1 flex justify-end text-muted-foreground/60 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 hidden sm:flex">
                        <ArrowUpRight size={16} aria-hidden="true" />
                      </div>

                    </div>
                  );
                })}
              </div>

            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
};