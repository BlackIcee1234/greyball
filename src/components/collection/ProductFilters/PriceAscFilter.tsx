import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSortBy } from '@/store/productsSlice';
import { RootState } from '@/store/store';
import { ArrowUpIcon } from '@heroicons/react/24/outline';

export const PriceAscFilter: React.FC = () => {
  const dispatch = useDispatch();
  const currentSort = useSelector((state: RootState) => state.products.sortBy);
  const isActive = currentSort === 'price-asc';

  return (
    <button
      onClick={() => dispatch(setSortBy(currentSort === 'price-asc' ? 'no-filter' : 'price-asc'))}
      className={`
        px-4 py-2 
        text-sm font-medium 
        rounded-lg border 
        transition-all duration-200 ease-in-out
        flex items-center gap-2
        hover:bg-gray-50 hover:scale-105
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
        active:scale-95
        ${
          currentSort === 'price-asc' 
            ? 'bg-indigo-100 text-indigo-700 border-indigo-500 shadow-sm' 
            : 'bg-white text-gray-700 border-gray-300'
        }
      `}
    >
      <span className={`transition-transform duration-200`}>
        <ArrowUpIcon className="h-4 w-4" />
      </span>
      <span>Filter Ascendancy Price</span>
      <div
        className={`w-1 h-1 rounded-full transition-all duration-300 ${
          isActive ? 'bg-indigo-600 rotate-360' : 'bg-transparent rotate-0'
        }`}
      />
    </button>
  );
};