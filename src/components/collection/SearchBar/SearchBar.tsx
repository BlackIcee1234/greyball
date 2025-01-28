import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm } from '@/store/productsSlice';
import { RootState } from '@/store/store';
import { ChangeEvent } from 'react';

const SearchBar = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state: RootState) => state.products.searchTerm);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={handleSearch}
        className="text-black w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </div>
  );
};

export default SearchBar;