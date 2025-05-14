import { NextRequest, NextResponse } from 'next/server';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '@/firebase/firebaseConfig';

export async function GET(req: NextRequest) {
  try {
    const snapshot = await getDocs(collection(db, 'products'));
    const products = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return NextResponse.json(products, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message ?? 'Failed to fetch products' },
      { status: 500 }
    );
  }
}
