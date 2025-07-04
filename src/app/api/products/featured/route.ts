import {  NextResponse } from 'next/server';
import { getFeaturedProducts } from '@/lib/mockData';

export async function GET() {
  try {
    const featuredProducts = getFeaturedProducts();
    return NextResponse.json(featuredProducts);
  } catch (error) {
    console.error('Error fetching featured products:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
