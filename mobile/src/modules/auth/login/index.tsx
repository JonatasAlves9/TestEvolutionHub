import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {TextInput, Button} from '@react-native-material/core';

const LoginScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Lógica de autenticação aqui
    };

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
            <Button onPress={handleLogin} title={'Login'}/>
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