/**
 * Feed / Portfólio — Exibição cronológica com efeito hover interativo (Capa flutuante).
 */
import { useState, useEffect, useRef } from "react";
import { Eyebrow } from "./Eyebrow";

// 1. IMPORTAÇÃO DAS IMAGENS (Substitua pelos caminhos/nomes reais que salvar no seu assets)
import capaCidadeDeDeusSerie from "@/assets/portfolio/cidade_de_deus_serie.webp";
import capaHowToBeCarioca from "@/assets/portfolio/how_to_be_a_carioca.webp";
import capaVaiNaFe from "@/assets/portfolio/vai_na_fe.webp";
import capaVickyMusa from "@/assets/portfolio/vicky_musa.webp";
import capaCriancaEsperanca from "@/assets/portfolio/crianca_esperanca.webp";
import capaArezzo from "@/assets/portfolio/arezzo.webp";
import capaPoder from "@/assets/portfolio/poder.webp";
import capaVamosFazerUmBrinde from "@/assets/portfolio/vamos_fazer_um_brinde.webp";
import capaCidadeDeDeusFilme from "@/assets/portfolio/cidade_de_deus_filme.webp";

const PORTFOLIO_ITEMS = [
  {
    title: "Cidade de Deus: A Série",
    role: "Atriz",
    category: "Drama · Série",
    platform: "HBO Max",
    year: "2024",
    image: capaCidadeDeDeusSerie
  },
  {
    title: "How To Be A Carioca",
    role: "Roteirista",
    category: "Comédia · Série",
    platform: "Star+",
    year: "2023",
    image: capaHowToBeCarioca
  },
  {
    title: "Vai Na Fé",
    role: "Roteirista",
    category: "Drama · Novela",
    platform: "TV Globo",
    year: "2023",
    image: capaVaiNaFe
  },
  {
    title: "Vicky e a Musa",
    role: "Roteirista",
    category: "Comédia Musical · Série",
    platform: "Globoplay",
    year: "2023",
    image: capaVickyMusa
  },
  {
    title: "Criança Esperança",
    role: "Roteirista",
    category: "Talk Show",
    platform: "TV Globo",
    year: "2022",
    image: capaCriancaEsperanca
  },
  {
    title: "Arezzo Alto Verão",
    role: "Roteirista",
    category: "Campanha Institucional",
    platform: "Mídias Sociais",
    year: "2022/2023",
    image: capaArezzo
  },
  {
    title: "Poder",
    role: "Diretora e Roteirista",
    category: "Drama · Curta-Metragem",
    platform: "Produção Independente",
    year: "2018",
    image: capaPoder
  },
  {
    title: "Vamos Fazer um Brinde",
    role: "Diretora e Roteirista",
    category: "Drama · Longa-Metragem",
    platform: "Cinema (Histórico)",
    year: "2011",
    image: capaVamosFazerUmBrinde
  },
  {
    title: "Cidade de Deus",
    role: "Atriz",
    category: "Drama · Longa-Metragem",
    platform: "Cinema",
    year: "2002",
    image: capaCidadeDeDeusFilme
  }
];

