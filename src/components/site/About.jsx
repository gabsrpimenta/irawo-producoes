/**
 * About — Seção com 3 Abas Conceituais (Fundo Preto + Tipografia Amarela)
 * Integração das imagens oficiais da casa, fundadora e da colagem afrofuturista.
 */
import { useState } from "react";
import { Eyebrow } from "./Eyebrow";
import { Reveal } from "./Reveal";
import fotoSabrina from "@/assets/SabrinaRosa.webp";
import imagemAfrofuturismo from "@/assets/AfrofuturismoCollage.webp";
import imagemCasa from "@/assets/IrawoConcept.webp"; 

const ABOUT_DATA = {
  casa: {
    title: "irawo",
    subtitle: "/ estrela /",
    etymology: "substantivo · do iorubá ìràwò",
    paragraphs: [
      "Somos uma produtora potente que desafia as narrativas tradicionais e cria novas possibilidades de representação. Combinamos cultura e identidade para amplificar e celebrar as vozes pretas.",
      "Como uma estrela-guia, nossa missão é abrir caminhos e iluminar conexões no mercado cultural brasileiro, unindo sensibilidade artística e visão estratégica."
    ]
  },
  fundadora: {
    name: "Sabrina Rosa",
    role: "Fundadora · Diretora, Roteirista e Atriz",
    headline: (
      <>
        Uma trajetória de <span className="italic">36 anos</span> abrindo
        <br />
         caminho para a arte preta periférica.
      </>
    ),
    paragraphs: [
      "Criada na favela do Vidigal e formada no Nós do Morro, consagrou-se historicamente como a SEGUNDA CINEASTA NEGRA a realizar um longa-metragem de ficção no Brasil com o filme 'Vamos Fazer um Brinde'.",
      "Com passagens marcantes como roteirista e atriz por produções de peso da TV Globo, HBO Max, Globoplay e Star+ (como 'Cidade de Deus' e 'Vai na Fé'), lidera a IRAWO com olhar maduro e autoral."
    ]
  },
  movimento: {
    title: "afro",
    subtitle: "/ futurismo /",
    etymology: "gênero, estética e filosofia",
    paragraphs: [
      "Na sua essência, o Afrofuturismo é uma narrativa que apresenta personagens pretos em cenários lúdicos, tecnológicos e multidimensionais, possuindo seus próprios desejos, falhas e aspirações.",
      "Um dos impactos mais significativos desse movimento é a sua capacidade de desencadear conversas profundas sobre raça, resgatar a história ancestral e projetar o amanhã através de estéticas originais e vibrantes."
    ]
  }
};

