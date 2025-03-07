import React from 'react';
import {TouchableOpacity, Text, ActivityIndicator} from 'react-native';
import styles from './Button.style.tsx';

const Button = ({ text, onPress, loading }: { text: string, onPress: any, loading: boolean}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container} disabled={loading}>
            {loading ? (<ActivityIndicator color={'white'} />) : (<Text style={styles.title}>{text}</Text>)}
        </TouchableOpacity>
    );
};

export default Button;
