/**
 * Footer — Rodapé institucional.
 */
export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-12 px-6 lg:px-10 bg-neutral-950">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-muted-foreground">
        
        {/* Assinatura da marca e propósito */}
        <div className="space-y-1 text-center md:text-left">
          <p className="text-foreground font-serif-display text-sm tracking-widest">
            IRAWO PRODUÇÕES
          </p>
          <p className="text-[11px]">
            Preservando identidades: Fundindo passado, presente e futuro para divertir e educar.
          </p>
        </div>

        {/* Direitos reservados */}
        <div className="text-center md:text-right text-[11px]">
          <p>© {currentYear} IRAWO. Todos os direitos reservados.</p>
        </div>

      </div>
    </footer>
  );
};