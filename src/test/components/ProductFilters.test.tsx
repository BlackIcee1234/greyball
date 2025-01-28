import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '@/store/productsSlice';
import { PriceAscFilter } from '@/components/collection/ProductFilters/PriceAscFilter';
import { PriceDescFilter } from '@/components/collection/ProductFilters/PriceDescFilter';
import { RatingFilter } from '@/components/collection/ProductFilters/RatingFilter';

const mockStore = configureStore({
  reducer: {
    products: productsReducer
  }
});

describe('Product Filters', () => {
  describe('PriceAscFilter', () => {
    const renderPriceAscFilter = () => {
      return render(
        <Provider store={mockStore}>
          <PriceAscFilter />
        </Provider>
      );
    };

    it('renders correctly with initial state', () => {
      renderPriceAscFilter();
      const filterButton = screen.getByText('Filter Ascendancy Price');
      expect(filterButton).toBeInTheDocument();
      expect(filterButton).not.toHaveClass('bg-indigo-100');
    });

    it('toggles filter state when clicked', () => {
      renderPriceAscFilter();
      const filterButton = screen.getByText('Filter Ascendancy Price');
      
      fireEvent.click(filterButton);
      expect(mockStore.getState().products.sortBy).toBe('price-asc');
      
      fireEvent.click(filterButton);
      expect(mockStore.getState().products.sortBy).toBe('no-filter');
    });
  });

  describe('PriceDescFilter', () => {
    const renderPriceDescFilter = () => {
      return render(
        <Provider store={mockStore}>
          <PriceDescFilter />
        </Provider>
      );
    };

    it('renders correctly with initial state', () => {
      renderPriceDescFilter();
      const filterButton = screen.getByText('Filter Descent Price');
      expect(filterButton).toBeInTheDocument();
      expect(filterButton).not.toHaveClass('bg-indigo-100');
    });

    it('toggles filter state when clicked', () => {
      renderPriceDescFilter();
      const filterButton = screen.getByText('Filter Descent Price');
      
      fireEvent.click(filterButton);
      expect(mockStore.getState().products.sortBy).toBe('price-desc');
      
      fireEvent.click(filterButton);
      expect(mockStore.getState().products.sortBy).toBe('no-filter');
    });
  });

  describe('RatingFilter', () => {
    const renderRatingFilter = () => {
      return render(
        <Provider store={mockStore}>
          <RatingFilter />
        </Provider>
      );
    };

    it('renders correctly with initial state', () => {
      renderRatingFilter();
      const filterButton = screen.getByText('Top Rated');
      expect(filterButton).toBeInTheDocument();
      expect(filterButton).not.toHaveClass('bg-indigo-100');
    });

    it('toggles filter state when clicked', () => {
      renderRatingFilter();
      const filterButton = screen.getByText('Top Rated');
      
      fireEvent.click(filterButton);
      expect(mockStore.getState().products.sortBy).toBe('rating');
      
      fireEvent.click(filterButton);
      expect(mockStore.getState().products.sortBy).toBe('no-filter');
    });
  });
});