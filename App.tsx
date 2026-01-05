
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Gift } from './types';
import HomeScreen from './components/HomeScreen';
import GiftListScreen from './components/GiftListScreen';
import LocationScreen from './components/LocationScreen';
import PaletteScreen from './components/PaletteScreen';
import { initializeGifts, subscribeToGifts, purchaseGift } from './firebase/giftsService';

const App: React.FC = () => {
  const [gifts, setGifts] = useState<Gift[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const init = async () => {
      try {
        await initializeGifts();
        const unsubscribe = subscribeToGifts((updatedGifts) => {
          setGifts(updatedGifts);
          setLoading(false);
        });

        return () => unsubscribe();
      } catch (error) {
        console.error('Erro ao conectar com Firebase:', error);
        setLoading(false);
      }
    };

    init();
  }, []);

  const handlePurchase = async (id: number, buyerName: string) => {
    try {
      await purchaseGift(id, buyerName);
    } catch (error) {
      console.error('Erro ao confirmar presente:', error);
      alert('Ocorreu um erro ao confirmar o presente. Tente novamente.');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background-light dark:bg-background-dark flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="text-text-sub text-sm">Carregando presentes...</p>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <div className="min-h-screen bg-background-light dark:bg-background-dark selection:bg-primary/20 selection:text-primary">
        <Routes>
          <Route path="/" element={<HomeScreen gifts={gifts} onPurchase={handlePurchase} />} />
          <Route path="/gifts" element={<GiftListScreen gifts={gifts} onPurchase={handlePurchase} />} />
          <Route path="/location" element={<LocationScreen />} />
          <Route path="/palette" element={<PaletteScreen />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
