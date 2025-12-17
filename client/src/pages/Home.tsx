import { useState, useEffect } from "react";

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedPack, setSelectedPack] = useState<number | null>(100); // Default to popular pack
  
  // Preços e Pacotes
  const TICKET_PRICE = 0.30; // Preço base unitário (referência)
  const PACKS = [
    { id: 1, count: 23, price: 6.90, popular: false },
    { id: 2, count: 50, price: 15.00, popular: false },
    { id: 3, count: 100, price: 30.00, popular: true }, // Mais Popular
    { id: 4, count: 150, price: 45.00, popular: false },
  ];

  const handlePackSelect = (count: number) => {
    setSelectedPack(count);
  };

  const getSelectedPrice = () => {
    const pack = PACKS.find(p => p.count === selectedPack);
    return pack ? pack.price.toFixed(2).replace('.', ',') : '0,00';
  };

  useEffect(() => {
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
        value: PACKS.find(p => p.count === selectedPack)?.price || 0,
        currency: 'BRL'
      });
    }
  };

  const PURCHASE_LINK = 'https://92projects.com/kitmudancadevida';

  return (
    <div className="min-h-screen bg-[#0f172a] text-white font-sans pb-24 md:pb-0">
      {/* Header Minimalista */}
      <header className="fixed top-0 left-0 right-0 bg-[#0f172a]/90 backdrop-blur-md z-50 border-b border-white/5">
        <div className="container py-3 flex justify-between items-center">
          <button onClick={scrollToTop} className="flex items-center gap-2">
            <img 
              src="/logo-92projects.webp" 
              alt="92 Projects" 
              className="h-8 md:h-10 w-auto object-contain"
            />
          </button>
          
          {/* Menu Hambúrguer Simplificado (Visual) */}
          <button className="text-white p-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </header>

      {/* Hero Section Imersiva */}
      <section className="pt-20 pb-8 relative overflow-hidden">
        {/* Background Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] via-transparent to-[#0f172a] z-10 pointer-events-none"></div>
        
        <div className="container relative z-20">
          <div className="flex flex-col items-center text-center">
            
            {/* Imagem Principal Recortada/Integrada */}
            <div className="w-full max-w-4xl mx-auto mb-6 relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              <img 
                src="/hero-kit-800.webp" 
                srcSet="/hero-kit-400.webp 400w, /hero-kit-800.webp 800w, /hero-kit-1200.webp 1200w"
                sizes="(max-width: 640px) 400px, (max-width: 1024px) 800px, 1200px"
                alt="Kit Mudança de Vida" 
                className="relative rounded-2xl shadow-2xl w-full border border-white/10"
                fetchPriority="high"
              />
              
              {/* Badge de Preço Flutuante */}
              <div className="absolute -bottom-4 right-4 md:-bottom-6 md:right-8 bg-green-600 text-white px-4 py-2 md:px-6 md:py-3 rounded-lg shadow-lg transform rotate-2 border-2 border-green-400">
                <p className="text-xs md:text-sm font-bold uppercase tracking-wider">Por apenas</p>
                <p className="text-2xl md:text-4xl font-black">R$ 0,30</p>
              </div>
            </div>

            <h1 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-2 text-white drop-shadow-lg">
              KIT MUDANÇA DE VIDA
              <span className="block text-green-500 text-2xl md:text-4xl mt-1">HILUX SRV + APARTAMENTO</span>
            </h1>
            
            <p className="text-gray-400 text-sm md:text-base mb-8 max-w-xl mx-auto">
              LTP - PRC: 2025/01438 • Sorteio pela Loteria Federal
            </p>

            {/* Seção de Compra - Estilo Hudema */}
            <div className="w-full max-w-3xl mx-auto bg-[#1e293b] rounded-2xl p-6 md:p-8 border border-white/5 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <span className="text-green-500">⚡</span> SELECIONE SEUS BILHETES
                </h3>
                <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded font-bold uppercase">
                  Mais chances
                </span>
              </div>

              {/* Grid de Bilhetes */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-8">
                {PACKS.map((pack) => (
                  <div 
                    key={pack.id}
                    onClick={() => handlePackSelect(pack.count)}
                    className={`
                      relative flex flex-col items-center justify-center p-4 rounded-xl border-2 cursor-pointer transition-all duration-200
                      ${selectedPack === pack.count 
                        ? 'bg-green-600/10 border-green-500 shadow-[0_0_20px_rgba(34,197,94,0.2)] scale-105 z-10' 
                        : 'bg-black/40 border-white/10 hover:border-white/30 hover:bg-white/5'}
                    `}
                  >
                    {pack.popular && (
                      <div className="absolute -top-3 bg-green-500 text-black text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wide shadow-lg">
                        Mais Popular
                      </div>
                    )}
                    <span className="text-3xl md:text-4xl font-black text-white mb-1">+{pack.count}</span>
                    <span className="text-xs text-gray-400 uppercase font-bold">SELECIONAR</span>
                  </div>
                ))}
              </div>

              {/* Input Manual (Visual) */}
              <div className="flex items-center justify-center gap-4 mb-8">
                <button 
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-xl font-bold transition-colors"
                  onClick={() => {
                    const currentIndex = PACKS.findIndex(p => p.count === selectedPack);
                    if (currentIndex > 0) setSelectedPack(PACKS[currentIndex - 1].count);
                  }}
                >
                  -
                </button>
                <div className="bg-black/50 border border-white/10 rounded-lg px-8 py-3 text-2xl font-bold min-w-[120px] text-center">
                  {selectedPack}
                </div>
                <button 
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-xl font-bold transition-colors"
                  onClick={() => {
                    const currentIndex = PACKS.findIndex(p => p.count === selectedPack);
                    if (currentIndex < PACKS.length - 1) setSelectedPack(PACKS[currentIndex + 1].count);
                  }}
                >
                  +
                </button>
              </div>

              {/* Botão de Ação Principal */}
              <a
                href={PURCHASE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleParticipateClick}
                className="block w-full bg-green-600 hover:bg-green-500 text-white text-xl md:text-2xl font-black uppercase py-5 rounded-xl shadow-lg shadow-green-600/20 transition-all transform hover:scale-[1.02] active:scale-[0.98] text-center"
              >
                PARTICIPAR AGORA <span className="ml-2 opacity-80 text-lg font-bold">R$ {getSelectedPrice()}</span>
              </a>
              
              <p className="text-center text-gray-500 text-xs mt-4 flex items-center justify-center gap-1">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                Compra 100% Segura e Processamento Imediato
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Ganhadores - Prova Social */}
      <section className="py-12 bg-[#0f172a] border-t border-white/5">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-black text-center mb-8 uppercase italic">
            <span className="text-green-500">🏆</span> Ganhadores Recentes
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Diogo Aguiar", prize: "R$ 80.000,00", img: "/ganhador2.webp", city: "São Paulo/SP" },
              { name: "Anicrer e Família", prize: "R$ 80.000,00", img: "/ganhador1.webp", city: "Curitiba/PR" },
              { name: "Fernando Souza", prize: "R$ 90.000,00", img: "/dinheiro-100reais.webp", city: "Belo Horizonte/MG" }
            ].map((winner, idx) => (
              <div key={idx} className="bg-[#1e293b] rounded-xl overflow-hidden border border-white/5 shadow-lg group hover:border-green-500/30 transition-colors">
                <div className="aspect-video overflow-hidden relative">
                  <img src={winner.img} alt={winner.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4 pt-12">
                    <p className="text-green-400 font-bold text-sm">GANHADOR VERIFICADO ✓</p>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg text-white">{winner.name}</h3>
                  <p className="text-gray-400 text-sm mb-2">{winner.city}</p>
                  <div className="bg-green-500/10 text-green-400 px-3 py-1 rounded inline-block font-bold text-sm">
                    Prêmio: {winner.prize}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-12 bg-[#0f172a]">
        <div className="container max-w-2xl">
          <h2 className="text-2xl font-black text-center mb-8 uppercase">Dúvidas Frequentes</h2>
          <div className="space-y-3">
            {[
              { q: "Como recebo meus números?", a: "Após o pagamento, seus números são gerados automaticamente e enviados para seu WhatsApp. Você também pode consultá-los aqui no site." },
              { q: "Quando será o sorteio?", a: "O sorteio será realizado no dia 14/01/2025 pela Loteria Federal, garantindo total transparência." },
              { q: "É seguro participar?", a: "Sim! Já entregamos mais de R$ 300.000 em prêmios. Utilizamos gateways de pagamento seguros e auditoria em todos os sorteios." }
            ].map((item, idx) => (
              <div key={idx} className="bg-[#1e293b] rounded-lg border border-white/5 overflow-hidden">
                <button 
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex justify-between items-center p-4 text-left font-bold text-gray-200 hover:bg-white/5 transition-colors"
                >
                  {item.q}
                  <span className={`transform transition-transform ${openFaq === idx ? 'rotate-180' : ''}`}>▼</span>
                </button>
                {openFaq === idx && (
                  <div className="p-4 pt-0 text-gray-400 text-sm leading-relaxed border-t border-white/5 mt-2">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Institucional - Estilo Hudema */}
      <footer className="bg-[#020617] py-12 border-t border-white/5 pb-32 md:pb-12">
        <div className="container text-center">
          <img src="/logo-92projects.webp" alt="92 Projects" className="h-12 mx-auto mb-6 opacity-80 grayscale hover:grayscale-0 transition-all" />
          
          <div className="flex justify-center gap-6 mb-8 opacity-50">
            {/* Placeholders para Logos de Pagamento/Segurança */}
            <div className="h-8 w-12 bg-white/10 rounded"></div>
            <div className="h-8 w-12 bg-white/10 rounded"></div>
            <div className="h-8 w-12 bg-white/10 rounded"></div>
            <div className="h-8 w-12 bg-white/10 rounded"></div>
          </div>

          <p className="text-gray-500 text-xs max-w-3xl mx-auto leading-relaxed mb-4">
            Este título de capitalização está autorizado com base no processo LTP-PRC-2025/01438. Consulte o regulamento completo no site. A comercialização é proibida para menores de 18 anos. Sorteios realizados pela Loteria Federal.
          </p>
          
          <p className="text-gray-600 text-xs">
            © 2025 92 Projects. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* Barra Fixa Mobile - Sticky Footer */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#1e293b] border-t border-white/10 p-4 z-50 md:hidden shadow-[0_-5px_20px_rgba(0,0,0,0.5)]">
        <div className="flex items-center gap-4">
          <div className="flex-1">
            <p className="text-xs text-gray-400 uppercase font-bold">Você selecionou:</p>
            <p className="text-white font-bold text-lg">{selectedPack} Bilhetes</p>
          </div>
          <a
            href={PURCHASE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleParticipateClick}
            className="bg-green-600 text-white font-black uppercase px-6 py-3 rounded-lg shadow-lg shadow-green-600/20 flex items-center gap-2"
          >
            Pagar R$ {getSelectedPrice()}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </a>
        </div>
      </div>
    </div>
  );
}