export const Feed = () => {
  // Estados para gerenciar qual imagem exibir e a posição do mouse
  const [hoveredImage, setHoveredImage] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const rafId = useRef(null);

  // Atualiza a posição do cursor com throttle via requestAnimationFrame (no máx. 1x por frame),
  // e apenas enquanto o mouse estiver sobre esta seção (não mais em toda a página).
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    if (rafId.current !== null) return;
    rafId.current = requestAnimationFrame(() => {
      setMousePos({ x: clientX, y: clientY });
      rafId.current = null;
    });
  };

  // Cancela qualquer frame pendente ao desmontar o componente
  useEffect(() => {
    return () => {
      if (rafId.current !== null) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <section id="portfolio" ref={containerRef} onMouseMove={handleMouseMove} className="relative py-16 md:py-32 lg:py-44 px-6 lg:px-10 border-t border-border select-none">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Cabeçalho */}
        <div className="mb-20">
          <Eyebrow className="mb-3">Trajetória em Tela</Eyebrow>
          <h2 className="font-serif-display text-4xl md:text-6xl tracking-tight text-foreground">
            Obras e <span className="italic">Portfólio</span> corporativo.
          </h2>
        </div>

        {/* Lista de Obras em Formato de Linhas Minimalistas */}
        <ul className="border-t border-border divide-y divide-border/60 list-none">
          {PORTFOLIO_ITEMS.map((item, index) => (
            <li 
              key={index} 
              onMouseEnter={() => setHoveredImage(item.image)}
              onMouseLeave={() => setHoveredImage(null)}
              className="py-8 grid md:grid-cols-12 gap-4 items-center group hover:bg-neutral-950/40 px-4 -mx-4 transition-all duration-300 cursor-pointer"
            >
              {/* Ano — no mobile, reordenado pra aparecer DEPOIS do título (order-2),
                  já que título é a informação principal e deve ser lida primeiro.
                  md:order-none restaura a ordem natural do DOM no grid de desktop. */}
              <div className="order-2 md:order-none md:col-span-1 text-xs font-mono text-muted-foreground group-hover:text-primary transition-colors">
                {item.year}
              </div>

              {/* Título da Produção — em mobile, vem com uma thumbnail fixa ao lado,
                  já que a imagem flutuante que aparece no hover é exclusiva de desktop
                  (não existe conceito de "hover" em telas de toque). */}
              <div className="order-1 md:order-none flex items-center gap-3 md:contents">
                <img
                  src={item.image}
                  alt={`Capa do projeto ${item.title}`}
                  width="56"
                  height="56"
                  loading="lazy"
                  decoding="async"
                  className="w-14 h-14 rounded-sm object-cover shrink-0 md:hidden"
                />
                <div className="md:col-span-4 font-serif-display text-xl md:text-2xl text-foreground md:group-hover:translate-x-2 transition-transform duration-300">
                  {item.title}
                </div>
              </div>

              {/* Atuação da Sabrina */}
              <div className="order-3 md:order-none md:col-span-2 text-xs uppercase tracking-widest text-foreground/70 group-hover:text-foreground transition-colors">
                {item.role}
              </div>

              {/* Gênero / Categoria */}
              <div className="order-4 md:order-none md:col-span-3 text-sm text-muted-foreground group-hover:text-muted-foreground/80">
                {item.category}
              </div>

              {/* Distribuidora / Mídia */}
              <div className="md:col-span-2 text-right text-xs text-muted-foreground font-medium hidden md:block group-hover:text-primary transition-colors">
                {item.platform}
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* ELEMENTO CRIATIVO: Imagem Flutuante (Apenas para Desktop para evitar bugs em toque mobile) */}
      {hoveredImage && (
        <div 
          className="fixed pointer-events-none z-50 overflow-hidden border border-border/40 bg-neutral-900 shadow-2xl rounded-sm hidden md:block animate-fade-in"
          style={{
            width: "240px",
            height: "320px",
            left: `${mousePos.x + 20}px`, // Deslocado 20px para a direita do cursor
            top: `${mousePos.y - 160}px`, // Centralizado verticalmente com o cursor
            transform: "rotate(2deg)",   // Um charmoso toque inclinado de cartaz
            transition: "left 0.15s ease-out, top 0.15s ease-out" // Suaviza o movimento de perseguição
          }}
        >
          <img 
            src={hoveredImage} 
            width="240"
            height="320"
            decoding="async"
            alt={`Capa do projeto ${PORTFOLIO_ITEMS.find(p => p.image === hoveredImage)?.title ?? ""}`}
            className="w-full h-full object-cover filter contrast-105"
          />
        </div>
      )}
    </section>
  );
};