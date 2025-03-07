import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './Button.style.tsx';

const Button = ({ text, onPress }: { text: string, onPress: any}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Text style={styles.title}>{text}</Text>
        </TouchableOpacity>
    );
};

export default Button;
