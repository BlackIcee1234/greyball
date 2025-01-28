import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '@/store/productsSlice';
import ProductList from '@/components/collection/ProductList/ProductList';

const mockProducts = [
  {
    id: 1,
    title: 'Test Product 1',
    price: 99.99,
    description: 'Test description 1',
    image: '/test-image-1.jpg',
    currency: 'USD',
    rating: 4.5
  },
  {
    id: 2,
    title: 'Test Product 2',
    price: 149.99,
    description: 'Test description 2',
    image: '/test-image-2.jpg',
    currency: 'USD',
    rating: 4.0
  }
];

const mockStore = configureStore({
  reducer: {
    products: productsReducer
  },
  preloadedState: {
    products: {
      items: mockProducts,
      filteredItems: mockProducts,
      searchTerm: '',
      sortBy: 'no-filter'
    }
  }
});

describe('ProductList', () => {
  const renderProductList = () => {
    return render(
      <Provider store={mockStore}>
        <ProductList />
      </Provider>
    );
  };

  it('renders all products from the store', () => {
    renderProductList();
    
    mockProducts.forEach(product => {
      expect(screen.getByText(product.title)).toBeInTheDocument();
      expect(screen.getByText(product.description)).toBeInTheDocument();
      expect(screen.getByText(`$${product.price} ${product.currency}`)).toBeInTheDocument();
    });
  });

  it('applies correct grid layout classes', () => {
    renderProductList();
    
    const productGrid = screen.getByTestId('product-grid');
    expect(productGrid).toHaveClass('grid grid-cols-3 gap-4');
  });

  it('renders correct number of product cards', () => {
    renderProductList();
    
    const productCards = screen.getAllByTestId('product-card');
    expect(productCards).toHaveLength(mockProducts.length);
  });
});