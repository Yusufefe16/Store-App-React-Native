import React from 'react';
import {View, Text, SafeAreaView, Image} from 'react-native';
import styles from './Login.style.tsx';
import Input from '../../components/Input';
import Button from '../../components/Button';

const Login = () => {
    const onChangeText = (text: string) => {
        console.log(text);
    };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo_container}>
        <Image style={styles.logo} source={require('../../assets/login-logo.png')}/>
      </View>
      <View style={styles.body_container}>
          <Input placeholder="Kullanıcı adını giriniz..."  onChangeText={onChangeText}/>
          <Input placeholder="Şifrenizi giriniz..." onChangeText={onChangeText}/>
          <Button text="Giriş Yap" />
      </View>
    </SafeAreaView>
  );
};

export default Login;
