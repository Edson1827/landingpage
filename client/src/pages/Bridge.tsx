import { useEffect } from 'react';

/**
 * BRIDGE PAGE ULTRA SIMPLIFICADA - ZERO FRICÇÃO
 * 
 * Objetivo: Conversão máxima com mínima fricção
 * Carregamento: < 1s
 * Elementos: Logo + Headline + Preço + CTA
 * 
 * Otimizada para TikTok Ads (sem mencionar "rifa", "sorteio", "bilhete")
 */
export default function Bridge() {
  useEffect(() => {
    // TikTok Pixel - ViewContent Event
    if (typeof window !== 'undefined' && (window as any).ttq) {
      (window as any).ttq.track('ViewContent', {
        content_name: 'Kit Mudança de Vida - Bridge',
        content_category: 'Oportunidade',
        value: 9.90,
        currency: 'BRL'
      });
    }

    // Facebook Pixel - ViewContent Event
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'ViewContent', {
        content_name: 'Kit Mudança de Vida - Bridge',
        content_category: 'Oportunidade',
        value: 9.90,
        currency: 'BRL'
      });
    }
  }, []);

  const handleCTAClick = () => {
    // TikTok Pixel
    if (typeof window !== 'undefined' && (window as any).ttq) {
      (window as any).ttq.track('InitiateCheckout', {
        content_name: 'Kit Mudança de Vida',
        content_category: 'Oportunidade',
        value: 9.90,
        currency: 'BRL'
      });
    }

    // Facebook Pixel
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'InitiateCheckout', {
        content_name: 'Kit Mudança de Vida',
        content_category: 'Oportunidade',
        value: 9.90,
        currency: 'BRL'
      });
    }

    // Redirecionar para plataforma de compra
    window.location.href = 'https://92projects.com/kitmudancadevida';
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center space-y-8">
        {/* Logo */}
        <div className="flex justify-center">
          <img 
            src="/logo-92projects.webp" 
            alt="92 Projects" 
            className="h-16 md:h-20 w-auto"
            fetchPriority="high"
          />
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight" style={{color: 'oklch(0.85 0.15 75)'}}>
          R$ 9,90 QUE MUDARAM<br />
          <span className="text-primary">3 VIDAS</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl sm:text-2xl md:text-3xl text-white/90">
          Diogo, Anicrer e Fernando transformaram menos de R$ 10<br className="hidden sm:block" />
          em prêmios de até <span className="text-primary font-bold">R$ 90 mil</span>
        </p>

        {/* Prêmio Visual */}
        <div className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl p-8 border-2 border-primary/50 shadow-2xl shadow-primary/30">
          <div className="space-y-4">
            <p className="text-sm md:text-base text-white/70 uppercase tracking-wider">VOCÊ ESCOLHE O PRÊMIO</p>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-3xl mb-2">🚙</div>
                <p className="text-xs md:text-sm font-bold text-white">HILUX SRV</p>
              </div>
              <div>
                <div className="text-3xl mb-2">🏠</div>
                <p className="text-xs md:text-sm font-bold text-white">APARTAMENTO</p>
              </div>
              <div>
                <div className="text-3xl mb-2">💰</div>
                <p className="text-xs md:text-sm font-bold text-white">R$ 400 MIL</p>
              </div>
            </div>
          </div>
        </div>

        {/* Preço Destaque */}
        <div className="bg-gradient-to-r from-primary/30 to-secondary/30 rounded-2xl p-6 border-2 border-primary shadow-xl shadow-primary/40">
          <p className="text-sm md:text-base text-white/80 mb-2">PARTICIPE POR APENAS</p>
          <div className="text-6xl md:text-7xl font-black text-primary mb-2">R$ 9,90</div>
          <p className="text-base md:text-lg text-white/90">10 números • R$ 0,99 cada</p>
        </div>

        {/* CTA Principal */}
        <button
          onClick={handleCTAClick}
          className="w-full bg-gradient-to-r from-primary to-primary/80 text-black font-black text-2xl md:text-3xl px-12 py-8 rounded-2xl hover:scale-105 transition-transform shadow-2xl shadow-primary/50 uppercase"
        >
          VER COMO FUNCIONA
        </button>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base text-white/70">
          <div className="flex items-center gap-2">
            <span className="text-primary">✓</span>
            <span>Licença 8543.07/2025</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-primary">✓</span>
            <span>+ de R$ 300k Entregues</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-primary">✓</span>
            <span>100% Legal</span>
          </div>
        </div>

        {/* Disclaimer Legal (pequeno) */}
        <p className="text-xs text-white/50 max-w-lg mx-auto">
          Programa autorizado sob licença 8543.07/2025. Proibida a venda para menores de 18 anos.
        </p>
      </div>
    </div>
  );
}
