import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './ProductCard.style.tsx';

const ProductCard = ({product}: { product: any }) => {
  return (
    <View style={styles.container}>
      <Image
         style={styles.image}
         source={{uri: product.image}}
      />
        <View style={styles.body_container}>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.price}>{product.price}</Text>
        </View>
    </View>
  );
};

export default ProductCard;
