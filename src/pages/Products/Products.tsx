import React from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import styles from './Products.style.tsx';
import ProductCard from '../../components/ProductCard';
import Config from 'react-native-config';
import useFetch from '../../Hooks/useFetch';
import Error from '../../components/Error';
import Loading from '../../components/Loading';
import {NavigationProp} from '@react-navigation/native';


type ProductsProps = {
    navigation: NavigationProp<any>;
};

const Products: React.FC<ProductsProps> = ({ navigation }) => {

    const {data, error, loading} = useFetch(`${Config.API_PRODUCT_URL}`);

    const handleProductSelect = (id: number) => {
        navigation.navigate('DetailPage', {id});
    };

    const renderProduct = ({item}: { item: any }) => <ProductCard product={item} onSelect={()=> handleProductSelect(item.id)} />;

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
    <SafeAreaView style={styles.container}>
      <FlatList data={data} renderItem={renderProduct} />
    </SafeAreaView>
  );
};

export default Products;
