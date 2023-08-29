import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {TextInput, Button} from '@react-native-material/core';

interface IProps {
    handleLogin: (email: string, password: string) => void;
}
const LoginScreen = ({handleLogin}: IProps) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


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
            <Button onPress={() => handleLogin(username, password)} title={'Login'}/>
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