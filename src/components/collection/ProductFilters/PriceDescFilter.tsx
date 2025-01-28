import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSortBy } from '@/store/productsSlice';
import { RootState } from '@/store/store';
import { ArrowDownIcon } from '@heroicons/react/24/outline';

export const PriceDescFilter: React.FC = () => {
  const dispatch = useDispatch();
  const currentSort = useSelector((state: RootState) => state.products.sortBy);
  const isActive = currentSort === 'price-desc';

  return (
    <button
      onClick={() => dispatch(setSortBy(isActive ? 'no-filter' : 'price-desc'))}
      className={`
        px-4 py-2 text-sm font-medium rounded-lg border border-gray-300 
        inline-flex items-center gap-2
        transition-all duration-200 ease-in-out
        hover:bg-gray-50 hover:shadow-sm
        active:scale-95
        hover:scale-105
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
        ${isActive 
          ? 'bg-indigo-100 text-indigo-700 border-indigo-500 scale-105' 
          : 'bg-white text-gray-700 hover:scale-102'
        }
      `}
    >
      <span className={`transition-transform duration-200`}>
        <ArrowDownIcon className="h-4 w-4" />
      </span>
      <span>Filter Descent Price</span>
      <div
        className={`w-1 h-1 rounded-full transition-all duration-300 ${
          isActive ? 'bg-indigo-600 rotate-360' : 'bg-transparent rotate-0'
        }`}
      />
    </button>
  );
};