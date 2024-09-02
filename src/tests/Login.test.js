import { render, screen, fireEvent } from '@testing-library/react';
import Login from '../components/Login';

test('renders login component', () => {
  render(<Login />);

  const emailInput = screen.getByLabelText('Email : ');
  const passwordInput = screen.getByLabelText('Password : ');

  fireEvent.change(emailInput, { target: { value: 'test@gmail.com' } });
  fireEvent.change(passwordInput, { target: { value: 'onepassword' } });

  expect(emailInput.value).toBe('test@gmail.com');
  expect(passwordInput.value).toBe('onepassword');
});
