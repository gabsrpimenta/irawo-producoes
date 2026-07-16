/**
 * Navbar — Menu superior fixo de navegação global.
 * Em telas menores que `md`, os links colapsam num menu hambúrguer
 * (antes, todos os links tentavam caber lado a lado com a logo,
 * espremendo tudo em telas de celular).
 */
import { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#portfolio", label: "Portfólio" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40 px-6 lg:px-10 h-20 flex items-center">
      <div className="max-w-6xl mx-auto w-full flex items-center justify-between">

        {/* Logotipo Minimalista */}
        <a href="#conteudo-principal" className="font-serif-display text-xl tracking-widest text-foreground hover:opacity-80 transition-opacity">
          IRAWO<span className="text-muted-foreground font-sans text-xs tracking-normal ml-1">®</span>
        </a>

        {/* Links de ancoragem interna — visíveis a partir de md */}
        <div className="hidden md:flex items-center gap-10 text-[10px] uppercase tracking-widest">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
              {link.label}
            </a>
          ))}
          <a href="#contato" className="text-foreground border border-border px-4 py-2 hover:bg-foreground hover:text-background hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)] transition-all">
            Contato
          </a>
        </div>

        {/* Botão hambúrguer — visível só abaixo de md */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-controls="menu-mobile"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          className="md:hidden text-foreground p-2 -mr-2"
        >
          {isOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </div>

      {/* Painel do menu mobile — some/aparece conforme isOpen */}
      {isOpen && (
        <div
          id="menu-mobile"
          className="md:hidden absolute top-20 left-0 right-0 bg-background border-b border-border/40 px-6 py-8 flex flex-col gap-6 text-sm uppercase tracking-widest"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setIsOpen(false)}
            className="text-foreground border border-border px-4 py-3 text-center hover:bg-foreground hover:text-background hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)] transition-all"
          >
            Contato
          </a>
        </div>
      )}
    </nav>
  );
};
