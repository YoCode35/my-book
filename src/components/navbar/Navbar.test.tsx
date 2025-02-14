import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navbar from './Navbar';
import { usePathname } from 'next/navigation';

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
}));

describe('Navbar', () => {
  it('renders the contact button if the pathname is not the contact path', () => {
    // Simulate the navigation path
    (usePathname as jest.Mock).mockReturnValue('/');

    render(<Navbar menuOpen={false} setMenuOpen={() => {}} />);

    // Check that the "Contact" button is displayed
    const contactButton = screen.getByRole('button', { name: /contact/i });
    expect(contactButton).toBeInTheDocument();
  });

  it('does not render the contact button if the pathname is the contact path', () => {
    // Simulate the navigation path
    (usePathname as jest.Mock).mockReturnValue('/contact');

    render(<Navbar menuOpen={false} setMenuOpen={() => {}} />);

    // Check that the "Contact" button is not displayed
    const contactButton = screen.queryByRole('button', { name: /contact/i });
    expect(contactButton).not.toBeInTheDocument();
  });

  it('navigates to the contact anchor when clicked', () => {
    // Simulate the navigation path
    (usePathname as jest.Mock).mockReturnValue('/');
  
    render(<Navbar menuOpen={false} setMenuOpen={() => {}} />);
  
    const contactButton = screen.getByRole('button', { name: /contact/i });
  
    // Simulate clicking the button
    fireEvent.click(contactButton);
  
    // Simulate changing the hash
    Object.defineProperty(window, 'location', {
      value: { hash: '#contact' },
      writable: true,
    });
  
    // Check if the navigation to the contact anchor occurred
    expect(window.location.hash).toBe('#contact');
  });  
});
