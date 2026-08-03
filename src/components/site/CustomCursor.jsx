import { useEffect, useRef, useState } from "react";

/**
 * CustomCursor
 * -------------
 * Substitui o cursor do sistema por um pontinho dourado que segue o
 * mouse e cresce sutilmente ao passar sobre links/botões.
 *
 * Ativado SÓ em dispositivos com ponteiro fino (mouse/trackpad),
 * detectado via `matchMedia("(pointer: fine)")`. Em celular/tablet
 * (ponteiro grosso/toque), o componente nem chega a montar — retorna
 * `null` direto, sem nenhum listener, sem nenhum custo, e o toque
 * nativo continua funcionando exatamente como sempre funcionou.
 *
 * A posição é atualizada direto via ref.style (não via setState do
 * React), com throttle por requestAnimationFrame — evita um re-render
 * do componente a cada pixel de movimento do mouse, que seria
 * desnecessariamente pesado numa atualização tão frequente.
 */
export const CustomCursor = () => {
  const dotRef = useRef(null);
  const rafId = useRef(null);
  const [enabled, setEnabled] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!isFinePointer) return; // dispositivo de toque: não faz nada

    setEnabled(true);
    document.body.classList.add("custom-cursor-active");

    const pos = { x: -100, y: -100 };

    const handleMouseMove = (e) => {
      pos.x = e.clientX;
      pos.y = e.clientY;
      if (rafId.current !== null) return;
      rafId.current = requestAnimationFrame(() => {
        if (dotRef.current) {
          dotRef.current.style.transform =
            `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`;
        }
        rafId.current = null;
      });
    };

    const isInteractive = (el) =>
      el.closest("a, button, [role='button'], input, textarea, select");

    const handleOver = (e) => {
      if (isInteractive(e.target)) setIsHovering(true);
    };
    const handleOut = (e) => {
      if (isInteractive(e.target)) setIsHovering(false);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseover", handleOver);
    document.addEventListener("mouseout", handleOut);

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleOver);
      document.removeEventListener("mouseout", handleOut);
      if (rafId.current !== null) cancelAnimationFrame(rafId.current);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      ref={dotRef}
      aria-hidden="true"
      className={`fixed top-0 left-0 pointer-events-none z-[9998] rounded-full bg-primary transition-[width,height,opacity] duration-200 ease-out ${
        isHovering ? "w-8 h-8 opacity-70" : "w-2.5 h-2.5 opacity-80"
      }`}
    />
  );
};
