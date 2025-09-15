import { render, screen } from '@testing-library/react';
import App from './App';

test('renders login screen', () => {
  render(<App />);
  const headingElement = screen.getByRole('heading', { name: /Login/i });
  expect(headingElement).toBeInTheDocument();

  const usernameInputElement = screen.getByPlaceholderText(/Username/i);
  expect(usernameInputElement).toBeInTheDocument();

  const passwordInputElement = screen.getByPlaceholderText(/Password/i);
  expect(passwordInputElement).toBeInTheDocument();
});
