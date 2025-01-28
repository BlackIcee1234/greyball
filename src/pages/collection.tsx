import { Metadata } from 'next';
import { ProductList } from '@/components/collection/ProductList';
import { SearchBar } from '@/components/collection/SearchBar';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { useProducts } from '@/hooks/useProducts';
import { Provider } from 'react-redux';
import { store } from '@/store/store';
import { ProductFilterContainer } from '@/components/collection/ProductFilters';

export const metadata: Metadata = {
  title: 'E-commerce Product Listing | Collection',
  description: 'Browse our amazing products with advanced filtering and search capabilities',
  openGraph: {
    title: 'E-commerce Product Listing | Collection',
    description: 'Browse our amazing products with advanced filtering and search capabilities',
    type: 'website',
    locale: 'en_US',
    images: [{
      url: '/products/images/featured-collection.jpg',
      width: 1200,
      height: 630,
      alt: 'Featured Products Collection'
    }]
  }
};

export default function Collection() {
  const { loading, error } = useProducts();

  if (loading) {
    return (
      <Provider store={store}>
        <div>Loading...</div>
      </Provider>
    );
  }

  if (error) {
    return (
      <Provider store={store}>
        <div>Error loading products</div>
      </Provider>
    );
  }

  return (
    <Provider store={store}>
      <main className="container mx-auto px-4 py-8 mt-[50px] bg-gradient-to-r from-blue-500 to-purple-600">
        <Header/>
        <ProductFilterContainer/>
        <SearchBar/>
        <ProductList />
      </main>
      <Footer/>
    </Provider>
  );
}