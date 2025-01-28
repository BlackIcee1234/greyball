import { Metadata } from 'next';
import { useRouter } from 'next/router';
import { Geist } from "next/font/google";

export const metadata: Metadata = {
  title: 'E-commerce Product Listing | Home',
  description: 'Discover our amazing collection of products with modern filtering and search capabilities',
  openGraph: {
    title: 'E-commerce Product Listing | Home',
    description: 'Discover our amazing collection of products with modern filtering and search capabilities',
    type: 'website',
    locale: 'en_US',
  }
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export default function Home() {
  const router = useRouter();

  return (
    <div className={`${geistSans.variable} min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600`}>
      <button
        onClick={() => router.push('/collection')}
        className="px-8 py-4 bg-white text-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-[family-name:var(--font-geist-sans)]"
      >
        View Collection
      </button>
    </div>
  );
}
