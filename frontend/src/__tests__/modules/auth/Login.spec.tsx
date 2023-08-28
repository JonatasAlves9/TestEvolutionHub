import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import {Login} from '../../../modules/auth/login';

test('renders login form correctly', () => {
    render(<Login/>);
    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Password');
    const loginButton = screen.getByRole('button', {name: 'Login'});

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
});

test('submits login form with correct data', () => {
    const loginMock = jest.fn(); // Create a mock function

    const { getByLabelText, getByRole } = render(<Login />);

    const emailInput = getByLabelText('Email');
    const passwordInput = getByLabelText('Password');
    const loginButton = getByRole('button', { name: 'Login' });

    // Simulate user input
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    // Simulate clicking the login button
    fireEvent.click(loginButton);

    // Verify that the mock login function was called with the correct data
    expect(loginMock).toHaveBeenCalledWith('test@example.com', 'password123');
});