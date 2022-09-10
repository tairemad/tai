import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Tairema Dailey', () => {
  render(<App />);
  const header = screen.getByText(/Tairema Dailey/i);
  expect(header).toBeInTheDocument();
});
