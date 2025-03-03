import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        borderWidth: 1,
        backgroundColor: '#eeeeee',
        margin: 10,
        borderRadius: 10,
        flexDirection: 'row',
    }
    ,image: {
        width: 100,
        minHeight: 100,
        resizeMode: 'contain',
        backgroundColor: 'white',
        borderRadius: 10,
        margin: 10,
    }
    ,body_container: {
        backgroundColor: 'white',
        flex: 1,
        padding: 10,
        borderRadius: 10,
        justifyContent: 'space-between',
        margin: 10,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    price: {
        textAlign: 'right',
        fontSize: 16,
        fontStyle: 'italic',
    },

});
