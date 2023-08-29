import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import LoginScreen from '../../modules/auth/login'; // Verifique o caminho correto para o seu arquivo

test('renders username and password inputs', () => {
    const {getByLabelText} = render(<LoginScreen/>);

    const usernameInput = getByLabelText('Username');
    const passwordInput = getByLabelText('Password');

    expect(usernameInput).toBeTruthy();
    expect(passwordInput).toBeTruthy();
});

