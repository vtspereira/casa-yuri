
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Gift, Category } from '../types';

interface GiftListScreenProps {
  gifts: Gift[];
  onPurchase: (id: number, buyerName: string) => void;
}

const GiftListScreen: React.FC<GiftListScreenProps> = ({ gifts, onPurchase }) => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<Category>('Todos');
  const [selectedGiftId, setSelectedGiftId] = useState<number | null>(null);
  const [buyerName, setBuyerName] = useState('');

  const categories: Category[] = ['Todos', 'Cozinha', 'Quarto', 'Banheiro', 'Jantar', 'Outros'];
  const filteredGifts = selectedCategory === 'Todos' ? gifts : gifts.filter(g => g.category === selectedCategory);

  const handleConfirm = () => {
    const trimmedName = buyerName.trim();
    // Regex que permite APENAS letras (com acentos) e espaços. Mínimo 2 caracteres.
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
    <div className="min-h-screen bg-background-light dark:bg-background-dark pb-20">
      <header className="sticky top-0 z-50 bg-background-light/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
          <button onClick={() => navigate('/')} className="flex items-center gap-2 text-text-sub hover:text-primary transition-colors">
            <span className="material-symbols-outlined text-xl">west</span>
            <span className="text-[10px] font-bold uppercase tracking-widest">Voltar</span>
          </button>
          <h1 className="text-sm font-bold uppercase tracking-[0.2em] text-text-main">Lista Completa</h1>
          <div className="w-12"></div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12">
        <div className="flex gap-4 overflow-x-auto no-scrollbar mb-12 justify-center">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${
                selectedCategory === cat 
                  ? 'bg-primary text-white' 
                  : 'bg-white text-text-sub border border-gray-100 hover:border-primary/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredGifts.map(gift => (
            <div key={gift.id} className={`flex flex-col bg-white p-2 rounded-xl shadow-sm border border-gray-50 transition-all hover:translate-y-[-4px] ${gift.purchased ? 'opacity-50 grayscale' : ''}`}>
              <div className="aspect-square w-full rounded-lg overflow-hidden bg-background-light relative mb-2">
                <img src={gift.image} alt={gift.name} className="w-full h-full object-cover" />
                {gift.purchased && (
                  <div className="absolute inset-0 bg-white/60 backdrop-blur-[1px] flex items-center justify-center text-center px-2">
                    <span className="text-[8px] font-black uppercase tracking-widest text-text-main border-y border-text-main py-1">Item Escolhido</span>
                  </div>
                )}
              </div>
              <div className="px-2 pb-1 flex flex-col flex-1">
                <span className="text-[7px] font-bold text-primary uppercase mb-0.5 tracking-widest">{gift.category}</span>
                <h3 className="text-[10px] md:text-[11px] font-bold text-text-main uppercase leading-tight line-clamp-2 h-7">{gift.name}</h3>
                
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
      </main>

      {/* Modal de Confirmação */}
      {selectedGiftId !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-text-main/30 backdrop-blur-sm" onClick={() => setSelectedGiftId(null)}></div>
          <div className="relative w-full max-w-sm bg-white rounded-2xl p-10 shadow-2xl border border-gray-100">
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="space-y-3">
                <h3 className="text-xl font-display font-bold text-text-main uppercase tracking-tight">Confirmar Escolha</h3>
                <div className="bg-red-50 p-3 rounded-lg border border-red-100">
                   <p className="text-[9px] text-red-600 font-bold uppercase tracking-tight leading-relaxed">
                     Atenção: Esta ação é irreversível. Uma vez confirmado, o item será removido da lista para outros convidados e não haverá como cancelar.
                   </p>
                </div>
                <p className="text-xs text-text-sub font-medium">Você selecionou: <span className="text-primary font-bold italic">{gifts.find(g => g.id === selectedGiftId)?.name}</span></p>
              </div>
              
              <div className="w-full text-left space-y-2">
                <label className="text-[10px] font-bold text-text-sub uppercase tracking-widest">Seu Nome (Apenas letras)</label>
                <input
                  type="text"
                  value={buyerName}
                  onChange={(e) => setBuyerName(e.target.value)}
                  placeholder="Nome Completo"
                  className="w-full px-4 py-3 bg-background-light border-none rounded-lg text-sm focus:ring-1 focus:ring-primary/50 outline-none font-medium"
                  autoFocus
                />
              </div>

              <div className="flex flex-col gap-3 w-full">
                <button 
                  onClick={handleConfirm}
                  className="w-full py-4 bg-primary text-white font-bold uppercase tracking-widest text-[10px] rounded-lg shadow-sm hover:opacity-90 transition-all"
                >
                  Confirmar Presente
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

export default GiftListScreen;
