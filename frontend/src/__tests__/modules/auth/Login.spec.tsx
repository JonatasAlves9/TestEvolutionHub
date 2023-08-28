import React from 'react';
import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import {Login} from '../../../modules/auth/login';
import {MemoryRouter, Route, Routes} from 'react-router-dom';
import {Home} from "../../../modules/home"; // Import MemoryRouter for testing routing

const mockLogin = jest.fn();

test('renders login form correctly', () => {
    render(
        <MemoryRouter>
            <Login login={mockLogin}/>
        </MemoryRouter>
    );
    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Password');
    const loginButton = screen.getByRole('button', {name: 'Login'});

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
});

test('handleLogin is called with correct email and password', () => {
    const {getByLabelText, getByText} = render(
        <MemoryRouter>
            <Login login={mockLogin}/>
        </MemoryRouter>
    );

    const emailInput = getByLabelText('Email');
    const passwordInput = getByLabelText('Password');
    const loginButton = getByText('Login');

    fireEvent.change(emailInput, {target: {value: 'user@example.com'}});
    fireEvent.change(passwordInput, {target: {value: 'password123'}});
    fireEvent.click(loginButton);

    expect(mockLogin).toHaveBeenCalledWith('user@example.com', 'password123');
});

test('displays error message on incorrect login', () => {
    render(
        <MemoryRouter>
            <Login login={mockLogin}/>
        </MemoryRouter>
    );
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

test('redirects to home after successful login', async () => {
    // Mock the login function
    const mockLogin = jest.fn();
    const root = document.createElement('div');
    document.body.appendChild(root);
    // Render the component inside MemoryRouter
    render(
        <MemoryRouter initialEntries={["/"]}>
            <Routes>
                <Route path="/" element={<Login login={mockLogin}/>}/>
                <Route path="/home" element={<Home/>}/>
            </Routes>
        </MemoryRouter>
    );

    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Password');
    const loginButton = screen.getByRole('button', {name: 'Login'});

    // Simulate user input
    fireEvent.change(emailInput, {target: {value: 'user@example.com'}});
    fireEvent.change(passwordInput, {target: {value: 'password123'}});

    // Simulate clicking the login button
    fireEvent.click(loginButton);

    const messageHome = screen.getByText('Welcome to the Home Page');
    expect(messageHome).toBeInTheDocument();
});