export const About = () => {
  const [tab, setTab] = useState("casa");

  const tabs = [
    { id: "casa",      label: "A Casa"      },
    { id: "fundadora", label: "A Fundadora" },
    { id: "movimento", label: "Afrofuturismo" }
  ];

  return (
    <section id="sobre" className="py-16 md:py-32 lg:py-44 px-6 lg:px-10 border-t border-border scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        
        {/* Título da seção — visualmente oculto; garante um h2 fixo independente da aba ativa */}
        <h2 className="sr-only">Sobre a IRAWO</h2>

        {/* CABEÇALHO E SELETOR DE ABAS */}
        <Reveal className="flex items-end justify-between flex-wrap gap-6 mb-16 md:mb-20">
          <Eyebrow>Sobre</Eyebrow>

          <div role="tablist" className="flex gap-6 md:gap-8 text-sm">
            {tabs.map((t) => {
              const active = tab === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => setTab(t.id)}
                  role="tab"
                  aria-selected={active}
                  className={`pb-1 border-b transition-all uppercase tracking-widest text-[10px] ${
                    active
                      ? "text-foreground border-primary font-medium"
                      : "text-muted-foreground border-transparent hover:text-foreground"
                  }`}
                >
                  {t.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* EXIBIÇÃO DE CONTEÚDO DINÂMICO */}
        <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-start">
          
          {/* ---- ABA 1: A CASA (AGORA COM GRID INTEGRADO E IMAGEM) ---- */}
          {tab === "casa" && (
            <>
              {/* Lado Esquerdo: Foto Conceitual da Produtora */}
              <div className="md:col-span-5 animate-fade-up space-y-4">
                <div className="relative aspect-[4/5] w-full overflow-hidden border border-border bg-neutral-950">
                  <img 
                    src={imagemCasa} 
                    width="960"
                    height="1001"
                    loading="lazy"
                    decoding="async"
                    alt="Ecossistema e Conceito Estético IRAWO" 
                    className="w-full h-full object-cover object-center filter grayscale contrast-115 hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <div>
                  <h3 className="font-serif-display text-3xl leading-[0.95] tracking-tight">
                    <span className="italic text-foreground">{ABOUT_DATA.casa.title}</span>
                    <span className="text-muted-foreground"> {ABOUT_DATA.casa.subtitle}</span>
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground uppercase tracking-wider">
                    {ABOUT_DATA.casa.etymology}
                  </p>
                </div>
              </div>

              {/* Lado Direito: Textos e Manifesto Institucional */}
              <div className="md:col-span-7 space-y-6 text-lg leading-relaxed text-foreground/90 animate-fade-up flex flex-col justify-between md:min-h-[350px]">
                <div className="space-y-6">
                  {ABOUT_DATA.casa.paragraphs.map((text, i) => <p key={i}>{text}</p>)}
                </div>
                {/* Assinatura poética conceitual simulando o fechamento do manifesto */}
                <p className="text-primary font-serif-display text-2xl leading-snug pt-6 border-t border-border/40 mt-6 italic">
                  Preservando identidades: Fundindo passado, presente e futuro.
                </p>
              </div>
            </>
          )}

          {/* ---- ABA 2: A FUNDADORA ---- */}
          {tab === "fundadora" && (
            <>
              <div className="md:col-span-5 animate-fade-up space-y-4">
                <div className="relative aspect-[4/5] w-full overflow-hidden border border-border bg-neutral-950">
                  <img 
                    src={fotoSabrina} 
                    width="960"
                    height="1270"
                    loading="lazy"
                    decoding="async"
                    alt="Sabrina Rosa - Fundadora da IRAWO" 
                    className="w-full h-full object-cover object-center filter grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <div>
                  <h3 className="text-foreground font-serif-display text-2xl block leading-tight">
                    {ABOUT_DATA.fundadora.name}
                  </h3>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mt-1">
                    {ABOUT_DATA.fundadora.role}
                  </p>
                </div>
              </div>

              <div className="md:col-span-7 space-y-6 text-lg leading-relaxed text-foreground/90 animate-fade-up">
                <p className="font-serif-display text-4xl md:text-5xl leading-[1.05] tracking-tight text-foreground">
                  {ABOUT_DATA.fundadora.headline}
                </p>
                {ABOUT_DATA.fundadora.paragraphs.map((text, i) => <p key={i}>{text}</p>)}
              </div>
            </>
          )}

          {/* ---- ABA 3: AFROFUTURISMO ---- */}
          {tab === "movimento" && (
            <>
              <div className="md:col-span-5 animate-fade-up space-y-4">
                <div className="relative aspect-[4/5] w-full overflow-hidden border border-border bg-neutral-950">
                  <img 
                    src={imagemAfrofuturismo} 
                    width="960"
                    height="1299"
                    loading="lazy"
                    decoding="async"
                    alt="Movimento Afrofuturista - IRAWO" 
                    className="w-full h-full object-cover object-center filter grayscale contrast-115 hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <div>
                  <h3 className="font-serif-display text-3xl leading-[0.95] tracking-tight">
                    <span className="italic text-foreground">{ABOUT_DATA.movimento.title}</span>
                    <span className="text-muted-foreground"> {ABOUT_DATA.movimento.subtitle}</span>
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground uppercase tracking-wider">
                    {ABOUT_DATA.movimento.etymology}
                  </p>
                </div>
              </div>

              <div className="md:col-span-7 space-y-6 text-lg leading-relaxed text-foreground/90 animate-fade-up flex flex-col justify-between md:min-h-[350px]">
                <div className="space-y-6">
                  {ABOUT_DATA.movimento.paragraphs.map((text, i) => <p key={i}>{text}</p>)}
                </div>
                <p className="text-primary font-serif-display text-3xl leading-snug pt-6 italic border-t border-border/40 mt-6">
                  “A arte Afrofuturista é uma ferramenta para a Liberdade.”
                </p>
              </div>
            </>
          )}

        </div>
      </div>
    </section>
  );
};