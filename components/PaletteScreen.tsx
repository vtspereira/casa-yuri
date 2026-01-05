
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { PALETTE } from '../constants';

const PaletteScreen: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex h-full min-h-screen w-full flex-col max-w-md mx-auto bg-white dark:bg-background-dark shadow-2xl overflow-hidden">
      <header className="sticky top-0 z-10 flex items-center bg-white/95 dark:bg-background-dark/95 backdrop-blur-md p-4 pb-2 justify-between border-b border-gray-100 dark:border-gray-800">
        <button onClick={() => navigate('/')} className="text-primary hover:bg-primary/10 rounded-full p-2 -ml-2 transition-colors">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h2 className="text-[#181112] dark:text-white text-lg font-bold flex-1 text-center pr-10">
          Nossas Cores
        </h2>
      </header>

      <main className="flex-1 px-6 pt-8 pb-32 overflow-y-auto">
        <div className="flex flex-col items-center mb-8">
          <span className="bg-primary/10 text-primary text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest mb-4">Guia de Estilo</span>
          <h1 className="text-3xl font-black text-[#181112] dark:text-white text-center leading-tight mb-3">Paleta Desejada</h1>
          <p className="text-text-sub dark:text-gray-400 text-sm text-center max-w-[280px]">
            Para deixar nosso lar harmonioso, escolhemos tons que amamos para os utensílios e decoração.
          </p>
        </div>

        <div className="bg-primary/5 border border-primary/10 rounded-3xl p-5 mb-8 flex gap-3 items-start">
          <span className="material-symbols-outlined text-primary text-xl">info</span>
          <p className="text-primary text-[11px] font-bold leading-relaxed">
            Sugerimos que os presentes sigam preferencialmente estes tons suaves para combinar com a decoração planejada.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-12">
          {PALETTE.map((color, i) => (
            <div key={i} className="group relative flex flex-col rounded-3xl shadow-sm border border-gray-100 dark:border-white/5 bg-gray-50 dark:bg-surface-dark overflow-hidden transition-all hover:translate-y-[-4px]">
              <div className="h-28 w-full transition-transform duration-500 group-hover:scale-110" style={{backgroundColor: color.hex}}></div>
              <div className="p-4 flex flex-col items-center">
                <h3 className="text-sm font-bold text-text-main dark:text-white">{color.name}</h3>
                <span className="text-[10px] font-mono text-text-sub mt-1 uppercase tracking-widest">{color.hex}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          <div className="p-6 rounded-3xl bg-background-light dark:bg-white/5 border border-dashed border-primary/30">
            <h4 className="font-bold text-sm text-primary mb-2 flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">tips_and_updates</span>
              Dica dos Anfitriões
            </h4>
            <p className="text-xs text-text-sub dark:text-gray-400 leading-relaxed">
              Utensílios de cozinha em Inox, Madeira ou Branco sempre são escolhas seguras e atemporais que amamos!
            </p>
          </div>
        </div>
      </main>

      <div className="fixed bottom-0 left-0 right-0 w-full max-w-md mx-auto p-5 bg-white/80 dark:bg-background-dark/80 backdrop-blur-xl border-t border-gray-100 dark:border-white/5">
        <Link to="/gifts" className="w-full bg-primary hover:bg-red-600 text-white font-bold h-14 rounded-full shadow-lg shadow-primary/30 flex items-center justify-center gap-2 transition-all active:scale-95">
          <span>Ver Presentes</span>
          <span className="material-symbols-outlined">redeem</span>
        </Link>
      </div>
    </div>
  );
};

export default PaletteScreen;
