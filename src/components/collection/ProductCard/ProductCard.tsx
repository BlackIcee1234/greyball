import React from 'react';
import Image from 'next/image';
import { Product } from '@/types/products';
import { IMAGES_CDN } from '@/constants/app.constant';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/store/cartSlice';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="w-full sm:max-w-[280px] md:max-w-[100%] lg:max-w-[350px] rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-40 sm:h-48 md:h-56 lg:h-64 w-full">
        <Image
          src={`${IMAGES_CDN}${product.image}`}
          alt={product.title}
          fill
          className="object-contain p-2"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 280px, (max-width: 1024px) 320px, 350px"
        />
      </div>
      <div className="px-4 sm:px-5 md:px-6 py-3 sm:py-4">
        <p className="text-black font-bold text-lg sm:text-xl mb-2 truncate">
          {product.title}
        </p>
        <p className="text-gray-700 text-sm sm:text-base mb-2 line-clamp-2 min-h-[2.5rem]">
          {product.description}
        </p>
        <div className="flex justify-between items-center mt-auto">
          <span className="text-lg sm:text-xl font-bold text-gray-900">
            ${product.price} {product.currency}
          </span>
          <div className="flex items-center">
            <span className="text-yellow-400 text-lg">★</span>
            <span className="ml-1 text-xs sm:text-sm text-gray-600">
              {product.rating}
            </span>
          </div>
        </div>
      </div>
      <div className="px-4 sm:px-5 md:px-6 pb-3 sm:pb-4">
        <button
          onClick={handleAddToCart}
          className="w-full bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded transition duration-300 text-sm sm:text-base"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
