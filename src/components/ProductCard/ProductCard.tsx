import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import styles from './ProductCard.style.tsx';

const ProductCard = ({product, onSelect}: { product: any, onSelect: any }) => {
  return (
      <TouchableWithoutFeedback onPress={onSelect}>
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
      </TouchableWithoutFeedback>
  );
};

export default ProductCard;
