import React from 'react';
import { View, TextInput } from 'react-native';
import styles from './Input.style.tsx';

const Input = ({ placeholder, onChangeText }: { placeholder: string, onChangeText: any }) => {
    return (
        <View style={styles.container}>
            <TextInput placeholder={placeholder} onChangeText={onChangeText} />
        </View>
    );
};

export default Input;
