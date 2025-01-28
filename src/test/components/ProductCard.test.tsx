import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '@/store/cartSlice';
import ProductCard from '@/components/collection/ProductCard/ProductCard';

const mockProduct = {
  id: 1,
  title: 'Test Product',
  price: 99.99,
  description: 'Test description',
  image: '/test-image.jpg',
  currency: 'USD',
  rating: 4.5
};

const mockStore = configureStore({
  reducer: {
    cart: cartReducer
  }
});

describe('ProductCard', () => {
  beforeEach(() => {
    // Clear store state before each test
    mockStore.dispatch({ type: 'cart/clearCart' });
  });

  const renderProductCard = () => {
    return render(
      <Provider store={mockStore}>
        <ProductCard product={mockProduct} />
      </Provider>
    );
  };

  it('renders product information correctly', () => {
    renderProductCard();
    
    expect(screen.getByText(mockProduct.title)).toBeInTheDocument();
    expect(screen.getByText(mockProduct.description)).toBeInTheDocument();
    expect(screen.getByText(`$${mockProduct.price} ${mockProduct.currency}`)).toBeInTheDocument();
    expect(screen.getByText(mockProduct.rating.toString())).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('alt', mockProduct.title);
  });

  it('dispatches addToCart action when Add to Cart button is clicked', () => {
    renderProductCard();
    
    const addToCartButton = screen.getByText('Add to Cart');
    fireEvent.click(addToCartButton);
    
    const cartState = mockStore.getState().cart;
    expect(cartState.items).toContainEqual({
      product: mockProduct,
      quantity: 1
    });
  });

  it('applies correct styling classes', () => {
    renderProductCard();
    
    expect(screen.getByRole('img').parentElement).toHaveClass('relative h-48 w-full');
    expect(screen.getByText(mockProduct.title)).toHaveClass('text-black font-bold text-xl mb-2 truncate');
    expect(screen.getByText('Add to Cart')).toHaveClass(
      'w-full bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded transition duration-300'
    );
  });
});