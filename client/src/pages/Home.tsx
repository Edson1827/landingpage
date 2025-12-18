import { useState } from "react";
import { Trophy, ChevronDown, Minus, Plus, ShoppingCart, Menu, X, Ticket, Gift } from "lucide-react";

export default function Home() {
  const [isPrizesModalOpen, setIsPrizesModalOpen] = useState(false);
  const [isWinnersModalOpen, setIsWinnersModalOpen] = useState(false); // Used for Cotas Premiadas details if needed
  const [selectedPack, setSelectedPack] = useState<number | null>(100); // Default to popular pack (100)

  // Pacotes de Bilhetes (Preços Hudema Style)
  const PACKS = [
    { id: 1, count: 23, price: 6.90, popular: false },
    { id: 2, count: 50, price: 15.00, popular: false },
    { id: 3, count: 100, price: 30.00, popular: true }, // Mais Popular
    { id: 4, count: 150, price: 45.00, popular: false },
    { id: 5, count: 200, price: 60.00, popular: false },
    { id: 6, count: 500, price: 150.00, popular: false },
  ];

  // Cotas Premiadas (Dados Reais 92Projects - Visual Lista Escura)
  const INSTANT_PRIZES = [
    { id: 1, name: "IPHONE 17 PRO MAX", status: "Disponível", ticket: "1234567" },
    { id: 2, name: "1 ANO DE SALÁRIO", status: "Disponível", ticket: "1827954" },
    { id: 3, name: "50 MIL NO PIX", status: "Disponível", ticket: "Roleta" },
    { id: 4, name: "JBL BOOMBOX 4", status: "Disponível", ticket: "Roleta" },
    { id: 5, name: "R$ 1.000,00 NO PIX", status: "Disponível", ticket: "1234563" },
    { id: 6, name: "R$ 1.000,00 NO PIX", status: "Disponível", ticket: "2207782" },
    { id: 7, name: "R$ 1.000,00 NO PIX", status: "Disponível", ticket: "3214117" },
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

  // Placeholder para links de checkout
  const PURCHASE_LINK = 'https://92projects.com/kitmudancadevida';

  return (
    <div className="min-h-screen bg-[#0f172a] text-white font-sans pb-24">
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
      <div className="w-full bg-[#0f172a] border-b border-white/5 py-3 flex items-center justify-center gap-2 text-white mb-2 cursor-pointer shadow-2xl relative z-10 active:bg-[#1e293b] transition-colors">
        <ShoppingCart className="w-4 h-4" />
        <span className="font-medium text-sm uppercase tracking-wide">Meus bilhetes</span>
      </div>

      <div className="container px-2 max-w-md mx-auto">

        {/* Preço Unitário Centralizado */}
        <div className="flex justify-center items-center gap-3 mb-2">
          <span className="text-gray-300 text-sm font-medium">Por apenas</span>
          <div className="bg-black px-4 py-1.5 rounded-lg border border-white/10 shadow-lg">
            <span className="text-white text-lg font-black">R$ 0,30</span>
          </div>
        </div>

        {/* Botão "Prêmios" Cinza Largo */}
        <button 
          onClick={() => setIsPrizesModalOpen(true)}
          className="w-full bg-[#4b5563] hover:bg-[#374151] text-white font-bold py-3 rounded flex items-center justify-center gap-2 shadow-md border-b-4 border-[#374151] active:border-b-0 active:translate-y-1 transition-all mb-4 touch-manipulation"
        >
          <Trophy className="w-5 h-5" />
          <span className="text-base uppercase">Prêmios</span>
        </button>

        {/* Frase Motivacional */}
        <p className="text-center text-gray-400 text-xs mb-4 font-medium">
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
          className="w-full bg-[#10b981] text-white font-bold text-base sm:text-lg uppercase h-14 px-4 flex items-center justify-between hover:bg-[#059669] active:bg-[#047857] transition-colors rounded-lg mb-6 shadow-lg border-b-4 border-[#047857] active:border-b-0 active:translate-y-1 whitespace-nowrap"
        >
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
            </div>
            <span>Quero participar</span>
          </div>
          <span>R$ {getSelectedPrice()}</span>
        </a>

        {/* Cotas Premiadas (Lista Estilo Hudema) */}
        <div className="space-y-3 mb-8">
          <div className="flex items-center gap-2 mb-2">
             <Ticket className="w-5 h-5 text-yellow-500" />
             <h3 className="text-white font-bold text-lg">Cotas Premiadas</h3>
          </div>
          
          <div className="space-y-2">
             {INSTANT_PRIZES.slice(0, 3).map((prize) => (
               <div key={prize.id} className="w-full bg-[#1e293b] border border-white/10 rounded px-4 py-3 flex justify-between items-center">
                  <div className="flex flex-col items-start">
                    <span className="text-gray-300 font-bold text-sm uppercase bg-gray-700/50 px-2 py-1 rounded mb-1">{prize.name}</span>
                    <span className="text-gray-500 text-xs">Bilhete: {prize.ticket}</span>
                  </div>
                  <span className="text-[#25d366] text-xs font-bold bg-[#25d366]/10 px-2 py-1 rounded border border-[#25d366]/20">
                    {prize.status}
                  </span>
               </div>
             ))}
             
             <button 
               onClick={() => setIsWinnersModalOpen(true)}
               className="w-full text-center text-[#10b981] font-bold text-sm py-2 flex items-center justify-center gap-1 hover:underline"
             >
               <ChevronDown className="w-4 h-4" />
               Ver todas as cotas
             </button>
          </div>
        </div>

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

        {/* Modal Cotas Premiadas (Lista Completa) */}
        {isWinnersModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200" onClick={() => setIsWinnersModalOpen(false)}>
            <div className="bg-[#1e293b] w-full max-w-md rounded-xl shadow-2xl overflow-hidden relative animate-in zoom-in-95 duration-200" onClick={e => e.stopPropagation()}>
              <button 
                onClick={() => setIsWinnersModalOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors p-2"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="p-6">
                <div className="flex gap-4 mb-6">
                  <div className="shrink-0">
                    <Ticket className="w-12 h-12 text-blue-500 drop-shadow-lg" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">Cotas Premiadas</h2>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Confira os números da sorte que valem prêmios instantâneos!
                    </p>
                  </div>
                </div>
                <div className="border-t border-dashed border-gray-600 my-4"></div>
                <div className="space-y-3 max-h-[300px] overflow-y-auto pr-2">
                  {INSTANT_PRIZES.map((prize) => (
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

        {/* Redes Sociais (Ícones Menores) */}
        <div className="flex justify-center gap-4 mb-8">
          <a href="#" className="w-10 h-10 bg-[#3b5998] rounded-full flex items-center justify-center text-white hover:opacity-90 transition-opacity">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
          <a href="#" className="w-10 h-10 bg-[#1da1f2] rounded-full flex items-center justify-center text-white hover:opacity-90 transition-opacity">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
          </a>
          <a href="#" className="w-10 h-10 bg-[#0088cc] rounded-full flex items-center justify-center text-white hover:opacity-90 transition-opacity">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
          </a>
          <a href="#" className="w-10 h-10 bg-[#25d366] rounded-full flex items-center justify-center text-white hover:opacity-90 transition-opacity">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
          </a>
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
