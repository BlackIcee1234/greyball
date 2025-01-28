import { useState, useEffect } from 'react';
import { store } from '@/store/store';
import { setProducts as setReduxProducts } from '@/store/productsSlice';

export const useProducts = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/v1/product');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        // Dispatch directly to the store instead of using useDispatch
        store.dispatch(setReduxProducts(data));
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []); // Remove dispatch from dependencies since we're not using it anymore

  return { loading, error };
};
