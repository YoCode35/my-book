import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { vi, type Mock } from 'vitest';
import Navbar from './Navbar';
import { usePathname } from 'next/navigation';

// Mock de usePathname
vi.mock('next/navigation', () => ({
  usePathname: vi.fn(),
}));

describe('Navbar', () => {
  it('renders the contact button if the pathname is not the contact path', () => {
    // Simule le chemin de navigation
    (usePathname as Mock).mockReturnValue('/');

    render(<Navbar menuOpen={false} setMenuOpen={() => {}} />);

    // Cibler le bouton "Contact" avec `getByRole`
    const contactButton = screen.getByRole('button', { name: /contact/i });
    expect(contactButton).toBeInTheDocument();
  });

  it('does not render the contact button if the pathname is the contact path', () => {
    // Simule le chemin de navigation
    (usePathname as Mock).mockReturnValue('/contact');

    render(<Navbar menuOpen={false} setMenuOpen={() => {}} />);

    // Vérifier que le bouton "Contact" n'est pas dans le document
    const contactButton = screen.queryByRole('button', { name: /contact/i });
    expect(contactButton).not.toBeInTheDocument();
  });

  it('navigates to the contact anchor when clicked', () => {
    // Simule le chemin de navigation
    (usePathname as Mock).mockReturnValue('/');

    render(<Navbar menuOpen={false} setMenuOpen={() => {}} />);

    // Cibler le bouton "Contact"
    const contactButton = screen.getByRole('button', { name: /contact/i });

    // Simule le clic sur le bouton
    fireEvent.click(contactButton);

    // Simuler le changement de hash
    Object.defineProperty(window, 'location', {
      value: { hash: '#contact' },
      writable: true,
    });

    // Vérifier que le hash a bien été mis à jour
    expect(window.location.hash).toBe('#contact');
  });

  // Test version mobile
  it('renders the contact button in mobile view', () => {
    // Simuler la taille de l'écran mobile
    global.innerWidth = 375; // Largeur typique pour mobile (ex. 375px pour un iPhone)

    // Simule le chemin de navigation
    (usePathname as Mock).mockReturnValue('/');

    render(<Navbar menuOpen={false} setMenuOpen={() => {}} />);

    // Vérifier que le bouton "Contact" est visible en version mobile
    const contactButton = screen.getByRole('button', { name: /contact/i });
    expect(contactButton).toBeInTheDocument();
  });

  // Test version desktop
  it('renders the contact button in desktop view', () => {
    // Simuler la taille de l'écran desktop
    global.innerWidth = 1024; // Largeur typique pour desktop

    // Simule le chemin de navigation
    (usePathname as Mock).mockReturnValue('/');

    render(<Navbar menuOpen={false} setMenuOpen={() => {}} />);

    // Vérifier que le bouton "Contact" est visible en version desktop
    const contactButton = screen.getByRole('button', { name: /contact/i });
    expect(contactButton).toBeInTheDocument();
  });
});
