import React, { useState, useEffect, useRef, useCallback } from "react";
import { useSelector } from "react-redux";
import { ProductCard } from "@/components/collection/ProductCard";
import { Product } from "@/types/products";
import { RootState } from "@/store/store";

const ITEMS_PER_PAGE = 10;

const ProductList: React.FC = () => {
  const products = useSelector((state: RootState) => state.products.filteredItems);
  const [displayedProducts, setDisplayedProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(1);
  const loader = useRef(null);

  const loadMore = useCallback(() => {
    const startIndex = (page - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const newProducts = products?.slice(0, endIndex) || [];
    
    setDisplayedProducts(newProducts);
    if (newProducts.length < (products?.length || 0)) {
      setPage(page + 1);
    }
  }, [page, products]);

  useEffect(() => {
    setPage(1);
    setDisplayedProducts(products?.slice(0, ITEMS_PER_PAGE) || []);
  }, [products]);

  // Intersection Observer setup for infinite scroll
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const target = entries[0];
      if (target.isIntersecting && displayedProducts.length < (products?.length || 0)) {
        loadMore();
      }
    }, {
      root: null,
      rootMargin: "20px",
      threshold: 0.1
    });

    if (loader.current) {
      observer.observe(loader.current);
    }

    return () => observer.disconnect();
  }, [loadMore, displayedProducts.length, products?.length]);

  return (
    <>
      <div data-testid="product-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {displayedProducts.map((product: Product) => (
          <div key={product.id} data-testid="product-card">
            <ProductCard product={product}/>
          </div>
        ))}
      </div>
      <div ref={loader} className="h-10" />
    </>
  );
};

export default ProductList;
