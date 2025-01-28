import React from 'react';
import { PriceAscFilter } from './PriceAscFilter';
import { PriceDescFilter } from './PriceDescFilter';
import { RatingFilter } from './RatingFilter';

const ProductFilterContainer: React.FC = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 my-2 sm:my-3 md:my-4">
      <PriceAscFilter />
      <PriceDescFilter />
      <RatingFilter />
    </div>
  );
};

export default ProductFilterContainer;