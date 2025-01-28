export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    currency: string;
    rating: number;
    image: string;
  }

  export interface ProductListProps {
    products: Product[];
  }
  
  export interface CartItem extends Product {
    quantity: number;
  }
  
  export interface RootState {
    cart: {
      items: CartItem[];
      total: number;
    };
    products: {
      items: Product[];
      filteredItems: Product[];
      searchTerm: string;
      sortBy: string;
    };
  }