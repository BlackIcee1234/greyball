import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '@/types/products';

interface ProductsState {
  items: Product[];
  filteredItems: Product[];
  searchTerm: string;
  sortBy: string;
}

const initialState: ProductsState = {
  items: [],
  filteredItems: [],
  searchTerm: '',
  sortBy: 'no-filter',
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.items = action.payload;
      state.filteredItems = action.payload;
    },
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
      // First filter the items based on search term
      let filtered = state.items.filter(product =>
        product.title.toLowerCase().includes(action.payload.toLowerCase())
      );
      
      // Then apply the current sort
      switch (state.sortBy) {
        case 'price-asc':
          filtered.sort((a, b) => a.price - b.price);
          break;
        case 'price-desc':
          filtered.sort((a, b) => b.price - a.price);
          break;
        case 'rating':
          filtered.sort((a, b) => b.rating - a.rating);
          break;
        case 'no-filter':
          filtered.sort((a, b) => state.items.indexOf(a) - state.items.indexOf(b));
          break;
      }
      
      state.filteredItems = filtered;
    },
    setSortBy: (state, action: PayloadAction<string>) => {
      state.sortBy = action.payload;
      // First apply search filter
      let filtered = state.items.filter(product =>
        product.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      );
      
      // Then apply sorting
      switch (action.payload) {
        case 'price-asc':
          filtered.sort((a, b) => a.price - b.price);
          break;
        case 'price-desc':
          filtered.sort((a, b) => b.price - a.price);
          break;
        case 'rating':
          filtered.sort((a, b) => b.rating - a.rating);
          break;
        case 'no-filter':
          filtered.sort((a, b) => state.items.indexOf(a) - state.items.indexOf(b));
          break;
      }
      state.filteredItems = filtered;
    },
  },
});

export const { setProducts, setSearchTerm, setSortBy } = productsSlice.actions;
export default productsSlice.reducer;