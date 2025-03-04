import React from 'react';
import { View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

const Error = () => {
  return (
      <View style={styles.container}>
        <LottieView
            source={require('../../assets/error.json')}
            autoPlay
            loop
            style={styles.animation}
        />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  animation: {
    width: 500,
    height: 500,
  },
});

export default Error;
