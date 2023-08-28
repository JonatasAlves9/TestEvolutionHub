import React, {useState} from 'react';
import {Button, Container, FormLabel, Input} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom";

interface IProps {
    login: (email: string, password: string) => void;
}

export const Login = ({login}: IProps) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const handleLogin = () => {
        // Basic validation
        if (email === 'user@example.com' && password === 'password123') {
            setError('');
            navigate('home');
            login(email, password);
        } else {
            setError('Invalid credentials. Please try again.');
        }
    };

    return (
        <Container>
            <FormLabel htmlFor={'email'}>Email</FormLabel>
            <Input type="email" id="email" onChange={(e) => setEmail(e.target.value)}/>
            <FormLabel htmlFor={'password'}>Password</FormLabel>
            <Input type="password" id="password" onChange={(e) => setPassword(e.target.value)}/>
            <Button onClick={handleLogin}>Login</Button>
            {error && <div style={{ color: 'red' }}>{error}</div>}
        </Container>
    )
}
