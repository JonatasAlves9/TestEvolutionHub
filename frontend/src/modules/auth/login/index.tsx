import React, {useState} from 'react';
import {Button, Container, FormLabel, Input} from "@chakra-ui/react";


export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = (email: string, password: string) => {
        // Your login logic here
    };

    const handleLogin = () => {
        // Call the internal login function with email and password
        login(email, password);
    };
    return (
        <Container>
            <FormLabel htmlFor={'email'}>Email</FormLabel>
            <Input type="email" id="email" onChange={(e) => setEmail(e.target.value)}/>
            <FormLabel htmlFor={'password'} >Password</FormLabel>
            <Input type="password" id="password" onChange={(e) => setPassword(e.target.value)}/>
            <Button onClick={handleLogin}>Login</Button>
        </Container>
    )
}