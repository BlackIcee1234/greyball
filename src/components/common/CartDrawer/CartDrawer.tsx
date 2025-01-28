import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store/store';
import { removeFromCart } from '@/store/cartSlice';
import { IMAGES_CDN } from '@/constants/app.constant';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const total = useSelector((state: RootState) => state.cart.totalAmount);


  return (
    <div
      className={`fixed right-0 z-[999] top-0 h-full w-96 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="p-4 h-full flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-black">Shopping Cart</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
          {cartItems.map((item) => (
            <div
              key={item.product.id}
              className="flex items-center gap-4 p-4 border-b border-gray-200"
            >
              <img
                src={`${IMAGES_CDN}${item.product.image}`}
                alt={item.product.title}
                className="w-20 h-20 object-cover rounded"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-black">{item.product.title}</h3>
                <p className="text-gray-600">
                  Quantity: {item.quantity} x ${item.product.price}
                </p>
              </div>
              <button
                onClick={() => dispatch(removeFromCart(item.product.id))}
                className="text-red-500 hover:text-red-700"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-200 p-4">
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-semibold text-black">Total:</span>
            <span className="text-lg font-bold text-black">${total.toFixed(2)}</span>
          </div>
          <button className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-700 transition-colors">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
