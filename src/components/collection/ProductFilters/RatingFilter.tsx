import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSortBy } from '@/store/productsSlice';
import { RootState } from '@/store/store';
import { StarIcon } from '@heroicons/react/24/solid';

export const RatingFilter: React.FC = () => {
  const dispatch = useDispatch();
  const currentSort = useSelector((state: RootState) => state.products.sortBy);

  return (
    <button
      onClick={() => dispatch(setSortBy(currentSort === 'rating' ? 'no-filter' : 'rating'))}
      className={`
        px-4 py-2 
        text-sm font-medium 
        rounded-lg border 
        transition-all duration-200 ease-in-out
        flex items-center gap-2
        hover:scale-105
        active:scale-[0.98]
        ${
          currentSort === 'rating' 
            ? 'bg-indigo-100 text-indigo-700 border-indigo-500 shadow-sm' 
            : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
        }
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
      `}
    >
      <StarIcon className={`w-4 h-4 ${
        currentSort === 'rating' ? 'text-indigo-600' : 'text-gray-500'
      }`} />
      <span>Top Rated</span>
      <div
        className={`w-1 h-1 rounded-full transition-all duration-300 ${
          currentSort === 'rating' ? 'bg-indigo-600 rotate-360' : 'bg-transparent rotate-0'
        }`}
      />
    </button>
  );
};