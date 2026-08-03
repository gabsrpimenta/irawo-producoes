import { useEffect, useState } from "react";

const SESSION_KEY = "irawo-intro-shown";
const VISIBLE_MS = 1200; // tempo que a tela fica visível antes de começar a sumir
const FADE_MS = 500;     // duração da transição de saída

/**
 * IntroLoader
 * ------------
 * Tela de abertura breve (~1.7s no total) com a estrela da marca antes do
 * site aparecer — reforça a identidade "estrela-guia" da IRAWO logo na
 * entrada.
 *
 * Cuidados importantes:
 * - Nunca trava ninguém esperando: some sozinha, sem exigir clique.
 * - Só aparece UMA VEZ por sessão do navegador (sessionStorage) — quem já
 *   viu não precisa ver de novo se voltar a carregar a página na mesma
 *   visita.
 * - Quem tem "reduzir movimento" ativado no sistema não vê a tela de
 *   intro — vai direto pro conteúdo, sem atraso nem animação.
 * - `aria-hidden`: é um elemento puramente decorativo/visual; leitores de
 *   tela não precisam esperar por ela pra começar a navegar o conteúdo.
 * - Bloqueia o scroll da página só enquanto está visível, e libera assim
 *   que termina — evita ver o conteúdo "pulando" atrás da tela.
 */
export const IntroLoader = () => {
  const [phase, setPhase] = useState(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const alreadyShown = sessionStorage.getItem(SESSION_KEY) === "true";
    return prefersReducedMotion || alreadyShown ? "done" : "visible";
  });

  useEffect(() => {
    if (phase !== "visible") return;

    document.body.style.overflow = "hidden";
    sessionStorage.setItem(SESSION_KEY, "true");

    const timer = setTimeout(() => setPhase("fading"), VISIBLE_MS);
    return () => clearTimeout(timer);
  }, [phase]);

  useEffect(() => {
    if (phase !== "fading") return;

    const timer = setTimeout(() => {
      setPhase("done");
      document.body.style.overflow = "";
    }, FADE_MS);
    return () => clearTimeout(timer);
  }, [phase]);

  if (phase === "done") return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[200] flex items-center justify-center bg-background transition-opacity ease-out ${
        phase === "fading" ? "opacity-0" : "opacity-100"
      }`}
      style={{ transitionDuration: `${FADE_MS}ms` }}
    >
      <div className="text-primary text-5xl md:text-6xl font-serif-display animate-intro-star">
        ✶
      </div>
    </div>
  );
};
