import React, {useEffect} from 'react';
import {View, Text, SafeAreaView, FlatList} from 'react-native';
import styles from './Products.style.tsx';
import ProductCard from "../../components/ProductCard";
import axios from "axios";
import Config from "react-native-config";

const Products = () => {

    const [data, setData] = React.useState<any>([]);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async () => {
        await axios.get(`${Config.API_URL}`)
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const renderProduct = ({item}: { item: any }) => <ProductCard product={item} />;


  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={data} renderItem={renderProduct} />
    </SafeAreaView>
  );
};

export default Products;
