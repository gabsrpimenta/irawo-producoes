import { useEffect, useRef, useState } from "react";

/**
 * useParallax
 * ------------
 * Move um elemento verticalmente num ritmo levemente diferente do resto
 * da página conforme o usuário rola — dá sensação de profundidade.
 *
 * `speed` controla a intensidade: valores pequenos (ex.: 0.08–0.15) dão
 * um efeito sutil; valores maiores ficam mais dramáticos (e mais fáceis
 * de errar a mão). O elemento precisa estar dentro de um container com
 * `overflow: hidden`, senão a imagem "vaza" pra fora da caixa ao se
 * mover.
 *
 * Respeita "reduzir movimento" — nesse caso, o elemento fica parado
 * (offset sempre 0), já que parallax é um efeito clássico de enjoo pra
 * quem tem sensibilidade vestibular.
 *
 * Atualização com throttle via requestAnimationFrame, e usa o evento
 * "scroll" com `passive: true` — leve o suficiente pra não travar o
 * scroll em celulares mais simples.
 */
export const useParallax = (speed = 0.12) => {
  const ref = useRef(null);
  const [offset, setOffset] = useState(0);
  const rafId = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const update = () => {
      rafId.current = null;
      const node = ref.current;
      if (!node) return;

      const rect = node.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      const elementCenter = rect.top + rect.height / 2;
      const distance = viewportCenter - elementCenter;

      setOffset(distance * speed);
    };

    const handleScroll = () => {
      if (rafId.current !== null) return;
      rafId.current = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (rafId.current !== null) cancelAnimationFrame(rafId.current);
    };
  }, [speed]);

  return [ref, offset];
};
