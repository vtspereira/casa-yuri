
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { EVENT_DATE, PALETTE } from '../constants';
import { Gift, Category } from '../types';

type StatusFilter = 'todos' | 'disponiveis' | 'reservados';

interface HomeScreenProps {
  gifts: Gift[];
  onPurchase: (id: number, buyerName: string) => void;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ gifts, onPurchase }) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [selectedCategory, setSelectedCategory] = useState<Category>('Todos');
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('todos');
  const [selectedGiftId, setSelectedGiftId] = useState<number | null>(null);
  const [buyerName, setBuyerName] = useState('');

  const categories: Category[] = ['Todos', 'Cozinha', 'Quarto', 'Banheiro', 'Outros'];

  const categoryGifts = selectedCategory === 'Todos'
    ? [...gifts].sort((a, b) => a.name.localeCompare(b.name, 'pt-BR'))
    : gifts.filter(g => g.category === selectedCategory).sort((a, b) => a.name.localeCompare(b.name, 'pt-BR'));

  const statusFilteredGifts = categoryGifts.filter(g => {
    if (statusFilter === 'disponiveis') return !g.purchased;
    if (statusFilter === 'reservados') return g.purchased;
    return true;
  });

  const filteredGifts = statusFilteredGifts.slice(0, 9);
  const totalInCategory = statusFilteredGifts.length;
  const hasMore = totalInCategory > 9;
  const randomGift = statusFilteredGifts[Math.floor(Math.random() * Math.min(statusFilteredGifts.length, 12))];

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
    const validNameRegex = /^[a-zA-ZáàâãéèêíïóôõöúçñÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ\s]{2,}$/;

    if (!trimmedName) {
      alert('Por favor, insira seu nome.');
      return;
    }

    if (!validNameRegex.test(trimmedName)) {
      alert('O nome deve conter apenas letras e ter no mínimo 2 caracteres.');
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
      <header className="sticky top-0 z-[60] bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-primary/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="font-display font-bold text-xl tracking-tight text-text-main dark:text-white">Bea & Yuri</span>
            <span className="text-[10px] text-primary font-bold tracking-[0.25em] uppercase">Chá de Casa Nova</span>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-8 sm:pt-10 space-y-10 sm:space-y-14">
        <section className="relative overflow-hidden rounded-3xl shadow-card border border-primary/10 bg-gradient-to-br from-white to-primary/5 dark:from-white/5 dark:to-primary/10">
          <div className="grid md:grid-cols-2 items-center min-h-[340px]">
            <div className="p-8 md:p-12 space-y-6 order-2 md:order-1">
              <div className="space-y-4">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-[9px] font-bold uppercase tracking-widest rounded-xl">
                  15 de Abril, 2026
                </span>
                <h1 className="text-4xl md:text-5xl font-display font-normal text-text-main dark:text-white tracking-tight leading-tight">
                  Seja bem-vindo ao nosso <span className="italic text-primary">novo lar.</span>
                </h1>
                <p className="text-text-sub text-base leading-relaxed max-w-sm">
                  Estamos montando cada detalhe com muito amor e sua presença tornará nossa casa completa.
                </p>
              </div>
            </div>
            <div className="w-full min-h-[50vh] md:min-h-0 md:h-full relative overflow-hidden order-1 md:order-2 bg-background-light dark:bg-white/5 flex items-center justify-center">
              <img
                src="/images/home.jpeg"
                alt="Nosso Novo Lar"
                className="w-full h-full object-contain object-center transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 md:bg-gradient-to-l md:from-black/15 pointer-events-none" />
            </div>
          </div>
          <div className="p-6 md:p-8 space-y-6 border-t border-primary/10">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 p-5 rounded-2xl border border-primary/10 bg-white dark:bg-white/5">
              <div className="flex items-start gap-4 flex-1 min-w-0">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-xl">location_on</span>
                </div>
                <div className="min-w-0">
                  <h3 className="font-display font-bold text-base text-text-main dark:text-white">Onde?</h3>
                  <p className="text-sm text-text-sub mt-0.5">R. Alberto Otto, 1316 - Santa Cândida, Curitiba</p>
                  <p className="text-xs text-primary font-medium mt-2 flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-sm">info</span>
                    Identifique-se na portaria e siga para o salão de eventos.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-3 pt-2">
              <span className="text-[9px] font-bold text-text-sub uppercase tracking-widest">Faltam</span>
              <div className="flex items-center gap-5 md:gap-8">
                {[
                  { label: 'd', val: timeLeft.days },
                  { label: 'h', val: timeLeft.hours },
                  { label: 'm', val: timeLeft.minutes },
                  { label: 's', val: timeLeft.seconds },
                ].map((t, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <span className="text-2xl md:text-3xl font-display font-light text-primary tabular-nums">{String(t.val).padStart(2, '0')}</span>
                    <span className="text-[8px] font-bold text-text-sub uppercase mt-0.5">{t.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="p-10 rounded-2xl border border-primary/10 bg-white dark:bg-white/5 shadow-card">
          <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
            <h2 className="text-2xl font-display font-bold text-text-main dark:text-white">Guia de Cores</h2>
            <p className="text-text-sub text-sm">Cores suaves para um lar harmônico</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {PALETTE.map((color, i) => (
              <div key={i} className="flex flex-col items-center gap-4">
                <div
                  className="w-20 h-20 rounded-2xl border-2 border-primary/10 shadow-inner"
                  style={{ backgroundColor: color.hex }}
                />
                <p className="text-xs font-bold text-text-main dark:text-white uppercase tracking-widest">{color.name}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-primary/10 bg-white dark:bg-white/5 shadow-card overflow-hidden">
          <div className="p-8 md:p-10 border-b border-primary/10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-6">
              <div className="space-y-2">
                <h2 className="text-2xl md:text-3xl font-display font-bold text-text-main dark:text-white">Sugestões de Presentes</h2>
                <p className="text-text-sub text-sm">Escolha uma categoria e status para filtrar.</p>
              </div>
              <Link
                to="/gifts"
                state={{ initialCategory: selectedCategory }}
                className="h-12 px-8 bg-primary text-white text-xs font-bold uppercase tracking-widest rounded-xl flex items-center justify-center hover:opacity-90 transition-all shadow-soft shrink-0"
              >
                Ver Lista Completa
              </Link>
            </div>
            <div className="space-y-4">
              <div>
                <span className="text-[8px] font-bold text-text-sub uppercase tracking-widest block mb-2">Categoria</span>
                <div className="flex flex-wrap gap-2">
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-4 py-2 rounded-xl text-[9px] font-bold uppercase tracking-widest transition-all ${
                        selectedCategory === cat
                          ? 'bg-primary text-white shadow-soft'
                          : 'bg-background-light dark:bg-white/5 text-text-sub hover:bg-primary/10 hover:text-primary'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <span className="text-[8px] font-bold text-text-sub uppercase tracking-widest block mb-2">Status</span>
                <div className="flex flex-wrap gap-2">
                  {[
                    { id: 'todos' as StatusFilter, label: 'Todos' },
                    { id: 'disponiveis' as StatusFilter, label: 'Disponíveis' },
                    { id: 'reservados' as StatusFilter, label: 'Reservados' },
                  ].map(({ id, label }) => (
                    <button
                      key={id}
                      onClick={() => setStatusFilter(id)}
                      className={`px-4 py-2 rounded-xl text-[9px] font-bold uppercase tracking-widest transition-all ${
                        statusFilter === id
                          ? 'bg-primary text-white shadow-soft'
                          : 'bg-background-light dark:bg-white/5 text-text-sub hover:bg-primary/10 hover:text-primary'
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="px-4 sm:px-6 py-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-5">
            {filteredGifts.map(gift => (
              <div
                key={gift.id}
                className={`flex flex-col group rounded-xl overflow-hidden border transition-all duration-300 min-w-0 ${
                  gift.purchased
                    ? 'bg-background-light/50 dark:bg-white/5 border-primary/10 opacity-60'
                    : 'bg-background-light dark:bg-white/5 border-primary/5 hover:border-primary/20 hover:shadow-soft'
                }`}
              >
                <div className="aspect-square w-full overflow-hidden relative bg-background-light dark:bg-white/5 flex items-center justify-center flex-shrink-0">
                  <img
                    src={gift.image}
                    alt={gift.name}
                    className={`max-w-full max-h-full w-auto h-auto object-contain transition-transform duration-500 group-hover:scale-105 ${gift.purchased ? 'grayscale' : ''}`}
                  />
                  {gift.purchased && (
                    <div className="absolute inset-0 bg-white/60 backdrop-blur-[1px] flex items-center justify-center">
                      <span className="text-[9px] sm:text-[8px] font-black uppercase tracking-widest text-primary border-b border-primary py-1 px-2 sm:py-0.5 sm:px-1.5">
                        Reservado
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-2.5 sm:p-3 flex flex-col flex-1 min-w-0">
                  <span className="text-[8px] sm:text-[9px] font-bold text-primary uppercase mb-1 tracking-widest truncate">{gift.category}</span>
                  <h4 className="text-[11px] sm:text-xs md:text-[13px] font-bold text-text-main dark:text-white leading-tight line-clamp-2 min-h-[2.25rem] sm:min-h-[2rem]">
                    {gift.name}
                  </h4>
                  {!gift.purchased && (
                    <button
                      onClick={() => { setSelectedGiftId(gift.id); setBuyerName(''); }}
                      className="mt-2 w-full py-2 sm:py-1.5 bg-primary text-white text-[9px] font-black uppercase tracking-widest rounded-lg hover:opacity-90 transition-all touch-manipulation antialiased"
                    >
                      Reservar
                    </button>
                  )}
                </div>
              </div>
            ))}

            {hasMore && randomGift && (
              <Link
                to="/gifts"
                state={{ initialCategory: selectedCategory }}
                className="relative flex flex-col group rounded-xl overflow-hidden border border-primary/10 bg-primary hover:border-primary/30 hover:shadow-soft transition-all duration-300 min-w-0"
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 pointer-events-none z-10">
                  <span className="material-symbols-outlined text-white text-xl sm:text-2xl md:text-3xl mb-1.5 drop-shadow-md">grid_view</span>
                  <span className="text-white font-black uppercase tracking-widest text-[10px] sm:text-[11px] md:text-xs drop-shadow-md">Ver todos</span>
                </div>
                <div className="aspect-square w-full flex-shrink-0 bg-primary" />
                <div className="p-2.5 sm:p-3 flex-1 min-w-0 min-h-[2.25rem] sm:min-h-[2rem] bg-primary" />
              </Link>
            )}
          </div>
        </section>

        <footer className="pt-16 pb-10 text-center space-y-4">
          <div className="w-12 h-[2px] bg-primary/30 mx-auto rounded-full" />
          <p className="font-display font-bold text-text-main dark:text-white tracking-[0.3em] text-sm">B + Y</p>
          <p className="text-[10px] text-text-sub uppercase tracking-widest">Agradecemos de coração por fazer parte da nossa história.</p>
        </footer>
      </main>

      {selectedGiftId !== null && (() => {
        const selectedGift = gifts.find(g => g.id === selectedGiftId);
        return (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-text-main/40 backdrop-blur-sm" onClick={() => setSelectedGiftId(null)} />
            <div className="relative w-full max-w-md bg-white dark:bg-background-dark rounded-2xl shadow-2xl border border-primary/10 overflow-hidden max-h-[90vh] overflow-y-auto">
              <div className="relative h-48 md:h-64 bg-gradient-to-br from-background-light to-primary/5">
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <img
                    src={selectedGift?.image}
                    alt={selectedGift?.name}
                    className="w-full h-full object-contain drop-shadow-2xl"
                  />
                </div>
                <button
                  onClick={() => setSelectedGiftId(null)}
                  className="absolute top-3 right-3 w-10 h-10 rounded-full bg-white/90 dark:bg-background-dark/90 backdrop-blur-sm flex items-center justify-center shadow-lg"
                >
                  <span className="material-symbols-outlined text-lg text-text-sub">close</span>
                </button>
              </div>
              <div className="p-6 space-y-6">
                <div className="text-center space-y-2">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-[8px] font-bold uppercase tracking-widest rounded-xl">
                    {selectedGift?.category}
                  </span>
                  <h3 className="text-lg font-bold text-text-main dark:text-white tracking-tight">
                    {selectedGift?.name}
                  </h3>
                </div>
                <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-xl border border-amber-200 dark:border-amber-800/50">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-amber-600 text-xl flex-shrink-0">warning</span>
                    <p className="text-[10px] text-amber-800 dark:text-amber-200 font-bold uppercase tracking-tight">
                      Esta ação é irreversível. O item será removido da lista para outros convidados.
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-text-sub uppercase tracking-widest">Seu Nome</label>
                  <input
                    type="text"
                    value={buyerName}
                    onChange={(e) => setBuyerName(e.target.value)}
                    placeholder="Nome Completo"
                    className="w-full px-4 py-3 bg-background-light dark:bg-white/5 border border-primary/10 rounded-xl text-sm focus:ring-2 focus:ring-primary/50 outline-none font-medium"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <button
                    onClick={handleConfirm}
                    className="w-full py-4 bg-primary text-white font-bold uppercase tracking-widest text-[10px] rounded-xl shadow-soft hover:opacity-90 transition-all"
                  >
                    Confirmar Reserva
                  </button>
                  <button
                    onClick={() => setSelectedGiftId(null)}
                    className="text-[10px] font-bold text-text-sub uppercase tracking-widest hover:text-text-main transition-colors"
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })()}
    </div>
  );
};

export default HomeScreen;
