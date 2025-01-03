import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
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
