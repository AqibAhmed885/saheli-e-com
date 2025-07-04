import { NextRequest, NextResponse } from 'next/server';
import {  getProductsByCategory, categories } from '@/lib/mockData';
import { FilterOptions } from '@/types';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const category = searchParams.get('category') || 'all';
    const minPrice = searchParams.get('minPrice');
    const maxPrice = searchParams.get('maxPrice');
    const sizes = searchParams.get('sizes')?.split(',') || [];
    const colors = searchParams.get('colors')?.split(',') || [];
    const sortBy = searchParams.get('sortBy') as FilterOptions['sortBy'];
    const search = searchParams.get('search');
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '12');

    let filteredProducts = getProductsByCategory(category);

    // Apply search filter
    if (search) {
      filteredProducts = filteredProducts.filter(product =>
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.description.toLowerCase().includes(search.toLowerCase()) ||
        product.tags?.some(tag => tag.toLowerCase().includes(search.toLowerCase()))
      );
    }

    // Apply price filter
    if (minPrice) {
      filteredProducts = filteredProducts.filter(product => product.price >= parseFloat(minPrice));
    }
    if (maxPrice) {
      filteredProducts = filteredProducts.filter(product => product.price <= parseFloat(maxPrice));
    }

    // Apply size filter
    if (sizes.length > 0) {
      filteredProducts = filteredProducts.filter(product =>
        product.sizes.some(size => sizes.includes(size))
      );
    }

    // Apply color filter
    if (colors.length > 0) {
      filteredProducts = filteredProducts.filter(product =>
        product.colors.some(color => colors.includes(color))
      );
    }

    // Apply sorting
    if (sortBy) {
      switch (sortBy) {
        case 'newest':
          filteredProducts.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
          break;
        case 'price-low':
          filteredProducts.sort((a, b) => a.price - b.price);
          break;
        case 'price-high':
          filteredProducts.sort((a, b) => b.price - a.price);
          break;
        case 'rating':
          filteredProducts.sort((a, b) => b.rating - a.rating);
          break;
      }
    }

    // Apply pagination
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

    const response = {
      products: paginatedProducts,
      totalProducts: filteredProducts.length,
      totalPages: Math.ceil(filteredProducts.length / limit),
      currentPage: page,
      categories,
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
