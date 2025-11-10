import { useState, useEffect } from "react";

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    // Facebook Pixel - ViewContent Event
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'ViewContent', {
        content_name: 'Kit Mudança de Vida',
        content_category: 'Rifa',
        value: 0.99,
        currency: 'BRL'
      });
    }

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-on-scroll');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Facebook Pixel - InitiateCheckout Event
  const handleParticipateClick = () => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'InitiateCheckout', {
        content_name: 'Kit Mudança de Vida',
        content_category: 'Rifa',
        value: 0.99,
        currency: 'BRL'
      });
    }
  };

  const PURCHASE_LINK = 'https://92projects.com/kitmudancadevida';

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-black/95 backdrop-blur-sm z-50">
        <div className="container py-3 md:py-4 flex justify-between items-center gap-2 md:gap-4">
          <button
            onClick={scrollToTop}
            className="cursor-pointer hover:opacity-80 transition-opacity flex-shrink-0"
            aria-label="Voltar ao topo"
          >
            <img 
              src="/logo-92projects.webp" 
              alt="92 Projects" 
              className="h-8 md:h-12 w-auto object-contain"
            />
          </button>
          <a 
            href="https://instagram.com/92.projects" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-primary transition-colors flex-shrink-0"
            aria-label="Instagram @92.projects"
          >
            <svg className="w-6 h-6 md:w-7 md:h-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 md:pt-28 pb-12 md:pb-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-4 md:space-y-6">
              <div className="inline-block bg-primary/20 px-4 py-2 rounded-full mb-2">
                <span className="text-primary font-bold text-sm md:text-base">🏆 4ª EDIÇÃO</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight" style={{color: 'oklch(0.85 0.15 75)'}}>
                KIT MUDANÇA DE VIDA OU 400 MIL NA SUA CONTA
              </h1>
              
              <p className="text-xl sm:text-2xl md:text-3xl" style={{color: 'oklch(0.9 0.1 75)'}}>
                Pacote promocional a partir de <span className="text-primary font-bold">R$ 0,99</span> por bilhete
              </p>
              
              <p className="text-lg sm:text-xl text-white font-semibold">
                ✨ Você escolhe o prêmio! ✨
              </p>

              <div className="flex flex-wrap gap-3 md:gap-4">
                <div className="bg-secondary/10 rounded-lg px-3 md:px-4 py-2 flex items-center gap-2 text-sm md:text-base">
                  <span className="text-xl md:text-2xl">✅</span>
                  <span className="font-bold whitespace-nowrap">Licença 8543.07/2025</span>
                </div>
                
                <div className="bg-accent/10 rounded-lg px-3 md:px-4 py-2 flex items-center gap-2 text-sm md:text-base">
                  <span className="text-xl md:text-2xl">💰</span>
                  <span className="font-bold whitespace-nowrap">+ de 300k Entregues</span>
                </div>
              </div>

              <a 
                href={PURCHASE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleParticipateClick}
                className="inline-flex items-center justify-center w-full sm:w-auto bg-gradient-to-r from-primary to-primary/80 text-black font-bold text-xl md:text-2xl px-12 md:px-16 py-6 md:py-7 hover:scale-105 transition-transform shadow-2xl shadow-primary/40 rounded-lg"
              >
                PARTICIPAR AGORA
              </a>
            </div>

            <div className="relative">
              <img 
                src="/hero-kit.jpg" 
                alt="Kit Mudança de Vida" 
                className="rounded-2xl shadow-2xl shadow-primary/20 w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Por Que Participar */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-black to-muted/20 scroll-animate">
        <div className="container">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-center mb-3 md:mb-4" style={{color: 'oklch(0.85 0.15 75)'}}>
            POR QUE <span className="text-primary">PARTICIPAR?</span>
          </h2>
          
          <p className="text-center text-lg md:text-xl mb-8 md:mb-12" style={{color: 'oklch(0.75 0.1 75)'}}>
            Sua vida pode mudar com apenas R$ 0,99
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-card/50 rounded-2xl p-6 md:p-8 text-center hover:scale-105 transition-transform">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                <span className="text-3xl md:text-4xl">🏠</span>
              </div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4" style={{color: 'oklch(0.9 0.1 75)'}}>CASA PRÓPRIA</h3>
              <p className="text-sm md:text-base" style={{color: 'oklch(0.7 0.05 75)'}}>
                Realize o sonho da <span className="text-primary font-bold">liberdade financeira</span> com um apartamento quitado
              </p>
            </div>

            <div className="bg-card/50 rounded-2xl p-6 md:p-8 text-center hover:scale-105 transition-transform">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                <span className="text-3xl md:text-4xl">🚗</span>
              </div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4" style={{color: 'oklch(0.9 0.1 75)'}}>HILUX SRV TOP</h3>
              <p className="text-sm md:text-base" style={{color: 'oklch(0.7 0.05 75)'}}>
                Dirija a <span className="font-bold" style={{color: 'oklch(0.85 0.15 75)'}}>Hilux dos seus sonhos</span> e impressione a família
              </p>
            </div>

            <div className="bg-card/50 rounded-2xl p-6 md:p-8 text-center hover:scale-105 transition-transform sm:col-span-2 md:col-span-1">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                <span className="text-3xl md:text-4xl">📈</span>
              </div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4" style={{color: 'oklch(0.9 0.1 75)'}}>MUDANÇA DE VIDA</h3>
              <p className="text-sm md:text-base" style={{color: 'oklch(0.7 0.05 75)'}}>
                Junte-se aos <span className="font-bold" style={{color: 'oklch(0.85 0.15 75)'}}>3 ganhadores</span> que já transformaram suas vidas
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-12 md:py-16 bg-black scroll-animate">
        <div className="container">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-center mb-8 md:mb-12" style={{color: 'oklch(0.85 0.15 75)'}}>
            COMO <span className="text-primary">FUNCIONA?</span>
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 text-2xl md:text-3xl font-bold text-black">
                1
              </div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4" style={{color: 'oklch(0.9 0.1 75)'}}>Escolha Seus Bilhetes</h3>
              <p className="text-sm md:text-base" style={{color: 'oklch(0.7 0.05 75)'}}>
                Selecione quantos bilhetes deseja (10, 25, 50 ou 75). Quanto mais bilhetes, mais chances!
              </p>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 text-2xl md:text-3xl font-bold text-black">
                2
              </div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4" style={{color: 'oklch(0.9 0.1 75)'}}>Pagamento via PIX</h3>
              <p className="text-sm md:text-base" style={{color: 'oklch(0.7 0.05 75)'}}>
                Pague com PIX. Após confirmação, seus números são gerados na hora e você já está participando!
              </p>
            </div>

            <div className="text-center sm:col-span-2 md:col-span-1">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 text-2xl md:text-3xl font-bold text-black">
                3
              </div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4" style={{color: 'oklch(0.9 0.1 75)'}}>Aguarde o Sorteio</h3>
              <p className="text-sm md:text-base" style={{color: 'oklch(0.7 0.05 75)'}}>
                Sorteio 100% legal pela Loteria Federal. Números únicos e intransferíveis!
              </p>
            </div>
          </div>

          <div className="text-center mt-8 md:mt-12">
            <a 
              href={PURCHASE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleParticipateClick}
              className="inline-flex items-center justify-center w-full sm:w-auto bg-gradient-to-r from-primary to-primary/80 text-black font-bold text-xl md:text-2xl px-12 md:px-16 py-6 md:py-7 hover:scale-105 transition-transform shadow-2xl shadow-primary/40 rounded-lg"
            >
              PARTICIPAR AGORA
            </a>
          </div>
        </div>
      </section>

      {/* Ganhadores Reais */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-black to-muted/20 scroll-animate">
        <div className="container">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-center mb-3 md:mb-4" style={{color: 'oklch(0.85 0.15 75)'}}>
            GANHADORES <span className="text-primary">REAIS</span>
          </h2>
          
          <p className="text-center text-lg md:text-xl mb-8 md:mb-12" style={{color: 'oklch(0.75 0.1 75)'}}>
            Já entregamos + de R$ 300.000 em prêmios
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {/* Ganhador 1 - Diogo Aguiar */}
            <div className="bg-card/50 rounded-2xl overflow-hidden hover:scale-105 transition-transform">
              <img 
                src="/ganhador2.jpg" 
                alt="Diogo Aguiar - Ganhador S10" 
                className="w-full h-48 md:h-64 object-cover object-top"
              />
              <div className="p-4 md:p-6">
                <div className="flex items-center gap-2 mb-2 md:mb-3">
                  <span className="text-sm md:text-base" style={{color: 'oklch(0.85 0.15 75)'}}>✓</span>
                  <span className="text-blue-500 font-bold text-xs md:text-sm">GANHADOR VERIFICADO</span>
                </div>
                <h3 className="text-xl md:text-2xl mb-1 md:mb-2">Diogo Aguiar</h3>
                <p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-4">Campo Grande - MS | Campanha #1</p>
                <p className="text-white font-bold text-xl md:text-2xl mb-3 md:mb-4">Camionete S10</p>
                <p className="text-sm md:text-base text-muted-foreground italic">
                  "Sempre sonhei com uma camionete! Agora posso trabalhar e passear com a família!"
                </p>
              </div>
            </div>

            {/* Ganhador 2 - Anicrer e Família */}
            <div className="bg-card/50 rounded-2xl overflow-hidden hover:scale-105 transition-transform">
              <img 
                src="/ganhador1.jpg" 
                alt="Anicrer e Família - Ganhadores R$ 80.000" 
                className="w-full h-48 md:h-64 object-cover"
              />
              <div className="p-4 md:p-6">
                <div className="flex items-center gap-2 mb-2 md:mb-3">
                  <span className="text-sm md:text-base" style={{color: 'oklch(0.85 0.15 75)'}}>✓</span>
                  <span className="text-blue-500 font-bold text-xs md:text-sm">GANHADOR VERIFICADO</span>
                </div>
                <h3 className="text-xl md:text-2xl mb-1 md:mb-2">Anicrer e Família</h3>
                <p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-4">Araçatuba - SP | Campanha #2</p>
                <p className="text-white font-bold text-xl md:text-2xl mb-3 md:mb-4">R$ 80.000 no PIX</p>
                <p className="text-sm md:text-base text-muted-foreground italic">
                  "Realizamos o sonho da casa própria! Muito felizes e gratos pela oportunidade!"
                </p>
              </div>
            </div>

            {/* Ganhador 3 - Fernando de Souza */}
            <div className="bg-card/50 rounded-2xl overflow-hidden hover:scale-105 transition-transform sm:col-span-2 md:col-span-1">
              <img 
                src="/dinheiro-100reais.jpg" 
                alt="Fernando de Souza - Ganhador R$ 90.000" 
                className="w-full h-48 md:h-64 object-cover"
              />
              <div className="p-4 md:p-6">
                <div className="flex items-center gap-2 mb-2 md:mb-3">
                  <span className="text-sm md:text-base" style={{color: 'oklch(0.85 0.15 75)'}}>✓</span>
                  <span className="text-blue-500 font-bold text-xs md:text-sm">GANHADOR VERIFICADO</span>
                </div>
                <h3 className="text-xl md:text-2xl mb-1 md:mb-2">Fernando de Souza</h3>
                <p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-4">Dourados - MS | Campanha #3</p>
                <p className="text-white font-bold text-xl md:text-2xl mb-3 md:mb-4">R$ 90.000 no PIX</p>
                <p className="text-sm md:text-base text-muted-foreground italic">
                  "Não acreditei quando vi o dinheiro na conta! Mudou minha vida completamente!"
                </p>
              </div>
            </div>
          </div>


        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16 bg-black scroll-animate">
        <div className="container max-w-4xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-center mb-8 md:mb-12" style={{color: 'oklch(0.85 0.15 75)'}}>
            PERGUNTAS <span className="text-primary">FREQUENTES</span>
          </h2>

          <div className="space-y-3 md:space-y-4">
            {[
              {
                question: "Como funciona o sorteio?",
                answer: "O sorteio é legalizado pela credenciadora Lotep, garantindo total transparência e legalidade. Seus números são únicos e intransferíveis, vinculados ao seu CPF."
              },
              {
                question: "Vocês entregam os prêmios mesmo?",
                answer: "Sim! Já entregamos mais de R$ 350 mil em prêmios. Todos os ganhadores são verificados e divulgados em nossas redes sociais."
              },
              {
                question: "Como funciona o pagamento?",
                answer: "Aceitamos apenas PIX para garantir agilidade. Após a confirmação do pagamento, seus números são gerados automaticamente na hora e você já está participando do sorteio!"
              },
              {
                question: "É seguro participar?",
                answer: "100% seguro! Possuímos licença oficial 8543.07/2025 e seguimos todas as normas legais. Seus dados são protegidos e o sorteio é legalizado pela credenciadora Lotep."
              },
              {
                question: "Premiação 4ª Edição",
                answer: `**HILUX SRV TOP (Ano 2013)**\n\n• Pneus Yokohama 285/75/17\n• Lift de Suspensão\n• Difusor de escape gringo\n• Ponteira 5"\n• Stage 2\n• ShiftPower\n• Espaçadores AVM 32mm\n\n**APARTAMENTO 40m² com 1 Quarto**\n\nLocalizado próximo à Avenida Afonso Pena - Campo Grande - MS\nMóveis 100% planejados\n\n**Detalhes do Imóvel:**\n• Sala: Sofá 3 lugares, TV 60", Ar 18.000 BTUs, Wi-fi, LED\n• Cozinha: Mesa 4 cadeiras, Forno grill, Bancada mármore, Micro-ondas, Frigobar, Adega, Geladeira duplex, LED\n• Varanda: Vista dos principais pontos da capital, 2 cadeiras, LED\n• Quarto: Cama King Size, Ar 12.000 BTUs, TV 48", LED\n• Closet: Portas de vidro, Gavetas anti-impacto, LED\n• Lavabo personalizado\n\n**Top Compradores:**\n• 1º lugar: CRF 230cc\n• 2º lugar: iPhone 17 Pro Max\n• 3º lugar: JBL Boombox 4`
              }
            ].map((faq, index) => (
              <div 
                key={index}
                className="bg-card/50 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-4 md:p-6 text-left font-bold text-base md:text-lg hover:bg-card/70 transition-colors flex justify-between items-center gap-4"
                >
                  <span className="flex-1">{faq.question}</span>
                  <span className="text-primary text-xl md:text-2xl flex-shrink-0">
                    {openFaq === index ? '−' : '+'}
                  </span>
                </button>
                {openFaq === index && (
                  <div className="px-4 md:px-6 pb-4 md:pb-6 text-sm md:text-base text-muted-foreground whitespace-pre-line">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-black to-primary/5 scroll-animate">
        <div className="container text-center max-w-3xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-6 leading-tight" style={{color: 'oklch(0.85 0.15 75)'}}>
            SUA CHANCE DE MUDAR DE VIDA ESTÁ AQUI
          </h2>
          
          <p className="text-base md:text-xl mb-6 md:mb-8" style={{color: 'oklch(0.75 0.1 75)'}}>
            Não deixe para depois. Participe agora e concorra a prêmios incríveis!
          </p>

          <a 
            href={PURCHASE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleParticipateClick}
            className="inline-flex items-center justify-center w-full sm:w-auto bg-gradient-to-r from-primary to-primary/80 text-black font-bold text-xl md:text-2xl px-12 md:px-16 py-6 md:py-7 hover:scale-105 transition-transform shadow-2xl shadow-primary/40 mb-6 md:mb-8 rounded-lg"
          >
            PARTICIPAR AGORA
          </a>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-xs md:text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="text-primary">✓</span>
              Pagamento via PIX
            </span>
            <span className="flex items-center gap-2">
              <span className="text-primary">✓</span>
              Sorteio pela Loteria Federal
            </span>
            <span className="flex items-center gap-2">
              <span className="text-primary">✓</span>
              Licença 8543.07/2025
            </span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-6 md:py-8">
        <div className="container text-center text-muted-foreground text-xs md:text-sm">
          <p className="mb-2">© 2024 92 Projects - Todos os direitos reservados</p>
          <p>Sorteio autorizado sob licença 8543.07/2025</p>
        </div>
      </footer>
    </div>
  );
}
