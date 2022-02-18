import { render, screen } from '@testing-library/react';
import App from './App';

test('renders welcome message from AuthPage', () => {
  render(<App />);
  const authPageMessage = screen.getByText(/welcome/i);
  expect(authPageMessage).toBeInTheDocument();
});
