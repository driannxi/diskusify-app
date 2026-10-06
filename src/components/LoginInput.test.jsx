/**
 * test scenario for LoginInput component
 *
 * - LoginInput component
 *  - should handle email typing correctly
 *  - should handle password typing correctly
 *  - should call onLogin function when login button is clicked
 */

import { describe, it, expect, vi, afterEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginInput from './LoginInput';

describe('LoginInput component', () => {
  afterEach(() => {
    cleanup();
  });

  it('should handle email typing correctly', async () => {
    // arrange
    render(<LoginInput onLogin={() => {}} />);
    const emailInput = screen.getByPlaceholderText('nama@email.com');

    // action
    await userEvent.type(emailInput, 'test@example.com');

    // assert
    expect(emailInput).toHaveValue('test@example.com');
  });

  it('should handle password typing correctly', async () => {
    // arrange
    render(<LoginInput onLogin={() => {}} />);
    const passwordInput = screen.getByPlaceholderText('Masukkan kata sandi');

    // action
    await userEvent.type(passwordInput, 'password123');

    // assert
    expect(passwordInput).toHaveValue('password123');
  });

  it('should call onLogin function when login button is clicked', async () => {
    // arrange
    const mockLogin = vi.fn();
    render(<LoginInput onLogin={mockLogin} />);

    const emailInput = screen.getByPlaceholderText('nama@email.com');
    const passwordInput = screen.getByPlaceholderText('Masukkan kata sandi');
    const loginButton = screen.getByRole('button', { name: /Masuk ke Akun/i });

    // action
    await userEvent.type(emailInput, 'test@example.com');
    await userEvent.type(passwordInput, 'password123');
    await userEvent.click(loginButton);

    // assert
    expect(mockLogin).toHaveBeenCalledWith({
      email: 'test@example.com',
      password: 'password123',
    });
  });
});
