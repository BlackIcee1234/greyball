import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: {
    default: 'E-commerce Product Listing',
    template: '%s | E-commerce Product Listing'
  },
  description: 'Modern e-commerce platform with advanced product filtering and search capabilities',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'E-commerce Product Listing'
  }
};

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
