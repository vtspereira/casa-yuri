
import {
  collection,
  doc,
  getDocs,
  onSnapshot,
  updateDoc,
  writeBatch,
} from 'firebase/firestore';
import { db } from './config';
import { Gift } from '../types';
import { INITIAL_GIFTS } from '../constants';

const GIFTS_COLLECTION = 'gifts_yuri';

function docToGift(id: string, data: Record<string, unknown>): Gift {
  return {
    id: Number(id),
    name: String(data.name ?? ''),
    category: String(data.category ?? ''),
    image: String(data.image ?? ''),
    purchased: Boolean(data.purchased),
    buyerName: data.buyerName ? String(data.buyerName) : undefined,
  };
}

export async function initializeGifts(): Promise<void> {
  if (!db) return;
  const snapshot = await getDocs(collection(db, GIFTS_COLLECTION));
  if (snapshot.empty) {
    const batch = writeBatch(db);
    for (const gift of INITIAL_GIFTS) {
      const ref = doc(db, GIFTS_COLLECTION, String(gift.id));
      batch.set(ref, {
        id: gift.id,
        name: gift.name,
        category: gift.category,
        image: gift.image,
        purchased: gift.purchased,
      });
    }
    await batch.commit();
  }
}

export function subscribeToGifts(callback: (gifts: Gift[]) => void): () => void {
  if (!db) {
    callback([...INITIAL_GIFTS].sort((a, b) => a.id - b.id));
    return () => {};
  }
  const q = collection(db, GIFTS_COLLECTION);
  const unsubscribe = onSnapshot(q, (snapshot) => {
    const gifts: Gift[] = snapshot.docs
      .map((d) => docToGift(d.id, d.data()))
      .sort((a, b) => a.id - b.id);
    callback(gifts);
  });
  return unsubscribe;
}

export async function purchaseGift(id: number, buyerName: string): Promise<void> {
  if (!db) throw new Error('Firebase não configurado. Configure as variáveis de ambiente na Vercel.');
  const ref = doc(db, GIFTS_COLLECTION, String(id));
  await updateDoc(ref, {
    purchased: true,
    buyerName,
  });
}
