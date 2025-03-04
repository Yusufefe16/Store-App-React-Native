import React from 'react';
import {SafeAreaView, FlatList, ActivityIndicator, Text} from 'react-native';
import styles from './Products.style.tsx';
import ProductCard from '../../components/ProductCard';
import Config from 'react-native-config';
import useFetch from '../../Hooks/useFetch';

const Products = () => {

    const {data, error, loading} = useFetch(`${Config.API_URL}`);

    const renderProduct = ({item}: { item: any }) => <ProductCard product={item} />;

    if (error) {
        return (
            <SafeAreaView style={styles.container}>
                <Text >Bir hata oluştu</Text>
            </SafeAreaView>
        );
    }

    if (loading) {
        return (
            <ActivityIndicator size={'large'} />
        );
    }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={data} renderItem={renderProduct} />
    </SafeAreaView>
  );
};

export default Products;
