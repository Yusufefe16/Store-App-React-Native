import React from 'react';
import {View, SafeAreaView, Image} from 'react-native';
import styles from './Login.style.tsx';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {Formik} from 'formik';

const Login = () => {

    function handleLogin(values: any) {
        console.log(values);
    }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo_container}>
        <Image style={styles.logo} source={require('../../assets/login-logo.png')}/>
      </View>
        <Formik initialValues={{username: '', password: ''}} onSubmit={handleLogin}>
            {({handleSubmit,handleChange,values})=>(
                <View style={styles.body_container}>
                    <Input isSecure={false} iconName={"account"} placeholder="Kullanıcı adını giriniz..."  onChangeText={handleChange('username')} value={values.username}/>
                    <Input isSecure={true} iconName={"key"} placeholder="Şifrenizi giriniz..." onChangeText={handleChange('password')} value={values.password}/>
                    <Button text="Giriş Yap" onPress={handleSubmit} />
                </View>
            )}
        </Formik>
    </SafeAreaView>
  );
};

export default Login;
