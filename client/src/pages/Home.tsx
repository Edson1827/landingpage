import { useState } from "react";
import { Trophy, ChevronDown, Minus, Plus, ShoppingCart, Menu, X, Ticket, Gift } from "lucide-react";

export default function Home() {
  const [isPrizesModalOpen, setIsPrizesModalOpen] = useState(false);
  const [isCotasModalOpen, setIsCotasModalOpen] = useState(false);
  const [isGiroModalOpen, setIsGiroModalOpen] = useState(false); // Used for Cotas Premiadas details if needed
  const [selectedPack, setSelectedPack] = useState<number | null>(23); // Default to 23 tickets

  // Pacotes de Bilhetes (Preços Hudema Style)
  const PACKS = [
    { id: 1, count: 23, price: 6.90, popular: false },
    { id: 2, count: 50, price: 15.00, popular: false },
    { id: 3, count: 100, price: 30.00, popular: true }, // Mais Popular
    { id: 4, count: 150, price: 45.00, popular: false },
    { id: 5, count: 200, price: 60.00, popular: false },
    { id: 6, count: 500, price: 150.00, popular: false },
  ];

  // Dados Reais para Cotas Premiadas (Bilhetes Premiados)
  const COTAS_PREMIADAS = [
    { id: 1, ticket: '1234563', name: '1000 no P1X', status: 'Disponível' },
    { id: 2, ticket: '1234567', name: 'IPHONE 17 PRO MAX', status: 'Disponível' },
    { id: 3, ticket: '1827954', name: '1 ANO DE SALÁRIO', status: 'Disponível' },
    { id: 4, ticket: '2207782', name: '1000 no P1X', status: 'Disponível' },
    { id: 5, ticket: '3214117', name: '1000 no P1X', status: 'Disponível' },
  ];

  // Dados Reais para Giro da Sorte (Roletas Instantâneas)
  const GIRO_DA_SORTE = [
    { id: 1, name: '50MIL NO P1X', status: 'Disponível' },
    { id: 2, name: 'IPHONE 17 PRO MAX', status: 'Disponível' },
    { id: 3, name: 'JBL BOMBOX 4', status: 'Disponível' },
  ];

  const handlePackSelect = (count: number) => {
    setSelectedPack(count);
  };

  const getSelectedPrice = () => {
    const pack = PACKS.find(p => p.count === selectedPack);
    return pack ? pack.price.toFixed(2).replace('.', ',') : '0,00';
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

  // Dynamic Checkout Link based on selected quantity
  const PURCHASE_LINK = `https://92projects.com/kitmudancadevida/checkout?numbers_quantity=${selectedPack}`;

  return (
    <div className="min-h-screen bg-[#0f172a] font-['Montserrat',sans-serif] pb-24">
      {/* Header Hudema Style */}
      <header className="bg-black py-3 px-4 flex justify-between items-center border-b border-white/10 sticky top-0 z-30 h-14">
        <img 
          src="/logo-92projects.webp" 
          alt="92 Projects" 
          className="h-6 md:h-8 w-auto object-contain"
        />
        <button className="text-white p-1">
          <Menu className="w-6 h-6" />
        </button>
      </header>

      {/* Hero Image Full Width com Overlay de Conteúdo */}
      <div className="w-full relative">
        <img 
          src="/hero-hilux-new.jpg" 
          alt="Kit Mudança de Vida" 
          className="w-full h-auto object-cover max-h-[35vh] md:max-h-[50vh]"
        />
        
        {/* Overlay Gradiente */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent flex flex-col justify-end px-4 pb-4">
          {/* Badge "Adquira Já" Verde */}
          <div className="inline-block self-start bg-[#22c55e] text-white px-3 py-1 rounded text-[10px] font-bold uppercase mb-2 shadow-lg animate-pulse">
            Adquira Já!
          </div>

          {/* Título Principal */}
          <h1 className="text-lg md:text-3xl font-bold uppercase leading-tight mb-1 text-white text-left drop-shadow-md">
            KIT DOS SONHOS HILUX SRV + APARTAMENTO 100% MOBILIADO OU 400 MIL NO PIX
          </h1>
          
          {/* Licença */}
          <p className="text-gray-400 text-[10px] text-left uppercase drop-shadow-sm">
            LTP - PRC: 2025/01438
          </p>
        </div>
      </div>

      {/* Barra "Meus bilhetes" */}
      <div className="w-full bg-[#0f172a] border-b border-white/5 py-2.5 flex items-center justify-center gap-2 text-white mb-0 cursor-pointer shadow-2xl relative z-10 active:bg-[#1e293b] transition-colors">
        <ShoppingCart className="w-4 h-4" />
        <span className="font-medium text-sm uppercase tracking-wide">Meus bilhetes</span>
      </div>

      <div className="container px-2 max-w-md mx-auto">

        {/* Preço Unitário Centralizado */}
        <div className="flex justify-center items-center gap-2 pt-3 pb-2">
          <span className="text-gray-300 text-sm font-medium">Por apenas</span>
          <div className="bg-black px-4 py-1.5 rounded-lg border border-white/10 shadow-lg">
            <span className="text-white text-lg font-black">R$ 0,30</span>
          </div>
        </div>

        {/* Botão Prêmios Cinza Largo */}
        <button 
          onClick={() => setIsPrizesModalOpen(true)}
          className="w-full bg-[#4b5563] hover:bg-[#374151] text-white font-bold py-2.5 rounded flex items-center justify-center gap-2 shadow-lg border-b-[4px] border-[#1f2937] active:border-b-0 active:translate-y-1 transition-all mb-3 touch-manipulation"
        >
          <Trophy className="w-5 h-5" />
          <span className="text-base uppercase">Prêmios</span>
        </button>

        {/* Frase Motivacional */}
        <p className="text-center text-gray-400 text-xs mb-1 font-medium">
          Quanto mais títulos, mais chances de ganhar!
        </p>

        {/* Grid de Seleção Mobile (3 Colunas) */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          {PACKS.map((pack) => (
            <div 
              key={pack.id}
              onClick={() => handlePackSelect(pack.count)}
              className={`
                relative rounded-xl p-2 text-center cursor-pointer border transition-all h-24 flex flex-col justify-center items-center touch-manipulation shadow-lg overflow-hidden
                ${selectedPack === pack.count 
                  ? 'bg-[#d1fae5] border-green-500' // Verde claro vibrante (Menta) quando selecionado
                  : 'bg-black border-white/10 active:bg-white/5'} // Preto profundo quando não
              `}
            >
              {pack.popular && (
                <div className="absolute top-0 inset-x-0 bg-[#10b981] text-white text-[8px] font-bold py-0.5 uppercase tracking-wide">
                  Mais popular
                </div>
              )}
              <div className={`text-3xl font-extrabold leading-none mb-1 ${selectedPack === pack.count ? 'text-black' : 'text-white'}`}>
                +{pack.count}
              </div>
              <div className={`text-[9px] font-bold uppercase tracking-wider ${selectedPack === pack.count ? 'text-green-800' : 'text-gray-400'}`}>
                SELECIONAR
              </div>
            </div>
          ))}
        </div>

        {/* Contador Manual - Linha Separada */}
        <div className="flex items-center justify-between gap-4 mb-4">
          <button 
            className="w-12 h-12 rounded-full border-2 border-white/20 flex items-center justify-center text-white active:bg-white/10 touch-manipulation bg-[#1e293b]"
            onClick={() => {
              const currentIndex = PACKS.findIndex(p => p.count === selectedPack);
              if (currentIndex > 0) setSelectedPack(PACKS[currentIndex - 1].count);
            }}
          >
            <Minus className="w-6 h-6" />
          </button>
          
          <div className="flex-1 bg-[#1e293b] border border-white/10 rounded-lg h-12 flex items-center justify-center text-white font-bold text-xl shadow-inner">
            {selectedPack}
          </div>
          
          <button 
            className="w-12 h-12 rounded-full border-2 border-white/20 flex items-center justify-center text-white active:bg-white/10 touch-manipulation bg-[#1e293b]"
            onClick={() => {
              const currentIndex = PACKS.findIndex(p => p.count === selectedPack);
              if (currentIndex < PACKS.length - 1) setSelectedPack(PACKS[currentIndex + 1].count);
            }}
          >
            <Plus className="w-6 h-6" />
          </button>
        </div>

        {/* Botão de Compra Final - Linha Separada */}
        <a
          href={PURCHASE_LINK}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleParticipateClick}
          className="w-full bg-[#10b981] text-white font-bold text-base sm:text-lg uppercase h-14 px-4 flex items-center justify-between hover:bg-[#059669] active:bg-[#047857] transition-colors rounded-lg mb-6 shadow-xl border-b-[4px] border-[#065f46] active:border-b-0 active:translate-y-1 whitespace-nowrap"
        >
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
            </div>
            <span>Quero participar</span>
          </div>
          <span>R$ {getSelectedPrice()}</span>
        </a>

        

        {/* Botões Flutuantes (Grupo e WhatsApp) */}
        <div className="fixed bottom-[100px] right-0 flex flex-col gap-2 z-40 items-end">
          <a href="https://chat.whatsapp.com/LZXRg9qGkVS3sfwFYYVHVB" target="_blank" rel="noopener noreferrer" className="bg-[#25d366] text-white px-4 py-2 rounded-l-lg shadow-lg font-bold flex items-center gap-2 text-sm hover:bg-[#20bd5a] transition-colors min-w-[140px]">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
            Grupo
          </a>
          <a href="https://wa.me/5567998406793" target="_blank" rel="noopener noreferrer" className="bg-[#25d366] text-white px-4 py-2 rounded-l-lg shadow-lg font-bold flex items-center gap-2 text-sm hover:bg-[#20bd5a] transition-colors min-w-[140px]">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
            WhatsApp
          </a>
        </div>

        {/* Modal de Prêmios */}
        {isPrizesModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200" onClick={() => setIsPrizesModalOpen(false)}>
            <div className="bg-[#1e293b] w-full max-w-md rounded-xl shadow-2xl overflow-hidden relative animate-in zoom-in-95 duration-200" onClick={e => e.stopPropagation()}>
              <button 
                onClick={() => setIsPrizesModalOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors p-2"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="p-6">
                <div className="flex gap-4 mb-6">
                  <div className="shrink-0">
                    <Trophy className="w-12 h-12 text-yellow-500 drop-shadow-lg" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">Prêmios</h2>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Esses são os prêmios no sorteio <strong className="text-white">Kit Dos Sonhos HILLUX SRV + APARTAMENTO</strong>
                    </p>
                  </div>
                </div>
                <div className="border-t border-dashed border-gray-600 my-4"></div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-[#25d366] font-bold text-4xl leading-none">1º</span>
                    <div>
                      <p className="text-[#25d366] font-medium text-lg leading-tight">
                        HILLUX SRV 4x4 TURBO DIESEL + APARTAMENTO 100% MOBILIADO OU R$ 400 MIL NO PIX
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Modal Cotas Premiadas */}
        {isCotasModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200" onClick={() => setIsCotasModalOpen(false)}>
            <div className="bg-[#1e293b] w-full max-w-md rounded-xl shadow-2xl overflow-hidden relative animate-in zoom-in-95 duration-200" onClick={e => e.stopPropagation()}>
              <button 
                onClick={() => setIsCotasModalOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors p-2"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="p-6">
                <div className="flex gap-4 mb-6">
                  <div className="shrink-0">
                    <div className="relative">
                      <Ticket className="w-12 h-12 text-yellow-400 drop-shadow-[0_0_15px_rgba(250,204,21,0.5)]" />
                      <div className="absolute inset-0 bg-yellow-200 blur-xl opacity-20 animate-pulse"></div>
                    </div>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">Cotas Premiadas</h2>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Bilhetes premiados que valem prêmios instantâneos!
                    </p>
                  </div>
                </div>
                <div className="border-t border-dashed border-gray-600 my-4"></div>
                <div className="space-y-3 max-h-[300px] overflow-y-auto pr-2">
                  {COTAS_PREMIADAS.map((prize) => (
                    <div key={prize.id} className="bg-black/30 p-3 rounded border border-white/5 flex justify-between items-center">
                      <div>
                        <p className="text-white font-bold text-sm">{prize.name}</p>
                        <p className="text-gray-400 text-xs">Bilhete: {prize.ticket}</p>
                      </div>
                      <span className="text-[#25d366] text-xs font-bold bg-[#25d366]/10 px-2 py-1 rounded">
                        {prize.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Modal Giro da Sorte */}
        {isGiroModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200" onClick={() => setIsGiroModalOpen(false)}>
            <div className="bg-[#1e293b] w-full max-w-md rounded-xl shadow-2xl overflow-hidden relative animate-in zoom-in-95 duration-200" onClick={e => e.stopPropagation()}>
              <button 
                onClick={() => setIsGiroModalOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors p-2"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="p-6">
                <div className="flex gap-4 mb-6">
                  <div className="shrink-0">
                    <div className="w-12 h-12 rounded-full border-4 border-yellow-500 flex items-center justify-center animate-spin-slow">
                      <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                    </div>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">Giro da Sorte</h2>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Prêmios extras nas roletas instantâneas!
                    </p>
                  </div>
                </div>
                <div className="border-t border-dashed border-gray-600 my-4"></div>
                <div className="space-y-3 max-h-[300px] overflow-y-auto pr-2">
                  {GIRO_DA_SORTE.map((prize) => (
                    <div key={prize.id} className="bg-black/30 p-3 rounded border border-white/5 flex justify-between items-center">
                      <div>
                        <p className="text-white font-bold text-sm">{prize.name}</p>
                        <p className="text-yellow-500 text-xs font-bold">Roleta Instantânea</p>
                      </div>
                      <span className="text-[#25d366] text-xs font-bold bg-[#25d366]/10 px-2 py-1 rounded">
                        {prize.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Botões Cotas Premiadas e Giro da Sorte (Rodapé) */}
        <div className="grid grid-cols-2 gap-2 mb-8">
          <button 
            onClick={() => setIsCotasModalOpen(true)}
            className="w-full bg-[#10b981] hover:bg-[#059669] text-white font-bold py-2.5 rounded flex items-center justify-center gap-2 shadow-lg border-b-[4px] border-[#047857] active:border-b-0 active:translate-y-1 transition-all touch-manipulation"
          >
            <Ticket className="w-5 h-5" />
            <span className="text-sm uppercase">Cotas Premiadas</span>
          </button>
          <button 
            onClick={() => setIsGiroModalOpen(true)}
            className="w-full bg-[#fbbf24] hover:bg-[#f59e0b] text-black font-bold py-2.5 rounded flex items-center justify-center gap-2 shadow-lg border-b-[4px] border-[#d97706] active:border-b-0 active:translate-y-1 transition-all touch-manipulation"
          >
            <div className="w-5 h-5 rounded-full border-2 border-black flex items-center justify-center animate-spin-slow">
              <span className="w-1 h-1 bg-black rounded-full"></span>
            </div>
            <span className="text-sm uppercase">Giro da Sorte</span>
          </button>
        </div>

        {/* Rodapé Institucional */}
        <div className="text-center border-t border-white/10 pt-8 pb-4">
          <div className="flex justify-center items-center gap-4 mb-4 opacity-50 grayscale">
            <img src="/logo-92projects.webp" alt="92 Projects" className="h-8" />
            <img src="/lotep.png" alt="LOTEP" className="h-8" />
          </div>
          
          <p className="text-gray-500 text-[10px] leading-relaxed mb-4 max-w-2xl mx-auto">
            Este título de loteria está autorizado com base no processo LTP-PRC-2025/01438, registrado pela empresa 92 Projects. Consulte o regulamento completo do produto disponível no site. A comercialização é proibida para menores de 18 anos, em conformidade com a legislação vigente. Sorteios e Entrega dos Prêmios: Todos os sorteios e a entrega dos prêmios serão realizados conforme os critérios estabelecidos no regulamento. Participação em Múltiplos Sorteios: O adquirente do bilhete digital participará de todos os sorteios previstos, mesmo que já tenha sido contemplado anteriormente. Autorização de Uso de Imagem: Ao adquirir o bilhete, o titular autoriza, sem custo adicional, o uso de seu nome, voz e imagem para a divulgação da campanha social associada à promoção.
          </p>
          
          <a href="#" className="text-blue-600 font-bold text-sm uppercase">REGULAMENTO</a>
        </div>
      </div>
    </div>
  );
}
