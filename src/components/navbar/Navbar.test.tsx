import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navbar from './Navbar'; // Adapter le chemin en fonction de votre structure de répertoire
import { usePathname } from 'next/navigation'; // Importer usePathname

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
}));

describe('Navbar', () => {
  it('renders the contact button if the pathname is not the contact path', () => {
    // Simuler le chemin de navigation
    (usePathname as jest.Mock).mockReturnValue('/'); // Chemin par défaut

    render(<Navbar menuOpen={false} setMenuOpen={() => {}} />);

    // Vérifier que le bouton "Contact" est affiché
    const contactButton = screen.getByRole('button', { name: /contact/i });
    expect(contactButton).toBeInTheDocument();
  });

  it('does not render the contact button if the pathname is the contact path', () => {
    // Simuler le chemin de navigation
    (usePathname as jest.Mock).mockReturnValue('/contact'); // Chemin "contact"

    render(<Navbar menuOpen={false} setMenuOpen={() => {}} />);

    // Vérifier que le bouton "Contact" n'est pas affiché
    const contactButton = screen.queryByRole('button', { name: /contact/i });
    expect(contactButton).not.toBeInTheDocument();
  });

  it('navigates to the contact anchor when clicked', () => {
    // Simuler le chemin de navigation
    (usePathname as jest.Mock).mockReturnValue('/'); // Chemin par défaut
  
    render(<Navbar menuOpen={false} setMenuOpen={() => {}} />);
  
    const contactButton = screen.getByRole('button', { name: /contact/i });
  
    // Simuler le clic sur le bouton
    fireEvent.click(contactButton);
  
    // Simuler le changement de hash
    Object.defineProperty(window, 'location', {
      value: { hash: '#contact' },
      writable: true,
    });
  
    // Vérifier si la navigation vers l'ancre contact a bien eu lieu
    expect(window.location.hash).toBe('#contact');
  });  
});
