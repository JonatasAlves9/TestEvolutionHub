import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {TextInput, Button, HStack, Banner} from '@react-native-material/core';

interface IProps {
    handleLogin: (email: string, password: string) => void;
}

const LoginScreen = ({handleLogin}: IProps) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    return (
        <View style={styles.container}>

            <TextInput
                label="Username"
                value={username}
                accessibilityLabel="Username"
                onChangeText={setUsername}
            />
            <TextInput
                label="Password"
                accessibilityLabel="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Button onPress={() => {
                if (username === 'jonatas' && password === '123456') {
                    setError('');
                    handleLogin(username, password)
                } else {
                    setError('Invalid credentials. Please try again.');
                }
            }} title={'Login'} />
            {
                error && (
                    <Banner
                        text={error}
                        buttons={
                            <HStack spacing={2}>
                                <Button onPress={() => setError('')} key="learn-more" variant="text" title="Dimiss" compact/>
                            </HStack>
                        }
                    />
                )
            }

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 16,
    },
});

export default LoginScreen;