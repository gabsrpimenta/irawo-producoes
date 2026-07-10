import { useInView } from "@/hooks/useInView";

/**
 * Reveal
 * ------
 * Envolve qualquer conteúdo e faz ele "surgir" suavemente (opacidade +
 * leve deslocamento vertical) quando entra na tela ao rolar a página —
 * em vez de já aparecer pronto no carregamento.
 *
 * Funciona igual em mobile e desktop, já que é baseado em viewport
 * (IntersectionObserver), não em mouse/hover.
 *
 * `delay` (em ms) permite escalonar vários itens em cascata — por
 * exemplo, os 3 pilares ou os grupos de serviço surgindo um pouco depois
 * do outro, em vez de todos ao mesmo tempo.
 */
export const Reveal = ({ children, className = "", delay = 0, as: Tag = "div" }) => {
  const [ref, isInView] = useInView();

  return (
    <Tag
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
      style={{ transitionDelay: isInView ? `${delay}ms` : "0ms" }}
    >
      {children}
    </Tag>
  );
};
