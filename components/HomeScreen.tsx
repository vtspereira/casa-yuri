
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { EVENT_DATE, PALETTE } from '../constants';
import { Gift, Category } from '../types';

interface HomeScreenProps {
  gifts: Gift[];
  onPurchase: (id: number, buyerName: string) => void;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ gifts, onPurchase }) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [selectedCategory, setSelectedCategory] = useState<Category>('Todos');
  const [selectedGiftId, setSelectedGiftId] = useState<number | null>(null);
  const [buyerName, setBuyerName] = useState('');

  const categories: Category[] = ['Todos', 'Cozinha', 'Quarto', 'Jantar', 'Decoração'];
  
  const filteredGifts = selectedCategory === 'Todos' 
    ? gifts.slice(0, 6) 
    : gifts.filter(g => g.category === selectedCategory).slice(0, 6);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(EVENT_DATE) - +new Date();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };
    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();
    return () => clearInterval(timer);
  }, []);

  const handleConfirm = () => {
    const trimmedName = buyerName.trim();
    // Regex que permite APENAS letras (com acentos) e espaços. Mínimo 2 caracteres.
    const validNameRegex = /^[a-zA-ZáàâãéèêíïóôõöúçñÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ\s]{2,}$/;
    
    if (!trimmedName) {
      alert('Por favor, insira seu nome.');
      return;
    }
    
    if (!validNameRegex.test(trimmedName)) {
      alert('O nome deve conter apenas letras e ter no mínimo 2 caracteres. Números e símbolos não são permitidos.');
      return;
    }

    if (selectedGiftId !== null) {
      onPurchase(selectedGiftId, trimmedName);
      setSelectedGiftId(null);
      setBuyerName('');
    }
  };

  return (
    <div className="min-h-screen w-full bg-background-light dark:bg-background-dark pb-24">
      <header className="sticky top-0 z-[60] bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="font-display font-bold text-lg tracking-tight text-text-main dark:text-white uppercase">Vitor & Manu</span>
            <span className="text-[10px] text-primary font-bold tracking-[0.3em] uppercase">Casa Nova</span>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 pt-12 space-y-12">
        {/* Hero Section */}
        <section className="relative group overflow-hidden rounded-2xl shadow-sm border border-gray-100 bg-white">
          <div className="grid md:grid-cols-2 items-center">
            <div className="p-10 md:p-16 space-y-6">
              <div className="space-y-2">
                <span className="text-primary font-bold text-xs tracking-widest uppercase">08 de Fevereiro, 2026</span>
                <h1 className="text-4xl md:text-6xl font-display font-light text-text-main tracking-tight leading-tight">
                  Seja bem-vindo ao nosso <span className="font-bold italic">novo lar.</span>
                </h1>
              </div>
              <p className="text-text-sub text-base leading-relaxed max-w-sm">
                Estamos montando cada detalhe com muito amor e sua presença tornará nossa casa completa.
              </p>
            </div>
            <div className="h-full min-h-[400px] relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=2000" 
                alt="Interior Cozinha" 
                className="absolute inset-0 w-full h-full object-cover grayscale-[20%] group-hover:scale-105 transition-transform duration-1000"
              />
            </div>
          </div>
        </section>

        {/* Informações Rápidas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl border border-gray-100 dark:border-gray-800 flex flex-col justify-between">
            <div>
              <span className="material-symbols-outlined text-primary mb-4 text-3xl">location_on</span>
              <h3 className="font-display font-bold text-lg text-text-main dark:text-white">Onde?</h3>
              <p className="text-sm text-text-sub mt-2">Tv. Francisco de Freitas Saldanha, 43 - Boa Vista, Curitiba</p>
            </div>
            <Link to="/location" className="mt-6 text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-2 hover:translate-x-1 transition-transform">
              Ver Mapa <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>

          <div className="md:col-span-2 bg-white dark:bg-gray-900 p-8 rounded-2xl border border-gray-100 dark:border-gray-800">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-display font-bold text-lg text-text-main dark:text-white">Contagem Regressiva</h3>
              <span className="text-[10px] font-bold text-text-sub uppercase tracking-widest">Faltam {timeLeft.days} dias</span>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[
                { label: 'dias', val: timeLeft.days },
                { label: 'horas', val: timeLeft.hours },
                { label: 'minutos', val: timeLeft.minutes },
                { label: 'segundos', val: timeLeft.seconds }
              ].map((t, i) => (
                <div key={i} className="flex flex-col items-center">
                  <span className="text-4xl font-display font-light text-text-main dark:text-white">{String(t.val).padStart(2, '0')}</span>
                  <span className="text-[9px] font-bold text-text-sub uppercase mt-1 tracking-tighter">{t.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Guia de Cores */}
        <section className="bg-white dark:bg-gray-900 p-10 rounded-2xl border border-gray-100 dark:border-gray-800">
          <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
            <h2 className="text-2xl font-display font-bold text-text-main dark:text-white uppercase tracking-tight">Guia de Cores</h2>
            <p className="text-text-sub text-sm italic">"Cores suaves para um lar harmônico"</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {PALETTE.map((color, i) => (
              <div key={i} className="flex flex-col items-center gap-4">
                <div className="w-20 h-20 rounded-full border border-gray-100 shadow-inner" style={{backgroundColor: color.hex}}></div>
                <div className="text-center">
                  <p className="text-xs font-bold text-text-main dark:text-white uppercase tracking-widest">{color.name}</p>
                  <p className="text-[9px] text-text-sub font-mono">{color.hex}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sugestões de Presentes */}
        <section className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden">
          <div className="p-10 border-b border-gray-50 dark:border-gray-800">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-display font-bold text-text-main dark:text-white tracking-tight">Sugestões de Presentes</h2>
                <p className="text-text-sub text-sm">Escolha uma categoria e nos ajude a montar nossa casa.</p>
              </div>
              <Link to="/gifts" className="h-12 px-8 bg-primary text-white text-xs font-bold uppercase tracking-widest rounded-full flex items-center justify-center hover:opacity-90 transition-all shadow-sm shrink-0">
                Ver Lista Completa
              </Link>
            </div>

            <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2 rounded-full text-[9px] font-black uppercase tracking-widest transition-all whitespace-nowrap border ${
                    selectedCategory === cat 
                      ? 'bg-primary text-white border-primary' 
                      : 'bg-white text-text-sub border-gray-100 hover:border-primary/50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="p-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filteredGifts.map(gift => (
              <div key={gift.id} className={`flex flex-col group bg-background-light dark:bg-gray-800/50 p-2 rounded-xl transition-all ${gift.purchased ? 'opacity-50 grayscale' : ''}`}>
                <div className="aspect-square w-full rounded-lg overflow-hidden relative mb-2">
                  <img src={gift.image} alt={gift.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  {gift.purchased && (
                    <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px] flex items-center justify-center">
                      <span className="text-[8px] font-black uppercase tracking-widest text-text-main border-y border-text-main py-1 px-2">Escolhido</span>
                    </div>
                  )}
                </div>
                <div className="px-2 pb-1 flex flex-col flex-1">
                  <span className="text-[7px] font-bold text-primary uppercase mb-0.5 tracking-widest">{gift.category}</span>
                  <h4 className="text-[10px] md:text-[11px] font-bold text-text-main dark:text-white uppercase leading-tight line-clamp-2 h-7">{gift.name}</h4>
                  
                  {!gift.purchased && (
                    <button 
                      onClick={() => { setSelectedGiftId(gift.id); setBuyerName(''); }}
                      className="mt-2 w-full py-2 border border-primary text-primary text-[8px] font-black uppercase tracking-widest rounded-md hover:bg-primary hover:text-white transition-all"
                    >
                      Presentear
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <footer className="pt-20 pb-10 text-center space-y-4">
          <div className="w-10 h-[1px] bg-primary mx-auto opacity-30"></div>
          <p className="font-display font-bold text-text-main dark:text-white tracking-[0.4em] uppercase text-xs">V + M</p>
          <p className="text-[10px] text-text-sub uppercase tracking-widest">Agradecemos de coração por fazer parte da nossa história.</p>
        </footer>
      </main>

      {/* Modal de Confirmação */}
      {selectedGiftId !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-text-main/30 backdrop-blur-sm transition-opacity" onClick={() => setSelectedGiftId(null)}></div>
          <div className="relative w-full max-w-sm bg-white rounded-2xl p-10 shadow-2xl border border-gray-100">
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="space-y-3">
                <h3 className="text-xl font-display font-bold text-text-main uppercase tracking-tight">Confirmar Presente</h3>
                <div className="bg-red-50 p-3 rounded-lg border border-red-100">
                   <p className="text-[9px] text-red-600 font-bold uppercase tracking-tight leading-relaxed">
                     Atenção: Esta ação é irreversível. Após confirmar, este item será retirado da lista e não poderá ser cancelado.
                   </p>
                </div>
                <p className="text-xs text-text-sub font-medium">Item: <span className="text-primary font-bold">{gifts.find(g => g.id === selectedGiftId)?.name}</span></p>
              </div>
              
              <div className="w-full text-left space-y-2">
                <label className="text-[10px] font-bold text-text-sub uppercase tracking-widest">Seu Nome (Apenas letras)</label>
                <input
                  type="text"
                  value={buyerName}
                  onChange={(e) => setBuyerName(e.target.value)}
                  placeholder="Seu Nome e Sobrenome"
                  className="w-full px-4 py-3 bg-background-light border-none rounded-lg text-sm focus:ring-1 focus:ring-primary/50 outline-none font-medium"
                  autoFocus
                />
              </div>

              <div className="flex flex-col gap-3 w-full">
                <button 
                  onClick={handleConfirm}
                  className="w-full py-4 bg-primary text-white font-bold uppercase tracking-widest text-[10px] rounded-lg shadow-sm hover:opacity-90 transition-all"
                >
                  Confirmar Escolha
                </button>
                <button onClick={() => setSelectedGiftId(null)} className="text-[10px] font-bold text-text-sub uppercase tracking-widest">Voltar</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeScreen;
