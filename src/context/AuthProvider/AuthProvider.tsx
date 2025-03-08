import {Provider } from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducer.tsx';
import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


const AuthProvider = ({children}: any) => {
    const [user, setUser] = useState<any>(null);
    const [isAuthLoading, setIsAuthLoading] = useState<boolean>(true);

    useEffect(()=>{
        AsyncStorage.getItem('@USER').then(userSession => {
            userSession && setUser(JSON.parse(userSession));
            setIsAuthLoading(false);
        });
    },[]);

    const store = createStore(reducer,{user, isAuthLoading});
    return <Provider store={store}>{children}</Provider>;
};

export default AuthProvider;
