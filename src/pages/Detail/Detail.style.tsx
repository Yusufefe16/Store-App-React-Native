import {Dimensions, StyleSheet} from 'react-native';

const deviceSize = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    image: {
        width: deviceSize.width * 0.8,
        height: deviceSize.height / 3,
        borderRadius: 10,
        resizeMode: 'contain',
        marginBottom: 16,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 8,
        textAlign: 'center',
    },
    description: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
        marginBottom: 12,
        paddingHorizontal: 16,
    },
    price: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#E63946',
        marginTop: 10,
    },
});
