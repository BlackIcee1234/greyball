import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { FaShoppingCart } from 'react-icons/fa';
import CartDrawer from '../CartDrawer/CartDrawer';

const Header: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { items, totalAmount } = useSelector((state: RootState) => state.cart);

  const totalItems = items.reduce((total, item) => total + item.quantity, 0);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md flex justify-between items-center px-4 sm:px-6 lg:px-8 z-50 h-14 sm:h-16 lg:h-20">
        <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800">
          Axel E-commerce
        </h1>
        <div className="flex items-center gap-2 sm:gap-4 lg:gap-6">
          <div className="hidden sm:flex items-center gap-2">
            <span className="text-sm lg:text-base text-gray-600">Items:</span>
            <strong className="text-sm lg:text-base text-gray-900">{totalItems}</strong>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <span className="text-sm lg:text-base text-gray-600">Total:</span>
            <strong className="text-sm lg:text-base text-gray-900">${totalAmount.toFixed(2)}</strong>
          </div>
          <button
            onClick={toggleDrawer}
            className="relative p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Open cart"
          >
            <FaShoppingCart className="text-gray-800 text-lg sm:text-xl lg:text-2xl" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 sm:w-5 sm:h-5 text-[10px] sm:text-xs flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </header>
      <CartDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </>
  );
};

export default Header;
