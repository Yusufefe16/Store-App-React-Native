import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './Button.style.tsx';

const Button = ({ text }: { text: string }) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.title}>{text}</Text>
        </TouchableOpacity>
    );
};

export default Button;
