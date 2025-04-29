import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebaseConfig';
import { Product } from '@/types/products';

export const fetchProductsFromFirebase = async (): Promise<Product[]> => {
  const productsCollection = collection(db, 'products');
  const snapshot = await getDocs(productsCollection);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Product));
};