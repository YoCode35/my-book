// pages/_app.tsx
import { AppProps } from 'next/app'; // Importation des types nécessaires
import '../styles/fonts.css';

function MyApp({ Component, pageProps }: AppProps) { // Typage des props
  return <Component {...pageProps} />;
}

export default MyApp;
