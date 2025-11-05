import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const scrollToParticipate = () => {
    window.open('https://rifei.com.br/kitmudancadevida', '_blank');
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-black/95 backdrop-blur-sm z-50">
        <div className="container py-3 md:py-4 flex justify-between items-center gap-2">
          <img 
            src="/logo-92projects.jpg" 
            alt="92 Projects" 
            className="h-8 md:h-12 w-auto rounded flex-shrink-0"
          />
          <Button 
            onClick={scrollToParticipate}
            className="bg-gradient-to-r from-primary to-primary/80 text-black font-bold px-3 md:px-6 py-2 text-sm md:text-base hover:scale-105 transition-transform flex-shrink-0"
          >
            PARTICIPAR
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 md:pt-28 pb-12 md:pb-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-4 md:space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
                GANHE HILUX SRV + APÊ OU R$ 400 MIL
              </h1>
              
              <p className="text-xl sm:text-2xl md:text-3xl">
                Por apenas <span className="text-primary font-bold">R$ 0,99</span> por bilhete
              </p>
              
              <p className="text-lg sm:text-xl text-secondary">
                ✨ Você escolhe o prêmio! ✨
              </p>

              <div className="flex flex-wrap gap-3 md:gap-4">
                <div className="bg-primary/10 rounded-lg px-3 md:px-4 py-2 flex items-center gap-2 text-sm md:text-base">
                  <span className="text-xl md:text-2xl">🏆</span>
                  <span className="font-bold whitespace-nowrap">4ª EDIÇÃO</span>
                </div>
                
                <div className="bg-secondary/10 rounded-lg px-3 md:px-4 py-2 flex items-center gap-2 text-sm md:text-base">
                  <span className="text-xl md:text-2xl">✅</span>
                  <span className="font-bold whitespace-nowrap">Licença 83.027/2023</span>
                </div>
                
                <div className="bg-accent/10 rounded-lg px-3 md:px-4 py-2 flex items-center gap-2 text-sm md:text-base">
                  <span className="text-xl md:text-2xl">💰</span>
                  <span className="font-bold whitespace-nowrap">R$ 250k+ Entregues</span>
                </div>
              </div>

              <Button 
                onClick={scrollToParticipate}
                size="lg"
                className="w-full md:w-auto bg-gradient-to-r from-primary to-primary/80 text-black font-bold text-lg md:text-xl px-8 md:px-12 py-5 md:py-6 hover:scale-105 transition-transform shadow-lg shadow-primary/30"
              >
                QUERO PARTICIPAR AGORA
              </Button>
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
      <section className="py-12 md:py-16 bg-gradient-to-b from-black to-muted/20">
        <div className="container">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-center mb-3 md:mb-4">
            POR QUE <span className="text-primary">PARTICIPAR?</span>
          </h2>
          
          <p className="text-center text-lg md:text-xl mb-8 md:mb-12 text-muted-foreground">
            Sua vida pode mudar com apenas R$ 0,99
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-card/50 rounded-2xl p-6 md:p-8 text-center hover:scale-105 transition-transform">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                <span className="text-3xl md:text-4xl">🏠</span>
              </div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">CASA PRÓPRIA</h3>
              <p className="text-sm md:text-base text-muted-foreground">
                Realize o sonho da <span className="text-primary font-bold">liberdade financeira</span> com um apartamento quitado
              </p>
            </div>

            <div className="bg-card/50 rounded-2xl p-6 md:p-8 text-center hover:scale-105 transition-transform">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                <span className="text-3xl md:text-4xl">🚗</span>
              </div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">CARRO ZERO</h3>
              <p className="text-sm md:text-base text-muted-foreground">
                Dirija a <span className="text-secondary font-bold">Hilux dos seus sonhos</span> e impressione a família
              </p>
            </div>

            <div className="bg-card/50 rounded-2xl p-6 md:p-8 text-center hover:scale-105 transition-transform sm:col-span-2 md:col-span-1">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                <span className="text-3xl md:text-4xl">📈</span>
              </div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">MUDANÇA DE VIDA</h3>
              <p className="text-sm md:text-base text-muted-foreground">
                Junte-se aos <span className="text-accent font-bold">3 ganhadores</span> que já transformaram suas vidas
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-12 md:py-16 bg-black">
        <div className="container">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-center mb-8 md:mb-12">
            COMO <span className="text-primary">FUNCIONA?</span>
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 text-2xl md:text-3xl font-bold text-black">
                1
              </div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Escolha Seus Bilhetes</h3>
              <p className="text-sm md:text-base text-muted-foreground">
                Selecione quantos bilhetes deseja (10, 25, 50 ou 75). Quanto mais bilhetes, mais chances!
              </p>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 text-2xl md:text-3xl font-bold text-black">
                2
              </div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Pagamento Seguro</h3>
              <p className="text-sm md:text-base text-muted-foreground">
                Pague com PIX, cartão ou boleto. Números enviados na hora por WhatsApp!
              </p>
            </div>

            <div className="text-center sm:col-span-2 md:col-span-1">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 text-2xl md:text-3xl font-bold text-black">
                3
              </div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Aguarde o Sorteio</h3>
              <p className="text-sm md:text-base text-muted-foreground">
                Sorteio 100% legal pela Loteria Federal. Números únicos e intransferíveis!
              </p>
            </div>
          </div>

          <div className="text-center mt-8 md:mt-12">
            <Button 
              onClick={scrollToParticipate}
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-primary to-primary/80 text-black font-bold text-lg md:text-xl px-8 md:px-12 py-5 md:py-6 hover:scale-105 transition-transform shadow-lg shadow-primary/30"
            >
              QUERO PARTICIPAR AGORA
            </Button>
          </div>
        </div>
      </section>

      {/* Ganhadores Reais */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-black to-muted/20">
        <div className="container">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-center mb-3 md:mb-4">
            GANHADORES <span className="text-primary">REAIS</span>
          </h2>
          
          <p className="text-center text-lg md:text-xl mb-8 md:mb-12 text-muted-foreground">
            Já entregamos R$ 250.000+ em prêmios
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {/* Ganhador 1 - Digo Aguiar */}
            <div className="bg-card/50 rounded-2xl overflow-hidden hover:scale-105 transition-transform">
              <img 
                src="/ganhador3.jpg" 
                alt="Digo Aguiar - Ganhador S10" 
                className="w-full h-48 md:h-64 object-cover"
              />
              <div className="p-4 md:p-6">
                <div className="flex items-center gap-2 mb-2 md:mb-3">
                  <span className="text-primary text-sm md:text-base">✓</span>
                  <span className="text-primary font-bold text-xs md:text-sm">GANHADOR VERIFICADO</span>
                </div>
                <h3 className="text-xl md:text-2xl mb-1 md:mb-2">Digo Aguiar</h3>
                <p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-4">Campo Grande - MS | Campanha #1</p>
                <p className="text-primary font-bold text-xl md:text-2xl mb-3 md:mb-4">Camionete S10</p>
                <p className="text-sm md:text-base text-muted-foreground italic">
                  "Sempre sonhei com uma camionete! Agora posso trabalhar e passear com a família!"
                </p>
              </div>
            </div>

            {/* Ganhador 2 - Anicrer e Família */}
            <div className="bg-card/50 rounded-2xl overflow-hidden hover:scale-105 transition-transform">
              <img 
                src="/ganhador2.jpg" 
                alt="Anicrer e Família - Ganhadores R$ 80.000" 
                className="w-full h-48 md:h-64 object-cover"
              />
              <div className="p-4 md:p-6">
                <div className="flex items-center gap-2 mb-2 md:mb-3">
                  <span className="text-secondary text-sm md:text-base">✓</span>
                  <span className="text-secondary font-bold text-xs md:text-sm">GANHADOR VERIFICADO</span>
                </div>
                <h3 className="text-xl md:text-2xl mb-1 md:mb-2">Anicrer e Família</h3>
                <p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-4">Araçatuba - SP | Campanha #2</p>
                <p className="text-secondary font-bold text-xl md:text-2xl mb-3 md:mb-4">R$ 80.000 no PIX</p>
                <p className="text-sm md:text-base text-muted-foreground italic">
                  "Realizamos o sonho da casa própria! Muito felizes e gratos pela oportunidade!"
                </p>
              </div>
            </div>

            {/* Ganhador 3 - Fernando de Souza */}
            <div className="bg-card/50 rounded-2xl overflow-hidden hover:scale-105 transition-transform sm:col-span-2 md:col-span-1">
              <img 
                src="/ganhador1.jpg" 
                alt="Fernando de Souza - Ganhador R$ 90.000" 
                className="w-full h-48 md:h-64 object-cover"
              />
              <div className="p-4 md:p-6">
                <div className="flex items-center gap-2 mb-2 md:mb-3">
                  <span className="text-accent text-sm md:text-base">✓</span>
                  <span className="text-accent font-bold text-xs md:text-sm">GANHADOR VERIFICADO</span>
                </div>
                <h3 className="text-xl md:text-2xl mb-1 md:mb-2">Fernando de Souza</h3>
                <p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-4">Dourados - MS | Campanha #3</p>
                <p className="text-accent font-bold text-xl md:text-2xl mb-3 md:mb-4">R$ 90.000 no PIX</p>
                <p className="text-sm md:text-base text-muted-foreground italic">
                  "Não acreditei quando vi o dinheiro na conta! Mudou minha vida completamente!"
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-6 md:mt-8">
            <a 
              href="https://instagram.com/92.project" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors text-sm md:text-base"
            >
              <span className="text-xl md:text-2xl">📸</span>
              @92.project - Veja mais ganhadores
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16 bg-black">
        <div className="container max-w-4xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-center mb-8 md:mb-12">
            PERGUNTAS <span className="text-primary">FREQUENTES</span>
          </h2>

          <div className="space-y-3 md:space-y-4">
            {[
              {
                question: "Como funciona o sorteio?",
                answer: "O sorteio é realizado pela Loteria Federal, garantindo total transparência e legalidade. Seus números são únicos e intransferíveis, vinculados ao seu CPF."
              },
              {
                question: "Vocês entregam os prêmios mesmo?",
                answer: "Sim! Já entregamos mais de R$ 250.000 em prêmios nas 3 edições anteriores. Todos os ganhadores são verificados e divulgados em nossas redes sociais."
              },
              {
                question: "Quais formas de pagamento aceitam?",
                answer: "Aceitamos PIX (instantâneo), cartão de crédito e boleto bancário. O PIX é a forma mais rápida - você recebe seus números imediatamente!"
              },
              {
                question: "Quando recebo meus números?",
                answer: "Pagamentos via PIX: números enviados instantaneamente no WhatsApp. Cartão de crédito: em até 24 horas. Boleto: após confirmação bancária (1-3 dias úteis)."
              },
              {
                question: "É seguro participar?",
                answer: "100% seguro! Possuímos licença oficial 83.027/2023 e seguimos todas as normas legais. Seus dados são protegidos e o sorteio é fiscalizado pela Loteria Federal."
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
                  <div className="px-4 md:px-6 pb-4 md:pb-6 text-sm md:text-base text-muted-foreground">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-black to-primary/5">
        <div className="container text-center max-w-3xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-6 leading-tight">
            SUA CHANCE DE MUDAR DE VIDA ESTÁ AQUI
          </h2>
          
          <p className="text-base md:text-xl mb-6 md:mb-8 text-muted-foreground">
            Não deixe para depois. Participe agora e concorra a prêmios incríveis!
          </p>

          <Button 
            onClick={scrollToParticipate}
            size="lg"
            className="w-full sm:w-auto bg-gradient-to-r from-primary to-primary/80 text-black font-bold text-xl md:text-2xl px-12 md:px-16 py-6 md:py-7 hover:scale-105 transition-transform shadow-2xl shadow-primary/40 mb-6 md:mb-8"
          >
            QUERO PARTICIPAR AGORA
          </Button>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-xs md:text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="text-primary">✓</span>
              Pagamento 100% seguro
            </span>
            <span className="flex items-center gap-2">
              <span className="text-primary">✓</span>
              Sorteio pela Loteria Federal
            </span>
            <span className="flex items-center gap-2">
              <span className="text-primary">✓</span>
              Licença 83.027/2023
            </span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-6 md:py-8">
        <div className="container text-center text-muted-foreground text-xs md:text-sm">
          <p className="mb-2">© 2024 92 Projects - Todos os direitos reservados</p>
          <p>Sorteio autorizado sob licença 83.027/2023</p>
        </div>
      </footer>
    </div>
  );
}
