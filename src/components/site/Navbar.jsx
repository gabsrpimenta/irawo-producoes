/**
 * Navbar — Menu superior fixo de navegação global.
 */
export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40 px-6 lg:px-10 h-20 flex items-center">
      <div className="max-w-6xl mx-auto w-full flex items-center justify-between">
        
        {/* Logotipo Minimalista */}
        <a href="#conteudo-principal" className="font-serif-display text-xl tracking-widest text-foreground hover:opacity-80 transition-opacity">
          IRAWO<span className="text-muted-foreground font-sans text-xs tracking-normal ml-1">®</span>
        </a>

        {/* Links de ancoragem interna */}
        <div className="flex items-center gap-6 md:gap-10 text-[10px] uppercase tracking-widest">
          <a href="#sobre" className="text-muted-foreground hover:text-foreground transition-colors">
            Sobre
          </a>
          <a href="#servicos" className="text-muted-foreground hover:text-foreground transition-colors">
            Serviços
          </a>
          <a href="#portfolio" className="text-muted-foreground hover:text-foreground transition-colors">
            Portfólio
          </a>
          <a href="#contato" className="text-foreground border border-border px-4 py-2 hover:bg-foreground hover:text-background transition-all">
            Contato
          </a>
        </div>

      </div>
    </nav>
  );
};