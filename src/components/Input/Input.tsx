import React from 'react';
import { View, TextInput } from 'react-native';
import styles from './Input.style.tsx';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons.js';

const Input = ({ placeholder, value, onChangeText, iconName, isSecure }: { placeholder: string, value: string, onChangeText: any, iconName: string, isSecure:boolean }) => {
    return (
        <View style={styles.container}>
            <TextInput placeholder={placeholder} onChangeText={onChangeText} value={value} secureTextEntry={isSecure}/>
            <Icon name={iconName} size={30} color="gray"/>
        </View>
    );
};

export default Input;
