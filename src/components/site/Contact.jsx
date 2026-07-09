/**
 * Contact — Seção de canais de atendimento direto e localização da IRAWO.
 * Configurada com links diretos para WhatsApp, Instagrams, E-mail e Google Maps.
 */
import { Eyebrow } from "./Eyebrow";

export const Contact = () => {
  // Configuração dos links diretos de redirecionamento oficiais
  const WHATSAPP_LINK = "https://wa.me/5521972288258?text=Olá,%20Sabrina!%20Gostaria%20de%20conhecer%20mais%20sobre%20os%20serviços%20da%20IRAWO%20Produções.";
  const INSTAGRAM_IRAWO_LINK = "https://www.instagram.com/irawo.prod/";
  const INSTAGRAM_SABRINA_LINK = "https://www.instagram.com/sabrinarosarm/";
  
  // NOVO: Link para abrir o e-mail com assunto pré-definido
  const EMAIL_LINK = "mailto:irawoproducoes@gmail.com?subject=Contato%20Institucional%20-%20IRAWO%20Produções";
  
  // NOVO: Link de busca do Google Maps para o Vidigal
  const MAPS_LINK = "https://www.google.com/maps/search/?api=1&query=Vidigal,+Rio+de+Janeiro,+Brasil";

  return (
    <section id="contato" className="py-16 md:py-24 lg:py-32 px-6 lg:px-10 border-t border-border bg-neutral-950/20">
      <div className="max-w-6xl mx-auto">
        
        <div className="grid md:grid-cols-12 gap-12 md:gap-16">
          
          {/* Lado Esquerdo: Chamada de Ação */}
          <div className="md:col-span-5 space-y-4">
            <Eyebrow>Conexões</Eyebrow>
            <h2 className="font-serif-display text-4xl md:text-5xl tracking-tight text-foreground">
              Vamos construir o <span className="italic">futuro</span> juntos.
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              Entre em contato para alinhar novos roteiros, parcerias de branded content ou direções lúdicas para palcos.
            </p>
          </div>

          {/* Lado Direito: Canais de Comunicação Oficial com Links */}
          <div className="md:col-span-7 grid sm:grid-cols-2 gap-8 pt-6 md:pt-0">
            
            {/* Bloco: E-mail (REDIRECIONAMENTO ATIVO) */}
            <div className="space-y-1">
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground block">
                E-mail Institucional
              </span>
              <a 
                href={EMAIL_LINK}
                className="text-base text-foreground font-mono border-b border-transparent hover:border-primary hover:text-primary transition-all inline-block select-all"
                title="Enviar um e-mail para a IRAWO"
              >
                irawoproducoes@gmail.com ↗
              </a>
            </div>

            {/* Bloco: Telefone/WhatsApp */}
            <div className="space-y-1">
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground block">
                Telefone Comercial
              </span>
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="text-base text-foreground font-mono border-b border-transparent hover:border-primary hover:text-primary transition-all inline-block"
                title="Chamar no WhatsApp"
              >
                +55 (21) 97228-8258 ↗
              </a>
            </div>

            {/* Bloco: Origem (REDIRECIONAMENTO ATIVO) */}
            <div className="space-y-1">
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground block">
                Base criativa
              </span>
              <a 
                href={MAPS_LINK}
                target="_blank"
                rel="noreferrer"
                className="text-base text-foreground border-b border-transparent hover:border-primary hover:text-primary transition-all inline-block"
                title="Ver localização no Google Maps"
              >
                Vidigal — Rio de Janeiro, Brasil ↗
              </a>
            </div>

            {/* Bloco: Redes Sociais (Instagram Produtora e Fundadora) */}
            <div className="space-y-3">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground block">
                  Instagram Produtora
                </span>
                <a 
                  href={INSTAGRAM_IRAWO_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="text-base text-foreground border-b border-transparent hover:border-primary hover:text-primary transition-all inline-block"
                  title="Abrir Instagram da IRAWO"
                >
                  @irawo.prod ↗
                </a>
              </div>

              <div>
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground block">
                  Instagram Fundadora
                </span>
                <a 
                  href={INSTAGRAM_SABRINA_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="text-base text-foreground border-b border-transparent hover:border-primary hover:text-primary transition-all inline-block"
                  title="Abrir Instagram da Sabrina Rosa"
                >
                  @sabrinarosarm ↗
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};