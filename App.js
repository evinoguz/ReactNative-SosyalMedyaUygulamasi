import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import GirisYap from './Screen/Anasayfa';
import UyeOl from './Screen/UyeOl';
import Login from './Screen/Login'; 
import Paylasim from './Screen/Paylasim'; 



const AppNavigator = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            header: null,
        },
    },
    Anasayfa: {
        screen: GirisYap,
        navigationOptions: {
            header: null,  
        },
    },
    UyeOl: {
        screen: UyeOl,
        navigationOptions: {
            header: null,
        },
    },
    Paylasim: {
        screen: Paylasim,
        navigationOptions: {
            header: null,
        },
    },
  
     
});

export default createAppContainer(AppNavigator);
 