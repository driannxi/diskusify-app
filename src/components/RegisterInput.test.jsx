/**
 * test scenario for RegisterInput component
 *
 * - RegisterInput component
 *  - should handle name typing correctly
 *  - should handle email typing correctly
 *  - should handle password typing correctly
 *  - should call onRegister function when register button is clicked
 */

import { describe, it, expect, vi, afterEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RegisterInput from './RegisterInput';

describe('RegisterInput component', () => {
  afterEach(() => {
    cleanup();
  });

  it('should handle name typing correctly', async () => {
    // arrange
    render(<RegisterInput onRegister={() => {}} />);
    const nameInput = screen.getByPlaceholderText('Masukkan nama lengkap Anda');

    // action
    await userEvent.type(nameInput, 'John Doe');

    // assert
    expect(nameInput).toHaveValue('John Doe');
  });

  it('should handle email typing correctly', async () => {
    // arrange
    render(<RegisterInput onRegister={() => {}} />);
    const emailInput = screen.getByPlaceholderText('nama@email.com');

    // action
    await userEvent.type(emailInput, 'john@example.com');

    // assert
    expect(emailInput).toHaveValue('john@example.com');
  });

  it('should handle password typing correctly', async () => {
    // arrange
    render(<RegisterInput onRegister={() => {}} />);
    const passwordInput = screen.getByPlaceholderText('Buat kata sandi minimal 8 karakter');

    // action
    await userEvent.type(passwordInput, 'password123');

    // assert
    expect(passwordInput).toHaveValue('password123');
  });

  it('should call onRegister function when register button is clicked', async () => {
    // arrange
    const mockRegister = vi.fn();
    render(<RegisterInput onRegister={mockRegister} />);

    const nameInput = screen.getByPlaceholderText('Masukkan nama lengkap Anda');
    const emailInput = screen.getByPlaceholderText('nama@email.com');
    const passwordInput = screen.getByPlaceholderText('Buat kata sandi minimal 8 karakter');
    const registerButton = screen.getByRole('button', { name: /Daftar Akun Sekarang/i });

    // action
    await userEvent.type(nameInput, 'John Doe');
    await userEvent.type(emailInput, 'john@example.com');
    await userEvent.type(passwordInput, 'password123');
    await userEvent.click(registerButton);

    // assert
    expect(mockRegister).toHaveBeenCalledWith({
      name: 'John Doe',
      email: 'john@example.com',
      password: 'password123',
    });
  });
});
