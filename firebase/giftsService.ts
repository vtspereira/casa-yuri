import { collection, doc, getDocs, updateDoc, onSnapshot, query, setDoc } from 'firebase/firestore';
import { db } from './config';
import { Gift } from '../types';
import { INITIAL_GIFTS } from '../constants';

const GIFTS_COLLECTION = 'gifts';

export const initializeGifts = async () => {
  const giftsRef = collection(db, GIFTS_COLLECTION);
  const snapshot = await getDocs(giftsRef);

  if (snapshot.empty) {
    for (const gift of INITIAL_GIFTS) {
      await setDoc(doc(db, GIFTS_COLLECTION, gift.id.toString()), gift);
    }
  }
};

export const getGifts = async (): Promise<Gift[]> => {
  const giftsRef = collection(db, GIFTS_COLLECTION);
  const snapshot = await getDocs(giftsRef);
  return snapshot.docs.map(doc => doc.data() as Gift);
};

export const subscribeToGifts = (callback: (gifts: Gift[]) => void) => {
  const giftsRef = collection(db, GIFTS_COLLECTION);
  const q = query(giftsRef);

  return onSnapshot(q, (snapshot) => {
    const gifts = snapshot.docs.map(doc => doc.data() as Gift);
    gifts.sort((a, b) => a.id - b.id);
    callback(gifts);
  });
};

export const purchaseGift = async (id: number, buyerName: string) => {
  const giftRef = doc(db, GIFTS_COLLECTION, id.toString());
  await updateDoc(giftRef, {
    purchased: true,
    buyerName: buyerName
  });
};
