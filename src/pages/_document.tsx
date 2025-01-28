import { Html, Head, Main, NextScript } from "next/document";
import { Provider } from 'react-redux';
import { store } from '@/store/store';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased bg-gradient-to-r from-blue-500 to-purple-600">
        <Provider store={store}>
          <Main />
          <NextScript />
        </Provider>
      </body>
    </Html>
  );
}
