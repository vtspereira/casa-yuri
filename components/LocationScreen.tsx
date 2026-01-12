
import React from 'react';
import { useNavigate } from 'react-router-dom';

const LocationScreen: React.FC = () => {
  const navigate = useNavigate();

  const openGoogleMaps = () => {
    window.open('https://www.google.com/maps/search/?api=1&query=Tv.+Francisco+de+Freitas+Saldanha,+43+-+Boa+Vista,+Curitiba+-+PR,+82560-350', '_blank');
  };

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark pb-24">
      {/* Navbar Minimalista */}
      <header className="sticky top-0 z-[60] bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
          <button onClick={() => navigate('/')} className="flex items-center gap-2 text-text-sub hover:text-primary transition-colors">
            <span className="material-symbols-outlined text-xl">west</span>
            <span className="text-[10px] font-bold uppercase tracking-widest">Voltar</span>
          </button>
          <h1 className="text-sm font-bold uppercase tracking-[0.2em] text-text-main">Localização</h1>
          <div className="w-12"></div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12 space-y-12">
        <section className="text-center space-y-4">
          <h2 className="text-4xl font-display font-light text-text-main dark:text-white tracking-tight">Nosso <span className="font-bold italic">endereço.</span></h2>
          <p className="text-text-sub text-sm max-w-xl mx-auto">Prepare o GPS! Estamos ansiosos para te receber em nosso novo lar e celebrar juntos.</p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Card de Informações */}
          <div className="space-y-6 flex flex-col">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm space-y-8 flex-1">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 text-primary p-3 rounded-xl shrink-0">
                  <span className="material-symbols-outlined">pin_drop</span>
                </div>
                <div>
                  <h3 className="font-bold text-text-main dark:text-white uppercase text-[10px] tracking-widest mb-1">Endereço do Evento</h3>
                  <p className="text-text-sub text-sm leading-relaxed">
                    Tv. Francisco de Freitas Saldanha, 43 - Boa Vista<br/>
                    Curitiba - PR
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 text-primary p-3 rounded-xl shrink-0">
                  <span className="material-symbols-outlined">calendar_today</span>
                </div>
                <div>
                  <h3 className="font-bold text-text-main dark:text-white uppercase text-[10px] tracking-widest mb-1">Quando?</h3>
                  <p className="text-text-sub text-sm leading-relaxed">08 de Fevereiro de 2026<br/>Às 16:00 horas</p>
                </div>
              </div>

              <div className="pt-8 border-t border-gray-50 dark:border-gray-800">
                <div className="bg-primary/5 p-5 rounded-xl flex items-start gap-4 border border-primary/10">
                  <span className="material-symbols-outlined text-primary text-2xl">local_parking</span>
                  <div>
                    <strong className="text-primary uppercase text-[10px] tracking-widest block mb-1">Estacionamento</strong>
                    <p className="text-xs text-text-sub font-medium leading-relaxed">
                      A rua é estreita. <strong>Estacione apenas de um lado</strong> para permitir a passagem de veículos.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={openGoogleMaps}
              className="w-full h-16 bg-primary text-white font-bold uppercase tracking-[0.2em] text-[10px] rounded-2xl shadow-xl shadow-primary/20 flex items-center justify-center gap-3 hover:opacity-90 active:scale-95 transition-all"
            >
              <span className="material-symbols-outlined">near_me</span>
              Abrir no Google Maps
            </button>
          </div>

          {/* Card de Visualização */}
          <div className="relative h-[400px] md:h-auto rounded-2xl overflow-hidden shadow-sm border border-gray-100">
            <img
              src="/images/endereco.jpg"
              className="absolute inset-0 w-full h-full object-cover"
              alt="Nosso Endereço"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8">
              <div className="glass-card p-5 rounded-2xl flex items-center gap-4 border border-white/20">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white shrink-0">
                  <span className="material-symbols-outlined">home</span>
                </div>
                <div>
                   <p className="text-[10px] font-bold text-text-main uppercase tracking-[0.2em]">Destino Final</p>
                   <p className="text-sm text-text-main/80 font-semibold italic">Aguardamos você!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LocationScreen;
