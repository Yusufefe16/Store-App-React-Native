/**
 * Sample React Native Router
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Products from './pages/Products';
import Detail from './pages/Detail';
import Login from './pages/Login';
import {useDispatch, useSelector} from 'react-redux';
import Loading from './components/Loading';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons.js';

const Stack = createStackNavigator();

interface RootState {
    user: any;
    isAuthLoading: boolean;
}

const Router = () => {
    const userSession = useSelector((state: RootState) => state.user);
    const isAuthLoading = useSelector((state: RootState) => state.isAuthLoading);
    const dispatch = useDispatch();


  return (
    <NavigationContainer>
            {isAuthLoading ?
                (<Loading />) :
                !userSession ?
                (
                    <Stack.Navigator>
                        <Stack.Screen name="LoginPage" component={Login} options={{
                        headerShown: false,
                        title: 'Login',
                        headerStyle: {
                            backgroundColor: '#64b5f6',
                        },
                        headerTintColor: '#ffffff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                    }} /></Stack.Navigator>) :
                        <Stack.Navigator>
                            <Stack.Screen name="ProductsPage" component={Products} options={{
                            title: 'Products',
                            headerStyle: {
                                backgroundColor: '#64b5f6',
                            },
                            headerTintColor: '#ffffff',
                            headerTitleStyle: {
                                fontWeight: 'bold',
                            },
                            headerRight: () => (<Icon name="logout" size={30} color="#ffffff" onPress={() => dispatch({type: 'REMOVE_USER'})} />),
                            }} />
                            <Stack.Screen name="DetailPage" component={Detail} options={{
                            title: 'Detail',
                            headerStyle: {
                                backgroundColor: '#64b5f6',
                            },
                            headerTintColor: '#ffffff',
                            headerTitleStyle: {
                                fontWeight: 'bold',
                            },}}/>
                        </Stack.Navigator>
                    }
    </NavigationContainer>
  );
};

export default Router;
