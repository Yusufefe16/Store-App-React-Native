import React from 'react';
import { View, TextInput } from 'react-native';
import styles from './Input.style.tsx';

const Input = ({ placeholder, value, onChangeText }: { placeholder: string, value: string, onChangeText: any }) => {
    return (
        <View style={styles.container}>
            <TextInput placeholder={placeholder} onChangeText={onChangeText} value={value} />
        </View>
    );
};

export default Input;
