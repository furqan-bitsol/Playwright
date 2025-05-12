import { PRODUCTS } from '@/mocks/products';
import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebaseConfig';
 // Adjust the path as needed
PRODUCTS.forEach(async (product) => {
 try {
    const docRef = await addDoc(collection(db, 'products'), product);
    console.log('Product added with ID:', docRef.id);
  } catch (e) {
    console.error('Error adding product:', e);
  }
});