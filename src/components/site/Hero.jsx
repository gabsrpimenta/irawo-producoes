/**
 * Hero — Opção 2: Fundo Atmosférico (Imagem como textura lateral suave)
 * Fundo Preto + Tipografia Amarela + Colagem como Textura sob o Eixo Criativo
 */
import heroCollage from "@/assets/HeroCollage.webp";

export const Hero = () => {
  return (
    <section id="conteudo-principal" className="relative min-h-screen flex items-center px-6 lg:px-10 pt-32 pb-24 overflow-hidden">
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-12 gap-8 items-center">
        
        {/* BLOCO DA ESQUERDA (md:col-span-8) - Manifesto Textual */}
        <div className="md:col-span-8 space-y-8 z-10">
          <p className="text-[11px] uppercase tracking-[0.4em] text-primary font-medium animate-fade-in">
            Cultura e Futurismo na Diáspora Africana
          </p>
          
          <h1 className="font-serif-display text-[clamp(2.5rem,14vw,6rem)] md:text-[8rem] lg:text-[9.5rem] leading-[0.9] tracking-tight text-balance animate-fade-up">
            IRAWO<br />
            <span className="italic text-muted-foreground">PRODUÇÕES</span>
          </h1>

          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl animate-fade-up">
            Exploramos temas de identidade da Cultura Negra, criando experiências cinematográficas 
            cativantes e impulsionando criadores que moldam o movimento afrofuturista.
          </p>

          <div className="pt-4 animate-fade-up">
            <a
              href="#sobre"
              className="border border-border px-6 py-3 text-[10px] uppercase tracking-widest text-foreground hover:bg-foreground hover:text-background hover:shadow-[0_0_24px_hsl(var(--primary)/0.5)] transition-all duration-300"
            >
              Conhecer a Casa ↓
            </a>
          </div>
        </div>

        {/* BLOCO DA DIREITA (md:col-span-4) - Eixo Lateral com Imagem Envelopada ao Fundo */}
        <div className="md:col-span-4 h-full relative border-l border-border/60 pl-8 flex flex-col justify-center items-end text-right font-serif-display z-10 hidden md:flex min-h-[400px]">
          
          {/* A Colagem funcionando de forma abstrata e imersiva no fundo */}
          <div className="absolute inset-0 -z-10 opacity-20 mix-blend-luminosity pointer-events-none overflow-hidden">
            <img 
              src={heroCollage} 
              width="900"
              height="943"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover" 
              alt="" 
            />
            {/* Máscara de transição para o preto absoluto não quebrar a lateral esquerda */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black/30" />
          </div>

          {/* O Texto do Eixo permanece limpo e intocado na frente */}
          <div className="animate-fade-in">
            <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4">Eixo criativo</p>
            <div className="text-4xl text-foreground/55 italic space-y-2 select-none">
              <p className="hover:text-primary transition-colors duration-300 cursor-default">Diálogo</p>
              <p className="hover:text-primary transition-colors duration-300 cursor-default">Inclusão</p>
              <p className="hover:text-primary transition-colors duration-300 cursor-default">Arte</p>
              <p className="hover:text-primary transition-colors duration-300 cursor-default">Força</p>
            </div>
          </div>
        </div>

      </div>

      {/* Estrela Decorativa */}
      <div className="absolute bottom-10 right-6 lg:right-10 text-primary text-3xl font-serif-display select-none animate-star-glow">
        ✶
      </div>
    </section>
  );
};