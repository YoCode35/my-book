import './globals.css'; // Conserve tes styles globaux
import Navbar from '../components/Header';
import Footer from '../components/Footer';
import { Orbitron, Quicksand, Rubik } from 'next/font/google';

// Configuration des polices
const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '700'], // Les poids utilisés
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
      <body className="bg-bkgd-black-colored-spots bg-cover bg-top min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <main>{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
