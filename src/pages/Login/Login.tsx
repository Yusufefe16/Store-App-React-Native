import React, {useEffect} from 'react';
import {View, SafeAreaView, Image, Alert} from 'react-native';
import styles from './Login.style.tsx';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {Formik} from 'formik';
import usePost from '../../Hooks/usePost';
import Config from 'react-native-config';
import {useDispatch} from 'react-redux';



const Login = () => {
    const {data, loading, error, post} = usePost();
    const dispatch = useDispatch();
    function handleLogin(values: any) {
        post(`${Config.API_AUTH_URL}/login`, {
            username: values.username,
            password: values.password,
        });
        console.log(`${Config.API_AUTH_URL}/login`, values);
    }

    useEffect(() => {
        if (error) {
            Alert.alert('Dükkan', 'Bir hata oluştu!');
        }
    }, [error]);

    useEffect(() => {
        if (data) {
            if (data.status === 'Error') {
                Alert.alert('Dükkan', 'Kullanıcı Bulunamadı');
            } else {
                Alert.alert('Dükkan', 'Giriş başarılı!');
                dispatch({type: 'SET_USER', payload: {user: data}});
            }
        }
    }, [data]);

    console.log(data);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo_container}>
        <Image style={styles.logo} source={require('../../assets/login-logo.png')}/>
      </View>
        <Formik initialValues={{username: '', password: ''}} onSubmit={handleLogin}>
            {({handleSubmit,handleChange,values})=>(
                <View style={styles.body_container}>
                    <Input isSecure={false} iconName={'account'} placeholder="Kullanıcı adını giriniz..."  onChangeText={handleChange('username')} value={values.username}/>
                    <Input isSecure={true} iconName={'key'} placeholder="Şifrenizi giriniz..." onChangeText={handleChange('password')} value={values.password}/>
                    <Button loading={loading} text="Giriş Yap" onPress={handleSubmit} />
                </View>
            )}
        </Formik>
    </SafeAreaView>
  );
};

export default Login;
