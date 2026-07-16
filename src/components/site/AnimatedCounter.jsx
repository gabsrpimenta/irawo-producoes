import { useEffect, useRef, useState } from "react";
import { useInView } from "@/hooks/useInView";

/**
 * AnimatedCounter
 * ----------------
 * Conta de 0 até o número final quando o elemento entra na tela ao rolar
 * a página, com uma curva de desaceleração suave (rápido no início, indo
 * mais devagar perto do fim — mais natural do que uma contagem linear).
 *
 * Reaproveita o hook useInView (mesmo usado no componente Reveal), que já
 * respeita a preferência de "reduzir movimento": nesse caso, o número
 * aparece direto no valor final, sem nenhuma contagem.
 *
 * A contagem em si roda com requestAnimationFrame (leve, não trava o
 * scroll — mesmo princípio já usado na barra de progresso e no efeito de
 * hover do portfólio) e dispara só uma vez.
 */
export const AnimatedCounter = ({ to, duration = 1600, suffix = "" }) => {
  const [ref, isInView] = useInView({ threshold: 0.4 });
  const [value, setValue] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setValue(to);
      return;
    }

    const start = performance.now();
    const easeOutQuad = (t) => t * (2 - t);
    let frameId;

    const tick = (now) => {
      const elapsed = now - start;
      const progress = Math.min(1, elapsed / duration);
      setValue(Math.round(easeOutQuad(progress) * to));
      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [isInView, to, duration]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
};
