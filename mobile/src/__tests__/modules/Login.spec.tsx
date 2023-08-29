import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import LoginScreen from '../../modules/auth/login';

const mockHandleLogin = jest.fn();

test('renders username and password inputs', () => {
    const {getByLabelText} = render(<LoginScreen handleLogin={mockHandleLogin}/>);

    const usernameInput = getByLabelText('Username');
    const passwordInput = getByLabelText('Password');

    expect(usernameInput).toBeTruthy();
    expect(passwordInput).toBeTruthy();
});

test('handleLogin is called with correct username and password', () => {
    const {getByLabelText, getByText} = render(<LoginScreen handleLogin={mockHandleLogin}/>);

    const usernameInput = getByLabelText('Username');
    const passwordInput = getByLabelText('Password');
    const loginButton = getByText('Login');

    fireEvent.changeText(usernameInput, 'jonatas');
    fireEvent.changeText(passwordInput, '123456');
    fireEvent.press(loginButton);

    expect(mockHandleLogin).toHaveBeenCalledWith('jonatas', '123456');
});

test('displays error message on incorrect login', () => {
    const {getByLabelText, getByTestId, getByText} = render(<LoginScreen handleLogin={mockHandleLogin}/>);

    const usernameInput = getByLabelText('Username');
    const passwordInput = getByLabelText('Password');
    const loginButton = getByText('Login');

    expect(usernameInput).toBeTruthy();
    expect(passwordInput).toBeTruthy();

    fireEvent.press(loginButton);

    const errorMessage = getByText('Invalid credentials. Please try again.');
    expect(errorMessage).toBeDefined();
});
