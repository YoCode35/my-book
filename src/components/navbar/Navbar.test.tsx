import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navbar from './Navbar';
import { usePathname } from 'next/navigation';

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
}));

describe('Navbar', () => {
  it('renders the contact button if the pathname is not the contact path', () => {
    // Simule le chemin de navigation
    (usePathname as jest.Mock).mockReturnValue('/');

    render(<Navbar menuOpen={false} setMenuOpen={() => {}} />);

    // Vérifier que le bouton "Contact" est affiché
    const contactButton = screen.getByRole('button', { name: /contact/i });
    expect(contactButton).toBeInTheDocument();
  });

  it('does not render the contact button if the pathname is the contact path', () => {
    // Simule le chemin de navigation
    (usePathname as jest.Mock).mockReturnValue('/contact');

    render(<Navbar menuOpen={false} setMenuOpen={() => {}} />);

    // Vérifie que le bouton "Contact" n'est pas affiché
    const contactButton = screen.queryByRole('button', { name: /contact/i });
    expect(contactButton).not.toBeInTheDocument();
  });

  it('navigates to the contact anchor when clicked', () => {
    // Simule le chemin de navigation
    (usePathname as jest.Mock).mockReturnValue('/');
  
    render(<Navbar menuOpen={false} setMenuOpen={() => {}} />);
  
    const contactButton = screen.getByRole('button', { name: /contact/i });
  
    // Simule le clic sur le bouton
    fireEvent.click(contactButton);
  
    // Simule le changement de hash
    Object.defineProperty(window, 'location', {
      value: { hash: '#contact' },
      writable: true,
    });
  
    // Vérifie si la navigation vers l'ancre contact a bien eu lieu
    expect(window.location.hash).toBe('#contact');
  });  
});
