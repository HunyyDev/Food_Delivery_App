/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import AuthProvider from './src/contexts/AuthContext';
import React from 'react';

import Test from './testingcode';

const Wrap = () =>
{
    return(
        <AuthProvider>
            <App/>
        </AuthProvider>
    )
}


AppRegistry.registerComponent(appName, () => Test);
