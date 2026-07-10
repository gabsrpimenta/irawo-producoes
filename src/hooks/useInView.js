import { useEffect, useRef, useState } from "react";

/**
 * useInView
 * ---------
 * Detecta quando um elemento entra na área visível da tela, usando
 * IntersectionObserver — leve e nativo do navegador, ao contrário de
 * escutar o evento "scroll" a cada pixel rolado (que pesa bastante,
 * principalmente no celular).
 *
 * Dispara só uma vez: depois que o elemento aparece na tela, ele fica
 * "revelado" mesmo que role pra fora e volte — evita um efeito repetitivo
 * de pisca-pisca ao subir e descer a página.
 *
 * Respeita a preferência de sistema "reduzir movimento" (comum em quem
 * tem enjoo/sensibilidade a animações) — nesse caso, mostra o conteúdo
 * direto, sem nenhuma animação.
 */
export const useInView = (options = {}) => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px", ...options }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return [ref, isInView];
};
