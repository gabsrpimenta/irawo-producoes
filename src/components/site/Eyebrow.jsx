/**
 * Eyebrow
 * -------
 * Pequeno rótulo em maiúsculas no estilo "/ Nome da Seção", usado como
 * identificador visual no topo de cada bloco de conteúdo do site
 * (Sobre, Serviços, Portfólio, Contato). Antes esse mesmo trecho de
 * classes Tailwind estava duplicado em 4 componentes diferentes;
 * centralizar aqui facilita manter o estilo consistente no futuro.
 */
export const Eyebrow = ({ children, className = "" }) => (
  <p className={`text-[11px] uppercase tracking-[0.35em] text-muted-foreground ${className}`}>
    / {children}
  </p>
);
