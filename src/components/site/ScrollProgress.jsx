import { useEffect, useRef, useState } from "react";

/**
 * ScrollProgress
 * ---------------
 * Linha fina no topo da página que se preenche conforme o usuário rola —
 * indicador visual de "quanto falta" para o fim do conteúdo.
 *
 * Usa o evento "scroll" com throttle via requestAnimationFrame (no máx.
 * uma atualização por frame de tela) e "passive: true" — isso evita que
 * o navegador segure o scroll esperando o JS terminar, o que é
 * especialmente importante no celular, onde travar o scroll é bem
 * perceptível.
 */
export const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);
  const rafId = useRef(null);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, pct)));
      rafId.current = null;
    };

    const handleScroll = () => {
      if (rafId.current !== null) return;
      rafId.current = requestAnimationFrame(updateProgress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    updateProgress(); // valor inicial, caso a página já carregue rolada (ex.: âncora)

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (rafId.current !== null) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 h-[2px] z-[60] bg-transparent"
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Progresso de leitura da página"
    >
      <div
        className="h-full bg-primary transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};
