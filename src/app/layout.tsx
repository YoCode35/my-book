import './styles/globals.css';
import Navbar from '../components/Header';
import Footer from '../components/Footer';
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
