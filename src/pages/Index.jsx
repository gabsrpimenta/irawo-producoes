/**
 * Index — A "espinha dorsal" da IRAWO PRODUÇÕES.
 * Organiza e empilha os componentes na ordem narrativa do site.
 */
import { Navbar }   from "@/components/site/Navbar";
import { ScrollProgress } from "@/components/site/ScrollProgress";
import { CustomCursor } from "@/components/site/CustomCursor";
import { IntroLoader } from "@/components/site/IntroLoader";
import { Hero }     from "@/components/site/Hero";
import { Pillars } from "@/components/site/Pillars";
import { Services } from "@/components/site/Services";
import { Feed }     from "@/components/site/Feed";
import { About }    from "@/components/site/About";
import { Contact }  from "@/components/site/Contact";
import { Footer }   from "@/components/site/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Tela de abertura breve com a estrela da marca — aparece só uma vez
          por sessão do navegador, e nunca pra quem prefere reduzir movimento */}
      <IntroLoader />

      {/* Barra fina de progresso de leitura — fixa no topo, acima até da Navbar */}
      <ScrollProgress />

      {/* Cursor customizado — só ativa em desktop (detecta ponteiro fino) */}
      <CustomCursor />

      {/* Link "pular para o conteúdo" — invisível até receber foco de teclado (Tab).
          Ajuda quem navega sem mouse a pular a Navbar fixa e ir direto ao conteúdo. */}
      <a
        href="#conteudo-principal"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:text-sm focus:uppercase focus:tracking-widest"
      >
        Pular para o conteúdo
      </a>

      <Navbar />   {/* Menu superior */}
      <Hero />     {/* Seção de impacto inicial */}
      
      <Pillars />  {/* Eixos de Valor: Propósito, Missão e Valores */}
      
      <Services /> {/* Listagem de serviços (Audiovisual, Palco, Branded) */}
      <Feed />     {/* Portfólio / Trajetória em Tela da Sabrina */}
      <About />    {/* Abas: A Casa, A Fundadora, Afrofuturismo */}
      <Contact />  {/* Informações de contacto oficiais */}
      <Footer />   {/* Rodapé institucional */}
    </main>
  );
};

export default Index;