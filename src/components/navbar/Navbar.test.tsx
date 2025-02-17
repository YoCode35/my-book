import { render, screen, fireEvent } from '@testing-library/react';

import '@testing-library/jest-dom'; // Vitest supporte jest-dom aussi
import { vi, type Mock } from 'vitest'; // Import Mock type from vitest
import Navbar from './Navbar'; // Adapter le chemin en fonction de votre structure de répertoire
import { usePathname } from 'next/navigation'; // Importer usePathname


// Mocker `usePathname` comme dans Jest
vi.mock('next/navigation', () => ({
  usePathname: vi.fn(),
}));

describe('Navbar', () => {
  it('renders the contact button if the pathname is not the contact path', () => {

    // Simuler le chemin de navigation
    (usePathname as Mock).mockReturnValue('/'); // Chemin par défaut


    render(<Navbar menuOpen={false} setMenuOpen={() => {}} />);

    // Check that the "Contact" button is displayed
    const contactButton = screen.getByRole('button', { name: /contact/i });
    expect(contactButton).toBeInTheDocument();
  });

  it('does not render the contact button if the pathname is the contact path', () => {

    // Simuler le chemin de navigation
    (usePathname as Mock).mockReturnValue('/contact'); // Chemin "contact"


    render(<Navbar menuOpen={false} setMenuOpen={() => {}} />);

    // Check that the "Contact" button is not displayed
    const contactButton = screen.queryByRole('button', { name: /contact/i });
    expect(contactButton).not.toBeInTheDocument();
  });

  it('navigates to the contact anchor when clicked', () => {

    // Simuler le chemin de navigation
    (usePathname as Mock).mockReturnValue('/'); // Chemin par défaut


  
    render(<Navbar menuOpen={false} setMenuOpen={() => {}} />);

    const contactButton = screen.getByRole('button', { name: /contact/i });

    // Simuler le clic sur le bouton
    fireEvent.click(contactButton);

    // Simuler le changement de hash

    Object.defineProperty(window, 'location', {
      value: { hash: '#contact' },
      writable: true,
    });

    expect(window.location.hash).toBe('#contact');
  });  
});
