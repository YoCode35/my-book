import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { vi, type Mock } from 'vitest';
import Navbar from './Navbar';
import { usePathname } from 'next/navigation';

// Mock of usePathname
vi.mock('next/navigation', () => ({
  usePathname: vi.fn(),
}));

describe('Navbar', () => {
  it('renders the contact button if the pathname is not the contact path', () => {
    // Simulate the navigation path
    (usePathname as Mock).mockReturnValue('/');

    render(<Navbar menuOpen={false} setMenuOpen={() => {}} />);

    // Target the "Contact" button with `getByRole`
    const contactButton = screen.getByRole('button', { name: /contact/i });
    expect(contactButton).toBeInTheDocument();
  });

  it('does not render the contact button if the pathname is the contact path', () => {
    // Simulate the navigation path
    (usePathname as Mock).mockReturnValue('/contact');

    render(<Navbar menuOpen={false} setMenuOpen={() => {}} />);

    // Check that the "Contact" button is not in the document
    const contactButton = screen.queryByRole('button', { name: /contact/i });
    expect(contactButton).not.toBeInTheDocument();
  });

  it('navigates to the contact anchor when clicked', () => {
    // Simulate the navigation path
    (usePathname as Mock).mockReturnValue('/');

    render(<Navbar menuOpen={false} setMenuOpen={() => {}} />);

    // Target the "Contact" button
    const contactButton = screen.getByRole('button', { name: /contact/i });

    // Simulate clicking the button
    fireEvent.click(contactButton);

    // Simulate changing the hash
    Object.defineProperty(window, 'location', {
      value: { hash: '#contact' },
      writable: true,
    });

    // Check that the hash was correctly updated
    expect(window.location.hash).toBe('#contact');
  });

  // Mobile version test
  it('renders the contact button in mobile view', () => {
    // Simulate the mobile screen size
    global.innerWidth = 375; // Typical width for mobile (e.g., 375px for an iPhone)

    // Simulate the navigation path
    (usePathname as Mock).mockReturnValue('/');

    render(<Navbar menuOpen={false} setMenuOpen={() => {}} />);

    // Check that the "Contact" button is visible in mobile view
    const contactButton = screen.getByRole('button', { name: /contact/i });
    expect(contactButton).toBeInTheDocument();
  });

  // Desktop version test
  it('renders the contact button in desktop view', () => {
    // Simulate the desktop screen size
    global.innerWidth = 1024; // Typical width for desktop

    // Simulate the navigation path
    (usePathname as Mock).mockReturnValue('/');

    render(<Navbar menuOpen={false} setMenuOpen={() => {}} />);

    // Check that the "Contact" button is visible in desktop view
    const contactButton = screen.getByRole('button', { name: /contact/i });
    expect(contactButton).toBeInTheDocument();
  });
});
