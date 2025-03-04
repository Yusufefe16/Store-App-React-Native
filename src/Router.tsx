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

const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
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
            }} />
            <Stack.Screen name="DetailPage" component={Detail} options={{
                title: 'Detail',
                headerStyle: {
                    backgroundColor: '#64b5f6',
                },
                headerTintColor: '#ffffff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }} />
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
