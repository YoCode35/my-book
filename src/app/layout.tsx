import './styles/globals.css';
import './styles/clashDisplay_font.css';
import Navbar from '../components/Header';
import Footer from '../components/Footer';
import Head from 'next/head';
import { Orbitron, Quicksand, Rubik } from 'next/font/google';

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-orbitron',
});

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-quicksand',
});

const rubik = Rubik({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-rubik',
});

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${orbitron.variable} ${quicksand.variable} ${rubik.variable}`}>
      <Head>
        <title>Yoann Grégoire - Développeur Web & Mobile</title>
        <meta name="description" content="Découvrez mon Book avec mes projets en développement web et mobile." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <main>{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
