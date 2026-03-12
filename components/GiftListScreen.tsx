
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Gift, Category } from '../types';

type StatusFilter = 'todos' | 'disponiveis' | 'reservados';

interface GiftListScreenProps {
  gifts: Gift[];
  onPurchase: (id: number, buyerName: string) => void;
}

const GiftListScreen: React.FC<GiftListScreenProps> = ({ gifts, onPurchase }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const initialCategory = (location.state as { initialCategory?: Category })?.initialCategory || 'Todos';
  const [selectedCategory, setSelectedCategory] = useState<Category>(initialCategory);
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('todos');
  const [selectedGiftId, setSelectedGiftId] = useState<number | null>(null);
  const [buyerName, setBuyerName] = useState('');

  const categories: Category[] = ['Todos', 'Cozinha', 'Quarto', 'Banheiro', 'Outros'];

  const categoryGifts = selectedCategory === 'Todos'
    ? [...gifts].sort((a, b) => a.name.localeCompare(b.name, 'pt-BR'))
    : gifts.filter(g => g.category === selectedCategory).sort((a, b) => a.name.localeCompare(b.name, 'pt-BR'));

  const filteredGifts = categoryGifts.filter(g => {
    if (statusFilter === 'disponiveis') return !g.purchased;
    if (statusFilter === 'reservados') return g.purchased;
    return true;
  });

  const handleConfirm = () => {
    const trimmedName = buyerName.trim();
    const validNameRegex = /^[a-zA-ZáàâãéèêíïóôõöúçñÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ\s]{2,}$/;

    if (!trimmedName) {
      alert('Por favor, insira seu nome.');
      return;
    }

    if (!validNameRegex.test(trimmedName)) {
      alert('Por favor, insira um nome válido (mínimo de 2 letras e apenas letras).');
      return;
    }

    if (selectedGiftId !== null) {
      onPurchase(selectedGiftId, trimmedName);
      setSelectedGiftId(null);
      setBuyerName('');
    }
  };

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark pb-24">
      <header className="sticky top-0 z-50 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-primary/10">
        <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
          <button onClick={() => navigate('/')} className="flex items-center gap-2 text-text-sub hover:text-primary transition-colors p-2 -ml-2 rounded-xl">
            <span className="material-symbols-outlined text-xl">west</span>
            <span className="text-[10px] font-bold uppercase tracking-widest">Voltar</span>
          </button>
          <h1 className="text-sm font-display font-bold text-text-main dark:text-white tracking-tight">Lista de Presentes</h1>
          <div className="w-12"></div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-8 space-y-8">
        <div className="flex flex-wrap gap-2 p-4 bg-white dark:bg-white/5 rounded-2xl border border-primary/10 shadow-sm">
          <span className="text-[9px] font-bold text-text-sub uppercase tracking-widest w-full mb-1">Status</span>
          {[
            { id: 'todos' as StatusFilter, label: 'Todos' },
            { id: 'disponiveis' as StatusFilter, label: 'Disponíveis' },
            { id: 'reservados' as StatusFilter, label: 'Reservados' },
          ].map(({ id, label }) => (
            <button
              key={id}
              onClick={() => setStatusFilter(id)}
              className={`px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all ${
                statusFilter === id
                  ? 'bg-primary text-white shadow-soft'
                  : 'bg-background-light dark:bg-white/5 text-text-sub hover:bg-primary/10 hover:text-primary'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 p-4 bg-white dark:bg-white/5 rounded-2xl border border-primary/10 shadow-sm">
          <span className="text-[9px] font-bold text-text-sub uppercase tracking-widest w-full mb-1">Categoria</span>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all ${
                selectedCategory === cat
                  ? 'bg-primary text-white shadow-soft'
                  : 'bg-background-light dark:bg-white/5 text-text-sub hover:bg-primary/10 hover:text-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {filteredGifts.length === 0 ? (
          <div className="text-center py-16 px-6 rounded-2xl bg-white dark:bg-white/5 border border-dashed border-primary/20">
            <span className="material-symbols-outlined text-5xl text-primary/40 mb-4">inventory_2</span>
            <p className="text-text-sub text-sm font-medium">Nenhum presente encontrado com esses filtros.</p>
            <p className="text-text-sub text-xs mt-1">Tente alterar a categoria ou o status.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filteredGifts.map(gift => (
              <div
                key={gift.id}
                className={`group flex flex-col rounded-2xl overflow-hidden shadow-card border transition-all duration-300 hover:shadow-soft hover:-translate-y-1 ${
                  gift.purchased
                    ? 'bg-white/60 dark:bg-white/5 border-primary/20 opacity-75'
                    : 'bg-white dark:bg-white/5 border-primary/10'
                }`}
              >
                <div className="aspect-square w-full overflow-hidden relative bg-background-light dark:bg-white/5">
                  <img
                    src={gift.image}
                    alt={gift.name}
                    className={`w-full h-full object-contain transition-transform duration-500 group-hover:scale-105 ${gift.purchased ? 'grayscale' : ''}`}
                  />
                  {gift.purchased && (
                    <div className="absolute inset-0 bg-white/70 dark:bg-black/30 backdrop-blur-[2px] flex flex-col items-center justify-center p-4">
                      <span className="material-symbols-outlined text-primary text-3xl mb-2">check_circle</span>
                      <span className="text-[8px] font-black uppercase tracking-widest text-primary border-b-2 border-primary pb-1">Reservado</span>
                    </div>
                  )}
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <span className="text-[7px] font-bold text-primary uppercase mb-1 tracking-widest">{gift.category}</span>
                  <h3 className="text-[11px] md:text-xs font-bold text-text-main dark:text-white leading-tight line-clamp-2 min-h-[2.5rem]">
                    {gift.name}
                  </h3>
                  {!gift.purchased && (
                    <button
                      onClick={() => { setSelectedGiftId(gift.id); setBuyerName(''); }}
                      className="mt-3 w-full py-2.5 bg-primary text-white text-[9px] font-black uppercase tracking-widest rounded-xl hover:bg-primary/90 transition-all shadow-sm antialiased"
                    >
                      Reservar
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {selectedGiftId !== null && (() => {
        const selectedGift = gifts.find(g => g.id === selectedGiftId);
        return (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-text-main/40 backdrop-blur-sm" onClick={() => setSelectedGiftId(null)}></div>
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
                  className="absolute top-3 right-3 w-10 h-10 rounded-full bg-white/90 dark:bg-background-dark/90 backdrop-blur-sm flex items-center justify-center shadow-lg hover:bg-white transition-all"
                >
                  <span className="material-symbols-outlined text-lg text-text-sub">close</span>
                </button>
              </div>
              <div className="p-6 space-y-8">
                <div className="text-center space-y-2">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-[8px] font-bold uppercase tracking-widest rounded-xl">
                    {selectedGift?.category}
                  </span>
                  <h3 className="text-lg font-bold text-text-main dark:text-white tracking-tight leading-tight">
                    {selectedGift?.name}
                  </h3>
                </div>
                <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-xl border border-amber-200 dark:border-amber-800/50">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-amber-600 text-xl flex-shrink-0">warning</span>
                    <p className="text-[10px] text-amber-800 dark:text-amber-200 font-bold uppercase tracking-tight leading-relaxed">
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

export default GiftListScreen;
