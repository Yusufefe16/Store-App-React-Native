import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './Detail.style.tsx';
import {RouteProp, useRoute} from '@react-navigation/native';
import useFetch from '../../Hooks/useFetch';
import Config from 'react-native-config';
import Error from '../../components/Error';
import Loading from '../../components/Loading';

type RootStackParamList = {
    DetailPage: { id: number };
};

type DetailScreenRouteProp = RouteProp<RootStackParamList, 'DetailPage'>;

const Detail: React.FC = () => {
    const route = useRoute<DetailScreenRouteProp>();
    const { id } = route.params;
    console.log({id});
    const {data, error, loading} = useFetch(`${Config.API_PRODUCT_URL}/${id}`);

    if (error) {
        return (
            <Error />
        );
    }

    if (loading) {
        return (
            <Loading />
        );
    }
    return (
    <View style={styles.container}>
        {
            data.title !== undefined ? (
                <View>
                    <Image style={styles.image} source={{uri: data.image}}/>
                    <Text style={styles.title}>{data.title}</Text>
                    <Text style={styles.description}>{data.description}</Text>
                    <Text style={styles.price}>{data.price} TL</Text>
                </View>
            ) : (<Error />)
        }
    </View>
  );
};

export default Detail;
