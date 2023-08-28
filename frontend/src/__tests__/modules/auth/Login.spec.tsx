import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import {Login} from '../../../modules/auth/login';

const mockLogin = jest.fn();

test('renders login form correctly', () => {
    render(<Login login={mockLogin}/>);
    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Password');
    const loginButton = screen.getByRole('button', {name: 'Login'});

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
});

test('handleLogin is called with correct email and password', () => {
    const {getByLabelText, getByText} = render(<Login login={mockLogin}/>);

    const emailInput = getByLabelText('Email');
    const passwordInput = getByLabelText('Password');
    const loginButton = getByText('Login');

    fireEvent.change(emailInput, {target: {value: 'test@example.com'}});
    fireEvent.change(passwordInput, {target: {value: 'password123'}});
    fireEvent.click(loginButton);

    expect(mockLogin).toHaveBeenCalledWith('test@example.com', 'password123');
});

test('displays error message on incorrect login', () => {
    render(<Login login={mockLogin}/>);
    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Password');
    const loginButton = screen.getByRole('button', {name: 'Login'});

    // Simule a entrada de dados nos campos de e-mail e senha
    fireEvent.change(emailInput, {target: {value: 'invalid@example.com'}});
    fireEvent.change(passwordInput, {target: {value: 'wrongpassword'}});

    // Simule o clique no botão de login
    fireEvent.click(loginButton);

    // Verifique se a mensagem de erro é exibida
    const errorMessage = screen.getByText('Invalid credentials. Please try again.');
    expect(errorMessage).toBeInTheDocument();
});
