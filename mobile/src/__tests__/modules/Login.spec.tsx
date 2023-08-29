import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import LoginScreen from '../../modules/auth/login'; // Verifique o caminho correto para o seu arquivo

const mockHandleLogin = jest.fn(); // Mock da função de autenticação

test('renders username and password inputs', () => {
    const {getByLabelText} = render(<LoginScreen handleLogin={mockHandleLogin}/>);

    const usernameInput = getByLabelText('Username');
    const passwordInput = getByLabelText('Password');

    expect(usernameInput).toBeTruthy();
    expect(passwordInput).toBeTruthy();
});

test('handleLogin is called with correct username and password', () => {
    const { getByLabelText, getByText } = render(<LoginScreen handleLogin={mockHandleLogin} />);

    const usernameInput = getByLabelText('Username');
    const passwordInput = getByLabelText('Password');
    const loginButton = getByText('Login');

    fireEvent.changeText(usernameInput, 'user123'); // Use fireEvent.changeText para simular a alteração de texto em TextInput
    fireEvent.changeText(passwordInput, 'password123');
    fireEvent.press(loginButton);

    expect(mockHandleLogin).toHaveBeenCalledWith('user123', 'password123');
});