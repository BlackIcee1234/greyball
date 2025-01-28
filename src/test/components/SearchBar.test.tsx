import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '@/store/productsSlice';
import SearchBar from '@/components/collection/SearchBar/SearchBar';

const mockStore = configureStore({
  reducer: {
    products: productsReducer
  }
});

describe('SearchBar', () => {
  const renderSearchBar = () => {
    return render(
      <Provider store={mockStore}>
        <SearchBar />
      </Provider>
    );
  };

  it('renders search input correctly', () => {
    renderSearchBar();
    const searchInput = screen.getByPlaceholderText('Search products...');
    expect(searchInput).toBeInTheDocument();
    expect(searchInput).toHaveAttribute('type', 'text');
  });

  it('updates search term in Redux store when typing', () => {
    renderSearchBar();
    const searchInput = screen.getByPlaceholderText('Search products...');
    
    fireEvent.change(searchInput, { target: { value: 'test search' } });
    
    const state = mockStore.getState().products;
    expect(state.searchTerm).toBe('test search');
  });

  it('applies correct styling classes', () => {
    renderSearchBar();
    const searchInput = screen.getByPlaceholderText('Search products...');
    
    expect(searchInput).toHaveClass(
      'w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
    );
  });
});