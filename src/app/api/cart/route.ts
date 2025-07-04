import { NextRequest, NextResponse } from 'next/server';
import { mockCartItems } from '@/lib/mockData';

// Mock cart storage (in real app, this would be database/session storage)
let cartItems = [...mockCartItems];

export async function GET() {
  try {
    return NextResponse.json(cartItems);
  } catch (error) {
    console.error('Error fetching cart:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const newItem = await request.json();
    
    // Check if item already exists in cart
    const existingItemIndex = cartItems.findIndex(
      item => item.productId === newItem.productId && 
               item.size === newItem.size && 
               item.color === newItem.color
    );

    if (existingItemIndex !== -1) {
      // Update quantity if item exists
      cartItems[existingItemIndex].quantity += newItem.quantity;
    } else {
      // Add new item
      cartItems.push({
        ...newItem,
        id: Date.now().toString(),
      });
    }

    return NextResponse.json(cartItems);
  } catch (error) {
    console.error('Error adding to cart:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const updatedItem = await request.json();
    const itemIndex = cartItems.findIndex(item => item.id === updatedItem.id);
    
    if (itemIndex === -1) {
      return NextResponse.json({ error: 'Item not found' }, { status: 404 });
    }

    cartItems[itemIndex] = { ...cartItems[itemIndex], ...updatedItem };
    return NextResponse.json(cartItems);
  } catch (error) {
    console.error('Error updating cart:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const itemId = searchParams.get('id');
    
    if (!itemId) {
      return NextResponse.json({ error: 'Item ID required' }, { status: 400 });
    }

    cartItems = cartItems.filter(item => item.id !== itemId);
    return NextResponse.json(cartItems);
  } catch (error) {
    console.error('Error removing from cart:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
